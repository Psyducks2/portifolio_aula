# ADR-0001: Seleção de Arquitetura do Portfólio

Status: APPROVED

## Contexto
O portfólio profissional e acadêmico de Luis Roberto deve atender aos critérios da atividade do CEUNI - FAMETRO orientada pela metodologia Spec-Driven Development (SDD). A entrega exige baixo atrito de hospedagem (GitHub Pages), carregamento veloz, manutenibilidade e alta pontuação de acessibilidade e responsividade.

## Opções Avaliadas
- **Opção A (HTML5, CSS3 Moderno e Vanilla JavaScript):**
  - *Vantagens:* Simplicidade, conformidade direta com GitHub Pages sem necessidade de esteiras complexas de CI/CD para compilação, tempo de carregamento mínimo (sub-segundo), zero dependências npm quebradas no futuro, código 100% inspecionável e semântico.
  - *Desvantagens:* Componentização manual (arquivos únicos).
- **Opção B (React.js / Next.js com Tailwind CSS):**
  - *Vantagens:* Ecossistema robusto de componentes e reaproveitamento de código em grande escala.
  - *Desvantagens:* Complexidade adicional de build (Node.js, package.json, GitHub Actions para export estático), risco de falha na esteira de publicação para a atividade acadêmica e aumento do peso final da página.

## Decisão
**Adotar a Opção A: HTML5 Semântico, CSS3 Moderno (Custom Properties e Grid/Flexbox) e Vanilla JavaScript.**

## Consequências
- Atendimento direto e sem ressalvas a todos os requisitos do tutorial FAMETRO;
- Publicação instantânea na branch `main` via GitHub Pages;
- Código leve, sustentável e acessível;
- As experiências dinâmicas (como cálculo de ano corrente) são manipuladas por script simples sem inflar o payload.
