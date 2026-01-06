# 🏛️ ODH - Comércio e Serviços de Assessoria Ltda.

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-success?style=flat-square&logo=github)](https://odhassessoria-create.github.io/ODH_site/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

> **Democratizando o acesso à tecnologia de licitações públicas no Brasil.**

Site institucional da ODH, empresa especializada em tecnologia para licitações públicas, oferecendo o Bot de Lances **ODH PRISMA VECTOR**, o **e-Book LiciteFácil 8x** e o curso prático **ODH Start**.

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Produtos e Serviços](#-produtos-e-serviços)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Instalação](#-instalação)
- [Desenvolvimento](#-desenvolvimento)
- [Arquitetura](#-arquitetura)
- [Deploy](#-deploy)
- [Contato](#-contato)
- [Licença](#-licença)

---

## 🎯 Sobre o Projeto

A ODH atua no mercado de licitações públicas brasileiro, fornecendo tecnologia acessível para empresas e pessoas físicas que desejam participar de processos licitatórios de forma competitiva, ética e estratégica.

### Diferenciais

- ✅ **Tecnologia 100% Nacional** - Desenvolvida especialmente para o mercado brasileiro
- ✅ **Preço Justo** - Até 80% mais acessível que concorrentes
- ✅ **Suporte 24/7** - Equipe especializada à disposição
- ✅ **Atuação Ética** - Transparência e legalidade em todas as operações

---

## 💼 Produtos e Serviços

### 🤖 ODH PRISMA VECTOR (Robô de Lances)
Software automatizado para participação em licitações eletrônicas.

| Plano | Preço | Economia |
|-------|-------|----------|
| Mensal | R$ 49,90/mês | - |
| Trimestral | R$ 129,90 | 13% |
| Semestral | R$ 229,90 | 23% |
| Anual | R$ 399,90 | 33% |

### 📚 eBook LiciteFácil 8x
Guia completo para participar e investir no mercado de licitações públicas.
- **Preço:** R$ 19,90 (pagamento único)
- **Formato:** PDF Digital com acesso imediato

### 🎓 ODH Start — Licitações na Prática
Curso prático com aulas gravadas e acompanhamento direto do fundador.
- **Preço Fundador:** R$ 697,00 (ou 12x de R$ 69,70)
- Conteúdo em construção progressiva
- Acesso ao Bot de Lances incluso
- Todas as atualizações futuras sem custo adicional

### 🤝 Assessoria Personalizada
Consultoria sob medida para empresas e pessoas físicas.

---

## 🛠️ Tecnologias

- **HTML5** - Estrutura semântica e acessível
- **CSS3** - Estilos modernos com variáveis CSS e Flexbox/Grid
- **JavaScript ES6+** - Interatividade e animações
- **Google Fonts** - Tipografia (Playfair Display + Inter)
- **GitHub Pages** - Hospedagem

---

## 📁 Estrutura do Projeto

```
/Site
├── 📄 index.html              # Página principal
├── 📄 odh-start.html          # Página do curso ODH Start
├── 📄 emissor-nfe.html        # Página do ODH Essência
├── 📄 contato.html            # Formulário de contato
├── 🎨 styles.css              # Estilos legados (seções específicas)
├── ⚡ script.js               # JavaScript bundled
├── 📖 README.md               # Documentação
│
├── 📁 css/                    # CSS Modular (SOLID/DRY)
│   ├── main.css               # Ponto de entrada (imports)
│   ├── variables.css          # Design tokens
│   ├── base.css               # Reset e base
│   ├── components.css         # Componentes reutilizáveis
│   ├── layout.css             # Navbar, Footer
│   └── responsive.css         # Media queries
│
├── 📁 js/                     # JavaScript Modular (ES6)
│   ├── main.js                # Ponto de entrada
│   ├── config.js              # Configurações centralizadas
│   ├── utils.js               # Utilitários reutilizáveis
│   ├── navigation.js          # Navegação e scroll
│   ├── animations.js          # Animações
│   ├── interactions.js        # Interações do usuário
│   └── forms.js               # Formulários
│
└── 📁 assets/
    └── 📁 img/                # Imagens
        ├── logo-odh.png
        ├── hero-mockup.png
        ├── tech-laptop.jpg
        ├── capa-ebook-licitefacil8x.png
        ├── service-hologram.jpg
        └── laptop-bg.jpg
```

---

## 🏗️ Arquitetura

O projeto segue princípios **SOLID** e **DRY**:

| Princípio | Aplicação |
|-----------|-----------|
| **S**ingle Responsibility | Cada arquivo CSS/JS tem uma única responsabilidade |
| **O**pen/Closed | Componentes extensíveis via modificadores (`.btn.large`) |
| **D**RY | Design tokens em `variables.css`, componentes reutilizáveis |

### CSS Modular
- `variables.css` - Todas as cores, fontes, espaçamentos centralizados
- `components.css` - Botões, pills, checklists, cards reutilizáveis
- `layout.css` - Navbar e Footer (estrutura do site)
- `responsive.css` - Breakpoints organizados por tamanho

### JavaScript Modular
- Imports ES6 com separação clara de responsabilidades
- Configurações centralizadas em `config.js`
- Utilitários reutilizáveis em `utils.js`

---

## 🚀 Instalação

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- [Git](https://git-scm.com/) (opcional, para clonar)

### Clone o repositório

```bash
git clone https://github.com/odhassessoria-create/ODH_site.git
cd ODH_site
```

### Execute localmente

Abra o arquivo `index.html` diretamente no navegador ou use um servidor local:

```bash
# Com Python 3
python -m http.server 8000

# Com Node.js (npx)
npx serve

# Com VS Code
# Instale a extensão "Live Server" e clique em "Go Live"
```

Acesse: `http://localhost:8000`

---

## 💻 Desenvolvimento

### Princípios de Código

O projeto segue os princípios de Clean Code:

| Princípio | Descrição | Aplicação |
|-----------|-----------|-----------|
| **KISS** | Keep It Simple, Stupid | Código simples e direto |
| **SRP** | Single Responsibility | Cada módulo tem uma função |
| **DRY** | Don't Repeat Yourself | Utilitários centralizados |
| **YAGNI** | You Aren't Gonna Need It | Apenas o necessário |
| **SoC** | Separation of Concerns | Módulos independentes |

### Variáveis CSS

```css
:root {
  --dark: #0e0e11;
  --gold: #f5c400;
  --green: #6dd47e;
  --red: #ff4757;
  --blue: #4a90e2;
}
```

### Configurações JavaScript

Todas as configurações estão centralizadas em `js/config.js`:

```javascript
var CONFIG = {
  contact: {
    email: 'odhassessoria@gmail.com',
    phone: '(84) 9 9927-5704',
    whatsappUrl: 'https://wa.me/5584999275704'
  },
  // ...
};
```

---

## 🏗️ Arquitetura

### Módulos JavaScript

```
main.js (entrada)
    ├── config.js      → Configurações
    ├── utils.js       → Funções auxiliares
    ├── navigation.js  → Smooth scroll, navbar
    ├── animations.js  → Fade-in, counters
    ├── interactions.js→ Hover, cliques
    └── forms.js       → Newsletter
```

### Seções do Site

1. **Hero** - Apresentação principal
2. **Sobre a ODH** - Quem somos e missão
3. **Argumentos Lógicos** - Dados do mercado + mapa do Brasil
4. **Robô de Lances** - Planos e preços
5. **eBook** - LiciteFácil 8x
6. **ODH Start** - Curso prático de licitações
7. **Assessoria** - Consultoria personalizada
8. **CTA Final** - Chamada para ação
9. **Footer** - Contatos e links

---

## 🌐 Deploy

### GitHub Pages

O site está configurado para deploy automático via GitHub Pages:

1. Acesse: **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** / **(root)**
4. Clique em **Save**

URL: `https://odhassessoria-create.github.io/ODH_site/`

### Deploy Manual

```bash
git add .
git commit -m "Atualização do site"
git push origin main
```

---

## 📞 Contato

| Canal | Informação |
|-------|------------|
| 📧 **Email** | [odhassessoria@gmail.com](mailto:odhassessoria@gmail.com) |
| 📱 **WhatsApp** | [(84) 9 9927-5704](https://wa.me/5584999275704) |
| 📍 **Localização** | [Ver no Google Maps](https://maps.app.goo.gl/vrfrgXGEDxFtJr8v8) |

---

## 📄 Licença

© 2025 ODH Comércio e Serviços de Assessoria Ltda. Todos os direitos reservados.

---

<div align="center">

**Desenvolvido com 💛 para democratizar o acesso à tecnologia de licitações públicas no Brasil.**

[![ODH](https://img.shields.io/badge/ODH-Tecnologia%20Nacional-f5c400?style=for-the-badge)](https://odhassessoria-create.github.io/ODH_site/)

</div>
