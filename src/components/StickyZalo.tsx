import { MessageCircle } from "lucide-react";

const ZALO = "https://zalo.me/0943966662";

export function StickyZalo() {
  return (
    <a
      href={ZALO}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-wood-900 px-5 py-3 text-[13px] font-medium text-background shadow-lg transition-colors hover:bg-wood-700 md:inline-flex"
    >
      <MessageCircle className="h-4 w-4" />
      Nhắn Zalo kỹ thuật
    </a>
  );
}
