/**
 * @fileoverview Módulo de Navegação
 * @description Gerencia smooth scroll e efeitos da navbar
 * Princípio: SRP - Responsabilidade única (navegação)
 */

import { $, $$, safeAddListener, addListenerToAll, applyStyles } from './utils.js';
import CONFIG from './config.js';

/**
 * Inicializa smooth scroll para links internos
 */
const initSmoothScroll = () => {
  const links = $$(CONFIG.selectors.smoothScrollLinks);
  
  addListenerToAll(links, 'click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = $(targetId);
    
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
};

/**
 * Inicializa efeito de hide/show da navbar no scroll
 */
const initNavbarScrollEffect = () => {
  const navbar = $(CONFIG.selectors.navbar);
  if (!navbar) return;

  let lastScroll = 0;
  const { navbarShadowDefault, navbarShadowScroll } = CONFIG.ui;

  const handleScroll = () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
      navbar.style.boxShadow = navbarShadowDefault;
      navbar.style.transform = 'translateY(0)';
      lastScroll = currentScroll;
      return;
    }
    
    if (currentScroll > lastScroll) {
      // Scrolling down - esconde navbar
      navbar.style.transform = 'translateY(-100%)';
    } else {
      // Scrolling up - mostra navbar
      navbar.style.transform = 'translateY(0)';
      navbar.style.boxShadow = navbarShadowScroll;
    }
    
    lastScroll = currentScroll;
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
};

/**
 * Inicializa todos os módulos de navegação
 */
export const initNavigation = () => {
  initSmoothScroll();
  initNavbarScrollEffect();
};

export default initNavigation;
