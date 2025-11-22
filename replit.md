# Portfolio React Application

## Overview

This is a personal portfolio website for Hasrat Afridi, a MERN Stack Developer. The application is built using React and Vite, featuring a modern, responsive design with Tailwind CSS. The portfolio showcases projects, blog posts, and professional information with optimized SEO and social media integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tool**
- **React 19.2.0** with Vite 7.2.4 as the build tool
- Chosen for fast development with Hot Module Replacement (HMR) and optimized production builds
- React provides component-based architecture for maintainable, reusable UI elements
- Vite offers superior build performance compared to traditional webpack-based setups

**Routing Solution**
- **React Router DOM v7.9.6** for client-side navigation
- Enables single-page application (SPA) experience with multiple views
- Handles dynamic routing for project details and blog post pages

**Styling Approach**
- **Tailwind CSS 4.1.17** as the primary styling framework
- Utility-first CSS approach for rapid UI development
- Custom theme extensions with brand colors (primary: #e45447, secondary: #ffd200)
- Custom font families: Poppins for headings, Roboto for body text
- PostCSS with Autoprefixer for cross-browser compatibility

**Component Libraries**
- **@headlessui/react 2.2.9** for accessible, unstyled UI components
- Provides foundation for dropdowns, modals, and other interactive elements
- Ensures WCAG compliance and keyboard navigation support

**UI Enhancements**
- **React Icons 5.5.0** for consistent iconography across the application
- **Swiper 12.0.3** for touch-enabled carousels and sliders (likely for project galleries)

### Code Quality & Development Standards

**Linting Configuration**
- ESLint 9.39.1 with React-specific plugins
- React Hooks plugin enforces Rules of Hooks for proper state management
- React Refresh plugin ensures reliable HMR during development
- Custom rule: unused variables allowed if they follow React component naming convention (uppercase)
- ECMAScript 2020 standard with latest features enabled

**Development Server Configuration**
- Configured to run on host 0.0.0.0 (accessible externally) on port 5000
- Strict port mode ensures consistent development environment
- Suitable for containerized development or cloud-based IDEs like Replit

### Data Architecture

**Static Data Management**
- Project and blog post data stored in JavaScript files (`src/data/`)
- Each data entity contains structured information:
  - Projects: title, description, images, technologies, features, links
  - Blog posts: title, excerpt, content (HTML strings), metadata (date, views, comments)
- No database currently implemented; content is bundled with the application
- Future consideration: Could be migrated to a headless CMS or API for dynamic content management

### SEO & Social Media Integration

**Meta Tag Strategy**
- Comprehensive Open Graph tags for Facebook sharing
- Twitter Card implementation for optimized tweet previews
- Custom Open Graph image hosted on Cloudinary CDN
- Structured metadata in index.html for search engine crawlers

**Asset Management**
- Images served from Cloudinary CDN for performance
- Local assets stored in `/public/img/` directory
- Custom favicon for brand identity

### Deployment Considerations

**Build Output**
- Production builds optimized by Vite's Rollup-based bundler
- Code splitting and tree shaking enabled by default
- Static file generation suitable for CDN deployment (Netlify, Vercel, etc.)
- No server-side rendering; purely client-side rendered application

## External Dependencies

### Content Delivery
- **Cloudinary** - Cloud-based image and video management service
  - Used for hosting portfolio images and Open Graph preview images
  - Provides URL-based image transformations for responsive images

### Font Delivery
- **Google Fonts API** - Web font service
  - Poppins (700 weight) for headings
  - Roboto (400, 500, 500 italic) for body text
  - Loaded via CSS @import for simplicity

### Third-Party APIs (Referenced in Data)
- **TMDB API** - The Movie Database API
  - Used in one of the portfolio projects (React Movie Discovery App)
  - Not directly integrated in this portfolio application itself

### Social Media Platforms
- Links to Facebook, Twitter/X, Instagram, LinkedIn, and GitHub
- Social sharing optimized with Open Graph and Twitter Card metadata

### Development Tools
- **npm** - Package manager for dependency management
- **ESLint** - Code quality and style enforcement
- **Vite** - Build tool and development server

### Potential Future Integrations
- Analytics platform (Google Analytics, Plausible, etc.) for visitor tracking
- Contact form backend service (Formspree, EmailJS, etc.)
- CMS integration (Contentful, Sanity, Strapi) for dynamic content management
- Comment system for blog posts (Disqus, Commento, etc.)