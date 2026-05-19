import { Phone, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-wood-200 bg-background py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-wood-600" />
            <span className="text-base font-bold tracking-tight text-wood-800">
              Sơn Gỗ Đẹp
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a
              href="tel:0943966662"
              className="flex items-center gap-1.5 transition-colors hover:text-wood-700"
            >
              <Phone className="h-3.5 w-3.5" />
              0943 966 662
            </a>
            <span className="hidden text-wood-300 sm:inline">|</span>
            <a
              href="https://zalo.me/0943966662"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-wood-700"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              Zalo
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground sm:text-left">
          &copy; {new Date().getFullYear()} Sơn Gỗ Đẹp. Tất cả các dịch vụ đều
          có bảo hành.
        </div>
      </div>
    </footer>
  );
}
