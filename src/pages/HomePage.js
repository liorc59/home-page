import React from 'react';
import SEO from '../components/SEO';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Chip,
  Grid,
  AppBar,
  Toolbar,
  Link,
  Divider
} from '@mui/material';
import {
  Email as EmailIcon,
  CheckCircle as CheckCircleIcon,
  Insights as InsightsIcon,
  Groups as GroupsIcon,
  TrendingUp as TrendingUpIcon,
  Notifications as NotificationsIcon,
  Dashboard as DashboardIcon,
  Business as BusinessIcon,
  Handshake as HandshakeIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {

  const contactEmail = "mailto:info@miamar.io?subject=Arena Access Request&body=Hi MiAmar team,%0D%0A%0D%0AI'm interested in learning more about Arena.%0D%0A%0D%0ACompany: %0D%0ARole: %0D%0A%0D%0AThanks!";

  return (
    <>
      <SEO
        title="MiAmar | Build Your Arena - AI-Powered Competitive Intelligence"
        description="Create your Arena - one intelligent workspace to track competitors, customers, prospects, and partners. Get AI-powered insights delivered to your team automatically."
        canonicalUrl="https://miamar.io/"
        ogTitle="MiAmar - Build Your Arena"
        ogDescription="One intelligent workspace for your competitors, customers, prospects, and partners. AI-powered insights delivered to your team."
        ogUrl="https://miamar.io/"
        breadcrumbs={[{ name: "Home", url: "https://miamar.io/" }]}
      />
      <Box sx={{ minHeight: '100vh', bgcolor: '#fafbfc' }}>
      {/* Navigation */}
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
        <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1200, width: '100%', mx: 'auto', px: { xs: 2, md: 4 } }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              component="img"
              src="/logo.png"
              alt="MiAmar"
              sx={{ width: 36, height: 36, borderRadius: 1 }}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <Typography variant="h6" sx={{ fontWeight: 800, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              MiAmar
            </Typography>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3, alignItems: 'center' }}>
            <Link href="#arena" underline="none" sx={{ color: '#475569', fontWeight: 500, fontSize: '0.95rem', '&:hover': { color: '#1e40af' } }}>
              What is an Arena?
            </Link>
            <Link href="#features" underline="none" sx={{ color: '#475569', fontWeight: 500, fontSize: '0.95rem', '&:hover': { color: '#1e40af' } }}>
              Features
            </Link>
            <Link href="#contact" underline="none" sx={{ color: '#475569', fontWeight: 500, fontSize: '0.95rem', '&:hover': { color: '#1e40af' } }}>
              Contact
            </Link>
            <Button
              variant="contained"
              size="small"
              href={contactEmail}
              startIcon={<EmailIcon />}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                px: 2.5,
                background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
              }}
            >
              Get in Touch
            </Button>
          </Box>
          {/* Mobile menu button */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <Button
              variant="contained"
              size="small"
              href={contactEmail}
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
              }}
            >
              Contact
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{
        pt: { xs: 14, md: 20 },
        pb: { xs: 10, md: 14 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)'
      }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h1" sx={{
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
              fontWeight: 800,
              color: '#0f172a',
              mb: 3,
              lineHeight: 1.1
            }}>
              Build Your Arena.
              <br />
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Know Everything.
              </Box>
            </Typography>
            <Typography sx={{
              color: '#64748b',
              fontWeight: 400,
              mb: 5,
              lineHeight: 1.7,
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              maxWidth: 600,
              mx: 'auto'
            }}>
              One intelligent workspace for your competitors, customers, prospects, and partners.
              AI-powered insights delivered to your team automatically.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                href={contactEmail}
                startIcon={<EmailIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                  boxShadow: '0 8px 24px rgba(30, 64, 175, 0.25)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)',
                    boxShadow: '0 12px 32px rgba(30, 64, 175, 0.35)'
                  }
                }}
              >
                Request Access
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#arena"
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: 2,
                  borderColor: '#cbd5e1',
                  color: '#475569',
                  '&:hover': { borderColor: '#1e40af', color: '#1e40af', bgcolor: '#f8fafc' }
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* What is an Arena Section */}
      <Box id="arena" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2 }}>
              What is an Arena?
            </Typography>
            <Typography sx={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 600, mx: 'auto', lineHeight: 1.7 }}>
              Your Arena is a living map of everyone who matters to your business.
              One workspace. Complete visibility. AI-powered insights.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {[
              { icon: <TrendingUpIcon sx={{ fontSize: 28, color: '#1e40af' }} />, title: 'Competitors', desc: 'Track every move - product launches, hiring, funding, and news. Know what they\'re doing before your customers do.', color: '#eff6ff', border: '#3b82f6' },
              { icon: <BusinessIcon sx={{ fontSize: 28, color: '#16a34a' }} />, title: 'Customers', desc: 'Stay ahead of churn signals and expansion opportunities. Monitor key accounts and spot risks early.', color: '#f0fdf4', border: '#22c55e' },
              { icon: <SearchIcon sx={{ fontSize: 28, color: '#d97706' }} />, title: 'Prospects', desc: 'Identify buying signals and trigger events. Know when prospects are ready - perfect timing for outreach.', color: '#fffbeb', border: '#f59e0b' },
              { icon: <HandshakeIcon sx={{ fontSize: 28, color: '#7c3aed' }} />, title: 'Partners', desc: 'Monitor partner ecosystems and alliance opportunities. Track their growth and strategic moves.', color: '#faf5ff', border: '#a855f7' }
            ].map((item, idx) => (
              <Grid item xs={12} sm={6} md={3} key={idx}>
                <Card sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid #e2e8f0',
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.08)', borderColor: item.border }
                }}>
                  <CardContent sx={{ p: 3 }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: item.color, display: 'inline-flex', mb: 2 }}>
                      {item.icon}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.1rem' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7 }}>
                      {item.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box id="features" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2 }}>
              Your Arena Powers Everything
            </Typography>
            <Typography sx={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 550, mx: 'auto' }}>
              Real-time data, AI insights, and smart notifications - all from one platform
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[
              {
                icon: <DashboardIcon sx={{ fontSize: 28, color: '#1e40af' }} />,
                title: 'Real-Time Data',
                desc: 'Your Arena continuously monitors multiple data sources for every company you track.',
                features: ['LinkedIn posts & updates', 'News & press releases', 'Funding rounds', 'Job postings', 'Leadership changes'],
                gradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                border: '#3b82f6'
              },
              {
                icon: <InsightsIcon sx={{ fontSize: 28, color: '#0d9488' }} />,
                title: 'AI Insights',
                desc: 'Our AI analyzes patterns across your Arena and surfaces what matters most.',
                features: ['Competitor alerts', 'Churn risk signals', 'Buying indicators', 'Trend detection', 'Recommendations'],
                gradient: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)',
                border: '#0d9488'
              },
              {
                icon: <NotificationsIcon sx={{ fontSize: 28, color: '#7c3aed' }} />,
                title: 'Smart Alerts',
                desc: 'Get Arena insights delivered where your team works.',
                features: ['Slack integration', 'Email digests', 'Meeting prep', 'Custom alerts', 'Team routing'],
                gradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
                border: '#a855f7'
              }
            ].map((item, idx) => (
              <Grid item xs={12} md={4} key={idx}>
                <Card sx={{
                  height: '100%',
                  border: '1px solid #e2e8f0',
                  borderRadius: 3,
                  boxShadow: 'none',
                  transition: 'all 0.3s ease',
                  '&:hover': { transform: 'translateY(-6px)', boxShadow: '0 16px 32px rgba(0,0,0,0.08)', borderColor: item.border }
                }}>
                  <CardContent sx={{ p: 3.5 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2.5 }}>
                      <Box sx={{ p: 1.5, borderRadius: 2, background: item.gradient }}>
                        {item.icon}
                      </Box>
                      <Typography variant="h6" sx={{ color: '#0f172a', fontWeight: 700 }}>
                        {item.title}
                      </Typography>
                    </Box>

                    <Typography variant="body2" sx={{ color: '#64748b', mb: 2.5, lineHeight: 1.7 }}>
                      {item.desc}
                    </Typography>

                    <Box>
                      {item.features.map((feature, fIdx) => (
                        <Box key={fIdx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 0.75 }}>
                          <CheckCircleIcon sx={{ fontSize: 16, color: '#22c55e' }} />
                          <Typography variant="body2" sx={{ color: '#475569', fontSize: '0.875rem' }}>{feature}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* How It Works Banner */}
      <Box sx={{
        py: { xs: 8, md: 10 },
        background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, mb: 2, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            How It Works
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.8)', textAlign: 'center', mb: 6, maxWidth: 500, mx: 'auto' }}>
            Get started with your Arena in three simple steps
          </Typography>

          <Box sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 4, md: 6 }
          }}>
            {[
              { num: '1', title: 'Add Your Companies', desc: 'Paste a LinkedIn URL or company name - we handle the rest' },
              { num: '2', title: 'We Monitor Everything', desc: 'LinkedIn, news, funding, jobs - fresh data every day' },
              { num: '3', title: 'Get AI Insights', desc: 'Competitor alerts, churn risks, buying signals delivered' }
            ].map((step, idx) => (
              <Box key={idx} sx={{ textAlign: 'center', maxWidth: 280 }}>
                <Box sx={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  border: '2px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mx: 'auto',
                  mb: 2,
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'white'
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
              href={contactEmail}
              startIcon={<EmailIcon />}
              sx={{
                px: 4,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 700,
                borderRadius: 2,
                bgcolor: 'white',
                color: '#1e40af',
                '&:hover': { bgcolor: '#f8fafc' }
              }}
            >
              Request Access
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2 }}>
              Ready to Build Your Arena?
            </Typography>
            <Typography sx={{ color: '#64748b', fontSize: '1.05rem', maxWidth: 500, mx: 'auto', lineHeight: 1.7 }}>
              Get in touch to learn how MiAmar can help you track your competitive landscape.
            </Typography>
          </Box>

          <Card sx={{
            p: { xs: 4, md: 5 },
            borderRadius: 4,
            boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            border: '1px solid #e2e8f0',
            maxWidth: 500,
            mx: 'auto'
          }}>
            <Box sx={{ textAlign: 'center' }}>
              <Box sx={{
                p: 2,
                borderRadius: 2,
                bgcolor: '#eff6ff',
                display: 'inline-flex',
                mb: 3
              }}>
                <EmailIcon sx={{ fontSize: 32, color: '#1e40af' }} />
              </Box>

              <Typography variant="h5" sx={{ color: '#0f172a', fontWeight: 700, mb: 1 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ color: '#64748b', mb: 4 }}>
                Send us an email and we'll get back to you shortly
              </Typography>

              <Button
                variant="contained"
                fullWidth
                size="large"
                href={contactEmail}
                startIcon={<EmailIcon />}
                sx={{
                  py: 1.75,
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                  '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
                }}
              >
                info@miamar.io
              </Button>

              <Divider sx={{ my: 3 }} />

              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3 }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    General
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>
                    info@miamar.io
                  </Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="caption" sx={{ color: '#94a3b8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                    Enterprise
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#475569', fontWeight: 500 }}>
                    info@miamar.io
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Card>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 5, bgcolor: '#0f172a' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={5}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'white' }}>
                  MiAmar
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.7, maxWidth: 280 }}>
                Build your Arena - one intelligent workspace for competitors, customers, prospects, and partners.
              </Typography>
            </Grid>

            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 2, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
                Product
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#arena" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                  What is an Arena?
                </Link>
                <Link href="#features" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                  Features
                </Link>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 2, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#contact" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                  Contact
                </Link>
                <Link href="mailto:info@miamar.io" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                  info@miamar.io
                </Link>
              </Box>
            </Grid>

            <Grid item xs={6} md={3}>
              <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 600, mb: 2, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: 1 }}>
                Legal
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link component={RouterLink} to="/terms" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                  Terms & Conditions
                </Link>
                <Link component={RouterLink} to="/privacy" underline="hover" sx={{ color: '#94a3b8', fontSize: '0.9rem', '&:hover': { color: 'white' } }}>
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
          </Grid>

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
    </Box>
    </>
  );
};

export default HomePage;
