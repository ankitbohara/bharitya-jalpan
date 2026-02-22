export default function Footer() {
  return (
    <footer className="border-t border-orange-200/80 bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm font-medium text-orange-800 md:px-8">
        © {new Date().getFullYear()} Bhartiya Jalpan · Handcrafted sweets for every celebration.
      </div>
    </footer>
  );
}
