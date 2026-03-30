# CLAUDE.md

## Project overview

Eventyrbåde — a pure information website for a boat rental business operating at Præstø Fjord and Feddet Strand Resort in Denmark. Built as a React SPA served via nginx in Docker. There is no booking system or backend — all scheduling is handled by the owner (Kim) directly via phone or email contact.

## Tech stack

- React 18 with React Router v6
- CSS (no preprocessor, no Tailwind — plain CSS with CSS variables)
- react-icons for iconography
- Google Fonts (Playfair Display, Open Sans)
- Docker multi-stage build (node:18-alpine → nginx:alpine)
- nginx for serving the production build with SPA fallback
- just as the command runner

## Commands

- `just build` — build the Docker image
- `just run` — start container (detached) and tail logs
- `just stop` — stop and remove container
- `npm install` — install dependencies for local dev
- `npm start` — run local dev server on port 3000

## Architecture

The app is a purely static information SPA with five routes:

- `/` — home page (hero, boat cards, skipper offer, weekly trip, events, safety, contact)
- `/om-mig` — about page (Kim's story)
- `/koeb-gavekort` — gift card page (phone-based, no online purchase)
- `/galleri` — gallery page (photos from the fjord and activities)
- `/ferielejlighed` — holiday apartment page (1 bedroom, no terrace)

All CTAs direct visitors to the contact section or phone number — there is no online booking or payment flow.

Components live in `src/components/`, each with a co-located CSS file. Pages in `src/pages/` compose components together. Global styles and CSS variables are in `src/App.css`.

## Conventions

- One component per file, one CSS file per component
- CSS variables defined in `:root` in App.css (--navy, --ocean, --sand, --gold, etc.)
- Danish content — the site is in Danish, keep all user-facing text in Danish
- All CTAs link to `#kontakt` (contact section) or `tel:` links — no external booking services
- Contact form uses `mailto:` to open the user's email client
- Images currently hotlinked from the original WordPress site at eventyrbaade.dk

## Docker

The Dockerfile is a two-stage build: stage 1 builds with node, stage 2 serves with nginx. The nginx.conf handles SPA routing (try_files fallback to index.html) and static asset caching.
A cloudflared tunnel is used for routing trafic to the web application and handle encryption in their infrastructure.


## Future plans

- Grafana for server metrics (will be added to docker-compose)
- Self-hosted images instead of hotlinking WordPress
