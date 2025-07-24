
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const WhatsAppFloat = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const animationInterval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 1000);
    }, 5000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(animationInterval);
    };
  }, []);

  const handleClick = () => {
    window.open('https://wa.me/5585985860811?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20equipamentos%20de%20segurança.', '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-transparent rounded-full shadow-2xl transition-all duration-300 hover:scale-110',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0',
        isAnimating ? 'animate-bounce' : ''
      )}
      aria-label="Contato via WhatsApp"
    >
      <img 
        src="/lovable-uploads/202695f2-5253-49aa-8c6d-1ffeb5eb2b29.png" 
        alt="WhatsApp" 
        className="w-full h-full rounded-full"
      />
      <span className="absolute top-0 right-0 flex h-4 w-4">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-4 w-4 bg-green-300"></span>
      </span>
    </button>
  );
};

export default WhatsAppFloat;
