import React from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import {
  Cancel as CancelIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

const rows = [
  {
    feature: 'Data freshness',
    manual: 'Days or weeks old',
    miamar: 'Refreshed daily, automatically'
  },
  {
    feature: 'Time to insight',
    manual: 'Hours of manual research',
    miamar: 'Seconds — AI-generated summaries'
  },
  {
    feature: 'Battlecard creation',
    manual: 'Manual copy-paste from multiple tabs',
    miamar: 'Auto-generated & self-updating'
  },
  {
    feature: 'Event monitoring',
    manual: 'Google Alerts & RSS (noisy)',
    miamar: 'Curated signals with context'
  },
  {
    feature: 'Prospect prep',
    manual: 'Ad-hoc LinkedIn stalking',
    miamar: 'One-click prospect cards'
  },
  {
    feature: 'Integrations',
    manual: 'Copy-paste into Slack / docs',
    miamar: 'HubSpot, Slack, Monday.com built-in'
  }
];

const ComparisonTable = () => (
  <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center', mb: 2,
          fontSize: { xs: '1.75rem', md: '2.25rem' },
          fontWeight: 700, color: '#0f172a'
        }}
      >
        Stop doing it the hard way
      </Typography>
      <Typography
        sx={{
          textAlign: 'center', mb: 6,
          color: '#64748b', fontSize: '1.05rem'
        }}
      >
        See how MiAmar compares to manual competitive research.
      </Typography>

      <Card sx={{
        borderRadius: 3, border: '1px solid #e2e8f0',
        boxShadow: '0 4px 24px rgba(0,0,0,0.06)', overflow: 'hidden'
      }}>
        {/* Header row */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr 1fr' },
          bgcolor: '#f1f5f9', borderBottom: '1px solid #e2e8f0'
        }}>
          <Box sx={{ px: 3, py: 2, display: { xs: 'none', md: 'block' } }}>
            <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '0.95rem' }}>
              Feature
            </Typography>
          </Box>
          <Box sx={{ px: 3, py: 2, display: { xs: 'none', md: 'block' } }}>
            <Typography sx={{ fontWeight: 700, color: '#64748b', fontSize: '0.95rem' }}>
              Manual Research
            </Typography>
          </Box>
          <Box sx={{ px: 3, py: 2, display: { xs: 'none', md: 'block' } }}>
            <Typography sx={{
              fontWeight: 700, fontSize: '0.95rem',
              background: 'linear-gradient(135deg, #1e40af, #0d9488)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
            }}>
              MiAmar
            </Typography>
          </Box>
        </Box>

        {/* Data rows */}
        {rows.map((row, idx) => (
          <Box
            key={idx}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr 1fr' },
              borderBottom: idx < rows.length - 1 ? '1px solid #f1f5f9' : 'none',
              '&:hover': { bgcolor: '#fafbfc' },
              transition: 'background 0.2s'
            }}
          >
            {/* Feature name */}
            <Box sx={{ px: 3, py: 2.5 }}>
              <Typography sx={{ fontWeight: 600, color: '#0f172a', fontSize: '0.95rem' }}>
                {row.feature}
              </Typography>
            </Box>
            {/* Manual */}
            <Box sx={{ px: 3, py: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
              <CancelIcon sx={{ fontSize: 20, color: '#ef4444', flexShrink: 0 }} />
              <Typography sx={{ color: '#64748b', fontSize: '0.9rem' }}>
                {row.manual}
              </Typography>
            </Box>
            {/* MiAmar */}
            <Box sx={{ px: 3, py: 2.5, display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircleIcon sx={{ fontSize: 20, color: '#22c55e', flexShrink: 0 }} />
              <Typography sx={{ color: '#0f172a', fontWeight: 500, fontSize: '0.9rem' }}>
                {row.miamar}
              </Typography>
            </Box>
          </Box>
        ))}
      </Card>
    </Container>
  </Box>
);

export default ComparisonTable;
