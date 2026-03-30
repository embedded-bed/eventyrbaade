# Eventyrbåde 🚣

Website for Eventyrbåde — boat rental and water experiences at Præstø Fjord and Feddet Strand Resort.

Built with React, served via nginx in Docker.

Note: The frontend of this project is vibe coded. I am not a frontend developer.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [just](https://github.com/casey/just) (command runner)

## Cloudflared
Add tunnel key to `secrets/cloudflared/cloudflared.env` and `secrets/cloudflared/cloudflared-ssh.env`:
```bash
TUNNEL_TOKEN=
```

## Getting started

Build the Docker image:

```sh
just build
```

Start the container (detached, with log tailing):

```sh
just run
```

The site is now available at [http://localhost:5000](http://localhost:5000).

Stop the container:

```sh
just stop
```

## Local development (without Docker)

If you have Node.js 18+ installed:

```sh
npm install
npm start
```

This starts a dev server at [http://localhost:3000](http://localhost:3000) with hot reloading.

## Project structure

```
eventyrbaade/
├── Dockerfile              # Multi-stage build (node → nginx)
├── docker-compose.yml
├── justfile
├── nginx.conf              # SPA fallback + static asset caching
├── package.json
├── public/
│   └── index.html
└── src/
    ├── App.js              # Router setup
    ├── App.css             # Global styles and CSS variables
    ├── index.js            # Entry point
    ├── components/
    │   ├── Navbar.js       # Responsive nav, scroll-aware
    │   ├── Hero.js         # Landing hero section
    │   ├── BoatCards.js    # Glaskano, Picnic Boat, Børnerute
    │   ├── SkipperSection.js  # "Skipper for a day" offer
    │   ├── Events.js       # Corporate / group events
    │   ├── Safety.js       # Safety and responsibility info
    │   ├── Contact.js      # Contact form + info
    │   ├── About.js        # Kim's story
    │   ├── GiftCard.js     # Gift card page content
    │   └── Footer.js
    └── pages/
        ├── HomePage.js
        ├── AboutPage.js
        └── GiftCardPage.js
```

## Routes

| Path            | Page                  |
| --------------- | --------------------- |
| `/`             | Home (boats, events, contact) |
| `/om-mig`       | About — Kim's story   |
| `/koeb-gavekort` | Buy gift cards        |

## Notes

- **Images** are currently loaded from the original WordPress site. To self-host them, download the files into `public/images/` and update the `src` paths in the components.
- **Booking** links point to the existing [ezme.io](https://ezme.io/c/xjJ/znbB) booking page.
- **Contact form** opens a `mailto:` link. Replace with a form backend (e.g. Formspree, a small API) if you want server-side submission.
- **Fonts** are loaded from Google Fonts (Playfair Display, Open Sans).
