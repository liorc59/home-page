import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MarketingPage, { DEMO_URL, ScreenshotBlock, FinalCTABand } from '../../components/MarketingPage';

const HR_DEMO = 'https://miamar.io/arena/demo-hr.html';

const HRPage = () => (
  <MarketingPage
    seo={{
      title: 'MiAmar HR | Hiring & People Signals',
      description: 'Hiring surges, key departures, and executive moves at every company you track — with context, not just a headline. Used by CI, BD, leadership, and HR.',
      canonicalUrl: 'https://miamar.io/product/hr',
      breadcrumbs: [
        { name: 'Home', url: 'https://miamar.io/' },
        { name: 'Product', url: 'https://miamar.io/' },
        { name: 'MiAmar HR', url: 'https://miamar.io/product/hr' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'MiAmar HR',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Surfaces hiring surges, key departures, and executive moves at every company you track — with context — for CI, Business Development, leadership, and HR teams.',
        url: 'https://miamar.io/product/hr',
        publisher: { '@type': 'Organization', name: 'MiAmar' },
      },
    }}
    crumbs={[{ label: 'Home', to: '/' }, { label: 'Product' }, { label: 'MiAmar HR' }]}
    eyebrow="Product · MiAmar HR"
    h1="Know who's hiring, who's leaving, and why it matters."
    subhead="A hiring wave is a roadmap signal to Product, a buying signal to Business Development, a strategy question for a COO, and a talent-market read for HR. MiAmar surfaces all of it, with context."
    primary={{ label: 'Get Started', href: DEMO_URL, external: true }}
    secondary={{ label: 'Try the Interactive Demo', href: HR_DEMO, external: true }}
  >
    <ScreenshotBlock
      src="/marketing/screenshot-hiring-signals.png"
      alt="MiAmar HR hiring signals dashboard"
      caption="Illustrative sample data — Northwind Robotics, Vantage Cloud, and Atlas Freight are placeholder names, not real customers or tracked companies."
    />
    <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' }, fontWeight: 700, color: '#0f172a', mb: 5, textAlign: 'center' }}>
          One signal, four reasons to care
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' }, gap: 3 }}>
          {[
            { t: 'CI Teams', d: 'Hiring is a leading indicator — see roadmap direction before the launch.' },
            { t: 'Business Development', d: 'Headcount and leadership moves are buying signals worth acting on.' },
            { t: 'COO / Leadership', d: 'An org-health read on every competitor you track.' },
            { t: 'HR & Talent', d: 'Straight talent-market benchmarking, company by company.' },
          ].map((x, i) => (
            <Box key={i} sx={{ p: 3.5, borderRadius: 3, border: '1px solid #e2e8f0', bgcolor: '#fff' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.1rem' }}>{x.t}</Typography>
              <Typography sx={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.98rem' }}>{x.d}</Typography>
            </Box>
          ))}
        </Box>
        <Typography sx={{ color: '#64748b', fontSize: '0.95rem', textAlign: 'center', mt: 5 }}>
          See it from your team's angle:{' '}
          <Link component={RouterLink} to="/solutions/ci-teams" underline="hover" sx={{ color: '#1e40af', fontWeight: 600 }}>For CI Teams →</Link>
          {'   ·   '}
          <Link component={RouterLink} to="/solutions/business-development" underline="hover" sx={{ color: '#1e40af', fontWeight: 600 }}>For Business Development →</Link>
          {'   ·   '}
          <Link component={RouterLink} to="/solutions/talent-hr" underline="hover" sx={{ color: '#1e40af', fontWeight: 600 }}>For HR &amp; Talent →</Link>
        </Typography>
      </Container>
    </Box>
    <FinalCTABand
      title="Get your first hiring-signal digest."
      subtitle="Set up your arena in a few minutes."
      primary={{ label: 'Get Started', href: DEMO_URL, external: true }}
      secondary={{ label: 'Try the Demo First', href: HR_DEMO, external: true }}
    />
  </MarketingPage>
);

export default HRPage;
