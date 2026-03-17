import React from 'react';
import { About as AboutSection } from '../components/About';
import { TechnologyStack } from '../components/TechnologyStack';

export function About() {
  return (
    <div className="pt-20">
      <AboutSection />
      <TechnologyStack />
    </div>
  );
}
