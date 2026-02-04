import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
    return (
        <div className="bg-neutral min-h-screen py-12 px-6">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm">
                <Link to="/" className="inline-flex items-center text-primary font-bold mb-8 hover:underline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar para Home
                </Link>

                <h1 className="font-display font-bold text-3xl md:text-4xl text-dark mb-6">Política de Privacidade</h1>
                <p className="text-gray-500 mb-8 italic text-sm">Última atualização: {new Date().toLocaleDateString()}</p>

                <div className="prose prose-sage max-w-none text-gray-700 space-y-6">
                    <section>
                        <h2 className="font-bold text-xl text-dark mb-2">1. Introdução</h2>
                        <p>
                            A sua privacidade é importante para nós. Esta política explica como coletamos, usamos e protegemos suas informações pessoais ao utilizar o site <strong>Terapia com Café</strong>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-dark mb-2">2. Coleta de Dados</h2>
                        <p>
                            Coletamos minimamente dados pessoais, apenas quando fornecidos voluntariamente por você, como ao entrar em contato via WhatsApp (número de telefone e nome).
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-dark mb-2">3. Uso dos Dados</h2>
                        <p>
                            As informações fornecidas são utilizadas exclusivamente para:
                        </p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Responder a suas solicitações de agendamento ou dúvidas.</li>
                            <li>Enviar materiais educativos (Kits) quando solicitados.</li>
                            <li>Melhorar a experiência de navegação no site.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-dark mb-2">4. Cookies</h2>
                        <p>
                            Utilizamos cookies essenciais para garantir o funcionamento do site e cookies de análise para entender como os visitantes interagem com nosso conteúdo. Você pode gerenciar suas preferências de cookies nas configurações do seu navegador.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-dark mb-2">5. Seus Direitos (LGPD)</h2>
                        <p>
                            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem direito a solicitar o acesso, correção ou exclusão de seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco através dos canais oficiais do site.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-bold text-xl text-dark mb-2">6. Contato</h2>
                        <p>
                            Para dúvidas sobre esta política, entre em contato pelo e-mail: contato@terapiacomcafe.com.br
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
};
