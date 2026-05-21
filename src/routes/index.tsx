import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Globe, Leaf } from "lucide-react";
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
        <Hero />
        <PartnersSection />
        <TrustBar />
        <CertificationsSection />
        <WhyWaterSection />
        <ProcessEditorial />
        <Lookbook />
        <FAQ />
        <ConsultBlock />
      </main>
      <Footer />
      <StickyMobileCTA />
      <StickyZalo />
    </>
  );
}

/* ============================================================
   PARTNERS
   ============================================================ */
function PartnersSection() {
  const partners = [
    "Novaland",
    "APC An Phong",
    "Masteries Homes",
    "Sun&L Interior",
    "Xưởng XK EU/Mỹ",
  ];

  return (
    <section className="bg-[#F5F0EA] py-12">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 text-center">
        <p className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
          Đã được tin dùng tại
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {partners.map((name) => (
            <div
              key={name}
              className="flex h-[50px] w-[120px] items-center justify-center rounded bg-wood-200/70 text-[11px] font-medium text-wood-600"
              title={name}
            >
              <span className="px-2 text-center leading-tight">{name}</span>
            </div>
          ))}
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
      title: "FDA Compliant",
      subtitle: "An toàn thực phẩm & đồ chơi trẻ em",
    },
    {
      icon: Globe,
      title: "Export Ready",
      subtitle: "Đạt chuẩn xuất khẩu Mỹ · EU · Nhật",
    },
    {
      icon: Leaf,
      title: "Hệ nước — Zero VOC",
      subtitle: "Không dung môi, nhẹ mùi, an toàn xưởng kín",
    },
  ];

  return (
    <section className="bg-background pt-24 pb-12 sm:pt-32 sm:pb-12 lg:pt-40 lg:pb-12">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left — text */}
          <div className="lg:col-span-5">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
              Tiêu chuẩn & chứng nhận
            </div>
            <h2 className="font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]">
              An toàn kiểm chứng — phù hợp xuất khẩu
            </h2>
            <p className="mt-6 text-[15px] leading-[1.75] text-wood-700/85">
              Toàn bộ sản phẩm sơn gỗ Lotus là hệ nước, không dung môi hữu cơ, không mùi nồng — đạt tiêu chuẩn an toàn cho xưởng kín và sản phẩm nội thất xuất khẩu sang Mỹ, EU, Nhật Bản.
            </p>
          </div>

          {/* Right — badge cards */}
          <div className="lg:col-span-6 lg:col-start-7">
            <div className="flex flex-col gap-4 lg:gap-5">
              {badges.map((b) => (
                <div
                  key={b.title}
                  className="flex items-start gap-5 rounded bg-wood-100/70 p-6"
                >
                  <b.icon className="mt-0.5 h-6 w-6 shrink-0 text-wood-700" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-[15px] font-medium text-wood-900">
                      {b.title}
                    </div>
                    <div className="mt-1 text-[12.5px] leading-[1.6] text-wood-600">
                      {b.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA link */}
        <div className="mt-14 lg:mt-20">
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-wood-700 transition-colors hover:text-wood-900"
          >
            Cần TDS / MSDS cho đơn hàng xuất khẩu? → Nhắn Zalo để nhận tài liệu kỹ thuật
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
      heading: "Chi phí thực tế",
      body: "Không tốn dung môi pha thêm. Không cần đầu tư hệ thống thông gió đặc biệt. Tỷ lệ hao phí khi phun thấp hơn PU khi tính trên cùng diện tích bề mặt.",
    },
    {
      heading: "Chuyển đổi không mất năng suất",
      body: "Lotus hỗ trợ kỹ thuật trực tiếp tại xưởng lần đầu — hướng dẫn thợ pha tỷ lệ và chỉnh súng đúng cách. Không để xưởng tự mò.",
    },
    {
      heading: "Giảm rủi ro bàn giao",
      body: "Dự án cao cấp ngày càng yêu cầu sơn không VOC trong hồ sơ nghiệm thu. Hệ nước không để lại mùi sau bàn giao — tránh phát sinh bảo hành.",
    },
  ];

  return (
    <section className="bg-[#F5F0EA] pt-[60px] pb-[60px]">
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

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.heading}>
              <h3 className="font-display text-[17px] font-medium text-wood-900">
                {c.heading}
              </h3>
              <p className="mt-4 text-[15px] leading-[1.75] text-wood-700/85">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-[15px] leading-[1.75] text-wood-700/85">
            Muốn Lotus tính thử chi phí thực tế cho hạng mục của xưởng bạn?
          </p>
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-5 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.14em] text-wood-700 transition-colors hover:text-wood-900"
          >
            NHẮN ZALO ĐỂ TÍNH THỬ →
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
  return (
    <section className="relative bg-[oklch(0.97_0.015_82)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 pt-14 pb-10 sm:px-10 sm:pt-20 sm:pb-12 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:pt-24 lg:pb-14">
        {/* Left — typography */}
        <div className="lg:col-span-5 lg:pt-12">
          <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
            LOTUS · GIẢI PHÁP HOÀN THIỆN GỖ CHUYÊN NGHIỆP
          </div>

          <h1 className="font-display mt-10 text-[2.75rem] font-light leading-[1.04] text-wood-900 sm:text-[3.75rem] lg:text-[2.5rem] lg:leading-[1.12]">
            <span className="block">Gỗ hoàn thiện đúng hệ —</span>
            <span className="block italic font-normal text-wood-700">
              bề mặt ổn định từ mẫu đầu đến lô cuối.
            </span>
          </h1>

          <p className="mt-10 max-w-sm text-[15px] leading-[1.75] text-wood-700/85">
            Lotus tư vấn đúng hệ hoàn thiện cho xưởng thi công, nhà thầu dự án và đơn hàng xuất khẩu — sơn hệ nước, không mùi, pha màu theo yêu cầu.
          </p>

          <div className="mt-12 flex flex-col items-start gap-6">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-wood-900 pb-2 text-[13px] uppercase tracking-[0.22em] text-wood-900 transition-colors hover:border-wood-600 hover:text-wood-700"
            >
              Tư vấn qua Zalo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:0943966662"
              className="text-[13px] tracking-wide text-wood-600 transition-colors hover:text-wood-900"
            >
              hoặc gọi 0943 966 662
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
    fitFor:
      "nội thất cao cấp gỗ nguyên khối, hàng xuất khẩu yêu cầu cảm giác tự nhiên, đơn handcraft số lượng nhỏ.",
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
    fitFor:
      "sản xuất hàng loạt cần bề mặt đồng đều, hạng mục outdoor bền thời tiết, dự án cần kiểm soát chất lượng xuyên suốt.",
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
    fitFor:
      "tủ bếp, tủ âm tường — đồng màu toàn lô, không loang, không chênh sắc.",
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
    fitFor:
      "lam, cửa, pergola, sàn sân vườn — hệ riêng cho hạng mục chịu thời tiết.",
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
    <section id="quy-trinh" className="bg-background py-24 sm:py-32 lg:py-40">
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
                {p.n === "III" ? "III\n·\n​HỆ SƠN MÀU BỆT" : p.n}
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

                  <div className="mt-6 space-y-4 text-[15.5px] leading-[1.82] text-wood-700/85">
                    {p.body.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>

                  <p className="mt-7 text-[14px] leading-[1.7] text-wood-600">
                    <em className="not-italic font-medium uppercase tracking-[0.14em] text-wood-500 text-[11.5px]">Phù hợp cho xưởng:</em>{" "}
                    <span className="italic">{p.fitFor}</span>
                  </p>

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

        {/* 2-column project grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 lg:mt-24 lg:grid-cols-2 lg:gap-10">
          {PROJECTS.map((p, i) => (
            <article
              key={i}
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
                <h3 className="font-display text-[1.25rem] font-semibold leading-[1.25] text-wood-900">
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
            Nhắn Zalo để nhận lookbook đầy đủ
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

          <div className="flex flex-col gap-6 lg:col-span-5 lg:items-end lg:justify-end lg:pb-2">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-background pb-2 text-[13px] uppercase tracking-[0.22em] text-background transition-colors hover:border-wood-300 hover:text-wood-200"
            >
              Mở Zalo & gửi ảnh
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:0943966662"
              className="text-[13px] tracking-wide text-wood-300 transition-colors hover:text-background"
            >
              hoặc gọi riêng 0943 966 662
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
    a: "Có. Toàn bộ sản phẩm đều có TDS (Technical Data Sheet) và MSDS (Material Safety Data Sheet) bằng tiếng Anh và tiếng Việt. Nhắn Zalo số 0943 966 662 — chúng tôi gửi tài liệu trong giờ làm việc.",
  },
  {
    q: "Sơn Lotus đã được dùng tại những dự án hay xưởng xuất khẩu nào?",
    a: "Lotus hiện cung cấp cho các xưởng nội thất xuất khẩu sang Mỹ, EU, Nhật và các dự án cao cấp của Novaland, Masteries Homes, Sun&L Interior. Gửi ảnh hoặc mô tả yêu cầu qua Zalo để được tư vấn hệ sơn phù hợp với tiêu chuẩn nhà mua hàng của bạn.",
  },
  {
    q: "Tôi nên chọn sơn lau hay sơn phun?",
    a: "Sơn lau cho cảm giác gỗ thật, vân có chiều sâu — hợp đồ gỗ tự nhiên trưng bày. Sơn phun cho bề mặt đều, ổn định và dùng được cho cả nội lẫn ngoại thất. Nếu phân vân, gửi ảnh — Lotus chọn giúp.",
  },
  {
    q: "MDF có dùng cùng hệ với gỗ tự nhiên không?",
    a: "Không. MDF cần hệ màu bệt riêng để che nền và lên màu phẳng. Dùng sai hệ, bề mặt sẽ loang, bong và xuống cấp nhanh hơn nhiều so với tuổi thọ thật của vật liệu.",
  },
  {
    q: "Gỗ ngoài trời nên dùng lớp phủ nào?",
    a: "Một lớp phủ chuyên ngoài trời: kháng UV, kháng ẩm và co giãn theo thời tiết. Tuyệt đối không dùng hệ nội thất cho hạng mục ngoài trời — đây là sai lầm tốn kém nhất chúng tôi thường gặp.",
  },
  {
    q: "Tôi đang làm số lượng nhiều cho xưởng, nên ưu tiên hệ nào để bề mặt ổn định hơn?",
    a: "Tùy vào loại gỗ, yêu cầu bề mặt và môi trường sử dụng, Lotus sẽ gợi ý hướng hoàn thiện phù hợp hơn cho sản xuất đồng đều và kiểm soát chất lượng tốt hơn.",
  },
  {
    q: "Tôi có thể gửi ảnh mẫu hoặc ảnh hạng mục thực tế để Lotus tư vấn đúng quy trình không?",
    a: "Có. Bạn chỉ cần gửi ảnh bề mặt, mô tả nhu cầu hoàn thiện và vị trí sử dụng, Lotus sẽ tư vấn hướng quy trình phù hợp hơn trước khi chọn hệ.",
  },
  {
    q: "Chưa biết quy trình phù hợp thì làm sao?",
    a: "Bạn không cần tự chọn. Gửi vài tấm ảnh hạng mục qua Zalo, mô tả ngắn vị trí lắp đặt — Lotus sẽ gợi ý đúng hệ theo loại gỗ, môi trường và mong muốn thẩm mỹ.",
  },
  {
    q: "Lotus có cung cấp TDS / MSDS không?",
    a: "Có. Lotus cung cấp đầy đủ TDS và MSDS cho tất cả sản phẩm — phục vụ xưởng kiểm soát chất lượng và nhà máy xuất khẩu cần hồ sơ kỹ thuật. Nhắn Zalo để nhận tài liệu.",
  },
  {
    q: "Thời gian khô giữa các lớp có ảnh hưởng đến dây chuyền không?",
    a: "Tùy hệ và điều kiện xưởng. Lotus tư vấn cụ thể để không làm chậm dây chuyền của bạn. Nhắn Zalo gửi thông tin xưởng để được hỗ trợ.",
  },
  {
    q: "Lotus có hỗ trợ thử nghiệm mẫu vật lý trước khi lên đơn lớn không?",
    a: "Có. Lotus khuyến khích xưởng thử trên mẫu thực tế trước khi chốt số lượng lớn. Nhắn Zalo để sắp xếp.",
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
