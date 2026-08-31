import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import MarketingPage, { DEMO_URL, CALENDLY_URL, FeatureRow, FinalCTABand } from '../../components/MarketingPage';

// One reusable solutions page, driven by a data object. Each of the 5 solutions
// pages is a thin wrapper that passes its own copy (from the brand copy deck).
export default function SolutionPage({ data }) {
  return (
    <MarketingPage
      seo={{
        title: data.metaTitle,
        description: data.metaDesc,
        canonicalUrl: `https://miamar.io/solutions/${data.slug}`,
        breadcrumbs: [
          { name: 'Home', url: 'https://miamar.io/' },
          { name: 'Solutions', url: 'https://miamar.io/' },
          { name: data.crumb, url: `https://miamar.io/solutions/${data.slug}` },
        ],
      }}
      crumbs={[{ label: 'Home', to: '/' }, { label: 'Solutions' }, { label: data.crumb }]}
      eyebrow={`Solutions · ${data.crumb}`}
      h1={data.h1}
      subhead={data.subhead}
      primary={data.primary}
      secondary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
    >
      <FeatureRow items={data.features} bgcolor="#f8fafc" />

      {/* Proof stat */}
      <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#ffffff', textAlign: 'center' }}>
        <Container maxWidth="sm">
          <Typography sx={{ fontSize: { xs: '2.5rem', md: '3rem' }, fontWeight: 800, background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: 1 }}>
            {data.stat.value}
          </Typography>
          <Typography sx={{ color: '#64748b', fontSize: '1rem', mt: 1 }}>{data.stat.label}</Typography>
        </Container>
      </Box>

      {/* Related */}
      {data.related?.length > 0 && (
        <Box sx={{ py: { xs: 4, md: 5 }, bgcolor: '#f8fafc', textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography sx={{ color: '#64748b', fontSize: '0.95rem' }}>
              Related:{' '}
              {data.related.map((r, i) => (
                <React.Fragment key={i}>
                  {i > 0 && '   ·   '}
                  <Link component={RouterLink} to={r.to} underline="hover" sx={{ color: '#1e40af', fontWeight: 600 }}>{r.label} →</Link>
                </React.Fragment>
              ))}
            </Typography>
          </Container>
        </Box>
      )}

      <FinalCTABand
        title="See it on your own market."
        subtitle="No signup needed to look around."
        primary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
        secondary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
      />
    </MarketingPage>
  );
}
