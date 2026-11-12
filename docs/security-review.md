# Security and Privacy Review

Status: APPROVED

## Riscos Identificados e Mitigações
1. **Exposição de Dados Pessoais Sensíveis (LGPD / Privacidade):**
   - *Risco:* Vazamento inadvertido de CPF, RG, número de telefone residencial pessoal ou endereço domiciliar.
   - *Mitigação:* Apenas canais profissionais são disponibilizados (E-mail profissional, LinkedIn, GitHub e Cidade/Estado).
2. **Reverse Tabnabbing e Ataques via Links Externos:**
   - *Risco:* Redirecionamento malicioso ou captura de contexto ao abrir links externos com `target="_blank"`.
   - *Mitigação:* Todos os links com abertura em nova guia incluem estritamente o atributo `rel="noopener noreferrer"`.
3. **Injeção de Scripts (XSS):**
   - *Risco:* Execução de scripts maliciosos em campos ou bibliotecas externas desatualizadas.
   - *Mitigação:* O site não possui formulários de envio direto, não utiliza `eval` ou `innerHTML` com entradas dinâmicas e não carrega bibliotecas CDN não confiáveis.
4. **Acessibilidade e Contraste:**
   - *Risco:* Ilegibilidade para pessoas com baixa visão ou impossibilidade de uso por teclado.
   - *Mitigação:* Contraste verificado segundo padrões WCAG AA/AAA e anel visível de foco ativo (`:focus-visible`).
