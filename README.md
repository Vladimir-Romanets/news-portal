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

*To be defined.*

---

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env.local` file. You can copy `.env.example` to `.env.local` and fill in your keys:

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

*To be defined.*

[react-badge]: https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB
[react-url]: https://react.dev
[typescript-badge]: https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org
[vite-badge]: https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white
[vite-url]: https://vitejs.dev
[docker-badge]: https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white
[docker-url]: https://www.docker.com/
