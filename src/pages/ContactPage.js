import React from 'react';
import { Box, Container, Typography, TextField, Button, Link } from '@mui/material';
import { Email as EmailIcon, Event as EventIcon } from '@mui/icons-material';
import MarketingPage, { DEMO_URL, CALENDLY_URL } from '../components/MarketingPage';

const ContactPage = () => (
  <MarketingPage
    seo={{
      title: 'Contact | MiAmar',
      description: 'Questions about MiAmar? Reach out directly or book a live demo — we\'ll get back to you fast.',
      canonicalUrl: 'https://miamar.io/contact',
      breadcrumbs: [
        { name: 'Home', url: 'https://miamar.io/' },
        { name: 'Contact', url: 'https://miamar.io/contact' },
      ],
    }}
    crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
    eyebrow="Contact"
    h1="Talk to us."
    subhead="Questions about MiAmar? Reach out directly or book a live demo — we'll get back to you fast."
    primary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    secondary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
  >
    <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="md">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 4 }}>
          {/* Send a message */}
          <Box sx={{ p: 4, borderRadius: 3, border: '1px solid #e2e8f0', bgcolor: '#fff' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 2.5 }}>Send a message</Typography>
            <Box
              component="form"
              onSubmit={(e) => { e.preventDefault(); window.location.href = 'mailto:info@miamar.io'; }}
              sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
            >
              <TextField label="Name" size="small" fullWidth />
              <TextField label="Work email" type="email" size="small" fullWidth />
              <TextField label="Company" size="small" fullWidth />
              <TextField label="What are you looking for?" size="small" fullWidth multiline rows={3} />
              <Button type="submit" variant="contained" sx={{ textTransform: 'none', fontWeight: 700, borderRadius: 2, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)' }}>
                Send
              </Button>
              <Typography sx={{ color: '#94a3b8', fontSize: '0.72rem' }}>
                This form opens your email client. For a scheduled conversation, book a live demo →
              </Typography>
            </Box>
          </Box>

          {/* Reach us directly */}
          <Box sx={{ p: 4, borderRadius: 3, border: '1px solid #e2e8f0', bgcolor: '#f8fafc' }}>
            <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 2.5 }}>Or reach us directly</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
              <EmailIcon sx={{ color: '#1e40af' }} />
              <Link href="mailto:info@miamar.io" underline="hover" sx={{ color: '#1e40af', fontWeight: 600 }}>info@miamar.io</Link>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <EventIcon sx={{ color: '#0d9488' }} />
              <Link href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" underline="hover" sx={{ color: '#0d9488', fontWeight: 600 }}>
                Book a live demo on our calendar
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  </MarketingPage>
);

export default ContactPage;
