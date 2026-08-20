import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import FeatureGrid from '../components/landing/FeatureGrid';
import CTA from '../components/landing/CTA';

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeatureGrid />
      <CTA />
    </div>
  );
}
