import React from 'react';

export const Process: React.FC = () => {
    const steps = [
        {
            number: "01",
            title: "Identificação de Padrões",
            description: "Mapeamento dos gatilhos comportamentais e situações que geram sofrimento."
        },
        {
            number: "02",
            title: "Habilidades Emocionais",
            description: "Desenvolvimento de competências cognitivas para lidar melhor com sentimentos difíceis."
        },
        {
            number: "03",
            title: "Regulação e Autocontrole",
            description: "Técnicas para retomar o equilíbrio em momentos de crise e ansiedade."
        },
        {
            number: "04",
            title: "Estratégias de Mudança",
            description: "Ferramentas práticas de ressignificação para quebrar ciclos repetitivos."
        },
        {
            number: "05",
            title: "Planos de Ação",
            description: "Metas semanais claras e acompanhamento contínuo do seu progresso."
        },
        {
            number: "06",
            title: "Técnicas Comportamentais",
            description: "Aplicação de intervenções baseadas em evidências no seu dia a dia."
        }
    ];

    return (
        <section id="processo" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-secondary font-semibold tracking-wider text-sm uppercase">Como Funciona</span>
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mt-2">
                        O Processo Terapêutico
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-[60px] left-0 w-full h-0.5 bg-gray-100 z-0"></div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg mb-6 border-4 border-white">
                                {step.number}
                            </div>
                            <h3 className="font-display font-bold text-xl text-dark mb-3">
                                {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed max-w-xs">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="#agendar"
                        className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-300"
                    >
                        Entender melhor como funciona
                    </a>
                </div>
            </div>
        </section>
    );
};
