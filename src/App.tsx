import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

// 載入頁面 (Pages)
import HomePage from './pages/HomePage';
import PreneedPage from './pages/PreneedPage';
import ServicesPage from './pages/ServicesPage';
//import ProductsPage from './pages/ProductsPage';
import TrustPage from './pages/TrustPage';
import ContactPage from './pages/ContactPage';

// 載入全站通用元件 (Components)
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

// 切換頁面時自動滾動回頂部的組件
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-ivory-100">
        <Header />
        
        {/* 主要內容區塊：加入 relative 與全站頂部金色漸層質感線 */}
        <main className="flex-grow relative">
          {/* 全站統一頂部金色漸層裝飾線 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent pointer-events-none z-10" />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/preneed" element={<PreneedPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/trust" element={<TrustPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingCTA />
      </div>
    </Router>
  );
}
