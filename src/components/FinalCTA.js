import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { ArrowForward as ArrowForwardIcon } from '@mui/icons-material';

const FinalCTA = () => (
  <Box sx={{ py: { xs: 8, md: 10 }, background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)' }}>
    <Container maxWidth="md" sx={{ textAlign: 'center' }}>
      <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, mb: 2, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
        Stop scrolling through alerts. Start knowing what matters.
      </Typography>
      <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', mb: 5, maxWidth: 500, mx: 'auto', lineHeight: 1.7 }}>
        Join PMM and CI teams who replaced hours of manual research with a 2-minute morning briefing.
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button
          variant="contained"
          size="large"
          href="#demo"
          endIcon={<ArrowForwardIcon />}
          sx={{
            px: 4, py: 1.5, textTransform: 'none', fontWeight: 700, fontSize: '1rem', borderRadius: 2,
            bgcolor: 'white', color: '#1e40af',
            '&:hover': { bgcolor: '#f1f5f9' }
          }}
        >
          Get Started
        </Button>
        <Button
          variant="outlined"
          size="large"
          href="https://miamar.io/arena/demo.html"
          target="_blank"
          sx={{
            px: 4, py: 1.5, textTransform: 'none', fontWeight: 600, fontSize: '1rem', borderRadius: 2,
            borderColor: 'rgba(255,255,255,0.4)', color: 'white',
            '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
          }}
        >
          Try the Demo First
        </Button>
      </Box>
    </Container>
  </Box>
);

export default FinalCTA;
