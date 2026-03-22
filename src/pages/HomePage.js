import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import {
  Timer as TimerIcon,
  FilterAlt as FilterAltIcon,
  TrendingUp as TrendingUpIcon,
  Verified as VerifiedIcon
} from '@mui/icons-material';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import VideoSection from '../components/VideoSection';
import PainPoints from '../components/PainPoints';
import FeatureShowcase from '../components/FeatureShowcase';
import CapabilitiesGrid from '../components/CapabilitiesGrid';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import FAQ from '../components/FAQ';
import ComparisonTable from '../components/ComparisonTable';
import BookDemoForm from '../components/BookDemoForm';
import Footer from '../components/Footer';

const metrics = [
  { icon: <FilterAltIcon sx={{ fontSize: 28, color: '#1e40af' }} />, value: '70%+', label: 'Noise filtered automatically' },
  { icon: <TimerIcon sx={{ fontSize: 28, color: '#0d9488' }} />, value: '2 min', label: 'Daily digest read time' },
  { icon: <TrendingUpIcon sx={{ fontSize: 28, color: '#f59e0b' }} />, value: '24/7', label: 'Continuous monitoring' },
  { icon: <VerifiedIcon sx={{ fontSize: 28, color: '#22c55e' }} />, value: '100%', label: 'Source-linked insights' },
];

const HomePage = () => (
  <>
    <SEO
      title="MiAmar | Competitive Intelligence for PMM & CI Teams"
      description="MiAmar ingests your Google Alerts and newsletters, filters the noise, and surfaces competitive signals that matter — so PMMs and CI teams always stay ahead."
      canonicalUrl="https://miamar.io/"
      ogTitle="MiAmar — Your Competitors Just Made 3 Moves. Did You Catch Them?"
      ogDescription="Ingests your alerts and newsletters, filters the noise, and surfaces competitive signals — built for PMM and CI teams."
      ogUrl="https://miamar.io/"
      breadcrumbs={[{ name: "Home", url: "https://miamar.io/" }]}
    />
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafbfc' }}>
      <Navbar />
      <HeroSection />
      <VideoSection />
      <PainPoints />
      {/* Value metrics */}
      <Box sx={{ py: { xs: 4, md: 6 }, bgcolor: '#f0f9ff' }}>
        <Container maxWidth="lg">
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
            gap: { xs: 3, md: 4 },
            textAlign: 'center'
          }}>
            {metrics.map((m, i) => (
              <Box key={i}>
                <Box sx={{ mb: 1 }}>{m.icon}</Box>
                <Typography sx={{ fontSize: { xs: '2rem', md: '2.5rem' }, fontWeight: 800, color: '#0f172a', lineHeight: 1 }}>
                  {m.value}
                </Typography>
                <Typography sx={{ color: '#64748b', fontSize: '0.9rem', mt: 0.5 }}>
                  {m.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>
      <FeatureShowcase />
      <CapabilitiesGrid />
      <HowItWorks />
      <UseCases />
      <FAQ />
      <ComparisonTable />
      <BookDemoForm />
      <Footer />
    </Box>
  </>
);

export default HomePage;
