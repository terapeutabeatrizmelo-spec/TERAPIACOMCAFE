import React, { useState } from 'react';

interface FAQItem {
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        question: "Como funciona o atendimento online?",
        answer: "As sessões são realizadas por videochamada, em ambiente seguro e confidencial. Você pode participar de qualquer lugar, precisando apenas de conexão à internet estável.",
    },
    {
        question: "Qual a duração das sessões?",
        answer: "Cada sessão tem duração de 1 hora. A frequência inicial recomendada é semanal, podendo ser ajustada conforme o andamento do processo terapêutico.",
    },
    {
        question: "Qual o investimento para as sessões?",
        answer: "Os valores são personalizados de acordo com a frequência e modalidade de atendimento. Entre em contato via WhatsApp para receber informações detalhadas sobre investimento.",
    },
    {
        question: "Como solicitar o Kit Comportamental gratuito?",
        answer: "Basta clicar no botão 'Receber Meu Kit' e você será direcionado para o WhatsApp. Enviaremos imediatamente os 3 materiais práticos (Áudio, Tracker e Checklist) para você começar sua jornada de autoconhecimento.",
    },
];

export const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-display font-bold text-3xl md:text-4xl text-dark mb-4">
                        Perguntas Frequentes
                    </h2>
                    <p className="text-lg text-gray-600">
                        Tire suas dúvidas sobre o processo terapêutico
                    </p>
                </div>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-neutral rounded-xl shadow-md overflow-hidden border border-primary/20"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-primary/5 transition-colors"
                                aria-expanded={openIndex === index}
                            >
                                <span className="font-semibold text-dark pr-4">
                                    {item.question}
                                </span>
                                <span className={`text-2xl text-primary transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                                    ▼
                                </span>
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === index
                                    ? 'max-h-96 opacity-100'
                                    : 'max-h-0 opacity-0'
                                    } overflow-hidden`}
                            >
                                <div className="px-6 pb-5 pt-2 text-gray-600 leading-relaxed">
                                    {item.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
