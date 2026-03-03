import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { CheckCircle as CheckCircleIcon } from '@mui/icons-material';
import ScreenshotFrame from './ScreenshotFrame';

const features = [
  {
    title: 'See your entire market at a glance',
    subtitle: 'Market Intelligence Dashboard',
    bullets: [
      'AI-prioritized signal feed across all tracked companies',
      'High-priority vs. watch-level signal separation',
      'Growth signal tracking and trend detection',
      'Most active accounts highlighted automatically'
    ],
    screenshot: '/screenshots/market-at-a-glance.png',
    screenshotAlt: 'Market intelligence dashboard',
    imageRight: true
  },
  {
    title: 'Never miss a competitor move',
    subtitle: 'Event Intelligence',
    bullets: [
      'AI-classified event types (product launches, funding, hires)',
      'Key takeaway extraction from every event',
      'Source attribution and direct links',
      'Filter by company, event type, or time range'
    ],
    screenshot: '/screenshots/events-feed.png',
    screenshotAlt: 'Events feed with AI classification',
    overlay: '/screenshots/event-detail.png',
    overlayAlt: 'Event detail view',
    imageRight: false
  },
  {
    title: 'Walk into every meeting with an unfair advantage',
    subtitle: 'AI Prospect & Client Cards',
    bullets: [
      'Complete prospect snapshot in one view',
      'Pain points matched to your product fit',
      'Competitive landscape per prospect account'
    ],
    screenshot: '/screenshots/prospect-card.png',
    screenshotAlt: 'AI prospect card',
    imageRight: true
  },
  {
    title: 'Track how competitor products evolve',
    subtitle: 'Product Intelligence',
    bullets: [
      'Product tracking per competitor',
      'Change history and version monitoring',
      'Related events linked to product updates',
      'Category tagging for easy comparison'
    ],
    screenshot: '/screenshots/product-intelligence.png',
    screenshotAlt: 'Product intelligence tracking',
    imageRight: false
  }
];

const FeatureBlock = ({ feature, index }) => {
  const { title, subtitle, bullets, screenshot, screenshotAlt, overlay, overlayAlt, imageRight } = feature;

  const textContent = (
    <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography sx={{ color: '#1e40af', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: 1, mb: 1 }}>
        {subtitle}
      </Typography>
      <Typography variant="h3" sx={{ fontSize: { xs: '1.5rem', md: '2rem' }, fontWeight: 700, color: '#0f172a', mb: 2, lineHeight: 1.2 }}>
        {title}
      </Typography>
      <Box>
        {bullets.map((bullet, idx) => (
          <Box key={idx} sx={{ display: 'flex', alignItems: 'flex-start', gap: 1.5, mb: 1.5 }}>
            <CheckCircleIcon sx={{ fontSize: 18, color: '#22c55e', mt: 0.3 }} />
            <Typography sx={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.6 }}>{bullet}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );

  const imageContent = (
    <Box sx={{ flex: 1, position: 'relative' }}>
      <ScreenshotFrame src={screenshot} alt={screenshotAlt} />
      {overlay && (
        <ScreenshotFrame
          src={overlay}
          alt={overlayAlt}
          sx={{
            position: 'absolute',
            bottom: -20,
            right: -10,
            width: '55%',
            zIndex: 1
          }}
        />
      )}
    </Box>
  );

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: imageRight ? 'row' : 'row-reverse' },
      gap: { xs: 4, md: 6 },
      alignItems: 'center',
      py: { xs: 4, md: 6 }
    }}>
      {textContent}
      {imageContent}
    </Box>
  );
};

const FeatureShowcase = () => (
  <Box id="platform" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
        <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2 }}>
          One workspace. Every signal that matters.
        </Typography>
      </Box>
      {features.map((feature, idx) => (
        <FeatureBlock key={idx} feature={feature} index={idx} />
      ))}
    </Container>
  </Box>
);

export default FeatureShowcase;
