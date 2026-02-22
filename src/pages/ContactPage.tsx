import { business } from "../data";

export default function ContactPage() {
  return (
    <section>
      <h1>Contact Us</h1>
      <div className="grid contact-grid">
        <article className="card">
          <h3>Visit Us</h3>
          <p>{business.address}</p>
          <p>{business.phone}</p>
          <p>{business.email}</p>
        </article>
        <article className="card map-card">
          <h3>Find Us on Map</h3>
          <iframe
            src={business.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhartiya Jalpan map"
          />
        </article>
      </div>
    </section>
  );
}
