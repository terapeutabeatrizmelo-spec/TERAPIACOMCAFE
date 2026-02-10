import { useEffect, useState } from 'react';

export const AccessCounter = () => {
    const [count, setCount] = useState<number | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const checkAdmin = () => {
            const urlParams = new URLSearchParams(window.location.search);
            const isAdminParam = urlParams.get('admin') === 'segredo_cafe';
            const hasPersistentAccess = localStorage.getItem('admin_access') === 'true';

            if (isAdminParam || hasPersistentAccess) {
                setIsVisible(true);
                if (isAdminParam) localStorage.setItem('admin_access', 'true');
            }
        };

        checkAdmin();

        // Atalho de teclado secreto: Shift + A
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.shiftKey && e.key === 'A') {
                const password = prompt('Digite a senha de admin:');
                if (password === 'cafe_admin') {
                    setIsVisible(true);
                    localStorage.setItem('admin_access', 'true');
                }
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        const incrementCount = async () => {
            try {
                const namespace = 'terapiacomcafe_v3';
                const key = 'visits';
                const response = await fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`);
                const data = await response.json();
                setCount(data.value);
            } catch (error) {
                console.error('Erro ao buscar contagem de visitas:', error);
            }
        };

        incrementCount();
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    if (!isVisible || count === null) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-dark/90 text-white px-4 py-2 rounded-xl text-xs font-mono z-[9999] shadow-2xl border border-primary/30 backdrop-blur-md flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="opacity-70">Acessos:</span>
            <span className="font-bold text-primary">{count}</span>
        </div>
    );
};
