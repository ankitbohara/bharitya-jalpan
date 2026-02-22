import { restaurant, gallery, menuHighlights } from "./data";
import { Badge } from "./components/ui/badge";
import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";

function RatingPill({ label, value, votes }: { label: string; value: string; votes: string }) {
  return (
    <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-center">
      <p className="text-lg font-bold text-emerald-700">{value}</p>
      <p className="text-xs font-semibold text-emerald-900">{label}</p>
      <p className="text-xs text-slate-600">{votes}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <main className="mx-auto max-w-6xl space-y-6 px-4 py-8 md:px-8">
        <section className="space-y-4 rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Home / India / Guwahati / Christian Basti</p>
          <h1 className="text-4xl font-bold">{restaurant.name}</h1>
          <p className="text-slate-700">{restaurant.cuisine.join(", ")}</p>
          <p className="text-slate-600">{restaurant.address}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="rounded-md bg-emerald-100 px-2 py-1 font-medium text-emerald-700">{restaurant.openHours}</span>
            <span>{restaurant.averageCost}</span>
            <a className="text-rose-600 underline" href={`tel:${restaurant.phone}`}>
              {restaurant.phone}
            </a>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <RatingPill label="Dining Ratings" value={restaurant.diningRating} votes={restaurant.diningVotes} />
            <RatingPill label="Delivery Ratings" value={restaurant.deliveryRating} votes={restaurant.deliveryVotes} />
          </div>
          <div className="flex gap-3">
            <Button>Direction</Button>
            <Button variant="outline">Reviews</Button>
          </div>
        </section>

        <section className="grid gap-3 md:grid-cols-3">
          <img src={gallery[0].url} alt={gallery[0].title} className="h-64 w-full rounded-xl object-cover md:col-span-2" />
          <div className="grid gap-3">
            <img src={gallery[1].url} alt={gallery[1].title} className="h-[124px] w-full rounded-xl object-cover" />
            <img src={gallery[2].url} alt={gallery[2].title} className="h-[124px] w-full rounded-xl object-cover" />
          </div>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <Card className="space-y-4 lg:col-span-2">
            <h2 className="text-xl font-semibold">Menu</h2>
            <div className="flex flex-wrap gap-2">
              {restaurant.cuisine.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {menuHighlights.map((item) => (
                <p key={item} className="rounded-md bg-slate-50 px-3 py-2 text-sm">
                  {item}
                </p>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="mb-3 text-xl font-semibold">Direction</h2>
            <iframe
              title="Bhartiya Jalpan map"
              className="h-64 w-full rounded-lg border"
              src="https://maps.google.com/maps?q=26.186754,91.789981&z=15&output=embed"
              loading="lazy"
            />
            <p className="mt-3 text-sm text-slate-600">{restaurant.address}</p>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          <Card>
            <h3 className="mb-2 text-lg font-semibold">People Say This Place Is Known For</h3>
            <div className="flex flex-wrap gap-2">
              {restaurant.knownFor.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-600">Digital payments accepted.</p>
          </Card>
          <Card>
            <h3 className="mb-2 text-lg font-semibold">More Info</h3>
            <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
              {restaurant.features.map((item) => (
                <li key={item}>✅ {item}</li>
              ))}
            </ul>
          </Card>
        </section>
      </main>
    </div>
  );
}
