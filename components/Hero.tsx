import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm tracking-wide">
              Análise Comportamental Integrada
            </div>

            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-dark leading-tight">
              Transforme seus padrões de comportamento com estratégias práticas e baseadas em evidências
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Atendimento online em todo o Brasil. Regulação emocional, foco, relacionamentos e autonomia pessoal através da união de TCC, ACT e ABA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://api.whatsapp.com/send?phone=5521967272247&text=Olá!%20Gostaria%20de%20agendar%20uma%20sessão%20com%20a%20Beatriz."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center px-8 py-4 bg-secondary text-white rounded-lg font-semibold shadow-lg hover:bg-opacity-90 hover:scale-105 transition-all duration-200"
              >
                Quero Agendar uma Sessão
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#kit"
                className="inline-flex justify-center items-center px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                Baixar Kit Gratuito
              </a>
            </div>

            <div className="pt-6 flex items-center gap-4 text-sm text-gray-500">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary border-2 border-white flex items-center justify-center text-white text-xs font-bold">ACT</div>
                <div className="w-8 h-8 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white text-xs font-bold">TCC</div>
                <div className="w-8 h-8 rounded-full bg-action border-2 border-white flex items-center justify-center text-white text-xs font-bold">ABA</div>
              </div>
              <p>Metodologias com validação científica.</p>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="/hero-beatriz-final.jpg"
                alt="Beatriz Melo - Terapeuta Comportamental"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 pointer-events-none">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute object-cover"
                  style={{
                    top: '36%',
                    left: '9%',
                    width: '50.5%',
                    height: '46%'
                  }}
                >
                  <source src="/butterfly-video.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="absolute inset-0 bg-primary mix-blend-multiply opacity-10"></div>
            </div>

            {/* Floating Card Element */}
            <div className="absolute -bottom-6 -left-6 md:bottom-10 md:-left-10 bg-white p-6 rounded-xl shadow-xl max-w-xs border-l-4 border-primary hidden md:block">
              <p className="font-display font-bold text-dark text-lg">"Estratégias práticas baseadas em ciência."</p>
              <p className="text-gray-500 text-sm mt-1">— Beatriz Melo</p>
            </div>
          </div>

        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    </section>
  );
};