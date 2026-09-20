# Harshal Arun Jaware — Senior Full-Stack Engineer & Software Developer 2

A modern, production-grade personal portfolio website built with **React 19, Tailwind CSS v4, Three.js (3JS), JavaScript (ES6+), and Vite**.

Showcases 8 years and 9 months of full-lifecycle software engineering experience across electrical engineering simulation platforms, 3D structural analysis, high-concurrency transportation dispatch systems, and modular enterprise ERP suites.

---

## 🚀 Technical Core

- **Frontend:** React 19, JavaScript (ES6+), TypeScript, HTML5, Semantic Web Components
- **3D Graphics & Simulation:** Three.js (3JS), WebGL 3D Canvas, Single-Line Diagrams (SLD)
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`), Vanilla CSS custom properties & animations
- **Backend & APIs:** Node.js, Express.js, System Design, REST APIs, Webhooks, Micro-integrations
- **Databases:** PostgreSQL, MySQL, Sequelize ORM, SQL Query Optimization & Indexing
- **Cloud & DevOps:** AWS (EC2, S3, RDS, Lambda), Azure DevOps, Microsoft Azure, Terraform, CI/CD
- **AI & Productivity:** GitHub Copilot, Agentic Coding workflows, AI prompt engineering & refactoring
- **Testing & Quality:** Vitest 5 with Happy-DOM, Testing Library, ESLint 9 (Flat Config), Prettier
- **Build Tooling:** Vite 6 with zero-configuration base path (`base: './'`)

---

## ✨ Key Portfolio Features

- **8+ Years Career Timeline:** Detailed chronology spanning 5 engineering organisations (Eiris Innovation, Tagrem India, Quality Horizon, Knoxed Infotech, Vedika Web Solutions).
- **Domain-Specific Projects & Case Studies:**
  - **PoleXpert:** Utility pole structural analysis & interactive 3D model visualisation using Three.js (3JS).
  - **SimXpert:** Electrical power system simulation engine (Power Flow, Short-Circuit, Motor Starting, and SLD modeling).
  - **On-The-Go (OTG):** Real-time multi-provider ride dispatch platform integrating Uber, Lyft, and Google Maps APIs with webhook pipelines.
  - **Custom ERP:** Modular UAE business management platform covering HR, Accounting, Sales, and Inventory.
  - **Agile Task Management System:** Jira-inspired sprint board with bidirectional Slack API event automation.
  - **Eiris Engineering Platform:** Shared enterprise services, design systems, and common REST calculation micro-services.
- **Interactive Accessible Project Modal:** Keyboard-navigable (`Escape` dismissal, focus retention, body scroll lock, backdrop click).
- **Interactive Video Profile:** Professional introduction section with responsive video player and technical highlights.
- **Recruiter-Ready Assets:**
  - Direct 1-click download of `Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf`.
  - Copy-to-clipboard email action and active contact channels.
  - Profile headshot with animated availability indicator.
- **SEO & Social Metadata:** Fully configured Open Graph (LinkedIn, Facebook) and Twitter Card tags.

---

## 🛠️ Development & Tooling

### Prerequisites
- **Node.js**: v20+ recommended
- **npm**: v10+

### Setup & Commands

```bash
# 1. Install dependencies
npm install

# 2. Start development server (runs on http://localhost:5173)
npm run dev

# 3. Execute unit test suite with coverage
npm run test:run

# 4. Code quality & linting
npm run lint

# 5. Compile production bundle
npm run build

# 6. Preview production build locally
npm run preview
```

---

## 🌐 Deployment to GitHub Pages

Pre-configured with `base: './'` in `vite.config.js` for zero-configuration static hosting.

### Automated GitHub Actions Workflow (Recommended)
Add `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: 'pages'
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'npm'
      - run: npm ci
      - run: npm run test:run
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 📂 Project Structure

```
personal-portfolio/
├── public/
│   ├── favicon.svg                  # Branded SVG monogram favicon
│   ├── profile.jpg                  # Professional developer headshot
│   └── Harshal_Jaware_Senior_Full_Stack_Developer_Resume.pdf # Downloadable resume PDF
├── src/
│   ├── components/
│   │   ├── common/                  # Button, SectionHeading
│   │   ├── layout/                  # Navbar (with mobile menu drawer), Footer, Container
│   │   ├── projects/                # ProjectCard, ProjectDetails (accessible modal)
│   │   └── sections/                # Hero, About, VideoProfile, Skills, Experience, Projects, Contact
│   ├── data/
│   │   ├── experience.js            # 8+ years work timeline & metrics
│   │   ├── projects.js              # Detailed project case studies
│   │   └── skills.js                # Core competencies & technologies
│   ├── test/
│   │   └── setup.js                 # Vitest test setup file
│   ├── App.jsx                      # Root application layout composition
│   ├── index.css                    # Tailwind CSS v4 theme & typography
│   └── main.jsx                     # React DOM entry point
├── index.html                       # SEO & OpenGraph metadata
├── vite.config.js                   # Base path & Happy-DOM Vitest configuration
└── package.json
```

---

## 📄 License
MIT © [Harshal Arun Jaware](https://github.com/HarshalJaware)
