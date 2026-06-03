import { Link } from "@tanstack/react-router";
import { MessageCircle, Menu, X, Globe, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import logo from "@/assets/lotus-logo.jpg";

const languages = [
  { code: "vi", label: "Tiếng Việt", flag: "🇻🇳", labelShort: "VI" },
  { code: "en", label: "English", flag: "🇬🇧", labelShort: "EN" },
  { code: "ja", label: "日本語", flag: "🇯🇵", labelShort: "JA" },
  { code: "zh-CN", label: "中文", flag: "🇨🇳", labelShort: "ZH" },
];

export function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("vi");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const getLangFromCookie = () => {
      const match = document.cookie.match(/(^| )googtrans=([^;]+)/);
      if (match) {
        const val = decodeURIComponent(match[2]);
        const parts = val.split("/");
        if (parts.length >= 3) {
          return parts[2];
        }
      }
      return "vi";
    };

    setSelected(getLangFromCookie());

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (langCode: string) => {
    const cookieValue = langCode === "vi" ? "" : `/vi/${langCode}`;
    const domain = window.location.hostname;
    
    // Set standard cookie for current path (works on localhost)
    document.cookie = `googtrans=${cookieValue}; path=/;`;
    
    // Only set domain cookie if it's not localhost
    if (domain !== "localhost") {
      document.cookie = `googtrans=${cookieValue}; path=/; domain=${domain};`;
      if (domain.includes(".")) {
        const mainDomain = domain.substring(domain.indexOf("."));
        document.cookie = `googtrans=${cookieValue}; path=/; domain=${mainDomain};`;
      }
    }

    const selectEl = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = langCode;
      selectEl.dispatchEvent(new Event("change"));
    } else {
      window.location.reload();
      return;
    }

    setSelected(langCode);
    setOpen(false);
  };

  const currentLangObj = languages.find((l) => l.code === selected) || languages[0];

  return (
    <div ref={dropdownRef} className="relative notranslate">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 rounded-full border border-wood-200 bg-background/50 px-2.5 py-1.5 text-[13px] font-semibold text-wood-700 hover:bg-wood-50 transition-colors focus:outline-none"
      >
        <Globe className="h-3.5 w-3.5 text-wood-500" />
        <span className="text-[14px]">{currentLangObj.flag}</span>
        <span className="hidden text-xs font-semibold uppercase tracking-wide text-wood-600 sm:inline">
          {currentLangObj.labelShort}
        </span>
        <ChevronDown
          className={`h-3 w-3 text-wood-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 mt-1.5 w-36 origin-top-right rounded-xl border border-wood-150 bg-background py-1.5 shadow-lg ring-1 ring-black/5 focus:outline-none z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-xs sm:text-[13px] font-medium transition-colors ${
                selected === lang.code
                  ? "bg-wood-50 font-semibold text-wood-900"
                  : "text-wood-600 hover:bg-wood-50/70 hover:text-wood-900"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

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
              className="relative text-[13px] tracking-[0.05em] text-wood-600 transition-colors hover:text-wood-900 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-wood-700/60 after:transition-[width] after:duration-300 hover:after:w-full whitespace-nowrap sm:text-[14px]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <LanguageSelector />
          <a
            href="tel:0943966662"
            className="text-[13px] tracking-[0.05em] text-wood-600 transition-colors hover:text-wood-900 whitespace-nowrap sm:text-[14px]"
          >
            0943 966 662
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSelector />
          <button
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
