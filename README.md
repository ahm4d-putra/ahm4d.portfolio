# Ahmad Putra Ramadhan — Personal Portfolio

A modern, responsive, and minimal portfolio website built with **React**, **Vite**, and **Tailwind CSS**. This project showcases my projects, skills, and insights as a Full-Stack Engineer student. It also includes an **Interactive Playground** to demonstrate real-time coding logic.

![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-purple?logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-black?logo=framer)
![GSAP](https://img.shields.io/badge/GSAP-Latest-88CE02?logo=greensock)
![i18next](https://img.shields.io/badge/i18next-Latest-26A69A?logo=i18next)

---

## Screenshots

![Homepage Screenshot](./screenshots/ss.png)

---

## Key Features

- **Modern UI/UX** — Clean design with Glassmorphism effects and dark mode support.
- **Fully Responsive** — Optimized for mobile, tablet, and desktop views.
- **Animated Interactions** — Smooth animations powered by Framer Motion & **GSAP**.
- **Scroll Animations** — Advanced scroll-triggered animations using **GSAP ScrollTrigger**.
- **Dynamic Sidebar** — Mobile-friendly navigation with an animated sidebar.
- **Multiple Language Support** — Switch between languages (EN/ID) using **react-i18next**.
- **Interactive Playground** — Built-in **Typing Speed Test** with real-time WPM and accuracy stats.
- **SEO Optimized** — Meta tags and Open Graph tags included for better search engine visibility.
- **Custom Icons** — Handcrafted SVG icons to reduce external dependencies.

---

## Built With

- **[React.js](https://reactjs.org/)** — A JavaScript library for building user interfaces.
- **[Vite](https://vitejs.dev/)** — Next Generation Frontend Tooling.
- **[Tailwind CSS](https://tailwindcss.com/)** — A utility-first CSS framework.
- **[Framer Motion](https://www.framer.com/motion/)** — Production-ready animations for React.
- **[GSAP](https://gsap.com/)** — Professional-grade animation library with ScrollTrigger support.
- **[react-i18next](https://react.i18next.com/)** — Powerful internationalization framework for React.
- **[Lucide React](https://lucide.dev/)** — Beautiful & consistent icon toolkit.

---

## Getting Started

### Prerequisites

Make sure you have **Node.js** (version 16 or higher) installed on your machine.

- [Download Node.js](https://nodejs.org/en/download/)

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/ahm4d-putra/ahm4d.portofolio.git
   ```

2. **Navigate to the project folder**
   ```sh
   cd ahm4d.portofolio
   ```

3. **Install dependencies**
   ```sh
   npm install
   ```

4. **Start the development server**
   ```sh
   npm run dev
   ```

5. **Open in browser**
   Open `http://localhost:5173` (or the port shown in your terminal).

---

## Project Structure

```text
src/
├── components/           # Reusable UI components (Button, LanguageSwitcher, etc)
├── sections/             # Main sections (Hero, Navbar, Playground, etc)
├── locales/              # i18n translation files
│   ├── en/
│   │   └── translation.json
│   └── id/
│       └── translation.json
├── hooks/                # Custom hooks (useGSAP, useScrollTrigger, etc)
├── i18n.js               # i18next configuration
├── App.jsx               # Main application component
├── main.jsx              # Entry point
└── index.css             # Global styles & Tailwind directives
public/
├── favicon.svg
└── og-image.png
```

---

## GSAP Setup

GSAP is used for advanced animations and scroll-triggered effects. Install it via:

```sh
npm install gsap
```

Example usage in a component:

```jsx
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return <section ref={heroRef}>...</section>;
}
```

---

## i18n (Multiple Language) Setup

This project uses **react-i18next** for multilingual support (EN/ID). Install it via:

```sh
npm install i18next react-i18next
```

**`src/i18n.js`** — i18next config:

```js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation.json';
import id from './locales/id/translation.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    id: { translation: id },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
```

**Import in `main.jsx`**:

```jsx
import './i18n';
```

**Using translations in components**:

```jsx
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();
  return <h1>{t('hero.greeting')}</h1>;
}
```

**Language Switcher example**:

```jsx
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  return (
    <div>
      <button onClick={() => i18n.changeLanguage('en')}>EN</button>
      <button onClick={() => i18n.changeLanguage('id')}>ID</button>
    </div>
  );
}
```

---

## Customization

1. **Content** — Edit strings inside `src/sections/` and `src/locales/`.
2. **Colors** — Modify `tailwind.config.js` to change the color palette.
3. **Animations** — Tweak GSAP configs in `src/hooks/` or directly in section components.
4. **Languages** — Add new locale JSON files in `src/locales/` and register them in `i18n.js`.
5. **Images** — Replace `favicon.svg` and add screenshots to `public/` or `src/assets/`.
6. **SEO** — Update `index.html` with your name, description, and OG image links.

---

## Author

**Ahmad Putra Ramadhan**

- **GitHub**: [@ahm4d-putra](https://github.com/ahm4d-putra)
- **Instagram**: [@ahmaddd9_](https://instagram.com/ahmaddd9_)

---

## License

This project is open source and available under the [MIT License](LICENSE).
