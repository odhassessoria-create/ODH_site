/**
 * ODH Site - Script Principal (Bundled)
 * 
 * Arquitetura modular seguindo princípios de Clean Code:
 * - KISS: Código simples e direto
 * - SRP: Cada módulo tem uma responsabilidade única
 * - DRY: Funções reutilizáveis centralizadas
 * - YAGNI: Apenas funcionalidades necessárias
 * - SoC: Separação clara de responsabilidades via IIFEs
 * 
 * Para desenvolvimento modular, veja /js/main.js
 */

(function() {
  'use strict';

  // ===========================
  // CONFIGURAÇÕES CENTRALIZADAS
  // ===========================
  var CONFIG = {
    contact: {
      email: 'odhassessoria@gmail.com',
      phone: '(84) 9 9927-5704',
      phoneLink: '+5584999275704',
      mapsUrl: 'https://maps.app.goo.gl/vrfrgXGEDxFtJr8v8',
      whatsappUrl: 'https://wa.me/5584999275704'
    },
    animation: {
      fadeInDuration: 600,
      floatDuration: 3000,
      counterInterval: 30
    },
    observers: {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px',
      statsThreshold: 0.5
    },
    ui: {
      navbarShadowDefault: '0 2px 20px rgba(0,0,0,0.3)',
      navbarShadowScroll: '0 4px 30px rgba(0,0,0,0.4)'
    }
  };

  // ===========================
  // UTILITÁRIOS (DRY)
  // ===========================
  var $ = function(selector) {
    return document.querySelector(selector);
  };

  var $$ = function(selector) {
    return document.querySelectorAll(selector);
  };

  var forEach = function(elements, callback) {
    Array.prototype.forEach.call(elements, callback);
  };

  var isValidEmail = function(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // ===========================
  // MÓDULO: NAVEGAÇÃO (SRP)
  // ===========================
  var Navigation = (function() {
    var lastScroll = 0;

    function initSmoothScroll() {
      forEach($$('a[href^="#"]'), function(anchor) {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          var target = $(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        });
      });
    }

    function initNavbarEffect() {
      var navbar = $('.navbar');
      if (!navbar) return;

      window.addEventListener('scroll', function() {
        var currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
          navbar.style.boxShadow = CONFIG.ui.navbarShadowDefault;
          navbar.style.transform = 'translateY(0)';
          lastScroll = currentScroll;
          return;
        }
        
        navbar.style.transform = currentScroll > lastScroll 
          ? 'translateY(-100%)' 
          : 'translateY(0)';
        
        if (currentScroll <= lastScroll) {
          navbar.style.boxShadow = CONFIG.ui.navbarShadowScroll;
        }
        
        lastScroll = currentScroll;
      }, { passive: true });
    }

    return {
      init: function() {
        initSmoothScroll();
        initNavbarEffect();
      }
    };
  })();

  // ===========================
  // MÓDULO: ANIMAÇÕES (SRP)
  // ===========================
  var Animations = (function() {
    var selectors = {
      sections: '.about-section, .robot-section, .ebook-section, .mentoria-section, .assessoria-section, .final-cta, .argumentos-section',
      floatingCards: '.floating-card',
      statsCards: '.stat-card strong'
    };

    function initFadeIn() {
      var sections = $$(selectors.sections);
      
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, { 
        threshold: CONFIG.observers.threshold, 
        rootMargin: CONFIG.observers.rootMargin 
      });

      forEach(sections, function(section) {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity ' + CONFIG.animation.fadeInDuration + 'ms ease, transform ' + CONFIG.animation.fadeInDuration + 'ms ease';
        observer.observe(section);
      });
    }

    function initFloatingCards() {
      forEach($$(selectors.floatingCards), function(card, index) {
        card.style.animation = 'float ' + CONFIG.animation.floatDuration + 'ms ease-in-out ' + index + 's infinite';
      });
    }

    function animateCounter(element, target) {
      var numericTarget = parseInt(target.replace(/\D/g, ''), 10) || 0;
      var suffix = target.replace(/[0-9]/g, '');
      var hasPlus = target.includes('+');
      var increment = hasPlus ? 1 : (numericTarget > 50 ? 10 : 1);
      var current = 0;

      var timer = setInterval(function() {
        current += increment;
        if (current >= numericTarget) {
          current = numericTarget;
          clearInterval(timer);
        }
        element.textContent = (hasPlus ? '+' : '') + current + suffix.replace('+', '');
      }, CONFIG.animation.counterInterval);
    }

    function initStatsCounters() {
      var statsCards = $$(selectors.statsCards);
      
      var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target, entry.target.textContent);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: CONFIG.observers.statsThreshold });

      forEach(statsCards, function(stat) {
        observer.observe(stat);
      });
    }

    return {
      init: function() {
        initFadeIn();
        initFloatingCards();
        initStatsCounters();
      }
    };
  })();

  // ===========================
  // MÓDULO: INTERAÇÕES (SRP)
  // ===========================
  var Interactions = (function() {
    function initPlanCardsHover() {
      forEach($$('.plan-card'), function(card) {
        card.addEventListener('mouseenter', function() {
          this.style.transform = 'translateY(-12px) scale(1.02)';
        });
        card.addEventListener('mouseleave', function() {
          this.style.transform = 'translateY(0) scale(1)';
        });
      });
    }

    function clickEffect(button) {
      button.style.transform = 'scale(0.95)';
      setTimeout(function() {
        button.style.transform = 'scale(1)';
      }, 150);
    }

    function handleButtonAction(btnText) {
      var text = btnText.toLowerCase();
      
      if (text.includes('falar') || text.includes('especialista')) {
        window.open(CONFIG.contact.whatsappUrl, '_blank');
        return;
      }
      
      if (text.includes('assinar') || text.includes('participar') || text.includes('comprar')) {
        alert('Em breve você poderá realizar esta ação!\n\nEntre em contato pelo WhatsApp: ' + CONFIG.contact.phone);
      }
    }

    function initActionButtons() {
      forEach($$('.btn-plan, .btn-primary'), function(button) {
        button.addEventListener('click', function(e) {
          var href = this.getAttribute('href');
          
          if (!href || href === '#') {
            e.preventDefault();
            clickEffect(this);
            handleButtonAction(this.textContent.trim());
          }
        });
      });
    }

    return {
      init: function() {
        initPlanCardsHover();
        initActionButtons();
      }
    };
  })();

  // ===========================
  // MÓDULO: FORMULÁRIOS (SRP)
  // ===========================
  var Forms = (function() {
    function handleNewsletterSubmit(e) {
      e.preventDefault();
      var input = $('.newsletter input');
      if (!input) return;
      
      var email = input.value.trim();
      
      if (isValidEmail(email)) {
        alert('Obrigado por se inscrever! Em breve você receberá nossas novidades.');
        input.value = '';
      } else {
        alert('Por favor, insira um email válido.');
      }
    }

    return {
      init: function() {
        var newsletterBtn = $('.newsletter button');
        var newsletterInput = $('.newsletter input');
        
        if (newsletterBtn) {
          newsletterBtn.addEventListener('click', handleNewsletterSubmit);
        }
        if (newsletterInput) {
          newsletterInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') handleNewsletterSubmit(e);
          });
        }
      }
    };
  })();

  // ===========================
  // INICIALIZAÇÃO
  // ===========================
  function init() {
    Navigation.init();
    Animations.init();
    Interactions.init();
    Forms.init();
    
    // Log de inicialização
    console.log('%c🚀 ODH Site Carregado com Sucesso!', 'color: #f5c400; font-size: 20px; font-weight: bold;');
    console.log('%cDemocratizando o acesso à tecnologia de licitações públicas', 'color: #6dd47e; font-size: 14px;');
    console.log('%c© 2025 ODH Comércio e Serviços de Assessoria', 'color: #dcdcdc; font-size: 12px;');
  }

  // Aguarda DOM estar pronto
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();