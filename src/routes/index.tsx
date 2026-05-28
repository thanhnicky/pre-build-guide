import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowUpRight, ShieldCheck, Leaf, CheckCircle, Wind, ChevronLeft, ChevronRight, ChevronDown, Factory, Ship, Camera, FileText, FlaskConical, Wrench, Truck, X } from "lucide-react";
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
import sanGoTruoc from "@/assets/san-go-truoc-khi-bao-duong.jpg";
import sanGoSau from "@/assets/san-go-truoc-sau-khi-son-bao-duong.jpg";
import kiemTraMau from "@/assets/kiem-tra-mau-thuc-te.jpg";
import kysuHoTro from "@/assets/ky-su-ho-tro-giai-doan-dau.jpg";
import dongHanh from "@/assets/dong-hanh-cung-nha-may.jpg";
import congTrinhSonGo from "@/assets/cong-trinh-son-go-ngoai-troi-lotus.jpg";
import nhaMayDonHang from "@/assets/nha-may-don-hang-xk.jpg";
import thuMauTruocLo from "@/assets/thu-mau-truoc-khi-vao-lo.jpg";
import hoTroKyThuat from "@/assets/ho-tro-ky-thuat-tai-xuong.jpg";
import cungUngTienDo from "@/assets/cung-ung-theo-doi-tien-do.jpg";
import sonAnToanXK from "@/assets/son-an-toan-noi-that-xuat-khau-09.jpeg";
import heroWood from "@/assets/hero-wood.jpg";
import procLau from "@/assets/proc-lau.jpg";
import procPhun from "@/assets/proc-phun.jpg";
import procMdf from "@/assets/proc-mdf.jpg";
import procBong from "@/assets/proc-bong.jpg";
import keoTramTret from "@/assets/keo-tram-tret-go-lotus-wood-filler.png";
import sonLot from "@/assets/son-lot-lap-tim-va-lam-phang-go-lotus-sanding-sealer.png";
import heGiVan from "@/assets/son-tao-mau-go-va-hoan-thien-go-noi-that-lotus-woodstain-finish-interior.png";
import heMauBet from "@/assets/son-phu-mau-go-noi-that-lotus-wood-paint-indoor.png";
import heBaoVeNgoaiThat from "@/assets/son-phu-acrylic-lacquer-ngoai-that-lotus-lacquer-exterior.png";
import heSon2K from "@/assets/2k- lacquer 2k72 out door-1.png";
import sonPhunWeb from "@/assets/son-phun-lotus-web.webp";
import sonLauWeb from "@/assets/son-lau-lotus-web.jpg";
import mauBetGoTuNhien from "@/assets/mau-bet-go-tu-nhien.jpg";
import sonBetMdfLotus from "@/assets/son-bet-mdf-lotus.jpg";
import paletteLau from "@/assets/palette-lau.png";
import palettePhun from "@/assets/palette-phun.png";
import paletteBet from "@/assets/palette-bet.png";
import pullmanPhuQuoc from "@/assets/pullman-phu-quoc-lt.jpg";
import masteriseHn from "@/assets/masterise-hn-lt.webp";
import grandMarinaSaigon from "@/assets/grand-marina-saigon-lt.webp";
import nhaMayCasta from "@/assets/nha-may-casta.png";
import pacificFur from "@/assets/pacific-fur.jpg";
import aeonLongan from "@/assets/aeon-longan.webp";
import aeonTanAn from "@/assets/aeon-tan-an.jpg";
import logoMasteriseHome from "@/assets/logo-masterise-home.png";
import logoNemFur from "@/assets/logo-nem-fur.png";
import logoNovaland from "@/assets/logo-novaland.png";
import logoPrime from "@/assets/logo-prime.png";
import logoPullman from "@/assets/logo-pullman.png";
import logoAlc from "@/assets/logo-alc.png";
import logoScg from "@/assets/logo-scg.jpg";
import logoSofitels from "@/assets/logo-Sofitels.jpg";

const ZALO = "https://zalo.me/0943966662";

const PARTNERS = [
  { src: logoMasteriseHome, alt: "Masterise Homes" },
  { src: logoNemFur, alt: "NEM Furniture" },
  { src: logoNovaland, alt: "Novaland" },
  { src: logoPrime, alt: "Prime" },
  { src: logoPullman, alt: "Pullman" },
  { src: logoAlc, alt: "ALC" },
  { src: logoScg, alt: "SCG" },
  { src: logoSofitels, alt: "Sofitel" },
];

// ─── PHOTO CONSTANTS ── TODO: replace (placeholder) with actual Lotus photos ──
const heroMainImage      = heroImg;           // (real) finished wood surface
const heroSampleImage    = sanGoTruoc;        // (real) sàn gỗ cũ trước khi sơn
const heroSupportImage   = sanGoSau;          // (real) sàn gỗ đã được sơn Lotus
const proofTestImage     = kiemTraMau;        // (real) kiểm tra màu sắc trước khi sản xuất
const proofEngineerImage = kysuHoTro;         // (real) kỹ sư Lotus hỗ trợ kỹ thuật
const proofFinishedImage = dongHanh;          // (real) đồng hành cùng nhà máy sản xuất
const audienceFactoryImage  = congTrinhSonGo;    // (real) công trình sơn gỗ ngoại trời Lotus
const audienceExportImage   = nhaMayDonHang;     // (real) nhà máy đơn hàng xuất khẩu
const whyWaterVisual1    = heroWood;          // (placeholder) → workshop / surface shot
const whyWaterVisual2    = procPhun;          // (placeholder) → spray technique
const techStep3Image     = thuMauTruocLo;     // (real) thử mẫu trước khi vào lô
const techStep4Image     = hoTroKyThuat;      // (real) hỗ trợ kỹ thuật tại xưởng
const techStep5Image     = cungUngTienDo;     // (real) cung ứng theo dõi tiến độ
const ctaSupportImage    = sonAnToanXK;       // (real) sơn an toàn nội thất xuất khẩu

export const Route = createFileRoute("/")({
  component: LotusLanding,
  head: () => ({
    meta: [
      { title: "Lotus - Sơn Gỗ Hệ Nước" },
      {
        name: "description",
        content:
          "Sơn Lotus là giải pháp sơn gỗ hệ nước chuyên dành cho xưởng sản xuất nội thất và nhà máy nội thất xuất khẩu, giúp giảm mùi dung môi trong quá trình sản xuất, nâng cao môi trường làm việc và đáp ứng xu hướng vật liệu an toàn.",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Sơn gỗ hệ nước Lotus có ưu điểm gì so với sơn PU?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sơn gỗ hệ nước Lotus có ưu điểm: VOCs thấp, mùi nhẹ, an toàn cho sức khỏe, không cần pha dung môi nhiều, vận hành gọn hơn, phù hợp xưởng kín, có hồ sơ kỹ thuật TDS/MSDS đầy đủ, đáp ứng tiêu chuẩn xuất khẩu Mỹ, EU, Nhật."
              }
            },
            {
              "@type": "Question",
              "name": "Lotus có hỗ trợ kỹ thuật khi chuyển sang hệ nước không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có, kỹ sư Lotus hỗ trợ trực tiếp tại xưởng từ lần chạy đầu tiên: hỗ trợ tỷ lệ pha, chỉnh súng phun, xử lý lỗi bề mặt, và theo dõi độ ổn định giữa các đợt giao hàng."
              }
            },
            {
              "@type": "Question",
              "name": "Sơn gỗ Lotus có đạt chứng nhận quốc tế không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có, sơn gỗ Lotus đáp ứng nhiều chứng nhận quốc tế: EN71-3 (an toàn đồ chơi trẻ em), ASTM F963 (tiêu chuẩn Hoa Kỳ), FDA (tiếp xúc gián tiếp thực phẩm), RoHS (giới hạn chất độc hại), Low VOCs."
              }
            },
            {
              "@type": "Question",
              "name": "Lotus phù hợp với loại hình xưởng nào?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Lotus phù hợp với 2 loại hình chính: Xưởng nội thất công trình (thi công căn hộ, khách sạn, văn phòng cao cấp) và Nhà máy/đơn hàng xuất khẩu (sản xuất đồ gỗ xuất khẩu sang Mỹ, EU, Nhật Bản)."
              }
            },
            {
              "@type": "Question",
              "name": "Cách nhận tư vấn hệ sơn phù hợp từ Lotus?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gửi ảnh bề mặt, loại gỗ, môi trường sử dụng và yêu cầu hoàn thiện qua Zalo 0943 966 662. Kỹ sư Lotus sẽ đề xuất hệ phù hợp và gửi kèm hồ sơ kỹ thuật TDS/MSDS khi cần."
              }
            }
          ]
        })
      }
    ]
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
        {/* 2b. Proof gallery */}
        <ProofGallery />
        {/* 3. Audience */}
        <AudienceSection />
        {/* 4. Why Water */}
        <WhyWaterSection />
        {/* 5. Finish Finder */}
        <FinishFinder onInteractionChange={setIsSelectorInteracting} />
        {/* 5b. Products */}
        <ProductsSection />
        {/* 6. Tech Collaboration */}
        <TechCollaborationSection />
        {/* 7. Certifications */}
        <CertificationsSection />
        {/* 8. Lookbook */}
        <Lookbook />
        {/* 9. Partners */}
        <PartnersSection />
        {/* 10. FAQ */}
        <FAQ />
        {/* 11. Consult */}
        <ConsultBlock />
      </main>
      <Footer />
      <StickyMobileCTA reducedDominance={isSelectorInteracting} />
      <StickyZalo />
    </>
  );
}

/* ============================================================
   AUDIENCE — Who is Lotus for
   ============================================================ */
function AudienceSection() {
  const { t } = useTranslation();
  const audiences = [
    {
      icon: Factory,
      image: audienceFactoryImage, // TODO: replace with actual interior construction photo
      title: t("audience.factory.title"),
      lead: t("audience.factory.lead"),
      bullets: t("audience.factory.bullets", { returnObjects: true }) as string[],
      tags: t("audience.factory.tags", { returnObjects: true }) as string[],
    },
    {
      icon: Ship,
      image: audienceExportImage, // TODO: replace with actual factory/export production photo
      title: t("audience.export.title"),
      lead: t("audience.export.lead"),
      bullets: t("audience.export.bullets", { returnObjects: true }) as string[],
      tags: t("audience.export.tags", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section id="phu-hop" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]">
              {t("audience.label")}
            </div>
            <h2 className="font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]">
              <span className="block">{t("audience.title")}</span>
              <span className="block italic font-normal text-wood-700">
                {t("audience.titleItalic")}
              </span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6 sm:text-[18px]">
            {t("audience.description")}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="flex flex-col overflow-hidden rounded-lg border border-wood-200/60 bg-[#F5F0EA]"
            >
              {/* Context image — TODO: swap a.image for real audience photo */}
              <div className="relative aspect-[16/7] overflow-hidden bg-wood-200/30">
                <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover object-center" />
              </div>
              <div className="flex flex-col gap-6 p-7 sm:p-9">
              {/* Header */}
              <div className="flex items-center gap-3">
                <a.icon className="h-6 w-6 text-wood-700" strokeWidth={1.5} />
              </div>

              {/* Title + 1-line lead */}
              <div>
                <h3 className="font-display text-[1.5rem] font-medium leading-[1.2] text-wood-900 sm:text-[1.7rem]">
                  {a.title}
                </h3>
                <p className="mt-3 text-[16px] leading-[1.6] text-wood-700/85 sm:text-[17px]">
                  {a.lead}
                </p>
              </div>

              {/* 3 scannable bullets */}
              <ul className="space-y-2.5 border-t border-wood-300/40 pt-5">
                {a.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-[16px] leading-[1.6] text-wood-800">
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
                    className="font-display rounded-full bg-wood-700 px-2.5 py-1 text-[12px] font-medium uppercase tracking-[0.12em] text-[#F5F0EA] sm:text-[13px]"
                  >
                    {t}
                  </span>
                ))}
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
   TECH COLLABORATION — Technical collaboration process
   ============================================================ */
function TechCollaborationSection() {
  const { t } = useTranslation();
  const steps = [
    { icon: Camera,      n: "01", title: t("tech.step1.title"), body: t("tech.step1.body"), image: "", imageCaption: "" },
    { icon: FileText,    n: "02", title: t("tech.step2.title"), body: t("tech.step2.body"), image: "", imageCaption: "" },
    {
      icon: FlaskConical, n: "03", title: t("tech.step3.title"), body: t("tech.step3.body"),
      image: techStep3Image, // TODO: replace with actual sample-board / color-test photo
      imageCaption: "Bảng mẫu test màu thực tế trước khi vào lô",
    },
    {
      icon: Wrench, n: "04", title: t("tech.step4.title"), body: t("tech.step4.body"),
      image: techStep4Image, // TODO: replace with actual engineer directing spray at workshop
      imageCaption: "Kỹ sư chỉnh hệ — hướng dẫn phun tại xưởng",
    },
    {
      icon: Truck, n: "05", title: t("tech.step5.title"), body: t("tech.step5.body"),
      image: techStep5Image, // TODO: replace with actual paint supply / warehouse photo
      imageCaption: "Cung ứng đúng tiến độ sản xuất",
    },
  ];

  return (
    <section id="phoi-hop" className="bg-[#F5F0EA] py-20 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]">
              {t("tech.label")}
            </div>
            <h2 className="font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]">
              <span className="block">{t("tech.title")}</span>
              <span className="block italic font-normal text-wood-700">
                {t("tech.titleItalic")}
              </span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6 sm:text-[18px]">
            {t("tech.description")}
          </p>
        </div>

        {/* Steps 01 & 02 — text-only cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2">
          {steps.slice(0, 2).map((s) => (
            <div key={s.n} className="flex flex-col gap-4 rounded-lg border border-wood-200/60 bg-background p-6">
              <div className="font-display text-[2.5rem] font-light leading-none text-wood-200 lg:text-[3rem]">{s.n}</div>
              <div className="flex items-start gap-3 -mt-2">
                <s.icon className="h-5 w-5 shrink-0 text-wood-700 mt-0.5" strokeWidth={1.5} />
                <h3 className="font-display text-[16px] font-semibold leading-[1.3] text-wood-900 sm:text-[17px]">{s.title}</h3>
              </div>
              <p className="text-[16px] leading-[1.65] text-wood-700/85">{s.body}</p>
            </div>
          ))}
        </div>

        {/* Steps 03–05 — storytelling: text one side, image the other, alternating */}
        {/* TODO: replace step images with actual Lotus process photos */}
        <div className="mt-5 flex flex-col gap-5">
          {steps.slice(2).map((s, idx) => {
            const textLeft = idx % 2 === 0;
            return (
              <div key={s.n} className="overflow-hidden rounded-lg border border-wood-200/60 bg-background">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className={`flex flex-col gap-4 p-7 sm:p-9 ${textLeft ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="font-display text-[2.5rem] font-light leading-none text-wood-200 lg:text-[3rem]">{s.n}</div>
                    <div className="flex items-start gap-3 -mt-2">
                      <s.icon className="h-5 w-5 shrink-0 text-wood-700 mt-0.5" strokeWidth={1.5} />
                      <h3 className="font-display text-[16px] font-semibold leading-[1.3] text-wood-900 sm:text-[17px]">{s.title}</h3>
                    </div>
                    <p className="text-[16px] leading-[1.65] text-wood-700/85">{s.body}</p>
                  </div>
                  <div className={`relative aspect-[4/3] overflow-hidden bg-wood-200/30 ${textLeft ? "lg:order-2" : "lg:order-1"}`}>
                    <img src={s.image} alt={s.imageCaption} loading="lazy" className="h-full w-full object-cover object-center" />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-4 pb-3 pt-10">
                      <p className="text-[11px] font-medium tracking-wide text-white/90">{s.imageCaption}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

/* ============================================================
   PARTNERS
   ============================================================ */
function PartnersSection() {
  const { t } = useTranslation();
  const partners = [
    { src: logoMasteriseHome, alt: "Masterise Homes", variant: "logo--wide logo--masterise" },
    { src: logoNemFur, alt: "Nem Furniture", variant: "logo--nem-fur" },
    { src: logoNovaland, alt: "Novaland", variant: "logo--wide" },
    { src: logoPrime, alt: "Prime" },
    { src: logoPullman, alt: "Pullman", variant: "logo--has-bg logo--pullman" },
    { src: logoAlc, alt: "ALC" },
    { src: logoScg, alt: "SCG", variant: "logo--has-bg logo--scg" },
    { src: logoSofitels, alt: "Sofitels", variant: "logo--has-bg logo--sofitels" },
  ];

  const scrollerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-logo-card]");
    const step = card ? card.offsetWidth + 24 : 200;
    const multiplier = window.innerWidth < 640 ? 3 : 2;
    el.scrollBy({ left: dir * step * multiplier, behavior: "smooth" });
  };

  return (
    <section className="bg-[#F5F0EA] py-12">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 text-center">
        <p className="text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]">
          {t("partners.label")}
        </p>

        <div className="relative mt-10">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            aria-label="Cuộn trái"
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 flex h-8 w-8 items-center justify-center rounded-full bg-wood-700/50 text-[#F5F0EA] shadow-sm transition-colors hover:bg-wood-700/70 sm:h-10 sm:w-10"
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
                className={`${p.variant || ""} logo-item snap-start shrink-0 flex min-h-[156px] w-[calc((100%-1rem)/2)] items-center justify-center rounded-lg border border-wood-200/60 bg-[#F5F0EA] p-6 sm:w-[160px] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-4.5rem)/4)]`}
                title={p.alt}
              >
                {failed[p.alt] ? (
                  <span className="text-[12px] font-medium text-wood-600 text-center leading-tight sm:text-[13px]">
                    {p.alt}
                  </span>
                ) : (
                  <div className="logo-mark">
                    <img
                      src={p.src}
                      alt={p.alt}
                      className="max-w-full max-h-[62px] w-auto h-auto object-contain"
                      onError={() => setFailed((f) => ({ ...f, [p.alt]: true }))}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollBy(1)}
            aria-label="Cuộn phải"
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1 sm:translate-x-3 flex h-8 w-8 items-center justify-center rounded-full bg-wood-700/50 text-[#F5F0EA] shadow-sm transition-colors hover:bg-wood-700/70 sm:h-10 sm:w-10"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-[17px] leading-[1.75] text-wood-700/85 sm:text-[18px]">
          {t("partners.description")}
        </p>

        <div className="mx-auto mt-16 w-16 border-b border-wood-300/40" />
      </div>
    </section>
  );
}

/* ============================================================
   PROOF GALLERY — 3-image mini proof after trust bar
   ============================================================ */
function ProofGallery() {
  const items = [
    {
      image: proofTestImage,
      caption: "Kiểm tra màu sắc trước khi sản xuất",
      alt: "Kiểm tra màu sắc thực tế trước khi vào lô sản xuất — Lotus Paint",
    },
    {
      image: proofEngineerImage,
      caption: "Hỗ trợ kỹ thuật từ giai đoạn làm mẫu",
      alt: "Kỹ sư Lotus hỗ trợ kỹ thuật trực tiếp tại xưởng nội thất",
    },
    {
      image: proofFinishedImage,
      caption: "Đồng hành cùng nhà máy sản xuất",
      alt: "Lotus đồng hành cùng nhà máy sản xuất nội thất trong suốt quá trình",
    },
  ];
  return (
    <section className="bg-background pb-16 sm:pb-20">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {items.map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-lg ring-1 ring-wood-200/50">
              <div className="relative aspect-[4/3] overflow-hidden bg-wood-200/30">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="border-t border-wood-200/50 px-4 py-3">
                <p className="font-display text-[13px] font-medium text-wood-700 sm:text-[14px]">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TRUST BAR
   ============================================================ */
function TrustBar() {
  const { t } = useTranslation();
  return (
    <section className="border-y border-wood-200 bg-background pt-12 pb-10 sm:pt-12 sm:pb-14">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-2 items-start gap-6 text-center lg:grid-cols-4 lg:gap-10">
          {[
            { k: "200+", v: t("trust.stat1Label") },
            { k: "12+", v: t("trust.stat2Label") },
            { v: t("trust.consult") },
            { v: t("trust.custom") },
          ].map((s, i) => (
            <div key={i} className="flex h-full flex-col justify-center">
              {s.k ? (
                <>
                  <div className="font-display text-[2.25rem] font-semibold text-wood-900 sm:text-[2.75rem]">
                    {s.k}
                  </div>
                  <div className="mt-2 font-display text-[14px] font-medium uppercase tracking-[0.16em] text-wood-500 sm:text-[15px]">
                    {s.v}
                  </div>
                </>
              ) : (
                <div className="font-display text-[14px] font-medium uppercase tracking-[0.16em] text-wood-500 sm:text-[15px]">
                  {s.v}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Customer logo trust strip */}
        <div className="mt-8 border-t border-wood-200/50 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10">
            {PARTNERS.map((p) => (
              <img
                key={p.alt}
                src={p.src}
                alt={p.alt}
                className="h-8 w-auto max-w-[122px] object-contain opacity-[0.55] grayscale transition-opacity duration-200 hover:opacity-[0.85] sm:h-12 sm:max-w-[152px]"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   TIÊU CHUẨN & CHỨNG NHẬN
   ============================================================ */
function CertificationsSection() {
  const { t } = useTranslation();
  const badges = [
    {
      icon: ShieldCheck,
      code: "EN71-3: 2019 + A1:2021",
      name: t("certifications.cert1.name"),
      tag: t("certifications.cert1.tag"),
    },
    {
      icon: ShieldCheck,
      code: "ASTM F963-17",
      name: t("certifications.cert2.name"),
      tag: t("certifications.cert2.tag"),
    },
    {
      icon: CheckCircle,
      code: "FDA 21 CFR 178.3800",
      name: t("certifications.cert3.name"),
      tag: t("certifications.cert3.tag"),
    },
    {
      icon: Leaf,
      code: "RoHS Compliant",
      name: t("certifications.cert4.name"),
      tag: t("certifications.cert4.tag"),
    },
    {
      icon: Wind,
      code: "Low VOCs · Không Formaldehyde bổ sung",
      name: t("certifications.cert5.name"),
      tag: t("certifications.cert5.tag"),
    },
  ];

  return (
    <section id="tieu-chuan" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        {/* Heading row */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]">
              {t("certifications.label")}
            </div>
            <h2 className="font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]">
              <span className="block">{t("certifications.title")}</span>
              <span className="block italic font-normal text-wood-700">{t("certifications.titleItalic")}</span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.7] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6 sm:text-[18px]">
            {t("certifications.description")}
          </p>
        </div>

        {/* Credential bar — quick-scan codes */}
        <ul className="mt-10 flex flex-wrap gap-2">
          {badges.map((b) => (
            <li
              key={`pill-${b.code}`}
              className="font-display rounded-full border border-wood-300/70 bg-[#F5F0EA] px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-wood-800 sm:text-[14px]"
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
                <div className="font-display text-[16px] font-semibold leading-tight text-wood-900 sm:text-[17px]">
                  {b.code}
                </div>
                <div className="mt-1 text-[15px] leading-[1.5] text-wood-600 sm:text-[16px]">
                  {b.name}
                </div>
                <div className="font-display mt-2.5 inline-block rounded-full bg-wood-700 px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#F5F0EA] sm:text-[12px]">
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
  const { t } = useTranslation();
  const cols = [
    {
      n: "01",
      heading: t("whyWater.col1.heading"),
      body: t("whyWater.col1.body"),
      punch: t("whyWater.col1.punch"),
    },
    {
      n: "02",
      heading: t("whyWater.col2.heading"),
      body: t("whyWater.col2.body"),
      punch: t("whyWater.col2.punch"),
    },
    {
      n: "03",
      heading: t("whyWater.col3.heading"),
      body: t("whyWater.col3.body"),
      punch: t("whyWater.col3.punch"),
    },
    {
      n: "04",
      heading: t("whyWater.col4.heading"),
      body: t("whyWater.col4.body"),
      punch: t("whyWater.col4.punch"),
    },
  ];


  return (
    <section className="bg-[#F5F0EA] py-20 sm:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]">
          {t("whyWater.label")}
        </div>
        <h2 className="font-display mt-8 max-w-3xl text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]">
          <span className="block">{t("whyWater.title")}</span>
          <span className="block italic font-normal text-wood-700">
            {t("whyWater.titleItalic")}
          </span>
        </h2>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4">
          {cols.map((c) => (
            <div
              key={c.heading}
              className="flex flex-col gap-4 rounded-lg border border-wood-200/60 bg-background p-7"
            >
              <div className="font-display text-[2.5rem] font-light leading-none text-wood-200 lg:text-[3rem]">{c.n}</div>
              <h3 className="font-display text-[18px] font-medium leading-[1.25] text-wood-900">{c.heading}</h3>
              <p className="text-[15px] leading-[1.65] text-wood-700/85 sm:text-[16px]">{c.body}</p>
              <p className="font-display mt-auto border-t border-wood-200 pt-4 text-[15px] font-semibold uppercase tracking-[0.08em] text-wood-900 sm:text-[16px]">
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
  const { t } = useTranslation();
  const trust = ["TDS / MSDS", "EN71-3", "ASTM F963", "FDA", "RoHS"];
  return (
    <section className="relative bg-[oklch(0.97_0.015_82)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pt-12 pb-10 sm:px-10 sm:pt-20 sm:pb-14 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:pt-24 lg:pb-16">
        {/* Left — typography */}
        <div className="lg:col-span-5 lg:pt-12">
          <div className="text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]">
            {t("hero.subtitle")}
          </div>

          <h1 className="font-display mt-6 text-[2.25rem] font-light leading-[1.08] text-wood-900 sm:mt-7 sm:text-[3rem] lg:text-[3.5rem]">
            <span className="block">{t("hero.title")}</span>
            <span className="block italic font-normal text-wood-700">
              {t("hero.titleItalic")}
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[17px] leading-[1.7] text-wood-700/85 sm:mt-5 sm:text-[18px]">
            {t("hero.description")}
          </p>

          {/* Trust strip */}
          <div className="mt-6 block">
            <div className="font-display text-[12px] font-medium uppercase tracking-[0.2em] text-wood-500 sm:text-[13px]">
              {t("hero.trustLabel")}
            </div>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {trust.map((t) => (
                <li
                  key={t}
                  className="font-display rounded-full border border-wood-300/70 bg-background/60 px-2.5 py-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-wood-800 sm:text-[14px]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 flex flex-col items-start gap-3 sm:mt-8">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-wood-900 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-background shadow-md shadow-wood-900/10 transition-all hover:bg-wood-700 hover:shadow-lg sm:w-auto sm:text-[13px] whitespace-nowrap"
            >
              <Camera className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
              {t("hero.ctaButton")}
              <ArrowUpRight className="h-3 w-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:0943966662"
              className="text-[15px] font-medium tracking-wide text-wood-700 transition-colors hover:text-wood-900 whitespace-nowrap sm:text-[16px]"
            >
              {t("hero.ctaPhone")} <span className="underline underline-offset-4">0943 966 662</span>
            </a>
          </div>
        </div>

        {/* Right — image collage (1 main + 2 small) */}
        {/* TODO: replace heroMainImage, heroSampleImage, heroSupportImage with actual Lotus photos */}
        <div className="lg:col-span-7">
          {/* Main image */}
          <div className="relative overflow-hidden rounded-sm bg-wood-200/40 aspect-[16/10] sm:aspect-[4/3]">
            <img
              src={heroMainImage}
              alt="Bề mặt gỗ hoàn thiện bằng sơn hệ nước Lotus — vân rõ, màu đồng đều"
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-10">
              <p className="text-[11px] font-medium tracking-wide text-white/90">Bề mặt hoàn thiện giữ vân, đồng đều màu</p>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}

/* ============================================================
   FINISH FINDER — Coating system selector
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

interface ColorSwatch {
  name: string;
  code: string;
  hex: string;
}

interface CoatingSystem {
  title: string;
  suitableFor: string;
  notes?: string;
  methodType: "single" | "dual";
  colorType: "grain" | "solid";
  colors?: ColorSwatch[];
  singleMethod?: {
    process: string;
    representativeProducts: string[];
    image: string;
    notes?: string;
    fullChartImage?: string;
  };
  methodLau?: {
    process: string;
    representativeProducts: string[];
    image: string;
    notes?: string;
    fullChartImage?: string;
  };
  methodPhun?: {
    process: string;
    representativeProducts: string[];
    image: string;
    notes?: string;
    fullChartImage?: string;
  };
}

function resolveCoatingSystem(
  surface: Surface,
  location: Location,
  naturalFinish: NaturalFinish | null,
  t: (key: string) => string,
): CoatingSystem {
  // 1) Gỗ tự nhiên / Veneer + Trong nhà + Giữ vân (dual-method)
  if (surface === "natural" && naturalFinish === "grain" && location === "indoor") {
    return {
      title: t("finishFinder.system1.title"),
      suitableFor: t("finishFinder.system1.suitableFor"),
      methodType: "dual",
      colorType: "grain",
      colors: [
        { name: "Sồi sáng", code: "Oak Light", hex: "#C9A87C" },
        { name: "Óc chó", code: "Walnut", hex: "#4D2A16" },
        { name: "Gỗ mun", code: "Ebony", hex: "#261710" },
        { name: "Anh đào", code: "Cherry", hex: "#B84528" },
        { name: "Teak", code: "Teak", hex: "#D4BB8C" },
      ],
      methodLau: {
        process: t("finishFinder.system1.methodLau.process"),
        representativeProducts: ["Lotus wood stain", "Lotus sanding sealer", "Lotus acrylic lacquer IN"],
        image: sonLauWeb,
        notes: t("finishFinder.system1.methodLau.notes"),
        fullChartImage: paletteLau,
      },
      methodPhun: {
        process: t("finishFinder.system1.methodPhun.process"),
        representativeProducts: ["Lotus sanding sealer", "Lotus woodstain finish interior"],
        image: sonPhunWeb,
        notes: t("finishFinder.system1.methodPhun.notes"),
        fullChartImage: palettePhun,
      },
    };
  }

  // 2) Gỗ tự nhiên / Veneer + Trong nhà + Phủ màu (single-method)
  if (surface === "natural" && naturalFinish === "solid" && location === "indoor") {
    return {
      title: t("finishFinder.system2.title"),
      suitableFor: t("finishFinder.system2.suitableFor"),
      methodType: "single",
      colorType: "solid",
      colors: [
        { name: "Trắng tinh khiết", code: "RAL 9010", hex: "#FFFFFF" },
        { name: "Kem", code: "RAL 9001", hex: "#F5F5DC" },
        { name: "Xám nhạt", code: "RAL 9016", hex: "#E0E0E0" },
        { name: "Be", code: "RAL 1001", hex: "#F5F5DC" },
        { name: "Xám mềm", code: "RAL 7035", hex: "#B0B0B0" },
      ],
      singleMethod: {
        process: t("finishFinder.system2.process"),
        representativeProducts: ["Lotus wood primer", "Lotus wood paint IN"],
        image: mauBetGoTuNhien,
        notes: t("finishFinder.system2.notes"),
        fullChartImage: paletteBet,
      },
    };
  }

  // 3) Gỗ tự nhiên / Veneer + Ngoài trời + Giữ vân (dual-method)
  if (surface === "natural" && naturalFinish === "grain" && location === "outdoor") {
    return {
      title: t("finishFinder.system3.title"),
      suitableFor: t("finishFinder.system3.suitableFor"),
      methodType: "dual",
      colorType: "grain",
      colors: [
        { name: "Cedar", code: "Cedar", hex: "#A0522D" },
        { name: "Redwood", code: "Redwood", hex: "#CD853F" },
        { name: "Brown Oak", code: "Brown Oak", hex: "#8B4513" },
        { name: "Dark Walnut", code: "Dark Walnut", hex: "#4A3728" },
        { name: "Natural Teak", code: "Natural Teak", hex: "#D2B48C" },
      ],
      methodLau: {
        process: t("finishFinder.system3.methodLau.process"),
        representativeProducts: ["Lotus wood stain", "Lotus sanding sealer", "Lotus acrylic lacquer EX"],
        image: sonLauWeb,
        notes: t("finishFinder.system3.methodLau.notes"),
        fullChartImage: paletteLau,
      },
      methodPhun: {
        process: t("finishFinder.system3.methodPhun.process"),
        representativeProducts: ["Lotus sanding sealer", "Lotus woodstain finish exterior", "Lotus PUD EX"],
        image: sonPhunWeb,
        notes: t("finishFinder.system3.methodPhun.notes"),
        fullChartImage: palettePhun,
      },
    };
  }

  // 4) Gỗ tự nhiên / Veneer + Ngoài trời + Phủ màu (single-method)
  if (surface === "natural" && naturalFinish === "solid" && location === "outdoor") {
    return {
      title: t("finishFinder.system4.title"),
      suitableFor: t("finishFinder.system4.suitableFor"),
      methodType: "single",
      colorType: "solid",
      colors: [
        { name: "Trắng ngoại thất", code: "RAL 9016", hex: "#E0E0E0" },
        { name: "Cát", code: "RAL 1002", hex: "#F4A460" },
        { name: "Xám đá", code: "RAL 7030", hex: "#808080" },
        { name: "Terracotta", code: "RAL 8001", hex: "#E2725B" },
        { name: "Xanh olive", code: "RAL 6000", hex: "#556B2F" },
      ],
      singleMethod: {
        process: t("finishFinder.system4.process"),
        representativeProducts: ["Lotus wood primer", "Lotus wood paint EX"],
        image: mauBetGoTuNhien,
        notes: t("finishFinder.system4.notes"),
        fullChartImage: paletteBet,
      },
    };
  }

  // 5) MDF / HDF / Gỗ công nghiệp + Trong nhà + Phủ màu / che phủ (single-method)
  if (surface === "mdf" && location === "indoor") {
    return {
      title: t("finishFinder.system5.title"),
      suitableFor: t("finishFinder.system5.suitableFor"),
      methodType: "single",
      colorType: "solid",
      colors: [
        { name: "Trắng MDF", code: "RAL 9010", hex: "#FFFFFF" },
        { name: "Alabaster", code: "RAL 9002", hex: "#FAF0E6" },
        { name: "Ngà sáng", code: "RAL 1015", hex: "#FFFFF0" },
        { name: "Xám ấm", code: "RAL 7016", hex: "#383E42" },
        { name: "Be mềm", code: "RAL 1000", hex: "#BEB5A7" },
      ],
      singleMethod: {
        process: t("finishFinder.system5.process"),
        representativeProducts: ["Lotus wood primer", "Lotus wood paint IN"],
        image: sonBetMdfLotus,
        notes: t("finishFinder.system5.notes"),
        fullChartImage: paletteBet,
      },
    };
  }

  // Fallback (should not happen with valid inputs)
  return {
    title: t("finishFinder.fallback.title"),
    suitableFor: t("finishFinder.fallback.suitableFor"),
    methodType: "single",
    colorType: "solid",
    singleMethod: {
      process: t("finishFinder.fallback.process"),
      representativeProducts: ["Tư vấn theo hạng mục"],
      image: sonLauWeb,
    },
  };
}

function FinishFinder({ onInteractionChange }: { onInteractionChange: (interacting: boolean) => void }) {
  const { t } = useTranslation();
  const [surface, setSurface] = useState<Surface | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [naturalFinish, setNaturalFinish] = useState<NaturalFinish | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState<"lau" | "phun">("lau");
  const [showFullColorChart, setShowFullColorChart] = useState(false);

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

  const coatingSystem = ready ? resolveCoatingSystem(surface!, location!, naturalFinish, t) : null;

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
    <div className="font-display text-[13px] uppercase tracking-[0.28em] text-wood-500 sm:text-[14px]">
      <span className="font-display text-[15px] tracking-normal text-wood-400 sm:text-[16px]">{n}</span>
      <span className="mx-2.5 text-wood-300">·</span>
      {text}
    </div>
  );

  const Choice = ({
    active,
    onClick,
    children,
    disabled = false,
  }: {
    active: boolean;
    onClick: () => void;
    children: React.ReactNode;
    disabled?: boolean;
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`group flex w-full items-center justify-between gap-4 border px-5 py-4 text-left text-[14px] leading-[1.4] transition-colors sm:px-6 sm:py-5 sm:text-[15px] ${
        disabled
          ? "border-wood-200 bg-wood-50 text-wood-400 cursor-not-allowed"
          : active
            ? "border-wood-900 bg-wood-900 text-background"
            : "border-wood-200 bg-background text-wood-800 hover:border-wood-700 hover:text-wood-900"
      }`}
      aria-pressed={active}
    >
      <span>{children}</span>
      <span
        className={`text-[19px] leading-none transition-transform ${
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
            <div className="text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]">
              {t("finishFinder.label")}
            </div>
            <h2 className="font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]">
              <span className="block">{t("finishFinder.title")}</span>
              <span className="block italic font-normal text-wood-700">
                {t("finishFinder.titleItalic")}
              </span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.7] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6 sm:text-[18px]">
            {t("finishFinder.description")}
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
                  <StepLabel n="01" text={t("finishFinder.step1")} />
                  <h3 className="font-display mt-3 text-[1.3rem] font-light leading-[1.3] text-wood-900 sm:text-[1.45rem]">
                    {t("finishFinder.step1Question")}
                  </h3>
                  <p className="mt-2 text-[15px] text-wood-600/80 sm:hidden">
                    {t("finishFinder.step1Hint")}
                  </p>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Choice
                      active={surface === "natural"}
                      onClick={() => {
                        setSurface("natural");
                        setNaturalFinish(null);
                      }}
                    >
                      {t("finishFinder.surfaceNatural")}
                    </Choice>
                    <Choice
                      active={surface === "mdf"}
                      onClick={() => {
                        setSurface("mdf");
                        setNaturalFinish(null);
                      }}
                    >
                      {t("finishFinder.surfaceMdf")}
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
                  <StepLabel n="02" text={t("finishFinder.step2")} />
                  <h3 className="font-display mt-3 text-[1.3rem] font-light leading-[1.3] text-wood-900 sm:text-[1.45rem]">
                    {t("finishFinder.step2Question")}
                  </h3>
                  <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Choice
                      active={location === "indoor"}
                      onClick={() => surface && setLocation("indoor")}
                    >
                      {t("finishFinder.indoor")}
                    </Choice>
                    <Choice
                      active={location === "outdoor"}
                      onClick={() => surface !== "mdf" && setLocation("outdoor")}
                      disabled={surface === "mdf"}
                    >
                      {t("finishFinder.outdoor")}
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
                    <StepLabel n="03" text={t("finishFinder.step3")} />
                    <h3 className="font-display mt-3 text-[1.3rem] font-light leading-[1.3] text-wood-900 sm:text-[1.45rem]">
                      {t("finishFinder.step3Question")}
                    </h3>
                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      <Choice
                        active={naturalFinish === "grain"}
                        onClick={() => location && setNaturalFinish("grain")}
                      >
                        {t("finishFinder.matte")}
                      </Choice>
                      <Choice
                        active={naturalFinish === "solid"}
                        onClick={() => location && setNaturalFinish("solid")}
                      >
                        {t("finishFinder.gloss")}
                      </Choice>
                    </div>
                  </div>
                )}

                {ready && (
                  <button
                    type="button"
                    onClick={reset}
                    className="font-display text-[12px] uppercase tracking-[0.18em] text-wood-600 transition-colors hover:text-wood-900"
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
                    {t("finishFinder.completeSteps")}
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
                        className={`font-display flex-1 px-4 py-3 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors sm:text-[14px] ${
                          selectedMethod === "lau"
                            ? "border-b-2 border-wood-900 text-wood-900"
                            : "border-b-2 border-transparent text-wood-600 hover:text-wood-800"
                        }`}
                      >
                        {t("finishFinder.methodLau")}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedMethod("phun")}
                        className={`font-display flex-1 px-4 py-3 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors sm:text-[14px] ${
                          selectedMethod === "phun"
                            ? "border-b-2 border-wood-900 text-wood-900"
                            : "border-b-2 border-transparent text-wood-600 hover:text-wood-800"
                        }`}
                      >
                        {t("finishFinder.methodPhun")}
                      </button>
                    </div>
                  )}

                  <div className="relative aspect-[5/4] overflow-hidden bg-wood-200/40">
                    <img
                      src={
                        coatingSystem.methodType === "dual"
                          ? selectedMethod === "lau"
                            ? coatingSystem.methodLau?.image
                            : coatingSystem.methodPhun?.image
                          : coatingSystem.singleMethod?.image
                      }
                      alt={`${coatingSystem.title} - ${coatingSystem.suitableFor}`}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
                    <div>
                      <div className="font-display text-[13px] uppercase tracking-[0.22em] text-wood-600 sm:text-[14px]">
                        {t("finishFinder.resultLabel")}
                      </div>
                      <h3 className="font-display mt-3 text-[1.4rem] font-light leading-[1.25] text-wood-900 sm:text-[1.6rem]">
                        {coatingSystem.title}
                      </h3>
                    </div>

                    <dl className="divide-y divide-wood-200 border-t border-wood-200">
                      <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                        <dt className="font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]">
                          {t("finishFinder.suitableFor")}
                        </dt>
                        <dd className="text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]">
                          {coatingSystem.suitableFor}
                        </dd>
                      </div>

                      {/* Show method-specific content */}
                      {coatingSystem.methodType === "dual" && selectedMethod === "lau" && coatingSystem.methodLau && (
                        <>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]">
                              {t("finishFinder.techConfig")} (Lau)
                            </dt>
                            <dd className="text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]">
                              {coatingSystem.methodLau.process}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]">
                              {t("finishFinder.repProducts")} (Lau)
                            </dt>
                            <dd className="text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]">
                              {coatingSystem.methodLau.representativeProducts.join(" · ")}
                            </dd>
                          </div>
                        </>
                      )}

                      {coatingSystem.methodType === "dual" && selectedMethod === "phun" && coatingSystem.methodPhun && (
                        <>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]">
                              {t("finishFinder.techConfig")} (Phun)
                            </dt>
                            <dd className="text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]">
                              {coatingSystem.methodPhun.process}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]">
                              {t("finishFinder.repProducts")} (Phun)
                            </dt>
                            <dd className="text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]">
                              {coatingSystem.methodPhun.representativeProducts.join(" · ")}
                            </dd>
                          </div>
                        </>
                      )}

                      {coatingSystem.methodType === "single" && coatingSystem.singleMethod && (
                        <>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]">
                              {t("finishFinder.techConfig")}
                            </dt>
                            <dd className="text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]">
                              {coatingSystem.singleMethod.process}
                            </dd>
                          </div>
                          <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4">
                            <dt className="font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]">
                              {t("finishFinder.repProducts")}
                            </dt>
                            <dd className="text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]">
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
                        <div className="text-[13px] font-medium uppercase tracking-[0.14em] text-wood-600 sm:text-[14px]">
                          {t("finishFinder.notes")}
                        </div>
                        <p className="mt-2 text-[15px] leading-[1.6] text-wood-700 sm:text-[16px]">
                          {coatingSystem.methodType === "dual"
                            ? selectedMethod === "lau"
                              ? coatingSystem.methodLau?.notes || coatingSystem.notes
                              : coatingSystem.methodPhun?.notes || coatingSystem.notes
                            : coatingSystem.singleMethod?.notes || coatingSystem.notes}
                        </p>
                      </div>
                    )}

                    {/* Color reference section */}
                    {coatingSystem.colors && coatingSystem.colors.length > 0 && (
                      <div className="mt-4 rounded-lg border border-wood-200/60 bg-wood-50/30 p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="text-[13px] font-medium uppercase tracking-[0.14em] text-wood-600 sm:text-[14px]">
                            {t("finishFinder.colorRef")}
                          </div>
                          <button
                            type="button"
                            onClick={() => setShowFullColorChart(true)}
                            className="text-[12px] font-medium text-wood-700 underline hover:text-wood-900 sm:text-[13px]"
                          >
                            {t("finishFinder.viewFullChart")}
                          </button>
                        </div>
                        <div className="grid grid-cols-5 gap-2">
                          {coatingSystem.colors.slice(0, 5).map((color) => (
                            <div key={color.code} className="flex flex-col items-center">
                              <div
                                className="h-10 w-10 rounded-full border border-wood-300/50 shadow-sm"
                                style={{ backgroundColor: color.hex }}
                                title={color.name}
                              />
                              <span className="mt-1 text-[11px] text-wood-600 sm:text-[12px]">{color.code}</span>
                            </div>
                          ))}
                        </div>
                        <p className="mt-3 text-[12px] leading-[1.5] text-wood-500 italic sm:text-[13px]">
                          {t("finishFinder.colorDisclaimer")}
                        </p>
                      </div>
                    )}

                    <div className="mt-auto pt-2">
                      <a
                        href={ZALO}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 border-b border-wood-900 pb-1 text-[14px] font-semibold uppercase tracking-[0.16em] text-wood-900 transition-colors hover:text-wood-700 sm:text-[15px]"
                      >
                        {t("finishFinder.consultThis")}
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </a>
                    </div>
                  </div>
                </article>
              )}
            </div>
          </div>
        </div>

        {/* Full color chart modal */}
        {showFullColorChart && coatingSystem && (() => {
          const currentMethod = coatingSystem.methodType === "dual"
            ? selectedMethod === "lau" ? coatingSystem.methodLau : coatingSystem.methodPhun
            : coatingSystem.singleMethod;
          const fullChartImage = currentMethod?.fullChartImage;

          return (
            <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center">
              <div className="w-full max-w-2xl rounded-t-2xl bg-[#F5F0EA] p-6 shadow-2xl sm:rounded-2xl sm:p-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-display text-[1.3rem] font-semibold text-wood-900">
                    {t("finishFinder.downloadChart")}
                  </h3>
                  <button
                    type="button"
                    onClick={() => setShowFullColorChart(false)}
                    className="rounded-full p-2 text-wood-600 hover:bg-wood-200/50"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                {fullChartImage && (
                  <div className="mb-4">
                    <img
                      src={fullChartImage}
                      alt={`Bảng màu ${coatingSystem.colorType === "grain" ? "giữ vân" : "màu bệt"} - ${selectedMethod}`}
                      className="w-full rounded-lg border border-wood-200/60 shadow-sm"
                    />
                  </div>
                )}
                <p className="mb-4 text-[13px] leading-[1.5] text-wood-500 italic sm:text-[14px]">
                  Màu hiển thị trên màn hình chỉ mang tính tham khảo. Vui lòng đối chiếu bảng màu gốc hoặc mẫu thực tế trước khi chốt.
                </p>
                <div className="flex gap-3">
                  {fullChartImage && (
                    <a
                      href={fullChartImage}
                      download={`lotus-color-chart-${coatingSystem.colorType}-${selectedMethod}.png`}
                      className="flex-1 rounded-lg border border-wood-900 bg-transparent py-3 text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-wood-900 transition-colors hover:bg-wood-900/5 sm:text-[14px]"
                    >
                      {t("finishFinder.download")}
                    </a>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowFullColorChart(false)}
                    className="flex-1 rounded-lg bg-wood-900 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#F5F0EA] transition-colors hover:bg-wood-800 sm:text-[14px]"
                  >
                    {t("finishFinder.close")}
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}

/* ============================================================
   PRODUCTS — Main product lines
   ============================================================ */
const PRODUCT_GROUPS = [
  {
    title: "products.group1.title",
    description: "products.group1.description",
    usage: "products.group1.usage",
    products: ["Lotus Wood Filler", "Lotus Wood Matic"],
    image: keoTramTret,
  },
  {
    title: "products.group2.title",
    description: "products.group2.description",
    usage: "products.group2.usage",
    products: ["Lotus Wood Primer", "Lotus Sanding Sealer"],
    image: sonLot,
  },
  {
    title: "products.group3.title",
    description: "products.group3.description",
    usage: "products.group3.usage",
    products: ["Lotus Wood Stain", "Lotus Wood Stain Finish"],
    image: heGiVan,
  },
  {
    title: "products.group4.title",
    description: "products.group4.description",
    usage: "products.group4.usage",
    products: ["Lotus Wood Paint IN", "Lotus Wood Paint EX"],
    image: heMauBet,
  },
  {
    title: "products.group5.title",
    description: "products.group5.description",
    usage: "products.group5.usage",
    products: ["Lotus Acrylic Lacquer EX", "Lotus PUD EX"],
    image: heBaoVeNgoaiThat,
  },
  {
    title: "products.group6.title",
    description: "products.group6.description",
    usage: "products.group6.usage",
    products: ["Lotus Acrylic Lacquer EX 2K", "Lotus Wood Paint IN 2K", "Lotus Wood Stain Finish 2K"],
    image: heSon2K,
  },
];

function ProductsSection() {
  const { t } = useTranslation();
  const [expandedGroup, setExpandedGroup] = useState<number | null>(null);

  return (
    <section id="san-pham" className="bg-[#F5F0EA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]">
              {t("products.label")}
            </div>
            <h2 className="font-display mt-6 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.5rem]">
              <span className="block">{t("products.title")}</span>
              <span className="block italic font-normal text-wood-700">
                {t("products.titleItalic")}
              </span>
            </h2>
          </div>
          <p className="text-[17px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6 sm:text-[18px]">
            {t("products.description")}
          </p>
        </div>

        {/* Desktop: 3+2 grid layout */}
        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-3">
          {PRODUCT_GROUPS.map((group, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-lg border border-wood-200/60 bg-background"
            >
              <div className="product-image-frame">
                <img
                  src={group.image}
                  alt={`${group.title} - ${group.description}`}
                  loading="lazy"
                  className={index === 5 ? "scale-[103%]" : ""}
                />
              </div>
              <div className="flex flex-col gap-5 p-6">
                <div>
                  <div className="font-display text-[11px] font-medium uppercase tracking-[0.22em] text-wood-400">
                    {t("products.group")} {index + 1}
                  </div>
                  <h3 className="font-display mt-2 text-[19px] font-semibold leading-[1.2] tracking-[-0.01em] text-wood-900">
                    {t(group.title)}
                  </h3>
                </div>
                <p className="text-[14px] leading-[1.7] text-wood-600/90 sm:text-[15px]">
                  {t(group.description)}
                </p>
                <div className="space-y-4 border-t border-wood-200/50 pt-4">
                  <div>
                    <div className="font-display text-[10px] font-medium uppercase tracking-[0.22em] text-wood-400">
                      {t("products.usage")}
                    </div>
                    <p className="mt-1.5 text-[14px] leading-[1.6] text-wood-600">
                      {t(group.usage)}
                    </p>
                  </div>
                  <div>
                    <div className="font-display text-[10px] font-medium uppercase tracking-[0.22em] text-wood-400">
                      {t("products.repProducts")}
                    </div>
                    <div className="mt-2 space-y-1.5">
                      {group.products.map((product, pIndex) => (
                        <div key={pIndex} className="font-display text-[14px] italic text-wood-800">
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
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded bg-wood-200/40 flex items-center justify-center">
                  <img
                    src={group.image}
                    alt={`${group.title} - ${group.description}`}
                    loading="lazy"
                    className={`h-full w-full object-contain object-center p-2 ${index === 5 ? "scale-[143%]" : ""}`}
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <div className="font-display text-[12px] font-medium uppercase tracking-[0.14em] text-wood-600 sm:text-[13px]">
                    {t("products.group")} {index + 1}
                  </div>
                  <h3 className="font-display mt-1 text-[17px] font-semibold leading-[1.3] text-wood-900">
                    {t(group.title)}
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
                  <p className="text-[16px] leading-[1.6] text-wood-700/90 sm:text-[17px]">
                    {t(group.description)}
                  </p>
                  <div className="mt-4 space-y-3">
                    <div>
                      <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:text-[13px]">
                        {t("products.usage")}
                      </div>
                      <p className="mt-1 text-[15px] leading-[1.5] text-wood-600 sm:text-[16px]">
                        {t(group.usage)}
                      </p>
                    </div>
                    <div>
                      <div className="text-[12px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:text-[13px]">
                        {t("products.repProducts")}
                      </div>
                      <div className="mt-2 space-y-1">
                        {group.products.map((product, pIndex) => (
                          <div key={pIndex} className="text-[15px] font-medium text-wood-800 sm:text-[16px]">
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
   PROJECTS — Featured projects
   ============================================================ */
const PROJECTS = [
  {
    tag: "lookbook.project1.tag",
    name: "Grand Marina Saigon",
    type: "lookbook.project1.type",
    note: "Lotus wood primer; Lotus wood stain; Lotus PUD",
    image: grandMarinaSaigon,
  },
  {
    tag: "lookbook.project2.tag",
    name: "Masterise Hàng Bài - Hà Nội",
    type: "lookbook.project2.type",
    note: "Lotus wood primer; Lotus wood paint; Lotus PUD",
    image: masteriseHn,
  },
  {
    tag: "lookbook.project3.tag",
    name: "Khách sạn Pullman Phú Quốc",
    type: "lookbook.project3.type",
    note: "Lotus wood stain FE, Lotus lacquer 2K",
    image: pullmanPhuQuoc,
  },
  {
    tag: "lookbook.project4.tag",
    name: "Nhà Máy Casta - Long Khánh",
    type: "lookbook.project4.type",
    note: "Lotus wood primer",
    image: nhaMayCasta,
  },
  {
    tag: "lookbook.project5.tag",
    name: "Nhà Máy Pacific Furniture",
    type: "lookbook.project5.type",
    note: "Lotus sanding sealer, Lotus woodstain, Lotus lacquer 2K",
    image: pacificFur,
  },
  {
    tag: "lookbook.project6.tag",
    name: "AEON Tân An - Long An",
    type: "lookbook.project6.type",
    note: "Lotus wood stain, Lotus lacquer",
    image: aeonTanAn,
  },
];

function Lookbook() {
  const { t } = useTranslation();
  return (
    <section
      id="cong-trinh"
      className="bg-[oklch(0.96_0.018_82)] py-16 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="max-w-3xl">
          <div className="text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]">
            {t("lookbook.label")}
          </div>
          <h2 className="font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-4xl lg:text-[2.75rem]">
            <span className="block">{t("lookbook.title")}</span>
            <span className="block italic font-normal text-wood-700">
              {t("lookbook.titleItalic")}
            </span>
          </h2>
          <p className="font-display mt-6 max-w-2xl text-[16px] italic leading-[1.6] text-wood-700 sm:text-[17px]">
            {t("lookbook.description")}
          </p>
        </div>

        {/* Featured: 2 hero projects */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10">
          {PROJECTS.slice(0, 2).map((p, i) => (
            <article
              key={`feat-${i}`}
              className="overflow-hidden rounded-lg bg-[#FDFAF7] shadow-sm ring-1 ring-wood-200/60 transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-wood-200/40 sm:aspect-[3/2]">
                <img
                  src={p.image}
                  alt={`${p.name} - ${p.type} - ${p.note}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-1.5 p-4 sm:gap-2 sm:p-6 lg:p-7">
                <span className="inline-block rounded-full bg-wood-700/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-wood-700">
                  {t(p.tag)}
                </span>
                <h3 className="font-display text-[17px] font-semibold leading-[1.25] text-wood-900 sm:text-[1.4rem]">
                  {p.name}
                </h3>
                <p className="text-[13px] text-wood-600 sm:text-[15px] lg:text-[16px]">{t(p.type)}</p>
                <p className="mt-1 text-[13px] leading-[1.5] text-wood-500 sm:text-[14px]">
                  <span className="font-medium text-wood-700">Hệ sơn: </span>{p.note}
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
              <div className="relative aspect-[4/3] overflow-hidden bg-wood-200/40">
                <img
                  src={p.image}
                  alt={`${p.name} - ${p.type} - ${p.note}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-1.5 p-4">
                <span className="inline-block rounded-full bg-wood-700/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-wood-700">
                  {t(p.tag)}
                </span>
                <h3 className="font-display text-[16px] font-semibold leading-[1.25] text-wood-900 sm:text-[17px]">
                  {p.name}
                </h3>
                <p className="text-[13px] text-wood-600 sm:text-[14px]">{t(p.type)}</p>
                <p className="mt-1 text-[12px] leading-[1.5] text-wood-500">{p.note}</p>
              </div>

            </article>
          ))}
        </div>


        <p className="mx-auto mt-14 max-w-xl text-center text-[15px] leading-[1.65] text-wood-600 lg:mt-20 sm:text-[16px]">
          {t("lookbook.cta")}
        </p>
      </div>
    </section>
  );
}

/* ============================================================
   CONSULT — private design consultation
   ============================================================ */
function ConsultBlock() {
  const { t } = useTranslation();
  return (
    <section className="bg-wood-900 py-16 text-background sm:py-28 lg:py-36">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="text-[13px] uppercase tracking-[0.32em] text-wood-400 sm:text-[14px]">
              {t("consult.label")}
            </div>
            <h2 className="font-display mt-8 text-[1.9rem] font-light leading-[1.06] sm:text-[2.4rem] lg:text-[3rem]">
              <span className="block">{t("consult.title")}</span>
              <span className="block italic font-normal text-wood-200">
                {t("consult.titleItalic")}
              </span>
            </h2>
            <p className="mt-7 max-w-md text-[17px] leading-[1.7] text-wood-300 sm:text-[18px]">
              {t("consult.description")}
            </p>
            <ul className="mt-7 space-y-3 text-[16px] leading-[1.6] text-wood-300 sm:text-[17px]">
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-400" strokeWidth={1.75} />
                <span>{t("consult.benefit1")}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-400" strokeWidth={1.75} />
                <span>{t("consult.benefit2")}</span>
              </li>
              <li className="flex gap-3">
                <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-wood-400" strokeWidth={1.75} />
                <span>{t("consult.benefit3")}</span>
              </li>
            </ul>

          </div>

          <div className="flex flex-col gap-5 lg:col-span-5 lg:justify-end lg:pb-2">
            {/* TODO: replace ctaSupportImage with actual engineer-consulting-at-workshop photo */}
            <div className="relative overflow-hidden rounded-lg aspect-[4/3] bg-wood-700/20">
              <img
                src={ctaSupportImage}
                alt="Kỹ sư Lotus tư vấn kỹ thuật trực tiếp tại xưởng sản xuất nội thất"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <p className="text-[15px] leading-[1.65] text-wood-300">
              Lotus không chỉ bán sơn mà đồng hành như một bộ phận kỹ thuật mở rộng của xưởng.
            </p>
            <p className="text-[15px] leading-[1.65] text-wood-300">
              Từ mẫu thử đầu tiên đến lô hàng cuối, đội ngũ hỗ trợ để bề mặt ổn định hơn.
            </p>
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-background px-7 py-4 text-[15px] font-semibold uppercase tracking-[0.18em] text-wood-900 shadow-sm transition-colors hover:bg-wood-200 sm:w-auto sm:text-[16px]"
            >
              <Camera className="h-4 w-4" strokeWidth={1.75} />
              {t("consult.ctaButton")}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:0943966662"
              className="inline-flex items-center gap-2 text-[15px] tracking-wide text-wood-300 transition-colors hover:text-background sm:text-[16px]"
            >
              {t("consult.ctaPhone")} <span className="font-semibold text-background underline underline-offset-4">0943 966 662</span>
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
    q: "faq.q1",
    a: "faq.a1",
  },
  {
    q: "faq.q2",
    a: "faq.a2",
  },
  {
    q: "faq.q3",
    a: "faq.a3",
  },
  {
    q: "faq.q4",
    a: "faq.a4",
  },
  {
    q: "faq.q5",
    a: "faq.a5",
  },
  {
    q: "faq.q6",
    a: "faq.a6",
  },
  {
    q: "faq.q7",
    a: "faq.a7",
  },
  {
    q: "faq.q8",
    a: "faq.a8",
  },
];


function FAQ() {
  const { t } = useTranslation();
  return (
    <section id="faq" className="bg-background py-14 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]">
              {t("faq.label")}
            </div>
            <h2 className="font-display mt-8 text-[2rem] font-light leading-[1.1] text-wood-900 sm:text-[2.25rem]">
              <span className="block">{t("faq.title")}</span>
              <span className="block italic font-normal text-wood-700">
                {t("faq.titleItalic")}
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
                      <span>{t(f.q)}</span>
                      <span className="faq-preview line-clamp-1 text-[15px] font-sans font-normal text-wood-500 sm:text-[16px]">
                        {t(f.a)}
                      </span>
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-wood-300 text-wood-700 transition-colors group-hover/faq:border-wood-700 group-hover/faq:text-wood-900">
                      <span aria-hidden className="faq-icon-plus text-[15px] leading-none">+</span>
                      <span aria-hidden className="faq-icon-minus text-[15px] leading-none">−</span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-7 pr-4 text-[16px] leading-[1.75] text-wood-700/85 sm:pr-12 sm:text-[17px]">
                    {t(f.a)}
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
