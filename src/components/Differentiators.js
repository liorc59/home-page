import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';

const diffs = [
  {
    theirs: 'Most tools spam you with every mention and minor change.',
    ours: 'MiAmar filters 70%+ of noise and only surfaces what actually matters.',
    label: 'Signal vs Noise'
  },
  {
    theirs: 'Most tools show what changed — a raw list of alerts and diffs.',
    ours: 'MiAmar explains what happened — AI-written summaries with source links.',
    label: 'Data vs Intelligence'
  },
  {
    theirs: 'Most tools feel like another dashboard to check.',
    ours: 'MiAmar feels like reading a morning briefing written by your CI analyst.',
    label: 'Work vs Reading'
  }
];

const Differentiators = () => (
  <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#ffffff' }}>
    <Container maxWidth="lg">
      <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2, textAlign: 'center' }}>
        Why MiAmar is different
      </Typography>
      <Typography sx={{ color: '#64748b', fontSize: '1.05rem', textAlign: 'center', mb: 6, maxWidth: 550, mx: 'auto' }}>
        We don't just track competitors. We make sense of the noise.
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 800, mx: 'auto' }}>
        {diffs.map((d, i) => (
          <Card key={i} sx={{ border: '1px solid #e2e8f0', borderRadius: 3, boxShadow: 'none', overflow: 'hidden' }}>
            <CardContent sx={{ p: 0 }}>
              <Box sx={{ px: 3, py: 1.5, bgcolor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
                <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>{d.label}</Typography>
              </Box>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' } }}>
                <Box sx={{ px: 3, py: 2.5, borderRight: { md: '1px solid #f1f5f9' }, bgcolor: '#fef2f2' }}>
                  <Typography sx={{ color: '#991b1b', fontSize: '0.9rem', lineHeight: 1.6 }}>{d.theirs}</Typography>
                </Box>
                <Box sx={{ px: 3, py: 2.5, bgcolor: '#f0fdf4' }}>
                  <Typography sx={{ color: '#166534', fontSize: '0.9rem', fontWeight: 500, lineHeight: 1.6 }}>{d.ours}</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  </Box>
);

export default Differentiators;
