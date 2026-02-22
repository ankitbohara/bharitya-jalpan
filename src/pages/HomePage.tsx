import { business, galleryImages } from "../data";

export default function HomePage() {
  return (
    <section className="space-y-10">
      <div className="grid items-center gap-8 rounded-3xl border border-orange-100 bg-white/80 p-6 shadow-xl shadow-orange-100 md:grid-cols-2 md:p-10">
        <div className="space-y-4">
          <p className="inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-700">
            Welcome to
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-900 md:text-5xl">{business.name}</h1>
          <p className="text-xl font-bold text-orange-600">{business.tagline}</p>
          <p className="text-slate-600">{business.description}</p>
          <a
            href="/order"
            className="inline-flex rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-300 transition hover:-translate-y-0.5 hover:bg-orange-600"
          >
            Order Fresh Sweets
          </a>
        </div>
        <img
          src={galleryImages[0].url}
          alt={galleryImages[0].title}
          className="h-[320px] w-full rounded-2xl object-cover shadow-lg"
        />
      </div>

      <div>
        <h2 className="mb-5 text-2xl font-extrabold text-slate-900 md:text-3xl">Shop Highlights</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {galleryImages.map((image) => (
            <article
              key={image.title}
              className="group overflow-hidden rounded-2xl border border-orange-100 bg-white shadow-lg shadow-orange-100 transition hover:-translate-y-1"
            >
              <img src={image.url} alt={image.title} className="h-52 w-full object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-slate-800 group-hover:text-orange-600">{image.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
