
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
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

  const stats = [
    { icon: Award, number: '10+', label: 'Anos de Experiência' },
    { icon: Users, number: '500+', label: 'Clientes Satisfeitos' },
    { icon: Clock, number: '24/7', label: 'Suporte Técnico' },
    { icon: Star, number: '5.0', label: 'Avaliação Média' }
  ];

  return (
    <section id="sobre" ref={sectionRef} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sobre a <span className="text-cyan-400">Master Equipamentos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Somos especialistas em equipamentos de segurança eletrônica, oferecendo soluções completas 
            para proteger seu patrimônio com tecnologia de ponta e atendimento personalizado.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Nossa Missão
            </h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Proporcionar segurança e tranquilidade através de equipamentos de alta qualidade 
              e serviços especializados, sempre com foco na satisfação do cliente e na proteção 
              eficiente do seu patrimônio.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Equipamentos de última geração</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Instalação profissional e garantida</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-300">Suporte técnico especializado</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-slate-800 to-gray-800 rounded-2xl p-8 text-white border border-slate-700">
              <h4 className="text-xl font-bold mb-4">Por que escolher a Master?</h4>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-cyan-400" />
                  <span>Experiência comprovada no mercado</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-cyan-400" />
                  <span>Equipe técnica qualificada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-cyan-400" />
                  <span>Atendimento rápido e eficiente</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-cyan-400" />
                  <span>Garantia em todos os serviços</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-slate-800/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-700">
                <stat.icon className="h-8 w-8 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
