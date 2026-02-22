import { sweets } from "../data";

export default function SweetsPage() {
  return (
    <section>
      <h1>Our Sweets</h1>
      <p className="page-intro">Explore our best-loved sweets and festive favorites.</p>
      <div className="grid sweets-grid">
        {sweets.map((item) => (
          <article key={item} className="card sweet-item">
            <h3>{item}</h3>
            <p>Freshly prepared with traditional methods and pure ingredients.</p>
          </article>
        ))}
      </div>
    </section>
  );
}
