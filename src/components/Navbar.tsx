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
    <header className="navbar-wrap">
      <nav className="navbar">
        <div className="brand">Bhartiya Jalpan</div>
        <div className="nav-links">
          {navItems.map(([path, label]) => (
            <NavLink key={path} to={path} className={({ isActive }) => (isActive ? "active" : "") }>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
