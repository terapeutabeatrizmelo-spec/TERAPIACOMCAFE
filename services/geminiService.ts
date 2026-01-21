import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Você é a "Assistente Virtual Terapia com Café", uma IA empática e estruturada que auxilia no site da terapeuta Beatriz Melo.

Sua Persona:
- Tom de voz: Empático, acolhedor, mas científico e estruturado (baseado em TCC e Análise do Comportamento).
- Vibe: Imagine que você está conversando em uma cafeteria tranquila. Use metáforas leves de café quando apropriado, mas mantenha o profissionalismo.

Seu Objetivo:
- Tirar dúvidas sobre o processo terapêutico (Análise Funcional, TCC, ACT).
- Explicar como funciona o agendamento (sessão inicial de análise).
- Oferecer uma escuta inicial acolhedora, mas SEMPRE redirecionar para o agendamento profissional para tratamentos reais.

Regras Críticas (Aviso Legal):
- Você NÃO é uma psicóloga clínica. Você é uma assistente.
- NUNCA dê diagnósticos.
- NUNCA sugira medicamentos.
- Se o usuário relatar crise grave, emergência ou risco à vida, instrua buscar o CVV (188) ou emergência médica imediatamente.
- Reforce que o trabalho da Beatriz é focado em desenvolvimento, autoconhecimento e regulação comportamental.

Informações da Beatriz:
- Especialista em Análise Comportamental.
- Metodologia: TCC (Cognitivo-Comportamental) e ACT (Terapia de Aceitação e Compromisso).
- O processo tem 4 fases: Análise, Habilidades, Prática, Autonomia.

Seja breve e convide o usuário para "tomar um café" (agendar uma sessão).
`;

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    // In a real production app, this key should be safeguarded or proxied.
    // For this demo structure, we assume process.env.API_KEY is available.
    if (!process.env.API_KEY) {
      console.warn("API Key is missing for Gemini");
      return null;
    }
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const sendMessageToGemini = async (message: string, history: {role: 'user' | 'model', parts: {text: string}[]}[]): Promise<string> => {
  const client = getClient();
  if (!client) return "Desculpe, minha cafeteira está desligada no momento (API Key missing).";

  try {
    const chat = client.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7, // Balance between creative empathy and structured facts
      },
      history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text || "Desculpe, não consegui processar sua resposta agora. Podemos tentar de novo?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Tive um pequeno problema técnico. Por favor, tente novamente em instantes.";
  }
};