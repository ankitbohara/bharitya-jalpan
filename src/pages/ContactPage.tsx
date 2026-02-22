import { business } from "../data";

export default function ContactPage() {
  return (
    <section>
      <h1 className="mb-6 text-3xl font-black text-slate-900 md:text-4xl">Contact Us</h1>
      <div className="grid gap-5 lg:grid-cols-2">
        <article className="rounded-2xl border border-orange-100 bg-white p-6 shadow-lg shadow-orange-100">
          <h3 className="mb-4 text-xl font-bold text-slate-900">Visit Bhartiya Jalpan</h3>
          <div className="space-y-2 text-slate-600">
            <p><span className="font-semibold text-slate-800">Address:</span> {business.address}</p>
            <p><span className="font-semibold text-slate-800">Phone:</span> {business.phone}</p>
            <p><span className="font-semibold text-slate-800">Email:</span> {business.email}</p>
          </div>
        </article>
        <article className="rounded-2xl border border-orange-100 bg-white p-4 shadow-lg shadow-orange-100">
          <h3 className="mb-3 px-2 text-xl font-bold text-slate-900">Find Us on Google Maps</h3>
          <iframe
            src={business.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhartiya Jalpan map"
            className="h-[320px] w-full rounded-xl border-0"
          />
        </article>
      </div>
    </section>
  );
}
