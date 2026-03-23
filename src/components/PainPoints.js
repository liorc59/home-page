import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  TabUnselected as TabIcon,
  Update as UpdateIcon,
  TouchApp as TouchAppIcon
} from '@mui/icons-material';

const points = [
  {
    icon: <TabIcon sx={{ fontSize: 32, color: '#1e40af' }} />,
    title: 'Drowning in alerts',
    desc: 'Dozens of Google Alerts, newsletters piling up — and somewhere in that noise is the one signal that actually matters.'
  },
  {
    icon: <UpdateIcon sx={{ fontSize: 32, color: '#0d9488' }} />,
    title: 'Always a step behind',
    desc: 'You hear about competitor moves after the deal is lost. By the time you compile a battlecard, the data is already stale.'
  },
  {
    icon: <TouchAppIcon sx={{ fontSize: 32, color: '#7c3aed' }} />,
    title: 'No single source of truth',
    desc: 'Intel lives in someone\'s inbox, a Slack thread, and a spreadsheet last updated two months ago. No one sees the full picture.'
  }
];

const PainPoints = () => (
  <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#ffffff' }}>
    <Container maxWidth="lg">
      <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2, textAlign: 'center' }}>
        The most cost-effective CI system on the market
      </Typography>
      <Typography sx={{ color: '#64748b', fontSize: '1.05rem', textAlign: 'center', mb: 6, maxWidth: 600, mx: 'auto' }}>
        Most tools add noise. MiAmar removes it.
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 4 }}>
        {points.map((point, idx) => (
          <Box key={idx} sx={{ textAlign: 'center', px: 2 }}>
            <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#f8fafc', display: 'inline-flex', mb: 2 }}>
              {point.icon}
            </Box>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.1rem' }}>
              {point.title}
            </Typography>
            <Typography sx={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {point.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  </Box>
);

export default PainPoints;
