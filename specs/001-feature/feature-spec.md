# FEAT-001: Página Inicial do Portfólio, Navegação e Seções Identificáveis

Status: APPROVED

## Acceptance Criteria
- **AC-001**: Dado que o visitante acessa o endereço público, quando a página carregar, então deve ver o nome profissional ("Luis Roberto") e um resumo de apresentação.
- **AC-002**: Dado que o visitante visualiza o menu de navegação, quando acionar qualquer âncora (Sobre, Competências, Projetos, Contato), então a página deve rolar suavemente até a respectiva seção.
- **AC-003**: Dado que a página é aberta em tela pequena de largura 390 px, quando o visitante navegar, então o conteúdo não deve exigir rolagem horizontal.
- **AC-004**: Dado que um link externo para GitHub, LinkedIn ou Demo é acionado, quando aberto, então deve direcionar ao destino correto em nova aba com atributo de segurança `rel="noopener noreferrer"`.
- **AC-005**: Dado que a navegação é realizada exclusivamente via teclado (Tab/Shift+Tab), então todos os elementos interativos devem exibir contorno visível de foco (`:focus-visible`).
- **AC-006**: Dado que o visitante atinge o rodapé da página, então o ano corrente deve ser exibido atualizado dinamicamente.

## Requirement Mapping
- **AC-001** &rarr; RF-001, RNF-003
- **AC-002** &rarr; RF-002
- **AC-003** &rarr; RF-006, RNF-001
- **AC-004** &rarr; RF-005, RNF-004
- **AC-005** &rarr; RNF-002
- **AC-006** &rarr; RNF-003
