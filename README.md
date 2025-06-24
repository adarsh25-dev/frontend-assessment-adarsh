# 👟 Interactive Sneaker Shop

A modern, accessible sneaker landing page with interactive expanding sections.

## 🎥 Demo

[**📺 View Demo Video**](https://www.google.com)

## ✨ Features

- **Interactive Design**: 3 expandable sneaker sections (Air Jordan, Yeezy, Bape)
- **Accessibility First**: Full keyboard navigation + screen reader support
- **Responsive**: Mobile and desktop optimized
- **Smooth Animations**: CSS transforms with performance optimization
- **State Persistence**: Remembers expanded sections across sessions

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠️ Tech Stack

- **Vue 3** + **TypeScript** - Modern reactive framework
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool
- **Heroicons** - SVG icon library

## 📱 Controls

- **Click/Tap**: Expand sneaker sections
- **Arrow Keys**: Navigate between sections
- **Enter/Space**: Expand focused section
- **Escape**: Close expanded section

## 📂 Key Structure

```
src/
├── components/           # Vue components
│   ├── Header.vue       # Navigation header
│   ├── JordanSection.vue # Air Jordan section
│   ├── YeezySection.vue  # Yeezy section
│   └── BapeSection.vue   # Bape section
├── composables/         # Reusable logic
│   ├── useAccessibility.ts  # Screen reader support
│   ├── useImageLoader.ts    # Image loading states
│   └── useLocalStorage.ts   # State persistence
└── assets/              # Global styles
```

## 🎨 Customization

Each sneaker section has unique:

- **Gradients**: Jordan (blue), Yeezy (lime), Bape (beige)
- **Animations**: Custom transforms and rotations
- **Typography**: Section-specific font sizing

---

Built with ❤️ using Vue 3 and modern web standards.
