import React, { useState, useEffect } from 'react';
import {
  AppBar, Toolbar, Box, Typography, Button, Link,
  IconButton, Drawer, List, ListItem, ListItemText, Slide
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';

const navLinks = [
  { label: 'Platform', href: '#platform' },
  { label: 'Use Cases', href: '#use-cases' },
  { label: 'How It Works', href: '#how-it-works' },
];

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowMobileCta(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="img"
              src="/logo.png"
              alt="MiAmar"
              sx={{ width: 36, height: 36, borderRadius: 1 }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <Typography variant="h6" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              MiAmar
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link key={link.label} href={link.href} underline="none" sx={{ color: '#475569', fontWeight: 500, fontSize: '0.95rem', '&:hover': { color: '#1e40af' } }}>
                {link.label}
              </Link>
            ))}
            <Button
              variant="contained"
              size="small"
              href="#demo"
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                px: 2.5,
                background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
              }}
            >
              Book a Demo
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
            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.label} component="a" href={link.href} onClick={() => setDrawerOpen(false)}
                sx={{ borderRadius: 1, '&:hover': { bgcolor: '#f1f5f9' } }}>
                <ListItemText primary={link.label} primaryTypographyProps={{ fontWeight: 500, color: '#0f172a' }} />
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            fullWidth
            href="#demo"
            onClick={() => setDrawerOpen(false)}
            sx={{
              mt: 2, textTransform: 'none', fontWeight: 600, py: 1.25,
              background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
              '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
            }}
          >
            Book a Demo
          </Button>
        </Box>
      </Drawer>

      {/* Sticky mobile CTA */}
      <Slide direction="up" in={showMobileCta} mountOnEnter unmountOnExit>
        <Box
          sx={{
            display: { xs: 'block', md: 'none' },
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 1200,
            background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
            px: 2,
            py: 1.5,
            boxShadow: '0 -4px 20px rgba(0,0,0,0.15)'
          }}
        >
          <Button
            variant="contained"
            fullWidth
            href="#demo"
            sx={{
              textTransform: 'none',
              fontWeight: 700,
              fontSize: '1rem',
              py: 1.25,
              bgcolor: '#fff',
              color: '#1e40af',
              borderRadius: 2,
              '&:hover': { bgcolor: '#f1f5f9' }
            }}
          >
            Book a Demo
          </Button>
        </Box>
      </Slide>
    </>
  );
};

export default Navbar;
