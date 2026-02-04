# 🗺️ Gemini Project Map (Source of Truth)

**Status:** 🟢 Protocol 0: Initialization
**Mode:** Legal Ops AI System Active

---

## 🏗️ Fase 1: B – Blueprint

### 1. Discovery & Scope
**North Star ⭐**: **Plataforma Inteligente de Apoio à Advocacia Personalíssima**
Uma plataforma multi-agente para advogados autônomos que automatiza operações jurídicas (entrevistas, análise, documentos, prazos) mantendo o advogado no controle estratégico.

### 2. Core Architecture
**System Type**: Multi-Agent Orchestration System
**Key Components**:
- **Orchestrator**: Central "brain" managing agent delegation.
- **Agent 1 (Interviewer)**: Structure facts from client interviews.
- **Agent 2 (Feasibility)**: Jurisprudence and risk analysis.
- **Agent 3 (Docs)**: Classification and OCR.
- **Agent 4 (Drafter)**: Legal document generation.
- **Agent 5 (Monitor)**: Procedural deadlines and updates.
- **Agent 6 (Defense Analyst)**: Analyze counter-arguments.
- **Agent 7 (Extrajudicial)**: Admin and registry procedures.

### 3. Tech Stack (Planned)
- **Orchestration**: LangGraph / CrewAI
- **LLMs**: Cloud Sonnet 4.5 (Primary), GPT-4o (Secondary)
- **Backend**: Python (FastAPI) or Node.js
- **Database**: Vector DB (Pinecone/Qdrant) for jurisprudence
- **Frontend**: React / Next.js

### 4. Data Schemas & Payloads (Data-First Rule)

#### Core Entity: `LegalCase` (LangGraph State)
```json
{
  "case_id": "uuid-v4",
  "client_data": {
    "name": "string",
    "contact": "string"
  },
  "raw_input": {
    "transcript": "string",
    "uploaded_files": ["url/path"]
  },
  "structured_facts": {
    "narrative": "string",
    "timeline": ["date: event"],
    "legal_issue": "string"
  },
  "documents": [
    {
      "type": "RG|Comprovante|Procuracao",
      "status": "valid|missing",
      "content_extracted": {}
    }
  ],
  "viability_analysis": {
    "score": 0.0-1.0,
    "risks": ["string"],
    "jurisprudence": ["citation"]
  },
  "drafts": {
    "petition_initial": "markdown_content"
  },
  "status": "intake|analyzing|drafting|waiting_review|ready"
}
```

#### Agent Payloads

**Agent 1 (Interviewer) Output:**
```json
{
  "facts": ["Fact 1", "Fact 2"],
  "missing_info": ["Question 1"]
}
```

**Agent 3 (Classifier) Output:**
```json
{
  "classified_docs": [
    {"filename": "doc1.pdf", "type": "RG", "confidence": 0.95}
  ],
  "pending_docs": ["Comprovante de Residência"]
}
```

---

## ⚡ Fase 2: L – Link (Connectivity)
*Pending Blueprint Approval*

## ⚙️ Fase 3: A – Architect
*Pending Link Verification*

## ✨ Fase 4: S – Stylize
*Pending Logic Implementation*

## 🛰️ Fase 5: T – Trigger
*Pending Final Tests*

---

## 📝 Maintenance Log
- [x] System Scope Reset (Moved from Video Gen to Legal Ops)
- [x] Architecture Defined (7-Agent System)
