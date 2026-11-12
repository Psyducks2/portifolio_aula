# Portfólio Profissional - Luis Roberto

Status: APPROVED - Alinhado com a metodologia Spec-Driven Development (SPECTION)

Projeto prático desenvolvido para a atividade acadêmica **"Do Zero ao Portfólio"** no **Centro Universitário CEUNI - FAMETRO**, sob orientação do Prof. Alexsander Farias.

---

## 📌 Visão Geral
Este repositório contém a especificação e o código-fonte de um portfólio profissional responsivo, estático e acessível. A implementação foi guiada pelo **SPECTION Framework**, garantindo rastreabilidade de ponta a ponta desde os requisitos até os testes finais.

- **Autor:** Luis Roberto
- **Curso:** Análise e Desenvolvimento de Sistemas (ADS) · CEUNI - FAMETRO
- **Stack:** HTML5 Semântico, CSS3 Moderno (Custom Properties, Flexbox, Grid), JavaScript Vanilla.
- **Hospedagem:** GitHub Pages.

---

## 🧭 Documentação de Engenharia (SPECTION)
- [Product Brief](docs/product-brief.md): Definição do problema, público-alvo, escopo e metas.
- [PRD (Requisitos)](docs/prd.md): Requisitos funcionais (RF-001 a RF-006) e não-funcionais (RNF-001 a RNF-005).
- [HLD (High-Level Design)](docs/hld.md): Arquitetura macro e componentes.
- [ADR-0001 (Decisão de Arquitetura)](docs/adr/0001-candidate-architecture.md): Justificativa da escolha por HTML/CSS/JS versus frameworks.
- [LLD (Low-Level Design)](docs/lld.md): Contratos de DOM, tokens CSS e eventos.
- [Security Review](docs/security-review.md): Políticas de privacidade (LGPD), proteção contra tabnabbing e acessibilidade.
- [Matriz de Rastreabilidade](docs/traceability.md): Relação entre requisitos, tarefas, testes e evidências.
- [Especificação de Feature](specs/001-feature/feature-spec.md): Critérios de aceitação da página inicial.

---

## 🧪 Roteiro de Testes Executados
| ID | Teste | Resultado Esperado | Status |
|---|---|---|---|
| **T-001** | Carregamento da página inicial | Nome, apresentação e seções visíveis | Aprovado |
| **T-002** | Navegação por âncoras | Clique nos menus leva suavemente à respectiva seção | Aprovado |
| **T-003** | Responsividade Mobile (390 px) | Layout sem rolagem horizontal no DevTools | Aprovado |
| **T-004** | Links externos seguros | Abertura em nova guia com `rel="noopener noreferrer"` | Aprovado |
| **T-005** | Acessibilidade por Teclado | Tabulação com foco visível (`:focus-visible`) e bom contraste | Aprovado |

---

## 🚀 Como Executar Localmente
Como o projeto utiliza tecnologias nativas da web, não é necessária a instalação de dependências ou build:
1. Abra o arquivo `index.html` em qualquer navegador web moderno;
2. Ou utilize a extensão **Live Server** no VS Code para recarregamento automático.
