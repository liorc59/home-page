import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MarketingPage, { CALENDLY_URL, FeatureRow, ScreenshotBlock, FinalCTABand } from '../../components/MarketingPage';

const FIELD_DEMO = 'https://miamar.io/arena/demo-field.html';

const FieldPage = () => (
  <MarketingPage
    seo={{
      title: 'MiAmar Field | Self-Updating Battlecards',
      description: 'MiAmar Field builds a battlecard for every competitor you track and keeps it current automatically. Generate a brief in under a minute for 19+ meeting types.',
      canonicalUrl: 'https://miamar.io/product/field',
      breadcrumbs: [
        { name: 'Home', url: 'https://miamar.io/' },
        { name: 'Product', url: 'https://miamar.io/' },
        { name: 'MiAmar Field', url: 'https://miamar.io/product/field' },
      ],
      schema: {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'MiAmar Field',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        description: 'Self-updating competitor battlecards and AI meeting briefs for every rep, generated in under a minute for 19+ meeting types.',
        url: 'https://miamar.io/product/field',
        publisher: { '@type': 'Organization', name: 'MiAmar' },
      },
    }}
    crumbs={[{ label: 'Home', to: '/' }, { label: 'Product' }, { label: 'MiAmar Field' }]}
    eyebrow="Product · MiAmar Field"
    h1="Walk into every meeting already prepared."
    subhead="MiAmar Field builds a battlecard for every competitor you track, and keeps it current automatically. Generate a brief in under a minute for 19+ meeting types."
    primary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    secondary={{ label: 'Try the Interactive Demo', href: FIELD_DEMO, external: true }}
  >
    <ScreenshotBlock
      src="/marketing/screenshot-battlecard.png"
      alt="MiAmar Field self-updating battlecard"
      caption='Illustrative — "Acme Corp" is a placeholder competitor name, not a real one.'
    />
    <FeatureRow
      items={[
        { title: 'Self-updating', desc: 'No more copy-pasting from five tabs the night before a call — battlecards stay current on their own.' },
        { title: 'Meeting-specific', desc: 'From a first sales call to an executive briefing, get a brief sized to the meeting you\'re actually walking into.' },
      ]}
    />
    <Box sx={{ py: { xs: 4, md: 5 }, bgcolor: '#ffffff', textAlign: 'center' }}>
      <Container maxWidth="md">
        <Typography sx={{ color: '#64748b', fontSize: '0.95rem' }}>
          Also used by{' '}
          <Link component={RouterLink} to="/solutions/business-development" underline="hover" sx={{ color: '#1e40af', fontWeight: 600 }}>Business Development →</Link>
          {'   ·   '}
          <Link component={RouterLink} to="/solutions/pmm" underline="hover" sx={{ color: '#1e40af', fontWeight: 600 }}>PMMs →</Link>
        </Typography>
      </Container>
    </Box>
    <FinalCTABand
      title="Walk into your next call already prepared."
      subtitle="See a real battlecard in the live demo."
      primary={{ label: 'Try the Interactive Demo', href: FIELD_DEMO, external: true }}
      secondary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    />
  </MarketingPage>
);

export default FieldPage;
