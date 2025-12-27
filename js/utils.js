/**
 * @fileoverview Utilitários reutilizáveis
 * @description Funções auxiliares genéricas
 * Princípio: DRY (Don't Repeat Yourself)
 */

/**
 * Seleciona um elemento do DOM
 * @param {string} selector - Seletor CSS
 * @returns {Element|null}
 */
export const $ = (selector) => document.querySelector(selector);

/**
 * Seleciona múltiplos elementos do DOM
 * @param {string} selector - Seletor CSS
 * @returns {NodeList}
 */
export const $$ = (selector) => document.querySelectorAll(selector);

/**
 * Adiciona event listener com verificação de existência
 * @param {Element|null} element - Elemento DOM
 * @param {string} event - Nome do evento
 * @param {Function} handler - Callback
 */
export const safeAddListener = (element, event, handler) => {
  if (element) {
    element.addEventListener(event, handler);
  }
};

/**
 * Adiciona event listener a múltiplos elementos
 * @param {NodeList|Array} elements - Elementos DOM
 * @param {string} event - Nome do evento
 * @param {Function} handler - Callback
 */
export const addListenerToAll = (elements, event, handler) => {
  elements.forEach(el => el.addEventListener(event, handler));
};

/**
 * Aplica estilos a um elemento
 * @param {Element} element - Elemento DOM
 * @param {Object} styles - Objeto com estilos CSS
 */
export const applyStyles = (element, styles) => {
  Object.assign(element.style, styles);
};

/**
 * Debounce - evita execuções excessivas
 * @param {Function} func - Função a ser executada
 * @param {number} wait - Tempo de espera em ms
 * @returns {Function}
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Valida formato de email
 * @param {string} email - Email a validar
 * @returns {boolean}
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Extrai número de uma string
 * @param {string} str - String contendo número
 * @returns {number}
 */
export const extractNumber = (str) => parseInt(str.replace(/\D/g, ''), 10) || 0;

/**
 * Extrai sufixo não numérico de uma string
 * @param {string} str - String
 * @returns {string}
 */
export const extractSuffix = (str) => str.replace(/[0-9]/g, '');
