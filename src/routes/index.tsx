import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";

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
        <ProcessEditorial />
        <Lookbook />
        <ConsultBlock />
        <FAQ />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

/* ============================================================
   HERO — editorial, minimal, architectural
   ============================================================ */
function Hero() {
  return (
    <section className="relative bg-[oklch(0.97_0.015_82)]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pt-12 pb-16 sm:px-8 sm:pt-16 sm:pb-24 lg:grid-cols-12 lg:gap-12 lg:pt-20 lg:pb-32">
        {/* Left — type */}
        <div className="lg:col-span-5 lg:pt-10">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] text-wood-600">
            <span className="h-px w-8 bg-wood-400" />
            Lotus — Wood Finishing
          </div>

          <h1 className="font-display mt-8 text-[2.6rem] font-light leading-[1.02] text-wood-900 sm:text-6xl lg:text-[4.25rem]">
            Hoàn thiện gỗ,
            <br />
            <em className="italic font-normal text-wood-700">đúng chất.</em>
          </h1>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-wood-700/85">
            Bốn quy trình sơn dành riêng cho từng loại bề mặt — giữ vân, phủ
            màu, bảo vệ ngoài trời. Lotus tư vấn đúng hệ cho từng hạng mục.
          </p>

          <div className="mt-10 flex flex-col items-start gap-5">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-full bg-wood-900 px-7 py-4 text-sm font-medium tracking-wide text-background transition-all hover:bg-wood-800"
            >
              <MessageCircle className="h-4 w-4" />
              Tư vấn qua Zalo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-wood-700 underline decoration-wood-300 decoration-1 underline-offset-[6px] transition-colors hover:text-wood-900 hover:decoration-wood-600"
            >
              hoặc gửi ảnh hạng mục của bạn →
            </a>
          </div>
        </div>

        {/* Right — image */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm sm:aspect-[5/6] lg:aspect-[4/5]">
            <img
              src={heroImg}
              alt="Bề mặt gỗ hoàn thiện Lotus"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="mt-4 flex items-center justify-between text-[11px] uppercase tracking-[0.18em] text-wood-600">
            <span>Index 01 / Finishing</span>
            <span>Est. 2014</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   4 PROCESS EDITORIAL — the signature block
   ============================================================ */
const PROCESSES = [
  {
    n: "01",
    kicker: "Giữ vân — Lau",
    title: "Sơn lau giữ màu vân gỗ",
    body: "Lớp sơn thấm vào thớ gỗ, làm sâu vân và tôn cảm giác gỗ thật. Dành cho đồ gỗ tự nhiên cần giữ trọn vẻ mộc.",
    image: procLau,
  },
  {
    n: "02",
    kicker: "Giữ vân — Phun",
    title: "Sơn phun giữ vân, nội & ngoại thất",
    body: "Bề mặt đều, phẳng, vân gỗ vẫn hiện rõ. Hệ chia riêng cho trong nhà và ngoài trời để bền màu theo môi trường.",
    image: procPhun,
  },
  {
    n: "03",
    kicker: "Màu bệt — MDF",
    title: "Sơn màu bệt cho gỗ MDF",
    body: "Che nền MDF, lên màu phẳng và đều — phù hợp tủ bếp, tủ áo và nội thất hiện đại theo bảng màu riêng.",
    image: procMdf,
  },
  {
    n: "04",
    kicker: "Bảo vệ — Ngoài trời",
    title: "Sơn phủ bóng bảo vệ gỗ ngoài trời",
    body: "Lớp phủ chuyên dụng kháng UV, kháng ẩm và co giãn theo thời tiết — giữ bề mặt gỗ ngoài trời bền lâu.",
    image: procBong,
  },
];

function ProcessEditorial() {
  return (
    <section id="quy-trinh" className="bg-background py-20 sm:py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section opener */}
        <div className="grid grid-cols-1 gap-8 border-t border-wood-200 pt-10 lg:grid-cols-12 lg:pt-14">
          <div className="lg:col-span-5">
            <div className="text-[11px] uppercase tracking-[0.22em] text-wood-600">
              Bốn hướng hoàn thiện
            </div>
            <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] text-wood-900 sm:text-5xl lg:text-[3.4rem]">
              Mỗi bề mặt,
              <br />
              <em className="italic font-normal text-wood-700">
                một quy trình riêng.
              </em>
            </h2>
          </div>
          <p className="text-[15px] leading-relaxed text-wood-700/85 lg:col-span-5 lg:col-start-8 lg:pt-4">
            Lotus không bán sơn theo can — Lotus chọn đúng hệ cho hạng mục bạn
            đang làm. Bốn quy trình dưới đây bao quát phần lớn nhu cầu nội &
            ngoại thất.
          </p>
        </div>

        {/* 4 panels — asymmetric, alternating */}
        <div className="mt-16 space-y-20 sm:mt-20 sm:space-y-28 lg:mt-28 lg:space-y-36">
          {PROCESSES.map((p, i) => {
            const reverse = i % 2 === 1;
            return (
              <article
                key={p.n}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16"
              >
                <div
                  className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}
                >
                  <div
                    className={`relative overflow-hidden rounded-sm ${
                      i === 0
                        ? "aspect-[4/5]"
                        : i === 1
                          ? "aspect-[16/11]"
                          : i === 2
                            ? "aspect-[5/4]"
                            : "aspect-[3/4]"
                    }`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 ${reverse ? "lg:order-1 lg:pr-6" : "lg:pl-6"}`}
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-5xl font-light text-wood-300">
                      {p.n}
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.22em] text-wood-600">
                      {p.kicker}
                    </span>
                  </div>

                  <h3 className="font-display mt-6 text-3xl font-light leading-tight text-wood-900 sm:text-4xl">
                    {p.title}
                  </h3>

                  <p className="mt-5 max-w-md text-[15px] leading-relaxed text-wood-700/85">
                    {p.body}
                  </p>

                  <a
                    href={ZALO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 inline-flex items-center gap-2 border-b border-wood-300 pb-1 text-sm tracking-wide text-wood-800 transition-colors hover:border-wood-700 hover:text-wood-900"
                  >
                    Hỏi quy trình này qua Zalo
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
   LOOKBOOK — editorial curated gallery
   ============================================================ */
const LOOKS = [
  { src: procLau, caption: "No. 01 — Giữ vân, hệ lau" },
  { src: procPhun, caption: "No. 02 — Phun đều, nội thất" },
  { src: procMdf, caption: "No. 03 — Màu bệt, MDF" },
  { src: procBong, caption: "No. 04 — Phủ bóng, ngoài trời" },
];

function Lookbook() {
  return (
    <section id="cong-trinh" className="bg-wood-50 py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex items-end justify-between border-t border-wood-200 pt-10">
          <div>
            <div className="text-[11px] uppercase tracking-[0.22em] text-wood-600">
              Lookbook
            </div>
            <h2 className="font-display mt-5 max-w-xl text-3xl font-light leading-tight text-wood-900 sm:text-4xl lg:text-[2.75rem]">
              Một vài bề mặt
              <br />
              <em className="italic font-normal text-wood-700">
                đã đi qua xưởng Lotus.
              </em>
            </h2>
          </div>
          <div className="hidden text-right text-[11px] uppercase tracking-[0.22em] text-wood-500 sm:block">
            04 / Selected
          </div>
        </div>

        {/* Editorial asymmetric grid */}
        <div className="mt-12 grid grid-cols-12 gap-3 sm:gap-5 lg:mt-16">
          <figure className="col-span-12 lg:col-span-8">
            <div className="aspect-[16/10] overflow-hidden rounded-sm">
              <img
                src={LOOKS[0].src}
                alt={LOOKS[0].caption}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.18em] text-wood-600">
              {LOOKS[0].caption}
            </figcaption>
          </figure>

          <figure className="col-span-6 lg:col-span-4">
            <div className="aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src={LOOKS[1].src}
                alt={LOOKS[1].caption}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.18em] text-wood-600">
              {LOOKS[1].caption}
            </figcaption>
          </figure>

          <figure className="col-span-6 lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm">
              <img
                src={LOOKS[2].src}
                alt={LOOKS[2].caption}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.18em] text-wood-600">
              {LOOKS[2].caption}
            </figcaption>
          </figure>

          <figure className="col-span-12 lg:col-span-7">
            <div className="aspect-[16/10] overflow-hidden rounded-sm">
              <img
                src={LOOKS[3].src}
                alt={LOOKS[3].caption}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <figcaption className="mt-3 text-[11px] uppercase tracking-[0.18em] text-wood-600">
              {LOOKS[3].caption}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONSULT — premium Zalo block
   ============================================================ */
function ConsultBlock() {
  return (
    <section className="bg-wood-900 py-20 text-background sm:py-28 lg:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <div className="text-[11px] uppercase tracking-[0.22em] text-wood-400">
              Tư vấn riêng
            </div>
            <h2 className="font-display mt-6 text-4xl font-light leading-[1.05] sm:text-5xl lg:text-[3.5rem]">
              Gửi ảnh hạng mục.
              <br />
              <em className="italic font-normal text-wood-200">
                Lotus chọn đúng hệ cho bạn.
              </em>
            </h2>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-wood-300">
              Không cần thông tin kỹ thuật. Một vài tấm ảnh và vài dòng mô tả
              là đủ để Lotus gợi ý quy trình hoàn thiện phù hợp nhất.
            </p>
          </div>

          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-between gap-3 rounded-full bg-background px-7 py-4 text-sm font-medium tracking-wide text-wood-900 transition-all hover:bg-wood-50 sm:w-auto"
            >
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Nhắn Zalo ngay
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:0943966662"
              className="text-sm tracking-wide text-wood-300 transition-colors hover:text-background"
            >
              hoặc gọi 0943 966 662
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ — concise, editorial
   ============================================================ */
const FAQS = [
  {
    q: "Tôi nên chọn sơn lau hay sơn phun?",
    a: "Sơn lau cho cảm giác gỗ thật, vân chiều sâu rõ nét — hợp đồ gỗ tự nhiên. Sơn phun cho bề mặt đều, phẳng, dùng được cho cả trong nhà và ngoài trời. Gửi ảnh qua Zalo để Lotus chọn giúp.",
  },
  {
    q: "MDF có dùng cùng hệ với gỗ tự nhiên không?",
    a: "Không. MDF cần hệ màu bệt riêng để che nền và lên màu đều. Gỗ tự nhiên dùng hệ giữ vân. Dùng sai hệ sẽ làm bề mặt nhanh xuống cấp.",
  },
  {
    q: "Gỗ ngoài trời nên dùng lớp phủ nào?",
    a: "Lớp phủ bóng chuyên dụng kháng UV, kháng ẩm và co giãn theo thời tiết. Tuyệt đối không dùng hệ nội thất cho ngoài trời.",
  },
  {
    q: "Chưa biết quy trình phù hợp thì làm sao?",
    a: "Cách nhanh nhất là gửi ảnh hạng mục qua Zalo. Lotus xem trực tiếp và gợi ý đúng hệ theo loại gỗ, môi trường và mong muốn thẩm mỹ.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-10 border-t border-wood-200 pt-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="text-[11px] uppercase tracking-[0.22em] text-wood-600">
              Hỏi đáp
            </div>
            <h2 className="font-display mt-5 text-3xl font-light leading-tight text-wood-900 sm:text-4xl">
              Trước khi
              <br />
              <em className="italic font-normal text-wood-700">nhắn Zalo.</em>
            </h2>
          </div>

          <div className="lg:col-span-8">
            <Accordion type="single" collapsible className="divide-y divide-wood-200 border-y border-wood-200">
              {FAQS.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-0"
                >
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-wood-900 hover:no-underline sm:text-lg">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-[15px] leading-relaxed text-wood-700/85">
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
