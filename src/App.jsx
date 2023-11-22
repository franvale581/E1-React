import './index.css'
import React from 'react';
import { HeaderNav } from './components/Header/header';
import { SecondHero } from './components/Hero-2/hero-2';
import { FooterSection } from './components/Footer/footer';
import { FeaturedSection } from './components/Featured/featured';
import { Route, Routes } from 'react-router-dom';
import { ProductsPage } from './pages/products/productsPage';

function App() {
  return (
    <>
      <HeaderNav/>
      <Routes>
        <Route path="/" element={<SecondHero />} />
        <Route path="/featured" element={<FeaturedSection />} />
        <Route path="/products" element={<ProductsPage />} />
      </Routes>
      <FooterSection/>
    </>
  )
}

export default App