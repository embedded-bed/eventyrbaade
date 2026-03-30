import React from 'react';
import Hero from '../components/Hero';
import BoatCards from '../components/BoatCards';
import WeeklyTrip from '../components/WeeklyTrip';
import SkipperSection from '../components/SkipperSection';
import Events from '../components/Events';
import Safety from '../components/Safety';
import Contact from '../components/Contact';

function HomePage() {
  return (
    <>
      <Hero />
      <BoatCards />
      <WeeklyTrip />
      <SkipperSection />
      <Events />
      <Safety />
      <Contact />
    </>
  );
}
export default HomePage;
