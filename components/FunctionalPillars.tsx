import React from 'react';

interface PillarCardProps {
    icon: string;
    title: string;
    description: string;
}

const PillarCard: React.FC<PillarCardProps> = ({ icon, title, description }) => {
    return (
        <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary/20">
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold text-dark mb-3 font-display">
                {title}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export const FunctionalPillars: React.FC = () => {
    const pillars = [
        {
            icon: "🎯",
            title: "Regulação Emocional",
            description: "Treinamento para gerenciar instabilidade de humor intensa, reduzir reações impulsivas e desenvolver estabilidade emocional no dia a dia."
        },
        {
            icon: "⚡",
            title: "Foco e Produtividade",
            description: "Estratégias contra procrastinação crônica, dificuldade de concentração e autossabotagem em metas pessoais e profissionais."
        },
        {
            icon: "💬",
            title: "Relacionamentos e Padrões",
            description: "Análise de padrões repetitivos em relacionamentos, dificuldade em estabelecer limites saudáveis e dependência emocional."
        },
        {
            icon: "🔓",
            title: "Ressignificação e Autonomia",
            description: "Superação de bloqueios ligados ao passado, construção de valores pessoais e aumento da autonomia para decisões importantes."
        }
    ];

    return (
        <section id="pilares" className="py-16 md:py-24 bg-neutral">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-4">
                        Áreas de Atuação Focadas em Resultados
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Trabalhamos com queixas funcionais específicas, desenvolvendo habilidades práticas
                        para transformar padrões que limitam sua qualidade de vida.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {pillars.map((pillar, index) => (
                        <PillarCard key={index} {...pillar} />
                    ))}
                </div>
            </div>
        </section>
    );
};
