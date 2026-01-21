import React from 'react';
import { Coffee } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="h-6 w-6 text-action" />
              <span className="font-display font-semibold text-lg text-neutral">Terapia com Café</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Estratégias comportamentais sérias, mensuráveis e baseadas em evidências, servidas com a leveza de uma boa conversa.
            </p>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-action">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Beatriz Melo</a></li>
              <li><a href="#menu" className="hover:text-white transition-colors">Áreas de Atuação</a></li>
              <li><a href="#processo" className="hover:text-white transition-colors">Como Funciona</a></li>
              <li><a href="#blog-preview" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display font-semibold text-lg mb-4 text-action">Contato</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>contato@terapiacomcafe.com.br</li>
              <li>(21) 96727-2247</li>
              <li className="pt-4 opacity-75 text-xs leading-relaxed">
                <strong>AVISO LEGAL IMPORTANTE:</strong> A atuação da terapeuta Beatriz Melo tem caráter não clínico. As sessões têm foco em autoconhecimento, regulação emocional e desenvolvimento comportamental, sem realizar diagnósticos, prescrições médicas ou tratamento de transtornos mentais. Em casos de sintomas clínicos, recomenda-se acompanhamento psiquiátrico ou psicológico especializado.
              </li>
            </ul>
          </div>
        </div>
        {/* Aviso Legal */}
        <div className="border-t border-gray-800 pt-8 pb-4 text-center">
          <div className="bg-gray-900/50 p-4 rounded-lg inline-block max-w-3xl mx-auto">
            <p className="text-gray-400 text-xs leading-relaxed">
              ⚖️ <strong>Aviso Importante:</strong> A atuação da terapeuta Beatriz Melo tem caráter não clínico.
              As sessões têm foco em autoconhecimento, regulação emocional e desenvolvimento comportamental, sem realizar diagnósticos.
              Caso seja identificada a necessidade de acompanhamento psicológico clínico ou psiquiátrico, o cliente será encaminhado a um profissional habilitado.
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Terapia com Café. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};