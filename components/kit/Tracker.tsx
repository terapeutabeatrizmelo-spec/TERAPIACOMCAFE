import React, { useState, useEffect } from 'react';
import { ArrowLeft, Printer, Plus, Trash2, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Entry {
    date: string;
    trigger: string;
    action: string;
    consequence: string;
    alternative: string;
}

export const Tracker = () => {
    // Carrega dados salvos ou inicia com 3 linhas vazias
    const [entries, setEntries] = useState<Entry[]>(() => {
        const saved = localStorage.getItem('tracker_data');
        return saved ? JSON.parse(saved) : [
            { date: '', trigger: '', action: '', consequence: '', alternative: '' },
            { date: '', trigger: '', action: '', consequence: '', alternative: '' },
            { date: '', trigger: '', action: '', consequence: '', alternative: '' }
        ];
    });

    // Salva no localStorage sempre que mudar
    useEffect(() => {
        localStorage.setItem('tracker_data', JSON.stringify(entries));
    }, [entries]);

    const handleChange = (index: number, field: keyof Entry, value: string) => {
        const newEntries = [...entries];
        newEntries[index][field] = value;
        setEntries(newEntries);
    };

    const addRow = () => {
        setEntries([...entries, { date: '', trigger: '', action: '', consequence: '', alternative: '' }]);
    };

    const clearAll = () => {
        if (confirm('Tem certeza que deseja apagar todo o seu diário?')) {
            setEntries([{ date: '', trigger: '', action: '', consequence: '', alternative: '' }]);
        }
    };

    const print = () => window.print();

    return (
        <div className="min-h-screen bg-sand p-4 md:p-8 print:p-0 print:bg-white">
            {/* Header de Navegação */}
            <div className="max-w-6xl mx-auto mb-8 flex flex-wrap gap-4 justify-between items-center print:hidden">
                <Link to="/" className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors">
                    <ArrowLeft size={20} />
                    Voltar
                </Link>
                <div className="flex gap-2">
                    <button
                        onClick={clearAll}
                        className="flex items-center gap-2 text-red-500 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors text-sm font-medium"
                    >
                        <Trash2 size={18} />
                        Limpar
                    </button>
                    <button
                        onClick={print}
                        className="flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors shadow-sm"
                    >
                        <Printer size={20} />
                        Salvar PDF / Imprimir
                    </button>
                </div>
            </div>

            {/* Folha do Tracker */}
            <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-xl p-4 md:p-8 print:shadow-none print:p-0 print:w-full">

                <header className="text-center mb-8 border-b-2 border-primary/20 pb-6">
                    <h1 className="font-display font-bold text-2xl md:text-4xl text-terracotta mb-3">
                        Diário de Bordo Digital
                    </h1>

                    <div className="inline-flex items-center gap-2 bg-sage/10 text-sage px-4 py-2 rounded-full text-xs md:text-sm font-medium mb-2">
                        <Lock size={14} />
                        <span>Suas anotações são 100% privadas e ficam salvas apenas no seu celular.</span>
                    </div>
                </header>

                <div className="space-y-6">
                    {/* Cabeçalho das Colunas (Visível apenas em Desktop) */}
                    <div className="hidden md:grid grid-cols-12 gap-4 px-4 text-sm font-bold text-gray-500 uppercase tracking-wider">
                        <div className="col-span-2">Data/Hora</div>
                        <div className="col-span-2">Gatilho</div>
                        <div className="col-span-2">Ação</div>
                        <div className="col-span-3">Consequência</div>
                        <div className="col-span-3 text-terracotta">✨ Nova Estratégia</div>
                    </div>

                    {/* Lista de Cards (Entradas) */}
                    {entries.map((entry, i) => (
                        <div key={i} className="bg-sand rounded-2xl p-6 hover:shadow-md transition-shadow duration-300 border border-transparent hover:border-sage/30 group animate-fade-in relative">

                            {/* Número do Registro (Detalhe visual) */}
                            <div className="absolute top-4 left-4 text-xs font-bold text-sage/60">#{i + 1}</div>

                            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-2">
                                {/* Data */}
                                <div className="md:col-span-2">
                                    <label className="block md:hidden text-xs font-bold text-gray-500 mb-1 uppercase">Data/Hora</label>
                                    <input
                                        type="text"
                                        value={entry.date}
                                        onChange={(e) => handleChange(i, 'date', e.target.value)}
                                        className="w-full bg-white rounded-xl p-3 text-sm focus:bg-white focus:ring-2 focus:ring-sage/40 outline-none transition-all placeholder:text-gray-400 font-medium text-dark border border-sage/10"
                                        placeholder="Hoje, 14h..."
                                    />
                                </div>

                                {/* Gatilho */}
                                <div className="md:col-span-2">
                                    <label className="block md:hidden text-xs font-bold text-gray-500 mb-1 uppercase">Gatilho (O que houve?)</label>
                                    <textarea
                                        value={entry.trigger}
                                        onChange={(e) => handleChange(i, 'trigger', e.target.value)}
                                        className="w-full bg-white rounded-xl p-3 text-sm focus:bg-white focus:ring-2 focus:ring-sage/40 outline-none transition-all resize-none h-24 placeholder:text-gray-400 border border-sage/10"
                                        placeholder="Estava cansada, trânsito..."
                                    />
                                </div>

                                {/* Ação */}
                                <div className="md:col-span-2">
                                    <label className="block md:hidden text-xs font-bold text-gray-500 mb-1 uppercase">Ação (O que fiz?)</label>
                                    <textarea
                                        value={entry.action}
                                        onChange={(e) => handleChange(i, 'action', e.target.value)}
                                        className="w-full bg-white rounded-xl p-3 text-sm focus:bg-white focus:ring-2 focus:ring-sage/40 outline-none transition-all resize-none h-24 placeholder:text-gray-400 border border-sage/10"
                                        placeholder="Gritei, comi doce..."
                                    />
                                </div>

                                {/* Consequência */}
                                <div className="md:col-span-3">
                                    <label className="block md:hidden text-xs font-bold text-gray-500 mb-1 uppercase">Consequência (O que senti/ganhei?)</label>
                                    <textarea
                                        value={entry.consequence}
                                        onChange={(e) => handleChange(i, 'consequence', e.target.value)}
                                        className="w-full bg-white rounded-xl p-3 text-sm focus:bg-white focus:ring-2 focus:ring-sage/40 outline-none transition-all resize-none h-24 placeholder:text-gray-400 border border-sage/10"
                                        placeholder="Alívio imediato, culpa depois..."
                                    />
                                </div>

                                {/* Alternativa (Destaque) */}
                                <div className="md:col-span-3 relative">
                                    <div className="absolute -inset-2 bg-terracotta/10 rounded-2xl -z-10 hidden md:block"></div>
                                    <label className="block md:hidden text-xs font-bold text-terracotta mb-1 uppercase">✨ Nova Estratégia</label>
                                    <textarea
                                        value={entry.alternative}
                                        onChange={(e) => handleChange(i, 'alternative', e.target.value)}
                                        className="w-full bg-white border border-terracotta/30 rounded-xl p-3 text-sm focus:bg-white focus:ring-2 focus:ring-terracotta/40 outline-none transition-all resize-none h-24 placeholder:text-terracotta/50 text-dark font-medium"
                                        placeholder="Respirar fundo, beber água..."
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex justify-center print:hidden">
                    <button
                        onClick={addRow}
                        className="group flex flex-col items-center gap-2 text-sage hover:text-terracotta transition-colors"
                    >
                        <div className="w-12 h-12 rounded-full border-2 border-current flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Plus size={24} />
                        </div>
                        <span className="text-sm font-semibold">Adicionar novo registro</span>
                    </button>
                </div>

                <footer className="mt-16 text-center text-sm text-gray-300 pt-6 border-t border-gray-100 flex justify-between items-center print:mt-4">
                    <span>Beatriz Melo - Terapeuta Comportamental</span>
                    <span className="font-display text-primary">terapiacomcafe.com.br</span>
                </footer>
            </div>
        </div>
    );
};
