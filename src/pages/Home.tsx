import React from 'react';
import { Hero } from '../components/Hero';
import { Skills } from '../components/Skills';
import { Contact } from '../components/Contact';

export function Home() {
  return (
    <div>
      <Hero />
      <Skills />
      <Contact />
    </div>
  );
}
