import React, { useState, useEffect, useCallback } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import {
  ArrowForward as ArrowForwardIcon,
  Groups as GroupsIcon,
  Campaign as CampaignIcon,
  Category as CategoryIcon
} from '@mui/icons-material';
const heroScreenshots = [
  { src: '/screenshots/market-at-a-glance.png', alt: 'Market intelligence dashboard', label: 'Market at a Glance' },
  { src: '/screenshots/competitor-card.png', alt: 'Competitor card with AI insights', label: 'Competitor Cards' },
  { src: '/screenshots/sales-battlecard.png', alt: 'AI-generated sales battlecard', label: 'Sales Battlecards' },
  { src: '/screenshots/newsletter.png', alt: 'Weekly competitive intelligence newsletter', label: 'CI Newsletter' },
];

const HeroSection = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % heroScreenshots.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
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

        {/* Screenshot gallery */}
        <Box sx={{ maxWidth: 960, mx: 'auto', mb: 3 }}>
          {/* Label pills */}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3, flexWrap: 'wrap' }}>
            {heroScreenshots.map((s, i) => (
              <Box
                key={i}
                onClick={() => { setActive(i); setPaused(true); setTimeout(() => setPaused(false), 8000); }}
                sx={{
                  px: 2, py: 0.75,
                  borderRadius: 5,
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  bgcolor: active === i ? '#1e40af' : '#f1f5f9',
                  color: active === i ? '#fff' : '#64748b',
                  border: '1px solid',
                  borderColor: active === i ? '#1e40af' : '#e2e8f0',
                  '&:hover': {
                    bgcolor: active === i ? '#1e3a8a' : '#e2e8f0',
                  }
                }}
              >
                {s.label}
              </Box>
            ))}
          </Box>

          {/* Crossfade frame — fixed aspect ratio */}
          <Box sx={{
            position: 'relative',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
            border: '1px solid #e2e8f0',
          }}>
            {/* Browser chrome bar */}
            <Box sx={{
              bgcolor: '#f1f5f9',
              px: 2, py: 1.2,
              display: 'flex',
              alignItems: 'center',
              gap: 0.8,
              borderBottom: '1px solid #e2e8f0'
            }}>
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ef4444' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#f59e0b' }} />
              <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#22c55e' }} />
            </Box>
            {/* Image area — fixed aspect ratio */}
            <Box sx={{ position: 'relative', aspectRatio: '16/9', bgcolor: '#f8fafc' }}>
              {heroScreenshots.map((s, i) => (
                <Box
                  key={i}
                  component="img"
                  src={s.src}
                  alt={s.alt}
                  sx={{
                    position: 'absolute',
                    top: 0, left: 0,
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top left',
                    opacity: active === i ? 1 : 0,
                    transition: 'opacity 0.6s ease-in-out',
                  }}
                />
              ))}
            </Box>
          </Box>
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
};

export default HeroSection;
