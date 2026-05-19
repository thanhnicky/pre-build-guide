import { Link } from "@tanstack/react-router";
import { Phone, MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Quy trình", href: "#quy-trinh" },
    { label: "Ứng dụng", href: "#ung-dung" },
    { label: "Công trình", href: "#cong-trinh" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-wood-200/50 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-wood-600" />
          <span className="text-lg font-bold tracking-tight text-wood-800">
            Sơn Gỗ Lotus
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-wood-700 transition-colors hover:text-wood-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:0943966662"
            className="inline-flex items-center gap-1.5 rounded-full bg-wood-100 px-3 py-1.5 text-sm font-medium text-wood-700 transition-colors hover:bg-wood-200"
          >
            <Phone className="h-3.5 w-3.5" />
            0943 966 662
          </a>
          <a
            href="https://zalo.me/0943966662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-wood-600 px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-wood-700"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Zalo
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5 text-wood-700" />
          ) : (
            <Menu className="h-5 w-5 text-wood-700" />
          )}
        </button>
      </div>

      {open && (
        <div className="border-t border-wood-200/50 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-wood-700 transition-colors hover:text-wood-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a
                href="tel:0943966662"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wood-100 px-3 py-2 text-sm font-medium text-wood-700"
              >
                <Phone className="h-3.5 w-3.5" />
                0943 966 662
              </a>
              <a
                href="https://zalo.me/0943966662"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wood-600 px-3 py-2 text-sm font-medium text-primary-foreground"
              >
                <MessageCircle className="h-3.5 w-3.5" />
                Zalo
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
