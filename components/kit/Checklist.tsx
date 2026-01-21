import React, { useState } from 'react';
import { ArrowLeft, CheckSquare, Coffee, Zap, Shield, Gift, Sparkles, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Checklist = () => {
    // Estado para controlar os checks
    const [checked, setChecked] = useState<boolean[]>([false, false, false, false, false]);

    // Efeito de confete/celebração (simples visual)
    const [celebrate, setCelebrate] = useState(false);

    // --- SISTEMA DE ÁUDIO ZEN (Web Audio API) ---
    const playSound = (type: 'click' | 'success') => {
        try {
            // Suporte para navegadores antigos (webkit)
            const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
            if (!AudioContext) return;

            const ctx = new AudioContext();

            if (type === 'click') {
                // Som de "Plim" Suave (Sine wave com decay rápido)
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.1);

                gain.gain.setValueAtTime(0.2, ctx.currentTime); // Volume baixo
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);

                osc.connect(gain);
                gain.connect(ctx.destination);

                osc.start();
                osc.stop(ctx.currentTime + 0.2);
            }
            else if (type === 'success') {
                // Acorde de Vitória (C Major Arpeggio: C5, E5, G5, C6)
                const notes = [523.25, 659.25, 783.99, 1046.50];
                const now = ctx.currentTime;

                notes.forEach((freq, i) => {
                    const osc = ctx.createOscillator();
                    const gain = ctx.createGain();

                    osc.type = 'triangle'; // Timbre mais brilhante
                    osc.frequency.setValueAtTime(freq, now + (i * 0.1));

                    gain.gain.setValueAtTime(0, now + (i * 0.1));
                    gain.gain.linearRampToValueAtTime(0.15, now + (i * 0.1) + 0.05);
                    gain.gain.exponentialRampToValueAtTime(0.01, now + (i * 0.1) + 1.5); // Decay longo

                    osc.connect(gain);
                    gain.connect(ctx.destination);

                    osc.start(now + (i * 0.1));
                    osc.stop(now + (i * 0.1) + 2);
                });
            }
        } catch (e) {
            console.error("Audio error", e);
        }
    };

    const toggle = (index: number) => {
        const newChecked = [...checked];
        const isChecking = !newChecked[index];
        newChecked[index] = isChecking;
        setChecked(newChecked);

        // Toca som se estiver marcando (não desmarcando)
        if (isChecking) {
            playSound('click');
        }

        // Se completou tudo, celebra!
        if (newChecked.every(Boolean)) {
            setTimeout(() => {
                setCelebrate(true);
                playSound('success');
            }, 300);
        } else {
            setCelebrate(false);
        }
    };

    const steps = [
        {
            icon: <Zap size={24} />,
            title: "Picar a Tarefa",
            desc: "Não engula o elefante inteiro. Divida em pedacinhos ridículos de fáceis.",
            reward: "Boa! O monstro já ficou menor. 🐘"
        },
        {
            icon: <Shield size={24} />,
            title: "Blindar o Ambiente",
            desc: "Celular longe. Água perto. Facilite o acerto e dificulte o erro.",
            reward: "Perfeito. Agora nada te atrapalha. 🛡️"
        },
        {
            icon: <CheckSquare size={24} />,
            title: "Regra dos 5 Minutos",
            desc: "Combine com seu cérebro: 'Vou fazer só por 5 min'. Você não vai querer parar.",
            reward: "É só o começo. Você consegue! 🚀"
        },
        {
            icon: <Shield size={24} className="text-secondary" />,
            title: "Prevenir a Fuga",
            desc: "Lembrou de algo? Anote no papel ao lado e só faça DEPOIS.",
            reward: "Foco total. Você está no comando. 🧠"
        },
        {
            icon: <Gift size={24} />,
            title: "Definir Recompensa",
            desc: "O que você ganha ao terminar? Um café? Um descanso? Defina agora.",
            reward: "Merecido! Agora, VAI LÁ E FAZ! ✨"
        }
    ];

    const progress = Math.round((checked.filter(Boolean).length / steps.length) * 100);

    return (
        <div className="min-h-screen bg-sand p-4 md:p-8 font-sans">
            <div className="max-w-2xl mx-auto mb-6">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-terracotta transition-colors text-sm font-medium">
                    <ArrowLeft size={18} />
                    Voltar para Home
                </Link>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden relative transition-all duration-500">

                {/* Header com Barra de Progresso */}
                <header className="bg-sage/10 p-8 pt-10 text-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h1 className="font-display font-bold text-2xl md:text-3xl text-dark mb-2">
                            Protocolo Destrava-Tarefa 🚀
                        </h1>
                        <p className="text-gray-500 text-sm md:text-base">
                            Siga o fio abaixo para sair da paralisia.
                        </p>
                    </div>

                    {/* Barra de Progresso no fundo do header */}
                    <div className="absolute bottom-0 left-0 h-1.5 bg-sage/20 w-full">
                        <div
                            className="h-full bg-terracotta transition-all duration-500 ease-out shadow-[0_0_10px_rgba(204,102,85,0.5)]"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </header>

                <div className="p-6 md:p-8 space-y-4">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            onClick={() => toggle(index)}
                            className={`
                                relative group cursor-pointer rounded-2xl p-5 border-2 transition-all duration-300 ease-in-out select-none
                                ${checked[index]
                                    ? 'border-sage/30 bg-sage/5 scale-[0.99] opacity-80'
                                    : 'border-transparent bg-sand/30 hover:bg-sand/60 hover:scale-[1.01] hover:shadow-md'
                                }
                            `}
                        >
                            <div className="flex items-start gap-4">
                                {/* Checkbox Customizado */}
                                <div className={`
                                    mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 shrink-0
                                    ${checked[index] ? 'bg-sage text-white rotate-0' : 'bg-white text-gray-300 border-2 border-gray-200 rotate-180'}
                                `}>
                                    {checked[index] ? <CheckSquare size={16} /> : <div className="w-3 h-3 rounded-full bg-transparent" />}
                                </div>

                                <div className="flex-1">
                                    <div className="flex justify-between items-center mb-1">
                                        <h3 className={`font-bold text-lg transition-colors duration-300 ${checked[index] ? 'text-sage line-through decoration-2 decoration-sage/50' : 'text-dark'}`}>
                                            {step.title}
                                        </h3>
                                        <div className={`text-terracotta transition-all duration-500 ${checked[index] ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
                                            {step.icon}
                                        </div>
                                    </div>

                                    {/* Descrição e Recompensa com Animação */}
                                    <div className="relative min-h-[1.5rem] overflow-hidden">
                                        {checked[index] ? (
                                            <p className="text-terracotta font-medium flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300">
                                                <Sparkles size={16} />
                                                {step.reward}
                                            </p>
                                        ) : (
                                            <p className="text-sm text-gray-500 leading-relaxed transition-opacity duration-300">
                                                {step.desc}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mensagem Final */}
                {celebrate && (
                    <div className="bg-sage text-white text-center p-8 animate-in slide-in-from-bottom-10 duration-700 fade-in">
                        <h2 className="font-display font-bold text-2xl mb-2"> Parabéns! Você está pronto(a)! 🎉</h2>
                        <p className="opacity-90 max-w-md mx-auto mb-4">
                            A parte mais difícil era começar, e você já venceu isso.
                        </p>
                        <button
                            onClick={() => window.location.reload()}
                            className="bg-white text-sage font-bold py-2 px-6 rounded-full hover:bg-sand transition-colors text-sm shadow-lg"
                        >
                            Começar de novo
                        </button>
                    </div>
                )}

                <footer className="p-6 bg-white text-center text-xs text-gray-300 border-t border-gray-50">
                    Beatriz Melo - Terapia com Café
                </footer>
            </div>

            {/* --- SEÇÃO DE ÁUDIO GUIADO (INTEGRADA) --- */}
            <div className="max-w-2xl mx-auto mt-12 mb-12 bg-white rounded-[2rem] p-8 md:p-10 text-center relative overflow-hidden border border-sage/20 shadow-md">
                <div className="relative z-10">
                    <h2 className="font-display font-bold text-2xl text-sage mb-2 flex items-center justify-center gap-2">
                        <Play className="fill-current" size={20} /> SOS Emocional
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">
                        Está muito difícil começar? Ouça este áudio de 3 minutos para regular sua ansiedade.
                    </p>

                    <div className="bg-sand/30 rounded-xl p-4 shadow-sm flex items-center gap-4 border border-sage/10">
                        <button
                            className="w-12 h-12 bg-terracotta text-white rounded-full flex items-center justify-center hover:scale-105 transition-transform shrink-0 shadow-lg"
                            onClick={(e) => {
                                const btn = e.currentTarget;
                                const icon = btn.querySelector('svg');
                                const audio = document.getElementById('audio-guide') as HTMLAudioElement;
                                if (audio.paused) {
                                    audio.play();
                                    // Hack visual simples para mudar ícone sem estado complexo
                                    btn.style.backgroundColor = '#9EBA9F'; // Sage
                                } else {
                                    audio.pause();
                                    btn.style.backgroundColor = '#CC6655'; // Terracotta
                                }
                            }}
                        >
                            <Play size={20} fill="currentColor" className="ml-1" />
                        </button>
                        <div className="flex-1 text-left">
                            <p className="text-sm font-bold text-dark">Regulação em 3 Minutos</p>
                            <p className="text-xs text-gray-400">Beatriz Melo - Guia de áudio</p>
                        </div>
                        <audio
                            id="audio-guide"
                            src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=meditation-impulse-3032.mp3"
                            controls
                            className="hidden"
                        />
                    </div>
                </div>

                {/* Decorativo */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-terracotta/10 rounded-full blur-2xl"></div>
            </div>

        </div>
    );
};
