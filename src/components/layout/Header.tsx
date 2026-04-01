import { useState } from "react";

const navLinks = [
  { href: "#hero", label: "Ana Sayfa" },
  { href: "#about", label: "Hakkımda" },
  { href: "#skills", label: "Yetenekler" },
  { href: "#projects", label: "Projeler" },
  { href: "#contact", label: "İletişim" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-gray-700 dark:bg-gray-900/90">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="#hero" className="text-xl font-bold text-blue-600">
          Portföy
        </a>

        <ul className="hidden gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-gray-700 hover:text-blue-600 dark:text-gray-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="rounded p-2 md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Menüyü aç"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </nav>

      {menuOpen && (
        <ul className="border-t border-gray-200 px-4 pb-4 md:hidden dark:border-gray-700">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 text-gray-700 dark:text-gray-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}