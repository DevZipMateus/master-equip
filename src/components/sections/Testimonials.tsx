
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
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

  const testimonials = [
    {
      name: 'João Silva',
      location: 'Fortaleza - CE',
      rating: 5,
      text: 'Excelente atendimento! Instalaram um sistema completo de câmeras na minha residência. Equipe muito profissional e pontual. Recomendo!'
    },
    {
      name: 'Maria Santos',
      location: 'Caucaia - CE',
      rating: 5,
      text: 'O porteiro eletrônico que instalaram funciona perfeitamente. Atendimento de qualidade e preço justo. Estou muito satisfeita!'
    },
    {
      name: 'Carlos Oliveira',
      location: 'Maracanaú - CE',
      rating: 5,
      text: 'Automatizaram meu portão e instalaram alarme. Trabalho impecável! A Master é referência em equipamentos de segurança.'
    },
    {
      name: 'Ana Costa',
      location: 'Aquiraz - CE',
      rating: 5,
      text: 'Sistema de vídeo porteiro de última geração. Instalação rápida e bem feita. Suporte técnico sempre disponível quando preciso.'
    }
  ];

  return (
    <section id="depoimentos" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            O que nossos <span className="text-cyan-400">clientes dizem</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa. 
            Veja alguns depoimentos de quem confia na Master Equipamentos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:bg-slate-800/70 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
            >
              <div className="absolute -top-4 left-8">
                <div className="bg-cyan-600 rounded-full p-3">
                  <Quote className="h-6 w-6 text-white" />
                </div>
              </div>

              <div className="pt-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-slate-700 pt-4">
                  <div className="flex items-center">
                    <div className="bg-cyan-600 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Faça parte dos nossos clientes satisfeitos!
            </h3>
            <p className="text-gray-300 mb-6">
              Entre em contato conosco e descubra como podemos proteger seu patrimônio 
              com equipamentos de segurança de alta qualidade.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                5.0 estrelas
              </span>
              <span>•</span>
              <span>500+ clientes atendidos</span>
              <span>•</span>
              <span>Garantia em todos os serviços</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
