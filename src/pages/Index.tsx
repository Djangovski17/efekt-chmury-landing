
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <ContactForm />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
