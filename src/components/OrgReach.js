import React from 'react';
import { Box, Container, Typography, Card, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import {
  HubOutlined as HubIcon,
  Campaign as CampaignIcon,
  TrendingUp as TrendingUpIcon,
  Category as CategoryIcon,
  InsightsOutlined as InsightsIcon,
  Groups as GroupsIcon,
  SouthRounded as DownIcon,
} from '@mui/icons-material';

// The thesis of the site: the CI team owns the arena, and MiAmar makes that
// intelligence accessible to every team in the company — each getting the slice
// they act on. Rendered as a hub (CI) flowing down to the teams it informs.
const recipients = [
  { icon: <CampaignIcon />, team: 'PMMs', gets: 'Self-updating battlecards and a newsletter that writes itself.', to: '/solutions/pmm', c: '#1e40af', bg: '#eff6ff' },
  { icon: <TrendingUpIcon />, team: 'Business Development', gets: 'AI meeting briefs and buying signals, before the call.', to: '/solutions/business-development', c: '#7c3aed', bg: '#faf5ff' },
  { icon: <CategoryIcon />, team: 'Product', gets: 'Competitor feature and roadmap tracking, with history.', to: '/solutions/product-managers', c: '#0d9488', bg: '#f0fdfa' },
  { icon: <InsightsIcon />, team: 'Leadership', gets: 'A weekly executive brief, ready to forward.', to: '/product/market-intelligence', c: '#b45309', bg: '#fffbeb' },
  { icon: <GroupsIcon />, team: 'HR & Talent', gets: 'Hiring surges and exec moves at every tracked company.', to: '/solutions/talent-hr', c: '#0891b2', bg: '#ecfeff' },
];

const OrgReach = () => (
  <Box sx={{ py: { xs: 8, md: 11 }, bgcolor: '#ffffff' }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 6 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.8rem', md: '2.4rem' }, fontWeight: 800, color: '#0f172a', mb: 2, lineHeight: 1.2 }}>
          Your CI team owns the arena.<br />
          <Box component="span" sx={{ background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            The whole company reads it.
          </Box>
        </Typography>
        <Typography sx={{ color: '#64748b', fontSize: '1.1rem', maxWidth: 680, mx: 'auto', lineHeight: 1.7 }}>
          Competitive intelligence shouldn't be trapped in one team's inbox. MiAmar turns a single CI workspace
          into intel every team can act on — with no extra work for the analyst who owns it.
        </Typography>
      </Box>

      {/* CI hub */}
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Card sx={{
          px: 4, py: 3, borderRadius: 3, textAlign: 'center', maxWidth: 420, width: '100%',
          border: 'none', color: '#fff', boxShadow: '0 16px 40px rgba(30,64,175,0.28)',
          background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
        }}>
          <Box sx={{ display: 'inline-flex', p: 1.25, borderRadius: 2, bgcolor: 'rgba(255,255,255,0.18)', mb: 1.5 }}>
            <HubIcon sx={{ fontSize: 30, color: '#fff' }} />
          </Box>
          <Typography sx={{ fontWeight: 800, fontSize: '1.3rem' }}>Your CI Team</Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.95rem', mt: 0.5 }}>
            Owns the arena · sets the filters · curates what matters
          </Typography>
        </Card>
      </Box>

      {/* connector */}
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: { xs: 2.5, md: 3 } }}>
        <Box sx={{ width: 2, height: 28, bgcolor: '#cbd5e1' }} />
        <Box sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.75, px: 1.5, py: 0.5, borderRadius: 5, bgcolor: '#f1f5f9', color: '#64748b', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
          <DownIcon sx={{ fontSize: 16 }} /> Made accessible to every team
        </Box>
      </Box>

      {/* recipients */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(5, 1fr)' }, gap: 2.5 }}>
        {recipients.map((r, i) => (
          <Card key={i} component={RouterLink} to={r.to} sx={{
            p: 2.5, borderRadius: 3, border: '1px solid #e2e8f0', boxShadow: 'none',
            textDecoration: 'none', display: 'flex', flexDirection: 'column',
            transition: 'all 0.25s ease',
            '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.08)', borderColor: r.c },
          }}>
            <Box sx={{ display: 'inline-flex', p: 1, borderRadius: 1.5, bgcolor: r.bg, mb: 1.5, color: r.c, alignSelf: 'flex-start' }}>
              {React.cloneElement(r.icon, { sx: { fontSize: 22, color: r.c } })}
            </Box>
            <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '0.98rem', mb: 0.5 }}>{r.team}</Typography>
            <Typography sx={{ color: '#64748b', fontSize: '0.86rem', lineHeight: 1.55 }}>{r.gets}</Typography>
          </Card>
        ))}
      </Box>

      <Typography sx={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.88rem', mt: 4 }}>
        One arena. One owner.{' '}
        <Link component={RouterLink} to="/solutions/ci-teams" underline="hover" sx={{ color: '#1e40af', fontWeight: 600 }}>
          See how CI teams run it →
        </Link>
      </Typography>
    </Container>
  </Box>
);

export default OrgReach;
