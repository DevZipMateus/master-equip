
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
        <title>Master Equipamentos de Segurança - Especialistas em Proteção Eletrônica | Rio de Janeiro</title>
        <meta name="description" content="A Master Equipamentos de Segurança oferece soluções completas em segurança eletrônica no Rio de Janeiro. Instalação e manutenção de câmeras de segurança, alarmes, controle de acesso, porteiro eletrônico e automação residencial. Atendimento 24h com técnicos especializados." />
        <meta name="keywords" content="equipamentos segurança rio de janeiro, câmeras segurança rj, alarmes residenciais, porteiro eletrônico, motor portão automático, controle de acesso, segurança eletrônica, monitoramento 24h, automação residencial, cerca elétrica" />
        <meta name="author" content="Master Equipamentos de Segurança" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="language" content="pt-BR" />
        <meta name="geo.region" content="BR-RJ" />
        <meta name="geo.placename" content="Rio de Janeiro" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://masterequip.com.br/" />
        <meta property="og:title" content="Master Equipamentos de Segurança - Proteção Eletrônica Completa" />
        <meta property="og:description" content="Especialistas em segurança eletrônica no Rio de Janeiro. Câmeras, alarmes, controle de acesso e automação residencial. Atendimento 24h com técnicos qualificados." />
        <meta property="og:image" content="https://masterequip.com.br/lovable-uploads/306e7658-f1af-4b09-aee8-1bd1c42bc612.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Master Equipamentos de Segurança - Logo" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Master Equipamentos de Segurança" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@masterequip" />
        <meta name="twitter:creator" content="@masterequip" />
        <meta name="twitter:url" content="https://masterequip.com.br/" />
        <meta name="twitter:title" content="Master Equipamentos de Segurança - Proteção Eletrônica Completa" />
        <meta name="twitter:description" content="Especialistas em segurança eletrônica no Rio de Janeiro. Câmeras, alarmes, controle de acesso e automação residencial." />
        <meta name="twitter:image" content="https://masterequip.com.br/lovable-uploads/306e7658-f1af-4b09-aee8-1bd1c42bc612.png" />
        <meta name="twitter:image:alt" content="Master Equipamentos de Segurança - Logo" />
        
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#0891b2" />
        <meta name="apple-mobile-web-app-title" content="Master Equipamentos" />
        <meta name="application-name" content="Master Equipamentos de Segurança" />
        <meta name="msapplication-TileColor" content="#0891b2" />
        <meta name="msapplication-TileImage" content="/lovable-uploads/306e7658-f1af-4b09-aee8-1bd1c42bc612.png" />
        
        {/* Structured Data for Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Master Equipamentos de Segurança",
            "description": "Especialistas em equipamentos de segurança eletrônica no Rio de Janeiro",
            "url": "https://masterequip.com.br",
            "telephone": "+5521999999999",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rio de Janeiro",
              "addressRegion": "RJ",
              "addressCountry": "BR"
            },
            "openingHours": "Mo-Sa 08:00-18:00",
            "serviceArea": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": -22.9068,
                "longitude": -43.1729
              },
              "geoRadius": "50000"
            },
            "areaServed": "Rio de Janeiro",
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços de Segurança Eletrônica",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Instalação de Câmeras de Segurança"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Sistemas de Alarme"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Controle de Acesso"
                  }
                }
              ]
            }
          })}
        </script>
        
        <link rel="canonical" href="https://masterequip.com.br/" />
        <link rel="icon" href="/lovable-uploads/306e7658-f1af-4b09-aee8-1bd1c42bc612.png" type="image/png" />
        <link rel="apple-touch-icon" href="/lovable-uploads/306e7658-f1af-4b09-aee8-1bd1c42bc612.png" />
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
