import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { ArrowUpRight, ShieldCheck, Leaf, CheckCircle, Wind, ChevronLeft, ChevronRight, Factory, Ship, Camera, FileText, FlaskConical, Wrench, Truck } from "lucide-react";
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
  return (
    <>
      <Navbar />
      <main className="pb-24 md:pb-0">
        {/* 1. Hero */}
        <Hero />
        {/* 2. Trust bar / social proof */}
        <PartnersSection />
        <TrustBar />
        {/* 3. Lotus phù hợp với ai */}
        <AudienceSection />
        {/* 4. Vì sao chọn hệ nước Lotus */}
        <WhyWaterSection />
        {/* 5. Các hệ hoàn thiện chính */}
        <ProcessEditorial />
        {/* 6. Quy trình phối hợp kỹ thuật */}
        <TechCollaborationSection />
        {/* 7. Chứng nhận & hồ sơ kỹ thuật */}
        <CertificationsSection />
        {/* 8. Dự án / ứng dụng thực tế */}
        <Lookbook />
        {/* 9. FAQ */}
        <FAQ />
        {/* 10. CTA cuối / liên hệ kỹ thuật */}
        <ConsultBlock />
      </main>
      <Footer />
      <StickyMobileCTA />
      <StickyZalo />
    </>
  );
}

/* ============================================================
   AUDIENCE — Lotus phù hợp với ai (2 nhóm B2B chính)
   ============================================================ */
function AudienceSection() {
  const audiences = [
    {
      icon: Factory,
      kicker: "Nhóm 01",
      title: "Xưởng nội thất công trình",
      lead: "Thi công cho dự án căn hộ, khách sạn, văn phòng cao cấp.",
      bullets: [
        "Đồng màu xuyên lô — không chênh sắc giữa các đợt",
        "Hồ sơ kỹ thuật phục vụ nghiệm thu dự án",
        "Không mùi, không VOC sau bàn giao",
      ],
      tags: ["Dự án cao cấp", "Nội thất công trình"],
    },
    {
      icon: Ship,
      kicker: "Nhóm 02",
      title: "Nhà máy & đơn hàng xuất khẩu",
      lead: "Sản xuất đồ gỗ xuất khẩu sang Mỹ, EU, Nhật Bản.",
      bullets: [
        "TDS / MSDS song ngữ Anh–Việt theo yêu cầu buyer",
        "Đạt EN71-3 · ASTM F963 · FDA · RoHS",
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
                hai nhóm khách hàng B2B chính.
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6">
            Sản phẩm và quy trình kỹ thuật giống nhau — Lotus chỉ điều chỉnh
            hồ sơ và mức hỗ trợ theo đặc thù của từng nhóm.
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
                <span className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
                  {a.kicker}
                </span>
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
   TECH COLLABORATION — Quy trình phối hợp kỹ thuật B2B
   ============================================================ */
function TechCollaborationSection() {
  const steps = [
    {
      icon: Camera,
      n: "01",
      title: "Gửi ảnh & mô tả hạng mục",
      body: "Gửi ảnh bề mặt gỗ, loại vật liệu và môi trường sử dụng qua Zalo. Lotus xem trực tiếp, không qua form trung gian.",
    },
    {
      icon: FileText,
      n: "02",
      title: "Đề xuất hệ + TDS / MSDS",
      body: "Lotus đề xuất hệ sơn phù hợp, gửi kèm TDS, MSDS và hồ sơ chứng nhận cần cho nghiệm thu hoặc buyer xuất khẩu.",
    },
    {
      icon: FlaskConical,
      n: "03",
      title: "Thử mẫu trước khi vào lô",
      body: "Khuyến khích thử trên mẫu thật của xưởng để xác nhận màu, độ bóng và độ bám trước khi chốt số lượng lớn.",
    },
    {
      icon: Wrench,
      n: "04",
      title: "Hỗ trợ kỹ thuật tại xưởng",
      body: "Lần đầu chuyển hệ, Lotus hỗ trợ trực tiếp tại xưởng: tỷ lệ pha, chỉnh súng phun, xử lý lỗi bề mặt — không để xưởng tự mò.",
    },
    {
      icon: Truck,
      n: "05",
      title: "Cung ứng & theo dõi lô",
      body: "Giao hàng theo tiến độ sản xuất, theo dõi chất lượng giữa các lô, sẵn sàng điều chỉnh khi điều kiện xưởng thay đổi.",
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

        <div className="mt-14 text-center">
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-wood-700 transition-colors hover:text-wood-900"
          >
            NHẮN ZALO ĐỂ BẮT ĐẦU PHỐI HỢP KỸ THUẬT →
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
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
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
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
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 flex h-10 w-10 items-center justify-center rounded-full bg-wood-700 text-[#F5F0EA] shadow-sm transition-colors hover:bg-wood-900"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-10 sm:px-12 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {partners.map((p) => (
              <div
                key={p.alt}
                data-logo-card
                className="snap-start shrink-0 flex h-[60px] w-[160px] items-center justify-center rounded-lg border border-wood-200/60 bg-[#F5F0EA] p-4 basis-full sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-4.5rem)/4)]"
                title={p.alt}
              >
                {failed[p.alt] ? (
                  <span className="text-[11px] font-medium text-wood-600 text-center leading-tight">
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
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1 sm:translate-x-3 flex h-10 w-10 items-center justify-center rounded-full bg-wood-700 text-[#F5F0EA] shadow-sm transition-colors hover:bg-wood-900"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-[15px] leading-[1.75] text-wood-700/85">
          Sơn Lotus hiện là nhà cung cấp hệ sơn gỗ cho các xưởng nội thất xuất khẩu và chủ đầu tư dự án cao cấp tại TP.HCM.
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
      name: "An toàn đồ chơi trẻ em",
      tag: "Châu Âu",
    },
    {
      icon: ShieldCheck,
      code: "ASTM F963-17",
      name: "An toàn đồ chơi trẻ em",
      tag: "Hoa Kỳ",
    },
    {
      icon: CheckCircle,
      code: "FDA 21 CFR 178.3800",
      name: "An toàn tiếp xúc thực phẩm",
      tag: "Hoa Kỳ · FDA",
    },
    {
      icon: Leaf,
      code: "RoHS Compliant",
      name: "Giới hạn chất độc hại trong sản phẩm",
      tag: "Châu Âu",
    },
    {
      icon: Wind,
      code: "Zero Formaldehyde · Low VOCs",
      name: "Không Formaldehyde, VOCs thấp tiêu chuẩn quốc tế",
      tag: "An toàn xưởng kín",
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
            Hệ nước, không Formaldehyde, VOCs thấp — đạt chứng nhận an toàn cho
            đồ chơi trẻ em, bệnh viện, trường học và đơn hàng xuất khẩu Mỹ, EU,
            Nhật Bản.
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-wood-700 transition-colors hover:text-wood-900"
          >
            NHẮN ZALO ĐỂ NHẬN HỒ SƠ KỸ THUẬT ĐẦY ĐỦ →
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
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
      heading: "Chi phí thực tế",
      body: "Không tốn dung môi pha thêm, không cần hệ thống thông gió đặc biệt, hao phí khi phun thấp hơn PU trên cùng diện tích.",
      punch: "Tổng chi phí vận hành thấp hơn PU.",
    },
    {
      n: "02",
      heading: "Chuyển hệ không mất năng suất",
      body: "Lotus hỗ trợ trực tiếp tại xưởng lần đầu — hướng dẫn thợ pha tỷ lệ và chỉnh súng đúng cách.",
      punch: "Xưởng không phải tự mò.",
    },
    {
      n: "03",
      heading: "Giảm rủi ro bàn giao",
      body: "Dự án cao cấp yêu cầu sơn không VOC trong hồ sơ nghiệm thu. Hệ nước không để lại mùi sau bàn giao.",
      punch: "Hạn chế phát sinh bảo hành.",
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

        <div className="mt-14 text-center">
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-wood-700 transition-colors hover:text-wood-900"
          >
            NHẮN ZALO ĐỂ TÍNH THỬ CHI PHÍ →
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
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
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 pt-14 pb-10 sm:px-10 sm:pt-20 sm:pb-12 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:pt-24 lg:pb-14">
        {/* Left — typography */}
        <div className="lg:col-span-5 lg:pt-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
            SƠN GỖ HỆ NƯỚC · XƯỞNG NỘI THẤT & ĐƠN HÀNG XUẤT KHẨU
          </div>

          <h1 className="font-display mt-8 text-[2.75rem] font-light leading-[1.04] text-wood-900 sm:text-[3.75rem] lg:text-[3rem] lg:leading-[1.08]">
            <span className="block">Gỗ hoàn thiện đúng hệ —</span>
            <span className="block italic font-normal text-wood-700">
              bề mặt ổn định từ mẫu đầu đến lô cuối.
            </span>
          </h1>

          <p className="mt-7 max-w-md text-[15.5px] leading-[1.7] text-wood-700/85">
            Hệ sơn gỗ gốc nước cho xưởng nội thất công trình và nhà máy đơn
            hàng xuất khẩu — TDS/MSDS đầy đủ, hỗ trợ kỹ thuật tại xưởng, pha
            màu theo RAL / NCS.
          </p>

          {/* Trust strip — above the fold */}
          <ul className="mt-7 flex flex-wrap gap-x-2 gap-y-2">
            {trust.map((t) => (
              <li
                key={t}
                className="rounded-full border border-wood-300/70 bg-background/60 px-3 py-1 text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-700"
              >
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-wood-900 px-6 py-3.5 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-background shadow-sm transition-colors hover:bg-wood-700"
            >
              Gửi ảnh mẫu — nhận tư vấn kỹ thuật
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:0943966662"
              className="text-[13px] font-medium tracking-wide text-wood-700 transition-colors hover:text-wood-900"
            >
              hoặc gọi kỹ thuật <span className="underline underline-offset-4">0943 966 662</span>
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
   4 PROCESS DIRECTIONS — asymmetric editorial
   ============================================================ */
const PROCESSES = [
  {
    n: "I",
    slug: "he-lau",
    tab: "Hệ Lau",
    kicker: "Hệ lau · Gỗ tự nhiên",
    title: "Sơn lau giữ màu vân gỗ",
    body: [
      "Lớp hoàn thiện thấm sâu vào thớ gỗ, tôn vinh từng đường vân thay vì che phủ.",
      "Bề mặt ấm, có chiều sâu, vẫn giữ nguyên cảm giác chạm vào gỗ thật.",
      "Khác với hệ phun tạo lớp kín đều, sơn lau để gỗ 'sống' — nơi chính chất liệu là điểm nhấn.",
    ],
    material: "Gỗ tự nhiên nguyên khối — sồi, óc chó, tần bì",
    surface: "Bề mặt ấm, có chiều sâu — giữ nguyên vân và cảm giác chạm gỗ thật.",
    strength: "Phù hợp đơn handcraft & hàng xuất khẩu yêu cầu cảm giác tự nhiên.",
    cta: "Nhắn Zalo để Lotus xem hạng mục và gợi ý chính xác",
    image: procLau,
    steps: [
      { product: "Lau màu — Lotus Wood Stain", note: "tôn màu vân gỗ, thấm sâu" },
      { product: "Lót mịn — Lotus Sanding Sealer", note: "trong suốt. Chờ khô 2h, xả nhám P320" },
      { product: "Phủ bóng — Lotus Acrylic Lacquer", note: "chọn trong nhà hoặc ngoài trời theo môi trường sử dụng" },
    ],
    stepsNote: undefined as string | undefined,
  },
  {
    n: "II",
    slug: "he-phun",
    tab: "Hệ Phun",
    kicker: "Hệ phun · Nội & ngoại thất",
    title: "Sơn phun giữ vân, nội & ngoại thất",
    body: [
      "Hệ phun cho bề mặt phẳng, đều màu, kiểm soát cao — lý tưởng cho sản xuất hàng loạt và dự án cần tính nhất quán.",
      "Vân gỗ vẫn hiện rõ, nhưng trong một lớp hoàn thiện ổn định và ít phụ thuộc kỹ năng thợ.",
      "Lotus tách riêng hệ nội thất và ngoại thất: cùng vẻ ngoài, khác về khả năng chống chịu môi trường.",
    ],
    material: "Gỗ tự nhiên & ván dán cho nội & ngoại thất sản lượng lớn",
    surface: "Bề mặt phẳng, đều màu, vẫn giữ vân — kiểm soát cao giữa các lô.",
    strength: "Ít phụ thuộc kỹ năng thợ, lý tưởng cho dây chuyền sản xuất.",
    cta: "Gửi ảnh hạng mục để Lotus tư vấn đúng hệ phun",
    image: procPhun,
    steps: [
      { product: "Phun lót — Lotus Wood Primer", note: "bịt lỗ, tăng bám dính" },
      { product: "Phun màu giữ vân — Lotus Wood Stain", note: "pha loãng, phun đều 1–2 lớp" },
      { product: "Phủ bóng — Lotus Acrylic Lacquer 2K", note: "(nội thất) hoặc PU ngoại thất (outdoor)" },
    ],
    stepsNote: "Tỷ lệ pha và súng phun phù hợp — nhắn Zalo để nhận hướng dẫn chi tiết",
  },
  {
    n: "III",
    slug: "mau-bet-mdf",
    tab: "Màu Bệt MDF",
    kicker: "Màu bệt · MDF",
    title: "Sơn màu bệt cho gỗ MDF",
    body: [
      "Màu bệt không cố biến MDF thành gỗ tự nhiên — nó tạo một bề mặt màu phẳng, sạch và hiện đại.",
      "Lớp sơn che nền đều, không loang, giữ độ bóng hoặc mờ nhất quán trên toàn sản phẩm.",
      "Hướng dành cho concept đương đại, nơi màu sắc và form chiếm vai trò chính — đẹp theo cách riêng của MDF.",
    ],
    material: "MDF — tủ bếp, tủ âm tường, cánh cửa, vách",
    surface: "Lớp màu phẳng, sạch, hiện đại — không loang, đồng màu toàn lô.",
    strength: "Pha màu theo RAL / NCS — đồng màu xuyên block dự án.",
    cta: "Nhắn Zalo để chọn màu bệt phù hợp với concept của bạn",
    image: procMdf,
    steps: [
      { product: "Lót che nền — Lotus MDF Primer", note: "che grain MDF, tăng bám" },
      { product: "Phun màu bệt — Lotus Topcoat", note: "màu đặc, phun 2 lớp" },
      { product: "Phủ hoàn thiện — Lotus Clear Coat", note: "chọn độ bóng: mờ / bán bóng / bóng cao" },
    ],
    stepsNote: "Có thể pha màu theo mã RAL / NCS — nhắn Zalo để kiểm tra màu",
  },
  {
    n: "IV",
    slug: "phu-bong-ngoai-troi",
    tab: "Phủ Bóng Ngoài Trời",
    kicker: "Phủ bóng · Ngoài trời",
    title: "Sơn phủ bóng chuyên dụng bảo vệ gỗ ngoài trời",
    body: [
      "Gỗ ngoài trời không chỉ cần đẹp khi mới — nó cần giữ vẻ đẹp đó qua nắng, mưa và độ ẩm thay đổi.",
      "Lớp phủ chuyên dụng của Lotus co giãn cùng gỗ, kháng UV và chống thấm mà không nứt hay bong tróc.",
      "Đây không phải hệ nội thất mang ra ngoài — mà là một hệ riêng, chọn theo mức tiếp xúc thực tế của hạng mục.",
    ],
    material: "Gỗ ngoài trời — lam, cửa, pergola, sàn sân vườn",
    surface: "Lớp phủ co giãn cùng gỗ, kháng UV, chống thấm — không nứt, bong.",
    strength: "Bền theo chu kỳ thời tiết, hạn chế bảo dưỡng định kỳ.",
    cta: "Gửi ảnh qua Zalo để Lotus chọn đúng lớp phủ theo môi trường",
    image: procBong,
    steps: [
      { product: "Xử lý bề mặt", note: "vệ sinh, xả nhám P180, làm sạch bụi" },
      { product: "Lót kháng UV — Lotus Outdoor Primer", note: "chống thấm, tăng bám" },
      { product: "Phủ bóng ngoài trời — Lotus Outdoor Topcoat", note: "kháng UV, co giãn, 2–3 lớp" },
    ],
    stepsNote: "Số lớp và chu kỳ bảo dưỡng phụ thuộc mức độ tiếp xúc thời tiết — nhắn Zalo để xác nhận",
  },
];




function ProcessEditorial() {
  return (
    <section id="quy-trinh" className="bg-background pt-12 pb-24 sm:pt-12 sm:pb-32 lg:pt-12 lg:pb-40">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        {/* Section opener */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
              Bốn hướng hoàn thiện
            </div>
            <h2 className="font-display mt-8 text-[2.25rem] font-light leading-[1.06] text-wood-900 sm:text-5xl lg:text-[3.5rem]">
              <span className="block">Mỗi bề mặt,</span>
              <span className="block italic font-normal text-wood-700">
                một quy trình riêng.
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6">
            Mỗi hệ sơn được chọn theo loại gỗ, môi trường sử dụng và yêu cầu
            bề mặt của xưởng — không phải theo can hay theo giá.
          </p>
        </div>

        {/* Tab nav — anchor scroll */}
        <nav
          aria-label="Bốn hướng hoàn thiện"
          className="mt-14 flex flex-wrap gap-x-2 gap-y-3 border-y border-wood-200 py-5 sm:mt-16"
        >
          {PROCESSES.map((p) => (
            <a
              key={p.slug}
              href={`#${p.slug}`}
              className="inline-flex items-center gap-2 rounded-full border border-wood-200 bg-background px-4 py-2 text-[12px] uppercase tracking-[0.18em] text-wood-700 transition-colors hover:border-wood-700 hover:text-wood-900"
            >
              <span className="font-display text-[13px] tracking-normal text-wood-400 whitespace-pre-wrap text-center">
                {p.n}
              </span>
              <span className="text-wood-300">·</span>
              {p.tab}
            </a>
          ))}
        </nav>

        {/* 4 panels — unified 2-col system, alternating sides */}
        <div className="mt-24 space-y-24 sm:mt-32 sm:space-y-28 lg:mt-40 lg:space-y-32">
          {PROCESSES.map((p, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <article
                key={p.n}
                id={p.slug}
                className="scroll-mt-24 grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`order-1 ${
                    imageLeft
                      ? "lg:order-1 lg:col-span-7 lg:col-start-1"
                      : "lg:order-2 lg:col-span-7 lg:col-start-6"
                  }`}
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`order-2 ${
                    imageLeft
                      ? "lg:order-2 lg:col-span-4 lg:col-start-9"
                      : "lg:order-1 lg:col-span-4 lg:col-start-1"
                  }`}
                >
                  <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-500">
                    <span className="font-display text-base not-italic tracking-normal text-wood-400">
                      {p.n}
                    </span>
                    <span className="mx-3 text-wood-300">·</span>
                    {p.kicker}
                  </div>

                  <h3 className="font-display mt-6 text-[1.7rem] font-light leading-[1.18] text-wood-900 sm:text-3xl lg:text-[2.1rem]">
                    {p.title}
                  </h3>

                  {/* Single lead line — no long paragraph */}
                  <p className="mt-5 text-[15px] leading-[1.7] text-wood-700/85">
                    {p.body[0]}
                  </p>

                  {/* Spec rows — scannable */}
                  <dl className="mt-7 divide-y divide-wood-200 border-t border-wood-200">
                    {[
                      { label: "Phù hợp cho", value: p.material },
                      { label: "Mục tiêu bề mặt", value: p.surface },
                      { label: "Điểm mạnh vận hành", value: p.strength },
                    ].map((row) => (
                      <div key={row.label} className="grid grid-cols-1 gap-1 py-3.5 sm:grid-cols-[140px_1fr] sm:gap-4">
                        <dt className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5">
                          {row.label}
                        </dt>
                        <dd className="text-[14px] leading-[1.55] text-wood-800">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>


                  <Accordion type="single" collapsible className="mt-7 border-t border-wood-200">
                    <AccordionItem value="steps" className="border-b-0">
                      <AccordionTrigger className="py-4 text-[11.5px] uppercase tracking-[0.18em] text-wood-700 hover:no-underline hover:text-wood-900">
                        Xem quy trình 3 bước →
                      </AccordionTrigger>
                      <AccordionContent className="pt-2">
                        <ol className="space-y-4">
                          {p.steps.map((s, idx) => (
                            <li key={idx} className="flex gap-4 text-[14px] leading-[1.7] text-wood-700">
                              <span className="font-display text-[13px] tracking-normal text-wood-400 pt-0.5">
                                {String(idx + 1).padStart(2, "0")}
                              </span>
                              <span>
                                <span className="font-medium text-wood-900">{s.product}</span>
                                <span className="text-wood-600"> — {s.note}</span>
                              </span>
                            </li>
                          ))}
                        </ol>
                        {p.stepsNote && (
                          <p className="mt-5 text-[13px] italic leading-[1.7] text-wood-600">
                            → {p.stepsNote}
                          </p>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>




                  <a
                    href={ZALO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-wood-700 transition-colors hover:text-wood-900"
                  >
                    {p.cta}
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
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
    note: "320 phòng · hệ phun giữ vân, đồng màu xuyên toàn lô",
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "MÀU BỆT · MDF",
    name: "Masterise Homes — The Global City",
    type: "Nội thất căn hộ cao cấp · TP. Thủ Đức · 2024",
    note: "500 bộ tủ bếp & tủ âm tường · flat color, không loang màu",
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "HỆ LAU · GỖ TỰ NHIÊN",
    name: "Xưởng xuất khẩu — Đơn hàng EU",
    type: "Bàn & ghế gỗ nguyên khối xuất khẩu · TP.HCM · 2023",
    note: "1.200 sản phẩm · lau giữ vân tự nhiên theo yêu cầu buyer Đức",
    image:
      "https://images.unsplash.com/photo-1611021061285-870b3b39de92?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "PHỦ BÓNG · NGOÀI TRỜI",
    name: "Biệt thự cao cấp — Dự án Sun Group",
    type: "Lam, cửa & sàn gỗ ngoại thất · Đà Nẵng · 2023",
    note: "Hệ phủ bóng kháng UV — bảo dưỡng 3 năm không bong tróc",
    image:
      "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "MÀU BỆT · MDF",
    name: "Novaland — Aqua City",
    type: "Tủ bếp & tủ âm tường · Đồng Nai · 2023",
    note: "800 bộ tủ bếp · đồng màu RAL xuyên 4 block",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=70",
  },
  {
    tag: "HỆ LAU · NỘI THẤT",
    name: "Chuỗi nhà hàng cao cấp — Saigon Centre",
    type: "Nội thất bàn ghế & vách ốp gỗ · TP.HCM · 2022",
    note: "Hệ lau nhiều lớp — giữ màu vân qua 2 năm vận hành",
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
              <div className="flex flex-col gap-1 p-4">
                <h3 className="font-display text-[14.5px] font-semibold leading-[1.25] text-wood-900">
                  {p.name}
                </h3>
                <p className="text-[11.5px] text-wood-600">{p.type}</p>
              </div>
            </article>
          ))}
        </div>


        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-3 text-center lg:mt-20">
          <p className="text-[14px] text-wood-700">
            Muốn xem thêm công trình thực tế?
          </p>
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-wood-900 transition-colors hover:text-wood-700"
          >
            NHẮN ZALO ĐỂ XEM THÊM CÔNG TRÌNH THỰC TẾ →
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
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
              Tư vấn riêng · 1:1
            </div>
            <h2 className="font-display mt-8 text-[2.4rem] font-light leading-[1.06] sm:text-5xl lg:text-[3.25rem]">
              <span className="block">Gửi ảnh mẫu gỗ hoặc hạng mục.</span>
              <span className="block italic font-normal text-wood-200">
                Nhận tư vấn kỹ thuật từ Lotus.
              </span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-wood-300">
              Không form, không báo giá tự động. Gửi ảnh mẫu gỗ hoặc hạng mục qua Zalo — Lotus xem trực tiếp và tư vấn đúng hệ theo loại gỗ, môi trường và yêu cầu kỹ thuật của xưởng bạn.
            </p>
            <ul className="mt-6 space-y-3 text-[14px] leading-[1.7] text-wood-400">
              <li className="flex gap-3">
                <span className="text-wood-500">·</span>
                <span>Phản hồi trong giờ làm việc — không để xưởng chờ lâu</span>
              </li>
              <li className="flex gap-3">
                <span className="text-wood-500">·</span>
                <span>Có thể gửi mẫu vật lý để Lotus kiểm tra trước khi tư vấn</span>
              </li>
              <li className="flex gap-3">
                <span className="text-wood-500">·</span>
                <span>Tư vấn kỹ thuật miễn phí — không phát sinh chi phí trước khi chốt hệ</span>
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
    q: "Sơn Lotus có TDS và MSDS không? Tôi cần hồ sơ cho đơn hàng xuất khẩu.",
    a: "Có. Toàn bộ sản phẩm đều có TDS (Technical Data Sheet) và MSDS (Material Safety Data Sheet) bằng tiếng Anh và tiếng Việt. Nhắn Zalo 0943 966 662 — chúng tôi gửi tài liệu trong giờ làm việc.",
  },
  {
    q: "Tôi nên chọn sơn lau hay sơn phun?",
    a: "Sơn lau cho cảm giác gỗ thật, vân có chiều sâu — hợp đồ gỗ tự nhiên trưng bày. Sơn phun cho bề mặt đều, ổn định và dùng được cho cả nội lẫn ngoại thất. Nếu phân vân, gửi ảnh — Lotus chọn giúp.",
  },
  {
    q: "Lotus có hỗ trợ thử mẫu vật lý trước khi lên đơn lớn không?",
    a: "Có. Lotus khuyến khích xưởng thử trên mẫu thực tế của xưởng để xác nhận màu, độ bóng và độ bám trước khi chốt số lượng lớn. Nhắn Zalo để sắp xếp.",
  },
  {
    q: "Làm số lượng lớn, làm sao đảm bảo bề mặt ổn định giữa các lô?",
    a: "Lotus kiểm soát đồng màu xuyên lô, theo dõi chất lượng giữa các đợt giao và sẵn sàng điều chỉnh khi điều kiện xưởng thay đổi — đây là cam kết cho sản lượng lớn và đơn hàng xuất khẩu.",
  },
  {
    q: "MDF có dùng cùng hệ với gỗ tự nhiên không?",
    a: "Không. MDF cần hệ màu bệt riêng để che nền và lên màu phẳng. Dùng sai hệ, bề mặt sẽ loang, bong và xuống cấp nhanh hơn nhiều so với tuổi thọ thật của vật liệu.",
  },
  {
    q: "Lotus có hỗ trợ kỹ thuật tại xưởng khi chuyển sang hệ nước không?",
    a: "Có. Lần đầu chuyển hệ, Lotus hỗ trợ trực tiếp tại xưởng: tỷ lệ pha, chỉnh súng phun, xử lý lỗi bề mặt — không để xưởng tự mò.",
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
            <Accordion type="single" collapsible className="divide-y divide-wood-200 border-t border-wood-200">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-0"
                >
                  <AccordionTrigger className="py-6 text-left font-display text-lg font-normal text-wood-900 hover:no-underline sm:text-xl">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 text-[14.5px] leading-[1.75] text-wood-700/85">
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
