import React from 'react';
import { Box, Container, Typography, Link, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Description as DescriptionIcon, ArrowForward as ArrowForwardIcon } from '@mui/icons-material';
import MarketingPage, { DEMO_URL, CALENDLY_URL } from '../components/MarketingPage';

const posts = [
  { title: 'MiAmar vs. Klue and Crayon', desc: 'The full feature-by-feature comparison.', to: '/compare/klue-crayon-alternative', ready: true },
  { title: 'How to build a battlecard', desc: 'A practical walkthrough for CI and PMM teams.', ready: false },
  { title: 'Running CI with two people', desc: 'How small teams keep up without a big stack.', ready: false },
];

const ResourcesPage = () => (
  <MarketingPage
    seo={{
      title: 'Resources | MiAmar',
      description: 'Comparison posts, how-tos, and category education for teams that need to know first.',
      canonicalUrl: 'https://miamar.io/resources',
      breadcrumbs: [
        { name: 'Home', url: 'https://miamar.io/' },
        { name: 'Resources', url: 'https://miamar.io/resources' },
      ],
    }}
    crumbs={[{ label: 'Home', to: '/' }, { label: 'Resources' }]}
    eyebrow="Resources"
    h1="Guides for teams that need to know first."
    subhead="Comparison posts, how-tos, and category education — published monthly, with named authorship on every post."
    primary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    secondary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
  >
    <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {posts.map((p, i) => (
            <Box key={i} sx={{ p: 3, borderRadius: 3, border: '1px solid #e2e8f0', bgcolor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2, flexWrap: 'wrap' }}>
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 0.5 }}>
                  <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '1.05rem' }}>{p.title}</Typography>
                  {!p.ready && <Chip label="Coming soon" size="small" sx={{ height: 20, fontSize: 10, fontWeight: 700, bgcolor: '#f1f5f9', color: '#94a3b8' }} />}
                </Box>
                <Typography sx={{ color: '#64748b', fontSize: '0.92rem' }}>{p.desc}</Typography>
              </Box>
              {p.ready && (
                <Link component={RouterLink} to={p.to} underline="none" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: '#1e40af', fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
                  Read <ArrowForwardIcon sx={{ fontSize: 16 }} />
                </Link>
              )}
            </Box>
          ))}
        </Box>

        {/* One-pager */}
        <Box sx={{ mt: 5, p: 3.5, borderRadius: 3, border: '1px solid #ccfbf1', bgcolor: '#f0fdfa', display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <DescriptionIcon sx={{ color: '#0d9488', fontSize: 32 }} />
            <Box>
              <Typography sx={{ fontWeight: 700, color: '#0f172a', fontSize: '1.05rem' }}>MiAmar one-pager</Typography>
              <Typography sx={{ color: '#0f766e', fontSize: '0.9rem' }}>A single-page overview you can forward internally.</Typography>
            </Box>
          </Box>
          <Link href="/marketing/MiAmar-OnePager.pdf" target="_blank" rel="noopener noreferrer" underline="none" sx={{ display: 'inline-flex', alignItems: 'center', gap: 0.5, color: '#0d9488', fontWeight: 700, fontSize: '0.9rem', whiteSpace: 'nowrap' }}>
            Download the PDF <ArrowForwardIcon sx={{ fontSize: 16 }} />
          </Link>
        </Box>
      </Container>
    </Box>
  </MarketingPage>
);

export default ResourcesPage;
