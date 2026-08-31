import React from 'react';
import { Box, Container, Typography, Card, CardContent, Link } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

// "One system, three surfaces" — the three MiAmar products. The same engine
// filters your daily feed, builds battlecards, preps meetings, and tracks
// hiring signals. Icons live in /public/icons (provided by the brand kit).
const surfaces = [
  {
    icon: '/icons/icon-market-intelligence.svg',
    name: 'Market Intelligence',
    desc: 'Your daily filtered feed, event tracking, and trending topics — explained, not just listed.',
    href: 'https://miamar.io/arena/demo.html',
    accent: '#1e40af',
    tint: '#eff6ff',
  },
  {
    icon: '/icons/icon-hr.svg',
    name: 'MiAmar HR',
    desc: 'Hiring surges, key departures, and executive moves — used by CI, Business Development, leadership, and HR alike.',
    href: 'https://miamar.io/arena/demo-hr.html',
    accent: '#0d9488',
    tint: '#f0fdfa',
  },
  {
    icon: '/icons/icon-field.svg',
    name: 'MiAmar Field',
    desc: 'Self-updating battlecards and AI meeting briefs for every rep, ready in under a minute.',
    href: 'https://miamar.io/arena/demo-field.html',
    accent: '#7c3aed',
    tint: '#faf5ff',
  },
];

const ProductSurfaces = () => (
  <Box id="platform" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#ffffff' }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 7 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2 }}>
          One system, three surfaces
        </Typography>
        <Typography sx={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 640, mx: 'auto' }}>
          The same engine filters your daily feed, builds battlecards, preps meetings, and tracks hiring signals.
        </Typography>
      </Box>

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
        {surfaces.map((s, i) => (
          <Card key={i} sx={{
            border: '1px solid #e2e8f0', borderRadius: 3, boxShadow: 'none',
            display: 'flex', flexDirection: 'column',
            transition: 'all 0.3s ease',
            '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 28px rgba(0,0,0,0.08)', borderColor: s.accent },
          }}>
            <CardContent sx={{ p: 4, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
              <Box sx={{
                width: 64, height: 64, borderRadius: 2.5, bgcolor: s.tint,
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center', mb: 2.5,
              }}>
                <Box component="img" src={s.icon} alt={`${s.name} icon`} sx={{ width: 40, height: 40 }} />
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.2rem' }}>
                {s.name}
              </Typography>
              <Typography sx={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.98rem', mb: 2.5, flexGrow: 1 }}>
                {s.desc}
              </Typography>
              <Link
                href={s.href} target="_blank" rel="noopener noreferrer" underline="none"
                sx={{
                  display: 'inline-flex', alignItems: 'center', gap: 0.5,
                  color: s.accent, fontWeight: 700, fontSize: '0.92rem',
                  '&:hover': { gap: 1 }, transition: 'gap 0.2s ease',
                }}
              >
                Learn more <ArrowForwardIcon sx={{ fontSize: 16 }} />
              </Link>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  </Box>
);

export default ProductSurfaces;
