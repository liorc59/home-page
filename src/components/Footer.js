import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => (
  <Box sx={{ py: 5, bgcolor: '#0f172a' }}>
    <Container maxWidth="lg">
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr 1fr', md: 'repeat(4, 1fr)' },
        gap: { xs: 3, md: 4 }
      }}>
        {/* Product */}
        <Box>
          <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 1.5, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
            Product
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            <Link href="#platform" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Platform</Link>
            <Link href="#platform" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Event Intelligence</Link>
            <Link href="#platform" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Battlecards</Link>
            <Link href="https://miamar.io/meeting_prep" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Meeting Prep</Link>
            <Link href="#platform" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Integrations</Link>
          </Box>
        </Box>

        {/* Use Cases */}
        <Box>
          <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 1.5, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
            Use Cases
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            <Link href="#use-cases" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>For PMMs</Link>
            <Link href="#use-cases" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>For PMs</Link>
            <Link href="#use-cases" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>For Revenue</Link>
          </Box>
        </Box>

        {/* Company */}
        <Box>
          <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 1.5, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
            Company
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            <Link href="#demo" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Get Started</Link>
            <Link href="mailto:info@miamar.io" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>info@miamar.io</Link>
          </Box>
        </Box>

        {/* Legal */}
        <Box>
          <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 1.5, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
            Legal
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            <Link component={RouterLink} to="/terms" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Terms</Link>
            <Link component={RouterLink} to="/privacy" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Privacy</Link>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ my: 4, borderColor: '#1e293b' }} />

      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
        <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
          © {new Date().getFullYear()} MiAmar. All rights reserved.
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', fontSize: '0.85rem' }}>
          info@miamar.io
        </Typography>
      </Box>
    </Container>
  </Box>
);

export default Footer;
