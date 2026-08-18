# News Portal

[![React][react-badge]][react-url]
[![TypeScript][typescript-badge]][typescript-url]
[![Vite][vite-badge]][vite-url]
[![Docker][docker-badge]][docker-url]

A modern, mobile-responsive news aggregation platform that empowers users to discover and personalize content. Features advanced search across multiple parameters (keywords, date, category, source) and customizable news feeds tailored to preferred authors, topics, and publications.

## Tech Stack

- **Framework**: Vite
- **Library**: React
- **Language**: TypeScript
- **Containerization**: Docker & Nginx
- *Other technologies (Styling, State Management, Linter, etc.) will be defined later.*

---

## Features

- **Advanced Search**: Discover content across multiple parameters including keywords, date, category, and source.
- **Customizable News Feeds**: Tailor your news feed to preferred authors, topics, and publications.
- **Responsive Design**: A modern, mobile-responsive interface for optimal viewing on any device.

---

## Architecture & Folder Structure

```text
src/
├── api/          # Services for fetching data from external news APIs
├── components/   # Reusable UI components
├── constants/    # Configuration constants and static data
├── context/      # Global state management using React Context
├── hooks/        # Custom React hooks
├── pages/        # Main views and route components
├── styles/       # Global styles and design tokens
├── types/        # TypeScript interface and type definitions
└── utils/        # Helper functions and utilities
```

---

## Environment Variables

To run this project, you will need to configure environment variables. You can copy `.env.example` as a template and fill in your keys:

- For **local development**, create a `.env.local` file.
- For **production**, create a `.env.production` file.

Required variables:
- `VITE_NEWSAPI_API_KEY` - API key for [NewsAPI](https://newsapi.org/)
- `VITE_GUARDIAN_API_KEY` - API key for [The Guardian Open Platform](https://open-platform.theguardian.com/)
- `VITE_NYT_API_KEY` - API key for [The New York Times Developer Network](https://developer.nytimes.com/)

---

## Getting Started

First, make sure you have Node.js (or Docker) installed on your system.

### Local Development (Node.js)

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

### Local Development (Docker)

To run the application in a Docker container with hot-reloading:

```bash
pnpm dev:docker
```

The application will be accessible at [http://localhost:5173](http://localhost:5173).

### Build and Start for Production (Docker)

To build and serve the production-optimized static files using Nginx:

```bash
pnpm prod:docker
```

The application will be accessible at [http://localhost:8080](http://localhost:8080).

---

## Troubleshooting

### Docker doesn't see new dependencies (npm/pnpm)
If you installed a new library (e.g., `pnpm install <package>`), but the Docker container throws a module not found error, this happens because the `node_modules` directory is cached inside Docker's anonymous volumes.
To fix this issue, rebuild the container and remove the old volumes:

```bash
docker compose up -d --build -V frontend-dev
```

---

## Code Conventions

This project follows strict guidelines to maintain code quality and consistency.

### General & Formatting

- **Language**: TypeScript with React (`.tsx` / `.ts`).
- **Formatter**: [Prettier](https://prettier.io/) — semicolons are disabled (`"semi": false`), all other options use Prettier defaults.
- **Linter**: [oxlint](https://oxc.rs/docs/guide/usage/linter) with `react`, `typescript`, and `oxc` plugins enabled.
  - `react/rules-of-hooks` — **error**
  - `react/only-export-components` — **warn** (constant exports allowed)
- **TypeScript strictness** (via `tsconfig.app.json`):
  - `noUnusedLocals` and `noUnusedParameters` — all declared variables and params must be used.
  - `noFallthroughCasesInSwitch` — switch cases must have explicit break/return.
  - `verbatimModuleSyntax` — type-only imports must use `import type`.

### Path Aliases

- Use the `@/` alias to import from `src/` instead of relative paths (e.g., `import { Button } from "@/components/common"`).

### Components

- **Structure**: Each component lives in its own directory named after the component (PascalCase), containing:
  - `ComponentName.tsx` — component logic
  - `ComponentName.module.css` — scoped styles
- **Definition**: Components are written as **named arrow function exports** (e.g., `export const Input = (...) => { ... }`).
- **Props**: Props are typed using `interface`, extending native HTML attributes when appropriate (e.g., `interface InputProps extends InputHTMLAttributes<HTMLInputElement>`).
- **Barrel exports**: Each component group exposes a public API via an `index.ts` barrel file.

### Styling

- **CSS Modules**: All component styles use CSS Modules (`.module.css`) to ensure local scope and avoid class name collisions.
- **Class merging**: The `classnames` library (aliased as `cn`) is used to conditionally combine class names.

### Naming Conventions

- **Variables & functions**: `camelCase` (e.g., `newsItems`, `handleSubmit`).
- **React components**: `PascalCase` (e.g., `NewsCard`, `Input`).
- **Component directories**: `PascalCase` to match the component name (e.g., `src/components/common/Input/`).
- **Non-component directories**: `camelCase` (e.g., `src/hooks/`, `src/utils/`).
- **Files**: match the primary export — `PascalCase` for components (`Input.tsx`), `camelCase` for hooks and utilities (`useSearch.ts`).
- **CSS Module classes**: `camelCase` (e.g., `styles.wrapper`, `styles.inputLabel`).
- **TypeScript interfaces**: `PascalCase` with descriptive names (e.g., `InputProps`, `NewsArticle`).
- **Constants**: `UPPER_SNAKE_CASE` for truly static values (e.g., `API_BASE_URL`).
- **Environment variables**: `SCREAMING_SNAKE_CASE` prefixed with `VITE_` (e.g., `VITE_NEWSAPI_API_KEY`).

### Package Manager

- **pnpm** is the required package manager for this project.

[react-badge]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[react-url]: https://react.dev
[typescript-badge]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org
[vite-badge]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev
[docker-badge]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
