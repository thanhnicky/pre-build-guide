import { Phone, MessageCircle, Mail, MapPin, Globe } from "lucide-react";
import logo from "@/assets/lotus-logo.jpg";

export function Footer() {
  return (
    <footer className="border-t border-wood-200 bg-background py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <img
              src={logo}
              alt="Lotus Paint"
              className="h-14 w-auto object-contain"
            />
            <p className="text-[13px] leading-[1.7] text-wood-700">
              CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG
            </p>
            <p className="text-[12px] text-wood-500">MST: 0313351528</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 text-[13px] text-wood-700">
            <div className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-wood-500" />
              <span>99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM</span>
            </div>
            <a
              href="mailto:sales@sonlotus.vn"
              className="flex items-center gap-2 transition-colors hover:text-wood-900"
            >
              <Mail className="h-3.5 w-3.5 text-wood-500" />
              sales@sonlotus.vn
            </a>
            <a
              href="https://www.sonlotus.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-wood-900"
            >
              <Globe className="h-3.5 w-3.5 text-wood-500" />
              www.sonlotus.vn
            </a>
          </div>

          {/* Hotline */}
          <div className="flex flex-col gap-3 text-[13px] text-wood-700">
            <a
              href="tel:0943966662"
              className="flex items-center gap-2 transition-colors hover:text-wood-900"
            >
              <Phone className="h-3.5 w-3.5 text-wood-500" />
              Hotline: 0943 966 662
            </a>
            <a
              href="https://zalo.me/0943966662"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-wood-900"
            >
              <MessageCircle className="h-3.5 w-3.5 text-wood-500" />
              Nhắn Zalo
            </a>
          </div>
        </div>

        <div className="mt-10 border-t border-wood-200 pt-6 text-center text-xs text-muted-foreground sm:text-left">
          &copy; {new Date().getFullYear()} Sơn Lotus. Tư vấn quy trình sơn gỗ đúng nhu cầu.
        </div>
      </div>
    </footer>
  );
}
