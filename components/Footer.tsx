import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <h3 className="font-display font-bold text-2xl">Beatriz Melo</h3>
            <p className="text-gray-400 text-sm mt-1">Terapia com Ciência e Afeto.</p>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="https://www.instagram.com/terapeutabeatrizmelo?utm_source=qr&igsh=dDhxODRvcHd1cXZ1" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="https://www.facebook.com/share/1Ky8Ccrr7K/" className="hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="https://whatsapp.com" className="hover:text-white transition-colors">WhatsApp</a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center md:text-left">
          <p className="text-xs text-gray-500 leading-relaxed max-w-4xl">
            AVISO LEGAL: Este site não oferece aconselhamento médico imediato para emergências. Se você estiver em crise ou correndo risco de vida, ligue para o CVV (188) ou dirija-se ao hospital mais próximo. O conteúdo deste site tem caráter educativo e informativo, não substituindo a psicoterapia formal.
          </p>
          <div className="pt-4 text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Terapia com Café. Todos os direitos reservados.</span>
            <a href="/politica-privacidade" className="hover:text-white transition-colors underline text-xs">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};