# Portfolio Website - Next.js

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- Modern, responsive design with dark/light theme support
- Smooth animations with Framer Motion
- Mobile-first responsive design
- Automatically adapts to system theme (light/dark mode)
- Contact form with Formspree integration
- Optimized for Vercel deployment
- Dependabot enabled for weekly dependency updates

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + Custom components
- **Icons**: Font Awesome
- **Deployment**: Vercel
  
## Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/          # React components
│   ├── ui/             # UI components
│   ├── Navigation.tsx  # Navigation component
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects section
│   ├── Education.tsx   # Education section
│   └── Contact.tsx     # Contact section
├── hooks/               # Custom hooks
├── lib/                 # Utility functions
└── assets/              # Images and static files
```
