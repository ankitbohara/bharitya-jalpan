import { business } from "../data";

export default function AboutPage() {
  return (
    <section className="card about-copy">
      <h1>About Us</h1>
      <p>
        At {business.name}, we believe sweets are not just food—they are memories. We blend
        heritage recipes with modern hygiene and premium ingredients to deliver taste you can trust.
      </p>
      <p>
        Our team prepares fresh batches daily for festivals, gifting, family celebrations, and everyday cravings.
      </p>
    </section>
  );
}
