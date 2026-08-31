import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import {
  Campaign as CampaignIcon,
  Category as CategoryIcon,
  TrendingUp as TrendingUpIcon,
  Visibility as VisibilityIcon,
  Groups as GroupsIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

const personas = [
  {
    icon: <VisibilityIcon sx={{ fontSize: 28, color: '#f59e0b' }} />,
    title: 'For CI Teams',
    color: '#fffbeb',
    border: '#f59e0b',
    items: [
      'One ranked feed, filtered and explained',
      'A stated reason for every rejection',
      'Your own importance tiers, not a generic scale',
      'Source-linked intelligence summaries daily'
    ]
  },
  {
    icon: <CampaignIcon sx={{ fontSize: 28, color: '#1e40af' }} />,
    title: 'For PMMs',
    color: '#eff6ff',
    border: '#3b82f6',
    items: [
      'Self-updating battlecards',
      'Track competitor messaging & launches',
      'A newsletter that writes itself',
      'Arm sales with intel that stays current'
    ]
  },
  {
    icon: <TrendingUpIcon sx={{ fontSize: 28, color: '#7c3aed' }} />,
    title: 'For Business Development',
    color: '#faf5ff',
    border: '#a855f7',
    items: [
      'AI meeting briefs before every call',
      'Know each prospect\'s competitive landscape',
      'Buying-signal detection from hiring & exec moves'
    ]
  },
  {
    icon: <CategoryIcon sx={{ fontSize: 28, color: '#0d9488' }} />,
    title: 'For Product Managers',
    color: '#f0fdfa',
    border: '#14b8a6',
    items: [
      'Feature & roadmap tracking, comparable',
      'Version history behind every roadmap call',
      'Every change linked to related events'
    ]
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 28, color: '#0891b2' }} />,
    title: 'For HR & Talent Teams',
    color: '#ecfeff',
    border: '#06b6d4',
    items: [
      'Hiring surges & executive moves, company by company',
      'Talent-market benchmarking against your peers',
      'Read the same signals as CI, BD, and leadership'
    ]
  }
];

const UseCases = () => (
  <Box id="use-cases" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2 }}>
          Built for CI teams — and everyone they keep informed
        </Typography>
        <Typography sx={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 620, mx: 'auto' }}>
          The competitive intelligence team owns the arena. MiAmar makes it effortless to arm every team that
          reads their signals.
        </Typography>
      </Box>
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)', lg: 'repeat(5, 1fr)' }, gap: 3 }}>
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
