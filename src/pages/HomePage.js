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
  RocketLaunch as RocketIcon,
  Speed as SpeedIcon,
  Email as EmailIcon,
  ArrowForward as ArrowForwardIcon,
  CheckCircle as CheckCircleIcon,
  Insights as InsightsIcon,
  Groups as GroupsIcon,
  TrendingUp as TrendingUpIcon,
  Notifications as NotificationsIcon,
  Dashboard as DashboardIcon,
  Business as BusinessIcon,
  Person as PersonIcon,
  Handshake as HandshakeIcon,
  Search as SearchIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {

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
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Link href="#arena" underline="none" sx={{ color: '#475569', fontWeight: 600, fontSize: '0.9rem', '&:hover': { color: '#1e40af' } }}>
              What is an Arena?
            </Link>
            <Link href="#features" underline="none" sx={{ color: '#475569', fontWeight: 600, fontSize: '0.9rem', '&:hover': { color: '#1e40af' } }}>
              Features
            </Link>
            <Link href="#contact" underline="none" sx={{ color: '#475569', fontWeight: 600, fontSize: '0.9rem', '&:hover': { color: '#1e40af' } }}>
              Contact
            </Link>
            <Button
              variant="contained"
              size="small"
              href="https://miamar.io/arena"
              target="_blank"
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
              }}
            >
              Get Started
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{
        pt: { xs: 14, md: 18 },
        pb: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 50%, #f0fdf4 100%)'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            <Typography variant="h1" sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: '#0f172a',
              mb: 3,
              lineHeight: 1.2
            }}>
              Build Your Arena.{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Know Everything.
              </Box>
            </Typography>
            <Typography variant="h5" sx={{
              color: '#64748b',
              fontWeight: 400,
              mb: 5,
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
              One intelligent workspace for your competitors, customers, prospects, and partners.
              AI-powered insights delivered to your team automatically.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                href="https://miamar.io/arena"
                target="_blank"
                startIcon={<RocketIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                  boxShadow: '0 8px 24px rgba(30, 64, 175, 0.3)',
                  '&:hover': {
                    background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)',
                    boxShadow: '0 12px 32px rgba(30, 64, 175, 0.4)'
                  }
                }}
              >
                Build Your Arena
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#arena"
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 700,
                  fontSize: '1rem',
                  borderColor: '#1e40af',
                  color: '#1e40af',
                  '&:hover': { borderColor: '#1e3a8a', bgcolor: '#eff6ff' }
                }}
              >
                What is an Arena?
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* What is an Arena Section */}
      <Box id="arena" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: '#0f172a', mb: 2 }}>
              What is an Arena?
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.1rem', maxWidth: 700, mx: 'auto' }}>
              Your Arena is a living map of everyone who matters to your business.
              One workspace. Complete visibility. AI-powered insights.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {/* Competitors */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{
                height: '100%',
                borderRadius: 3,
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.1)', borderColor: '#3b82f6' }
              }}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#eff6ff', display: 'inline-flex', mb: 2 }}>
                    <TrendingUpIcon sx={{ fontSize: 32, color: '#1e40af' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1 }}>
                    Competitors
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7 }}>
                    Track every move - product launches, hiring, funding, and news. Know what they're doing before your customers do.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Customers */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{
                height: '100%',
                borderRadius: 3,
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.1)', borderColor: '#22c55e' }
              }}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#f0fdf4', display: 'inline-flex', mb: 2 }}>
                    <BusinessIcon sx={{ fontSize: 32, color: '#16a34a' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1 }}>
                    Customers
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7 }}>
                    Stay ahead of churn signals and expansion opportunities. Monitor key accounts and spot risks early.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Prospects */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{
                height: '100%',
                borderRadius: 3,
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.1)', borderColor: '#f59e0b' }
              }}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#fffbeb', display: 'inline-flex', mb: 2 }}>
                    <SearchIcon sx={{ fontSize: 32, color: '#d97706' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1 }}>
                    Prospects
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7 }}>
                    Identify buying signals and trigger events. Know when prospects are ready - perfect timing for outreach.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            {/* Partners */}
            <Grid item xs={12} sm={6} md={3}>
              <Card sx={{
                height: '100%',
                borderRadius: 3,
                border: '1px solid #e2e8f0',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)', boxShadow: '0 12px 24px rgba(0,0,0,0.1)', borderColor: '#a855f7' }
              }}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <Box sx={{ p: 2, borderRadius: 2, bgcolor: '#faf5ff', display: 'inline-flex', mb: 2 }}>
                    <HandshakeIcon sx={{ fontSize: 32, color: '#7c3aed' }} />
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1 }}>
                    Partners
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#64748b', lineHeight: 1.7 }}>
                    Monitor partner ecosystems and alliance opportunities. Track their growth and strategic moves.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box id="features" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: '#0f172a', mb: 2 }}>
              Your Arena Powers Everything
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.1rem', maxWidth: 600, mx: 'auto' }}>
              Real-time data, AI insights, and smart notifications - all from one platform
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Real-Time Intelligence */}
            <Grid item xs={12} md={4}>
              <Card sx={{
                height: '100%',
                border: '2px solid #e2e8f0',
                borderRadius: 4,
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', borderColor: '#3b82f6' }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)' }}>
                      <DashboardIcon sx={{ fontSize: 32, color: '#1e40af' }} />
                    </Box>
                    <Typography variant="h5" sx={{ color: '#0f172a', fontWeight: 700 }}>
                      Real-Time Data
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ color: '#475569', mb: 3, lineHeight: 1.8 }}>
                    Your Arena continuously monitors multiple data sources for every company you track.
                  </Typography>

                  <Box>
                    {['LinkedIn posts & company updates', 'News articles & press releases', 'Funding rounds & financial events', 'Job postings & hiring trends', 'Leadership changes'].map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 18, color: '#22c55e' }} />
                        <Typography variant="body2" sx={{ color: '#475569' }}>{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* AI-Powered Insights */}
            <Grid item xs={12} md={4}>
              <Card sx={{
                height: '100%',
                border: '2px solid #e2e8f0',
                borderRadius: 4,
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', borderColor: '#0d9488' }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, background: 'linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)' }}>
                      <InsightsIcon sx={{ fontSize: 32, color: '#0d9488' }} />
                    </Box>
                    <Typography variant="h5" sx={{ color: '#0f172a', fontWeight: 700 }}>
                      AI Insights
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ color: '#475569', mb: 3, lineHeight: 1.8 }}>
                    Our AI analyzes patterns across your Arena and surfaces what matters most.
                  </Typography>

                  <Box>
                    {['Competitor threat alerts', 'Customer churn risk signals', 'Prospect buying indicators', 'Market trend detection', 'Actionable recommendations'].map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 18, color: '#22c55e' }} />
                        <Typography variant="body2" sx={{ color: '#475569' }}>{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            {/* Smart Notifications */}
            <Grid item xs={12} md={4}>
              <Card sx={{
                height: '100%',
                border: '2px solid #e2e8f0',
                borderRadius: 4,
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', borderColor: '#a855f7' }
              }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{ p: 1.5, borderRadius: 2, background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)' }}>
                      <NotificationsIcon sx={{ fontSize: 32, color: '#7c3aed' }} />
                    </Box>
                    <Typography variant="h5" sx={{ color: '#0f172a', fontWeight: 700 }}>
                      Smart Alerts
                    </Typography>
                  </Box>

                  <Typography variant="body1" sx={{ color: '#475569', mb: 3, lineHeight: 1.8 }}>
                    Get Arena insights delivered where your team works - Slack, email, or dashboard.
                  </Typography>

                  <Box>
                    {['Slack integration', 'Daily & weekly digests', 'Meeting prep briefs', 'Customizable alert types', 'Team-specific routing'].map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 18, color: '#22c55e' }} />
                        <Typography variant="body2" sx={{ color: '#475569' }}>{feature}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* How It Works Banner */}
      <Box sx={{
        py: 8,
        background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)'
      }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ color: 'white', fontWeight: 700, mb: 6, textAlign: 'center', fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
            Build Your Arena in Minutes
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{
                  width: 60, height: 60, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2,
                  fontSize: '1.5rem', fontWeight: 700, color: 'white'
                }}>1</Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>Add Your Companies</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  Paste a LinkedIn URL or company name - we handle the rest
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{
                  width: 60, height: 60, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2,
                  fontSize: '1.5rem', fontWeight: 700, color: 'white'
                }}>2</Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>We Monitor Everything</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  LinkedIn, news, funding, jobs - fresh data every day, no manual work
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={{ textAlign: 'center' }}>
                <Box sx={{
                  width: 60, height: 60, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', mx: 'auto', mb: 2,
                  fontSize: '1.5rem', fontWeight: 700, color: 'white'
                }}>3</Box>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 700, mb: 1 }}>Get AI Insights</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                  Competitor alerts, churn risks, buying signals - delivered to Slack or dashboard
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              href="https://miamar.io/arena"
              target="_blank"
              sx={{
                px: 5,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 700,
                bgcolor: 'white',
                color: '#1e40af',
                '&:hover': { bgcolor: '#f0f9ff' }
              }}
            >
              Start Building Your Arena
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Meeting Prep Feature */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Chip
                label="INCLUDED"
                sx={{ mb: 2, bgcolor: '#dbeafe', color: '#1e40af', fontWeight: 700 }}
              />
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: '#0f172a', mb: 3 }}>
                Meeting Prep
              </Typography>
              <Typography variant="body1" sx={{ color: '#64748b', mb: 4, lineHeight: 1.8, fontSize: '1.1rem' }}>
                Get meeting-ready in 60 seconds. Our AI analyzes company data from your Arena to generate
                tactical talking points, questions to ask, and conversation scripts.
              </Typography>

              <Box sx={{ mb: 4 }}>
                {['AI-generated meeting briefs', 'Tactical talking points & scripts', 'Company connection insights', 'Real-time data from your Arena'].map((feature, idx) => (
                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
                    <CheckCircleIcon sx={{ fontSize: 20, color: '#22c55e' }} />
                    <Typography variant="body1" sx={{ color: '#475569' }}>{feature}</Typography>
                  </Box>
                ))}
              </Box>

              <Button
                variant="contained"
                size="large"
                href="https://miamar.io/meeting_prep"
                target="_blank"
                startIcon={<SpeedIcon />}
                sx={{
                  px: 4,
                  py: 1.5,
                  textTransform: 'none',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                  '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
                }}
              >
                Try Meeting Prep
              </Button>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, borderRadius: 4, bgcolor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: '#eff6ff' }}>
                    <SpeedIcon sx={{ fontSize: 28, color: '#1e40af' }} />
                  </Box>
                  <Box>
                    <Typography variant="body2" sx={{ color: '#64748b', fontWeight: 600 }}>Meeting with</Typography>
                    <Typography variant="h6" sx={{ color: '#0f172a', fontWeight: 700 }}>Acme Corporation</Typography>
                  </Box>
                </Box>
                <Divider sx={{ mb: 3 }} />
                <Typography variant="subtitle2" sx={{ color: '#1e40af', fontWeight: 700, mb: 1 }}>Key Talking Points</Typography>
                <Typography variant="body2" sx={{ color: '#475569', mb: 2, lineHeight: 1.7 }}>
                  • Recent Series B funding ($45M) - discuss growth plans<br/>
                  • New VP of Sales hire - potential champion<br/>
                  • Competitor X partnership announced last week
                </Typography>
                <Typography variant="subtitle2" sx={{ color: '#0d9488', fontWeight: 700, mb: 1 }}>Questions to Ask</Typography>
                <Typography variant="body2" sx={{ color: '#475569', lineHeight: 1.7 }}>
                  • How is the team scaling post-funding?<br/>
                  • What's driving the sales team expansion?
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 700, color: '#0f172a', mb: 3 }}>
                Ready to Build Your Arena?
              </Typography>
              <Typography variant="body1" sx={{ color: '#64748b', mb: 4, lineHeight: 1.8 }}>
                Start tracking your competitors, customers, and market in minutes.
                Have questions? We'd love to help you get started.
              </Typography>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: '#eff6ff' }}>
                  <EmailIcon sx={{ color: '#1e40af' }} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
                    Email
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#0f172a', fontWeight: 600 }}>
                    <Link href="mailto:info@miamar.io" underline="hover" sx={{ color: '#1e40af' }}>
                      info@miamar.io
                    </Link>
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ p: 1.5, borderRadius: 2, bgcolor: '#f0fdf4' }}>
                  <GroupsIcon sx={{ color: '#0d9488' }} />
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: '#64748b', fontWeight: 600, textTransform: 'uppercase' }}>
                    For Enterprise
                  </Typography>
                  <Typography variant="body1" sx={{ color: '#0f172a', fontWeight: 600 }}>
                    <Link href="mailto:info@miamar.io?subject=Enterprise Inquiry" underline="hover" sx={{ color: '#0d9488' }}>
                      Contact Sales Team
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={{ p: 4, borderRadius: 4, boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}>
                <Typography variant="h3" sx={{ color: '#0f172a', fontWeight: 700, mb: 2, fontSize: '1.5rem' }}>
                  Get Started Today
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
                  Create your Arena and start tracking your competitive landscape in minutes.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  href="https://miamar.io/arena"
                  target="_blank"
                  startIcon={<RocketIcon />}
                  sx={{
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 700,
                    fontSize: '1rem',
                    background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                    '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
                  }}
                >
                  Build Your Arena
                </Button>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 6, bgcolor: '#0f172a' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'white' }}>
                  MiAmar
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.8, maxWidth: 300 }}>
                Build your Arena - one intelligent workspace for competitors, customers, prospects, and partners.
              </Typography>
            </Grid>

            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                Product
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="#arena" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                  What is an Arena?
                </Link>
                <Link href="#features" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                  Features
                </Link>
                <Link href="https://miamar.io/meeting_prep" target="_blank" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                  Meeting Prep
                </Link>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                Company
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link component={RouterLink} to="/" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                  Home
                </Link>
                <Link href="#contact" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                  Contact
                </Link>
              </Box>
            </Grid>

            <Grid item xs={6} md={2}>
              <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                Legal
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link component={RouterLink} to="/terms" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                  Terms & Conditions
                </Link>
                <Link component={RouterLink} to="/privacy" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                  Privacy Policy
                </Link>
              </Box>
            </Grid>
          </Grid>

          <Divider sx={{ my: 4, borderColor: '#1e293b' }} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
              © {new Date().getFullYear()} MiAmar. All rights reserved.
            </Typography>
            <Typography variant="body2" sx={{ color: '#64748b' }}>
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
