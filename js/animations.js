/**
 * @fileoverview Módulo de Animações
 * @description Gerencia todas as animações do site
 * Princípio: SRP - Responsabilidade única (animações)
 * Princípio: SoC - Separação de concerns
 */

import { $$, applyStyles, extractNumber, extractSuffix } from './utils.js';
import CONFIG from './config.js';

/**
 * Cria um IntersectionObserver para fade-in
 * @returns {IntersectionObserver}
 */
const createFadeInObserver = () => {
  const { threshold, rootMargin } = CONFIG.observers;
  
  return new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        applyStyles(entry.target, {
          opacity: '1',
          transform: 'translateY(0)'
        });
      }
    });
  }, { threshold, rootMargin });
};

/**
 * Inicializa animações de fade-in nas seções
 */
const initFadeInAnimations = () => {
  const sections = $$(CONFIG.selectors.animatedSections);
  const observer = createFadeInObserver();
  const { fadeInDuration } = CONFIG.animation;

  sections.forEach(section => {
    applyStyles(section, {
      opacity: '0',
      transform: 'translateY(30px)',
      transition: `opacity ${fadeInDuration}ms ease, transform ${fadeInDuration}ms ease`
    });
    observer.observe(section);
  });
};

/**
 * Inicializa animação de flutuação dos cards
 */
const initFloatingCardsAnimation = () => {
  const cards = $$(CONFIG.selectors.floatingCards);
  const { floatDuration } = CONFIG.animation;

  cards.forEach((card, index) => {
    card.style.animation = `float ${floatDuration}ms ease-in-out ${index}s infinite`;
  });
};

/**
 * Anima contador de estatísticas
 * @param {Element} element - Elemento a animar
 * @param {string} target - Valor alvo (ex: "+5", "100%")
 */
const animateCounter = (element, target) => {
  const numericTarget = extractNumber(target);
  const suffix = extractSuffix(target);
  const increment = target.includes('+') ? 1 : (numericTarget > 50 ? 10 : 1);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= numericTarget) {
      current = numericTarget;
      clearInterval(timer);
    }
    element.textContent = (target.includes('+') ? '+' : '') + current + suffix.replace('+', '');
  }, CONFIG.animation.counterInterval);
};

/**
 * Inicializa animação dos contadores de estatísticas
 */
const initStatsAnimation = () => {
  const statsCards = $$(CONFIG.selectors.statsCards);
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = entry.target.textContent;
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: CONFIG.observers.statsThreshold });

  statsCards.forEach(stat => observer.observe(stat));
};

/**
 * Inicializa todas as animações
 */
export const initAnimations = () => {
  initFadeInAnimations();
  initFloatingCardsAnimation();
  initStatsAnimation();
};

export default initAnimations;
