import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeft, Play, Pause, Volume2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AudioGuide = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Audio de exemplo (som de chuva/piano relaxante public domain)
    // Substitua pelo seu arquivo real depois
    const AUDIO_URL = "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=meditation-impulse-3032.mp3";

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            const current = audioRef.current.currentTime;
            const duration = audioRef.current.duration || 180;
            const percent = (current / duration) * 100;
            setProgress(percent);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
    };

    // Formata segundos em MM:SS
    const formatTime = (seconds: number) => {
        if (!seconds) return "0:00";
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    return (
        <div className="min-h-screen bg-sand flex flex-col items-center justify-center p-6 relative overflow-hidden font-sans">

            {/* Elementos Decorativos de Fundo (Bolhas Zen) */}
            <div className={`absolute w-96 h-96 bg-sage/30 rounded-full blur-3xl -top-20 -left-20 transition-all duration-[6s] ease-in-out ${isPlaying ? 'scale-110 opacity-70' : 'scale-100 opacity-40'}`}></div>
            <div className={`absolute w-80 h-80 bg-terracotta/10 rounded-full blur-3xl bottom-0 right-0 transition-all duration-[8s] ease-in-out ${isPlaying ? 'scale-125 opacity-60' : 'scale-100 opacity-30'}`}></div>

            <div className="w-full max-w-md z-10">
                <Link to="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-terracotta mb-8 transition-colors">
                    <ArrowLeft size={20} />
                    Voltar para Home
                </Link>

                <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-12 text-center border-2 border-white/50 relative overflow-hidden">

                    {/* Animação Visual de Respiração */}
                    <div className="relative w-56 h-56 mx-auto mb-10 flex items-center justify-center">
                        {/* Círculos pulsantes */}
                        <div className={`absolute inset-0 bg-sage/20 rounded-full transition-transform duration-[4000ms] ease-in-out ${isPlaying ? 'scale-150 opacity-50' : 'scale-100 opacity-20'}`}></div>
                        <div className={`absolute inset-4 bg-sage/30 rounded-full transition-transform duration-[4000ms] delay-75 ease-in-out ${isPlaying ? 'scale-125 opacity-60' : 'scale-100 opacity-30'}`}></div>

                        {/* Núcleo */}
                        <div className="relative w-32 h-32 bg-primary rounded-full flex items-center justify-center shadow-lg text-white z-10">
                            <Heart size={48} className={`transition-all duration-[4000ms] ${isPlaying ? 'scale-110' : 'scale-100'}`} fill="currentColor" />
                        </div>
                    </div>

                    <h1 className="font-display font-bold text-2xl text-dark mb-2">
                        Regulação Emocional
                    </h1>
                    <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                        Encontre um lugar confortável. <br />Siga o ritmo da respiração e a minha voz.
                    </p>

                    {/* Player de Áudio Real */}
                    <audio
                        ref={audioRef}
                        src={AUDIO_URL}
                        onTimeUpdate={handleTimeUpdate}
                        onEnded={handleEnded}
                        preload="metadata"
                    />

                    {/* Controles */}
                    <div className="flex flex-col gap-5">
                        {/* Barra de Progresso Interativa */}
                        <div
                            className="w-full bg-gray-100 rounded-full h-2 cursor-pointer relative overflow-hidden group"
                            onClick={(e) => {
                                if (!audioRef.current) return;
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = e.clientX - rect.left;
                                const width = rect.width;
                                const percent = x / width;
                                audioRef.current.currentTime = percent * audioRef.current.duration;
                            }}
                        >
                            <div
                                className="bg-terracotta h-full rounded-full transition-all duration-100 relative"
                                style={{ width: `${progress}%` }}
                            >
                                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-terracotta rounded-full shadow-md scale-0 group-hover:scale-125 transition-transform"></div>
                            </div>
                        </div>

                        <div className="flex justify-between text-xs text-gray-400 font-medium px-1">
                            <span>{audioRef.current ? formatTime(audioRef.current.currentTime) : '0:00'}</span>
                            <span>{audioRef.current && !isNaN(audioRef.current.duration) ? formatTime(audioRef.current.duration) : '--:--'}</span>
                        </div>

                        <div className="flex justify-center mt-2">
                            <button
                                onClick={togglePlay}
                                className="w-20 h-20 bg-dark text-white rounded-full flex items-center justify-center hover:scale-105 hover:bg-terracotta transition-all duration-300 shadow-xl active:scale-95 group"
                            >
                                {isPlaying ? (
                                    <Pause size={32} fill="white" />
                                ) : (
                                    <Play size={32} fill="white" className="ml-1 group-hover:translate-x-0.5 transition-transform" />
                                )}
                            </button>
                        </div>
                    </div>

                    <p className="mt-8 text-xs text-gray-400 font-medium">
                        🎧 Recomendado usar fones de ouvido
                    </p>
                </div>
            </div>
        </div>
    );
};
