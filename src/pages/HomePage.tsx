import React from 'react';
import Hero from '../components/Hero';
//import Announcement from '../components/Announcement';
import About from '../components/About';
import CoreValues from '../components/CoreValues';

export default function HomePage() {
  return (
    <div>
      <Hero />
     //<Announcement />
      <About />
      <CoreValues />
    </div>
  );
}
