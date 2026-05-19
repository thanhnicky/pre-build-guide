import { Phone, MessageCircle, MapPin } from "lucide-react";

export function ContactSection() {
  return (
    <section id="lien-he" className="bg-wood-800 py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-background sm:text-4xl">
          Sẵn sàng tư vấn miễn phí
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-wood-200">
          Hãy liên hệ ngay để được tư vấn giải pháp phù hợp nhất cho đồ gỗ của
          bạn. Báo giá chi tiết sau khi khảo sát thực tế.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://zalo.me/0943966662"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-8 py-3.5 text-base font-semibold text-wood-800 shadow-lg transition-all hover:bg-wood-50 hover:shadow-xl sm:w-auto"
          >
            <MessageCircle className="h-5 w-5" />
            Nhắn Zalo ngay
          </a>
          <a
            href="tel:0943966662"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-wood-600 bg-transparent px-8 py-3.5 text-base font-semibold text-background transition-all hover:bg-wood-700 sm:w-auto"
          >
            <Phone className="h-5 w-5" />
            Gọi 0943 966 662
          </a>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-wood-300">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4" />
            <span>Hoạt động toàn quốc — khảo sát tận nơi</span>
          </div>
          <p className="text-xs text-wood-400">
            Làm việc cả trong tuần & cuối tuần theo lịch hẹn
          </p>
        </div>
      </div>
    </section>
  );
}
