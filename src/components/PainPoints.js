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
    title: 'Scattered across tabs',
    desc: 'Intel lives in Google Alerts, LinkedIn, Slack, and someone\'s memory. No single source of truth.'
  },
  {
    icon: <UpdateIcon sx={{ fontSize: 32, color: '#0d9488' }} />,
    title: 'Always stale',
    desc: 'By the time you compile a battlecard, the data is a week old. Competitors don\'t wait for your review cycles.'
  },
  {
    icon: <TouchAppIcon sx={{ fontSize: 32, color: '#7c3aed' }} />,
    title: 'Manual and reactive',
    desc: 'You hear about competitor moves after the deal is lost. There\'s no time to monitor everything manually.'
  }
];

const PainPoints = () => (
  <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#ffffff' }}>
    <Container maxWidth="lg">
      <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 6, textAlign: 'center' }}>
        Competitive intelligence shouldn't be a full-time job
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
