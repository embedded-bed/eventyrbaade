// ============================================================
// PROJECT STRUCTURE:
// ============================================================
// eventyrbaade/
// ├── Dockerfile
// ├── docker-compose.yml
// ├── nginx.conf
// ├── package.json
// ├── public/
// │   └── index.html
// └── src/
//     ├── index.js
//     ├── App.js
//     ├── App.css
//     ├── components/
//     │   ├── Navbar.js
//     │   ├── Navbar.css
//     │   ├── Hero.js
//     │   ├── Hero.css
//     │   ├── BoatCards.js
//     │   ├── BoatCards.css
//     │   ├── SkipperSection.js
//     │   ├── SkipperSection.css
//     │   ├── Events.js
//     │   ├── Events.css
//     │   ├── Safety.js
//     │   ├── Safety.css
//     │   ├── Contact.js
//     │   ├── Contact.css
//     │   ├── About.js
//     │   ├── About.css
//     │   ├── GiftCard.js
//     │   ├── GiftCard.css
//     │   ├── Footer.js
//     │   └── Footer.css
//     └── pages/
//         ├── HomePage.js
//         ├── AboutPage.js
//         └── GiftCardPage.js
//
// ============================================================
// To set up, create the folder structure above and paste each
// file's content from the sections below.
// ============================================================


// ========================
// FILE: package.json
// ========================
/*
{
  "name": "eventyrbaade",
  "version": "1.0.0",
  "private": true,
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "react-scripts": "5.0.1",
    "react-icons": "^4.12.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op_mini all"],
    "development": ["last 1 chrome version", "last 1 firefox version", "last 1 safari version"]
  }
}
*/


// ========================
// FILE: Dockerfile
// ========================
/*
# Stage 1: Build
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve with nginx
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
*/


// ========================
// FILE: docker-compose.yml
// ========================
/*
version: "3.8"
services:
  web:
    build: .
    ports:
      - "3000:80"
    restart: unless-stopped
*/


// ========================
// FILE: nginx.conf
// ========================
/*
server {
    listen 80;
    server_name localhost;
    root /usr/share/nginx/html;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
*/


// ========================
// FILE: public/index.html
// ========================
/*
<!DOCTYPE html>
<html lang="da">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Eventyrbåde - Bådudlejning ved Præstø Fjord og Feddet Strand Resort" />
  <title>Eventyrbåde | Bådudlejning</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Open+Sans:wght@300;400;600;700&display=swap" rel="stylesheet">
</head>
<body>
  <div id="root"></div>
</body>
</html>
*/


// ========================
// FILE: src/index.js
// ========================
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// ========================
// FILE: src/App.js
// ========================
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GiftCardPage from './pages/GiftCardPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/om-mig" element={<AboutPage />} />
        <Route path="/koeb-gavekort" element={<GiftCardPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;


// ========================
// FILE: src/App.css
// ========================
/*
*, *::before, *::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --navy: #1a2e44;
  --ocean: #2980b9;
  --ocean-light: #3498db;
  --sand: #f5f0e8;
  --white: #ffffff;
  --text-dark: #2c3e50;
  --text-light: #7f8c8d;
  --gold: #d4a853;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Open Sans', sans-serif;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: var(--text-dark);
  line-height: 1.6;
  background: var(--white);
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  max-width: 100%;
  height: auto;
}

.section {
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  color: var(--navy);
  text-align: center;
  margin-bottom: 40px;
}

.btn-primary {
  display: inline-block;
  background: var(--ocean);
  color: var(--white);
  padding: 14px 32px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  transition: background 0.3s;
  border: none;
  cursor: pointer;
}

.btn-primary:hover {
  background: var(--ocean-light);
}

.btn-outline {
  display: inline-block;
  border: 2px solid var(--white);
  color: var(--white);
  padding: 12px 28px;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s;
}

.btn-outline:hover {
  background: var(--white);
  color: var(--navy);
}
*/


// ========================
// FILE: src/components/Navbar.js
// ========================
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <img
            src="http://eventyrbaade.dk/wp-content/uploads/2022/01/Eventyrbaade_nyt-logo-90-x-90-px.png"
            alt="Eventyrbåde logo"
          />
          <span>Eventyrbåde</span>
        </Link>

        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#typer" onClick={(e) => { e.preventDefault(); scrollToSection('typer'); }}>Både</a></li>
          <li><Link to="/om-mig">Om mig</Link></li>
          <li><a href="#kontakt" onClick={(e) => { e.preventDefault(); scrollToSection('kontakt'); }}>Kontakt</a></li>
          <li><Link to="/koeb-gavekort">Køb gavekort</Link></li>
          <li>
            <a href="https://ezme.io/c/xjJ/znbB" target="_blank" rel="noreferrer" className="nav-book-btn">
              Book nu
            </a>
          </li>
          <li className="nav-phone">
            <a href="tel:+4560534381"><FaPhone /> 6053 4381</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;


// ========================
// FILE: src/components/Navbar.css
// ========================
/*
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 24px;
  transition: all 0.3s;
  background: transparent;
}

.navbar.scrolled {
  background: rgba(26, 46, 68, 0.95);
  backdrop-filter: blur(10px);
  padding: 10px 24px;
  box-shadow: 0 2px 20px rgba(0,0,0,0.2);
}

.navbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--white);
  font-family: var(--font-heading);
  font-size: 1.3rem;
  font-weight: 700;
}

.navbar-logo img {
  width: 45px;
  height: 45px;
}

.nav-links {
  display: flex;
  align-items: center;
  list-style: none;
  gap: 28px;
}

.nav-links a {
  color: var(--white);
  font-weight: 500;
  font-size: 0.95rem;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--gold);
}

.nav-book-btn {
  background: var(--ocean);
  padding: 8px 20px !important;
  border-radius: 5px;
  font-weight: 600 !important;
}

.nav-book-btn:hover {
  background: var(--ocean-light) !important;
  color: var(--white) !important;
}

.nav-phone a {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.9rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--white);
  font-size: 1.5rem;
  cursor: pointer;
}

@media (max-width: 768px) {
  .menu-toggle { display: block; }
  .nav-links {
    position: fixed;
    top: 0;
    right: -100%;
    width: 75%;
    height: 100vh;
    background: var(--navy);
    flex-direction: column;
    padding: 80px 30px 30px;
    gap: 24px;
    transition: right 0.3s;
  }
  .nav-links.open { right: 0; }
}
*/


// ========================
// FILE: src/components/Hero.js
// ========================
import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Eventyrbåde</h1>
        <p className="hero-subtitle">Oplevelser på vandet ved Præstø Fjord</p>
        <p className="hero-text">
          Vores eventyrbåde er perfekte til fødselsdage, temafester, firmaevents
          eller bare en sjov dag på vandet. Vi skræddersyr også gerne
          arrangementer efter dine specifikke ønsker.
        </p>
        <div className="hero-buttons">
          <a href="https://ezme.io/c/xjJ/znbB" target="_blank" rel="noreferrer" className="btn-primary">
            Book en tur
          </a>
          <a href="#typer" className="btn-outline">Se vores både</a>
        </div>
      </div>
    </section>
  );
}
export default Hero;


// ========================
// FILE: src/components/Hero.css
// ========================
/*
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #1a2e44 0%, #2980b9 50%, #1a5276 100%);
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  bottom: -5%;
  left: -10%;
  width: 120%;
  height: 200px;
  background: var(--white);
  border-radius: 50% 50% 0 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="rgba(255,255,255,0.05)" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,181.3C672,181,768,139,864,128C960,117,1056,139,1152,149.3C1248,160,1344,160,1392,160L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/></svg>') no-repeat bottom;
  background-size: cover;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: var(--white);
  padding: 0 20px;
  max-width: 700px;
}

.hero-content h1 {
  font-family: var(--font-heading);
  font-size: 4rem;
  margin-bottom: 16px;
  letter-spacing: 2px;
}

.hero-subtitle {
  font-size: 1.4rem;
  font-weight: 300;
  margin-bottom: 20px;
  opacity: 0.9;
}

.hero-text {
  font-size: 1.05rem;
  line-height: 1.7;
  margin-bottom: 36px;
  opacity: 0.85;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .hero-content h1 { font-size: 2.5rem; }
  .hero-subtitle { font-size: 1.1rem; }
}
*/


// ========================
// FILE: src/components/BoatCards.js
// ========================
import React from 'react';
import { FaFish, FaUtensils, FaFlag } from 'react-icons/fa';
import './BoatCards.css';

const boats = [
  {
    icon: <FaFish />,
    title: 'Glaskano',
    desc: 'Book jeres helt egen vandsafari i kanoen af glas og spot fisk – måske tilmed en sæl eller et marsvin.',
  },
  {
    icon: <FaUtensils />,
    title: 'Picnic Boat',
    desc: 'Nyd en medbragt frokostkurv med familie eller venner på en afslappende tur rundt på fjorden.',
  },
  {
    icon: <FaFlag />,
    title: 'Sejlrute for børn',
    desc: 'En særlig sejlrute i glaskano til børnefamilien, hvor I skal finde piratflag og løse opgaver.',
  },
];

function BoatCards() {
  return (
    <section id="typer" className="section boat-cards-section">
      <h2 className="section-title">Vores Både</h2>
      <div className="boat-cards">
        {boats.map((b, i) => (
          <div className="boat-card" key={i}>
            <div className="boat-card-icon">{b.icon}</div>
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
            <a href="https://ezme.io/c/xjJ/znbB" target="_blank" rel="noreferrer" className="btn-primary">
              Book nu
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
export default BoatCards;


// ========================
// FILE: src/components/BoatCards.css
// ========================
/*
.boat-cards-section {
  background: var(--sand);
  max-width: 100%;
  padding: 80px 20px;
}

.boat-cards-section .section-title {
  margin-bottom: 50px;
}

.boat-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
}

.boat-card {
  background: var(--white);
  border-radius: 12px;
  padding: 40px 30px;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}

.boat-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 30px rgba(0,0,0,0.12);
}

.boat-card-icon {
  font-size: 2.5rem;
  color: var(--ocean);
  margin-bottom: 20px;
}

.boat-card h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--navy);
  margin-bottom: 14px;
}

.boat-card p {
  color: var(--text-light);
  margin-bottom: 24px;
  line-height: 1.6;
}
*/


// ========================
// FILE: src/components/SkipperSection.js
// ========================
import React from 'react';
import './SkipperSection.css';

function SkipperSection() {
  return (
    <section className="section skipper-section">
      <div className="skipper-content">
        <h2>Nu kan du blive "skipper" for 1 dag</h2>
        <p>
          4 timers frokosttur i Picnicbåd til den Hvide Lagune på spidsen af
          Feddet. Hop i bølgen blå eller sejl på hyggetur til Præstø Havn.
        </p>
        <div className="skipper-price">Pris kun kr. 1.200</div>
        <p className="skipper-note">
          Ring for ledige tider. Følg den planlagte sejlrute fra Feddet Strand Resort
          (Fed Havn). Der kræves ikke sejlerbevis, dog minimum 21 år.
        </p>
        <ul className="skipper-details">
          <li>Godkendt op til 8 personer eller 690 kg</li>
          <li>Benzin er inkluderet i prisen</li>
          <li>Lån af redningsveste inkluderet</li>
          <li>Fri parkering ved havnen på Feddet Strand Resort</li>
        </ul>
        <a href="tel:+4560534381" className="btn-primary">Ring og book</a>
      </div>
    </section>
  );
}
export default SkipperSection;


// ========================
// FILE: src/components/SkipperSection.css
// ========================
/*
.skipper-section {
  background: var(--navy);
  color: var(--white);
  max-width: 100%;
  padding: 80px 20px;
}

.skipper-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.skipper-content h2 {
  font-family: var(--font-heading);
  font-size: 2.2rem;
  margin-bottom: 20px;
}

.skipper-content p {
  opacity: 0.9;
  margin-bottom: 16px;
  line-height: 1.7;
}

.skipper-price {
  font-size: 2rem;
  font-weight: 700;
  color: var(--gold);
  margin: 24px 0;
}

.skipper-note {
  font-size: 0.95rem;
  opacity: 0.75;
}

.skipper-details {
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin: 30px 0;
  text-align: left;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.skipper-details li::before {
  content: '✓ ';
  color: var(--gold);
  font-weight: 700;
}

@media (max-width: 600px) {
  .skipper-details { grid-template-columns: 1fr; }
}
*/


// ========================
// FILE: src/components/Events.js
// ========================
import React from 'react';
import './Events.css';

function Events() {
  return (
    <section className="section events-section">
      <h2 className="section-title">Events for virksomheder og institutioner</h2>
      <div className="events-content">
        <p>
          Glaskanoer kan sendes afsted i hold med op til 16 personer og Picnic
          Boats 16 personer ad gangen.
        </p>
        <p>
          Eventyrbåde tilbyder også følgebåd på udflugterne, så I let kan få
          transporteret jeres proviant og andet habengut med rundt på turen. Har
          deltagerne brug for et hvil, er det muligt at komme ombord på
          motorbåden Shetland.
        </p>
        <p>Ring eller skriv for samlet tilbud samt information om mulighederne.</p>
        <a href="https://ezme.io/c/xjJ/znbB" target="_blank" rel="noreferrer" className="btn-primary">
          Bestil en tur på vandet
        </a>
      </div>
    </section>
  );
}
export default Events;


// ========================
// FILE: src/components/Events.css
// ========================
/*
.events-section {
  background: var(--white);
}

.events-content {
  max-width: 750px;
  margin: 0 auto;
  text-align: center;
}

.events-content p {
  margin-bottom: 16px;
  color: var(--text-light);
  line-height: 1.7;
}

.events-content .btn-primary {
  margin-top: 20px;
}
*/


// ========================
// FILE: src/components/Safety.js
// ========================
import React from 'react';
import './Safety.css';

function Safety() {
  return (
    <section className="section safety-section">
      <h2 className="section-title">Ansvar og sikkerhed</h2>
      <div className="safety-content">
        <p>
          Sejlads på fjorden skal udføres med godt sømandskab og med hensyn til
          naturen og andre sejlere. Eventyrbåde har ansvarsforsikring på
          virksomheden, men forsikringen dækker ikke ved personskader eller andre
          ulykker. Dertil henvises til egen fritids-/ulykkesforsikring.
          Indtagelse af alkohol på vandet er tilladt, men maksimalt 0,5 promille
          for bådførerne.
        </p>
        <p>
          Alle både og udstyr kontrolleres af medarbejderne hver gang inden ny
          sejlads. Udleveret kort over sejlruter på Præstø Fjord skal
          respekteres og overholdes. Alle ture er inkl. lån af svømmevest og
          kort introduktion til grundlæggende brug af de forskellige bådtyper.
        </p>
        <p>
          Eventyrbåde forbeholder sig retten til at indstille sejltiden med
          øjeblikkelig virkning uden mulighed for økonomisk kompensation for tabt
          sejltid i tilfælde af, at ovennævnte ikke overholdes. Husk: det
          handler om vores fælles sikkerhed på vandet.
        </p>
      </div>
    </section>
  );
}
export default Safety;


// ========================
// FILE: src/components/Safety.css
// ========================
/*
.safety-section {
  background: var(--sand);
  max-width: 100%;
  padding: 80px 20px;
}

.safety-content {
  max-width: 800px;
  margin: 0 auto;
}

.safety-content p {
  color: var(--text-light);
  margin-bottom: 16px;
  line-height: 1.7;
}
*/


// ========================
// FILE: src/components/Contact.js
// ========================
import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Contact.css';

function Contact() {
  const [form, setForm] = useState({ name: '', lastName: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:mail@eventyrbaade.dk?subject=Besked fra ${form.name} ${form.lastName}&body=${encodeURIComponent(form.message)}%0A%0ATelefon: ${form.phone}%0AEmail: ${form.email}`;
    window.location.href = mailto;
  };

  return (
    <section id="kontakt" className="section contact-section">
      <h2 className="section-title">Har du spørgsmål?</h2>
      <div className="contact-grid">
        <div className="contact-form-wrapper">
          <h3>Send en besked</h3>
          <div className="contact-form">
            <div className="form-row">
              <input name="name" placeholder="Navn" value={form.name} onChange={handleChange} />
              <input name="lastName" placeholder="Efternavn" value={form.lastName} onChange={handleChange} />
            </div>
            <div className="form-row">
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
              <input name="phone" type="tel" placeholder="Telefon" value={form.phone} onChange={handleChange} />
            </div>
            <textarea name="message" placeholder="Besked" rows="5" value={form.message} onChange={handleChange} />
            <button className="btn-primary" onClick={handleSubmit}>Send besked til Eventyrbåde</button>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-info-item">
            <FaPhone />
            <div>
              <strong>Ring til os</strong>
              <a href="tel:+4560534381">(+45) 6053 4381</a>
            </div>
          </div>
          <div className="contact-info-item">
            <FaEnvelope />
            <div>
              <strong>Email</strong>
              <a href="mailto:mail@eventyrbaade.dk">mail@eventyrbaade.dk</a>
            </div>
          </div>
          <div className="contact-info-item">
            <FaMapMarkerAlt />
            <div>
              <strong>Besøg os</strong>
              <span>Feddet Strand Resort, Faxe</span>
              <span>eller Præstø Havn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;


// ========================
// FILE: src/components/Contact.css
// ========================
/*
.contact-section {
  background: var(--white);
}

.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;
}

.contact-form-wrapper h3 {
  font-family: var(--font-heading);
  font-size: 1.5rem;
  color: var(--navy);
  margin-bottom: 24px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: border-color 0.3s;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: var(--ocean);
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-top: 50px;
}

.contact-info-item {
  display: flex;
  gap: 14px;
  align-items: flex-start;
}

.contact-info-item svg {
  font-size: 1.3rem;
  color: var(--ocean);
  margin-top: 3px;
}

.contact-info-item div {
  display: flex;
  flex-direction: column;
}

.contact-info-item strong {
  color: var(--navy);
  margin-bottom: 4px;
}

.contact-info-item a,
.contact-info-item span {
  color: var(--text-light);
  font-size: 0.95rem;
}

@media (max-width: 768px) {
  .contact-grid { grid-template-columns: 1fr; }
  .contact-info { padding-top: 0; }
}
*/


// ========================
// FILE: src/components/About.js
// ========================
import React from 'react';
import './About.css';

function About() {
  return (
    <section className="section about-section">
      <h2 className="section-title">Om mig</h2>
      <div className="about-content">
        <p>
          H.C. Andersens – Danmarks verdensberømte eventyrfortæller – har over
          mange år trådt sine fodspor i vores smukke købstad, Præstø. Deraf kom
          idéen på navnet Eventyrbåde, som er omdrejningspunktet i virksomheden.
        </p>
        <p>
          Jeg fik selv min første fiskerjolle af min far som 12-årig og tøffede
          rundt på Christianshavn Kanaler og ud på Øresund for at fiske.
          Selvfølgelig sejlede jeg også tit forbi Christianshavns
          kanalsbådudlejning og måske netop derfor en senere, spirende idé.
        </p>
        <p>
          17 år gammel stak jeg til søs med skoleskibet Georg Stage og straks ved
          afmønstring samme døgn, påmønstrede jeg i Handelsflåden som ubefaren
          matros på en lille coaster. Turen gik over Suezkanalen, Rødehavet og
          det Indiske Ocean, ja helt til Australien – og dér sejlede jeg mit
          livs eventyr som ung dreng. Lige siden har jeg haft adskillige både og
          kender mit farvand.
        </p>
        <p>
          Jeg ser frem til at byde velkommen til Eventyrbåde & Feddet Strand Resort.
        </p>
        <p className="about-signature">Mange pirathilsner, Kim</p>
      </div>
    </section>
  );
}
export default About;


// ========================
// FILE: src/components/About.css
// ========================
/*
.about-section {
  background: var(--sand);
  max-width: 100%;
  padding: 100px 20px;
}

.about-content {
  max-width: 750px;
  margin: 0 auto;
}

.about-content p {
  color: var(--text-light);
  margin-bottom: 18px;
  line-height: 1.8;
  font-size: 1.05rem;
}

.about-signature {
  font-family: var(--font-heading);
  font-size: 1.3rem;
  color: var(--navy);
  font-style: italic;
  margin-top: 30px;
}
*/


// ========================
// FILE: src/components/GiftCard.js
// ========================
import React from 'react';
import { FaGift } from 'react-icons/fa';
import './GiftCard.css';

function GiftCard() {
  return (
    <section className="section giftcard-section">
      <h2 className="section-title">Køb gavekort</h2>
      <div className="giftcard-content">
        <FaGift className="giftcard-icon" />
        <p>
          Giv en uforglemmelig oplevelse i gave! Book jeres helt egen vandsafari
          i kanoen af glas og spot fisk – måske tilmed en sæl eller et marsvin.
        </p>
        <a href="tel:+4560534381" className="btn-primary">
          Ring for gavekort: (+45) 6053 4381
        </a>
      </div>
    </section>
  );
}
export default GiftCard;


// ========================
// FILE: src/components/GiftCard.css
// ========================
/*
.giftcard-section {
  background: var(--sand);
  max-width: 100%;
  padding: 100px 20px;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.giftcard-content {
  text-align: center;
  max-width: 600px;
}

.giftcard-icon {
  font-size: 4rem;
  color: var(--gold);
  margin-bottom: 24px;
}

.giftcard-content p {
  color: var(--text-light);
  line-height: 1.7;
  margin-bottom: 30px;
  font-size: 1.1rem;
}
*/


// ========================
// FILE: src/components/Footer.js
// ========================
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h4>Besøg os</h4>
          <p>Feddet Strand Resort, Faxe</p>
          <p>eller Præstø Havn</p>
          <p>Danmark</p>
        </div>
        <div className="footer-col">
          <h4>Om Eventyrbåde</h4>
          <p>CVR: 21901687</p>
          <Link to="/om-mig">Om mig</Link>
        </div>
        <div className="footer-col">
          <h4>Kontakt os</h4>
          <a href="tel:+4560534381">60 53 43 81</a>
          <a href="mailto:mail@eventyrbaade.dk">mail@eventyrbaade.dk</a>
        </div>
        <div className="footer-col">
          <h4>Åbningstider</h4>
          <p>Juni – September</p>
          <p>Lørdag & Søndag</p>
          <p>10:00 – 18:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eventyrbåde. Alle rettigheder forbeholdes.</p>
      </div>
    </footer>
  );
}
export default Footer;


// ========================
// FILE: src/components/Footer.css
// ========================
/*
.footer {
  background: var(--navy);
  color: var(--white);
  padding: 60px 20px 20px;
}

.footer-inner {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  max-width: 1100px;
  margin: 0 auto;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.footer-col h4 {
  font-family: var(--font-heading);
  margin-bottom: 14px;
  color: var(--gold);
}

.footer-col p,
.footer-col a {
  display: block;
  color: rgba(255,255,255,0.7);
  font-size: 0.9rem;
  margin-bottom: 6px;
  transition: color 0.3s;
}

.footer-col a:hover {
  color: var(--white);
}

.footer-bottom {
  text-align: center;
  padding-top: 20px;
  color: rgba(255,255,255,0.4);
  font-size: 0.85rem;
}
*/


// ========================
// FILE: src/pages/HomePage.js
// ========================
import React from 'react';
import Hero from '../components/Hero';
import BoatCards from '../components/BoatCards';
import SkipperSection from '../components/SkipperSection';
import Events from '../components/Events';
import Safety from '../components/Safety';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <BoatCards />
      <SkipperSection />
      <Events />
      <Safety />
      <Contact />
    </>
  );
}
export default HomePage;


// ========================
// FILE: src/pages/AboutPage.js
// ========================
import React from 'react';
import About from '../components/About';

function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <About />
    </div>
  );
}
export default AboutPage;


// ========================
// FILE: src/pages/GiftCardPage.js
// ========================
import React from 'react';
import GiftCard from '../components/GiftCard';

function GiftCardPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <GiftCard />
    </div>
  );
}
export default GiftCardPage;
