import { createFileRoute } from "@tanstack/react-router";
import {
  MessageCircle,
  Image as ImageIcon,
  Droplets,
  SprayCan,
  Palette,
  Shield,
  CheckCircle2,
  ArrowRight,
  DoorOpen,
  Armchair,
  Package,
  Layers,
  Grid3x3,
  Fence,
} from "lucide-react";
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
      {
        title: "Sơn Gỗ Lotus — Chọn đúng quy trình sơn cho đúng nhu cầu",
      },
      {
        name: "description",
        content:
          "Lotus có 4 quy trình sơn gỗ chuyên dụng: sơn lau giữ vân, sơn phun nội ngoại thất, sơn màu bệt MDF, phủ bóng ngoài trời. Nhắn Zalo để được tư vấn đúng hệ.",
      },
    ],
  }),
});

function LotusLanding() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <ProcessCards />
        <QuickDecision />
        <Applications />
        <WhyZalo />
        <ProcessOverview />
        <TrustGallery />
        <FinalZaloBlock />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobileCTA />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-wood-900">
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Bề mặt gỗ hoàn thiện cao cấp với sơn Lotus"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-wood-900/85 via-wood-900/60 to-wood-800/70" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:items-center lg:py-32">
        <div className="text-background">
          <span className="inline-block rounded-full border border-wood-400/40 bg-wood-900/40 px-3 py-1 text-xs font-medium uppercase tracking-wider text-wood-200 backdrop-blur-sm">
            Sơn Gỗ Lotus
          </span>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-[3.25rem]">
            Chọn đúng quy trình sơn cho đúng nhu cầu của bạn
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-wood-200 sm:text-lg">
            Lotus có nhiều quy trình sơn gỗ khác nhau: giữ vân gỗ, sơn phun nội
            ngoại thất, sơn màu bệt MDF và phủ bóng bảo vệ ngoài trời. Xem
            nhanh và nhắn Zalo để được tư vấn đúng hệ.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-wood-500 px-6 py-3.5 text-sm font-semibold text-background shadow-lg shadow-wood-900/30 transition-all hover:bg-wood-400 sm:text-base"
            >
              <MessageCircle className="h-4 w-4" />
              Nhắn Zalo để được tư vấn quy trình phù hợp
            </a>
            <a
              href={ZALO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-wood-400/50 bg-wood-900/30 px-6 py-3.5 text-sm font-semibold text-background backdrop-blur-sm transition-colors hover:bg-wood-900/50 sm:text-base"
            >
              <ImageIcon className="h-4 w-4" />
              Gửi ảnh đồ gỗ qua Zalo
            </a>
          </div>

          <ul className="mt-8 flex flex-col gap-2 text-sm text-wood-200 sm:flex-row sm:flex-wrap sm:gap-x-6">
            {[
              "Gốc nước, dễ thi công",
              "Nhiều quy trình cho từng nhu cầu riêng",
              "Tư vấn nhanh qua Zalo",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-wood-300" />
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-wood-400/20 shadow-2xl">
            <img
              src={heroImg}
              alt="Vân gỗ tự nhiên sau khi hoàn thiện với sơn Lotus"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 4 PROCESS CARDS ---------------- */
const PROCESSES = [
  {
    icon: Droplets,
    image: procLau,
    title: "Sơn lau giữ màu vân gỗ",
    desc: "Giải pháp giúp giữ vẻ đẹp tự nhiên của vân gỗ, tạo chiều sâu màu sắc và cảm giác gỗ thật rõ nét hơn.",
    fit: "Đồ gỗ tự nhiên cần làm nổi bật vân gỗ.",
  },
  {
    icon: SprayCan,
    image: procPhun,
    title: "Sơn phun giữ màu vân gỗ — nội & ngoại thất",
    desc: "Quy trình phù hợp khi cần hoàn thiện bề mặt gỗ đẹp, đều, giữ vân gỗ và ứng dụng cho cả nội thất lẫn ngoại thất tùy hệ phù hợp.",
    fit: "Cửa, bàn ghế, lam gỗ trong & ngoài nhà.",
  },
  {
    icon: Palette,
    image: procMdf,
    title: "Sơn màu bệt cho gỗ MDF",
    desc: "Giải pháp dành cho bề mặt MDF khi cần che nền, tạo màu đồng đều, hiện đại và phù hợp nội thất theo phong cách riêng.",
    fit: "Tủ bếp, tủ áo, kệ MDF muốn màu phẳng đẹp.",
  },
  {
    icon: Shield,
    image: procBong,
    title: "Sơn phủ bóng chuyên dụng bảo vệ gỗ ngoài trời",
    desc: "Lớp phủ bảo vệ giúp tăng độ bền, chống tác động thời tiết và giữ bề mặt gỗ ngoài trời đẹp lâu hơn.",
    fit: "Hàng rào, sàn deck, lam gỗ ngoại thất.",
  },
];

function ProcessCards() {
  return (
    <section id="quy-trinh" className="bg-wood-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-12 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-wood-500">
            4 quy trình sơn gỗ Lotus
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-wood-900 sm:text-4xl">
            Mỗi nhu cầu — một quy trình sơn riêng
          </h2>
          <p className="mt-3 text-muted-foreground">
            Chọn đúng quy trình giúp bề mặt gỗ đẹp hơn, bền hơn và tiết kiệm
            chi phí thi công.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROCESSES.map((p, i) => (
            <article
              key={p.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-wood-200 bg-card shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={500}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-wood-800 backdrop-blur-sm">
                  <span className="text-wood-500">0{i + 1}</span>
                  <span className="h-3 w-px bg-wood-300" />
                  Quy trình
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-wood-100 text-wood-600">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold leading-snug text-wood-900 sm:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
                <p className="mt-3 rounded-lg bg-wood-50 px-3 py-2 text-xs text-wood-700">
                  <span className="font-semibold">Phù hợp khi: </span>
                  {p.fit}
                </p>

                <a
                  href={ZALO}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-wood-600 px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-wood-700"
                >
                  <MessageCircle className="h-4 w-4" />
                  Hỏi quy trình này qua Zalo
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUICK DECISION ---------------- */
const DECISIONS = [
  {
    need: "Muốn giữ vẻ đẹp tự nhiên của gỗ",
    pick: "Sơn lau giữ màu vân gỗ",
  },
  {
    need: "Muốn hoàn thiện đều đẹp bằng cách sơn phun",
    pick: "Sơn phun giữ màu vân gỗ",
  },
  {
    need: "Muốn sơn màu bệt cho MDF",
    pick: "Hệ màu bệt MDF",
  },
  {
    need: "Muốn tăng độ bảo vệ cho gỗ ngoài trời",
    pick: "Phủ bóng chuyên dụng ngoài trời",
  },
];

function QuickDecision() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-wood-500">
            Gợi ý nhanh
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-wood-900 sm:text-4xl">
            Bạn đang thuộc nhu cầu nào?
          </h2>
        </div>

        <ul className="space-y-3">
          {DECISIONS.map((d) => (
            <li
              key={d.need}
              className="flex flex-col items-start gap-2 rounded-2xl border border-wood-200 bg-card p-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="text-sm font-medium text-wood-800 sm:text-base">
                {d.need}
              </span>
              <span className="flex items-center gap-2 text-sm font-semibold text-wood-600">
                <ArrowRight className="h-4 w-4 shrink-0" />
                {d.pick}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-2xl border border-dashed border-wood-300 bg-wood-50 p-6 text-center">
          <p className="text-sm text-wood-800 sm:text-base">
            Chưa chắc mình thuộc quy trình nào?
          </p>
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-wood-600 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-wood-700"
          >
            <MessageCircle className="h-4 w-4" />
            Nhắn Zalo gửi ảnh để Lotus tư vấn nhanh
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- APPLICATIONS ---------------- */
const APPS = [
  { icon: DoorOpen, label: "Cửa gỗ" },
  { icon: Armchair, label: "Bàn ghế" },
  { icon: Package, label: "Tủ kệ" },
  { icon: Layers, label: "MDF nội thất" },
  { icon: Grid3x3, label: "Lam gỗ" },
  { icon: Fence, label: "Hàng rào / ngoại thất" },
];

function Applications() {
  return (
    <section id="ung-dung" className="bg-wood-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-wood-500">
            Ứng dụng
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-wood-900 sm:text-4xl">
            Sơn Lotus dùng cho hạng mục nào?
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {APPS.map((a) => (
            <div
              key={a.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-wood-200 bg-card p-5 text-center transition-colors hover:border-wood-400"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-wood-100 text-wood-600">
                <a.icon className="h-5 w-5" />
              </div>
              <span className="text-sm font-medium text-wood-800">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY ZALO ---------------- */
const REASONS = [
  "Mỗi loại gỗ và bề mặt phù hợp một quy trình khác nhau.",
  "Nội thất và ngoài trời cần hệ xử lý khác nhau.",
  "MDF và gỗ tự nhiên không nên dùng cùng cách hoàn thiện.",
  "Lotus có thể tư vấn nhanh nếu khách gửi ảnh thực tế.",
];

function WhyZalo() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-wood-500">
            Vì sao cần tư vấn
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-wood-900 sm:text-4xl">
            Vì sao nên nhắn Zalo trước khi chọn quy trình sơn?
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <div
              key={r}
              className="flex gap-4 rounded-2xl border border-wood-200 bg-card p-5"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-wood-100 text-sm font-bold text-wood-700">
                {i + 1}
              </div>
              <p className="text-sm leading-relaxed text-wood-800 sm:text-base">
                {r}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROCESS OVERVIEW ---------------- */
const STEPS = [
  "Xử lý bề mặt",
  "Chọn đúng hệ sơn",
  "Hoàn thiện đúng mục đích sử dụng",
  "Bảo vệ phù hợp với môi trường sử dụng",
];

function ProcessOverview() {
  return (
    <section className="bg-wood-900 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="mb-10 text-center text-background">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-wood-300">
            Quy trình tư vấn
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Lotus tư vấn theo từng bước rõ ràng
          </h2>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <li
              key={s}
              className="rounded-2xl border border-wood-700/60 bg-wood-800/50 p-5 backdrop-blur-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-wood-400">
                Bước {i + 1}
              </div>
              <div className="mt-2 text-base font-semibold text-background">
                {s}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- TRUST GALLERY ---------------- */
const GALLERY = [
  { src: procLau, label: "Thành phẩm giữ vân gỗ" },
  { src: procMdf, label: "MDF màu bệt" },
  { src: procBong, label: "Ngoài trời chống thời tiết" },
  { src: procPhun, label: "Sơn phun đều đẹp" },
];

function TrustGallery() {
  return (
    <section id="cong-trinh" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 max-w-2xl">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-wood-500">
            Công trình thực tế
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-wood-900 sm:text-4xl">
            Thành phẩm hoàn thiện với Lotus
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {GALLERY.map((g) => (
            <figure
              key={g.label}
              className="group relative aspect-square overflow-hidden rounded-2xl"
            >
              <img
                src={g.src}
                alt={g.label}
                loading="lazy"
                width={600}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-wood-900/85 to-transparent p-3 text-xs font-medium text-background sm:text-sm">
                {g.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FINAL ZALO BLOCK ---------------- */
function FinalZaloBlock() {
  return (
    <section className="bg-wood-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="overflow-hidden rounded-3xl border border-wood-200 bg-gradient-to-br from-wood-100 to-background p-8 shadow-sm sm:p-12">
          <div className="text-center">
            <span className="inline-block rounded-full bg-wood-600 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
              Tư vấn miễn phí
            </span>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-wood-900 sm:text-3xl">
              Gửi ảnh đồ gỗ hoặc hạng mục của bạn qua Zalo để được tư vấn đúng
              quy trình sơn Lotus
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
              Chỉ cần gửi ảnh hoặc mô tả ngắn, Lotus sẽ gợi ý quy trình phù hợp
              theo nhu cầu thực tế của bạn.
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={ZALO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-wood-600 px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-md transition-colors hover:bg-wood-700 sm:w-auto sm:text-base"
              >
                <MessageCircle className="h-4 w-4" />
                Nhắn Zalo ngay
              </a>
              <a
                href={ZALO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-wood-300 bg-background px-6 py-3.5 text-sm font-semibold text-wood-800 transition-colors hover:bg-wood-100 sm:w-auto sm:text-base"
              >
                <ImageIcon className="h-4 w-4" />
                Gửi ảnh để được tư vấn
              </a>
            </div>

            <p className="mt-5 text-xs text-muted-foreground">
              Hotline:{" "}
              <a
                href="tel:0943966662"
                className="font-semibold text-wood-700 hover:underline"
              >
                0943 966 662
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  {
    q: "Tôi nên chọn sơn lau hay sơn phun?",
    a: "Sơn lau cho cảm giác gỗ thật, vân gỗ chiều sâu rõ nét, phù hợp đồ gỗ tự nhiên. Sơn phun cho bề mặt phẳng đều, hoàn thiện nhanh và đẹp, phù hợp cả nội & ngoại thất. Nhắn Zalo gửi ảnh để Lotus chọn giúp.",
  },
  {
    q: "MDF có dùng cùng hệ với gỗ tự nhiên không?",
    a: "Không nên. MDF cần hệ màu bệt riêng để che nền và cho màu đồng đều. Gỗ tự nhiên thường dùng hệ giữ vân. Dùng sai hệ sẽ làm bề mặt nhanh xuống cấp.",
  },
  {
    q: "Gỗ ngoài trời nên dùng lớp phủ nào?",
    a: "Gỗ ngoài trời cần lớp phủ bóng chuyên dụng chống tia UV, chống ẩm và co giãn theo thời tiết. Tuyệt đối không dùng hệ nội thất cho ngoài trời.",
  },
  {
    q: "Tôi chưa biết quy trình phù hợp thì làm sao?",
    a: "Cách nhanh nhất là gửi ảnh hạng mục qua Zalo. Lotus sẽ xem trực tiếp và gợi ý đúng quy trình theo loại gỗ, môi trường sử dụng và mong muốn thẩm mỹ.",
  },
  {
    q: "Có thể gửi ảnh qua Zalo để được tư vấn không?",
    a: "Có. Đây là cách Lotus khuyến khích để tư vấn chính xác nhất — chỉ cần ảnh thực tế và mô tả ngắn, không cần thông tin gì phức tạp.",
  },
];

function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-wood-500">
            Câu hỏi thường gặp
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-wood-900 sm:text-4xl">
            Giải đáp nhanh trước khi nhắn Zalo
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="overflow-hidden rounded-2xl border border-wood-200 bg-card px-5"
            >
              <AccordionTrigger className="text-left text-sm font-semibold text-wood-900 hover:no-underline sm:text-base">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- FINAL CTA ---------------- */
function FinalCTA() {
  return (
    <section className="bg-wood-800 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-background sm:text-3xl">
          Mỗi bề mặt gỗ cần một quy trình phù hợp.
          <br />
          Nhắn Zalo để Lotus tư vấn đúng ngay từ đầu.
        </h2>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-background px-6 py-3.5 text-sm font-semibold text-wood-900 shadow-lg transition-all hover:bg-wood-50 sm:w-auto sm:text-base"
          >
            <MessageCircle className="h-4 w-4" />
            Nhắn Zalo để tư vấn ngay
          </a>
          <a
            href={ZALO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-wood-600 px-6 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-wood-700 sm:w-auto sm:text-base"
          >
            <ImageIcon className="h-4 w-4" />
            Gửi ảnh đồ gỗ qua Zalo
          </a>
        </div>
      </div>
    </section>
  );
}
