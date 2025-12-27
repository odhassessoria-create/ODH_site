/**
 * @fileoverview Configurações globais do site ODH
 * @description Centraliza todas as configurações e constantes do site
 * Princípio: SRP (Single Responsibility) - apenas configurações
 */

const CONFIG = {
  // Informações de contato
  contact: {
    email: 'odhassessoria@gmail.com',
    phone: '(84) 9 9927-5704',
    phoneLink: '+5584999275704',
    mapsUrl: 'https://maps.app.goo.gl/vrfrgXGEDxFtJr8v8',
    whatsappUrl: 'https://wa.me/5584999275704'
  },

  // Animações
  animation: {
    fadeInDuration: 600,
    scrollOffset: 100,
    floatDuration: 3000,
    counterInterval: 30
  },

  // Observers
  observers: {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
    statsThreshold: 0.5
  },

  // UI
  ui: {
    navbarShadowDefault: '0 2px 20px rgba(0,0,0,0.3)',
    navbarShadowScroll: '0 4px 30px rgba(0,0,0,0.4)'
  },

  // Seletores DOM (centralizados para fácil manutenção)
  selectors: {
    navbar: '.navbar',
    smoothScrollLinks: 'a[href^="#"]',
    animatedSections: '.about-section, .robot-section, .ebook-section, .mentoria-section, .assessoria-section, .final-cta, .argumentos-section',
    planCards: '.plan-card',
    floatingCards: '.floating-card',
    statsCards: '.stat-card strong',
    newsletterInput: '.newsletter input',
    newsletterBtn: '.newsletter button',
    actionButtons: '.btn-plan, .btn-primary'
  }
};

// Freeze para imutabilidade (evita modificações acidentais)
Object.freeze(CONFIG);
Object.freeze(CONFIG.contact);
Object.freeze(CONFIG.animation);
Object.freeze(CONFIG.observers);
Object.freeze(CONFIG.ui);
Object.freeze(CONFIG.selectors);

export default CONFIG;
