# Interactive Sneaker Shop Landing Page

A modern, interactive sneaker landing page built with Vue.js 3 and Tailwind CSS.

## Features

- **Modern Design**: Clean, gradient-based design inspired by premium sneaker brands
- **Interactive Sections**: Click on any section (Air Jordan, Yeezy, Bape) to expand it
- **Smooth Animations**: Fluid transitions using CSS transforms and Tailwind's transition utilities
- **Responsive Design**: Optimized for desktop and mobile devices
- **Vue 3 Composition API**: Modern Vue.js architecture with TypeScript support

## Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **Heroicons** - Beautiful hand-crafted SVG icons

## Design Features

### Header

- Fixed navigation with home icon
- Center navigation links (WOMEN, MEN, KIDS)
- Right-side user icons (wishlist, profile, cart)

### Main Layout

- Three vertical sections with gradient backgrounds:
  - **Air Jordan**: Blue gradient
  - **Yeezy**: Green-yellow gradient
  - **Bape**: Orange-pink gradient
- Interactive expansion animation on click
- Smooth transitions between states

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # Vue components
├── assets/             # Static assets and global styles
├── views/              # Page components
├── router/             # Vue Router configuration
├── stores/             # Pinia stores
├── App.vue             # Main application component
└── main.ts             # Application entry point
```

## Customization

### Adding Real Sneaker Images

Replace the placeholder divs in `src/App.vue` with actual sneaker images by:

1. Adding images to `public/images/`
2. Updating the image sources in the component
3. Adjusting the CSS classes as needed

### Colors and Gradients

The gradient colors can be customized in the section classes within `src/App.vue`:

- Air Jordan: `bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600`
- Yeezy: `bg-gradient-to-br from-lime-400 via-yellow-400 to-green-400`
- Bape: `bg-gradient-to-br from-orange-300 via-pink-300 to-red-300`

## License

This project is open source and available under the [MIT License](LICENSE).
