# Muhammad Owais Raza — Personal Portfolio

> **Web Development Internship — Task 1**  
> **Organization:** Arch Technologies  
> **Candidate:** Muhammad Owais Raza  
> **Role / Specialization:** Aspiring Full-Stack Web Developer

---

## 📌 Project Overview

This repository contains the complete, production-quality personal portfolio website developed for **Task 1** of the **Arch Technologies Web Development Internship**.

The portfolio is designed and developed to present the candidate's authentic background, educational progression, technical skills, practical personal projects, and contact information with an emphasis on modern UI/UX design, clean semantic code, strict accessibility standards, and flawless cross-device responsiveness.

---

## ✨ Key Features

- **Accurate & Transparent Profile**: Showcases genuine academic background, qualifications, skill sets, and personal projects without exaggerated statistics or placeholder copy.
- **Modern Design System**: Built with a sleek dark aesthetic (`#0F172A`), balanced typography via the Inter font family, glassmorphism headers, subtle interactive elevation, and cohesive indigo/cyan accent palettes.
- **Comprehensive Section Coverage**:
  1. **Sticky Header / Navigation**: Desktop navbar and responsive mobile drawer with focus trap, aria attributes, and active scroll spy.
  2. **Hero / Introduction**: Dynamic developer code card, clear career ambition statement, primary/secondary action buttons, and direct social links.
  3. **About Me**: Narrative describing current full-stack focus, educational background, and learning milestones.
  4. **Education & Qualifications**: Visually attractive timeline layout detailing DISM, SMIT Web Development training, ADC, M.A. studies, and Intermediate in Commerce.
  5. **Certifications**: Intentional empty-state card indicating credentials will be published as programs conclude.
  6. **Categorized Skills**: Zero misleading percentage bars; organized into Frontend, Backend, Database, CMS & Builders, Tools & Version Control, and Currently Learning (MERN Stack).
  7. **Featured Projects**: Highlights real practical projects (*TaskFlow — Modern To-Do List* with GitHub repository and *Marksheet-with-DOM*).
  8. **Experience & Practical Work**: Outlines hands-on development experience gained through self-directed projects and coursework.
  9. **Testimonials**: Clean, subtle empty state for future professional recommendations.
  10. **Blog / Articles**: Elegant placeholder for technical write-ups.
  11. **Achievements**: Purposeful milestone card for future accolades.
  12. **Contact Section**: Direct contact links (`mailto`, `tel`, LinkedIn, GitHub) and a fully accessible client-side validated message form.
  13. **Footer**: Navigation links, direct contacts, copyright notices, and internship task attribution.

---

## 🛠️ Technologies & Tools

- **Markup & Structure**: Semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- **Styling & Layout**: Vanilla CSS3, CSS Custom Properties (Variables), Flexbox, CSS Grid, Media Queries, Backdrop Filter
- **Interactivity**: Vanilla JavaScript (ES6+), DOM APIs, `IntersectionObserver`, Event Listeners
- **Icons & Graphics**: Clean, scalable inline vector SVGs
- **Typography**: Google Fonts (Inter, JetBrains Mono) with system font fallbacks

---

## 📁 Folder Structure

```text
Personal-Portfolio---Arch-Technologies-task-1/
├── index.html                  # Main entry point HTML file
├── css/
│   └── style.css              # Centralized CSS design system & responsive styling
├── js/
│   └── script.js              # Accessible mobile menu, scroll spy, and form validation
├── assets/
│   ├── icons/                 # Scalable SVG icons & graphic assets
│   └── images/                # Visual media assets
├── portfolio/                 # Self-contained portfolio folder matching task spec
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── assets/
└── README.md                  # Project documentation & overview
```

---

## 🚀 How to Run the Website

This portfolio is built entirely with standard web technologies (Vanilla HTML, CSS, JavaScript) and requires **no build step, no npm install, and no local server configuration**.

1. **Clone or Download** the repository to your local system:
   ```bash
   git clone https://github.com/Muhammad-owais-raza/Personal-Portfolio---Arch-Technologies-task-1.git
   ```
2. **Open the Website**:
   - Double-click `index.html` (or `portfolio/index.html`) in your file explorer to launch it directly in Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, or any modern web browser.
   - Alternatively, open the directory in VS Code and use the *Live Server* extension.

---

## 📱 Responsive Design Matrix

The stylesheet is tested across standard responsive breakpoints to eliminate horizontal overflow and ensure comfortable readability:

| Breakpoint | Target Category | Layout Behavior |
| :--- | :--- | :--- |
| **1920px+** | Large Desktop | Maximum content width constraint (1400px), spacious margins |
| **1440px / 1366px** | Standard Desktop & Laptop | 2-column hero and about layouts, multi-column skill and project grids |
| **1024px** | Tablet Landscape | Fluid column adjustments, optimized card padding |
| **768px** | Tablet Portrait | Single-column cards, hamburger navigation activation |
| **430px / 390px** | Large & Standard Mobile | Stacked button groups, vertical contact layout |
| **320px** | Small Mobile | Zero horizontal clipping, fluid font sizes, touch-friendly tap targets |

---

## ♿ Accessibility (a11y) Best Practices

- **Keyboard Navigation**: Full Tab navigation support with clear `:focus-visible` focus rings.
- **Screen Reader Support**: Semantic landmarks, `aria-label`, `aria-expanded`, and `aria-controls` on interactive controls.
- **Form Usability**: Associated `<label for="...">` tags and live validation errors announced via `aria-live="polite"`.
- **Reduced Motion**: Full support for `@media (prefers-reduced-motion: reduce)` to disable non-essential transitions and floating animations.
- **Safe External Links**: All external hyperlinks utilize `target="_blank"` with `rel="noopener noreferrer"` attributes.

---

## 📬 Contact Information

- **Name**: Muhammad Owais Raza
- **Professional Title**: Full-Stack Web Developer
- **Email**: [owaisraza.codes@gmail.com](mailto:owaisraza.codes@gmail.com)
- **Phone**: [0334-6391222](tel:03346391222)
- **LinkedIn**: [https://www.linkedin.com/in/muhammad-owais-raza-dev/](https://www.linkedin.com/in/muhammad-owais-raza-dev/)
- **GitHub**: [https://github.com/Muhammad-owais-raza](https://github.com/Muhammad-owais-raza)
- **Featured Project Repo (TaskFlow)**: [TaskFlow — Modern To-Do List](https://github.com/Muhammad-owais-raza/TaskFlow-Modern-To-Do-List---for-Arch-Technologies)

---

## 📄 License & Attribution

&copy; 2026 Muhammad Owais Raza. All rights reserved.  
Developed as part of the **Web Development Internship (Task 1)** at **Arch Technologies**.
