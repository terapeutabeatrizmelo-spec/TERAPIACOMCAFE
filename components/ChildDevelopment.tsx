import React from 'react';
import { Heart, Clock, Star, ShieldCheck, Puzzle, CheckCircle2, Target, AlertTriangle, Users, Home as HomeIcon } from 'lucide-react';

export const ChildDevelopment: React.FC = () => {
    return (
        <section id="programa-infantil" className="py-16 md:py-24 px-6 md:px-12 bg-[#F9F7F5]">
            <div className="max-w-6xl mx-auto">
                {/* Header Area */}
                <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-dark mb-2 leading-tight">
                            Programa de <br className="hidden lg:block" />
                            <span className="text-secondary">Desenvolvimento Infantil</span>
                        </h2>
                        
                        <div className="flex justify-center lg:justify-start items-center gap-2 mb-6 mt-4">
                            <Heart className="w-4 h-4 text-secondary fill-secondary" />
                            <span className="text-dark font-medium uppercase tracking-wide text-sm border-b-2 border-secondary pb-1">
                                Terapeuta em Análise Comportamental
                            </span>
                        </div>
                        
                        <p className="text-3xl text-secondary font-display italic mb-6">
                            Beatriz Melo <Heart className="w-5 h-5 inline-block text-secondary fill-transparent" />
                        </p>
                        
                        <div className="mb-8">
                            <span className="bg-[#6B705C] text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide uppercase">
                                Não clínico
                            </span>
                        </div>

                        <div className="bg-[#F2EFE9] border border-[#E5E0D8] p-6 rounded-2xl flex gap-4 items-center text-left mb-6">
                            <div className="bg-white p-3 rounded-full border border-gray-200 flex-shrink-0">
                                <Users className="w-8 h-8 text-dark" />
                            </div>
                            <p className="text-gray-700 font-medium">
                                Atendimento direto com a criança, com estratégias práticas para o dia a dia e orientação para os pais.
                            </p>
                        </div>

                        <div className="bg-primary p-5 rounded-3xl rounded-tl-none inline-block max-w-sm text-left shadow-sm">
                            <p className="text-white font-medium flex gap-3">
                                <span className="text-xl">🤍</span>
                                Ajudo pais e crianças a organizarem o comportamento e a rotina na vida real.
                            </p>
                        </div>
                    </div>
                    
                    <div className="flex-1 w-full max-w-md lg:max-w-none relative">
                        {/* Decorative background blob */}
                        <div className="absolute inset-0 bg-secondary/10 rounded-[3rem] transform translate-x-4 translate-y-4"></div>
                        <img 
                            src="/programa-infantil.png" 
                            alt="Terapeuta brincando com criança" 
                            className="w-full h-auto rounded-[2rem] shadow-xl relative z-10 object-cover"
                        />
                    </div>
                </div>

                {/* O que é trabalhado */}
                <div className="mb-16">
                    <div className="bg-[#E6A9A3] inline-block px-6 py-3 rounded-t-xl">
                        <h3 className="font-bold text-white uppercase tracking-wider text-sm md:text-base">
                            O que é trabalhado nas sessões com a criança:
                        </h3>
                    </div>
                    <div className="bg-[#FFF9F9] border-2 border-[#E6A9A3]/30 rounded-b-2xl rounded-tr-2xl p-6 md:p-10 shadow-sm">
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 text-center">
                            <div className="flex flex-col items-center gap-4">
                                <div className="text-dark">
                                    <Users className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-gray-700">Criação de combinados</p>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="text-dark">
                                    <Clock className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-gray-700">Treino de espera e tolerância à frustração</p>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="text-[#C1A063]">
                                    <Star className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-gray-700">Reforço de comportamentos adequados</p>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="text-primary">
                                    <ShieldCheck className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-gray-700">Resposta a limites</p>
                            </div>
                            <div className="flex flex-col items-center gap-4">
                                <div className="text-secondary">
                                    <Puzzle className="w-10 h-10" />
                                </div>
                                <p className="text-sm font-medium text-gray-700">Jogos, dinâmicas e simulações da rotina</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Split Section (Foco vs Demandas) */}
                <div className="grid lg:grid-cols-2 gap-8 mb-16">
                    {/* Foco do Trabalho */}
                    <div className="flex flex-col">
                        <div className="bg-[#6B705C] text-white inline-block px-8 py-3 rounded-full self-center lg:self-start relative z-10 -mb-5 border-4 border-[#F9F7F5]">
                            <h3 className="font-bold uppercase tracking-wider text-sm md:text-base flex items-center gap-2">
                                Foco do Trabalho:
                            </h3>
                        </div>
                        <div className="bg-[#F2F4F0] border-2 border-[#DCE2D6] rounded-3xl p-8 pt-12 flex-1 shadow-sm">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="text-[#6B705C] flex-shrink-0">
                                    <Target className="w-16 h-16" />
                                </div>
                                <ul className="space-y-4">
                                    <li className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#6B705C] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                                        <span className="text-gray-700 font-medium">Orientação para os pais</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#6B705C] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                                        <span className="text-gray-700 font-medium">Desenvolvimento de habilidades (rotina, autonomia, organização e limites)</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#6B705C] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                                        <span className="text-gray-700 font-medium">Estratégias comportamentais aplicáveis no dia a dia</span>
                                    </li>
                                    <li className="flex gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#6B705C] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                                        <span className="text-gray-700 font-medium">Leitura do comportamento (entender o que mantém o comportamento acontecendo)</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Demandas Mais Comuns */}
                    <div className="flex flex-col">
                        <div className="bg-[#E6A9A3] text-white inline-block px-8 py-3 rounded-full self-center lg:self-start relative z-10 -mb-5 border-4 border-[#F9F7F5]">
                            <h3 className="font-bold uppercase tracking-wider text-sm md:text-base flex items-center gap-2">
                                Demandas Mais Comuns:
                            </h3>
                        </div>
                        <div className="bg-[#FFF5F4] border-2 border-[#FADCDA] rounded-3xl p-8 pt-12 flex-1 shadow-sm">
                            <ul className="space-y-4 relative z-10">
                                <li className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#E6A9A3] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                                    <span className="text-gray-700 font-medium">Dificuldade em obedecer</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#E6A9A3] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                                    <span className="text-gray-700 font-medium">Birras frequentes</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#E6A9A3] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                                    <span className="text-gray-700 font-medium">Rotina desorganizada</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#E6A9A3] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                                    <span className="text-gray-700 font-medium">Dependência excessiva dos pais</span>
                                </li>
                                <li className="flex gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#E6A9A3] text-white flex items-center justify-center flex-shrink-0 mt-0.5 text-xs">✓</div>
                                    <span className="text-gray-700 font-medium">Uso excessivo de telas</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer Features */}
                <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-12 gap-6">
                    <div className="flex items-center gap-3">
                        <Heart className="w-6 h-6 text-secondary flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">Atendimento direto com a criança</span>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-gray-200"></div>
                    <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">Orientação prática para os pais</span>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-gray-200"></div>
                    <div className="flex items-center gap-3">
                        <Star className="w-6 h-6 text-[#C1A063] flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">Mais autonomia, organização e confiança</span>
                    </div>
                    <div className="hidden md:block w-px h-8 bg-gray-200"></div>
                    <div className="flex items-center gap-3">
                        <HomeIcon className="w-6 h-6 text-secondary flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-700">Estratégias que funcionam na vida real</span>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="bg-[#F2F4F0] border-l-4 border-l-[#6B705C] p-6 rounded-r-xl shadow-sm flex gap-4 items-start">
                    <span className="text-2xl mt-1">📌</span>
                    <div>
                        <h4 className="font-bold text-dark mb-1">Importante:</h4>
                        <p className="text-sm text-gray-700 leading-relaxed font-medium">
                            O trabalho é voltado para o funcionamento cotidiano da criança, sem caráter clínico. Caso sejam observados sinais de possíveis transtornos, é feita a orientação para avaliação psicológica.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
