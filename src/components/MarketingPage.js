import React, { useEffect } from 'react';
import { Box, Container, Typography, Button, Breadcrumbs, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowForward as ArrowForwardIcon, NavigateNext as NavigateNextIcon } from '@mui/icons-material';
import SEO from './SEO';
import Navbar from './Navbar';
import Footer from './Footer';

// Real, live links used across the marketing site.
export const DEMO_URL = 'https://miamar.io/arena/demo.html';
export const CALENDLY_URL = 'https://calendly.com/eran-miamar/30min';

// A primary/secondary CTA pair, styled to the brand gradient.
export function CTAButtons({ primary, secondary, sx }) {
  return (
    <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap', ...sx }}>
      {primary && (
        <Button
          variant="contained" size="large"
          href={primary.href} target={primary.external ? '_blank' : undefined} rel={primary.external ? 'noopener noreferrer' : undefined}
          endIcon={<ArrowForwardIcon />}
          sx={{
            px: 4, py: 1.5, textTransform: 'none', fontWeight: 700, fontSize: '1rem', borderRadius: 2,
            background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
            boxShadow: '0 8px 24px rgba(30, 64, 175, 0.25)',
            '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' },
          }}
        >
          {primary.label}
        </Button>
      )}
      {secondary && (
        <Button
          variant="outlined" size="large"
          href={secondary.href} target={secondary.external ? '_blank' : undefined} rel={secondary.external ? 'noopener noreferrer' : undefined}
          sx={{
            px: 4, py: 1.5, textTransform: 'none', fontWeight: 600, fontSize: '1rem', borderRadius: 2,
            borderColor: '#1e40af', color: '#1e40af',
            '&:hover': { bgcolor: '#eff6ff', borderColor: '#1e3a8a' },
          }}
        >
          {secondary.label}
        </Button>
      )}
    </Box>
  );
}

// A wrapped page: SEO head, navbar, a breadcrumb + hero, arbitrary children, and
// the shared footer. `crumbs` is [{label, to?}]; the last is the current page.
export default function MarketingPage({
  seo, crumbs = [], eyebrow, h1, subhead, primary, secondary, children,
}) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <>
      {seo && <SEO {...seo} />}
      <Box sx={{ minHeight: '100vh', bgcolor: '#fafbfc' }}>
        <Navbar />
        {/* Hero */}
        <Box sx={{ pt: { xs: 13, md: 16 }, pb: { xs: 5, md: 7 }, background: 'linear-gradient(180deg, #ffffff 0%, #f0f9ff 100%)' }}>
          <Container maxWidth="md">
            {crumbs.length > 0 && (
              <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} sx={{ justifyContent: 'center', display: 'flex', mb: 3, '& ol': { justifyContent: 'center' } }}>
                {crumbs.map((c, i) => (
                  c.to
                    ? <Link key={i} component={RouterLink} to={c.to} underline="hover" sx={{ color: '#64748b', fontSize: '0.85rem' }}>{c.label}</Link>
                    : <Typography key={i} sx={{ color: '#94a3b8', fontSize: '0.85rem' }}>{c.label}</Typography>
                ))}
              </Breadcrumbs>
            )}
            <Box sx={{ textAlign: 'center' }}>
              {eyebrow && (
                <Typography sx={{ display: 'inline-block', color: '#0d9488', fontWeight: 700, fontSize: { xs: '0.8rem', md: '0.9rem' }, letterSpacing: '0.04em', textTransform: 'uppercase', mb: 2, px: 1.5, py: 0.5, borderRadius: 5, bgcolor: '#f0fdfa' }}>
                  {eyebrow}
                </Typography>
              )}
              <Typography variant="h1" sx={{ fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' }, fontWeight: 800, color: '#0f172a', mb: 3, lineHeight: 1.15 }}>
                {h1}
              </Typography>
              {subhead && (
                <Typography sx={{ color: '#64748b', fontWeight: 400, mb: 4, lineHeight: 1.7, fontSize: { xs: '1.05rem', md: '1.2rem' }, maxWidth: 640, mx: 'auto' }}>
                  {subhead}
                </Typography>
              )}
              <CTAButtons primary={primary} secondary={secondary} />
            </Box>
          </Container>
        </Box>
        {children}
        <Footer />
      </Box>
    </>
  );
}

// A simple two-up feature block used across product/solutions pages.
export function FeatureRow({ items, bgcolor = '#ffffff' }) {
  return (
    <Box sx={{ py: { xs: 7, md: 9 }, bgcolor }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: `repeat(${Math.min(items.length, 3)}, 1fr)` }, gap: 4 }}>
          {items.map((it, i) => (
            <Box key={i} sx={{ p: 3.5, borderRadius: 3, border: '1px solid #e2e8f0', bgcolor: '#fff' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.1rem' }}>{it.title}</Typography>
              <Typography sx={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.98rem' }}>{it.desc}</Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}

// Centered screenshot in a browser frame.
export function ScreenshotBlock({ src, alt, caption }) {
  return (
    <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="md">
        <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.15)', border: '1px solid #e2e8f0' }}>
          <Box sx={{ bgcolor: '#f1f5f9', px: 2, py: 1.2, display: 'flex', gap: 0.8, borderBottom: '1px solid #e2e8f0' }}>
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ef4444' }} />
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#f59e0b' }} />
            <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#22c55e' }} />
          </Box>
          <Box component="img" src={src} alt={alt} sx={{ width: '100%', display: 'block' }} />
        </Box>
        {caption && (
          <Typography sx={{ color: '#94a3b8', fontSize: '0.78rem', textAlign: 'center', mt: 1.5 }}>{caption}</Typography>
        )}
      </Container>
    </Box>
  );
}

// A closing CTA band.
export function FinalCTABand({ title, subtitle, primary, secondary }) {
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)' }}>
      <Container maxWidth="md" sx={{ textAlign: 'center' }}>
        <Typography variant="h2" sx={{ color: '#fff', fontWeight: 700, mb: 1.5, fontSize: { xs: '1.6rem', md: '2.1rem' } }}>{title}</Typography>
        {subtitle && <Typography sx={{ color: 'rgba(255,255,255,0.85)', mb: 4, fontSize: '1.05rem' }}>{subtitle}</Typography>}
        <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
          {primary && (
            <Button variant="contained" size="large" href={primary.href} target={primary.external ? '_blank' : undefined} rel={primary.external ? 'noopener noreferrer' : undefined}
              sx={{ px: 4, py: 1.5, textTransform: 'none', fontWeight: 700, borderRadius: 2, bgcolor: '#fff', color: '#1e40af', '&:hover': { bgcolor: '#f8fafc' } }}>
              {primary.label}
            </Button>
          )}
          {secondary && (
            <Button variant="outlined" size="large" href={secondary.href} target={secondary.external ? '_blank' : undefined} rel={secondary.external ? 'noopener noreferrer' : undefined}
              sx={{ px: 4, py: 1.5, textTransform: 'none', fontWeight: 600, borderRadius: 2, borderColor: 'rgba(255,255,255,0.6)', color: '#fff', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}>
              {secondary.label}
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
