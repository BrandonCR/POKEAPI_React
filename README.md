# POKEAPI_React

Pokédex frontend for the [POKEAPI backend](https://github.com/BrandonCR/POKEAPI_Backend_Python), built while
learning React.

## Tech stack

| Concern     | Choice                                                                      |
| ----------- | --------------------------------------------------------------------------- |
| App         | React 19 single-page app, built with Vite 8                                 |
| Language    | TypeScript 6                                                                |
| Styling     | Tailwind CSS 4                                                              |
| Routing     | React Router (library mode)                                                 |
| Server data | TanStack Query                                                              |
| API client  | openapi-fetch, typed from the backend's OpenAPI schema (openapi-typescript) |
| Quality     | ESLint + Prettier, Vitest + React Testing Library, MSW                      |

## Getting started

Prerequisites: Node.js LTS (`winget install OpenJS.NodeJS.LTS`) and the backend running at
`http://pokeapi.internal:81`.

```powershell
npm install
npm run dev
```

Open http://localhost:5173. Saving a file updates the page instantly.

In development the browser only talks to `localhost:5173`. Vite forwards every `/api/...` request to the backend
(see `server.proxy` in `vite.config.ts`), so no CORS setup is needed. To use another backend, set
`API_PROXY_TARGET` before `npm run dev`.

### Visual Studio Code

Open this folder and install the recommended extensions when prompted (ESLint, Prettier, Tailwind CSS
IntelliSense, Vitest). Files are formatted and lint-fixed on save. To debug in the browser, run `npm run dev`,
then press **F5** → _Debug in Edge_.

## Scripts

| Command                           | What it does                                                                                  |
| --------------------------------- | --------------------------------------------------------------------------------------------- |
| `npm run dev`                     | Dev server with instant reload on http://localhost:5173                                       |
| `npm run build`                   | Type-check, then build optimized static files into `dist/`                                    |
| `npm run preview`                 | Serve the `dist/` build locally                                                               |
| `npm run typecheck`               | TypeScript only                                                                               |
| `npm run lint`                    | ESLint (includes the Rules of Hooks)                                                          |
| `npm run format` / `format:check` | Prettier (also sorts Tailwind classes)                                                        |
| `npm test` / `test:watch`         | Vitest                                                                                        |
| `npm run gen:api`                 | Regenerate `src/api/schema.d.ts` from the backend's `/openapi.json`; run it after API changes |

## Configuration

| File               | Variable                                       | Purpose                                |
| ------------------ | ---------------------------------------------- | -------------------------------------- |
| `.env.development` | `VITE_API_BASE_URL=` (empty)                   | Relative `/api` calls, proxied by Vite |
| `.env.production`  | `VITE_API_BASE_URL=http://pokeapi.internal:81` | Backend used by `npm run build`        |

Only variables starting with `VITE_` reach the browser code, and they are baked into the build. Never put
secrets in them.

## Project structure

```
src/
├─ app/          App shell: router, providers (TanStack Query, admin key), layout
├─ api/          Generated API types, typed client, query hooks
├─ components/   Shared UI: pagination, search input, badges, loading/error states
├─ features/     One folder per feature: pokemon, moves, types, abilities, admin
├─ lib/          Small helpers (formatting, type colors, hooks)
└─ test/         Test setup and API mocks
```

## Learning roadmap

| #   | Milestone                                                  | React concepts                                                              |
| --- | ---------------------------------------------------------- | --------------------------------------------------------------------------- |
| M0  | Project setup                                              | Project layout, npm scripts, dev server                                     |
| M1  | Foundations: API client, router, layout, shared components | JSX, components, props, children, composition                               |
| M2  | Pokédex list with search, filters and pagination           | State, events, lists and keys, effects, custom hooks, `useQuery`, URL state |
| M3  | Pokémon detail page                                        | Route params, conditional rendering, component splitting                    |
| M4  | Types, abilities and moves pages                           | Reuse, generic components, typed props                                      |
| M5  | Admin page                                                 | Forms, controlled inputs, Context, mutations, polling                       |
| M6  | Tests                                                      | Testing user behaviour with React Testing Library and MSW                   |
| M7  | Deploy to IIS                                              | Production builds, SPA hosting                                              |

## Notes

- `package.json` has an `overrides` entry so `openapi-typescript` (which declares TypeScript 5 support) runs
  with this project's TypeScript 6. Remove it once openapi-typescript supports TypeScript 6.
