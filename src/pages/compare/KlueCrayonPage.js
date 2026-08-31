import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import MarketingPage, { DEMO_URL, CALENDLY_URL, FinalCTABand } from '../../components/MarketingPage';

const rows = [
  { f: 'Pricing model', them: 'Per seat, enterprise contracts', us: 'Per arena — scales with complexity, not headcount' },
  { f: 'Competitor limits', them: 'Often capped, vendor-mediated to add more', us: 'No cap — add companies yourself, instantly, as admin' },
  { f: 'Filtering', them: 'Shows what changed', us: 'Explains why it matters, with a stated reason for every call' },
  { f: 'Setup', them: 'Manual configuration, often weeks', us: 'A few minutes — results within 24 hours' },
  { f: 'People signals', them: 'Not a core focus', us: 'MiAmar HR — hiring surges & exec moves, built in' },
];

const faqs = [
  { q: 'How is MiAmar different from Klue or Crayon?', a: 'No per-seat pricing, no cap on competitors tracked — add companies yourself, instantly. See the table above.' },
  { q: 'Can I switch from Klue or Crayon to MiAmar?', a: 'Most teams can set up a MiAmar arena in a few minutes and run it alongside an existing tool before switching over.' },
  { q: 'Do you integrate with our tools?', a: 'Yes — HubSpot, Slack, and Monday.com today.' },
];

const KlueCrayonPage = () => (
  <MarketingPage
    seo={{
      title: 'MiAmar vs. Klue & Crayon | A Real Alternative',
      description: 'Klue and Crayon price by seat and cap how many competitors you track. MiAmar prices per arena, with no cap and no vendor delay.',
      canonicalUrl: 'https://miamar.io/compare/klue-crayon-alternative',
      breadcrumbs: [
        { name: 'Home', url: 'https://miamar.io/' },
        { name: 'Compare', url: 'https://miamar.io/' },
        { name: 'Klue & Crayon', url: 'https://miamar.io/compare/klue-crayon-alternative' },
      ],
    }}
    crumbs={[{ label: 'Home', to: '/' }, { label: 'Compare' }, { label: 'Klue & Crayon' }]}
    eyebrow="Compare"
    h1="Is there a good alternative to Klue or Crayon? Yes."
    subhead="Klue and Crayon price by seat and cap how many competitors you track. MiAmar prices per arena, with no cap and no vendor delay — you manage it yourself, as admin."
    primary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    secondary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
  >
    {/* Comparison table */}
    <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: '#ffffff' }}>
      <Container maxWidth="md">
        <Box sx={{ border: '1px solid #e2e8f0', borderRadius: 3, overflow: 'hidden' }}>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', bgcolor: '#f8fafc', borderBottom: '1px solid #e2e8f0' }}>
            <Box sx={{ p: 2 }} />
            <Typography sx={{ p: 2, fontWeight: 700, color: '#64748b', fontSize: '0.9rem', textAlign: 'center' }}>Klue / Crayon</Typography>
            <Typography sx={{ p: 2, fontWeight: 800, color: '#1e40af', fontSize: '0.9rem', textAlign: 'center' }}>MiAmar</Typography>
          </Box>
          {rows.map((r, i) => (
            <Box key={i} sx={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr', borderBottom: i < rows.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
              <Typography sx={{ p: 2, fontWeight: 700, color: '#0f172a', fontSize: '0.9rem' }}>{r.f}</Typography>
              <Typography sx={{ p: 2, color: '#64748b', fontSize: '0.88rem', textAlign: 'center' }}>{r.them}</Typography>
              <Box sx={{ p: 2, display: 'flex', alignItems: 'flex-start', gap: 1, justifyContent: 'center' }}>
                <CheckCircleIcon sx={{ fontSize: 16, color: '#22c55e', mt: 0.3, flexShrink: 0 }} />
                <Typography sx={{ color: '#0f172a', fontSize: '0.88rem', fontWeight: 500 }}>{r.us}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
        <Typography sx={{ color: '#94a3b8', fontSize: '0.75rem', mt: 2, textAlign: 'center' }}>
          Comparison based on publicly available information as of 2026. Vendor offerings change — confirm current Klue/Crayon pricing and features.
        </Typography>
      </Container>
    </Box>

    {/* FAQ */}
    <Box sx={{ py: { xs: 7, md: 9 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="md">
        {faqs.map((x, i) => (
          <Box key={i} sx={{ mb: 3, p: 3, borderRadius: 2, bgcolor: '#fff', border: '1px solid #e2e8f0' }}>
            <Typography sx={{ fontWeight: 700, color: '#0f172a', mb: 1, fontSize: '1.02rem' }}>{x.q}</Typography>
            <Typography sx={{ color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem' }}>{x.a}</Typography>
          </Box>
        ))}
      </Container>
    </Box>

    <FinalCTABand
      title="See the difference on your own market."
      subtitle="No signup needed to look around."
      primary={{ label: 'Try the Interactive Demo', href: DEMO_URL, external: true }}
      secondary={{ label: 'Book a Live Demo', href: CALENDLY_URL, external: true }}
    />
  </MarketingPage>
);

export default KlueCrayonPage;
