# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

Based on T3 Stack project structure, use these npm scripts:

- **Development**: `npm run dev` (uses Next.js turbo mode)
- **Build**: `npm run build`
- **Preview**: `npm run preview` (builds and starts production server)
- **Lint**: `npm run lint` (ESLint for Next.js)
- **Lint Fix**: `npm run lint:fix`
- **Type Check**: `npm run typecheck` (TypeScript without emit)
- **Format Check**: `npm run format:check` (Prettier)
- **Format Fix**: `npm run format:write`
- **Full Check**: `npm run check` (runs both lint and typecheck)

## Architecture Overview

This is a **Next.js 15 landing page** for Blackwell Capital Management built with the T3 Stack architecture:

### Key Technologies
- **Next.js 15** with App Router (`src/app/` directory)
- **TypeScript** with strict configuration
- **Tailwind CSS 4.0** for styling
- **Framer Motion** for animations and transitions
- **Supabase** for database operations (waitlist functionality)
- **React Hook Form** with Zod validation

### Project Structure
- **`src/app/`**: Next.js 15 App Router pages
  - `page.tsx`: Homepage with animated slot machine text and responsive design
  - `contact/page.tsx`: Contact form with Supabase integration
  - `funds/page.tsx`: Funds information page
  - `thesis/page.tsx`: Investment thesis page
  - `layout.tsx`: Root layout with multiple Google Fonts (Geist, Inter, Archivo Black, Anton)

- **`src/components/`**: Reusable React components
  - `SlotMachineText.tsx`: Custom animated text component with slot machine effect
  - `magicui/`: UI animation components

- **`src/lib/`**: Utility functions and configurations
  - `supabase.ts`: Supabase client configuration
  - `utils.ts`: General utility functions
  - `env.js`: Environment variable validation using `@t3-oss/env-nextjs`

### Design Patterns
- **Mobile-first responsive design** with explicit mobile/desktop layouts
- **Animation-heavy interface** using Framer Motion with complex staggered animations
- **Custom slot machine text effect** with configurable timing and colors
- **Form handling** with React Hook Form and comprehensive error states
- **Environment validation** using Zod schemas through T3 env setup

### Supabase Integration
- Contact form submits to `waitlist` table
- Handles duplicate email errors (PostgreSQL constraint 23505)
- Uses proper error handling and user feedback

### Styling Approach
- **Tailwind CSS 4.0** with PostCSS configuration
- **Multiple font families** loaded via Next.js font optimization
- **Inline styles** mixed with Tailwind classes for precise positioning
- **CSS custom properties** for font variables

When working with this codebase:
1. Follow the existing animation patterns using Framer Motion variants
2. Maintain the responsive design approach with separate mobile/desktop layouts  
3. Use the established TypeScript patterns and form validation
4. Follow the T3 Stack conventions for environment variables and configuration