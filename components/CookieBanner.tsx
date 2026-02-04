import React, { useState, useEffect } from 'react';

export const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) setIsVisible(true);
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-dark text-white p-4 shadow-2xl border-t border-gray-700 z-50 animate-slide-up">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-gray-300 text-center md:text-left">
                    <p>
                        Utilizamos cookies para oferecer a melhor experiência. Ao continuar navegando, você concorda com nossa{' '}
                        <a href="/politica-privacidade" className="text-primary hover:text-white underline transition-colors">
                            Política de Privacidade
                        </a>.
                    </p>
                </div>
                <button
                    onClick={handleAccept}
                    className="whitespace-nowrap bg-primary text-dark font-bold py-2 px-6 rounded-full hover:bg-white transition-all transform hover:scale-105 active:scale-95 shadow-lg"
                >
                    Aceitar e Fechar
                </button>
            </div>
        </div>
    );
};
