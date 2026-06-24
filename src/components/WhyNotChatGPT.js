import React from 'react';
import { Box, Container, Typography, Card } from '@mui/material';
import {
  SmartToy as SmartToyIcon,
  Storage as StorageIcon,
  Loop as LoopIcon,
  Groups as GroupsIcon,
  TuneRounded as TuneIcon,
  CompareArrows as CompareArrowsIcon
} from '@mui/icons-material';

const points = [
  {
    icon: <LoopIcon sx={{ fontSize: 28, color: '#1e40af' }} />,
    prompt: '"Summarize this competitor\'s latest news"',
    reality: 'A prompt runs once. MiAmar monitors 24/7 — scraping LinkedIn posts, job listings, news, RSS feeds, and newsletters on a continuous schedule. No one remembers to paste URLs every morning.',
  },
  {
    icon: <StorageIcon sx={{ fontSize: 28, color: '#0d9488' }} />,
    prompt: '"Compare these two competitors"',
    reality: 'An LLM has no memory between sessions. MiAmar maintains a persistent database of every event, every post, every signal — across months. It detects trends, not just snapshots.',
  },
  {
    icon: <TuneIcon sx={{ fontSize: 28, color: '#f59e0b' }} />,
    prompt: '"Filter out the noise"',
    reality: 'We process hundreds of articles daily and filter 73% as noise. Our system learns what\'s relevant per arena — users mark filtered articles as interesting, and the AI adapts. A prompt can\'t learn from your feedback over time.',
  },
  {
    icon: <CompareArrowsIcon sx={{ fontSize: 28, color: '#8b5cf6' }} />,
    prompt: '"Track this event across sources"',
    reality: 'When 3 different sources report the same product launch, MiAmar merges them into one signal with all references. An LLM just gives you 3 separate summaries.',
  },
  {
    icon: <SmartToyIcon sx={{ fontSize: 28, color: '#dc2626' }} />,
    prompt: '"Make me a battlecard"',
    reality: 'Anyone can generate a one-time battlecard. MiAmar\'s battlecards auto-update when new events are detected — new hires, product launches, partnerships — without anyone asking.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 28, color: '#059669' }} />,
    prompt: '"Share this with my team"',
    reality: 'A chat thread isn\'t a team workspace. MiAmar gives your entire team a shared intelligence dashboard with role-based access, activity tracking, and weekly digests.',
  },
];

const WhyNotChatGPT = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#0f172a' }}>
    <Container maxWidth="lg">
      <Typography
        variant="h3"
        sx={{
          fontWeight: 800,
          textAlign: 'center',
          mb: 1.5,
          fontSize: { xs: '1.75rem', md: '2.5rem' },
          color: '#fff',
        }}
      >
        "Why not just use ChatGPT?"
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          color: '#94a3b8',
          mb: { xs: 4, md: 6 },
          fontSize: { xs: '1rem', md: '1.15rem' },
          maxWidth: 700,
          mx: 'auto',
        }}
      >
        We get it. LLMs are powerful. But there's a difference between a prompt and a pipeline.
      </Typography>

      <Box sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
        gap: 3,
      }}>
        {points.map((p, i) => (
          <Card
            key={i}
            sx={{
              p: 3,
              bgcolor: '#1e293b',
              border: '1px solid #334155',
              borderRadius: 3,
              transition: 'border-color 0.2s',
              '&:hover': { borderColor: '#475569' },
            }}
            elevation={0}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
              <Box sx={{ mt: 0.5, flexShrink: 0 }}>{p.icon}</Box>
              <Box>
                <Typography
                  sx={{
                    color: '#f87171',
                    fontSize: '0.85rem',
                    fontFamily: 'monospace',
                    mb: 1,
                    bgcolor: '#0f172a',
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    display: 'inline-block',
                  }}
                >
                  {p.prompt}
                </Typography>
                <Typography sx={{ color: '#e2e8f0', fontSize: '0.95rem', lineHeight: 1.7 }}>
                  {p.reality}
                </Typography>
              </Box>
            </Box>
          </Card>
        ))}
      </Box>

      <Typography
        sx={{
          textAlign: 'center',
          mt: { xs: 4, md: 6 },
          color: '#64748b',
          fontSize: '0.95rem',
          fontStyle: 'italic',
        }}
      >
        A prompt gives you an answer. MiAmar gives you a system.
      </Typography>
    </Container>
  </Box>
);

export default WhyNotChatGPT;
