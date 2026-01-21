import React from 'react';

export const AreasOfExpertise: React.FC = () => {
    const areas = [
        "Ansiedade (TAG, crises, preocupações)",
        "TDAH e dificuldades de foco",
        "Depressão (Distimia, Pós Parto)",
        "Fobia social e retração",
        "TOC e compulsões",
        "Transtornos de Personalidade",
        "Déficit emocional e procrastinação",
        "Resiliência e Autoestima",
        "Reestruturação Cognitiva",
        "Análise Funcional do Comportamento",
        "Estresse Pós Traumático",
        "Regulação Emocional",
        "Traumas e Feridas Emocionais",
        "Relacionamentos e Vínculos",
        "Defraudação e Abuso Emocional",
        "Prevenção de Recaídas",
        "Síndrome de Burnout",
        "Transtornos Alimentares",
        "Dependência Emocional",
        "Dor, Angústia e Automutilação",
        "Transtornos Globais"
    ];

    return (
        <section id="pilares" className="py-20 bg-neutral">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mt-2 mb-4">
                        Áreas de Atuação
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Trabalho com queixas funcionais específicas, desenvolvendo habilidades práticas para transformar padrões que limitam sua qualidade de vida.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {areas.map((area, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                            <div className="w-2 h-2 rounded-full bg-secondary flex-shrink-0"></div>
                            <span className="text-gray-700 font-medium">{area}</span>
                        </div>
                    ))}
                </div>

                {/* OBS: Transtornos de Personalidade Expandido pode ser um detalhe ou tooltip futuramente se necessário, pra não poluir. */}
            </div>
        </section>
    );
};
