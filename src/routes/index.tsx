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
   TRUST BAR
   ============================================================ */
function TrustBar() {
  return (
    <section className="border-y border-wood-200 bg-background py-10 sm:py-14">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
          {[
            { k: "200+", v: "xưởng & nhà máy tin dùng" },
            { k: "5+", v: "năm kinh nghiệm" },
            { k: "1-1", v: "tư vấn kỹ thuật miễn phí" },
          ].map((s) => (
            <div key={s.k}>
              <div className="font-display text-[2.25rem] font-semibold text-wood-900 sm:text-[2.75rem]">
                {s.k}
              </div>
              <div className="mt-2 text-[12px] font-medium uppercase tracking-[0.16em] text-wood-500">
                {s.v}
              </div>
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
            Lotus Wood Finishing
          </div>

          <h1 className="font-display mt-10 text-[2.75rem] font-light leading-[1.04] text-wood-900 sm:text-[3.75rem] lg:text-[4.5rem]">
            <span className="block">Gỗ, hoàn thiện</span>
            <span className="block italic font-normal text-wood-700">
              đúng chất liệu.
            </span>
          </h1>

          <p className="mt-10 max-w-sm text-[15px] leading-[1.75] text-wood-700/85">
            Lotus chọn đúng hệ hoàn thiện cho từng loại gỗ và từng vị trí lắp
            đặt — để bề mặt giữ được vẻ đẹp ban đầu, lâu hơn dự kiến.
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
    kicker: "Hệ lau · Gỗ tự nhiên",
    title: "Sơn lau giữ màu vân gỗ",
    body: [
      "Lớp hoàn thiện thấm sâu vào thớ gỗ, tôn vinh từng đường vân thay vì che phủ.",
      "Bề mặt ấm, có chiều sâu, vẫn giữ nguyên cảm giác chạm vào gỗ thật.",
      "Khác với hệ phun tạo lớp kín đều, sơn lau để gỗ 'sống' — nơi chính chất liệu là điểm nhấn.",
    ],
    fitFor:
      "Phù hợp khi: đồ nội thất tự nhiên, bàn gỗ nguyên khối, không gian cần sự mộc mạc và sang trọng từ chính vân gỗ.",
    cta: "Nhắn Zalo để Lotus xem hạng mục và gợi ý chính xác",
    image: procLau,
  },
  {
    n: "II",
    kicker: "Hệ phun · Nội & ngoại thất",
    title: "Sơn phun giữ vân, nội & ngoại thất",
    body: [
      "Hệ phun cho bề mặt phẳng, đều màu, kiểm soát cao — lý tưởng cho sản xuất hàng loạt và dự án cần tính nhất quán.",
      "Vân gỗ vẫn hiện rõ, nhưng trong một lớp hoàn thiện ổn định và ít phụ thuộc kỹ năng thợ.",
      "Lotus tách riêng hệ nội thất và ngoại thất: cùng vẻ ngoài, khác về khả năng chống chịu môi trường.",
    ],
    fitFor:
      "Phù hợp khi: cần đồng đều cho nhiều sản phẩm, hoặc hạng mục ngoài trời cần giữ vân nhưng phải bền theo thời tiết.",
    cta: "Gửi ảnh hạng mục để Lotus tư vấn đúng hệ phun",
    image: procPhun,
  },
  {
    n: "III",
    kicker: "Màu bệt · MDF",
    title: "Sơn màu bệt cho gỗ MDF",
    body: [
      "Màu bệt không cố biến MDF thành gỗ tự nhiên — nó tạo một bề mặt màu phẳng, sạch và hiện đại.",
      "Lớp sơn che nền đều, không loang, giữ độ bóng hoặc mờ nhất quán trên toàn sản phẩm.",
      "Hướng dành cho concept đương đại, nơi màu sắc và form chiếm vai trò chính — đẹp theo cách riêng của MDF.",
    ],
    fitFor:
      "Phù hợp khi: tủ bếp, tủ âm tường, nội thất hiện đại, hoặc lên màu theo bảng thiết kế riêng.",
    cta: "Nhắn Zalo để chọn màu bệt phù hợp với concept của bạn",
    image: procMdf,
  },
  {
    n: "IV",
    kicker: "Phủ bóng · Ngoài trời",
    title: "Sơn phủ bóng chuyên dụng bảo vệ gỗ ngoài trời",
    body: [
      "Gỗ ngoài trời không chỉ cần đẹp khi mới — nó cần giữ vẻ đẹp đó qua nắng, mưa và độ ẩm thay đổi.",
      "Lớp phủ chuyên dụng của Lotus co giãn cùng gỗ, kháng UV và chống thấm mà không nứt hay bong tróc.",
      "Đây không phải hệ nội thất mang ra ngoài — mà là một hệ riêng, chọn theo mức tiếp xúc thực tế của hạng mục.",
    ],
    fitFor:
      "Phù hợp khi: cửa gỗ ngoài trời, lam chắn nắng, pergola, sàn sân vườn, hoặc bất kỳ hạng mục nào chịu thời tiết.",
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
            Lotus không bán sơn theo can — Lotus chọn đúng hệ cho hạng mục bạn
            đang làm. Bốn hướng dưới đây bao quát phần lớn nhu cầu nội &amp;
            ngoại thất.
          </p>
        </div>

        {/* 4 panels — unified 2-col system, alternating sides */}
        <div className="mt-24 space-y-24 sm:mt-32 sm:space-y-28 lg:mt-40 lg:space-y-32">
          {PROCESSES.map((p, i) => {
            const imageLeft = i % 2 === 0;
            return (
              <article
                key={p.n}
                className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-16"
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

                  <p className="mt-7 text-[14px] italic leading-[1.7] text-wood-500">
                    {p.fitFor}
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
                Nội thất căn hộ
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
                  Bàn gỗ tự nhiên
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
                  Cửa &amp; lam gỗ sân vườn
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
              <span className="block">Gửi vài tấm ảnh.</span>
              <span className="block italic font-normal text-wood-200">
                Nhận tư vấn từ xưởng Lotus.
              </span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-wood-300">
              Không form, không báo giá tự động. Bạn nhắn Zalo, Lotus xem
              trực tiếp hạng mục và gợi ý quy trình hoàn thiện phù hợp với
              loại gỗ, môi trường và thẩm mỹ của bạn.
            </p>
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
