import heroWood from "@/assets/hero-wood.jpg";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroWood}
          alt="Natural wood grain texture"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-wood-900/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-wood-300">
          Chuyên gia sơn gỗ tự nhiên
        </p>
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-background sm:text-5xl md:text-6xl">
          Bảo vệ & tôn vinh
          <br />
          vẻ đẹp gỗ tự nhiên
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-wood-200 sm:text-lg">
          Dịch vụ sơn gỗ nội thất & ngoại thất chuyên nghiệp. Đánh dầu, phủ
          bóng, sơn PU — mang lại vẻ đẹp bền vững cho không gian sống của bạn.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="https://zalo.me/0943966662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-wood-500 px-6 py-3 text-sm font-semibold text-background shadow-lg shadow-wood-900/20 transition-all hover:bg-wood-400 hover:shadow-xl"
          >
            <MessageCircle className="h-4 w-4" />
            Tư vấn qua Zalo
          </a>
          <a
            href="tel:0943966662"
            className="inline-flex items-center gap-2 rounded-full border border-wood-400/40 bg-wood-900/30 px-6 py-3 text-sm font-semibold text-background backdrop-blur-sm transition-all hover:bg-wood-900/50"
          >
            <Phone className="h-4 w-4" />
            Gọi ngay 0943 966 662
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-wood-300" />
      </div>
    </section>
  );
}
