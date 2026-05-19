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
            <span className="block">Hoàn thiện gỗ,</span>
            <span className="block italic font-normal text-wood-700">
              đúng chất.
            </span>
          </h1>

          <p className="mt-10 max-w-sm text-[15px] leading-[1.75] text-wood-700/85">
            Bốn hướng hoàn thiện riêng cho từng bề mặt gỗ — giữ vân, lên màu,
            bảo vệ ngoài trời. Lotus chọn đúng hệ cho từng hạng mục của bạn.
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
      "Lớp hoàn thiện thấm sâu vào thớ gỗ, tôn vinh từng đường vân tự nhiên thay vì che phủ nó.",
      "Kết quả là bề mặt ấm, có chiều sâu, và vẫn giữ nguyên cảm giác chạm vào gỗ thật.",
      "Khác với hệ phun tạo lớp kín đều, sơn lau để gỗ 'sống' — phù hợp những món đồ mà vẻ đẹp của chất liệu chính là điểm nhấn.",
      "Đây là hướng dành cho người hiểu rằng vân gỗ chính là thứ làm nên giá trị của sản phẩm.",
    ],
    fitFor:
      "Phù hợp khi: bạn làm đồ nội thất tự nhiên, bàn gỗ nguyên khối, hoặc không gian cần cảm giác mộc mạc và sang trọng từ chính vân gỗ.",
    cta: "Chưa chắc đây là hướng phù hợp? Nhắn Zalo để Lotus xem hạng mục và gợi ý chính xác.",
    image: procLau,
  },
  {
    n: "II",
    kicker: "Hệ phun · Nội & ngoại thất",
    title: "Sơn phun giữ vân, nội & ngoại thất",
    body: [
      "Hệ phun mang lại bề mặt phẳng, đều màu và kiểm soát cao — lý tưởng cho xưởng sản xuất và các dự án cần tính nhất quán.",
      "Vân gỗ vẫn hiện rõ nhưng trong một lớp hoàn thiện ổn định hơn sơn lau, ít chịu ảnh hưởng từ kỹ năng thợ.",
      "Lotus phân biệt hệ nội thất và ngoại thất riêng biệt: cùng vẻ ngoài đẹp nhưng khác về khả năng chống chịu môi trường.",
      "Bạn không cần đánh đổi giữa thẩm mỹ và độ bền — chỉ cần chọn đúng hệ cho đúng vị trí lắp đặt.",
    ],
    fitFor:
      "Phù hợp khi: bạn cần bề mặt đồng đều cho nhiều sản phẩm, hoặc hạng mục ngoài trời cần giữ vân nhưng phải bền màu theo thời tiết.",
    cta: "Gửi ảnh hạng mục để Lotus tư vấn đúng hệ phun cho từng môi trường.",
    image: procPhun,
  },
  {
    n: "III",
    kicker: "Màu bệt · MDF",
    title: "Sơn màu bệt cho gỗ MDF",
    body: [
      "Màu bệt không cố gắng biến MDF thành gỗ tự nhiên. Thay vào đó, nó tạo nên một bề mặt màu phẳng, sạch, và hiện đại.",
      "Lớp sơn che nền MDF đều, không loang, và giữ được độ bóng hoặc mờ nhất quán trên toàn bộ sản phẩm.",
      "Khác với hệ giữ vân, màu bệt dành cho những concept nội thất đương đại, nơi màu sắc và form chiếm vai trò chính.",
      "Đây là hướng khi bạn muốn bề mặt trung thực với chất liệu — đẹp theo cách riêng của MDF, không giả vờ là gỗ.",
    ],
    fitFor:
      "Phù hợp khi: tủ bếp, tủ âm tường, nội thất hiện đại, hoặc khi bạn cần lên màu theo bảng thiết kế riêng.",
    cta: "Nhắn Zalo nếu bạn cần tư vấn màu bệt phù hợp với concept nội thất của mình.",
    image: procMdf,
  },
  {
    n: "IV",
    kicker: "Phủ bóng · Ngoài trời",
    title: "Sơn phủ bóng chuyên dụng bảo vệ gỗ ngoài trời",
    body: [
      "Gỗ ngoài trời không chỉ cần đẹp khi mới hoàn thiện — nó cần giữ vẻ đẹp đó qua năm tháng dưới nắng, mưa, và độ ẩm thay đổi.",
      "Lớp phủ chuyên dụng của Lotus được xây dựng để co giãn cùng gỗ, chống tia UV, và chống thấm nước mà không bị nứt hay bong tróc.",
      "Đây không phải là hệ nội thất mang ra ngoài. Đây là một hệ thống riêng biệt, được chọn dựa trên mức độ tiếp xúc thực tế của hạng mục.",
      "Chọn sai lớp phủ cho ngoài trời là chấp nhận bề mặt xuống cấp nhanh hơn gấp nhiều lần — điều không ai muốn sau khi đã đầu tư.",
    ],
    fitFor:
      "Phù hợp khi: cửa gỗ ngoài trời, lam chắn nắng, pergola, sàn gỗ sân vườn, hoặc bất kỳ hạng mục nào chịu tác động thời tiết.",
    cta: "Gửi ảnh và mô tả hạng mục qua Zalo để Lotus chọn đúng lớp phủ theo môi trường thực tế.",
    image: procBong,
  },
];

const PROCESS_LAYOUTS = [
  // I — large portrait, text left-aligned right
  { imgCol: "lg:col-span-7 lg:col-start-1", textCol: "lg:col-span-4 lg:col-start-9 lg:pt-16", aspect: "aspect-[4/5]" },
  // II — wide landscape pushed right, text left
  { imgCol: "lg:col-span-8 lg:col-start-5", textCol: "lg:col-span-4 lg:col-start-1 lg:pt-24", aspect: "aspect-[16/10]" },
  // III — medium square-ish left, text right
  { imgCol: "lg:col-span-6 lg:col-start-1", textCol: "lg:col-span-4 lg:col-start-8 lg:pt-12", aspect: "aspect-[5/4]" },
  // IV — tall portrait right, text left
  { imgCol: "lg:col-span-6 lg:col-start-7", textCol: "lg:col-span-4 lg:col-start-1 lg:pt-20", aspect: "aspect-[3/4]" },
];

function ProcessEditorial() {
  return (
    <section id="quy-trinh" className="bg-background py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
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

        {/* 4 panels — asymmetric grid placement */}
        <div className="mt-24 space-y-28 sm:mt-32 sm:space-y-36 lg:mt-40 lg:space-y-48">
          {PROCESSES.map((p, i) => {
            const layout = PROCESS_LAYOUTS[i];
            return (
              <article
                key={p.n}
                className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-10"
              >
                <div className={layout.imgCol}>
                  <div className={`relative overflow-hidden ${layout.aspect}`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>

                <div className={layout.textCol}>
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

                  <div className="mt-5 max-w-sm space-y-3 text-[14.5px] leading-[1.75] text-wood-700/85">
                    {p.body.map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>

                  <p className="mt-6 text-[13px] italic leading-[1.7] text-wood-500">
                    {p.fitFor}
                  </p>

                  <a
                    href={ZALO}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-7 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.22em] text-wood-700 transition-colors hover:text-wood-900"
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
              Tư vấn riêng
            </div>
            <h2 className="font-display mt-8 text-[2.4rem] font-light leading-[1.06] sm:text-5xl lg:text-[3.25rem]">
              <span className="block">Gửi ảnh hạng mục.</span>
              <span className="block italic font-normal text-wood-200">
                Lotus chọn đúng hệ cho bạn.
              </span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[1.75] text-wood-300">
              Không cần thông tin kỹ thuật. Vài tấm ảnh và mô tả ngắn là đủ
              để Lotus gợi ý quy trình hoàn thiện phù hợp với loại gỗ, môi
              trường và thẩm mỹ của bạn.
            </p>
          </div>

          <div className="flex flex-col gap-6 lg:col-span-5 lg:items-end lg:justify-end lg:pb-2">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 border-b border-background pb-2 text-[13px] uppercase tracking-[0.22em] text-background transition-colors hover:border-wood-300 hover:text-wood-200"
            >
              Nhắn Zalo
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="tel:0943966662"
              className="text-[13px] tracking-wide text-wood-300 transition-colors hover:text-background"
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
   FAQ — quiet, editorial
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
