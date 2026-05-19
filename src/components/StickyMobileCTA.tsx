import { MessageCircle, Image as ImageIcon } from "lucide-react";

const ZALO = "https://zalo.me/0943966662";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-wood-200 bg-background/95 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur md:hidden">
      <div className="flex gap-2">
        <a
          href={ZALO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wood-600 px-4 py-3 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-wood-700"
        >
          <MessageCircle className="h-4 w-4" />
          Nhắn Zalo
        </a>
        <a
          href={ZALO}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 rounded-full border border-wood-300 bg-background px-4 py-3 text-sm font-semibold text-wood-800 transition-colors hover:bg-wood-100"
        >
          <ImageIcon className="h-4 w-4" />
          Gửi ảnh
        </a>
      </div>
    </div>
  );
}
