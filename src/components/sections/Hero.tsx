
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Phone, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5585985860811?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20equipamentos%20de%20segurança.', '_blank');
  };

  const features = [
    { icon: 'shield', text: 'Câmeras de Segurança' },
    { icon: Camera, text: 'Sistemas de Alarme' },
    { icon: Phone, text: 'Porteiro Eletrônico' },
    { icon: Lock, text: 'Controle de Acesso' }
  ];

  return (
    <section id="inicio" ref={sectionRef} className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-gray-900 to-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,255,255,0.3)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div 
              className="flex flex-col sm:flex-row sm:items-center sm:gap-4 lg:gap-6 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-col">
                <span>Reduza Riscos e</span>
                <span className="text-cyan-400">Aumente a Segurança</span>
              </h1>
              <img 
                src="/lovable-uploads/306e7658-f1af-4b09-aee8-1bd1c42bc612.png" 
                alt="Master Equipamentos de Segurança" 
                className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto mt-3 sm:mt-0 mx-auto sm:mx-0 flex-shrink-0"
              />
            </motion.div>
            
            <motion.p 
              className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Com Nossos Sistemas Eletrônicos, Conte Com a Nossa Experiência Para Proteger Seu Patrimônio
            </motion.p>

            <motion.p 
              className="text-lg mb-8 text-cyan-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Trabalhamos Com Todos Equipamentos De Segurança Eletrônica
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                onClick={handleWhatsAppClick}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Solicitar Orçamento
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Nossos Serviços
              </Button>
            </motion.div>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-gray-300">
                  {feature.icon === 'shield' ? (
                    <img 
                      src="/lovable-uploads/12824c8d-8942-4b3e-9387-0348f2b075fb.png" 
                      alt="Shield" 
                      className="h-5 w-5"
                    />
                  ) : (
                    <feature.icon className="h-5 w-5 text-cyan-400" />
                  )}
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-cyan-600/20 to-transparent rounded-3xl backdrop-blur-sm border border-cyan-400/30 p-8 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 w-full h-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-600/20 transition-all duration-300"
                >
                  <img 
                    src="/lovable-uploads/12824c8d-8942-4b3e-9387-0348f2b075fb.png" 
                    alt="Shield" 
                    className="h-16 w-16 md:h-24 md:w-24 lg:h-28 lg:w-28"
                  />
                </motion.div>
                {[Camera, Phone, Lock].map((Icon, index) => (
                  <motion.div
                    key={index + 1}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.6, delay: 1.2 + (index + 1) * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-2xl border border-cyan-400/30 flex items-center justify-center hover:bg-cyan-600/20 transition-all duration-300"
                  >
                    <Icon className="h-12 w-12 md:h-16 md:w-16 text-cyan-400" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
