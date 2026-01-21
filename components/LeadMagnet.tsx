import React from 'react';

export const LeadMagnet: React.FC = () => {
    const whatsappLink = "https://api.whatsapp.com/send?phone=5521967272247&text=Olá!%20Quero%20receber%20o%20Kit%20Comportamental%20de%20Início%20Rápido%20📲";

    return (
        <section id="kit" className="py-16 md:py-24 bg-primary/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="order-2 md:order-1">
                        <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-6">
                            Baixe Gratuitamente o Kit Comportamental de Início Rápido
                        </h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            3 ferramentas práticas para você começar a vencer a ansiedade e a procrastinação hoje:
                        </p>

                        <ul className="space-y-4 mb-10">
                            <li className="flex items-start gap-3">
                                <span className="text-2xl mt-1">🎧</span>
                                <div>
                                    <strong className="text-dark font-semibold">Áudio Guiado de Regulação Emocional</strong>
                                    <p className="text-gray-600">Exercício de 10 minutos para momentos de crise</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl mt-1">📈</span>
                                <div>
                                    <strong className="text-dark font-semibold">Tracker de Hábitos Comportamental</strong>
                                    <p className="text-gray-600">Ferramenta de auto-observação para identificar padrões</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-2xl mt-1">✅</span>
                                <div>
                                    <strong className="text-dark font-semibold">Checklist Anti-Procrastinação</strong>
                                    <p className="text-gray-600">Protocolo passo a passo para iniciar tarefas difíceis</p>
                                </div>
                            </li>
                        </ul>

                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-action text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <span className="text-2xl">📲</span>
                            RECEBER MEU KIT COMPORTAMENTAL VIA WHATSAPP
                        </a>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative w-full max-w-sm">
                            <img
                                src="/mobile-mockup.png"
                                alt="Kit Comportamental - Preview"
                                className="drop-shadow-2xl w-full"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
