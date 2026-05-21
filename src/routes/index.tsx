import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
    <section className="bg-[#F5F0EA] py-20 sm:py-24">
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
      </div>
    </section>
  );
}

/* ============================================================
   TRUST BAR
   ============================================================ */
function TrustBar() {
  return (
    <section className="border-y border-wood-200 bg-background py-10 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 items-center gap-10 text-center sm:grid-cols-3">
          {[
            { k: "200+", v: "xưởng & nhà máy tin dùng" },
            { k: "5+", v: "năm kinh nghiệm" },
            { v: "TƯ VẤN KỸ THUẬT 1-1 MIỄN PHÍ" },
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
   HERO
   ============================================================ */
function Hero() {
  return (
    <section className="relative bg-[oklch(0.97_0.015_82)]">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-6 pt-14 pb-20 sm:px-10 sm:pt-20 sm:pb-28 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:pt-24 lg:pb-36">
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
            Lotus tư vấn đúng hệ hoàn thiện cho từng loại gỗ và từng môi trường
            sử dụng — để bề mặt ổn định qua sản xuất hàng loạt, đạt tiêu chuẩn
            bàn giao và xuất khẩu.
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
              <span className="font-display text-[13px] tracking-normal text-wood-400">
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

                  <div className="mt-6 space-y-4 text-[15.5px] leading-[1.82] text-wood-700/85">
                    {p.body.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>

                  <p className="mt-7 text-[14px] leading-[1.7] text-wood-600">
                    <em className="not-italic font-medium uppercase tracking-[0.14em] text-wood-500 text-[11.5px]">Phù hợp cho xưởng:</em>{" "}
                    <span className="italic">{p.fitFor}</span>
                  </p>


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
   LOOKBOOK — selected works
   ============================================================ */
function Lookbook() {
  return (
    <section
      id="cong-trinh"
      className="bg-[oklch(0.96_0.018_82)] py-24 sm:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="text-[10.5px] uppercase tracking-[0.32em] text-wood-600">
              Selected works
            </div>
            <h2 className="font-display mt-8 max-w-xl text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-4xl lg:text-[2.75rem]">
              <span className="block">Một vài bề mặt</span>
              <span className="block italic font-normal text-wood-700">
                đã đi qua xưởng Lotus.
              </span>
            </h2>
          </div>
        </div>

        {/* Editorial layout — 1 hero + 2 paired */}
        <div className="mt-16 space-y-16 lg:mt-24 lg:space-y-24">
          <figure className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-9">
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={procPhun}
                  alt="Bề mặt sơn phun giữ vân"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <figcaption className="text-[12px] leading-[1.7] text-wood-700 lg:col-span-3 lg:flex lg:flex-col lg:justify-end lg:pb-2">
              <span className="uppercase tracking-[0.22em] text-wood-500">
                Phun giữ vân
              </span>
              <span className="mt-2 font-display text-base italic text-wood-700">
                Nội thất căn hộ cao cấp · Hàng loạt, đồng màu xuyên lô
              </span>
            </figcaption>
          </figure>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10">
            <figure className="lg:col-span-5 lg:col-start-1">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={procLau}
                  alt="Bề mặt sơn lau giữ vân"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-[12px] leading-[1.7] text-wood-700">
                <span className="uppercase tracking-[0.22em] text-wood-500">
                  Lau giữ vân
                </span>
                <span className="ml-3 font-display text-base italic text-wood-700">
                  Bàn gỗ nguyên khối xuất khẩu · Giữ vân tự nhiên theo yêu cầu buyer
                </span>
              </figcaption>
            </figure>

            <figure className="lg:col-span-6 lg:col-start-7 lg:pt-24">
              <div className="aspect-[5/4] overflow-hidden">
                <img
                  src={procBong}
                  alt="Bề mặt phủ bóng ngoài trời"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-4 text-[12px] leading-[1.7] text-wood-700">
                <span className="uppercase tracking-[0.22em] text-wood-500">
                  Phủ bóng ngoài trời
                </span>
                <span className="ml-3 font-display text-base italic text-wood-700">
                  Cửa &amp; lam ngoại thất · Bền màu qua nắng mưa, không bong tróc
                </span>
              </figcaption>
            </figure>
          </div>
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
              <span className="block">Trước khi</span>
              <span className="block italic font-normal text-wood-700">
                nhắn Zalo.
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
