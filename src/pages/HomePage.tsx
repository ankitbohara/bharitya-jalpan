import { business, galleryImages } from "../data";

export default function HomePage() {
  return (
    <section>
      <div className="hero">
        <div>
          <p className="eyebrow">Welcome to</p>
          <h1>{business.name}</h1>
          <p className="tagline">{business.tagline}</p>
          <p>{business.description}</p>
        </div>
        <img src={galleryImages[0].url} alt={galleryImages[0].title} />
      </div>

      <h2 className="section-title">Shop Highlights</h2>
      <div className="grid gallery-grid">
        {galleryImages.map((image) => (
          <article key={image.title} className="card">
            <img src={image.url} alt={image.title} />
            <h3>{image.title}</h3>
          </article>
        ))}
      </div>
    </section>
  );
}
