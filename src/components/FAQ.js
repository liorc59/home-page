import React from 'react';
import {
  Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const faqs = [
  {
    q: 'What data sources does MiAmar monitor?',
    a: 'LinkedIn company posts & profiles, news & press, funding rounds, and job postings. All data is refreshed daily so you never miss a signal.'
  },
  {
    q: 'How long does it take to set up?',
    a: 'Add your first companies in under 2 minutes. Paste a LinkedIn URL or company name and we start monitoring immediately.'
  },
  {
    q: 'Do you integrate with our existing tools?',
    a: 'Yes. HubSpot, Slack, and Monday.com integrations are available out of the box. We also support email digests for teams that prefer inbox-first workflows.'
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. We only collect publicly available data. All data is encrypted in transit and at rest. See our Privacy Policy for details.'
  },
  {
    q: 'How is MiAmar different from Klue or Crayon?',
    a: 'MiAmar is purpose-built for PMMs and PMs, not just sales. We combine event intelligence, prospect cards, and product tracking in one workspace — no manual curation needed.'
  },
  {
    q: 'What does a demo include?',
    a: 'A personalized 30-minute walkthrough using your actual competitors. You\'ll see live data and leave with actionable intel.'
  }
];

const FAQ = () => (
  <Box sx={{ py: { xs: 8, md: 10 }, bgcolor: '#fff' }}>
    <Container maxWidth="md">
      <Typography
        variant="h2"
        sx={{
          textAlign: 'center', mb: 6,
          fontSize: { xs: '1.75rem', md: '2.25rem' },
          fontWeight: 700, color: '#0f172a'
        }}
      >
        Frequently asked questions
      </Typography>
      {faqs.map((faq, idx) => (
        <Accordion
          key={idx}
          disableGutters
          elevation={0}
          sx={{
            border: '1px solid #e2e8f0',
            borderRadius: '12px !important',
            mb: 2,
            '&:before': { display: 'none' },
            '&.Mui-expanded': { mb: 2 }
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: '#1e40af' }} />}
            sx={{ px: 3, py: 1 }}
          >
            <Typography sx={{ fontWeight: 600, color: '#0f172a', fontSize: '1rem' }}>
              {faq.q}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ px: 3, pb: 3, pt: 0 }}>
            <Typography sx={{ color: '#475569', lineHeight: 1.7, fontSize: '0.95rem' }}>
              {faq.a}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  </Box>
);

export default FAQ;
