import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Box,
  Container,
  Typography,
  AppBar,
  Toolbar,
  Link,
  Button,
  Divider
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | MiAmar - AI-Powered Sales Intelligence</title>
        <meta name="description" content="Read MiAmar's terms and conditions. Learn about acceptable use, beta services, intellectual property, limitations of liability, and your rights when using our AI-powered sales tools." />
        <link rel="canonical" href="https://miamar.io/terms" />
        <meta property="og:title" content="Terms & Conditions | MiAmar" />
        <meta property="og:description" content="Terms and conditions for using MiAmar's AI-powered sales intelligence services." />
        <meta property="og:url" content="https://miamar.io/terms" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Terms & Conditions | MiAmar" />
        <meta name="twitter:description" content="Terms and conditions for using MiAmar's AI-powered sales intelligence services." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://miamar.io/" },
              { "@type": "ListItem", "position": 2, "name": "Terms & Conditions", "item": "https://miamar.io/terms" }
            ]
          })}
        </script>
      </Helmet>
      <Box sx={{ minHeight: '100vh', bgcolor: '#fafbfc' }}>
      {/* Navigation */}
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Link component={RouterLink} to="/" underline="none" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                MiAmar
              </Typography>
            </Link>
          </Box>
          <Button
            component={RouterLink}
            to="/"
            startIcon={<ArrowBackIcon />}
            sx={{ textTransform: 'none', fontWeight: 600, color: '#475569' }}
          >
            Back to Home
          </Button>
        </Toolbar>
      </AppBar>

      {/* Content */}
      <Container maxWidth="md" sx={{ pt: 14, pb: 8 }}>
        <Typography variant="h1" sx={{ fontWeight: 800, color: '#0f172a', mb: 2, fontSize: { xs: '2rem', md: '2.5rem' } }}>
          Terms & Conditions
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', mb: 4 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </Typography>

        <Box sx={{ bgcolor: 'white', borderRadius: 3, p: { xs: 3, md: 5 }, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <Section title="1. Acceptance of Terms">
            By accessing and using MiAmar's services ("Services"), including Meeting Prep and Arena, you agree to be bound by these Terms & Conditions. If you do not agree to these terms, please do not use our Services.
          </Section>

          <Section title="2. Description of Services">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              MiAmar provides AI-powered sales intelligence tools:
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>Meeting Prep (Beta):</strong> An AI-driven meeting preparation tool that generates briefs, talking points, and insights based on publicly available company information.</li>
              <li><strong>Arena (Alpha):</strong> A competitive intelligence dashboard for tracking and monitoring market movements.</li>
            </ul>
          </Section>

          <Section title="3. Beta and Alpha Services">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              Our Services are currently offered in beta and alpha stages:
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>Beta and alpha services are provided "as is" and may contain bugs or errors.</li>
              <li>Features may be added, modified, or removed without notice.</li>
              <li>Service availability is not guaranteed during the beta/alpha period.</li>
              <li>We reserve the right to discontinue beta/alpha access at any time.</li>
              <li>Beta services are currently offered free of charge for a limited time.</li>
            </ul>
          </Section>

          <Section title="4. User Accounts">
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>You must provide accurate information when creating an account.</li>
              <li>You are responsible for maintaining the security of your account credentials.</li>
              <li>You must notify us immediately of any unauthorized use of your account.</li>
              <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
            </ul>
          </Section>

          <Section title="5. Acceptable Use">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              You agree not to:
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>Use the Services for any unlawful purpose or in violation of any laws.</li>
              <li>Attempt to gain unauthorized access to our systems or other users' accounts.</li>
              <li>Interfere with or disrupt the Services or servers.</li>
              <li>Scrape, crawl, or use automated means to access the Services without permission.</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Services.</li>
              <li>Use the Services to harass, abuse, or harm others.</li>
            </ul>
          </Section>

          <Section title="6. Intellectual Property">
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>All content, features, and functionality of the Services are owned by MiAmar and protected by intellectual property laws.</li>
              <li>You may not copy, modify, distribute, or create derivative works from our Services without explicit permission.</li>
              <li>You retain ownership of any data you input into the Services.</li>
            </ul>
          </Section>

          <Section title="7. Data and Privacy">
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>Our collection and use of personal information is governed by our Privacy Policy.</li>
              <li>We use publicly available data to generate insights and do not access private or confidential information.</li>
              <li>You are responsible for ensuring you have the right to use any data you input into our Services.</li>
            </ul>
          </Section>

          <Section title="8. Disclaimer of Warranties">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED. WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE. AI-GENERATED CONTENT MAY CONTAIN INACCURACIES AND SHOULD BE VERIFIED INDEPENDENTLY.
            </Typography>
          </Section>

          <Section title="9. Limitation of Liability">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, MIAMAR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SERVICES IN THE TWELVE MONTHS PRECEDING THE CLAIM.
            </Typography>
          </Section>

          <Section title="10. Indemnification">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              You agree to indemnify and hold MiAmar harmless from any claims, damages, or expenses arising from your use of the Services, violation of these terms, or infringement of any third-party rights.
            </Typography>
          </Section>

          <Section title="11. Changes to Terms">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              We reserve the right to modify these terms at any time. We will notify users of significant changes via email or through the Services. Continued use of the Services after changes constitutes acceptance of the new terms.
            </Typography>
          </Section>

          <Section title="12. Termination">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              We may terminate or suspend your access to the Services at any time, with or without cause, with or without notice. Upon termination, your right to use the Services will immediately cease.
            </Typography>
          </Section>

          <Section title="13. Governing Law">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              These terms shall be governed by and construed in accordance with the laws of Israel, without regard to its conflict of law provisions.
            </Typography>
          </Section>

          <Section title="14. Contact Information" isLast>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              For questions about these Terms & Conditions, please contact us at:
            </Typography>
            <Typography variant="body1" sx={{ color: '#1e40af', fontWeight: 600, mt: 1 }}>
              <Link href="mailto:info@miamar.io">info@miamar.io</Link>
            </Typography>
          </Section>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: '#0f172a' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
              © {new Date().getFullYear()} MiAmar. All rights reserved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link component={RouterLink} to="/privacy" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                Privacy Policy
              </Link>
              <Link href="mailto:info@miamar.io" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                Contact
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
    </>
  );
};

const Section = ({ title, children, isLast }) => (
  <Box sx={{ mb: isLast ? 0 : 4 }}>
    <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a', mb: 2 }}>
      {title}
    </Typography>
    {typeof children === 'string' ? (
      <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
        {children}
      </Typography>
    ) : children}
    {!isLast && <Divider sx={{ mt: 4 }} />}
  </Box>
);

export default TermsPage;
