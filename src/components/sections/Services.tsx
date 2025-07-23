
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Shield, Phone, Lock, Zap, Monitor, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleWhatsAppClick = (service: string) => {
    window.open(`https://wa.me/5585985860811?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20${service}.`, '_blank');
  };

  const services = [
    {
      icon: Phone,
      title: 'Porteiro Eletrônico',
      description: 'Sistemas de porteiro eletrônico com áudio de alta qualidade para controle de acesso residencial e comercial.',
      features: ['Áudio cristalino', 'Instalação profissional', 'Várias opções de modelos']
    },
    {
      icon: Monitor,
      title: 'Vídeo Porteiro',
      description: 'Vídeo porteiros com imagem nítida e comunicação bidirecional para máxima segurança e conveniência.',
      features: ['Imagem HD', 'Visão noturna', 'Gravação opcional']
    },
    {
      icon: Camera,
      title: 'Câmeras de Segurança',
      description: 'Sistemas completos de CFTV com câmeras de alta resolução e monitoramento 24 horas.',
      features: ['Alta resolução', 'Acesso remoto', 'Armazenamento seguro']
    },
    {
      icon: Shield,
      title: 'Sistemas de Alarme',
      description: 'Alarmes residenciais e comerciais com sensores inteligentes e central de monitoramento.',
      features: ['Sensores avançados', 'Monitoramento 24h', 'Backup de energia']
    },
    {
      icon: Zap,
      title: 'Motor de Portão',
      description: 'Automatização de portões com motores de alta qualidade e sistemas de segurança integrados.',
      features: ['Controle remoto', 'Sistema de segurança', 'Instalação garantida']
    },
    {
      icon: Lock,
      title: 'Controle de Acesso',
      description: 'Fechaduras eletrônicas, catracas e sistemas biométricos para controle total de acesso.',
      features: ['Tecnologia biométrica', 'Cartão de proximidade', 'Relatórios de acesso']
    }
  ];

  return (
    <section id="servicos" ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nossos <span className="text-cyan-600">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Oferecemos uma linha completa de equipamentos de segurança eletrônica 
            com instalação profissional e suporte técnico especializado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-cyan-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <div className="bg-cyan-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="h-8 w-8 text-cyan-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={() => handleWhatsAppClick(service.title)}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Solicitar Orçamento
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-gray-600 mb-6">
            Precisa de um equipamento específico? Entre em contato conosco!
          </p>
          <Button
            onClick={() => handleWhatsAppClick('equipamentos de segurança personalizados')}
            variant="outline"
            className="border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white px-8 py-3"
          >
            Falar com Especialista
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
