import React from 'react';
import { Box } from '@mui/material';

const ScreenshotFrame = ({ src, alt, sx = {} }) => (
  <Box sx={{
    borderRadius: 2,
    overflow: 'hidden',
    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
    border: '1px solid #e2e8f0',
    ...sx
  }}>
    {/* Browser chrome bar */}
    <Box sx={{
      bgcolor: '#f1f5f9',
      px: 2,
      py: 1.2,
      display: 'flex',
      alignItems: 'center',
      gap: 0.8,
      borderBottom: '1px solid #e2e8f0'
    }}>
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#ef4444' }} />
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#f59e0b' }} />
      <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#22c55e' }} />
    </Box>
    {/* Screenshot */}
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{ width: '100%', display: 'block' }}
    />
  </Box>
);

export default ScreenshotFrame;
