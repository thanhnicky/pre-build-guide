import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { ArrowUpRight, ShieldCheck, Leaf, CheckCircle, Wind, ChevronLeft, ChevronRight, ChevronDown, Factory, Ship, Camera, FileText, FlaskConical, Wrench, Truck } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { StickyZalo } from "@/components/StickyZalo";

import heroImg from "@/assets/lotus-hero.jpg";
import heroWood from "@/assets/hero-wood.jpg";
import procLau from "@/assets/proc-lau.jpg";
import procPhun from "@/assets/proc-phun.jpg";
import procMdf from "@/assets/proc-mdf.jpg";
import procBong from "@/assets/proc-bong.jpg";

const ZALO = "https://zalo.me/0943966662";

export const Route = createFileRoute("/")({
  component: LotusLanding,
  head: () => ({
    meta: [
      { title: "Lotus — Hoàn thiện gỗ cho không gian sống" },
      {
        name: "description",
        content:
          "Bốn quy trình hoàn thiện gỗ Lotus: sơn lau giữ vân, sơn phun nội ngoại thất, màu bệt MDF, phủ bóng ngoài trời. Nhắn Zalo để được tư vấn đúng hệ.",
      },
    ],
  }),
});

function LotusLanding() {
  const [isSelectorInteracting, setIsSelectorInteracting] = useState(false);

  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Trust bar */}
        <TrustBar />
        {/* 3. Lotus phù hợp với ai */}
        <AudienceSection />
        {/* 4. Vì sao chọn hệ nước Lotus */}
        <WhyWaterSection />
        {/* 5. Các hệ hoàn thiện chính */}
        <FinishFinder onInteractionChange={setIsSelectorInteracting} />
        {/* 5b. Các dòng sản phẩm chính trong hệ */}
        <ProductsSection />
        {/* 6. Quy trình phối hợp kỹ thuật */}
        <TechCollaborationSection />
        {/* 7. Chứng nhận & hồ sơ kỹ thuật */}
        <CertificationsSection />
        {/* 8. Dự án / ứng dụng thực tế */}
        <Lookbook />
        {/* 9. Trust bar / social proof */}
        <PartnersSection />
        {/* 10. FAQ */}
        <FAQ />
        {/* 11. CTA cuối / liên hệ kỹ thuật */}
        <ConsultBlock />
      </main>
      <Footer />
      <StickyMobileCTA reducedDominance={isSelectorInteracting} />
      <StickyZalo />
    </>
  );
}

/* ============================================================
   AUDIENCE — Lotus phù hợp với ai
   ============================================================ */
function AudienceSection() {
  const audiences = [
    {
      icon: Factory,
      title: "Xưởng nội thất công trình",
      lead: "Thi công căn hộ, khách sạn, văn phòng cao cấp.",
      bullets: [
        "Đồng màu giữa các lô — hạn chế chênh sắc khi giao theo đợt",
        "Hồ sơ kỹ thuật phục vụ nghiệm thu dự án",
        "Mùi nhẹ, VOC thấp — phù hợp hạng mục bàn giao sớm",
      ],
      tags: ["Dự án cao cấp", "Nội thất công trình"],
    },
    {
      icon: Ship,
      title: "Nhà máy / đơn hàng xuất khẩu",
      lead: "Sản xuất đồ gỗ xuất khẩu sang Mỹ, EU, Nhật Bản.",
      bullets: [
        "TDS / MSDS song ngữ Anh–Việt theo yêu cầu buyer",
        "Đáp ứng EN71-3 · ASTM F963 · FDA · RoHS",
        "Bề mặt ổn định trên sản lượng lớn, nhiều lô",
      ],
      tags: ["Xuất khẩu Mỹ · EU · Nhật", "Sản lượng lớn"],
    },
  ];

  return (
    <section id="phu-hop" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
              LOTUS PHÙ HỢP VỚI AI
            </div>
            <h2 className="font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]">
              <span className="block">Một hệ sơn —</span>
              <span className="block italic font-normal text-wood-700">
                hai nhu cầu sản xuất chính.
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6">
            Cùng quy trình và công thức sơn — Lotus điều chỉnh hồ sơ kỹ thuật
            và hỗ trợ phù hợp theo từng loại hình xưởng.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="flex flex-col gap-6 rounded-lg border border-wood-200/60 bg-[#F5F0EA] p-7 sm:p-9"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <a.icon className="h-6 w-6 text-wood-700" strokeWidth={1.5} />
              </div>

              {/* Title + 1-line lead */}
              <div>
                <h3 className="font-display text-[1.5rem] font-medium leading-[1.2] text-wood-900 sm:text-[1.7rem]">
                  {a.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.6] text-wood-700/85">
                  {a.lead}
                </p>
              </div>

              {/* 3 scannable bullets */}
              <ul className="space-y-2.5 border-t border-wood-300/40 pt-5">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[14px] leading-[1.55] text-wood-800">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-600" strokeWidth={1.75} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              {/* Compact tag row */}
              <div className="mt-auto flex flex-wrap gap-2 pt-2">
                {a.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-wood-700 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.12em] text-[#F5F0EA]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TECH COLLABORATION — Quy trình phối hợp kỹ thuật
   ============================================================ */
function TechCollaborationSection() {
  const steps = [
    {
      icon: Camera,
      n: "01",
      title: "Gửi ảnh & mô tả hạng mục",
      body: "Gửi ảnh bề mặt, loại gỗ, môi trường sử dụng và yêu cầu hoàn thiện qua Zalo. Lotus nhìn đúng hạng mục trước, rồi mới đề xuất đúng hệ.",
    },
    {
      icon: FileText,
      n: "02",
      title: "Đề xuất hệ + hồ sơ kỹ thuật",
      body: "Lotus đề xuất hệ phù hợp theo loại gỗ, môi trường sử dụng và yêu cầu bề mặt của từng hạng mục. Với công trình cần nghiệm thu hoặc đơn hàng cần hồ sơ kỹ thuật, đội ngũ gửi kèm TDS, MSDS và các chứng nhận liên quan.",
    },
    {
      icon: FlaskConical,
      n: "03",
      title: "Thử mẫu trước khi vào lô",
      body: "Xưởng thử trực tiếp trên mẫu thật để chốt màu, độ bóng, độ bám và cảm giác bề mặt trước khi chạy số lượng lớn. Làm rõ từ đầu sẽ giảm lỗi khi vào lô và đỡ phát sinh lúc bàn giao.",
    },
    {
      icon: Wrench,
      n: "04",
      title: "Hỗ trợ kỹ thuật tại xưởng",
      body: "Ở lần triển khai đầu, kỹ sư Lotus hỗ trợ tỷ lệ pha, chỉnh súng phun và xử lý lỗi bề mặt ngay tại xưởng. Xưởng không phải tự dò hệ một mình khi chuyển sang hệ nước.",
    },
    {
      icon: Truck,
      n: "05",
      title: "Cung ứng & theo dõi theo tiến độ",
      body: "Lotus giao hàng theo tiến độ sản xuất, theo dõi độ ổn định giữa các đợt và cùng xưởng điều chỉnh khi vật liệu, thời tiết hoặc điều kiện thi công thay đổi.",
    },
  ];

  return (
    <section id="phoi-hop" className="bg-[#F5F0EA] py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
              QUY TRÌNH PHỐI HỢP KỸ THUẬT
            </div>
            <h2 className="font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]">
              <span className="block">Từ ảnh mẫu đầu tiên —</span>
              <span className="block italic font-normal text-wood-700">
                đến lô hàng cuối cùng.
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6">
            Lotus đồng hành như một bộ phận kỹ thuật mở rộng của xưởng —
            không chỉ bán sơn, mà cùng kiểm soát chất lượng đến lô cuối.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {steps.map((s) => (
            <li
              key={s.n}
              className="flex flex-col gap-4 rounded-lg border border-wood-200/60 bg-background p-6"
            >
              <div className="flex items-center justify-between">
                <s.icon className="h-5 w-5 text-wood-700" strokeWidth={1.5} />
                <span className="font-display text-[13px] tracking-normal text-wood-400">
                  {s.n}
                </span>
              </div>
              <h3 className="font-display text-[16px] font-semibold leading-[1.3] text-wood-900">
                {s.title}
              </h3>
              <p className="text-[13.5px] leading-[1.65] text-wood-700/85">
                {s.body}
              </p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}

/* ============================================================
   PARTNERS
   ============================================================ */
function PartnersSection() {
  const partners = [
    { src: "/logos/novaland.png", alt: "Novaland" },
    { src: "/logos/apc-an-phong.png", alt: "APC An Phong" },
    { src: "/logos/masteries-homes.png", alt: "Masteries Homes" },
    { src: "/logos/sunl-interior.png", alt: "Sun&L Interior" },
    { src: "/logos/xuong-xk-eu-my.png", alt: "Xưởng XK EU/Mỹ" },
    { src: "/logos/partner-6.png", alt: "Đối tác 6" },
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-logo-card]");
    const step = card ? card.offsetWidth + 24 : 200;
    // On mobile, scroll by 3 cards at a time
    const multiplier = window.innerWidth < 640 ? 3 : 2;
    el.scrollBy({ left: dir * step * multiplier, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F5F0EA] py-12">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 text-center">
        <p className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
          ĐÃ ĐƯỢC TIN DÙNG TẠI
        </p>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Cuộn trái"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 flex h-8 w-8 items-center justify-center rounded-full bg-wood-700/80 text-[#F5F0EA] shadow-sm transition-colors hover:bg-wood-900 sm:h-10 sm:w-10"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-4 overflow-x-auto scroll-smooth px-8 sm:px-12 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {partners.map((p) => (
              <div
                key={p.alt}
                data-logo-card
                className="snap-start shrink-0 flex h-[50px] w-[calc((100%-1rem)/3)] items-center justify-center rounded-lg border border-wood-200/60 bg-[#F5F0EA] p-3 sm:h-[60px] sm:w-[160px] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-4.5rem)/4)]"
                title={p.alt}
              >
                {failed[p.alt] ? (
                  <span className="text-[10px] font-medium text-wood-600 text-center leading-tight sm:text-[11px]">
                    {p.alt}
                  </span>
                ) : (
                  <img
                    src={p.src}
                    alt={p.alt}
                    className="max-h-full max-w-full object-contain"
                    onError={() => setFailed((f) => ({ ...f, [p.alt]: true }))}
                  />
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Cuộn phải"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1 sm:translate-x-3 flex h-8 w-8 items-center justify-center rounded-full bg-wood-700/80 text-[#F5F0EA] shadow-sm transition-colors hover:bg-wood-900 sm:h-10 sm:w-10"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-[15px] leading-[1.75] text-wood-700/85">
          Lotus đang đồng hành cùng xưởng nội thất công trình, nhà thầu hoàn thiện và các đơn vị sản xuất đồ gỗ theo dự án trong nước.
        </p>

        <div className="mx-auto mt-16 w-16 border-b border-wood-300/40" />
      </div>
    </section>
  );
}

/* ============================================================
   TRUST BAR
   ============================================================ */
function TrustBar() {
  return (
    <section className="border-y border-wood-200 bg-background pt-12 pb-10 sm:pt-12 sm:pb-14">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "200+", v: "xưởng & nhà máy tin dùng" },
            { k: "12+", v: "năm kinh nghiệm" },
            { v: "TƯ VẤN KỸ THUẬT 1-1 MIỄN PHÍ" },
            { k: "PHA MÀU THEO YÊU CẦU", v: "RAL · NCS · mã màu riêng" },
          ].map((s, i) => (
            <div key={i} className="flex h-full flex-col justify-center">
              {s.k ? (
                <>
                  <div className="font-display text-[2.25rem] font-semibold text-wood-900 sm:text-[2.75rem]">
                    {s.k}
                  </div>
                  <div className="mt-2 text-[12px] font-medium uppercase tracking-[0.16em] text-wood-500">
                    {s.v}
                  </div>
                </>
              ) : (
                <div className="text-[12px] font-medium uppercase tracking-[0.16em] text-wood-500">
                  {s.v}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TIÊU CHUẨN & CHỨNG NHẬN
   ============================================================ */
function CertificationsSection() {
  const badges = [
    {
      icon: ShieldCheck,
      code: "EN71-3: 2019 + A1:2021",
      name: "An toàn đồ chơi trẻ em — giới hạn kim loại nặng",
      tag: "Châu Âu",
    },
    {
      icon: ShieldCheck,
      code: "ASTM F963-17",
      name: "An toàn đồ chơi trẻ em theo tiêu chuẩn Hoa Kỳ",
      tag: "Hoa Kỳ",
    },
    {
      icon: CheckCircle,
      code: "FDA 21 CFR 178.3800",
      name: "Phù hợp tiếp xúc gián tiếp với thực phẩm",
      tag: "Hoa Kỳ · FDA",
    },
    {
      icon: Leaf,
      code: "RoHS Compliant",
      name: "Đáp ứng giới hạn chất độc hại trong sản phẩm",
      tag: "Châu Âu",
    },
    {
      icon: Wind,
      code: "Low VOCs · Không Formaldehyde bổ sung",
      name: "VOCs thấp theo tiêu chuẩn quốc tế, không thêm Formaldehyde trong công thức",
      tag: "Phù hợp xưởng kín",
    },
  ];

  return (
    <section id="tieu-chuan" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        {/* Heading row */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
              TIÊU CHUẨN & CHỨNG NHẬN
            </div>
            <h2 className="font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]">
              <span className="block">An toàn kiểm chứng —</span>
              <span className="block italic font-normal text-wood-700">phù hợp xuất khẩu.</span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6">
            Hệ nước, VOCs thấp, không thêm Formaldehyde trong công thức — phù
            hợp hạng mục trong nhà cho trẻ em, bệnh viện, trường học và đơn
            hàng xuất khẩu sang Mỹ, EU, Nhật Bản.
          </p>
        </div>

        {/* Credential bar — quick-scan codes */}
        <ul className="mt-10 flex flex-wrap gap-2">
          {badges.map((b) => (
            <li
              key={`pill-${b.code}`}
              className="rounded-full border border-wood-300/70 bg-[#F5F0EA] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-wood-800"
            >
              {b.code}
            </li>
          ))}
        </ul>

        {/* Badge grid — 2 columns, compact */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {badges.map((b) => (
            <div
              key={b.code}
              className="flex items-start gap-4 rounded-lg border border-wood-200/60 bg-[#F5F0EA] p-5"
            >
              <b.icon className="mt-0.5 h-5 w-5 shrink-0 text-wood-700" strokeWidth={1.5} />
              <div className="flex-1">
                <div className="font-display text-[14.5px] font-semibold leading-tight text-wood-900">
                  {b.code}
                </div>
                <div className="mt-1 text-[13px] leading-[1.5] text-wood-600">
                  {b.name}
                </div>
                <div className="mt-2.5 inline-block rounded-full bg-wood-700 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#F5F0EA]">
                  {b.tag}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ============================================================
   TẠI SAO HỆ NƯỚC?
   ============================================================ */
function WhyWaterSection() {
  const cols = [
    {
      n: "01",
      heading: "Vận hành gọn hơn",
      body: "Không phải pha thêm nhiều dung môi, mùi trong xưởng nhẹ hơn và khâu xử lý cũng đơn giản hơn.",
      punch: "GIẢM ÁP LỰC VẬN HÀNH KHI CHẠY HÀNG MỖI NGÀY.",
    },
    {
      n: "02",
      heading: "Chuyển hệ có người đi cùng",
      body: "Khi xưởng chuyển sang hệ nước, kỹ sư Lotus hỗ trợ tỷ lệ pha, chỉnh súng phun và xử lý lỗi bề mặt ngay từ lần chạy đầu.",
      punch: "RÚT NGẮN THỜI GIAN DÒ HỆ — ĐỠ MẤT HÀNG, MẤT CÔNG.",
    },
    {
      n: "03",
      heading: "Sẵn cho nghiệm thu công trình",
      body: "VOCs thấp, mùi nhẹ và có hồ sơ kỹ thuật khi cần — phù hợp các hạng mục nội thất cần bàn giao gọn và làm việc rõ với đội giám sát.",
      punch: "GIẢM VƯỚNG KHI NGHIỆM THU VÀ BÀN GIAO.",
    },
  ];


  return (
    <section className="bg-[#F5F0EA] py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
          TẠI SAO HỆ NƯỚC?
        </div>
        <h2 className="font-display mt-8 max-w-3xl text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]">
          <span className="block">PU vẫn sơn được.</span>
          <span className="block italic font-normal text-wood-700">
            Nhưng hệ nước giúp xưởng lợi hơn ở đâu?
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5">
          {cols.map((c) => (
            <div
              key={c.heading}
              className="flex flex-col gap-4 rounded-lg border border-wood-200/60 bg-background p-7"
            >
              <div className="font-display text-[13px] tracking-normal text-wood-400">
                {c.n}
              </div>
              <h3 className="font-display text-[18px] font-medium leading-[1.25] text-wood-900">
                {c.heading}
              </h3>
              <p className="text-[14px] leading-[1.65] text-wood-700/85">
                {c.body}
              </p>
              <p className="mt-auto border-t border-wood-200 pt-4 text-[13.5px] font-semibold uppercase tracking-[0.08em] text-wood-900">
                → {c.punch}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

/* ============================================================
   HERO
   ============================================================ */
function Hero() {
  const trust = ["TDS / MSDS", "EN71-3", "ASTM F963", "FDA", "RoHS"];
  return (
    <section className="relative bg-[oklch(0.97_0.015_82)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pt-12 pb-10 sm:px-10 sm:pt-20 sm:pb-14 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:pt-24 lg:pb-16">
        {/* Left — typography */}
        <div className="lg:col-span-5 lg:pt-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
            SƠN GỖ HỆ NƯỚC CHO XƯỞNG NỘI THẤT
          </div>

          <h1 className="font-display mt-6 text-[2.25rem] font-light leading-[1.08] text-wood-900 sm:mt-7 sm:text-[3.5rem] lg:text-[3rem] lg:leading-[1.08]">
            <span className="block">Sơn gỗ hệ nước cho</span>
            <span className="block italic font-normal text-wood-700">
              xưởng nội thất công trình.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-[1.7] text-wood-700/85 sm:mt-5 sm:text-[15.5px]">
            Kỹ sư Lotus hỗ trợ trực tiếp tại xưởng, giúp chọn đúng hệ và giữ bề mặt ổn định từ mẫu thử đến lô giao thực tế.
          </p>

          {/* Trust strip - hidden on mobile */}
          <div className="mt-6 hidden sm:block">
            <div className="text-[10px] font-medium uppercase tracking-[0.2em] text-wood-500">
              Hồ sơ &amp; tiêu chuẩn
            </div>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {trust.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-wood-300/70 bg-background/60 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-wood-800"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-start gap-4 sm:mt-8 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-wood-900 px-7 py-4 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-background shadow-md shadow-wood-900/10 transition-all hover:bg-wood-700 hover:shadow-lg sm:w-auto"
            >
              <Camera className="h-4 w-4" strokeWidth={1.75} />
              Gửi ảnh hạng mục — nhận tư vấn
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:0943966662"
              className="text-[13px] font-medium tracking-wide text-wood-700 transition-colors hover:text-wood-900"
            >
              Hoặc gọi kỹ thuật <span className="underline underline-offset-4">0943 966 662</span>
            </a>
          </div>
        </div>

        {/* Right — image */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:aspect-[4/5]">
            <img
              src={heroImg}
              alt="Bề mặt gỗ hoàn thiện Lotus"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FINISH FINDER — bộ lọc tư vấn hệ sơn phù hợp
   ============================================================ */
type Surface = "natural" | "mdf";
type Location = "indoor" | "outdoor";
type NaturalFinish = "grain" | "solid";

type FinishResult = {
  name: string;
  tag: string;
  desc: string;
  suitable: string;
  spec: string;
  products: string[];
  image: string;
}

// New data structure for coating systems
type CoatingMethod = "lau" | "phun" | "single";

interface CoatingSystem {
  title: string;
  suitableFor: string;
  notes?: string;
  methodType: "single" | "dual";
  singleMethod?: {
    process: string;
    representativeProducts: string[];
    image: string;
    notes?: string;
  };
  methodLau?: {
    process: string;
    representativeProducts: string[];
    image: string;
    notes?: string;
  };
  methodPhun?: {
    process: string;
    representativeProducts: string[];
    image: string;
    notes?: string;
  };
}

function resolveCoatingSystem(
  surface: Surface,
  location: Location,
  naturalFinish: NaturalFinish | null,
): CoatingSystem {
  // 1) Gỗ tự nhiên / Veneer + Trong nhà + Giữ vân (dual-method)
  if (surface === "natural" && naturalFinish === "grain" && location === "indoor") {
    return {
      title: "Sơn giữ vân gỗ nội thất",
      suitableFor: "Sản phẩm nội thất dùng trong nhà",
      methodType: "dual",
      methodLau: {
        process: "Stain màu → Lót trong suốt → Phủ trong suốt bóng / mờ bảo vệ",
        representativeProducts: ["Lotus wood stain", "Lotus sanding sealer", "Lotus acrylic lacquer IN"],
        image: procLau,
        notes: "Có thể điều chỉnh được màu sắc, độ bóng mờ, 1K & 2K theo yêu cầu",
      },
      methodPhun: {
        process: "Lót trong suốt → Phun hệ 2in1 (màu và bóng chung trong 1 loại sơn)",
        representativeProducts: ["Lotus sanding sealer", "Lotus woodstain finish interior"],
        image: procPhun,
        notes: "Có thể điều chỉnh được màu sắc, độ bóng mờ, 1K & 2K theo yêu cầu",
      },
    };
  }

  // 2) Gỗ tự nhiên / Veneer + Trong nhà + Phủ màu (single-method)
  if (surface === "natural" && naturalFinish === "solid" && location === "indoor") {
    return {
      title: "Sơn màu bệt trong nhà",
      suitableFor: "Sản phẩm nội thất dùng trong nhà",
      methodType: "single",
      singleMethod: {
        process: "Sơn lót trắng → Sơn phủ màu bệt trong nhà",
        representativeProducts: ["Lotus wood primer", "Lotus wood paint IN"],
        image: procPhun,
        notes: "Có thể điều chỉnh được màu sắc, độ bóng mờ, 1K & 2K theo yêu cầu",
      },
    };
  }

  // 3) Gỗ tự nhiên / Veneer + Ngoài trời + Giữ vân (dual-method)
  if (surface === "natural" && naturalFinish === "grain" && location === "outdoor") {
    return {
      title: "Sơn giữ vân gỗ ngoại thất",
      suitableFor: "Sàn ngoài trời, hàng outdoor",
      methodType: "dual",
      methodLau: {
        process: "Stain màu → Lót trong suốt → Phủ trong suốt bóng / mờ bảo vệ ngoài trời",
        representativeProducts: ["Lotus wood stain", "Lotus sanding sealer", "Lotus acrylic lacquer EX"],
        image: procBong,
        notes: "Có thể điều chỉnh được màu sắc, độ bóng mờ, 1K & 2K theo yêu cầu",
      },
      methodPhun: {
        process: "Phun hệ 2in1 ngoài trời (màu và bóng chung trong 1 loại sơn)",
        representativeProducts: ["Lotus sanding sealer", "Lotus woodstain finish exterior", "Lotus PUD EX"],
        image: procBong,
        notes: "Có thể điều chỉnh được màu sắc, độ bóng mờ, 1K & 2K theo yêu cầu",
      },
    };
  }

  // 4) Gỗ tự nhiên / Veneer + Ngoài trời + Phủ màu (single-method)
  if (surface === "natural" && naturalFinish === "solid" && location === "outdoor") {
    return {
      title: "Sơn màu bệt ngoài trời",
      suitableFor: "Sàn, vách ngoài trời, hàng outdoor",
      methodType: "single",
      singleMethod: {
        process: "Sơn lót trắng → Sơn phủ màu bệt ngoài trời",
        representativeProducts: ["Lotus wood primer", "Lotus wood paint EX"],
        image: procBong,
        notes: "Có thể điều chỉnh được màu sắc, độ bóng mờ, 1K & 2K theo yêu cầu",
      },
    };
  }

  // 5) MDF / HDF / Gỗ công nghiệp + Trong nhà + Phủ màu / che phủ (single-method)
  if (surface === "mdf" && location === "indoor") {
    return {
      title: "Sơn màu bệt MDF trong nhà",
      suitableFor: "Hệ tủ bếp, tủ quần áo, vách ốp",
      methodType: "single",
      singleMethod: {
        process: "Sơn lót trắng → Sơn phủ màu bệt trong nhà",
        representativeProducts: ["Lotus wood primer", "Lotus wood paint IN"],
        image: procMdf,
        notes: "Có thể phủ thêm lớp phủ trong suốt bóng / mờ để bảo vệ độ bền. Những khu vực hay tiếp xúc thường xuyên nên sử dụng hệ 2K.",
      },
    };
  }

  // Fallback (should not happen with valid inputs)
  return {
    title: "Hệ hoàn thiện gỗ",
    suitableFor: "Liên hệ kỹ thuật để được tư vấn chi tiết",
    methodType: "single",
    singleMethod: {
      process: "Tùy theo hạng mục cụ thể",
      representativeProducts: ["Tư vấn theo hạng mục"],
      image: procLau,
    },
  };
}

function FinishFinder({ onInteractionChange }: { onInteractionChange: (interacting: boolean) => void }) {
  const [surface, setSurface] = useState<Surface | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [naturalFinish, setNaturalFinish] = useState<NaturalFinish | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<"lau" | "phun">("lau");

  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const needsFinishStep = surface === "natural";
  const ready =
    surface !== null &&
    location !== null &&
    (!needsFinishStep || naturalFinish !== null);

  const coatingSystem = ready ? resolveCoatingSystem(surface!, location!, naturalFinish) : null;

  const reset = () => {
    setSurface(null);
    setLocation(null);
    setNaturalFinish(null);
    setIsInteracting(false);
    onInteractionChange(false);
    // Scroll back to step 1 on reset
    if (step1Ref.current && typeof window !== 'undefined' && window.innerWidth < 768) {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      step1Ref.current.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    }
  };

  // Smooth scroll to next step on mobile after selection
  useEffect(() => {
    if (typeof window === 'undefined' || window.innerWidth >= 768) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const scrollToElement = (element: HTMLElement | null, offset = 80) => {
      if (!element) return;
      const elementRect = element.getBoundingClientRect();
      const isVisible = elementRect.top >= offset && elementRect.bottom <= window.innerHeight;

      if (!isVisible) {
        const targetPosition = elementRect.top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
    };

    // Scroll to step 2 after step 1 is selected
    if (surface && !location && step2Ref.current) {
      setIsInteracting(true);
      onInteractionChange(true);
      const timer = setTimeout(() => {
        scrollToElement(step2Ref.current);
      }, 300);
      return () => clearTimeout(timer);
    }

    // Scroll to step 3 after step 2 is selected (if needed)
    if (surface && location && needsFinishStep && !naturalFinish && step3Ref.current) {
      const timer = setTimeout(() => {
        scrollToElement(step3Ref.current);
      }, 300);
      return () => clearTimeout(timer);
    }

    // Scroll to result after final selection
    if (ready && resultRef.current) {
      setIsInteracting(false);
      onInteractionChange(false);
      const timer = setTimeout(() => {
        scrollToElement(resultRef.current, 100);
      }, 400);
      return () => clearTimeout(timer);
    }

    // Reset interaction state when not in selector
    if (!surface) {
      setIsInteracting(false);
      onInteractionChange(false);
    }
  }, [surface, location, naturalFinish, needsFinishStep, ready, onInteractionChange]);

  // Entrance animation on viewport entry
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Reset method selection when coating system changes
  useEffect(() => {
    if (coatingSystem) {
      setSelectedMethod("lau");
    }
  }, [coatingSystem?.title]);

  const StepLabel = ({ n, text }: { n: string; text: string }) => (
    <div className="text-[10.5px] uppercase tracking-[0.28em] text-wood-500">
      <span className="font-display text-[13px] tracking-normal text-wood-400">{n}</span>
      <span className="mx-2.5 text-wood-300">·</span>
      {text}
    </div>
  );

  const Choice = ({
    active,
    onClick,
    children,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`group flex w-full items-center justify-between gap-4 border px-5 py-4 text-left text-[14px] leading-[1.4] transition-colors sm:px-6 sm:py-5 sm:text-[15px] ${
        active
          ? "border-wood-900 bg-wood-900 text-background"
          : "border-wood-200 bg-background text-wood-800 hover:border-wood-700 hover:text-wood-900"
      }`}
      aria-pressed={active}
    >
      <span>{children}</span>
      <span
        className={`text-[18px] leading-none transition-transform ${
          active ? "text-background" : "text-wood-400 group-hover:translate-x-0.5"
        }`}
      >
        →
      </span>
    </button>
  );

  return (
    <section
      id="chon-he-son"
      ref={sectionRef}
      className={`bg-background pt-12 pb-20 sm:pt-12 sm:pb-24 lg:pt-12 lg:pb-28 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        {/* Section opener */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
              CÔNG CỤ TƯ VẤN NHANH
            </div>
            <h2 className="font-display mt-8 text-[2.25rem] font-light leading-[1.06] text-wood-900 sm:text-5xl lg:text-[3.5rem]">
              <span className="block">Chọn đúng hệ sơn</span>
              <span className="block italic font-normal text-wood-700">
                trong vài bước.
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6">
            Cho Lotus biết bề mặt và môi trường sử dụng — hệ phù hợp sẽ hiện ra
            ngay, kèm cấu hình kỹ thuật và sản phẩm đại diện.
          </p>
        </div>

        {/* Finder card */}
        <div className="mt-14 border border-wood-200 bg-[#FAF7F2] shadow-sm sm:mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Steps */}
            <div className="lg:col-span-7 lg:border-r lg:border-wood-200">
              <div className="space-y-10 p-6 sm:p-10 lg:p-12">
                {/* Step 1 */}
                <div ref={step1Ref} className="relative transition-all duration-500 ease-out">
                  <div className="absolute -left-2 top-0 h-full w-0.5 bg-wood-300/50 sm:-left-3"></div>
                  <StepLabel n="01" text="Bề mặt thi công" />
                  <h3 className="font-display mt-3 text-[1.25rem] font-light leading-[1.3] text-wood-900 sm:text-[1.4rem]">
                    Anh / chị đang thi công trên bề mặt nào?
                  </h3>
                  <p className="mt-2 text-[13px] text-wood-600/80 sm:hidden">
                    Chạm để chọn bề mặt thi công trước
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Choice
                      active={surface === "natural"}
                      onClick={() => {
                        setSurface("natural");
                        setNaturalFinish(null);
                      }}
                    >
                      Gỗ tự nhiên / Veneer
                    </Choice>
                    <Choice
                      active={surface === "mdf"}
                      onClick={() => {
                        setSurface("mdf");
                        setNaturalFinish(null);
                      }}
                    >
                      MDF / HDF / Gỗ công nghiệp
                    </Choice>
                  </div>
                </div>

                {/* Step 2 */}
                <div
                  ref={step2Ref}
                  className={`transition-all duration-500 ease-out ${
                    surface ? "opacity-100 translate-y-0" : "pointer-events-none opacity-40 translate-y-4"
                  }`}
                >
                  <StepLabel n="02" text="Môi trường sử dụng" />
                  <h3 className="font-display mt-3 text-[1.25rem] font-light leading-[1.3] text-wood-900 sm:text-[1.4rem]">
                    Sản phẩm sẽ đặt ở đâu?
                  </h3>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Choice
                      active={location === "indoor"}
                      onClick={() => surface && setLocation("indoor")}
                    >
                      Trong nhà
                    </Choice>
                    <Choice
                      active={location === "outdoor"}
                      onClick={() => surface && setLocation("outdoor")}
                    >
                      Ngoài trời
                    </Choice>
                  </div>
                </div>

                {/* Step 3 — chỉ hiện cho gỗ tự nhiên */}
                {needsFinishStep && (
                  <div
                    ref={step3Ref}
                    className={`transition-all duration-500 ease-out ${
                      location ? "opacity-100 translate-y-0" : "pointer-events-none opacity-40 translate-y-4"
                    }`}
                  >
                    <StepLabel n="03" text="Cảm giác bề mặt mong muốn" />
                    <h3 className="font-display mt-3 text-[1.25rem] font-light leading-[1.3] text-wood-900 sm:text-[1.4rem]">
                      Anh / chị muốn giữ vân gỗ hay phủ màu kín?
                    </h3>
                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <Choice
                        active={naturalFinish === "grain"}
                        onClick={() => location && setNaturalFinish("grain")}
                      >
                        Giữ vân tự nhiên
                      </Choice>
                      <Choice
                        active={naturalFinish === "solid"}
                        onClick={() => location && setNaturalFinish("solid")}
                      >
                        Phủ màu / che phủ
                      </Choice>
                    </div>
                  </div>
                )}

                {ready && (
                  <button
                    type="button"
                    onClick={reset}
                    className="text-[12px] uppercase tracking-[0.18em] text-wood-600 transition-colors hover:text-wood-900"
                  >
                    ← Chọn lại từ đầu
                  </button>
                )}
              </div>
            </div>

            {/* Result */}
            <div ref={resultRef} className="lg:col-span-5">
              {!coatingSystem ? (
                <div className="flex h-full min-h-[320px] items-center justify-center p-10 text-center">
                  <p className="max-w-[260px] text-[14px] leading-[1.7] text-wood-600">
                    Hoàn thành các bước để xem hệ sơn Lotus phù hợp với hạng
                    mục của anh / chị.
                  </p>
                </div>
              ) : (
                <article className="flex h-full flex-col transition-all duration-500 ease-out">

                  {/* Dual method tabs */}
                  {coatingSystem.methodType === "dual" && (
                    <div className="flex border-b border-wood-200 bg-wood-50/50">
                      <button
                        type="button"
                        onClick={() => setSelectedMethod("lau")}
                        className={`flex-1 px-4 py-3 text-[12.5px] font-medium uppercase tracking-[0.14em] transition-colors ${
                          selectedMethod === "lau"
                            ? "border-b-2 border-wood-900 text-wood-900"
                            : "border-b-2 border-transparent text-wood-600 hover:text-wood-800"
                        }`}
                      >
                        Lau
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedMethod("phun")}
                        className={`flex-1 px-4 py-3 text-[12.5px] font-medium uppercase tracking-[0.14em] transition-colors ${
                          selectedMethod === "phun"
                            ? "border-b-2 border-wood-900 text-wood-900"
                            : "border-b-2 border-transparent text-wood-600 hover:text-wood-800"
                        }`}
                      >
                        Phun
                      </button>
                    </div>
                  )}

                  <div className="relative aspect-[5/4] overflow-hidden">
                    <img
                      src={
                        coatingSystem.methodType === "dual"
                          ? selectedMethod === "lau"
                            ? coatingSystem.methodLau?.image
                            : coatingSystem.methodPhun?.image
                          : coatingSystem.singleMethod?.image
                      }
                      alt={coatingSystem.title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
                    <div>
                      <div className="text-[10.5px] uppercase tracking-[0.22em] text-wood-600">
                        Hệ phù hợp
                      </div>
                      <h3 className="font-display mt-3 text-[1.35rem] font-light leading-[1.25] text-wood-900 sm:text-[1.55rem]">
                        {coatingSystem.title}
                      </h3>
                    </div>

                    <dl className="divide-y divide-wood-200 border-t border-wood-200">
                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                        <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5">
                          Phù hợp cho
                        </dt>
                        <dd className="text-[13.5px] leading-[1.55] text-wood-800">
                          {coatingSystem.suitableFor}
                        </dd>
                      </div>

                      {/* Show method-specific content */}
                      {coatingSystem.methodType === "dual" && selectedMethod === "lau" && coatingSystem.methodLau && (
                        <>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5">
                              Cấu hình kỹ thuật (Lau)
                            </dt>
                            <dd className="text-[13.5px] leading-[1.55] text-wood-800">
                              {coatingSystem.methodLau.process}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5">
                              Sản phẩm đại diện (Lau)
                            </dt>
                            <dd className="text-[13.5px] leading-[1.55] text-wood-800">
                              {coatingSystem.methodLau.representativeProducts.join(" · ")}
                            </dd>
                          </div>
                        </>
                      )}

                      {coatingSystem.methodType === "dual" && selectedMethod === "phun" && coatingSystem.methodPhun && (
                        <>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5">
                              Cấu hình kỹ thuật (Phun)
                            </dt>
                            <dd className="text-[13.5px] leading-[1.55] text-wood-800">
                              {coatingSystem.methodPhun.process}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5">
                              Sản phẩm đại diện (Phun)
                            </dt>
                            <dd className="text-[13.5px] leading-[1.55] text-wood-800">
                              {coatingSystem.methodPhun.representativeProducts.join(" · ")}
                            </dd>
                          </div>
                        </>
                      )}

                      {coatingSystem.methodType === "single" && coatingSystem.singleMethod && (
                        <>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5">
                              Cấu hình kỹ thuật
                            </dt>
                            <dd className="text-[13.5px] leading-[1.55] text-wood-800">
                              {coatingSystem.singleMethod.process}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5">
                              Sản phẩm đại diện
                            </dt>
                            <dd className="text-[13.5px] leading-[1.55] text-wood-800">
                              {coatingSystem.singleMethod.representativeProducts.join(" · ")}
                            </dd>
                          </div>
                        </>
                      )}
                    </dl>

                    {/* Notes section */}
                    {((coatingSystem.methodType === "single" && coatingSystem.singleMethod?.notes) ||
                      (coatingSystem.methodType === "dual" &&
                        (selectedMethod === "lau" ? coatingSystem.methodLau?.notes : coatingSystem.methodPhun?.notes)) ||
                      coatingSystem.notes) && (
                      <div className="mt-4 rounded-lg bg-wood-50/50 p-4">
                        <div className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-600">
                          GHI CHÚ / LƯU Ý THI CÔNG
                        </div>
                        <p className="mt-2 text-[13px] leading-[1.6] text-wood-700">
                          {coatingSystem.methodType === "dual"
                            ? selectedMethod === "lau"
                              ? coatingSystem.methodLau?.notes || coatingSystem.notes
                              : coatingSystem.methodPhun?.notes || coatingSystem.notes
                            : coatingSystem.singleMethod?.notes || coatingSystem.notes}
                        </p>
                      </div>
                    )}

                    <div className="mt-auto pt-2">
                      <a
                        href={ZALO}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 border-b border-wood-900 pb-1 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-wood-900 transition-colors hover:text-wood-700"
                      >
                        Nhắn Zalo để tư vấn hệ này
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PRODUCTS — các dòng sản phẩm chính trong hệ sơn
   ============================================================ */
const PRODUCT_GROUPS = [
  {
    title: "Xử lý nền / trám trét",
    description: "Chuẩn bị bề mặt gỗ trước khi sơn, xử lý khuyết điểm và tăng độ bám dính",
    usage: "Trám vết nứt, lỗ nhỏ trên gỗ tự nhiên và MDF trước khi lót và phủ",
    products: ["Lotus Wood Filler", "Lotus Putty"],
    image: heroWood,
  },
  {
    title: "Sơn lót",
    description: "Lớp nền tăng bám dính, bịt lỗ và chuẩn bị bề mặt cho lớp phủ",
    usage: "Lót cho hệ lau, phun và màu bệt trên gỗ tự nhiên và MDF",
    products: ["Lotus Wood Primer", "Lotus MDF Primer"],
    image: procPhun,
  },
  {
    title: "Hệ giữ vân",
    description: "Tôn màu vân gỗ tự nhiên, thấm sâu và bảo vệ độ đẹp của gỗ",
    usage: "Đồ gỗ trưng bày, handcraft, nội thất cao cấp giữ vân thật",
    products: ["Lotus Wood Stain", "Lotus Sanding Sealer", "Lotus Clear Coat"],
    image: procLau,
  },
  {
    title: "Hệ màu bệt",
    description: "Lên màu đặc, phẳng, che nền đều theo mã màu RAL/NCS",
    usage: "MDF, tủ bếp, tủ âm tường, vách trang trí theo concept đương đại",
    products: ["Lotus Topcoat", "Lotus Wood Paint"],
    image: procMdf,
  },
  {
    title: "Hệ bảo vệ ngoài trời",
    description: "Kháng UV, chống thấm, co giãn cùng gỗ cho hạng mục outdoor",
    usage: "Lam, sàn deck, cửa, pergola, mặt dựng gỗ ngoài trời",
    products: ["Lotus Outdoor Primer", "Lotus Outdoor Topcoat", "Lotus PUD EX"],
    image: procBong,
  },
];

function ProductsSection() {
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);

  return (
    <section id="san-pham" className="bg-[#F5F0EA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
              CÁC DÕNG SẢN PHẨM CHÍNH
            </div>
            <h2 className="font-display mt-6 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.5rem]">
              <span className="block">Từ lớp nền</span>
              <span className="block italic font-normal text-wood-700">
                đến lớp phủ hoàn thiện.
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6">
            Mỗi nhóm sản phẩm đóng vai trò riêng trong hệ — được phối theo loại gỗ, môi trường và yêu cầu bề mặt của xưởng.
          </p>
        </div>

        {/* Desktop: 3+2 grid layout */}
        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
          {PRODUCT_GROUPS.map((group, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-lg border border-wood-200/60 bg-background"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-wood-200/60">
                <img
                  src={group.image}
                  alt={group.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-wood-600">
                    Nhóm {index + 1}
                  </div>
                  <h3 className="font-display mt-2 text-[18px] font-semibold leading-[1.3] text-wood-900">
                    {group.title}
                  </h3>
                </div>
                <p className="text-[14px] leading-[1.6] text-wood-700/90">
                  {group.description}
                </p>
                <div className="space-y-3">
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-wood-500">
                      Áp dụng
                    </div>
                    <p className="mt-1 text-[13px] leading-[1.5] text-wood-600">
                      {group.usage}
                    </p>
                  </div>
                  <div>
                    <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-wood-500">
                      Sản phẩm đại diện
                    </div>
                    <div className="mt-2 space-y-1">
                      {group.products.map((product, pIndex) => (
                        <div key={pIndex} className="text-[13px] font-medium text-wood-800">
                          {product}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: Accordion with images */}
        <div className="mt-12 space-y-4 lg:hidden">
          {PRODUCT_GROUPS.map((group, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-wood-200/60 bg-background"
            >
              <button
                type="button"
                onClick={() => setExpandedGroup(expandedGroup === index ? null : index)}
                className="flex w-full items-start gap-4 p-4 text-left"
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded bg-wood-200/60">
                  <img
                    src={group.image}
                    alt={group.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="text-[10px] font-medium uppercase tracking-[0.14em] text-wood-600">
                    Nhóm {index + 1}
                  </div>
                  <h3 className="font-display mt-1 text-[16px] font-semibold leading-[1.3] text-wood-900">
                    {group.title}
                  </h3>
                </div>
                <ChevronDown
                  className={`mt-1 h-5 w-5 shrink-0 text-wood-600 transition-transform ${
                    expandedGroup === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expandedGroup === index && (
                <div className="border-t border-wood-200 p-4">
                  <p className="text-[14px] leading-[1.6] text-wood-700/90">
                    {group.description}
                  </p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-wood-500">
                        Áp dụng
                      </div>
                      <p className="mt-1 text-[13px] leading-[1.5] text-wood-600">
                        {group.usage}
                      </p>
                    </div>
                    <div>
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-wood-500">
                        Sản phẩm đại diện
                      </div>
                      <div className="mt-2 space-y-1">
                        {group.products.map((product, pIndex) => (
                          <div key={pIndex} className="text-[13px] font-medium text-wood-800">
                            {product}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   PROJECTS — dự án tiêu biểu
   ============================================================ */
const PROJECTS = [
  {
    tag: "HỆ PHUN · NỘI THẤT",
    name: "Khách sạn 5 sao — The Grand Saigon",
    type: "Nội thất phòng & hành lang · TP.HCM · 2024",
    note: "320 phòng · đồng màu giữa các lô giao · bàn giao theo tiến độ dự án.",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "MÀU BỆT · MDF",
    name: "Masterise Homes — The Global City",
    type: "Tủ bếp & tủ âm tường căn hộ cao cấp · TP. Thủ Đức · 2024",
    note: "500 bộ · pha theo RAL · đồng màu ổn định giữa 4 block.",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "HỆ LAU · XUẤT KHẨU EU",
    name: "Xưởng XK Đức — Đơn hàng nội thất nguyên khối",
    type: "Bàn & ghế gỗ tự nhiên · TP.HCM · 2023",
    note: "1.200 sản phẩm · hồ sơ TDS/MSDS song ngữ phục vụ kiểm hàng buyer Đức.",
    image:
      "https://images.unsplash.com/photo-1611021061285-870b3b39de92?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "PHỦ BÓNG · OUTDOOR",
    name: "Biệt thự cao cấp — Dự án Sun Group",
    type: "Lam, cửa & sàn gỗ ngoại thất · Đà Nẵng · 2023",
    note: "Phủ kháng UV · bề mặt giữ ổn định sau 3 mùa vận hành ngoài trời.",
    image:
      "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "MÀU BỆT · MDF",
    name: "Novaland — Aqua City",
    type: "Tủ bếp & tủ âm tường · Đồng Nai · 2023",
    note: "800 bộ · đồng màu RAL giữa 4 block.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "HỆ LAU · NỘI THẤT",
    name: "Chuỗi nhà hàng — Saigon Centre",
    type: "Bàn ghế & vách ốp gỗ · TP.HCM · 2022",
    note: "Bề mặt giữ ổn định sau 2 năm vận hành cường độ cao.",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=70",
  },
];

function Lookbook() {
  return (
    <section
      id="cong-trinh"
      className="bg-[oklch(0.96_0.018_82)] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="max-w-3xl">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
            Dự án tiêu biểu
          </div>
          <h2 className="font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-4xl lg:text-[2.75rem]">
            <span className="block">Những công trình</span>
            <span className="block italic font-normal text-wood-700">
              đã tin dùng Lotus.
            </span>
          </h2>
          <p className="font-display mt-6 max-w-2xl text-[15.5px] italic leading-[1.6] text-wood-700">
            Từ khách sạn 5 sao đến khu dân cư cao cấp — hệ sơn gỗ Lotus đã được
            kiểm chứng qua các dự án có yêu cầu kỹ thuật và thẩm mỹ cao nhất.
          </p>
        </div>

        {/* Featured: 2 hero projects */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          {PROJECTS.slice(0, 2).map((p, i) => (
            <article
              key={`feat-${i}`}
              className="overflow-hidden rounded-lg bg-[#FDFAF7] shadow-sm ring-1 ring-wood-200/60 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-wood-200/60">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-4 top-4 rounded-full bg-wood-900/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-background backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-col gap-2 p-6 sm:p-7">
                <h3 className="font-display text-[1.35rem] font-semibold leading-[1.25] text-wood-900">
                  {p.name}
                </h3>
                <p className="text-[13px] text-wood-600">{p.type}</p>
                <p className="mt-1 text-[13.5px] leading-[1.55] text-wood-500">
                  {p.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Smaller: remaining projects in a tighter grid */}
        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {PROJECTS.slice(2).map((p, i) => (
            <article
              key={`sm-${i}`}
              className="overflow-hidden rounded-lg bg-[#FDFAF7] ring-1 ring-wood-200/60 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-wood-200/60">
                <img
                  src={p.image}
                  alt={p.name}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-wood-900/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-background backdrop-blur-sm">
                  {p.tag}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 p-4">
                <h3 className="font-display text-[14.5px] font-semibold leading-[1.25] text-wood-900">
                  {p.name}
                </h3>
                <p className="text-[11.5px] text-wood-600">{p.type}</p>
                <p className="mt-1 text-[12px] leading-[1.5] text-wood-500">{p.note}</p>
              </div>

            </article>
          ))}
        </div>


        <p className="mx-auto mt-14 max-w-xl text-center text-[13.5px] leading-[1.65] text-wood-600 lg:mt-20">
          Cần xem thêm công trình thực tế hoặc tư vấn hệ sơn phù hợp — liên hệ kỹ thuật qua Zalo hoặc gọi trực tiếp.
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   CONSULT — private design consultation
   ============================================================ */
function ConsultBlock() {
  return (
    <section className="bg-wood-900 py-24 text-background sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-400">
              Tư vấn kỹ thuật · 1:1
            </div>
            <h2 className="font-display mt-8 text-[2.4rem] font-light leading-[1.06] sm:text-5xl lg:text-[3rem]">
              <span className="block">Gửi ảnh hạng mục.</span>
              <span className="block italic font-normal text-wood-200">
                Nhận đề xuất hệ trong ngày.
              </span>
            </h2>
            <p className="mt-7 max-w-md text-[15px] leading-[1.7] text-wood-300">
              Không form, không báo giá tự động — kỹ sư Lotus xem ảnh và đề
              xuất hệ theo loại gỗ, môi trường và yêu cầu kỹ thuật của xưởng.
            </p>
            <ul className="mt-7 space-y-3 text-[14px] leading-[1.6] text-wood-300">
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-400" strokeWidth={1.75} />
                <span>Phản hồi trong giờ làm việc — không để xưởng chờ.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-400" strokeWidth={1.75} />
                <span>Gửi mẫu vật lý trước khi chốt lô lớn.</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-400" strokeWidth={1.75} />
                <span>Tư vấn kỹ thuật miễn phí trước khi chốt hệ.</span>
              </li>
            </ul>

          </div>

          <div className="flex flex-col gap-5 lg:col-span-5 lg:items-end lg:justify-end lg:pb-2">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-background px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-wood-900 shadow-sm transition-colors hover:bg-wood-200 sm:w-auto"
            >
              <Camera className="h-4 w-4" strokeWidth={1.75} />
              Gửi ảnh mẫu qua Zalo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:0943966662"
              className="inline-flex items-center gap-2 text-[13px] tracking-wide text-wood-300 transition-colors hover:text-background"
            >
              hoặc gọi kỹ thuật <span className="font-semibold text-background underline underline-offset-4">0943 966 662</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ — quiet, editorial
   ============================================================ */
const FAQS = [
  {
    q: "Lotus có hỗ trợ chọn đúng hệ theo từng hạng mục không?",
    a: "Có. Chỉ cần gửi ảnh bề mặt, loại gỗ, môi trường sử dụng và yêu cầu hoàn thiện, Lotus sẽ đề xuất hệ phù hợp cho từng hạng mục thay vì để xưởng tự dò từ đầu.",
  },
  {
    q: "Xưởng của tôi làm nội thất công trình. Lotus có hồ sơ kỹ thuật để phục vụ nghiệm thu không?",
    a: "Có. Khi công trình cần làm việc với đội giám sát hoặc chuẩn bị hồ sơ kỹ thuật, Lotus cung cấp TDS, MSDS và các tài liệu liên quan theo từng hệ sơn.",
  },
  {
    q: "Lotus có hỗ trợ thử mẫu trước khi vào lô lớn không?",
    a: "Có. Lotus luôn khuyến khích xưởng thử trên mẫu thật để chốt màu, độ bóng, độ bám và cảm giác bề mặt trước khi chạy số lượng lớn.",
  },
  {
    q: "Lần đầu chuyển sang hệ nước, xưởng có được hỗ trợ trực tiếp không?",
    a: "Có. Kỹ sư Lotus hỗ trợ tại xưởng ở lần triển khai đầu: từ tỷ lệ pha, chỉnh súng phun đến xử lý lỗi bề mặt trong quá trình chạy thử.",
  },
  {
    q: "Làm nhiều lô cho công trình, làm sao giữ bề mặt ổn định giữa các đợt giao?",
    a: "Lotus theo dõi đồng màu, kiểm soát chất lượng giữa các lô và cùng xưởng điều chỉnh khi vật liệu, thời tiết hoặc điều kiện thi công thay đổi. Đây là phần rất quan trọng với các công trình giao theo nhiều đợt.",
  },
  {
    q: "MDF và gỗ tự nhiên có dùng cùng một hệ sơn không?",
    a: "Không. MDF, veneer và gỗ tự nhiên có đặc tính bề mặt khác nhau nên cần chọn hệ lót, lớp màu và lớp phủ phù hợp cho từng vật liệu để tránh loang màu, giảm bám dính hoặc xuống bề mặt sau thi công.",
  },
  {
    q: "Lotus có hỗ trợ cho đơn hàng xuất khẩu không?",
    a: "Có. Với các đơn hàng cần hồ sơ kỹ thuật hoặc tiêu chuẩn liên quan đến buyer, Lotus chuẩn bị TDS, MSDS và các chứng nhận phù hợp theo yêu cầu của từng đơn hàng.",
  },
  {
    q: "Tôi nên liên hệ Lotus như thế nào để được tư vấn nhanh nhất?",
    a: "Gửi ảnh hạng mục qua Zalo kèm mô tả ngắn về loại gỗ, môi trường sử dụng và yêu cầu bề mặt. Đội kỹ thuật sẽ nhìn đúng case trước rồi mới đề xuất hệ phù hợp.",
  },
];


function FAQ() {
  return (
    <section id="faq" className="bg-background py-24 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
              Hỏi đáp
            </div>
            <h2 className="font-display mt-8 text-[2rem] font-light leading-[1.1] text-wood-900 sm:text-[2.25rem]">
              <span className="block">Sơn Lotus</span>
              <span className="block italic font-normal text-wood-700">
                giải đáp.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="divide-y divide-wood-200 border-t border-b border-wood-200">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-0 group/faq"
                >
                  <AccordionTrigger className="py-6 text-left font-display text-lg font-normal text-wood-900 hover:no-underline hover:text-wood-700 sm:text-xl [&>svg]:hidden [&[data-state=open]_.faq-preview]:hidden [&[data-state=open]_.faq-icon-plus]:hidden [&:not([data-state=open])_.faq-icon-minus]:hidden">
                    <span className="flex flex-1 flex-col gap-2 pr-6">
                      <span>{f.q}</span>
                      <span className="faq-preview line-clamp-1 text-[13px] font-sans font-normal text-wood-500">
                        {f.a}
                      </span>
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-wood-300 text-wood-700 transition-colors group-hover/faq:border-wood-700 group-hover/faq:text-wood-900">
                      <span aria-hidden className="faq-icon-plus text-[15px] leading-none">+</span>
                      <span aria-hidden className="faq-icon-minus text-[15px] leading-none">−</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pr-12 text-[14.5px] leading-[1.75] text-wood-700/85">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
