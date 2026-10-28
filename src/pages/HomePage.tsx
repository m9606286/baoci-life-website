import React from 'react';
import Hero from '../components/Hero';
import Announcement from '../components/Announcement';
import About from '../components/About';


export default function HomePage() {
  return (
    <div>
      <Hero />
      <Announcement />
      <About />
      <CoreValues />
    </div>
  );
}
