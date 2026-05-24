import { MessageCircle, Image as ImageIcon } from "lucide-react";

const ZALO = "https://zalo.me/0943966662";

interface StickyMobileCTAProps {
  reducedDominance?: boolean;
}

export function StickyMobileCTA({ reducedDominance = false }: StickyMobileCTAProps) {
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
        <a
          href={ZALO}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center justify-center gap-1.5 rounded-full border border-wood-300 bg-background text-sm font-semibold text-wood-800 transition-colors hover:bg-wood-100 ${
            reducedDominance ? "px-3 py-2 text-xs" : "px-4 py-3"
          }`}
        >
          <ImageIcon className="h-4 w-4" />
          Gửi ảnh
        </a>
      </div>
    </div>
  );
}
