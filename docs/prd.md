# PRD (Product Requirements Document)

Status: APPROVED

## Functional requirements
- **RF-001**: Exibir nome profissional ("Luis Roberto"), apresentação e área de interesse (Full Stack & Sistemas).
- **RF-002**: Disponibilizar navegação em menu fixo/topo para cinco seções principais: Início, Sobre, Competências, Projetos e Contato.
- **RF-003**: Exibir experiências e projetos (mínimo de 2 projetos acadêmicos/profissionais detalhados com contexto, solução e resultado).
- **RF-004**: Apresentar competências divididas em técnicas (Web, Backend/Sistemas, Automações/Dados) e socioemocionais (soft skills).
- **RF-005**: Oferecer links externos para GitHub e contato profissional, abrindo em nova aba com segurança (`target="_blank" rel="noopener noreferrer"`).
- **RF-006**: Permitir navegação fluida e confortável em dispositivos móveis sem rolagem horizontal ou quebras.

## Quality requirements (Non-functional)
- **RNF-001**: Layout responsivo testado em telas de 390 px (mobile) até 1920 px (desktop widescreen).
- **RNF-002**: Contraste em conformidade com WCAG (fundo escuro `#0b1222`, texto `#edf6ff` e destaque `#43d0ed`) e navegabilidade completa por teclado (`:focus-visible`).
- **RNF-003**: Carregamento instantâneo, leve e sem dependências desnecessárias ou frameworks pesados.
- **RNF-004**: Todos os links externos seguros e funcionando sem erros 404.
- **RNF-005**: Conformidade com privacidade: não expor dados sensíveis (sem CPF, sem endereço físico, sem senhas).
