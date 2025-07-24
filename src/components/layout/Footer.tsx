
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Logo and Description */}
          <div className="order-1">
            <img 
              src="/lovable-uploads/029a8ddd-29bd-4cdc-b823-299e83686ba9.png" 
              alt="Master Equipamentos de Segurança" 
              className="h-12 sm:h-16 w-auto mb-3 sm:mb-4"
            />
            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              Especialistas em equipamentos de segurança eletrônica. 
              Protegemos seu patrimônio com tecnologia de ponta e atendimento personalizado.
            </p>
          </div>

          {/* Contact Info */}
          <div className="order-3 md:order-2">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-cyan-400">Contato</h3>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base break-words">(85) 98586-0811</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base break-all">masterequipamentos2023@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base break-words">Rua 46, Número 60 - Maracanaú/CE</span>
              </div>
              <div className="flex items-start space-x-3">
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a 
                  href="https://instagram.com/masterequipamentos10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors text-sm sm:text-base break-words"
                >
                  @masterequipamentos10
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="order-2 md:order-3">
            <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-cyan-400">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
              <li>Porteiro Eletrônico</li>
              <li>Vídeo Porteiro</li>
              <li>Câmeras de Segurança</li>
              <li>Sistemas de Alarme</li>
              <li>Motor de Portão</li>
              <li>Controle de Acesso</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2024 Master Equipamentos de Segurança. Todos os direitos reservados.
          </p>
          <p className="text-gray-500 text-xs sm:text-sm mt-2">
            Desenvolvido por MonteSite
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
