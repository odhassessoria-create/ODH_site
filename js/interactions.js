/**
 * @fileoverview Módulo de Interações UI
 * @description Gerencia efeitos hover, cliques e interações do usuário
 * Princípio: SRP - Responsabilidade única (interações UI)
 */

import { $, $$, safeAddListener, addListenerToAll, applyStyles } from './utils.js';
import CONFIG from './config.js';

/**
 * Inicializa efeito hover nos cards de planos
 */
const initPlanCardsHover = () => {
  const cards = $$(CONFIG.selectors.planCards);

  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      applyStyles(this, { transform: 'translateY(-12px) scale(1.02)' });
    });
    
    card.addEventListener('mouseleave', function() {
      applyStyles(this, { transform: 'translateY(0) scale(1)' });
    });
  });
};

/**
 * Efeito de clique (ripple simples)
 * @param {Element} button - Botão clicado
 */
const clickEffect = (button) => {
  button.style.transform = 'scale(0.95)';
  setTimeout(() => {
    button.style.transform = 'scale(1)';
  }, 150);
};

/**
 * Handler para botões de ação
 * @param {Event} e - Evento de clique
 */
const handleActionButton = (e) => {
  const button = e.currentTarget;
  const href = button.getAttribute('href');
  
  // Se não tem href válido, previne e mostra feedback
  if (!href || href === '#') {
    e.preventDefault();
    clickEffect(button);
    
    // Abre WhatsApp para ações de contato
    const btnText = button.textContent.trim().toLowerCase();
    
    if (btnText.includes('falar') || btnText.includes('especialista')) {
      window.open(CONFIG.contact.whatsappUrl, '_blank');
    } else if (btnText.includes('assinar') || btnText.includes('participar')) {
      // TODO: Integrar com sistema de pagamento
      showNotification('Em breve você poderá realizar esta ação! Entre em contato pelo WhatsApp.');
    }
  }
};

/**
 * Mostra notificação temporária
 * @param {string} message - Mensagem a exibir
 */
const showNotification = (message) => {
  // Usa alert por simplicidade (KISS), pode ser substituído por toast customizado
  alert(message);
};

/**
 * Inicializa handlers de botões de ação
 */
const initActionButtons = () => {
  const buttons = $$(CONFIG.selectors.actionButtons);
  addListenerToAll(buttons, 'click', handleActionButton);
};

/**
 * Inicializa todas as interações UI
 */
export const initInteractions = () => {
  initPlanCardsHover();
  initActionButtons();
};

export default initInteractions;
