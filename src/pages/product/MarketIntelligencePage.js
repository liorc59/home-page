import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MarketingPage, { DEMO_URL, CALENDLY_URL, FeatureRow, ScreenshotBlock, FinalCTABand } from '../../components/MarketingPage';

const MarketIntelligencePage = () => (
  <MarketingPage
    seo={{
      title: 'Market Intelligence | MiAmar',
      description: 'MiAmar scans news, LinkedIn, job posts, and your own Google Alerts every day and tells you, in plain English, why what\'s left made the cut.',
      canonicalUrl: 'https://miamar.io/product/market-intelligence',
      breadcrumbs: [
        { name: 'Home', url: 'https://miamar.io/' },
        { name: 'Product', url: 'https://miamar.io/' },
        { name: 'Market Intelligence', url: 'https://miamar.io/product/market-intelligence' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'MiAmar Market Intelligence',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: "AI-filtered competitive intelligence feed that scores every signal through your company's own lens, with a stated reason for every article kept or filtered.",
        url: 'https://miamar.io/product/market-intelligence',
        publisher: { '@type': 'Organization', name: 'MiAmar' },
      },
    }}
    crumbs={[{ label: 'Home', to: '/' }, { label: 'Product' }, { label: 'Market Intelligence' }]}
    eyebrow="Product · Market Intelligence"
    h1="Your daily briefing, not another feed."
    subhead="MiAmar scans news, LinkedIn, job posts, and your own Google Alerts every day, and tells you in plain English why what's left made the cut."
    primary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    secondary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
  >
    <ScreenshotBlock
      src="/marketing/screenshot-daily-intelligence.png"
      alt="MiAmar daily intelligence with noise filtering and source links"
    />
    <FeatureRow
      items={[
        { title: 'Explained, not just listed', desc: 'Every kept article links to its source. Every filtered one gets a stated reason. Nothing is a black box.' },
        { title: 'Your lens, not a generic scale', desc: 'Set your own priorities. Two companies tracking the same competitor can see two completely different "what matters most" lists.' },
      ]}
    />
    <Box sx={{ py: { xs: 4, md: 5 }, bgcolor: '#ffffff', textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography sx={{ color: '#64748b', fontSize: '0.95rem' }}>
          Also used by{' '}
          <Link component={RouterLink} to="/solutions/ci-teams" underline="hover" sx={{ color: '#1e40af', fontWeight: 600 }}>CI Teams →</Link>
          {'   ·   '}
          <Link component={RouterLink} to="/solutions/product-managers" underline="hover" sx={{ color: '#1e40af', fontWeight: 600 }}>Product Managers →</Link>
        </Typography>
      </Container>
    </Box>
    <FinalCTABand
      title="See your own market at a glance."
      subtitle="No signup needed to look around."
      primary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
      secondary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    />
  </MarketingPage>
);

export default MarketIntelligencePage;
