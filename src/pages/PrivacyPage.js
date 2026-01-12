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

const PrivacyPage = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | MiAmar - AI-Powered Sales Intelligence</title>
        <meta name="description" content="Learn how MiAmar collects, uses, and protects your personal information. Our privacy policy covers data security, your rights, and our commitment to transparency." />
        <link rel="canonical" href="https://miamar.io/privacy" />
        <meta property="og:title" content="Privacy Policy | MiAmar" />
        <meta property="og:description" content="Learn how MiAmar protects your privacy and handles your data responsibly." />
        <meta property="og:url" content="https://miamar.io/privacy" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Privacy Policy | MiAmar" />
        <meta name="twitter:description" content="Learn how MiAmar protects your privacy and handles your data responsibly." />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://miamar.io/" },
              { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://miamar.io/privacy" }
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
          Privacy Policy
        </Typography>
        <Typography variant="body2" sx={{ color: '#64748b', mb: 4 }}>
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </Typography>

        <Box sx={{ bgcolor: 'white', borderRadius: 3, p: { xs: 3, md: 5 }, boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
          <Section title="1. Introduction">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              MiAmar ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, including Meeting Prep and Arena.
            </Typography>
          </Section>

          <Section title="2. Information We Collect">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              <strong>Information you provide:</strong>
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>Account information (name, email address)</li>
              <li>Company information you input for meeting preparation</li>
              <li>Communication data when you contact us</li>
              <li>Feedback and survey responses</li>
            </ul>

            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2, mt: 3 }}>
              <strong>Information collected automatically:</strong>
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>Usage data (pages visited, features used, time spent)</li>
              <li>Device information (browser type, operating system)</li>
              <li>IP address and approximate location</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2, mt: 3 }}>
              <strong>Publicly available data:</strong>
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>Company information from public sources (LinkedIn, news articles, company websites)</li>
              <li>Social media posts from public company profiles</li>
              <li>Publicly available news and press releases</li>
            </ul>
          </Section>

          <Section title="3. How We Use Your Information">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              We use your information to:
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>Provide, maintain, and improve our Services</li>
              <li>Generate AI-powered meeting briefs and insights</li>
              <li>Personalize your experience</li>
              <li>Communicate with you about updates and features</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Analyze usage patterns to improve our Services</li>
              <li>Protect against fraud and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing and Disclosure">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              We may share your information with:
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li><strong>Service providers:</strong> Third parties who help us operate our Services (hosting, analytics, AI processing)</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mt: 2 }}>
              We do not sell your personal information to third parties.
            </Typography>
          </Section>

          <Section title="5. AI and Data Processing">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              Our Services use artificial intelligence to process publicly available data and generate insights. The AI analyzes public company information, social media posts, and news articles. We do not access private or confidential information. AI-generated content may contain inaccuracies and should be independently verified.
            </Typography>
          </Section>

          <Section title="6. Data Security">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              We implement appropriate technical and organizational measures to protect your information, including encryption in transit and at rest, access controls, and regular security assessments. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </Typography>
          </Section>

          <Section title="7. Data Retention">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              We retain your information for as long as necessary to provide our Services and fulfill the purposes described in this policy. You may request deletion of your account and associated data at any time by contacting us.
            </Typography>
          </Section>

          <Section title="8. Your Rights">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mb: 2 }}>
              Depending on your location, you may have the following rights:
            </Typography>
            <ul style={{ color: '#475569', lineHeight: 2, marginTop: 0 }}>
              <li>Access and receive a copy of your personal data</li>
              <li>Correct inaccurate or incomplete data</li>
              <li>Delete your personal data</li>
              <li>Object to or restrict certain processing</li>
              <li>Data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8, mt: 2 }}>
              To exercise these rights, please contact us at info@miamar.io.
            </Typography>
          </Section>

          <Section title="9. Cookies">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              We use cookies and similar technologies to enhance your experience, analyze usage, and provide personalized content. You can manage your cookie preferences through your browser settings. Note that disabling certain cookies may affect the functionality of our Services.
            </Typography>
          </Section>

          <Section title="10. Third-Party Links">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              Our Services may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any information.
            </Typography>
          </Section>

          <Section title="11. Children's Privacy">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              Our Services are not intended for children under 16 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
            </Typography>
          </Section>

          <Section title="12. International Data Transfers">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place for such transfers in accordance with applicable data protection laws.
            </Typography>
          </Section>

          <Section title="13. Changes to This Policy">
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              We may update this Privacy Policy from time to time. We will notify you of significant changes via email or through our Services. Your continued use of our Services after changes constitutes acceptance of the updated policy.
            </Typography>
          </Section>

          <Section title="14. Contact Us" isLast>
            <Typography variant="body1" sx={{ color: '#475569', lineHeight: 1.8 }}>
              If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
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
