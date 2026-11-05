# Akoth Alice Ojuang' — Professional Portfolio

[![Live Site](https://img.shields.io/badge/Live_Site-my--portfolio--akoth.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://my-portfolio-akoth.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.4.5-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![CI Status](https://img.shields.io/badge/CI-Passing-success?style=for-the-badge&logo=github-actions&logoColor=white)](https://github.com/Daniel-Dadzie/alice-portofolio/actions)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

> **"Thoughtful testing. Reliable technology. Better digital experiences."**

An editorial, high-performance personal portfolio website for **Akoth Alice Ojuang'**, an ICT professional with practical experience in web technologies, AI data annotation, and technical support, actively developing a specialization in **Software Quality Assurance (QA) and Manual Testing**.

---

## 🌐 Live Demonstrations

* **Primary Production URL:** [https://my-portfolio-akoth.vercel.app](https://my-portfolio-akoth.vercel.app)
* **Clean Brand Alias:** [https://akoth-portfolio.vercel.app](https://akoth-portfolio.vercel.app)
* **Full Name Alias:** [https://akoth-ojuang.vercel.app](https://akoth-ojuang.vercel.app)
* **Repository Alias:** [https://alice-portofolio.vercel.app](https://alice-portofolio.vercel.app)

---

## 👤 Candidate Profile

| Attribute | Details |
| :--- | :--- |
| **Candidate Name** | Akoth Alice Ojuang' |
| **Professional Focus** | ICT Professional & Aspiring Software Quality Assurance (QA) Analyst |
| **Location** | Nairobi, Kenya |
| **Email** | [lizzyalice10@gmail.com](mailto:lizzyalice10@gmail.com) |
| **Phone** | [+254 718 356 439](tel:+254718356439) |
| **Languages** | English, Swahili |
| **Education** | Diploma in Business Information Technology, Zetech University |
| **Current Role** | Coding & Robotics Tutor at Stimulating Smartbrains (Aug 2024 – Present) |
| **Target Roles** | Junior QA Tester, Manual Software Tester, QA Analyst, IT Support Specialist |

---

## ✨ Key Portfolio Features

* **Verified Curriculum Vitae (ATS-Friendly):** Direct download links for both machine-readable PDF (vector text layer, standard headings, single-column) and editable `.docx` versions.
* **Truthful Experience & Transferable Skills:** Accurate documentation of real-world roles (Coding & Robotics Tutoring, AI Data Annotation at Sama AI, Credit Control, and IT Attachment at Zetech University), with explicit explanations of how each translates to QA rigor.
* **Structured QA Learning Roadmap:** Detailed breakdown of ongoing learning milestones across:
  * *Website Manual Testing* (Functional testing, boundary-value analysis, equivalence partitioning, defect logging)
  * *API Testing with Postman* (HTTP methods, status codes, payload inspection, negative testing)
  * *Test Case Design & Bug Reporting* (Structured test suites, severity/priority triage, bug lifecycle)
* **Verified Certifications & Credentials:** Real certifications from IBM (*Cybersecurity Fundamentals*), Sama (*AI101*), Cisco Networking Academy (*Introduction to Cyber Security*), and the ICT Authority of Kenya.
* **Accessibility & Motion Polish:**
  * Full WCAG 2.1 AA compliance (high contrast ratios, semantic landmarks, descriptive link labels).
  * Smooth scrolling and interactive hover elevations scoped to respect `prefers-reduced-motion`.
  * Print stylesheet (`@media print`) enabling clean, paper-ready resume printing directly from the browser (`Ctrl+P`).
  * Optimized Next.js `Image` components with zero Cumulative Layout Shift (CLS).

---

## 🛠️ Technology Stack

* **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
* **Runtime & Library:** [React 19](https://react.dev/)
* **Language:** [TypeScript 5](https://www.typescriptlang.org/) (Strict mode)
* **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Continuous Integration:** GitHub Actions (`.github/workflows/ci.yml`)
* **Hosting & Deployment:** [Vercel](https://vercel.com/) (Edge network with zero SSO friction)

---

## 📁 Repository Structure

```text
my-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml               # Automated CI for lint, typecheck, and build
├── public/
│   ├── documents/
│   │   ├── Akoth-Alice-Ojuang-CV.pdf   # ATS-friendly vector PDF
│   │   └── Akoth-Alice-Ojuang-CV.docx  # Editable Word document
│   ├── images/
│   │   ├── akoth-profile.jpg    # Verified profile portrait
│   │   └── akoth-profile.png    # High-resolution master portrait
│   ├── favicon.ico
│   └── og-image.png             # OpenGraph social share card
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Metadata, fonts, and root container
│   │   ├── page.tsx             # Main editorial landing page
│   │   ├── globals.css          # Tailwind CSS 4 theme and print rules
│   │   ├── robots.ts            # Dynamic robots.txt
│   │   └── sitemap.ts           # Dynamic sitemap.xml
│   ├── components/
│   │   ├── CertificationsSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── Navigation.tsx
│   │   ├── ProfileImagePlaceholder.tsx
│   │   ├── QALearningJourneySection.tsx
│   │   └── SkillsSection.tsx
│   └── lib/
│       ├── data.ts              # Single source of truth for portfolio content
│       └── types.ts             # TypeScript definitions and schemas
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed:
* Node.js `20.x` or higher
* `npm` `10.x` or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Daniel-Dadzie/alice-portofolio.git
   cd alice-portofolio/my-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm ci
   # or
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application with Turbopack fast refresh.

---

## 🧪 Quality Assurance & Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js development server with Turbopack |
| `npx tsc --noEmit` | Validates TypeScript types across the entire project |
| `npm run lint` | Runs ESLint 9 checks to enforce code consistency |
| `npm run build` | Compiles an optimized production build |
| `npm run start` | Boots the compiled production server locally |

### Automated Continuous Integration (CI)

Every pull request and commit pushed to the `main` branch automatically triggers our GitHub Actions workflow (`.github/workflows/ci.yml`), running:
1. Clean dependency installation (`npm ci`)
2. Strict TypeScript typechecking (`npx tsc --noEmit`)
3. ESLint validation (`npm run lint`)
4. Production compilation test (`npm run build`)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
