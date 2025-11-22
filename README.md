# Hasrat Afridi - Portfolio Website

A modern, fully responsive portfolio website built with **React**, **Vite**, and **Tailwind CSS**. This portfolio showcases projects, blog posts, and professional information with a clean, user-friendly design.

## Author
**Hasratullah Khan Afridi** - MERN Stack Developer

## Tech Stack

- **React 19** - Modern JavaScript library for building user interfaces
- **Vite 7** - Lightning-fast build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Swiper** - Modern touch slider for carousels
- **React Icons** - Popular icon library

## Features

### 🏠 Home Page
- Beautiful hero banner with image carousel
- Latest portfolio works showcase
- About section with profile
- Client testimonials slider

### 💼 Portfolio
- Filterable project gallery (All, React, Vanilla JS, MERN)
- Dynamic project details pages
- Responsive grid layout
- Project categorization and tagging

### 📝 Blog
- Blog listing with category filters
- Individual blog post pages
- Dynamic routing with query parameters
- Category-based filtering
- Tags system

### 👤 About
- Professional bio and information
- Skills showcase with animated progress bars
- Responsive layout

### 📧 Contact
- Fully validated contact form with real-time validation
- Email format validation
- Required field checks with error messages
- Visual error feedback
- Contact information display

## Project Structure

```
portfolio-react/
├── public/
│   ├── img/              # All images and assets
│   └── fonts/            # Font files
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Banner.jsx
│   │   ├── Portfolio.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── AboutPage.jsx
│   │   ├── PortfolioPage.jsx
│   │   ├── PortfolioDetails.jsx
│   │   ├── BlogPage.jsx
│   │   ├── BlogDetails.jsx
│   │   └── ContactPage.jsx
│   ├── data/            # Data files
│   │   ├── projects.js
│   │   └── blogPosts.js
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles with Tailwind
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── vite.config.js       # Vite configuration
└── package.json
```

## Getting Started

### Installation

1. Install dependencies
```bash
npm install
```

2. Start the development server
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## Key Features

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Breakpoints for tablets and desktops
- Touch-friendly navigation

### Dynamic Routing
- React Router for seamless navigation
- Query parameters for project and blog details
- Smooth page transitions

### Contact Form Validation
- Field-level validation on blur
- Email format verification using regex
- Minimum length requirements
- Visual error feedback with red borders
- Error messages below fields
- Submit button disabled during validation

### Performance
- ⚡ Vite for fast development and optimized builds
- 📦 Code splitting with React Router
- 🎨 Tailwind CSS for minimal CSS bundle
- 🖼️ Optimized image loading

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: '#e45447',   // Main brand color
  secondary: '#ffd200', // Secondary color
  dark: '#222222',      // Dark text
  gray: '#777777',      // Gray text
}
```

### Fonts
The project uses Google Fonts (Poppins for headings and Roboto for body text). These are imported in `src/index.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Connect

- **Email**: hasrat3701@gmail.com
- **GitHub**: [github.com/Hasrat270](https://github.com/Hasrat270)
- **LinkedIn**: [Hasrat Khan Afridi](https://www.linkedin.com/in/hasrat-khan-afridi)
- **WhatsApp**: +92 308 2841437

## License

This project is open source and available for personal and commercial use.

---

Made with ❤️ by Hasrat Afridi