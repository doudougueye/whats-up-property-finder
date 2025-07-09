
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import PropertyListings from '@/components/PropertyListings';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      <PropertyListings />
      <Footer />
    </div>
  );
};

export default Index;
