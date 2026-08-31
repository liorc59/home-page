import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import HomePage from './pages/HomePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import MarketIntelligencePage from './pages/product/MarketIntelligencePage';
import HRPage from './pages/product/HRPage';
import FieldPage from './pages/product/FieldPage';
import {
  CITeamsPage, PMMPage, BusinessDevelopmentPage, ProductManagersPage, TalentHRPage,
} from './pages/solutions/solutions';
import KlueCrayonPage from './pages/compare/KlueCrayonPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1e40af',
      light: '#3b82f6',
      dark: '#1e3a8a',
    },
    secondary: {
      main: '#0d9488',
      light: '#14b8a6',
      dark: '#0f766e',
    },
    background: {
      default: '#fafbfc',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 800,
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    h4: {
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/market-intelligence" element={<MarketIntelligencePage />} />
          <Route path="/product/hr" element={<HRPage />} />
          <Route path="/product/field" element={<FieldPage />} />
          <Route path="/solutions/ci-teams" element={<CITeamsPage />} />
          <Route path="/solutions/pmm" element={<PMMPage />} />
          <Route path="/solutions/business-development" element={<BusinessDevelopmentPage />} />
          <Route path="/solutions/product-managers" element={<ProductManagersPage />} />
          <Route path="/solutions/talent-hr" element={<TalentHRPage />} />
          <Route path="/compare/klue-crayon-alternative" element={<KlueCrayonPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
