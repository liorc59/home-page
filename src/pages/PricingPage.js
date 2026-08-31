import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import MarketingPage, { DEMO_URL, CALENDLY_URL, FinalCTABand } from '../components/MarketingPage';

const points = [
  { title: 'No per-seat fees', desc: 'Add your whole team without a per-user bill.' },
  { title: 'No competitor cap', desc: 'Track as many companies as your arena needs — no vendor delay.' },
  { title: 'Scales with complexity', desc: 'Priced to the size and complexity of your arena, not a flat tier.' },
];

const PricingPage = () => (
  <MarketingPage
    seo={{
      title: 'Pricing | MiAmar',
      description: 'MiAmar is priced per arena — based on how complex your competitive landscape is, not how many seats you buy. No per-user fees. No competitor cap.',
      canonicalUrl: 'https://miamar.io/pricing',
      breadcrumbs: [
        { name: 'Home', url: 'https://miamar.io/' },
        { name: 'Pricing', url: 'https://miamar.io/pricing' },
      ],
    }}
    crumbs={[{ label: 'Home', to: '/' }, { label: 'Pricing' }]}
    eyebrow="Pricing"
    h1="Pricing that scales with your arena, not your headcount."
    subhead="MiAmar is priced per arena — based on how complex your competitive landscape is, not how many seats you buy. No per-user fees. No cap on how many companies you track."
    primary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    secondary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
  >
    <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          {points.map((p, i) => (
            <Box key={i} sx={{ p: 3.5, borderRadius: 3, border: '1px solid #e2e8f0', bgcolor: '#fff' }}>
              <CheckCircleIcon sx={{ color: '#22c55e', mb: 1.5 }} />
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.1rem' }}>{p.title}</Typography>
              <Typography sx={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.98rem' }}>{p.desc}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ mt: 5, p: 3, borderRadius: 2, bgcolor: '#f0fdfa', border: '1px solid #ccfbf1', textAlign: 'center' }}>
          <Typography sx={{ color: '#0f766e', fontSize: '0.95rem', lineHeight: 1.6 }}>
            Pricing is deal-specific and based on your arena. A quick call is the fastest way to a real number.
          </Typography>
        </Box>
      </Container>
    </Box>
    <FinalCTABand
      title="Talk to us for a quote based on your arena."
      subtitle="A quick call is the fastest way to a real number."
      primary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
      secondary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
    />
  </MarketingPage>
);

export default PricingPage;
