import { Link } from "@tanstack/react-router";
import { MessageCircle, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/lotus-logo.jpg";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Chọn hệ sơn", href: "#chon-he-son" },
    { label: "Sản phẩm", href: "#san-pham" },
    { label: "Quy trình", href: "#phoi-hop" },
    { label: "Chứng nhận", href: "#tieu-chuan" },
    { label: "Dự án", href: "#cong-trinh" },
    { label: "Hỏi đáp", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-wood-200/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Lotus Paint" className="h-9 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] tracking-wide text-wood-700 transition-colors hover:text-wood-900 whitespace-nowrap sm:text-[14px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:0943966662"
            className="text-[13px] tracking-wide text-wood-600 transition-colors hover:text-wood-900 whitespace-nowrap sm:text-[14px]"
          >
            0943 966 662
          </a>
          <a
            href="https://zalo.me/0943966662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-wood-900 px-3.5 py-2 text-[13px] font-medium tracking-wide text-background transition-colors hover:bg-wood-800 sm:text-[14px]"
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
                className="text-[15px] font-medium text-wood-700 transition-colors hover:text-wood-900"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex gap-2">
              <a
                href="tel:0943966662"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wood-100 px-3 py-2 text-[15px] font-medium text-wood-700"
              >
                
                0943 966 662
              </a>
              <a
                href="https://zalo.me/0943966662"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wood-600 px-3 py-2 text-[15px] font-medium text-primary-foreground"
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
