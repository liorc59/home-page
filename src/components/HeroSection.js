import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  Groups as GroupsIcon,
  Campaign as CampaignIcon,
  Category as CategoryIcon
} from '@mui/icons-material';
import ScreenshotFrame from './ScreenshotFrame';

const HeroSection = () => (
  <Box sx={{
    pt: { xs: 14, md: 18 },
    pb: { xs: 6, md: 10 },
    background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)'
  }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
        <Typography variant="h1" sx={{
          fontSize: { xs: '2.2rem', sm: '2.75rem', md: '3.5rem' },
          fontWeight: 800,
          color: '#0f172a',
          mb: 3,
          lineHeight: 1.1
        }}>
          Stop Scrambling for Competitive Intel.
          <br />
          <Box component="span" sx={{ background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Start Knowing.
          </Box>
        </Typography>
        <Typography sx={{
          color: '#64748b',
          fontWeight: 400,
          mb: 4,
          lineHeight: 1.7,
          fontSize: { xs: '1.05rem', md: '1.2rem' },
          maxWidth: 680,
          mx: 'auto'
        }}>
          MiAmar monitors your competitors, prospects, and market 24/7 — surfacing the signals
          that matter, so PMMs and PMs always walk in prepared.
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            size="large"
            href="#demo"
            endIcon={<ArrowForwardIcon />}
            sx={{
              px: 4, py: 1.5, textTransform: 'none', fontWeight: 700, fontSize: '1rem', borderRadius: 2,
              background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
              boxShadow: '0 8px 24px rgba(30, 64, 175, 0.25)',
              '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)', boxShadow: '0 12px 32px rgba(30, 64, 175, 0.35)' }
            }}
          >
            Book a Demo
          </Button>
          <Button
            variant="outlined"
            size="large"
            href="#platform"
            sx={{
              px: 4, py: 1.5, textTransform: 'none', fontWeight: 600, fontSize: '1rem', borderRadius: 2,
              borderColor: '#cbd5e1', color: '#475569',
              '&:hover': { borderColor: '#1e40af', color: '#1e40af', bgcolor: '#f8fafc' }
            }}
          >
            See the Platform
          </Button>
        </Box>
      </Box>

      {/* Hero screenshot */}
      <Box sx={{ maxWidth: 960, mx: 'auto', mb: 5 }}>
        <ScreenshotFrame src="/screenshots/market-at-a-glance.png" alt="MiAmar market intelligence dashboard" />
      </Box>

      {/* Trust bar */}
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: { xs: 2, md: 4 }, flexWrap: 'wrap', opacity: 0.7 }}>
        <Typography sx={{ color: '#64748b', fontSize: '0.9rem', fontWeight: 500 }}>
          Built for Product Marketing and Product teams
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <CampaignIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
          <CategoryIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
          <GroupsIcon sx={{ color: '#94a3b8', fontSize: 20 }} />
        </Box>
      </Box>
    </Container>
  </Box>
);

export default HeroSection;
