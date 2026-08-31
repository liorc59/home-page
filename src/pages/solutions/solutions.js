import React from 'react';
import SolutionPage from './SolutionPage';
import { DEMO_URL, CALENDLY_URL } from '../../components/MarketingPage';

const BOOK = { label: 'Book a Live Demo', href: CALENDLY_URL, external: true };
const DEMO = { label: 'Try the Interactive Demo', href: DEMO_URL, external: true };
const GET = { label: 'Get Started', href: DEMO_URL, external: true };

const ciTeams = {
  slug: 'ci-teams', crumb: 'CI Teams',
  metaTitle: 'MiAmar for CI Teams | Filtered, Explained Intelligence',
  metaDesc: 'MiAmar filters every Google Alert, RSS feed, and LinkedIn page you\'d check by hand, with a stated reason for every call it makes.',
  h1: "You're not short on alerts. You're short on time.",
  subhead: "MiAmar filters every Google Alert, RSS feed, and LinkedIn page you'd check by hand, with a stated reason for every call it makes.",
  primary: BOOK,
  features: [
    { title: 'Your own importance tiers', desc: 'Name your own 4 priority tiers around what actually matters to your strategy — not a generic High/Medium/Low.' },
    { title: 'Filter rules in plain language', desc: "Tell MiAmar what's relevant and what isn't. The feed is yours, not a fixed taxonomy." },
  ],
  stat: { value: '70%+', label: 'Noise filtered automatically, with full source traceability' },
  related: [{ to: '/solutions/pmm', label: 'For PMMs' }, { to: '/solutions/product-managers', label: 'For Product Managers' }],
};

const pmm = {
  slug: 'pmm', crumb: 'PMMs',
  metaTitle: 'MiAmar for PMMs | Battlecards That Update Themselves',
  metaDesc: 'Track competitor messaging and launches automatically, and arm sales with a newsletter that\'s always current — no copy-paste required.',
  h1: 'Battlecards that update themselves.',
  subhead: "Track competitor messaging and launches automatically, and arm sales with a newsletter that's always current — no copy-paste required.",
  primary: DEMO,
  features: [
    { title: 'Messaging & launch tracking', desc: 'See how competitor positioning shifts, as it happens — not weeks later.' },
    { title: 'Auto-generated newsletter', desc: 'A weekly CI digest that writes itself, ready to forward to sales and leadership.' },
  ],
  stat: { value: '19+', label: 'Meeting types supported for AI-generated briefs' },
  related: [{ to: '/solutions/ci-teams', label: 'For CI Teams' }, { to: '/solutions/business-development', label: 'For Business Development' }],
};

const businessDevelopment = {
  slug: 'business-development', crumb: 'Business Development',
  metaTitle: 'MiAmar for Business Development | Know the Account First',
  metaDesc: 'Complete prospect snapshots, pain points matched to your product, and a competitive landscape per account — generated in under a minute.',
  h1: 'Walk in already knowing the account.',
  subhead: 'Complete prospect snapshots, pain points matched to your product, and a competitive landscape per account — generated in under a minute.',
  primary: BOOK,
  features: [
    { title: 'Prospect & client cards', desc: 'A complete snapshot in one view — no more ad-hoc LinkedIn stalking before a call.' },
    { title: 'Buying-signal detection', desc: 'Hiring surges and leadership moves surfaced as buying signals, not just headlines.' },
  ],
  stat: { value: '<60s', label: 'To generate an AI meeting brief' },
  related: [{ to: '/solutions/pmm', label: 'For PMMs' }, { to: '/solutions/talent-hr', label: 'For HR & Talent Teams' }],
};

const productManagers = {
  slug: 'product-managers', crumb: 'Product Managers',
  metaTitle: 'MiAmar for Product Managers | Roadmaps Backed by Evidence',
  metaDesc: 'Monitor competitor products and roadmaps, track version history, and walk into planning with proof instead of a hunch.',
  h1: 'Roadmap calls backed by evidence, not anecdote.',
  subhead: 'Monitor competitor products and roadmaps, track version history, and walk into planning with proof instead of a hunch.',
  primary: DEMO,
  features: [
    { title: 'Feature & roadmap tracking', desc: "See what competitors are shipping, categorized and comparable." },
    { title: 'Change history', desc: 'Every product update linked to related events — not just a diff.' },
  ],
  stat: { value: '100%', label: 'Product-change history linked to its source' },
  related: [{ to: '/product/market-intelligence', label: 'Market Intelligence product' }, { to: '/solutions/ci-teams', label: 'For CI Teams' }],
};

const talentHr = {
  slug: 'talent-hr', crumb: 'HR & Talent Teams',
  metaTitle: 'MiAmar for HR & Talent Teams | See Hiring Moves Early',
  metaDesc: 'Hiring surges, key departures, and executive moves at every company you track — with context, not just a headline.',
  h1: 'See the hiring moves before they show up on LinkedIn.',
  subhead: 'Hiring surges, key departures, and executive moves — at every company you track, with context, not just a headline.',
  primary: GET,
  features: [
    { title: 'Talent-market benchmarking', desc: 'See how your hiring compares to the market you compete in for talent.' },
    { title: 'Also useful beyond HR', desc: 'CI, Business Development, and leadership read the same signals through their own lens — see MiAmar HR.' },
  ],
  stat: { value: 'MiAmar HR', label: 'Shipped today — cross-functional, not HR-only' },
  related: [{ to: '/product/hr', label: 'MiAmar HR product' }, { to: '/solutions/business-development', label: 'For Business Development' }],
};

export const CITeamsPage = () => <SolutionPage data={ciTeams} />;
export const PMMPage = () => <SolutionPage data={pmm} />;
export const BusinessDevelopmentPage = () => <SolutionPage data={businessDevelopment} />;
export const ProductManagersPage = () => <SolutionPage data={productManagers} />;
export const TalentHRPage = () => <SolutionPage data={talentHr} />;
