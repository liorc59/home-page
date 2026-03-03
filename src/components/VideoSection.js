import React, { useState, useRef } from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import { PlayArrow as PlayArrowIcon } from '@mui/icons-material';

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 0);
  };

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: '#fff' }}>
      <Container maxWidth="sm">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center', mb: 1,
            fontSize: { xs: '1.5rem', md: '2rem' },
            fontWeight: 700, color: '#0f172a'
          }}
        >
          See MiAmar in 45 seconds
        </Typography>
        <Typography
          sx={{ textAlign: 'center', mb: 4, color: '#64748b', fontSize: '1rem' }}
        >
          A quick look at how it all works.
        </Typography>

        <Box
          sx={{
            position: 'relative',
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 40px rgba(0,0,0,0.12)',
            border: '1px solid #e2e8f0',
            aspectRatio: '4/5',
            bgcolor: '#0f172a',
            cursor: playing ? 'default' : 'pointer',
          }}
          onClick={!playing ? handlePlay : undefined}
        >
          {!playing ? (
            <>
              <Box
                component="img"
                src="/video-poster.png"
                alt="MiAmar demo video"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(15, 23, 42, 0.3)',
                  transition: 'background 0.3s',
                  '&:hover': { background: 'rgba(15, 23, 42, 0.15)' },
                }}
              >
                <IconButton
                  sx={{
                    bgcolor: 'rgba(255,255,255,0.95)',
                    width: 72, height: 72,
                    '&:hover': { bgcolor: '#fff', transform: 'scale(1.08)' },
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 40, color: '#1e40af' }} />
                </IconButton>
              </Box>
            </>
          ) : (
            <Box
              component="video"
              ref={videoRef}
              src="/miamar-video.mp4"
              controls
              playsInline
              preload="metadata"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default VideoSection;
