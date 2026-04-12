# Little Learners Academy – Landing Page

A fully responsive landing page for **Little Learners Academy**, a kindergarten school website built with React, TypeScript, and Vite. The design follows a provided Figma mockup and uses only pure CSS (no external CSS libraries).

## Preview

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-6-blue?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-8-purple?logo=vite)

## Features

- **Fully Responsive** — adapts to small, medium, and large screens
- **Navbar Toggle** — hamburger menu for mobile navigation
- **Testimonials Slider** — carousel with left/right navigation and smooth transitions
- **FAQ Accordion** — expand/collapse questions with plus/minus icons
- **Benefits Section** — grid of feature cards highlighting the academy's strengths
- **Navigation Cards** — quick links to About Us, Academics, Student Life, and Admissions
- **Footer** — contact info, useful links, privacy policies, and social media icons

## Tech Stack

| Technology  | Purpose                  |
| ----------- | ------------------------ |
| React 19    | UI library               |
| TypeScript  | Type safety              |
| Vite        | Build tool & dev server  |
| CSS Modules | Scoped component styling |
| react-icons | SVG icon components      |

## Project Structure

```
src/
├── main.tsx                  # Entry point
├── App.tsx                   # Root component
├── pages/
│   └── Home.tsx              # Main landing page
├── components/
│   ├── Header/               # Combines NavBar + Hero
│   ├── NavBar/               # Navigation bar with mobile toggle
│   ├── Hero/                 # Hero section with stats
│   ├── HeaderSections/       # Reusable section header
│   ├── BenefitsSection/      # Benefits grid cards
│   ├── TestimonialsSection/  # Testimonials carousel slider
│   ├── Questions/            # FAQ accordion
│   ├── Navigate/             # Navigation cards
│   └── Footer/               # Site footer
```

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### Installation

```bash
git clone https://github.com/<your-username>/task2.git
cd task2
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Technical Highlights

- **No external CSS libraries** — all styling done with pure CSS via CSS Modules
- **Component-based architecture** — each section is its own reusable component
- **Props-driven data** — content is passed via props, keeping components reusable
- **React hooks** — `useState`, `useEffect`, and `useRef` for interactive features
- **Responsive slider** — dynamically adjusts visible card count based on viewport width
