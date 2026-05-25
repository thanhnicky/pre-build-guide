import { MessageCircle, Layers } from "lucide-react";

const ZALO = "https://zalo.me/0943966662";

interface StickyMobileCTAProps {
  reducedDominance?: boolean;
}

export function StickyMobileCTA({ reducedDominance = false }: StickyMobileCTAProps) {
  const handleScrollToSelector = () => {
    const selectorSection = document.getElementById("chon-he-son");
    if (selectorSection) {
      const headerOffset = 60; // Account for sticky header
      const elementPosition = selectorSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Optional: lightly highlight the selector area after scroll
      setTimeout(() => {
        selectorSection.classList.add("ring-2", "ring-wood-400", "ring-offset-2");
        setTimeout(() => {
          selectorSection.classList.remove("ring-2", "ring-wood-400", "ring-offset-2");
        }, 1500);
      }, 500);
    }
  };

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-wood-200 backdrop-blur md:hidden transition-all duration-300 ease-out ${
        reducedDominance
          ? "bg-background/80 px-2 py-1.5 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] scale-95 opacity-70"
          : "bg-background/95 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
      }`}
    >
      <div className="flex gap-2">
        <a
          href={ZALO}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex flex-1 items-center justify-center gap-1.5 rounded-full text-sm font-semibold shadow-md transition-colors hover:bg-wood-700 ${
            reducedDominance
              ? "bg-wood-600/80 px-3 py-2 text-xs"
              : "bg-wood-600 px-4 py-3"
          } text-primary-foreground`}
        >
          <MessageCircle className="h-4 w-4" />
          Nhắn Zalo
        </a>
        <button
          onClick={handleScrollToSelector}
          className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-wood-300 bg-background text-sm font-semibold text-wood-800 transition-colors hover:bg-wood-100 ${
            reducedDominance ? "px-3 py-2 text-xs" : "px-4 py-3"
          }`}
        >
          <Layers className="h-4 w-4" />
          Chọn hệ sơn
        </button>
      </div>
    </div>
  );
}
