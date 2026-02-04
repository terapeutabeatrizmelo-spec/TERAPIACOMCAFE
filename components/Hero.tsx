import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Text Content */}
          <div className="order-1 lg:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-sage border border-sage/20">
              <span>Análise Comportamental Integrada</span>
            </div>


            <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-dark leading-tight tracking-normal text-balance">
              Um espaço seguro de terapia<br />
              para falar, compreender seus padrões<br />
              e reconstruir caminhos.
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Acolhimento para tristeza, apatia, falta de sentido e relacionamentos interpessoais, com recursos terapêuticos aplicados ao seu cotidiano para sua autonomia. Atendimento online em todo o Brasil.
            </p>

            <p className="text-sm italic text-gray-500">
              "Entender o comportamento é o primeiro passo para mudá-lo" — Beatriz Melo
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/5521967272247?text=Olá, vim pelo site e gostaria de agendar uma sessão!"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full font-bold transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-70 disabled:pointer-events-none cursor-pointer text-white shadow-lg hover:shadow-xl gap-2 w-full sm:w-auto bg-[#25D366] hover:bg-[#128C7E] border-transparent"
              >
                Quero Agendar uma Sessão
              </a>
            </div>
          </div>

          {/* Image Content */}
          <div className="order-2 lg:order-2 relative">
            <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl bg-white border-4 border-white relative mx-auto max-w-md">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                <img src="/ORIGINAL.jpg" className="w-full h-full object-cover" alt="Beatriz Melo - Transformação" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-sage/20">
                <p className="font-display font-bold text-dark text-lg">Beatriz Melo</p>
                <p className="text-terracotta text-sm">Terapeuta em Análise Comportamental Não Clínica</p>
              </div>
            </div>
          </div>

          {/* Floating Card Element */}

        </div>

      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
    </section >
  );
};