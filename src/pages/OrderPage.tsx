import { business } from "../data";

export default function OrderPage() {
  return (
    <section className="card order-card">
      <h1>Order Online</h1>
      <p>Get your favorite sweets delivered at home via your preferred app.</p>
      <div className="button-row">
        <a href={business.zomatoUrl} target="_blank" rel="noreferrer" className="btn btn-zomato">
          Order on Zomato
        </a>
        <a href={business.swiggyUrl} target="_blank" rel="noreferrer" className="btn btn-swiggy">
          Order on Swiggy
        </a>
      </div>
      <p className="small-note">Tip: Replace links with your official restaurant listing URLs.</p>
    </section>
  );
}
