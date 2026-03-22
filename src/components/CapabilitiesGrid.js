import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import {
  Shield as ShieldIcon,
  Business as BusinessIcon,
  Email as EmailIcon,
  People as PeopleIcon,
  EventNote as EventNoteIcon,
  Extension as ExtensionIcon,
  FilterAlt as FilterAltIcon
} from '@mui/icons-material';

const capabilities = [
  {
    icon: <FilterAltIcon sx={{ fontSize: 28, color: '#f59e0b' }} />,
    title: 'Noise Filtering',
    desc: 'AI filters irrelevant articles from Google Alerts and newsletters. See only what matters to your arena.',
    color: '#fffbeb'
  },
  {
    icon: <ShieldIcon sx={{ fontSize: 28, color: '#1e40af' }} />,
    title: 'Sales Battlecards',
    desc: 'Auto-generated positioning with elevator pitch, objection handling, and talk tracks — always up to date.',
    color: '#eff6ff'
  },
  {
    icon: <BusinessIcon sx={{ fontSize: 28, color: '#0d9488' }} />,
    title: 'Company Intelligence',
    desc: 'AI-powered profiles with products, business focus, funding data, and competitive positioning.',
    color: '#f0fdfa'
  },
  {
    icon: <EmailIcon sx={{ fontSize: 28, color: '#7c3aed' }} />,
    title: 'Weekly Newsletter',
    desc: 'Automated intelligence digests delivered straight to your team\'s inbox every week.',
    color: '#faf5ff'
  },
  {
    icon: <PeopleIcon sx={{ fontSize: 28, color: '#d97706' }} />,
    title: 'Champions Tracking',
    desc: 'Monitor key contacts and their LinkedIn activity to stay on top of relationship changes.',
    color: '#fffbeb'
  },
  {
    icon: <EventNoteIcon sx={{ fontSize: 28, color: '#16a34a' }} />,
    title: 'Meeting Prep',
    desc: 'AI meeting briefs in 60 seconds. 19+ meeting types supported — from sales calls to board prep.',
    color: '#f0fdf4'
  },
  {
    icon: <ExtensionIcon sx={{ fontSize: 28, color: '#e11d48' }} />,
    title: 'Integrations',
    desc: 'Connect with HubSpot, Slack, and Monday.com to embed intel where your team already works.',
    color: '#fff1f2'
  }
];

const CapabilitiesGrid = () => (
  <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#ffffff' }}>
    <Container maxWidth="lg">
      <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2, textAlign: 'center' }}>
        And that's just the start
      </Typography>
      <Typography sx={{ color: '#64748b', fontSize: '1.05rem', textAlign: 'center', mb: 6, maxWidth: 550, mx: 'auto' }}>
        A full competitive intelligence platform, not just another dashboard
      </Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
        {capabilities.map((cap, idx) => (
          <Card key={idx} sx={{
            border: '1px solid #e2e8f0', borderRadius: 3, boxShadow: 'none',
            transition: 'all 0.3s ease',
            '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.08)' }
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: cap.color, display: 'inline-flex', mb: 2 }}>
                {cap.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.05rem' }}>
                {cap.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.6 }}>
                {cap.desc}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  </Box>
);

export default CapabilitiesGrid;
