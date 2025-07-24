
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import Testimonials from '@/components/sections/Testimonials';
import Location from '@/components/sections/Location';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/ui/WhatsAppFloat';

const MasterSecurity = () => {
  return (
    <>
      <Helmet>
        <title>Master Equipamentos de Segurança - Proteção Eletrônica Completa</title>
        <meta name="description" content="Reduza riscos e aumente a segurança com nossos sistemas eletrônicos. Câmeras, alarmes, porteiro eletrônico, motor de portão e mais. Conte com nossa experiência." />
        <meta name="keywords" content="equipamentos segurança, câmeras, alarmes, porteiro eletrônico, motor portão, segurança eletrônica" />
        <meta name="author" content="Master Equipamentos de Segurança" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masterequip.com.br/" />
        <meta property="og:title" content="Master Equipamentos de Segurança - Proteção Eletrônica Completa" />
        <meta property="og:description" content="Reduza riscos e aumente a segurança com nossos sistemas eletrônicos. Especialistas em equipamentos de segurança eletrônica." />
        <meta property="og:image" content="/og-image.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://masterequip.com.br/" />
        <meta property="twitter:title" content="Master Equipamentos de Segurança - Proteção Eletrônica Completa" />
        <meta property="twitter:description" content="Reduza riscos e aumente a segurança com nossos sistemas eletrônicos. Especialistas em equipamentos de segurança eletrônica." />
        <meta property="twitter:image" content="/og-image.png" />
        
        <link rel="canonical" href="https://masterequip.com.br/" />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <Testimonials />
          <Location />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </div>
    </>
  );
};

export default MasterSecurity;
