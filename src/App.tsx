import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Announcement from '@/components/Announcement';
import About from '@/components/About';
import CoreValues from '@/components/CoreValues';
import PreneedContract from '@/components/PreneedContract';
import Services from '@/components/Services';
import ContractProducts from '@/components/ContractProducts';
import Trust from '@/components/Trust';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';

function App() {
  return (
    <div className="min-h-screen bg-ivory-100 font-sans">
      <Header />
      <main>
        <Hero />
        <Announcement />
        <About />
        <CoreValues />
        <PreneedContract />
        <Services />
        <ContractProducts />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;
