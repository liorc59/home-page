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
import OrgReach from '../components/OrgReach';
import ProductSurfaces from '../components/ProductSurfaces';
import FeatureShowcase from '../components/FeatureShowcase';
import CapabilitiesGrid from '../components/CapabilitiesGrid';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import FAQ from '../components/FAQ';
import ComparisonTable from '../components/ComparisonTable';
import Differentiators from '../components/Differentiators';
import ExampleInsight from '../components/ExampleInsight';
import FinalCTA from '../components/FinalCTA';
import BookDemoForm from '../components/BookDemoForm';
import Footer from '../components/Footer';

const metrics = [
  { icon: <FilterAltIcon sx={{ fontSize: 28, color: '#1e40af' }} />, value: '70%+', label: 'Noise filtered automatically' },
  { icon: <TimerIcon sx={{ fontSize: 28, color: '#0d9488' }} />, value: '2 min', label: 'Daily digest read time' },
  { icon: <TrendingUpIcon sx={{ fontSize: 28, color: '#f59e0b' }} />, value: '24/7', label: 'Continuous monitoring' },
  { icon: <VerifiedIcon sx={{ fontSize: 28, color: '#22c55e' }} />, value: '100%', label: 'Source-linked insights*' },
];

const HomePage = () => (
  <>
    <SEO
      title="MiAmar | Competitive Intelligence, Automated for CI Teams"
      description="MiAmar filters your Google Alerts, newsletters, and LinkedIn into one ranked, explained feed — scored through your company's own lens. The competitive intelligence system built for CI teams."
      canonicalUrl="https://miamar.io/"
      ogTitle="MiAmar — Your Competitors Just Made 3 Moves. Did You Catch Them?"
      ogDescription="One ranked, explained feed — filtered from your alerts, newsletters, and LinkedIn, scored through your company's lens. Built for Competitive Intelligence teams."
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
          <Typography sx={{ color: '#94a3b8', fontSize: '0.75rem', textAlign: 'center', mt: 3 }}>
            * Source-linked today across Market Intelligence and MiAmar HR.
          </Typography>
        </Container>
      </Box>
      <OrgReach />
      <Differentiators />
      <ProductSurfaces />
      <ExampleInsight />
      <FeatureShowcase />
      <CapabilitiesGrid />
      <HowItWorks />
      <ComparisonTable />
      <UseCases />
      <FAQ />
      <FinalCTA />
      <BookDemoForm />
      <Footer />
    </Box>
  </>
);

export default HomePage;
