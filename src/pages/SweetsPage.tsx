import { sweets } from "../data";

export default function SweetsPage() {
  return (
    <section>
      <h1 className="mb-2 text-3xl font-black text-slate-900 md:text-4xl">Our Sweets</h1>
      <p className="mb-6 text-slate-600">Discover handcrafted treats made fresh every day.</p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {sweets.map((item) => (
          <article
            key={item}
            className="rounded-2xl border border-orange-100 bg-white p-5 shadow-md shadow-orange-100 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <h3 className="mb-2 text-lg font-bold text-slate-800">{item}</h3>
            <p className="text-sm text-slate-600">
              Prepared with pure ingredients and traditional Indian sweet-making techniques.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
