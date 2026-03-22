import React from 'react';
import { Box, Container, Typography, Card, CardContent, Chip } from '@mui/material';
import {
  LightbulbOutlined as LightbulbIcon,
  OpenInNew as OpenInNewIcon,
  FilterAlt as FilterAltIcon
} from '@mui/icons-material';

const ExampleInsight = () => (
  <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f0f9ff' }}>
    <Container maxWidth="md">
      <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2, textAlign: 'center' }}>
        This is what your morning looks like with MiAmar
      </Typography>
      <Typography sx={{ color: '#64748b', fontSize: '1.05rem', textAlign: 'center', mb: 5, maxWidth: 550, mx: 'auto' }}>
        Instead of 47 Google Alerts, you get this.
      </Typography>

      {/* Noise stats mock */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, mb: 3 }}>
        <Card sx={{ border: '1px solid #fde68a', bgcolor: '#fffbeb', borderRadius: 2, boxShadow: 'none' }}>
          <CardContent sx={{ textAlign: 'center', py: 2, '&:last-child': { pb: 2 } }}>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#92400e' }}>47</Typography>
            <Typography sx={{ fontSize: '0.8rem', color: '#92400e' }}>Ingested</Typography>
          </CardContent>
        </Card>
        <Card sx={{ border: '1px solid #bbf7d0', bgcolor: '#f0fdf4', borderRadius: 2, boxShadow: 'none' }}>
          <CardContent sx={{ textAlign: 'center', py: 2, '&:last-child': { pb: 2 } }}>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#16a34a' }}>12</Typography>
            <Typography sx={{ fontSize: '0.8rem', color: '#16a34a' }}>Approved</Typography>
          </CardContent>
        </Card>
        <Card sx={{ border: '1px solid #fecaca', bgcolor: '#fef2f2', borderRadius: 2, boxShadow: 'none' }}>
          <CardContent sx={{ textAlign: 'center', py: 2, '&:last-child': { pb: 2 } }}>
            <Typography sx={{ fontSize: '1.75rem', fontWeight: 800, color: '#dc2626' }}>35</Typography>
            <Typography sx={{ fontSize: '0.8rem', color: '#dc2626' }}>Filtered (74%)</Typography>
          </CardContent>
        </Card>
      </Box>

      {/* Example summary */}
      <Card sx={{ border: '1px solid #bbf7d0', borderRadius: 3, boxShadow: '0 4px 24px rgba(0,0,0,0.06)', bgcolor: '#f0fdf4' }}>
        <CardContent sx={{ p: { xs: 3, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <LightbulbIcon sx={{ fontSize: 20, color: '#f59e0b' }} />
            <Typography sx={{ fontWeight: 700, color: '#1e40af', fontSize: '1rem' }}>Intelligence Summary</Typography>
          </Box>
          <Typography sx={{ color: '#0f172a', lineHeight: 1.8, mb: 2, fontSize: '0.95rem' }}>
            <strong>Competitor X</strong> launched a new enterprise tier at <strong>$999/month</strong>, directly undercutting your premium offering. The feature set closely matches your Q3 roadmap priorities — particularly the real-time analytics module announced at their user conference last week.
          </Typography>
          <Typography sx={{ color: '#0f172a', lineHeight: 1.8, mb: 2, fontSize: '0.95rem' }}>
            <strong>LinkedIn</strong> announced a partnership with <strong>Competitor Y</strong> to enable programmatic ad buying using professional audience data. This marks their first DSP integration for connected TV advertising.
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            <Chip
              icon={<OpenInNewIcon sx={{ fontSize: 12 }} />}
              label="TechCrunch"
              size="small"
              sx={{ height: 24, fontSize: '0.75rem', fontWeight: 600, bgcolor: '#e0f2fe', color: '#0369a1', '& .MuiChip-icon': { color: '#0369a1' } }}
            />
            <Chip
              icon={<OpenInNewIcon sx={{ fontSize: 12 }} />}
              label="The Keyword"
              size="small"
              sx={{ height: 24, fontSize: '0.75rem', fontWeight: 600, bgcolor: '#e0f2fe', color: '#0369a1', '& .MuiChip-icon': { color: '#0369a1' } }}
            />
            <Chip
              icon={<OpenInNewIcon sx={{ fontSize: 12 }} />}
              label="AdWeek"
              size="small"
              sx={{ height: 24, fontSize: '0.75rem', fontWeight: 600, bgcolor: '#e0f2fe', color: '#0369a1', '& .MuiChip-icon': { color: '#0369a1' } }}
            />
          </Box>
        </CardContent>
      </Card>

      {/* Bottom note */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 3, opacity: 0.7 }}>
        <FilterAltIcon sx={{ fontSize: 16, color: '#64748b' }} />
        <Typography sx={{ color: '#64748b', fontSize: '0.85rem' }}>
          2 minutes to read. 35 irrelevant articles filtered. Every insight linked to its source.
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default ExampleInsight;
