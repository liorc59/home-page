import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const steps = [
  { num: '1', title: 'Add your companies', desc: 'Paste a LinkedIn URL or company name — we handle the rest.' },
  { num: '2', title: 'We monitor everything', desc: 'LinkedIn, Google Alerts, newsletters, jobs — ingested and refreshed daily.' },
  { num: '3', title: 'AI filters noise & extracts signals', desc: 'Irrelevant articles are filtered out. Real events are classified and ranked by relevance.' },
  { num: '4', title: 'You stay ahead', desc: 'Slack alerts, email digests, and a dashboard that\'s always current.' }
];

const HowItWorks = () => (
  <Box id="how-it-works" sx={{ py: { xs: 8, md: 10 }, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)' }}>
    <Container maxWidth="lg">
      <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, mb: 2, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
        How It Works
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', mb: 6, maxWidth: 500, mx: 'auto' }}>
        From setup to staying ahead — in four simple steps
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
        gap: { xs: 4, md: 4 }
      }}>
        {steps.map((step, idx) => (
          <Box key={idx} sx={{ textAlign: 'center' }}>
            <Box sx={{
              width: 56, height: 56, borderRadius: '50%',
              bgcolor: 'rgba(255,255,255,0.15)', border: '2px solid rgba(255,255,255,0.3)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              mx: 'auto', mb: 2, fontSize: '1.25rem', fontWeight: 700, color: 'white'
            }}>
              {step.num}
            </Box>
            <Typography sx={{ color: 'white', fontWeight: 700, mb: 1, fontSize: '1.1rem' }}>
              {step.title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
              {step.desc}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 6 }}>
        <Button
          variant="contained"
          size="large"
          href="#demo"
          endIcon={<ArrowForwardIcon />}
          sx={{
            px: 4, py: 1.5, textTransform: 'none', fontWeight: 700, borderRadius: 2,
            bgcolor: 'white', color: '#1e40af',
            '&:hover': { bgcolor: '#f8fafc' }
          }}
        >
          Join the Beta
        </Button>
      </Box>
    </Container>
  </Box>
);

export default HowItWorks;
