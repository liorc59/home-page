import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import {
  Campaign as CampaignIcon,
  Category as CategoryIcon,
  TrendingUp as TrendingUpIcon,
  Visibility as VisibilityIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

const personas = [
  {
    icon: <CampaignIcon sx={{ fontSize: 28, color: '#1e40af' }} />,
    title: 'For PMMs',
    color: '#eff6ff',
    border: '#3b82f6',
    items: [
      'Build self-updating battlecards',
      'Track competitor messaging & launches',
      'Arm sales with real-time intel',
      'Weekly CI newsletters generated automatically'
    ]
  },
  {
    icon: <VisibilityIcon sx={{ fontSize: 28, color: '#f59e0b' }} />,
    title: 'For CI Teams',
    color: '#fffbeb',
    border: '#f59e0b',
    items: [
      'Ingest Google Alerts & newsletters in one place',
      'AI filters noise — only relevant signals surface',
      'Trending topics and emerging competitors on your radar',
      'Source-linked intelligence summaries daily'
    ]
  },
  {
    icon: <CategoryIcon sx={{ fontSize: 28, color: '#0d9488' }} />,
    title: 'For Product Managers',
    color: '#f0fdfa',
    border: '#14b8a6',
    items: [
      'Monitor competitor features & roadmaps',
      'Track product releases across your arena',
      'Prepare roadmap discussions backed by evidence'
    ]
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 28, color: '#7c3aed' }} />,
    title: 'For Revenue Teams',
    color: '#faf5ff',
    border: '#a855f7',
    items: [
      'AI meeting briefs before every call',
      'Know each prospect\'s competitive landscape',
      'Spot buying signals early'
    ]
  }
];

const UseCases = () => (
  <Box id="use-cases" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2 }}>
          Built for the teams that need to know first
        </Typography>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 3 }}>
        {personas.map((persona, idx) => (
          <Card key={idx} sx={{
            border: '1px solid #e2e8f0', borderRadius: 3, boxShadow: 'none',
            transition: 'all 0.3s ease',
            '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.08)', borderColor: persona.border }
          }}>
            <CardContent sx={{ p: 3 }}>
              <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: persona.color, display: 'inline-flex', mb: 2 }}>
                {persona.icon}
              </Box>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 2, fontSize: '1.1rem' }}>
                {persona.title}
              </Typography>
              {persona.items.map((item, i) => (
                <Box key={i} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
                  <CheckCircleIcon sx={{ fontSize: 18, color: '#22c55e', mt: 0.3 }} />
                  <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{item}</Typography>
                </Box>
              ))}
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  </Box>
);

export default UseCases;
