/**
 * @fileoverview Ponto de entrada principal - ODH Site
 * @description Inicializa todos os módulos do site
 * 
 * Arquitetura modular seguindo:
 * - KISS: Código simples e direto
 * - SRP: Cada módulo tem uma responsabilidade
 * - DRY: Funções reutilizáveis em utils.js
 * - YAGNI: Apenas funcionalidades necessárias
 * - SoC: Separação clara de responsabilidades
 * 
 * Estrutura:
 * /js
 *   ├── main.js        - Ponto de entrada
 *   ├── config.js      - Configurações centralizadas
 *   ├── utils.js       - Utilitários reutilizáveis
 *   ├── navigation.js  - Navegação e scroll
 *   ├── animations.js  - Animações e efeitos visuais
 *   ├── interactions.js- Interações do usuário
 *   └── forms.js       - Gerenciamento de formulários
 */

import CONFIG from './config.js';
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initInteractions } from './interactions.js';
import { initForms } from './forms.js';

/**
 * Inicializa toda a aplicação
 */
const init = () => {
  // Navegação (smooth scroll, navbar effects)
  initNavigation();
  
  // Animações (fade-in, floating cards, counters)
  initAnimations();
  
  // Interações (hover effects, button handlers)
  initInteractions();
  
  // Formulários (newsletter)
  initForms();
  
  // Log de inicialização (apenas em desenvolvimento)
  logInitialization();
};

/**
 * Log de inicialização no console
 */
const logInitialization = () => {
  const styles = {
    title: 'color: #f5c400; font-size: 20px; font-weight: bold;',
    subtitle: 'color: #6dd47e; font-size: 14px;',
    copyright: 'color: #dcdcdc; font-size: 12px;'
  };

  console.log('%c🚀 ODH Site Carregado com Sucesso!', styles.title);
  console.log('%cDemocratizando o acesso à tecnologia de licitações públicas', styles.subtitle);
  console.log('%c© 2025 ODH Comércio e Serviços de Assessoria', styles.copyright);
};

// Aguarda DOM estar pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export default init;
