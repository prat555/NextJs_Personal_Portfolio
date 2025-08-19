# Portfolio Website - Next.js

A modern, responsive portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design with dark/light theme support
- ⚡ Built with Next.js 14 App Router
- 🎭 Smooth animations with Framer Motion
- 🎨 Styled with Tailwind CSS
- 📱 Mobile-first responsive design
- 🌙 Dark theme optimization
- 📧 Contact form with Formspree integration
- 🚀 Optimized for Vercel deployment

## Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui + Custom components
- **Icons**: Font Awesome
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/prat555/NextJs_Personal_Portfolio.git
cd NextJs_Personal_Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static files

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

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect Next.js and deploy
4. Your site will be available at `https://your-project.vercel.app`

## Customization

### Personal Information

Update the following files with your information:
- `src/components/Hero.tsx` - Name, title, description
- `src/components/Contact.tsx` - Contact details
- `src/components/Projects.tsx` - Your projects
- `src/components/Skills.tsx` - Your skills
- `src/components/Education.tsx` - Education and certifications

### Styling

- Colors and theme: Update `src/app/globals.css`
- Tailwind config: Modify `tailwind.config.ts`
- Component styles: Edit individual component files

### Images

- Replace images in `src/assets/` with your own
- Update image imports in components
- Ensure images are optimized for web

### Contact Form Setup

1. Go to [Formspree](https://formspree.io/) and create an account
2. Create a new form and get your form endpoint URL
3. In `src/components/Contact.tsx`, replace the existing form action with your Formspree endpoint:
```tsx
<form
  action="YOUR_FORMSPREE_ENDPOINT_HERE"  // Replace this line
  method="POST"
  className="space-y-6"
>
```
4. Test your form to ensure it's working correctly
5. You'll receive form submissions directly in your email

## Performance & Features

- Images are optimized with Next.js Image component
- CSS is purged with Tailwind CSS
- Static export for optimal performance
- Lazy loading for better user experience
- Interactive project cards with hover effects
- Smooth animations and transitions
- Mobile-first responsive design
- Optimized dark theme
- Carousel for mobile project viewing
- Contact form with validation
- SEO optimized structure
