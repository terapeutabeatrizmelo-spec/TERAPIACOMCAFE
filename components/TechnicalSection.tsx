import React from 'react';

export const TechnicalSection: React.FC = () => {
    return (
        <section className="py-12 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-neutral/30 rounded-2xl p-8 md:p-12 border border-primary/10">
                    <div className="flex flex-col md:flex-row gap-8 items-start justify-between">

                        {/* Credentials */}
                        <div className="flex-1">
                            <h3 className="font-display font-bold text-2xl text-primary mb-4">
                                Formação e Credenciais
                            </h3>
                            <div className="flex flex-col sm:flex-row gap-4 mb-6">
                                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-sm font-semibold text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                    CRTP 9586
                                </span>
                                <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200 shadow-sm text-sm font-semibold text-gray-700">
                                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                                    Curso Registrado ABRAPH 02333CR
                                </span>
                            </div>

                            {/* Certificate Card Image */}
                            <div className="mb-6 max-w-sm rounded-lg overflow-hidden shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
                                <img
                                    src="/certification-card.png"
                                    alt="Certificado de Responsabilidade Técnica Holística - Beatriz Melo"
                                    className="w-full h-auto object-cover opacity-95 hover:opacity-100 transition-opacity"
                                />
                            </div>

                            <p className="text-gray-600 mb-4">
                                Minha prática é estruturada, mensurável e orientada para resultados. Trabalho com foco em análise funcional, desenvolvimento de habilidades emocionais e ressignificação de padrões comportamentais e fortalecimento de autonomia.
                            </p>
                            <p className="italic text-gray-600 border-l-4 border-secondary pl-4">
                                "A missão é simples: transformar a vida do cliente com estratégias claras, aplicáveis e que realmente funcionam no dia a dia."
                            </p>
                        </div>

                        {/* Methodologies */}
                        <div className="flex-1 w-full md:max-w-md">
                            <h3 className="font-display font-bold text-xl text-dark mb-4">
                                Abordagem Integrativa
                            </h3>
                            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                                <ul className="space-y-3">
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</div>
                                        Terapia Comportamental
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</div>
                                        Terapia Cognitivo-Comportamental (TCC)
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</div>
                                        Análise do Comportamento Aplicada (ABA)
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</div>
                                        Terapia de Aceitação e Compromisso (ACT)
                                    </li>
                                    <li className="flex items-center gap-3 text-gray-700">
                                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">✓</div>
                                        Protocolos para Regulação Emocional
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};
