import React, { useEffect } from 'react';
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
  Science as ScienceIcon,
  Groups as GroupsIcon
} from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

const HomePage = () => {
  useEffect(() => {
    document.title = 'MiAmar - AI-Powered Sales Intelligence | Meeting Prep & Competitive Intelligence';
  }, []);

  return (
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
            <Link href="#products" underline="none" sx={{ color: '#475569', fontWeight: 600, fontSize: '0.9rem', '&:hover': { color: '#1e40af' } }}>
              Products
            </Link>
            <Link href="#contact" underline="none" sx={{ color: '#475569', fontWeight: 600, fontSize: '0.9rem', '&:hover': { color: '#1e40af' } }}>
              Contact
            </Link>
            <Button
              variant="contained"
              size="small"
              href="https://miamar.io/meeting_prep"
              target="_blank"
              sx={{
                textTransform: 'none',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
              }}
            >
              Try Free Beta
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
          <Box sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Chip
              label="Now in Free Beta"
              sx={{
                mb: 3,
                bgcolor: '#dbeafe',
                color: '#1e40af',
                fontWeight: 700,
                fontSize: '0.85rem',
                height: 32
              }}
            />
            <Typography variant="h1" sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              fontWeight: 800,
              color: '#0f172a',
              mb: 3,
              lineHeight: 1.2
            }}>
              Sales Intelligence,{' '}
              <Box component="span" sx={{ background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Simplified
              </Box>
            </Typography>
            <Typography variant="h5" sx={{
              color: '#64748b',
              fontWeight: 400,
              mb: 5,
              lineHeight: 1.6,
              fontSize: { xs: '1.1rem', md: '1.25rem' }
            }}>
              Empower your sales team with AI-driven insights. Get meeting-ready in 60 seconds
              and track competitive intelligence effortlessly.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button
                variant="contained"
                size="large"
                href="https://miamar.io/meeting_prep"
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
                Start Free Beta
              </Button>
              <Button
                variant="outlined"
                size="large"
                href="#products"
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
                Learn More
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Products Section */}
      <Box id="products" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: '#0f172a', mb: 2 }}>
              Our Products
            </Typography>
            <Typography variant="body1" sx={{ color: '#64748b', fontSize: '1.1rem', maxWidth: 600, mx: 'auto' }}>
              AI-powered tools designed to give your sales team the competitive edge
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {/* Meeting Prep Card */}
            <Grid item xs={12} md={6}>
              <Card sx={{
                height: '100%',
                border: '2px solid',
                borderColor: '#3b82f6',
                borderRadius: 4,
                position: 'relative',
                overflow: 'visible',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)' }
              }}>
                <Chip
                  label="FREE BETA"
                  sx={{
                    position: 'absolute',
                    top: -12,
                    right: 24,
                    bgcolor: '#22c55e',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.75rem'
                  }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{
                      p: 1.5,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)'
                    }}>
                      <SpeedIcon sx={{ fontSize: 32, color: '#1e40af' }} />
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ color: '#0f172a', fontSize: '1.5rem' }}>
                        Meeting Prep
                      </Typography>
                      <Chip label="Beta" size="small" sx={{ bgcolor: '#dbeafe', color: '#1e40af', fontWeight: 600, mt: 0.5 }} />
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ color: '#475569', mb: 3, lineHeight: 1.8 }}>
                    Get meeting-ready in 60 seconds. Our AI analyzes company data, social posts, and news
                    to generate tactical talking points, questions to ask, and conversation scripts.
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    {['AI-generated meeting briefs', 'Tactical talking points & scripts', 'Company connection insights', 'Real-time data from LinkedIn & news'].map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 18, color: '#22c55e' }} />
                        <Typography variant="body2" sx={{ color: '#475569' }}>{feature}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="contained"
                    fullWidth
                    href="https://miamar.io/meeting_prep"
                    target="_blank"
                    endIcon={<ArrowForwardIcon />}
                    sx={{
                      py: 1.5,
                      textTransform: 'none',
                      fontWeight: 700,
                      background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                      '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
                    }}
                  >
                    Try Free Beta
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Arena Card */}
            <Grid item xs={12} md={6}>
              <Card sx={{
                height: '100%',
                border: '2px solid',
                borderColor: '#a855f7',
                borderRadius: 4,
                position: 'relative',
                overflow: 'visible',
                transition: 'all 0.3s ease',
                '&:hover': { transform: 'translateY(-8px)', boxShadow: '0 20px 40px rgba(168, 85, 247, 0.15)' }
              }}>
                <Chip
                  label="ALPHA"
                  sx={{
                    position: 'absolute',
                    top: -12,
                    right: 24,
                    bgcolor: '#a855f7',
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '0.75rem'
                  }}
                />
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                    <Box sx={{
                      p: 1.5,
                      borderRadius: 2,
                      background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)'
                    }}>
                      <ScienceIcon sx={{ fontSize: 32, color: '#7c3aed' }} />
                    </Box>
                    <Box>
                      <Typography variant="h4" sx={{ color: '#0f172a', fontSize: '1.5rem' }}>
                        Arena
                      </Typography>
                      <Chip label="Alpha" size="small" sx={{ bgcolor: '#f3e8ff', color: '#7c3aed', fontWeight: 600, mt: 0.5 }} />
                    </Box>
                  </Box>

                  <Typography variant="body1" sx={{ color: '#475569', mb: 3, lineHeight: 1.8 }}>
                    Competitive intelligence dashboard. Track competitors, monitor market movements,
                    and stay ahead with real-time insights from across the web.
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    {['Competitor tracking & monitoring', 'Market intelligence dashboard', 'Automated alerts & updates', 'Custom watchlists'].map((feature, idx) => (
                      <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                        <CheckCircleIcon sx={{ fontSize: 18, color: '#a855f7' }} />
                        <Typography variant="body2" sx={{ color: '#475569' }}>{feature}</Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button
                    variant="outlined"
                    fullWidth
                    href="mailto:info@miamar.io?subject=Arena Alpha Access Request"
                    endIcon={<EmailIcon />}
                    sx={{
                      py: 1.5,
                      textTransform: 'none',
                      fontWeight: 700,
                      borderColor: '#a855f7',
                      color: '#7c3aed',
                      '&:hover': { borderColor: '#7c3aed', bgcolor: '#faf5ff' }
                    }}
                  >
                    Request Alpha Access
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Beta Banner */}
      <Box sx={{
        py: 6,
        background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)'
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h4" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
              Free Beta - Limited Time
            </Typography>
            <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.9)', mb: 3, maxWidth: 600, mx: 'auto' }}>
              Meeting Prep is currently in free beta. Try it now and help us shape the future of sales intelligence.
              No credit card required.
            </Typography>
            <Button
              variant="contained"
              size="large"
              href="https://miamar.io/meeting_prep"
              target="_blank"
              sx={{
                px: 4,
                py: 1.5,
                textTransform: 'none',
                fontWeight: 700,
                bgcolor: 'white',
                color: '#1e40af',
                '&:hover': { bgcolor: '#f0f9ff' }
              }}
            >
              Get Started Free
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: '#f8fafc' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, color: '#0f172a', mb: 3 }}>
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ color: '#64748b', mb: 4, lineHeight: 1.8 }}>
                Have questions? Want early access to Arena? We'd love to hear from you.
                Reach out to our team and we'll get back to you as soon as possible.
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
                    For Enterprise Inquiries
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
                <Typography variant="h5" sx={{ color: '#0f172a', fontWeight: 700, mb: 3 }}>
                  Request Arena Alpha Access
                </Typography>
                <Typography variant="body2" sx={{ color: '#64748b', mb: 3 }}>
                  Arena is currently in alpha testing with select customers. Contact us to request early access.
                </Typography>
                <Button
                  variant="contained"
                  fullWidth
                  href="mailto:info@miamar.io?subject=Arena Alpha Access Request&body=Hi MiAmar team,%0D%0A%0D%0AI'm interested in getting early access to Arena.%0D%0A%0D%0ACompany: %0D%0ARole: %0D%0AUse case: %0D%0A%0D%0AThanks!"
                  startIcon={<EmailIcon />}
                  sx={{
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                    '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
                  }}
                >
                  Request Access
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
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 800, color: 'white' }}>
                  MiAmar
                </Typography>
              </Box>
              <Typography variant="body2" sx={{ color: '#94a3b8', lineHeight: 1.8 }}>
                AI-powered sales intelligence tools to help you prepare better, sell smarter, and win more.
              </Typography>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="subtitle2" sx={{ color: 'white', fontWeight: 700, mb: 2, textTransform: 'uppercase', letterSpacing: 1 }}>
                Products
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <Link href="https://miamar.io/meeting_prep" target="_blank" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                  Meeting Prep (Beta)
                </Link>
                <Link href="mailto:info@miamar.io?subject=Arena Access" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                  Arena (Alpha)
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
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
                <Link href="mailto:info@miamar.io" underline="hover" sx={{ color: '#94a3b8', '&:hover': { color: 'white' } }}>
                  Contact Us
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
  );
};

export default HomePage;
