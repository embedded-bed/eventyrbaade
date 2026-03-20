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
        <a href="#kontakt" className="btn-primary">Kontakt os for tilbud</a>
      </div>
    </section>
  );
}
export default Events;
