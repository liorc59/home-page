import React, { useState } from 'react';
import {
  Box, Container, Typography, TextField, Button, Card,
  MenuItem, Select, FormControl, InputLabel, Alert
} from '@mui/material';
import {
  CheckCircle as CheckCircleIcon,
  CreditCardOff as NoCreditCardIcon,
  PersonSearch as PersonSearchIcon,
  Speed as SpeedIcon
} from '@mui/icons-material';

const BookDemoForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', role: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setSubmitting(true);
    try {
      const res = await fetch('https://formspree.io/f/mpqjgbny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          role: formData.role || 'Not specified'
        })
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError('Something went wrong. Please try again or email us at info@miamar.io.');
      }
    } catch {
      setSubmitError('Network error. Please try again or email us at info@miamar.io.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  const trustPoints = [
    { icon: <NoCreditCardIcon sx={{ fontSize: 20, color: '#22c55e' }} />, text: 'Free during beta' },
    { icon: <PersonSearchIcon sx={{ fontSize: 20, color: '#22c55e' }} />, text: 'Your own competitive arena, set up for you' },
    { icon: <SpeedIcon sx={{ fontSize: 20, color: '#22c55e' }} />, text: 'See results within 24 hours' }
  ];

  return (
    <Box id="demo" sx={{ py: { xs: 8, md: 10 }, bgcolor: '#f8fafc' }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: { xs: 4, md: 6 },
          alignItems: 'center'
        }}>
          {/* Left column */}
          <Box>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.75rem', md: '2.25rem' }, fontWeight: 700, color: '#0f172a', mb: 2 }}>
              Join the Beta
            </Typography>
            <Typography sx={{ color: '#64748b', fontSize: '1.05rem', lineHeight: 1.7, mb: 2 }}>
              We're onboarding PMM and CI teams now. Join the beta waiting list and
              we'll get you set up with your own competitive arena.
            </Typography>
            <Typography sx={{ color: '#1e40af', fontSize: '0.95rem', fontWeight: 600, mb: 4 }}>
              Want to explore first? <a href="https://miamar.io/arena/demo.html" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline' }}>Try the interactive demo</a> — no signup needed.
            </Typography>
            <Box>
              {trustPoints.map((point, idx) => (
                <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
                  {point.icon}
                  <Typography sx={{ color: '#475569', fontWeight: 500, fontSize: '0.95rem' }}>{point.text}</Typography>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right column — form */}
          <Card sx={{
            p: { xs: 3, md: 4 }, borderRadius: 3,
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)', border: '1px solid #e2e8f0'
          }}>
            {submitted ? (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <CheckCircleIcon sx={{ fontSize: 56, color: '#22c55e', mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a', mb: 1 }}>
                  Thanks! We'll be in touch within 24 hours.
                </Typography>
                <Typography sx={{ color: '#64748b' }}>
                  Check your inbox for a confirmation email.
                </Typography>
              </Box>
            ) : (
              <Box component="form" onSubmit={handleSubmit} noValidate>
                <Typography variant="h5" sx={{ fontWeight: 700, color: '#0f172a', mb: 3 }}>
                  Join the Waiting List
                </Typography>
                {submitError && <Alert severity="error" sx={{ mb: 2 }}>{submitError}</Alert>}
                <TextField
                  fullWidth label="Full Name" required
                  value={formData.name} onChange={handleChange('name')}
                  error={!!errors.name} helperText={errors.name}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth label="Work Email" required type="email"
                  value={formData.email} onChange={handleChange('email')}
                  error={!!errors.email} helperText={errors.email}
                  sx={{ mb: 2 }}
                />
                <TextField
                  fullWidth label="Company Name" required
                  value={formData.company} onChange={handleChange('company')}
                  error={!!errors.company} helperText={errors.company}
                  sx={{ mb: 2 }}
                />
                <FormControl fullWidth sx={{ mb: 3 }}>
                  <InputLabel>Role (optional)</InputLabel>
                  <Select
                    value={formData.role} onChange={handleChange('role')}
                    label="Role (optional)"
                  >
                    <MenuItem value="">—</MenuItem>
                    <MenuItem value="Product Marketing">Product Marketing</MenuItem>
                    <MenuItem value="Competitive Intelligence">Competitive Intelligence</MenuItem>
                    <MenuItem value="Product Management">Product Management</MenuItem>
                    <MenuItem value="Sales / Revenue">Sales / Revenue</MenuItem>
                    <MenuItem value="Other">Other</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  type="submit" variant="contained" fullWidth size="large"
                  disabled={submitting}
                  sx={{
                    py: 1.5, textTransform: 'none', fontWeight: 700, fontSize: '1rem', borderRadius: 2,
                    background: 'linear-gradient(135deg, #1e40af 0%, #0d9488 100%)',
                    '&:hover': { background: 'linear-gradient(135deg, #1e3a8a 0%, #0f766e 100%)' }
                  }}
                >
                  {submitting ? 'Submitting...' : 'Join the Waiting List'}
                </Button>
              </Box>
            )}
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default BookDemoForm;
