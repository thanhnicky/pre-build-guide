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
      body: "Ảnh bề mặt gỗ, loại vật liệu và môi trường sử dụng — qua Zalo, không qua form trung gian.",
    },
    {
      icon: FileText,
      n: "02",
      title: "Đề xuất hệ + hồ sơ kỹ thuật",
      body: "Lotus đề xuất hệ phù hợp, gửi kèm TDS, MSDS và chứng nhận cần cho nghiệm thu hoặc buyer xuất khẩu.",
    },
    {
      icon: FlaskConical,
      n: "03",
      title: "Thử mẫu trước khi vào lô",
      body: "Thử trên mẫu thật của xưởng để xác nhận màu, độ bóng và độ bám trước khi chốt số lượng lớn.",
    },
    {
      icon: Wrench,
      n: "04",
      title: "Hỗ trợ kỹ thuật tại xưởng",
      body: "Lần đầu chuyển hệ, kỹ sư Lotus xuống xưởng: tỷ lệ pha, chỉnh súng phun, xử lý lỗi bề mặt.",
    },
    {
      icon: Truck,
      n: "05",
      title: "Cung ứng & theo dõi lô",
      body: "Giao theo tiến độ sản xuất, theo dõi chất lượng giữa các lô và điều chỉnh khi điều kiện xưởng thay đổi.",
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
      heading: "Vận hành gọn hơn",
      body: "Không cần pha thêm dung môi, yêu cầu thông gió đơn giản hơn PU.",
      punch: "Giảm tải chi phí phụ trợ trong xưởng.",
    },
    {
      n: "02",
      heading: "Chuyển hệ có người đi cùng",
      body: "Kỹ sư Lotus xuống xưởng lần đầu: chuẩn tỷ lệ pha, chỉnh súng phun, xử lý lỗi bề mặt.",
      punch: "Rút ngắn thời gian dò hệ.",
    },
    {
      n: "03",
      heading: "Sẵn cho nghiệm thu & xuất khẩu",
      body: "VOCs thấp theo tiêu chuẩn quốc tế, có TDS / MSDS song ngữ — phù hợp dự án cao cấp và buyer Mỹ, EU, Nhật.",
      punch: "Hồ sơ đầy đủ — giảm vướng khi nghiệm thu.",
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
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pt-12 pb-10 sm:px-10 sm:pt-20 sm:pb-14 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:pt-24 lg:pb-16">
        {/* Left — typography */}
        <div className="lg:col-span-5 lg:pt-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
            SƠN GỖ HỆ NƯỚC · CHO XƯỞNG NỘI THẤT & NHÀ MÁY SẢN XUẤT
          </div>

          <h1 className="font-display mt-6 text-[2.5rem] font-light leading-[1.05] text-wood-900 sm:mt-7 sm:text-[3.5rem] lg:text-[3rem] lg:leading-[1.08]">
            <span className="block">Sơn gỗ hệ nước cho</span>
            <span className="block italic font-normal text-wood-700">
              xưởng nội thất công trình &amp; đơn hàng xuất khẩu.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-[15.5px] leading-[1.65] text-wood-700/85">
            Hồ sơ kỹ thuật song ngữ, pha màu RAL / NCS, kỹ sư Lotus hỗ trợ
            trực tiếp tại xưởng — bề mặt ổn định từ mẫu đầu đến lô cuối.
          </p>

          {/* Trust strip */}
          <div className="mt-6">
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

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-wood-900 px-7 py-4 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-background shadow-md shadow-wood-900/10 transition-all hover:bg-wood-700 hover:shadow-lg sm:w-auto"
            >
              <Camera className="h-4 w-4" strokeWidth={1.75} />
              Gửi ảnh mẫu — nhận tư vấn
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
    title: "Hệ lau — giữ vân gỗ tự nhiên",
    body: [
      "Thấm vào thớ gỗ, tôn vân thật thay vì che phủ — bề mặt ấm, có chiều sâu.",
      "Bề mặt ấm, có chiều sâu, vẫn giữ nguyên cảm giác chạm vào gỗ thật.",
      "Khác với hệ phun tạo lớp kín đều, sơn lau để gỗ 'sống' — nơi chính chất liệu là điểm nhấn.",
    ],
    material: "Gỗ tự nhiên: sồi, óc chó, tần bì — đồ trưng bày, handcraft.",
    surface: "Vân gỗ rõ, bề mặt ấm, có chiều sâu khi chạm.",
    strength: "Phù hợp đơn xuất khẩu EU / Mỹ ưu tiên cảm giác tự nhiên.",
    cta: "Nhắn Zalo gửi ảnh hạng mục để chọn đúng hệ lau",
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
    title: "Hệ phun — nội & ngoại thất sản lượng lớn",
    body: [
      "Bề mặt phẳng, đều màu — chuẩn cho sản xuất hàng loạt và dự án nhiều block.",
      "Vân gỗ vẫn hiện rõ trong một lớp hoàn thiện ổn định, ít phụ thuộc kỹ năng thợ.",
      "Tách riêng hệ nội thất và ngoại thất: cùng vẻ ngoài, khác về khả năng chống chịu môi trường.",
    ],
    material: "Gỗ tự nhiên & ván dán — nội & ngoại thất, sản lượng lớn.",
    surface: "Đều màu, phẳng, giữ vân — đồng nhất giữa các lô.",
    strength: "Ít phụ thuộc tay thợ, dễ kiểm soát theo dây chuyền.",
    cta: "Gửi ảnh hạng mục để tư vấn đúng hệ phun (nội / ngoại)",
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
    title: "Màu bệt — hệ chuyên cho MDF",
    body: [
      "Màu phẳng, sạch, hiện đại — không giả vân gỗ, giữ độ bóng nhất quán toàn sản phẩm.",
      "Lớp sơn che nền đều, không loang, giữ độ bóng hoặc mờ nhất quán trên toàn sản phẩm.",
      "Hướng dành cho concept đương đại, nơi màu sắc và form chiếm vai trò chính.",
    ],
    material: "MDF — tủ bếp, tủ âm tường, cánh cửa, vách trang trí.",
    surface: "Màu phẳng, đặc — chọn mờ / bán bóng / bóng cao.",
    strength: "Pha theo RAL / NCS — đồng màu giữa các block.",
    cta: "Nhắn Zalo gửi mã màu RAL / NCS để Lotus kiểm tra",
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
    title: "Phủ bóng ngoài trời — hệ chuyên cho thời tiết",
    body: [
      "Kháng UV và chống thấm, co giãn cùng gỗ — bền theo chu kỳ nắng, mưa, độ ẩm.",
      "Co giãn cùng gỗ, hạn chế nứt và bong tróc theo chu kỳ thời tiết.",
      "Đây là một hệ riêng — không phải hệ nội thất mang ra ngoài.",
    ],
    material: "Lam, cửa, pergola, sàn sân vườn — hạng mục outdoor.",
    surface: "Lớp phủ co giãn, kháng UV, chống thấm.",
    strength: "Ổn định theo chu kỳ thời tiết, giảm tần suất bảo dưỡng.",
    cta: "Gửi ảnh hạng mục để chọn đúng lớp phủ theo môi trường",
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
    <section id="quy-trinh" className="bg-background pt-12 pb-20 sm:pt-12 sm:pb-24 lg:pt-12 lg:pb-28">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        {/* Section opener */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
              Các hệ hoàn thiện chính cho xưởng
            </div>
            <h2 className="font-display mt-8 text-[2.25rem] font-light leading-[1.06] text-wood-900 sm:text-5xl lg:text-[3.5rem]">
              <span className="block">Mỗi bề mặt,</span>
              <span className="block italic font-normal text-wood-700">
                một hệ sơn riêng.
              </span>
            </h2>
          </div>
          <p className="text-[15px] leading-[1.7] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6">
            Hệ được chọn theo loại gỗ, môi trường sử dụng và yêu cầu bề mặt —
            không chọn theo can hay theo giá.
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
        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-24 lg:mt-24 lg:space-y-24">
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
    a: "Lotus theo dõi đồng màu giữa các lô, kiểm tra chất lượng từng đợt giao và điều chỉnh khi điều kiện xưởng thay đổi — quy trình chuẩn cho sản lượng lớn và đơn xuất khẩu.",
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
