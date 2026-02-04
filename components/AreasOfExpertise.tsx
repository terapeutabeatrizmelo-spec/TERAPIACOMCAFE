import React from 'react';

export const AreasOfExpertise: React.FC = () => {
    return (
        <section id="atuacao" className="py-16 md:py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-bold tracking-wider text-sm uppercase">O Menu</span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mt-2 mb-4">
                        ÁREAS DE CUIDADO TERAPÊUTICO
                    </h2>
                    <p className="text-gray-600">
                        Trabalhamos com queixas funcionais específicas, desenvolvendo habilidades práticas para transformar padrões que limitam sua qualidade de vida.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
                    {/* Card 1 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary/10 hover:-translate-y-1 transition-transform border-l-4 border-l-primary">
                        <h3 className="font-bold text-xl mb-3 text-dark flex items-center gap-2">
                            Regulação Emocional
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Trabalho terapêutico voltado à compreensão das emoções, redução de reações impulsivas e ampliação da capacidade de regulação emocional no cotidiano.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary/10 hover:-translate-y-1 transition-transform border-l-4 border-l-secondary">
                        <h3 className="font-bold text-xl mb-3 text-dark flex items-center gap-2">
                            Foco e Produtividade
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Estratégias contra procrastinação crônica, dificuldade de concentração e autosabotagem em metas pessoais e profissionais.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary/10 hover:-translate-y-1 transition-transform border-l-4 border-l-primary">
                        <h3 className="font-bold text-xl mb-3 text-dark flex items-center gap-2">
                            Relacionamentos e Padrões
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Análise de padrões repetitivos em relacionamentos, dificuldade em estabelecer limites saudáveis e dependência emocional.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-primary/10 hover:-translate-y-1 transition-transform border-l-4 border-l-secondary">
                        <h3 className="font-bold text-xl mb-3 text-dark flex items-center gap-2">
                            Ressignificação e Autonomia
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            Superação de bloqueios ligados ao passado, construção de valores pessoais e aumento da autonomia para decisões importantes.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
