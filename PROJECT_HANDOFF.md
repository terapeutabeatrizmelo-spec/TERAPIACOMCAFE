# 📘 Terapia com Café - Documentação de Handoff

**Data:** 16/12/2025
**Status:** 🚀 Em Produção (DNS Propagando)
**URL:** [terapiacomcafe.com.br](https://terapiacomcafe.com.br)
**Diretório Local:** `C:\terapiacomcafe`

---

## 1. Visão Geral do Projeto
Landing Page de alta conversão para a terapeuta Beatriz Melo, focada em "Análise Comportamental Integrada" (TCC, ACT, ABA).
O objetivo principal é capturar leads via WhatsApp (agendamento de sessão ou download de Kit gratuito).

### 🛠️ Stack Tecnológica
- **Framework:** React + Vite (Simples, rápido e leve)
- **Estilização:** Tailwind CSS (Via CDN no `index.html` para simplicidade extrema)
- **Linguagem:** TypeScript
- **Deploy:** Netlify (Static Export)

---

## 2. Design System & Branding
A identidade visual foi totalmente reformulada de tons de café para uma estética clínica e acolhedora.

### 🎨 Paleta de Cores
| Nome | Hex | Uso |
|------|-----|-----|
| **Sage (Primary)** | `#9EBA9F` | Elementos de confiança, detalhes suaves |
| **Terracotta (Secondary)** | `#CC6655` | Ação, destaque, energia |
| **Sand (Neutral)** | `#F5F1ED` | Fundos, suavidade, "respiro" |
| **Charcoal (Dark)** | `#3A3A3A` | Textos principais |
| **WhatsApp Green** | `#25D366` | Botões de conversão direta |

### ✒️ Tipografia
- **Display:** `Poppins` (Títulos)
- **Body:** `Inter` (Textos longos e legibilidade)

### 👩‍💼 Persona Visual (Beatriz Melo)
Para geração de imagens ou consistência visual:
- **Aparência:** Mulher de pele clara, cabelos escuros e lisos (presos em coque baixo/elegante).
- **Estilo:** Minimalista, "Comfy Chic" (roupas de tecidos fluidos, tons neutros ou cinza).
- **Vibe:** Sorriso largo e genuíno, postura acolhedora, acessível, "pé no chão" (transmite empatia e escuta ativa).
- **Cenário Típico:** Poltronas confortáveis, luz natural, plantas, xícara de café, tons de madeira clara e branco.

---

## 3. Arquitetura de Componentes
O projeto segue uma estrutura modular em `src/components`:

1.  **`Hero.tsx`**: Primeira impressão. Foto profissional da Beatriz (Poltrona) + Headline de impacto + CTA Primário (Agendar).
2.  **`About.tsx`**: Seção "Sobre Mim". História de superação + Foto da Família na Praia (Visual "wide").
3.  **`FunctionalPillars.tsx`**: Grid de 4 cards (Regulação Emocional, Foco, Relacionamentos, Autonomia).
4.  **`LeadMagnet.tsx`**: "Isca Digital" (Kit Comportamental). Mockup de celular + CTA Secundário.
5.  **`FAQ.tsx`**: Accordion com dúvidas frequentes (Quebra de objeções).
6.  **`WhatsAppButton.tsx`**: Botão flutuante fixo no canto inferior direito.
7.  **`Footer.tsx`**: Contato e **Aviso Legal Crítico** (caráter não clínico).

**Página Principal:** `pages/Home.tsx` orquestra todos os componentes acima.

---

## 4. Infraestrutura & Deploy

### 🚀 Vercel (Infraestrutura Ativa - Migração em 28/05/2026)
Devido a uma suspensão temporária da conta Netlify (falha de pagamento), a infraestrutura de produção foi migrada em caráter de contingência e estabilização para a Vercel (Plano Hobby/Free Tier).
- **Conta Vercel:** Integrada via GitHub
- **Projeto Vercel:** `terapiacomcafe`
- **URL Nativa (Vercel):** `https://terapiacomcafe.vercel.app`
- **Build Command:** Autodetectado (Vite) / `npm run build`
- **Publish Directory:** `dist`

### ☁️ Netlify (Infraestrutura Legada / Backup)
- **Conta:** Beatriz Melo (`terapeuta.beatrizmelo@gmail.com`)
- **Time:** `TERAPIACOMCAFE`
- **Nome do Site:** `beatriz-terapia`
- **URL Nativa:** `https://beatriz-terapia.netlify.app`
- **Status da Conta:** Suspensa (Hibernação). A conta não foi alterada e os deploys continuam lá caso a reativação financeira seja decidida no futuro.

### 🌐 Domínio & DNS
**Domínio:** `terapiacomcafe.com.br` (Gerenciado no Registro.br)
**Conta Registro.br (Código):** `BNSME3` (Titular: Beatriz Nunes Da Silva Melo)

**Configuração DNS Atual (Apontando para Vercel):**
- **Tipo A:** `(Nome Vazio / @)` → `76.76.21.21` (IP da Vercel)
- **CNAME:** `www` → `cname.vercel-dns.com`

⚠️ **Status Histórico de DNS:**
*   **16/12/2025:** Apontamento inicial configurado para Netlify (`75.2.60.5` / `beatriz-terapia.netlify.app`).
*   **28/05/2026:** Migração bem sucedida de DNS para Vercel devido a suspensão. Registros antigos do Netlify foram removidos da Zona DNS do Registro.br. SSL é provisionado automaticamente pela Vercel.

---

## 5. Regras Críticas do Projeto (Memória do Usuário)
1.  **Zero Deploy de Teste:** Deploys na Netlify são **apenas para produção**.
2.  **Validação Local:** Tudo deve ser testado via `npm run build` e `npm run dev` antes de subir.
3.  **Branch Main:** Apenas a branch `main` vai para produção.
4.  **Aviso Legal:** Nunca remover o disclaimer de "atuação não clínica" do rodapé.

---

## 6. Próximos Passos Sugeridos
Ao iniciar o próximo chat, o desenvolvedor pode focar em:
1.  **Monitoramento SSL:** Verificar se o cadeado HTTPS ativou na Netlify após a propagação.
2.  **SEO:** Refinar metatags (OpenGraph) para compartilhamento no WhatsApp.
3.  **Conteúdo:** Ajustar textos conforme feedback real dos primeiros visitantes.
4.  **Performance:** Rodar um Lighthouse score final para otimizações finas.

---
*Este documento serve como a "memória mestre" para a continuidade do desenvolvimento.*
