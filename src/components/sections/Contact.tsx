
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

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

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5585985860811?text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20os%20equipamentos%20de%20segurança.', '_blank');
    
    toast({
      title: "Redirecionando para o WhatsApp",
      description: "Você será conectado com nossa equipe."
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600" />,
      title: 'Telefone',
      details: '(85) 98586-0811',
      action: 'tel:+5585985860811',
      actionText: 'Ligar Agora'
    },
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600" />,
      title: 'Email',
      details: 'masterequipamentos2023@gmail.com',
      action: 'mailto:masterequipamentos2023@gmail.com',
      actionText: 'Enviar Email'
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600" />,
      title: 'Endereço',
      details: 'Rua 46, Número 60 - Maracanaú/CE',
      action: 'https://maps.google.com/?q=Rua+46,+Número+60,+Maracanaú,+CE',
      actionText: 'Ver no Mapa'
    },
    {
      icon: <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600" />,
      title: 'Instagram',
      details: '@masterequipamentos10',
      action: 'https://instagram.com/masterequipamentos10',
      actionText: 'Seguir no Instagram'
    }
  ];

  return (
    <section id="contato" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <motion.div 
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
            Entre em <span className="text-cyan-600">Contato</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-4xl mx-auto px-2">
            Estamos prontos para atender suas necessidades em equipamentos de segurança. 
            Entre em contato através de um dos nossos canais ou nos envie uma mensagem.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* WhatsApp Contact Card */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-6 sm:mb-8">
                <div className="bg-green-100 w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Fale Conosco pelo WhatsApp
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 px-2">
                  Receba atendimento personalizado e tire todas suas dúvidas sobre 
                  nossos equipamentos de segurança diretamente pelo WhatsApp.
                </p>
              </div>
              
              <Button 
                onClick={handleWhatsAppClick}
                className="w-full py-4 sm:py-6 text-base sm:text-lg gap-2 sm:gap-3 bg-green-600 hover:bg-green-700 text-white rounded-lg sm:rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="h-5 w-5 sm:h-6 sm:w-6" />
                <span className="text-sm sm:text-base">Iniciar Conversa no WhatsApp</span>
              </Button>
              
              <div className="mt-4 sm:mt-6 text-center text-gray-500 text-xs sm:text-sm">
                <p>Horário de atendimento:</p>
                <p className="font-medium">Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="order-1 lg:order-2" 
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                Outras Formas de Contato
              </h3>
              
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="bg-cyan-50 rounded-lg p-2 sm:p-3 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">{item.title}</h4>
                      <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-3 break-words">{item.details}</p>
                      <a 
                        href={item.action} 
                        target={item.action.startsWith('http') ? '_blank' : '_self'}
                        rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                        className="inline-flex items-center text-xs sm:text-sm font-medium text-cyan-600 hover:text-cyan-700 hover:underline"
                      >
                        {item.actionText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 sm:mt-8 bg-gradient-to-br from-slate-900 to-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-white"
            >
              <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Orçamento Gratuito</h4>
              <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4">
                Solicite um orçamento personalizado sem compromisso. 
                Nossa equipe técnica está pronta para apresentar a melhor solução para você.
              </p>
              <div className="flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm">
                <span className="bg-cyan-600 px-2 sm:px-3 py-1 rounded-full">Visita gratuita</span>
                <span className="bg-cyan-600 px-2 sm:px-3 py-1 rounded-full">Orçamento sem custo</span>
                <span className="bg-cyan-600 px-2 sm:px-3 py-1 rounded-full">Atendimento especializado</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
