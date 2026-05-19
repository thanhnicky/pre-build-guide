import { Link } from "@tanstack/react-router";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Quy trình", href: "#quy-trinh" },
    { label: "Lookbook", href: "#cong-trinh" },
    { label: "Hỏi đáp", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-wood-200/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-normal tracking-tight text-wood-900">
            Lotus
          </span>
          <span className="text-[10px] uppercase tracking-[0.22em] text-wood-500">
            Wood Finishing
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] tracking-wide text-wood-700 transition-colors hover:text-wood-900"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:0943966662"
            className="text-[13px] tracking-wide text-wood-600 transition-colors hover:text-wood-900"
          >
            0943 966 662
          </a>
          <a
            href="https://zalo.me/0943966662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-wood-900 px-4 py-2 text-[13px] font-medium tracking-wide text-background transition-colors hover:bg-wood-800"
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
