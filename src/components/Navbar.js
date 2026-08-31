import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Typography, Button, Link,
  IconButton, Drawer, List, ListItem, ListItemText, ListSubheader, Slide,
  Menu, MenuItem,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon, KeyboardArrowDown as ArrowDownIcon } from '@mui/icons-material';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';

const DEMO = 'https://miamar.io/arena/demo.html';

// The combined "Solutions" dropdown holds both the products and the by-team
// solutions, grouped, so the nav stays short while everything is reachable.
const menuGroups = [
  {
    heading: 'Products',
    items: [
      { label: 'Market Intelligence', to: '/product/market-intelligence' },
      { label: 'MiAmar HR', to: '/product/hr' },
      { label: 'MiAmar Field', to: '/product/field' },
    ],
  },
  {
    heading: 'By team',
    items: [
      { label: 'CI Teams', to: '/solutions/ci-teams' },
      { label: 'PMMs', to: '/solutions/pmm' },
      { label: 'Business Development', to: '/solutions/business-development' },
      { label: 'Product Managers', to: '/solutions/product-managers' },
      { label: 'HR & Talent Teams', to: '/solutions/talent-hr' },
    ],
  },
];

// Simple top-level links shown alongside the dropdown.
const topLinks = [
  { label: 'Pricing', to: '/pricing' },
  { label: 'Compare', to: '/compare/klue-crayon-alternative' },
  { label: 'Try Demo', href: DEMO, external: true },
];

const linkProps = (link) => (
  link.to
    ? { component: RouterLink, to: link.to }
    : { href: link.href, ...(link.external ? { target: '_blank', rel: 'noopener' } : {}) }
);

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const menuOpen = Boolean(menuAnchor);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to the "Get Started" form section (id="demo") on the homepage. From
  // any other page, navigate home first, then scroll once it renders.
  const goGetStarted = () => {
    setDrawerOpen(false);
    const scroll = () => {
      const el = document.getElementById('demo');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    if (location.pathname === '/') {
      scroll();
    } else {
      navigate('/');
      setTimeout(scroll, 350);
    }
  };

  useEffect(() => {
    const handleScroll = () => setShowMobileCta(window.scrollY > 600);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkSx = (external) => ({
    color: external ? '#1e40af' : '#475569',
    fontWeight: external ? 600 : 500,
    fontSize: '0.95rem',
    cursor: 'pointer',
    '&:hover': { color: '#1e40af' },
  });

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Box component={RouterLink} to="/" sx={{ display: 'flex', alignItems: 'center', gap: 1, textDecoration: 'none' }}>
            <Box component="img" src="/logo.png" alt="MiAmar" sx={{ width: 36, height: 36, borderRadius: 1 }}
              onError={(e) => { e.target.style.display = 'none'; }} />
            <Typography variant="h6" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              MiAmar
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            <Link component={RouterLink} to="/" underline="none" sx={linkSx(false)}>Home</Link>

            {/* Combined Products + Solutions dropdown */}
            <Box
              onClick={(e) => setMenuAnchor(e.currentTarget)}
              sx={{ display: 'flex', alignItems: 'center', gap: 0.25, ...linkSx(false) }}
            >
              Solutions
              <ArrowDownIcon sx={{ fontSize: 18, transition: 'transform 0.2s', transform: menuOpen ? 'rotate(180deg)' : 'none' }} />
            </Box>
            <Menu
              anchorEl={menuAnchor}
              open={menuOpen}
              onClose={() => setMenuAnchor(null)}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              slotProps={{ paper: { sx: { mt: 1, minWidth: 230, borderRadius: 2, boxShadow: '0 12px 32px rgba(15,23,42,0.14)' } } }}
            >
              {menuGroups.map((group, gi) => [
                <ListSubheader key={`h-${gi}`} sx={{ fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#94a3b8', lineHeight: 2.2, bgcolor: 'transparent' }}>
                  {group.heading}
                </ListSubheader>,
                ...group.items.map((it) => (
                  <MenuItem key={it.to} component={RouterLink} to={it.to} onClick={() => setMenuAnchor(null)}
                    sx={{ fontSize: '0.92rem', color: '#334155', py: 1, '&:hover': { bgcolor: '#f1f5f9', color: '#1e40af' } }}>
                    {it.label}
                  </MenuItem>
                )),
              ])}
            </Menu>

            {topLinks.map((link) => (
              <Link key={link.label} {...linkProps(link)} underline="none" sx={linkSx(link.external)}>
                {link.label}
              </Link>
            ))}
            <Button variant="contained" size="small" onClick={goGetStarted}
              sx={{ textTransform: 'none', fontWeight: 600, px: 2.5, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' } }}>
              Get Started
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={() => setDrawerOpen(true)} sx={{ color: '#475569' }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
            <IconButton onClick={() => setDrawerOpen(false)}><CloseIcon /></IconButton>
          </Box>
          <List>
            <ListItem component={RouterLink} to="/" onClick={() => setDrawerOpen(false)} sx={{ borderRadius: 1, '&:hover': { bgcolor: '#f1f5f9' } }}>
              <ListItemText primary="Home" primaryTypographyProps={{ fontWeight: 600, color: '#0f172a' }} />
            </ListItem>
            {menuGroups.map((group) => (
              <React.Fragment key={group.heading}>
                <ListSubheader disableSticky sx={{ fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#94a3b8', bgcolor: 'transparent', lineHeight: 2.4 }}>
                  {group.heading}
                </ListSubheader>
                {group.items.map((it) => (
                  <ListItem key={it.to} component={RouterLink} to={it.to} onClick={() => setDrawerOpen(false)} sx={{ borderRadius: 1, pl: 2, '&:hover': { bgcolor: '#f1f5f9' } }}>
                    <ListItemText primary={it.label} primaryTypographyProps={{ fontWeight: 500, color: '#334155', fontSize: '0.92rem' }} />
                  </ListItem>
                ))}
              </React.Fragment>
            ))}
            {topLinks.map((link) => (
              <ListItem key={link.label} {...linkProps(link)} onClick={() => setDrawerOpen(false)} sx={{ borderRadius: 1, mt: 0.5, '&:hover': { bgcolor: '#f1f5f9' } }}>
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: link.external ? 600 : 500, color: link.external ? '#1e40af' : '#0f172a' }} />
              </ListItem>
            ))}
          </List>
          <Button variant="contained" fullWidth onClick={goGetStarted}
            sx={{ mt: 2, textTransform: 'none', fontWeight: 600, py: 1.25, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' } }}>
            Get Started
          </Button>
        </Box>
      </Drawer>

      {/* Sticky mobile CTA */}
      <Slide direction="up" in={showMobileCta} mountOnEnter unmountOnExit>
        <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 1200, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', px: 2, py: 1.5, boxShadow: '0 -4px 20px rgba(0,0,0,0.15)' }}>
          <Button variant="contained" fullWidth href={DEMO} target="_blank" rel="noopener"
            sx={{ textTransform: 'none', fontWeight: 700, fontSize: '1rem', py: 1.25, bgcolor: '#fff', color: '#1e40af', borderRadius: 2, '&:hover': { bgcolor: '#f1f5f9' } }}>
            Get Started
          </Button>
        </Box>
      </Slide>
    </>
  );
};

export default Navbar;
