import React from 'react';
import {
  Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const faqs = [
  {
    q: 'What data sources does MiAmar monitor?',
    a: 'LinkedIn company posts & profiles, Google Alerts, newsletters (via email ingestion), funding rounds, and job postings. All data is refreshed daily so you never miss a signal.'
  },
  {
    q: 'How does the noise filtering work?',
    a: 'When you connect your Google Alerts or forward newsletters to MiAmar, our AI reads every article and filters out irrelevant content — stock price commentary, analyst opinions, duplicate mentions. Only articles with real competitive signals (product launches, partnerships, expansions) make it through. Typically 70%+ of articles are filtered as noise.'
  },
  {
    q: 'How long does it take to set up?',
    a: 'Add your first companies in under 2 minutes. Paste a LinkedIn URL or company name and we start monitoring immediately. Connect Google Alerts in one click. Forward newsletters to your arena email address.'
  },
  {
    q: 'What is the Daily Intelligence page?',
    a: 'Your daily briefing. It shows AI-generated summaries of what happened in your competitive arena, signals grouped by company, trending topics compared to previous periods, and source-linked articles. Think of it as your CI analyst\'s morning report — but automated.'
  },
  {
    q: 'Do you integrate with our existing tools?',
    a: 'Yes. HubSpot, Slack, and Monday.com integrations are available out of the box. We also generate weekly CI newsletters delivered to your team\'s inbox automatically.'
  },
  {
    q: 'Is my data secure?',
    a: 'Yes. We only collect publicly available data. Your internal data is kept with full privacy and is available only for your arena. All data is encrypted in transit and at rest. See our Privacy Policy for details.'
  },
  {
    q: 'How is MiAmar different from Klue or Crayon?',
    a: 'MiAmar is purpose-built for PMMs and CI teams, not just sales enablement. We ingest your existing alert sources (Google Alerts, newsletters), filter the noise with AI, and combine that with LinkedIn monitoring, product tracking, and auto-generated battlecards — all in one workspace.'
  },
  {
    q: 'Can I try it before signing up?',
    a: 'Yes! We have an interactive demo at miamar.io/arena/demo.html that shows real data. No signup needed. If you like what you see, sign up and we\'ll set up your own competitive arena.'
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
