# Low-Level Design (LLD)

Status: APPROVED

## Contratos de Interface e DOM
- **Linguagem & Metadados:**
  - `lang="pt-BR"` para tecnologias assistivas.
  - `viewport` com `width=device-width, initial-scale=1` para garantir renderização responsiva adequada.
- **Tokens de Estilo (CSS Variables):**
  - `--bg: #0b1222` (fundo principal em modo escuro nativo)
  - `--bg-card: #14223a` (superfície de destaque dos cards)
  - `--fg: #edf6ff` (texto de alto contraste, taxa superior a 7:1)
  - `--fg-muted: #94a3b8` (texto auxiliar legível)
  - `--accent: #43d0ed` (cor de destaque ciano/azul)
  - `--border: #34445f` (delimitação sutil de elementos)
- **Acessibilidade e Navegação:**
  - Âncoras internas associadas a IDs explícitos (`#inicio`, `#sobre`, `#competencias`, `#projetos`, `#contato`).
  - Destaque de foco via `:focus-visible` com anel dourado (`outline: 3px solid #ffd166; outline-offset: 3px`).
  - Atributo `target="_blank"` acompanhado de `rel="noopener noreferrer"` em todos os hiperlinks externos.
- **Scripting:**
  - `script.js` carregado com atributo `defer`.
  - Atualização do elemento `id="current-year"` através de `new Date().getFullYear()`.
  - Verificação de console sem erros impeditivos.
