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

const PrivacyPage = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | MiAmar Ltd (Cyprus, GDPR)"
        description="MiAmar Ltd's GDPR-compliant Privacy Policy. Learn how we collect, use, and protect personal data as a Cyprus-incorporated B2B SaaS, including roles, legal basis, your rights, and international transfers."
        canonicalUrl="https://miamar.io/privacy"
        ogTitle="Privacy Policy | MiAmar"
        ogDescription="MiAmar Ltd's GDPR-compliant Privacy Policy for the Arena platform."
        ogUrl="https://miamar.io/privacy"
        breadcrumbs={[
          { name: "Home", url: "https://miamar.io/" },
          { name: "Privacy Policy", url: "https://miamar.io/privacy" }
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
          Privacy Policy
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', mb: 4 }}>
          Last updated: May 14, 2026
        </Typography>

        <Box sx={{ bgcolor: 'white', borderRadius: 3, p: { xs: 3, md: 5 }, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <Section title="1. Introduction">
            MiAmar Ltd (“we”, “our”, or “us”), a company incorporated in the Republic of Cyprus, is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use Arena (the “Services”). As a Cyprus entity, we process personal data in accordance with the EU General Data Protection Regulation (GDPR).
          </Section>

          <Section title="2. Roles and Responsibilities">
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>MiAmar as a Data Controller:</strong> We are the Controller of the personal data of our users (e.g., account information, billing details).</li>
              <li><strong>MiAmar as a Data Processor:</strong> When you upload or input specific business data into Arena, we act as a Processor. This processing is governed by our Data Processing Addendum (DPA).</li>
            </ul>
          </Section>

          <Section title="3. Information We Collect">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              <strong>3.1 Information You Provide</strong>
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>Account Data:</strong> Name, business email, job title, and password.</li>
              <li><strong>Billing Data:</strong> Tax ID (VAT number), billing address, and payment confirmation (processed via secure third-party gateways; we do not store full credit card numbers).</li>
              <li><strong>Customer Support:</strong> Records of communications when you contact us for help.</li>
            </ul>

            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2, mt: 3 }}>
              <strong>3.2 Information Collected Automatically</strong>
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>Usage Metadata:</strong> Log files, IP addresses, browser types, and timestamps of activity within the Arena dashboard.</li>
              <li><strong>Cookies:</strong> We use essential cookies for session management and analytical cookies to improve performance.</li>
            </ul>

            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2, mt: 3 }}>
              <strong>3.3 Publicly Sourced Data (The “Arena” Engine)</strong>
            </Typography>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              Our AI engine processes Publicly Available Information (PAI) to provide market insights. This includes:
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>Official company registers and websites.</li>
              <li>Public social media profiles and professional networking sites (e.g., LinkedIn).</li>
              <li>Public news, press releases, and financial reports.</li>
            </ul>
          </Section>

          <Section title="4. Legal Basis for Processing (GDPR)">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              We process your data under the following legal bases:
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>Performance of a Contract:</strong> To provide the Services you have paid for.</li>
              <li><strong>Legitimate Interests:</strong> To improve our AI models, ensure platform security, and conduct B2B marketing.</li>
              <li><strong>Legal Obligation:</strong> To comply with Cyprus tax laws and accounting requirements.</li>
            </ul>
          </Section>

          <Section title="5. How We Use Your Information">
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>To operate the Arena platform and generate competitive intelligence.</li>
              <li>To manage your subscription, billing, and seat limits.</li>
              <li><strong>AI Training:</strong> We may use anonymized, aggregated data to train and refine our market-monitoring algorithms. We do not sell your personal data to third parties.</li>
            </ul>
          </Section>

          <Section title="6. Data Sharing and Transfers">
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>Third-Party Providers:</strong> We use cloud infrastructure (e.g., AWS / Google Cloud) and AI processing units. All providers are GDPR-compliant.</li>
              <li><strong>International Transfers:</strong> If data is transferred outside the European Economic Area (EEA), we ensure “Standard Contractual Clauses” (SCCs) are in place to protect your data.</li>
              <li><strong>No Sale of Data:</strong> We never sell your personal information or the specific configurations of your Arena dashboard to third parties.</li>
            </ul>
          </Section>

          <Section title="7. Data Security">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              As a Cyprus-based entity, we implement high-standard technical and organizational measures (TOMs), including:
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>Encryption of data at rest (AES-256) and in transit (TLS 1.2+).</li>
              <li>Role-based access controls for our employees.</li>
              <li>Regular vulnerability scanning.</li>
            </ul>
          </Section>

          <Section title="8. Data Retention">
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>Account Data:</strong> Retained for the duration of your subscription plus 7 years (per Cyprus tax and audit laws).</li>
              <li><strong>Usage Data:</strong> Anonymized after 12 months for long-term product analytics.</li>
            </ul>
          </Section>

          <Section title="9. Your Rights (GDPR)">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              Under EU law, you have the following rights:
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>Access / Portability:</strong> Request a copy of your data.</li>
              <li><strong>Rectification:</strong> Correct inaccurate data.</li>
              <li><strong>Erasure (“Right to be Forgotten”):</strong> Request deletion of your account.</li>
              <li><strong>Restriction:</strong> Ask us to stop processing your data temporarily.</li>
              <li><strong>Lodge a Complaint:</strong> You have the right to contact the Cyprus Data Protection Commissioner (<Link href="https://www.dataprotection.gov.cy" target="_blank" rel="noopener noreferrer" sx={{ color: '#1e40af', fontWeight: 600 }}>www.dataprotection.gov.cy</Link>).</li>
            </ul>
          </Section>

          <Section title="10. Changes to This Policy">
            We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our Services. Your continued use of our Services after the effective date of any updated Policy constitutes acceptance of the changes.
          </Section>

          <Section title="11. Contact Us" isLast>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              For any privacy-related inquiries or to exercise your rights, please contact our Data Protection representative at:
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
              <Link component={RouterLink} to="/terms" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                Terms & Conditions
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

export default PrivacyPage;
