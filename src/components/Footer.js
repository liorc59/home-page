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
            <Link component={RouterLink} to="/product/market-intelligence" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Market Intelligence</Link>
            <Link component={RouterLink} to="/product/hr" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>MiAmar HR</Link>
            <Link component={RouterLink} to="/product/field" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>MiAmar Field</Link>
          </Box>
        </Box>

        {/* Solutions */}
        <Box>
          <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 1.5, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
            Solutions
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            <Link component={RouterLink} to="/solutions/ci-teams" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>For CI Teams</Link>
            <Link component={RouterLink} to="/solutions/pmm" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>For PMMs</Link>
            <Link component={RouterLink} to="/solutions/business-development" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>For Business Development</Link>
            <Link component={RouterLink} to="/solutions/product-managers" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>For Product Managers</Link>
            <Link component={RouterLink} to="/solutions/talent-hr" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>For HR &amp; Talent Teams</Link>
          </Box>
        </Box>

        {/* Company */}
        <Box>
          <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 1.5, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
            Company
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
            <Link component={RouterLink} to="/about" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>About</Link>
            <Link component={RouterLink} to="/contact" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Contact</Link>
            <Link component={RouterLink} to="/compare/klue-crayon-alternative" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Compare</Link>
            <Link component={RouterLink} to="/resources" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Resources</Link>
            <Link component={RouterLink} to="/pricing" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>Pricing</Link>
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
