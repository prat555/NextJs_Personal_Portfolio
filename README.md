# Portfolio Website - Next.js

A modern, responsive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern, responsive design with dark/light theme support
- Smooth animations with Framer Motion
- Mobile-first responsive design with dedicated mobile navigation
- Automatically adapts to system theme (light/dark mode)
- Contact form with Formspree integration
- Project showcase with image carousel
- Skills section with animated category cards
- Education & certifications timeline
- SEO optimized with Open Graph meta tags
- Accessible with ARIA labels and keyboard navigation
- Optimized for Vercel deployment
- Dependabot enabled for weekly dependency updates

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + Radix UI + Custom components
- **Carousel**: Embla Carousel
- **Icons**: Font Awesome
- **State Management**: TanStack React Query
- **Deployment**: Vercel

## Getting Started

```bash
# Clone the repository
git clone https://github.com/prat555/NextJs_Personal_Portfolio.git

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with providers
│   ├── page.tsx        # Home page with all sections
│   ├── not-found.tsx   # Custom 404 page
│   └── globals.css     # Global styles & CSS variables
├── components/          # React components
│   ├── ui/             # Reusable UI components (button, input, toast, etc.)
│   ├── Navigation.tsx  # Desktop navigation with scroll tracking
│   ├── MobileNavigation.tsx # Mobile bottom navigation
│   ├── Hero.tsx        # Hero section with typewriter effect
│   ├── Skills.tsx      # Skills grid with animations
│   ├── Projects.tsx    # Projects carousel showcase
│   ├── Education.tsx   # Education & certifications
│   ├── Contact.tsx     # Contact form & social links
│   ├── ScrollToTop.tsx # Scroll-to-top button
│   ├── ThemeProvider.tsx # Dark/light theme context
│   └── QueryClientProvider.tsx # React Query provider
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── assets/              # Images and static files
```

## License

This project is open source and available under the [MIT License](LICENSE).
