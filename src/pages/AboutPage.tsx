import { business } from "../data";

export default function AboutPage() {
  return (
    <section className="rounded-3xl border border-orange-100 bg-white/90 p-6 shadow-xl shadow-orange-100 md:p-10">
      <h1 className="mb-4 text-3xl font-black text-slate-900 md:text-4xl">About Us</h1>
      <p className="mb-4 text-slate-600">
        At {business.name}, every sweet is a story of tradition, purity, and celebration. We bring
        generations of authentic Indian mithai craftsmanship into a modern, hygienic kitchen.
      </p>
      <p className="mb-4 text-slate-600">
        Our chefs prepare fresh sweets daily using premium ingredients—perfect for gifting, festivals,
        weddings, and everyday indulgence.
      </p>
      <p className="text-slate-600">
        From classic favorites to seasonal specials, we serve joy in every bite.
      </p>
    </section>
  );
}
