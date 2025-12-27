/**
 * @fileoverview Módulo de Formulários
 * @description Gerencia validação e submissão de formulários
 * Princípio: SRP - Responsabilidade única (formulários)
 */

import { $, safeAddListener, isValidEmail } from './utils.js';
import CONFIG from './config.js';

/**
 * Handler para submissão da newsletter
 * @param {Event} e - Evento de clique
 */
const handleNewsletterSubmit = (e) => {
  e.preventDefault();
  
  const input = $(CONFIG.selectors.newsletterInput);
  if (!input) return;
  
  const email = input.value.trim();
  
  if (isValidEmail(email)) {
    // TODO: Integrar com serviço de email marketing (Mailchimp, ConvertKit, etc)
    showSuccess('Obrigado por se inscrever! Em breve você receberá nossas novidades.');
    input.value = '';
  } else {
    showError('Por favor, insira um email válido.');
  }
};

/**
 * Mostra mensagem de sucesso
 * @param {string} message - Mensagem
 */
const showSuccess = (message) => {
  // KISS: alert simples, pode evoluir para toast
  alert(message);
};

/**
 * Mostra mensagem de erro
 * @param {string} message - Mensagem
 */
const showError = (message) => {
  alert(message);
};

/**
 * Inicializa handlers de formulários
 */
export const initForms = () => {
  const newsletterBtn = $(CONFIG.selectors.newsletterBtn);
  safeAddListener(newsletterBtn, 'click', handleNewsletterSubmit);
  
  // Também permite submeter com Enter
  const newsletterInput = $(CONFIG.selectors.newsletterInput);
  safeAddListener(newsletterInput, 'keypress', (e) => {
    if (e.key === 'Enter') {
      handleNewsletterSubmit(e);
    }
  });
};

export default initForms;
