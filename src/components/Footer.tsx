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
            <p className="text-[14px] leading-[1.7] text-wood-700 sm:text-[15px]">
              CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG
            </p>
            <p className="text-[13px] text-wood-500 sm:text-[14px]">MST: 0313351528</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3 text-[14px] text-wood-700 sm:text-[15px]">
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
          <div className="flex flex-col gap-3 text-[14px] text-wood-700 sm:text-[15px]">
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

        <div className="mt-10 overflow-hidden rounded-xl border border-wood-200">
          <iframe
            title="Lotus Paint — Bản đồ"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5!2d106.5774582!3d10.8544175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b6657d63477%3A0x7444e3610e848efa!2sS%C6%A1n%20Lotus%20-%20Keo%20Jade's%20Solution%20(C%C3%B4ng%20ty%20B%C3%ADch%20Trang)!5e0!3m2!1svi!2svn!4v1748357000000!5m2!1svi!2svn"
            width="100%"
            height="260"
            style={{ border: 0, display: "block" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href="https://maps.app.goo.gl/JZ9NvsifM5T1PfcA9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-end gap-1.5 border-t border-wood-200 bg-wood-50 px-4 py-2 text-[12px] text-wood-500 transition-colors hover:text-wood-800 sm:text-[13px]"
          >
            <MapPin className="h-3 w-3" />
            Xem trên Google Maps
          </a>
        </div>

        <div className="mt-6 border-t border-wood-200 pt-6 text-center text-[13px] text-muted-foreground sm:text-left sm:text-[14px]">
          &copy; {new Date().getFullYear()} Sơn Lotus. Tư vấn quy trình sơn gỗ đúng nhu cầu.
        </div>
      </div>
    </footer>
  );
}
