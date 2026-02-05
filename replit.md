# ESM - Sound & Lighting Rental Website

## Overview

ESM (Electro Sound Machine) is a professional sound and lighting equipment rental website for events. The application is a marketing/lead generation site featuring service showcases, portfolio galleries, pricing packages, and an inquiry contact system. When visitors submit inquiries, the system stores them in a PostgreSQL database and sends email notifications via Resend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with a dark neon-cyan theme, custom CSS variables for theming
- **UI Components**: shadcn/ui component library (New York style) with Radix UI primitives
- **Animations**: Framer Motion for scroll animations and transitions
- **State Management**: TanStack React Query for server state and API calls
- **Build Tool**: Vite with React plugin

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript with ESM modules
- **API Pattern**: Simple REST endpoints defined in `shared/routes.ts` with Zod validation
- **Development**: Vite middleware serves the frontend in dev mode

### Data Storage
- **Database**: PostgreSQL with Drizzle ORM
- **Schema**: Single `inquiries` table for contact form submissions
- **Migrations**: Drizzle Kit for schema management (`npm run db:push`)

### Project Structure
```
client/           # React frontend
  src/
    components/   # UI components and page sections
    hooks/        # Custom React hooks
    pages/        # Route page components
    lib/          # Utilities and query client
server/           # Express backend
  routes.ts       # API endpoint handlers
  storage.ts      # Database operations
  db.ts           # Database connection
shared/           # Shared types and schemas
  schema.ts       # Drizzle table definitions
  routes.ts       # API route definitions with Zod schemas
```

### Key Design Decisions
- **Monorepo Structure**: Frontend and backend share types via the `shared/` directory
- **Type Safety**: Zod schemas validate API inputs, Drizzle generates TypeScript types from the database schema
- **Single Page App**: All sections render on one scrollable homepage with anchor navigation

## External Dependencies

### Database
- **PostgreSQL**: Required. Connection via `DATABASE_URL` environment variable
- **Drizzle ORM**: Schema-first approach with `drizzle-kit` for migrations

### Email Service
- **Resend**: Transactional email service for sending inquiry notifications
- **Environment Variable**: `RESEND_API_KEY` required for email functionality

### Third-Party UI Libraries
- **Radix UI**: Accessible primitive components (dialogs, dropdowns, tooltips, etc.)
- **Embla Carousel**: Carousel/slider functionality
- **React Day Picker**: Calendar date selection
- **Vaul**: Drawer component

### Fonts
- **Google Fonts**: Outfit (display) and DM Sans (body) loaded via CDN