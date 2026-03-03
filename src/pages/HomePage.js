import React from 'react';
import { Box } from '@mui/material';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PainPoints from '../components/PainPoints';
import FeatureShowcase from '../components/FeatureShowcase';
import CapabilitiesGrid from '../components/CapabilitiesGrid';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import BookDemoForm from '../components/BookDemoForm';
import Footer from '../components/Footer';

const HomePage = () => (
  <>
    <SEO
      title="MiAmar | Competitive Intelligence for PMMs & Product Teams"
      description="MiAmar monitors your competitors, prospects, and market 24/7. AI-powered battlecards, event intelligence, and prospect cards — so PMMs and PMs always walk in prepared."
      canonicalUrl="https://miamar.io/"
      ogTitle="MiAmar — Stop Scrambling for Competitive Intel"
      ogDescription="Monitor competitors, prospects, and market signals 24/7. AI-powered competitive intelligence for Product Marketing and Product teams."
      ogUrl="https://miamar.io/"
      breadcrumbs={[{ name: "Home", url: "https://miamar.io/" }]}
    />
    <Box sx={{ minHeight: '100vh', bgcolor: '#fafbfc' }}>
      <Navbar />
      <HeroSection />
      <PainPoints />
      <FeatureShowcase />
      <CapabilitiesGrid />
      <HowItWorks />
      <UseCases />
      <BookDemoForm />
      <Footer />
    </Box>
  </>
);

export default HomePage;
