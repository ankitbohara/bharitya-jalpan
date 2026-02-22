import { NavLink } from "react-router-dom";

const navItems = [
  ["/", "Home"],
  ["/about", "About Us"],
  ["/sweets", "Our Sweets"],
  ["/order", "Order Online"],
  ["/contact", "Contact Us"],
] as const;

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-orange-200/70 bg-white/80 backdrop-blur-xl">
      <nav className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div className="text-lg font-black tracking-wide text-orange-700 md:text-2xl">Bhartiya Jalpan</div>
        <div className="flex flex-wrap items-center gap-2">
          {navItems.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  isActive
                    ? "bg-orange-500 text-white shadow-md shadow-orange-300"
                    : "text-slate-700 hover:bg-orange-100"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
