import { business } from "../data";

export default function OrderPage() {
  return (
    <section className="rounded-3xl border border-orange-100 bg-white p-6 text-center shadow-xl shadow-orange-100 md:p-10">
      <h1 className="mb-3 text-3xl font-black text-slate-900 md:text-4xl">Order Online</h1>
      <p className="mx-auto mb-8 max-w-2xl text-slate-600">
        Craving mithai? Get your favorite sweets delivered to your doorstep in minutes.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href={business.zomatoUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-rose-600 px-6 py-3 font-bold text-white shadow-lg shadow-rose-300 transition hover:-translate-y-0.5 hover:bg-rose-700"
        >
          Order on Zomato
        </a>
        <a
          href={business.swiggyUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-xl bg-orange-500 px-6 py-3 font-bold text-white shadow-lg shadow-orange-300 transition hover:-translate-y-0.5 hover:bg-orange-600"
        >
          Order on Swiggy
        </a>
      </div>
      <p className="mt-6 text-sm text-slate-500">Replace these links with your official listing URLs.</p>
    </section>
  );
}
