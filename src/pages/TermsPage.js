import React from 'react';
import SEO from '../components/SEO';
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
      <SEO
        title="Master Terms & Conditions | MiAmar Ltd (Cyprus)"
        description="MiAmar Ltd's Master Terms & Conditions for use of the Arena AI-powered competitive intelligence platform. Subscription plans, billing, data sourcing, intellectual property, and Cyprus governing law."
        canonicalUrl="https://miamar.io/terms"
        ogTitle="Master Terms & Conditions | MiAmar"
        ogDescription="Master Terms & Conditions for the Arena competitive intelligence platform by MiAmar Ltd, Cyprus."
        ogUrl="https://miamar.io/terms"
        breadcrumbs={[
          { name: "Home", url: "https://miamar.io/" },
          { name: "Terms & Conditions", url: "https://miamar.io/terms" }
        ]}
      />
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
          Master Terms & Conditions
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', mb: 4 }}>
          Last updated: May 14, 2026
        </Typography>

        <Box sx={{ bgcolor: 'white', borderRadius: 3, p: { xs: 3, md: 5 }, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 4 }}>
            This Master Terms & Conditions agreement (“Agreement”) is entered into between MiAmar Ltd, a company incorporated in the Republic of Cyprus (“MiAmar”, “we”, “us”), and the entity or individual accessing the Services (“Customer”, “you”).
          </Typography>

          <Section title="1. Acceptance of Terms">
            By creating an account or accessing the Arena platform (the “Services”), you agree to be bound by this Agreement. If you represent an entity, you warrant that you have the legal authority to bind that entity.
          </Section>

          <Section title="2. Description of Services">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              MiAmar provides Arena, an AI-powered competitive intelligence dashboard. We reserve the right to modify features, update the AI models, and improve the dashboard interface at our discretion.
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mt: 2 }}>
              <strong>2.1. Data Sourcing and Scope.</strong> The Services rely on automated harvesting of publicly available information. While MiAmar strives for comprehensive market coverage, the selection of data sources, frequency of crawling, and the inclusion or exclusion of specific data points remains at the sole discretion of MiAmar. We do not guarantee that every publicly available piece of information regarding a tracked entity will be captured, nor do we guarantee the real-time accuracy of third-party data.
            </Typography>
          </Section>

          <Section title="3. Subscription Plans and Usage">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              <strong>3.1. Plan Tiers and Seat Limits.</strong> Access is granted based on the following Seat Limits (authorized individual users):
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>Standard:</strong> Up to 2 Seats</li>
              <li><strong>Pro:</strong> Up to 5 Seats</li>
              <li><strong>Enterprise:</strong> 15+ Seats (as specified in your Order Form)</li>
            </ul>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mt: 2 }}>
              Credentials may not be shared between multiple individuals. Each Seat must be assigned to a unique user.
            </Typography>
          </Section>

          <Section title="4. Fees and Payment">
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>4.1. Billing:</strong> Fees are billed in advance on a monthly or annual basis (“Billing Cycle”).</li>
              <li><strong>4.2. Auto-Renewal:</strong> Subscriptions automatically renew unless cancelled at least thirty (30) days prior to the renewal date.</li>
              <li><strong>4.3. Commitment:</strong> Cancellation does not waive the obligation to pay for the remainder of the current Billing Cycle. Annual commitments must be paid in full.</li>
              <li><strong>4.4. Taxes:</strong> Fees are exclusive of VAT. Cyprus-based VAT or EU Reverse Charge rules apply based on your location and VAT status.</li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            MiAmar owns all rights, titles, and interests in the Services, including AI algorithms and software. Customer retains ownership of its specific account configurations and internal notes.
          </Section>

          <Section title="6. Data Privacy and Security">
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>6.1. Privacy Policy:</strong> Our processing of personal data is governed by our <Link component={RouterLink} to="/privacy" sx={{ color: '#1e40af', fontWeight: 600 }}>Privacy Policy</Link>.</li>
              <li><strong>6.2. Anonymized Data:</strong> MiAmar may use anonymized, aggregated data derived from your use of the platform to improve its global AI models.</li>
              <li><strong>6.3. DPA:</strong> To the extent that MiAmar processes any Personal Data on your behalf, the MiAmar Data Processing Addendum (DPA) is hereby incorporated by reference into these Terms and shall apply to such processing.</li>
            </ul>
          </Section>

          <Section title="7. Disclaimer and Limitation of Liability">
            The Services are provided “AS-IS”. MiAmar is not liable for inaccuracies in third-party market data. Our total liability shall not exceed the amount paid by you in the twelve (12) months preceding the claim.
          </Section>

          <Section title="8. Governing Law">
            This Agreement is governed by the laws of the Republic of Cyprus. Exclusive jurisdiction for any disputes shall be the courts of Nicosia, Cyprus.
          </Section>

          <Section title="9. Changes to These Terms">
            We reserve the right to modify this Agreement from time to time. Material changes will be communicated to you by email or through the Services with reasonable advance notice. Your continued use of the Services after the effective date of any updated Agreement constitutes acceptance of the changes.
          </Section>

          <Section title="10. Contact" isLast>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              For questions about this Agreement, please contact us at:
            </Typography>
            <Typography variant="body1" sx={{ color: '#1e40af', fontWeight: 600, mt: 1 }}>
              <Link href="mailto:info@miamar.io">info@miamar.io</Link>
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b', mt: 1 }}>
              MiAmar Ltd<br />
              [Insert Registered Cyprus Office Address]
            </Typography>
          </Section>
        </Box>
      </Container>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: '#0f172a' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
              © {new Date().getFullYear()} MiAmar Ltd. All rights reserved.
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
