# Copilot Workspace Instructions

This repository is a small Vite + React portfolio app built with TanStack React Start and TanStack Router. There is no root workspace README or existing Copilot instructions in the repository, so this file is the primary source for agent-specific guidance.

## Key repository facts

- App framework: `React 19`, `Vite`, `Tailwind CSS`, `@tanstack/react-start`, `@tanstack/react-router`
- Entry points:
  - `src/start.ts` — TanStack Start app middleware and global request handling
  - `src/server.ts` — SSR wrapper and custom error handling for server entry
  - `src/router.tsx` — router creation using `routeTree` and React Query context
- Routing:
  - file-based routing under `src/routes`
  - `src/routes/__root.tsx` is the app shell and must preserve `<Outlet />`
  - `src/routeTree.gen.ts` is generated, do not edit directly
  - route conventions are documented in `src/routes/README.md`

## Scripts

Use the package scripts in `package.json`:

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run build:dev` — development build mode
- `npm run preview` — preview the build
- `npm run lint` — ESLint check
- `npm run format` — Prettier formatting

> If the local environment uses a different package manager, run the equivalent commands for that environment.

## Project structure and conventions

- `src/routes/` is the routing directory. Every `.tsx` file here corresponds to a route.
- `src/components/portfolio/` contains page-specific UI sections for the portfolio.
- `src/components/ui/` contains reusable UI primitives and custom components.
- `src/lib/` holds shared helpers, error handling, and API utilities.
- `vite.config.ts` uses `@lovable.dev/vite-tanstack-config`; do not duplicate its built-in Vite/TanStack plugin configuration.

## What to do first

- For routing issues, consult `src/routes/README.md` first.
- For styled UI components, inspect `src/components/ui/` and the Tailwind setup.
- For SSR or error handling issues, inspect `src/server.ts`, `src/start.ts`, and `src/lib/error-page.ts`.

## Special guidance for AI agents

- Prefer small, incremental edits over large rewrites.
- Preserve existing app conventions and avoid switching to Next.js/Remix patterns.
- Do not edit generated or auto-generated files such as `src/routeTree.gen.ts`.
- Keep changes focused on the requested task and avoid adding unrelated boilerplate.

## Example prompts

- "Add a new route `/contact` with a simple form using the existing `src/routes` conventions."
- "Fix the SSR error handling so the app returns a proper HTML error page on server-side failures."
- "Update the portfolio hero section styling while preserving the current component structure."
- "Add lint-friendly typing to `src/router.tsx` and ensure `QueryClient` stays in context."
