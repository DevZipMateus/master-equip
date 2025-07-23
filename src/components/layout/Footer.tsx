
import { Phone, Mail, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <img 
              src="/lovable-uploads/029a8ddd-29bd-4cdc-b823-299e83686ba9.png" 
              alt="Master Equipamentos de Segurança" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 leading-relaxed">
              Especialistas em equipamentos de segurança eletrônica. 
              Protegemos seu patrimônio com tecnologia de ponta e atendimento personalizado.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">(85) 98586-0811</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">masterequipamentos2023@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <span className="text-gray-300">Rua 46, Número 60</span>
              </div>
              <div className="flex items-center space-x-3">
                <Instagram className="h-5 w-5 text-cyan-400" />
                <a 
                  href="https://instagram.com/masterequipamentos10" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  @masterequipamentos10
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-cyan-400">Nossos Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Porteiro Eletrônico</li>
              <li>Vídeo Porteiro</li>
              <li>Câmeras de Segurança</li>
              <li>Sistemas de Alarme</li>
              <li>Motor de Portão</li>
              <li>Controle de Acesso</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Master Equipamentos de Segurança. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
