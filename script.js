/**
 * Portfólio Profissional - Luis Roberto
 * Metodologia: Spec-Driven Development (SPECTION Framework)
 * Atividade Prática: CEUNI - FAMETRO
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Atualização automática do ano no rodapé (RNF-003: sem bibliotecas externas)
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. Log de verificação e auditoria no console conforme exigido pelo SPECTION
  console.info('Portfólio carregado - verificação local.');
  console.info('Ambiente: Spec-Driven Development (SDD) | CEUNI - FAMETRO');
});
