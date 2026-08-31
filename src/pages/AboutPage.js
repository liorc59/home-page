import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import MarketingPage, { DEMO_URL, CALENDLY_URL, FinalCTABand } from '../components/MarketingPage';

const AboutPage = () => (
  <MarketingPage
    seo={{
      title: 'About | MiAmar',
      description: 'We built the competitive-intelligence tool we always wanted: one place, filtered automatically, explained in plain English.',
      canonicalUrl: 'https://miamar.io/about',
      breadcrumbs: [
        { name: 'Home', url: 'https://miamar.io/' },
        { name: 'About', url: 'https://miamar.io/about' },
      ],
    }}
    crumbs={[{ label: 'Home', to: '/' }, { label: 'About' }]}
    eyebrow="About"
    h1="Why we built MiAmar."
    subhead={"We spent too many mornings juggling browser tabs, spreadsheets, and “wait, did anyone see this?” Slack messages just to keep track of competitors. So we built the tool we wanted."}
    primary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    secondary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
  >
    <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="sm">
        <Typography sx={{ color: '#475569', fontSize: '1.15rem', lineHeight: 1.8, textAlign: 'center' }}>
          One place, filtered automatically, explained in plain English. MiAmar's entire focus, since day one,
          has been this one problem — that focus is what the product's depth comes from.
        </Typography>
      </Container>
    </Box>
    <FinalCTABand
      title="See what that focus builds."
      subtitle="Explore a live sample arena."
      primary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
      secondary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    />
  </MarketingPage>
);

export default AboutPage;
