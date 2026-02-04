import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <div>
              <h2 className="text-primary font-display font-bold text-3xl md:text-4xl text-dark">
                Beatriz Melo
              </h2>
              <p className="text-secondary font-medium text-lg">Carioca, casada há 12 anos e mãe de 3.</p>
            </div>

            <div className="prose prose-lg text-gray-700 space-y-4 text-justify leading-relaxed">
              <p>
                Minha história não começou fácil, começou com ausência. Quando eu tinha 4 anos, minha mãe nos abandonou. Fui criada só pelo meu pai. Cresci em um ambiente marcado pelo alcoolismo e por muita solidão emocional, e aprendi cedo a seguir em frente, mesmo com o coração pedindo colo.
              </p>
              <p>
                Cresci carregando pesos que não eram meus. Mas uma coisa eu decidi: aquela história não seria o meu destino.
              </p>
              <p>
                Eu transformei feridas em força. Transformei queda em caminho. E hoje, como terapeuta em Análise Comportamental, eu ajudo pessoas que, assim como eu, estão cansadas de sobreviver no modo automático, presas ao que aconteceu lá atrás, repetindo ciclos, se culpando por coisas que nunca deveriam ter carregado.
              </p>
              <p className="border-l-4 border-secondary pl-4 italic text-gray-500 my-6">
                "Aqui, a gente não romantiza a dor. A gente acolhe com consciência. Com estratégia. Com presença."
              </p>
              <p>
                Porque você não é o que fizeram com você. Você é o que escolhe construir a partir disso. E se a vida te quebrou em algum ponto… eu estou aqui pra te ajudar a se reconstruir com leveza, com verdade e com direção. ❤️
              </p>

              <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
                <img
                  src="/butterfly-hq.png"
                  alt="Transformação - Borboleta Azul"
                  className="w-48 md:w-64 mix-blend-multiply opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="flex-1 bg-primary/5 border-l-4 border-secondary p-4 rounded-r-lg">
                  <p className="text-gray-600 font-medium italic text-lg leading-snug">
                    "Lembre-se: pedir ajuda não é sinal de fraqueza, e sim um ato de coragem."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual Content */}
          <div className="relative order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-xl border-8 border-white bg-sand">
              <img
                src="/family-beach.png"
                alt="Consultório Terapia com Café"
                className="w-full h-auto"
              />
            </div>
            {/* Badge removed as requested */}
          </div>
        </div>

      </div>
    </section>
  );
};