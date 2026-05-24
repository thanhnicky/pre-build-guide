import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { i as MessageCircle, X, h as Menu, C as Camera, A as ArrowUpRight, b as ChevronLeft, c as ChevronRight, F as Factory, j as Ship, d as CircleCheckBig, e as FileText, f as FlaskConical, k as Wrench, T as Truck, S as ShieldCheck, L as Leaf, W as Wind, g as MapPin, M as Mail, G as Globe, P as Phone, I as Image, a as ChevronDown } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
const logo = "/assets/lotus-logo-C0CbJd0t.jpg";
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const navLinks = [
    { label: "An toàn", href: "#tieu-chuan" },
    { label: "Quy trình", href: "#quy-trinh" },
    { label: "Dự án", href: "#cong-trinh" },
    { label: "Hỏi đáp", href: "#faq" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-wood-200/60 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Lotus Paint", className: "h-9 w-auto object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-8 md:flex", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: link.href,
          className: "text-[13px] tracking-wide text-wood-700 transition-colors hover:text-wood-900",
          children: link.label
        },
        link.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-3 md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "tel:0943966662",
            className: "text-[13px] tracking-wide text-wood-600 transition-colors hover:text-wood-900",
            children: "0943 966 662"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://zalo.me/0943966662",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-1.5 rounded-full bg-wood-900 px-4 py-2 text-[13px] font-medium tracking-wide text-background transition-colors hover:bg-wood-800",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
              "Zalo"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "md:hidden",
          onClick: () => setOpen(!open),
          "aria-label": "Toggle menu",
          children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5 text-wood-700" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5 text-wood-700" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-wood-200/50 px-4 py-4 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col gap-3", children: [
      navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: link.href,
          className: "text-sm font-medium text-wood-700 transition-colors hover:text-wood-900",
          onClick: () => setOpen(false),
          children: link.label
        },
        link.label
      )),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "tel:0943966662",
            className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wood-100 px-3 py-2 text-sm font-medium text-wood-700",
            children: "0943 966 662"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://zalo.me/0943966662",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wood-600 px-3 py-2 text-sm font-medium text-primary-foreground",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
              "Zalo"
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "border-t border-wood-200 bg-background py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: logo,
            alt: "Lotus Paint",
            className: "h-14 w-auto object-contain"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] leading-[1.7] text-wood-700", children: "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12px] text-wood-500", children: "MST: 0313351528" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 text-[13px] text-wood-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-wood-500" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm, TP.HCM" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "mailto:sales@sonlotus.vn",
            className: "flex items-center gap-2 transition-colors hover:text-wood-900",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-3.5 w-3.5 text-wood-500" }),
              "sales@sonlotus.vn"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://www.sonlotus.vn",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 transition-colors hover:text-wood-900",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-3.5 w-3.5 text-wood-500" }),
              "www.sonlotus.vn"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 text-[13px] text-wood-700", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "tel:0943966662",
            className: "flex items-center gap-2 transition-colors hover:text-wood-900",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-3.5 w-3.5 text-wood-500" }),
              "Hotline: 0943 966 662"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://zalo.me/0943966662",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center gap-2 transition-colors hover:text-wood-900",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-3.5 w-3.5 text-wood-500" }),
              "Nhắn Zalo"
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 border-t border-wood-200 pt-6 text-center text-xs text-muted-foreground sm:text-left", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Sơn Lotus. Tư vấn quy trình sơn gỗ đúng nhu cầu."
    ] })
  ] }) });
}
const ZALO$2 = "https://zalo.me/0943966662";
function StickyMobileCTA({ reducedDominance = false }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed inset-x-0 bottom-0 z-40 border-t border-wood-200 backdrop-blur md:hidden transition-all duration-300 ease-out ${reducedDominance ? "bg-background/80 px-2 py-1.5 shadow-[0_-2px_10px_rgba(0,0,0,0.05)] scale-95 opacity-70" : "bg-background/95 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: ZALO$2,
            target: "_blank",
            rel: "noopener noreferrer",
            className: `inline-flex flex-1 items-center justify-center gap-1.5 rounded-full text-sm font-semibold shadow-md transition-colors hover:bg-wood-700 ${reducedDominance ? "bg-wood-600/80 px-3 py-2 text-xs" : "bg-wood-600 px-4 py-3"} text-primary-foreground`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
              "Nhắn Zalo"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: ZALO$2,
            target: "_blank",
            rel: "noopener noreferrer",
            className: `inline-flex items-center justify-center gap-1.5 rounded-full border border-wood-300 bg-background text-sm font-semibold text-wood-800 transition-colors hover:bg-wood-100 ${reducedDominance ? "px-3 py-2 text-xs" : "px-4 py-3"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "h-4 w-4" }),
              "Gửi ảnh"
            ]
          }
        )
      ] })
    }
  );
}
const ZALO$1 = "https://zalo.me/0943966662";
function StickyZalo() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: ZALO$1,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-wood-900 px-5 py-3 text-[13px] font-medium text-background shadow-lg transition-colors hover:bg-wood-700 md:inline-flex",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
        "Nhắn Zalo kỹ thuật"
      ]
    }
  );
}
const heroImg = "/assets/lotus-hero-8ya1L8m7.jpg";
const heroWood = "/assets/hero-wood-C8NFFYmD.jpg";
const procLau = "/assets/proc-lau-B1tt-_w3.jpg";
const procPhun = "/assets/proc-phun-BbMeqFzX.jpg";
const procMdf = "/assets/proc-mdf-D5MA-BGZ.jpg";
const procBong = "/assets/proc-bong-CIHibdzh.jpg";
const ZALO = "https://zalo.me/0943966662";
function LotusLanding() {
  const [isSelectorInteracting, setIsSelectorInteracting] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pb-24 md:pb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PartnersSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AudienceSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyWaterSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinishFinder, { onInteractionChange: setIsSelectorInteracting }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TechCollaborationSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CertificationsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lookbook, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ConsultBlock, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyMobileCTA, { reducedDominance: isSelectorInteracting }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyZalo, {})
  ] });
}
function AudienceSection() {
  const audiences = [{
    icon: Factory,
    title: "Xưởng nội thất công trình",
    lead: "Thi công căn hộ, khách sạn, văn phòng cao cấp.",
    bullets: ["Đồng màu giữa các lô — hạn chế chênh sắc khi giao theo đợt", "Hồ sơ kỹ thuật phục vụ nghiệm thu dự án", "Mùi nhẹ, VOC thấp — phù hợp hạng mục bàn giao sớm"],
    tags: ["Dự án cao cấp", "Nội thất công trình"]
  }, {
    icon: Ship,
    title: "Nhà máy / đơn hàng xuất khẩu",
    lead: "Sản xuất đồ gỗ xuất khẩu sang Mỹ, EU, Nhật Bản.",
    bullets: ["TDS / MSDS song ngữ Anh–Việt theo yêu cầu buyer", "Đáp ứng EN71-3 · ASTM F963 · FDA · RoHS", "Bề mặt ổn định trên sản lượng lớn, nhiều lô"],
    tags: ["Xuất khẩu Mỹ · EU · Nhật", "Sản lượng lớn"]
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "phu-hop", className: "bg-background py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-600", children: "LOTUS PHÙ HỢP VỚI AI" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Một hệ sơn —" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: "hai nhu cầu sản xuất chính." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6", children: "Cùng quy trình và công thức sơn — Lotus điều chỉnh hồ sơ kỹ thuật và hỗ trợ phù hợp theo từng loại hình xưởng." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8", children: audiences.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 rounded-lg border border-wood-200/60 bg-[#F5F0EA] p-7 sm:p-9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: "h-6 w-6 text-wood-700", strokeWidth: 1.5 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[1.5rem] font-medium leading-[1.2] text-wood-900 sm:text-[1.7rem]", children: a.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[14.5px] leading-[1.6] text-wood-700/85", children: a.lead })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 border-t border-wood-300/40 pt-5", children: a.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-[14px] leading-[1.55] text-wood-800", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "mt-0.5 h-4 w-4 shrink-0 text-wood-600", strokeWidth: 1.75 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
      ] }, b)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto flex flex-wrap gap-2 pt-2", children: a.tags.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-wood-700 px-2.5 py-1 text-[10.5px] font-medium uppercase tracking-[0.12em] text-[#F5F0EA]", children: t }, t)) })
    ] }, a.title)) })
  ] }) });
}
function TechCollaborationSection() {
  const steps = [{
    icon: Camera,
    n: "01",
    title: "Gửi ảnh & mô tả hạng mục",
    body: "Gửi ảnh bề mặt, loại gỗ, môi trường sử dụng và yêu cầu hoàn thiện qua Zalo. Lotus nhìn đúng hạng mục trước, rồi mới đề xuất đúng hệ."
  }, {
    icon: FileText,
    n: "02",
    title: "Đề xuất hệ + hồ sơ kỹ thuật",
    body: "Lotus đề xuất hệ phù hợp theo loại gỗ, môi trường sử dụng và yêu cầu bề mặt của từng hạng mục. Với công trình cần nghiệm thu hoặc đơn hàng cần hồ sơ kỹ thuật, đội ngũ gửi kèm TDS, MSDS và các chứng nhận liên quan."
  }, {
    icon: FlaskConical,
    n: "03",
    title: "Thử mẫu trước khi vào lô",
    body: "Xưởng thử trực tiếp trên mẫu thật để chốt màu, độ bóng, độ bám và cảm giác bề mặt trước khi chạy số lượng lớn. Làm rõ từ đầu sẽ giảm lỗi khi vào lô và đỡ phát sinh lúc bàn giao."
  }, {
    icon: Wrench,
    n: "04",
    title: "Hỗ trợ kỹ thuật tại xưởng",
    body: "Ở lần triển khai đầu, kỹ sư Lotus hỗ trợ tỷ lệ pha, chỉnh súng phun và xử lý lỗi bề mặt ngay tại xưởng. Xưởng không phải tự dò hệ một mình khi chuyển sang hệ nước."
  }, {
    icon: Truck,
    n: "05",
    title: "Cung ứng & theo dõi theo tiến độ",
    body: "Lotus giao hàng theo tiến độ sản xuất, theo dõi độ ổn định giữa các đợt và cùng xưởng điều chỉnh khi vật liệu, thời tiết hoặc điều kiện thi công thay đổi."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "phoi-hop", className: "bg-[#F5F0EA] py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-600", children: "QUY TRÌNH PHỐI HỢP KỸ THUẬT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Từ ảnh mẫu đầu tiên —" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: "đến lô hàng cuối cùng." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6", children: "Lotus đồng hành như một bộ phận kỹ thuật mở rộng của xưởng — không chỉ bán sơn, mà cùng kiểm soát chất lượng đến lô cuối." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5", children: steps.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-col gap-4 rounded-lg border border-wood-200/60 bg-background p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 text-wood-700", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[13px] tracking-normal text-wood-400", children: s.n })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[16px] font-semibold leading-[1.3] text-wood-900", children: s.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13.5px] leading-[1.65] text-wood-700/85", children: s.body })
    ] }, s.n)) })
  ] }) });
}
function PartnersSection() {
  const partners = [{
    src: "/logos/novaland.png",
    alt: "Novaland"
  }, {
    src: "/logos/apc-an-phong.png",
    alt: "APC An Phong"
  }, {
    src: "/logos/masteries-homes.png",
    alt: "Masteries Homes"
  }, {
    src: "/logos/sunl-interior.png",
    alt: "Sun&L Interior"
  }, {
    src: "/logos/xuong-xk-eu-my.png",
    alt: "Xưởng XK EU/Mỹ"
  }, {
    src: "/logos/partner-6.png",
    alt: "Đối tác 6"
  }];
  const scrollerRef = reactExports.useRef(null);
  const [failed, setFailed] = reactExports.useState({});
  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-logo-card]");
    const step = card ? card.offsetWidth + 24 : 200;
    el.scrollBy({
      left: dir * step * 2,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F5F0EA] py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-600", children: "ĐÃ ĐƯỢC TIN DÙNG TẠI" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => scrollBy(-1), "aria-label": "Cuộn trái", className: "absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 flex h-10 w-10 items-center justify-center rounded-full bg-wood-700 text-[#F5F0EA] shadow-sm transition-colors hover:bg-wood-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollerRef, className: "flex gap-6 overflow-x-auto scroll-smooth px-10 sm:px-12 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: partners.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-logo-card": true, className: "snap-start shrink-0 flex h-[60px] w-[160px] items-center justify-center rounded-lg border border-wood-200/60 bg-[#F5F0EA] p-4 basis-full sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-4.5rem)/4)]", title: p.alt, children: failed[p.alt] ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-wood-600 text-center leading-tight", children: p.alt }) : /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.src, alt: p.alt, className: "max-h-full max-w-full object-contain", onError: () => setFailed((f) => ({
        ...f,
        [p.alt]: true
      })) }) }, p.alt)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => scrollBy(1), "aria-label": "Cuộn phải", className: "absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1 sm:translate-x-3 flex h-10 w-10 items-center justify-center rounded-full bg-wood-700 text-[#F5F0EA] shadow-sm transition-colors hover:bg-wood-900", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-10 max-w-2xl text-[15px] leading-[1.75] text-wood-700/85", children: "Sơn Lotus hiện là nhà cung cấp hệ sơn gỗ cho các xưởng nội thất xuất khẩu và chủ đầu tư dự án cao cấp tại TP.HCM." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-16 w-16 border-b border-wood-300/40" })
  ] }) });
}
function TrustBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-wood-200 bg-background pt-12 pb-10 sm:pt-12 sm:pb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 items-center gap-10 text-center sm:grid-cols-2 lg:grid-cols-4", children: [{
    k: "200+",
    v: "xưởng & nhà máy tin dùng"
  }, {
    k: "12+",
    v: "năm kinh nghiệm"
  }, {
    v: "TƯ VẤN KỸ THUẬT 1-1 MIỄN PHÍ"
  }, {
    k: "PHA MÀU THEO YÊU CẦU",
    v: "RAL · NCS · mã màu riêng"
  }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full flex-col justify-center", children: s.k ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[2.25rem] font-semibold text-wood-900 sm:text-[2.75rem]", children: s.k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-[12px] font-medium uppercase tracking-[0.16em] text-wood-500", children: s.v })
  ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-medium uppercase tracking-[0.16em] text-wood-500", children: s.v }) }, i)) }) }) });
}
function CertificationsSection() {
  const badges = [{
    icon: ShieldCheck,
    code: "EN71-3: 2019 + A1:2021",
    name: "An toàn đồ chơi trẻ em — giới hạn kim loại nặng",
    tag: "Châu Âu"
  }, {
    icon: ShieldCheck,
    code: "ASTM F963-17",
    name: "An toàn đồ chơi trẻ em theo tiêu chuẩn Hoa Kỳ",
    tag: "Hoa Kỳ"
  }, {
    icon: CircleCheckBig,
    code: "FDA 21 CFR 178.3800",
    name: "Phù hợp tiếp xúc gián tiếp với thực phẩm",
    tag: "Hoa Kỳ · FDA"
  }, {
    icon: Leaf,
    code: "RoHS Compliant",
    name: "Đáp ứng giới hạn chất độc hại trong sản phẩm",
    tag: "Châu Âu"
  }, {
    icon: Wind,
    code: "Low VOCs · Không Formaldehyde bổ sung",
    name: "VOCs thấp theo tiêu chuẩn quốc tế, không thêm Formaldehyde trong công thức",
    tag: "Phù hợp xưởng kín"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tieu-chuan", className: "bg-background py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-600", children: "TIÊU CHUẨN & CHỨNG NHẬN" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "An toàn kiểm chứng —" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: "phù hợp xuất khẩu." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-[1.7] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6", children: "Hệ nước, VOCs thấp, không thêm Formaldehyde trong công thức — phù hợp hạng mục trong nhà cho trẻ em, bệnh viện, trường học và đơn hàng xuất khẩu sang Mỹ, EU, Nhật Bản." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 flex flex-wrap gap-2", children: badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-full border border-wood-300/70 bg-[#F5F0EA] px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-wood-800", children: b.code }, `pill-${b.code}`)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5", children: badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-lg border border-wood-200/60 bg-[#F5F0EA] p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "mt-0.5 h-5 w-5 shrink-0 text-wood-700", strokeWidth: 1.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[14.5px] font-semibold leading-tight text-wood-900", children: b.code }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[13px] leading-[1.5] text-wood-600", children: b.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2.5 inline-block rounded-full bg-wood-700 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-[#F5F0EA]", children: b.tag })
      ] })
    ] }, b.code)) })
  ] }) });
}
function WhyWaterSection() {
  const cols = [{
    n: "01",
    heading: "Vận hành gọn hơn",
    body: "Không cần pha thêm dung môi, yêu cầu thông gió đơn giản hơn PU.",
    punch: "Giảm tải chi phí phụ trợ trong xưởng."
  }, {
    n: "02",
    heading: "Chuyển hệ có người đi cùng",
    body: "Kỹ sư Lotus xuống xưởng lần đầu: chuẩn tỷ lệ pha, chỉnh súng phun, xử lý lỗi bề mặt.",
    punch: "Rút ngắn thời gian dò hệ."
  }, {
    n: "03",
    heading: "Sẵn cho nghiệm thu & xuất khẩu",
    body: "VOCs thấp theo tiêu chuẩn quốc tế, có TDS / MSDS song ngữ — phù hợp dự án cao cấp và buyer Mỹ, EU, Nhật.",
    punch: "Hồ sơ đầy đủ — giảm vướng khi nghiệm thu."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F5F0EA] py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-600", children: "TẠI SAO HỆ NƯỚC?" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 max-w-3xl text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "PU vẫn sơn được." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: "Nhưng hệ nước giúp xưởng lợi hơn ở đâu?" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5", children: cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 rounded-lg border border-wood-200/60 bg-background p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[13px] tracking-normal text-wood-400", children: c.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[18px] font-medium leading-[1.25] text-wood-900", children: c.heading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-[1.65] text-wood-700/85", children: c.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-auto border-t border-wood-200 pt-4 text-[13.5px] font-semibold uppercase tracking-[0.08em] text-wood-900", children: [
        "→ ",
        c.punch
      ] })
    ] }, c.heading)) })
  ] }) });
}
function Hero() {
  const trust = ["TDS / MSDS", "EN71-3", "ASTM F963", "FDA", "RoHS"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-[oklch(0.97_0.015_82)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pt-12 pb-10 sm:px-10 sm:pt-20 sm:pb-14 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:pt-24 lg:pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 lg:pt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-600", children: "SƠN GỖ HỆ NƯỚC · CHO XƯỞNG NỘI THẤT & NHÀ MÁY SẢN XUẤT" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-6 text-[2.5rem] font-light leading-[1.05] text-wood-900 sm:mt-7 sm:text-[3.5rem] lg:text-[3rem] lg:leading-[1.08]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Sơn gỗ hệ nước cho" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: "xưởng nội thất công trình & đơn hàng xuất khẩu." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-[15.5px] leading-[1.65] text-wood-700/85", children: "Hồ sơ kỹ thuật song ngữ, pha màu RAL / NCS, kỹ sư Lotus hỗ trợ trực tiếp tại xưởng — bề mặt ổn định từ mẫu đầu đến lô cuối." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-medium uppercase tracking-[0.2em] text-wood-500", children: "Hồ sơ & tiêu chuẩn" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2.5 flex flex-wrap gap-1.5", children: trust.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-full border border-wood-300/70 bg-background/60 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-wood-800", children: t }, t)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ZALO, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex w-full items-center justify-center gap-3 rounded-full bg-wood-900 px-7 py-4 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-background shadow-md shadow-wood-900/10 transition-all hover:bg-wood-700 hover:shadow-lg sm:w-auto", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4", strokeWidth: 1.75 }),
          "Gửi ảnh mẫu — nhận tư vấn",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:0943966662", className: "text-[13px] font-medium tracking-wide text-wood-700 transition-colors hover:text-wood-900", children: [
          "hoặc gọi kỹ thuật ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline underline-offset-4", children: "0943 966 662" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/5] overflow-hidden sm:aspect-[5/6] lg:aspect-[4/5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Bề mặt gỗ hoàn thiện Lotus", className: "h-full w-full object-cover" }) }) })
  ] }) });
}
function resolveFinish(surface, location, naturalFinish) {
  if (surface === "natural") {
    if (location === "indoor" && naturalFinish === "grain") {
      return {
        name: "Hệ lau giữ vân — nội thất gỗ tự nhiên",
        tag: "Hệ 1K · gốc nước · giữ vân thật",
        desc: "Lớp màu thấm sâu vào thớ gỗ, tôn vân thật thay vì che phủ. Bề mặt ấm, có chiều sâu, vẫn giữ cảm giác chạm vào gỗ.",
        suitable: "Sồi, óc chó, tần bì — đồ trưng bày, handcraft, nội thất cao cấp, đơn xuất khẩu EU / Mỹ.",
        spec: "Stain lau màu → Sanding Sealer → Acrylic Lacquer trong nhà.",
        products: ["Lotus Wood Stain", "Lotus Sanding Sealer", "Lotus Acrylic Lacquer"],
        image: procLau
      };
    }
    if (location === "indoor" && naturalFinish === "solid") {
      return {
        name: "Hệ phun phủ màu — nội thất gỗ tự nhiên",
        tag: "Hệ 2K · phun · đều màu giữa các lô",
        desc: "Lớp hoàn thiện che phủ đồng đều, ít phụ thuộc kỹ năng thợ. Phù hợp sản xuất hàng loạt, dự án nhiều block cần đồng màu.",
        suitable: "Gỗ tự nhiên & ván dán — nội thất khách sạn, căn hộ, cửa, tủ sản lượng lớn.",
        spec: "Wood Primer → Topcoat pha màu → Clear Coat 2K nội thất.",
        products: ["Lotus Wood Primer", "Lotus Topcoat", "Lotus Clear Coat 2K"],
        image: procPhun
      };
    }
    if (location === "outdoor" && naturalFinish === "grain") {
      return {
        name: "Hệ phun giữ vân — ngoài trời",
        tag: "Hệ 2K outdoor · kháng UV · co giãn",
        desc: "Giữ được vân gỗ tự nhiên trong điều kiện nắng mưa. Lớp phủ co giãn cùng gỗ, hạn chế nứt và bong tróc theo chu kỳ thời tiết.",
        suitable: "Lam, cửa ngoài, pergola, mặt dựng gỗ tự nhiên ngoài trời.",
        spec: "Outdoor Primer kháng UV → Wood Stain ngoại thất → Outdoor Topcoat.",
        products: ["Lotus Outdoor Primer", "Lotus Outdoor Stain", "Lotus Outdoor Topcoat"],
        image: procBong
      };
    }
    return {
      name: "Hệ phủ bóng ngoài trời — màu phủ",
      tag: "Hệ 2K outdoor · phủ kín · kháng UV",
      desc: "Lớp phủ đặc, kín, bền theo chu kỳ nắng mưa. Co giãn cùng gỗ, hạn chế nứt và bong tróc, giảm tần suất bảo dưỡng.",
      suitable: "Cửa, lam, sàn sân vườn, hạng mục outdoor cần che phủ hoàn toàn.",
      spec: "Outdoor Primer → Topcoat pha màu → Outdoor Clear Coat kháng UV.",
      products: ["Lotus Outdoor Primer", "Lotus Outdoor Topcoat", "Lotus Outdoor Clear"],
      image: procBong
    };
  }
  if (location === "indoor") {
    return {
      name: "Hệ màu bệt MDF — nội thất",
      tag: "Hệ 2K · phun · pha theo RAL / NCS",
      desc: "Màu phẳng, sạch, hiện đại — không giả vân gỗ, giữ độ bóng nhất quán trên toàn sản phẩm. Pha theo mã màu, đồng đều giữa các block.",
      suitable: "Tủ bếp, tủ âm tường, cánh cửa, vách trang trí MDF — concept đương đại.",
      spec: "MDF Primer che grain → Topcoat màu bệt → Clear Coat (mờ / bán bóng / bóng cao).",
      products: ["Lotus MDF Primer", "Lotus Topcoat", "Lotus Clear Coat"],
      image: procMdf
    };
  }
  return {
    name: "MDF ngoài trời — cần tư vấn riêng",
    tag: "Hạng mục không tiêu chuẩn",
    desc: "MDF tiêu chuẩn không khuyến nghị đặt trực tiếp ngoài trời. Lotus cần xem ảnh hạng mục và điều kiện che chắn để đề xuất hướng xử lý phù hợp (HMR / WBP / chuyển vật liệu).",
    suitable: "Hạng mục bán ngoài trời, có mái che, hoặc cần thay vật liệu nền.",
    spec: "Phương án tùy theo mức độ tiếp xúc thời tiết — xác nhận với kỹ thuật.",
    products: ["Tư vấn theo hạng mục cụ thể"],
    image: procBong
  };
}
function FinishFinder({
  onInteractionChange
}) {
  const [surface, setSurface] = reactExports.useState(null);
  const [location, setLocation] = reactExports.useState(null);
  const [naturalFinish, setNaturalFinish] = reactExports.useState(null);
  const [isInteracting, setIsInteracting] = reactExports.useState(false);
  const step1Ref = reactExports.useRef(null);
  const step2Ref = reactExports.useRef(null);
  const step3Ref = reactExports.useRef(null);
  const resultRef = reactExports.useRef(null);
  const needsFinishStep = surface === "natural";
  const ready = surface !== null && location !== null && (!needsFinishStep || naturalFinish !== null);
  const result = ready ? resolveFinish(surface, location, naturalFinish) : null;
  const reset = () => {
    setSurface(null);
    setLocation(null);
    setNaturalFinish(null);
    setIsInteracting(false);
    onInteractionChange(false);
    if (step1Ref.current && typeof window !== "undefined" && window.innerWidth < 768) {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      step1Ref.current.scrollIntoView({
        behavior: prefersReducedMotion ? "auto" : "smooth",
        block: "start"
      });
    }
  };
  reactExports.useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 768) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;
    const scrollToElement = (element, offset = 80) => {
      if (!element) return;
      const elementRect = element.getBoundingClientRect();
      const isVisible = elementRect.top >= offset && elementRect.bottom <= window.innerHeight;
      if (!isVisible) {
        const targetPosition = elementRect.top + window.pageYOffset - offset;
        window.scrollTo({
          top: targetPosition,
          behavior: "smooth"
        });
      }
    };
    if (surface && !location && step2Ref.current) {
      setIsInteracting(true);
      onInteractionChange(true);
      const timer = setTimeout(() => {
        scrollToElement(step2Ref.current);
      }, 300);
      return () => clearTimeout(timer);
    }
    if (surface && location && needsFinishStep && !naturalFinish && step3Ref.current) {
      const timer = setTimeout(() => {
        scrollToElement(step3Ref.current);
      }, 300);
      return () => clearTimeout(timer);
    }
    if (ready && resultRef.current) {
      setIsInteracting(false);
      onInteractionChange(false);
      const timer = setTimeout(() => {
        scrollToElement(resultRef.current, 100);
      }, 400);
      return () => clearTimeout(timer);
    }
    if (!surface) {
      setIsInteracting(false);
      onInteractionChange(false);
    }
  }, [surface, location, naturalFinish, needsFinishStep, ready, onInteractionChange]);
  const StepLabel = ({
    n,
    text
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10.5px] uppercase tracking-[0.28em] text-wood-500", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[13px] tracking-normal text-wood-400", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2.5 text-wood-300", children: "·" }),
    text
  ] });
  const Choice = ({
    active,
    onClick,
    children
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick, className: `group flex w-full items-center justify-between gap-4 border px-5 py-4 text-left text-[14px] leading-[1.4] transition-colors sm:px-6 sm:py-5 sm:text-[15px] ${active ? "border-wood-900 bg-wood-900 text-background" : "border-wood-200 bg-background text-wood-800 hover:border-wood-700 hover:text-wood-900"}`, "aria-pressed": active, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[18px] leading-none transition-transform ${active ? "text-background" : "text-wood-400 group-hover:translate-x-0.5"}`, children: "→" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "quy-trinh", className: "bg-background pt-12 pb-20 sm:pt-12 sm:pb-24 lg:pt-12 lg:pb-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-600", children: "Các hệ hoàn thiện chính cho xưởng" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.25rem] font-light leading-[1.06] text-wood-900 sm:text-5xl lg:text-[3.5rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Chọn đúng hệ sơn" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: "trong vài bước." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-[1.7] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6", children: "Cho Lotus biết bề mặt và môi trường sử dụng — hệ phù hợp sẽ hiện ra ngay, kèm cấu hình kỹ thuật và sản phẩm đại diện." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 border border-wood-200 bg-[#FAF7F2] sm:mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 lg:border-r lg:border-wood-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10 p-6 sm:p-10 lg:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: step1Ref, className: "transition-all duration-500 ease-out", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StepLabel, { n: "01", text: "Bề mặt thi công" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-[1.25rem] font-light leading-[1.3] text-wood-900 sm:text-[1.4rem]", children: "Anh / chị đang thi công trên bề mặt nào?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: surface === "natural", onClick: () => {
              setSurface("natural");
              setNaturalFinish(null);
            }, children: "Gỗ tự nhiên / Veneer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: surface === "mdf", onClick: () => {
              setSurface("mdf");
              setNaturalFinish(null);
            }, children: "MDF / HDF / Gỗ công nghiệp" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: step2Ref, className: `transition-all duration-500 ease-out ${surface ? "opacity-100 translate-y-0" : "pointer-events-none opacity-40 translate-y-4"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StepLabel, { n: "02", text: "Môi trường sử dụng" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-[1.25rem] font-light leading-[1.3] text-wood-900 sm:text-[1.4rem]", children: "Sản phẩm sẽ đặt ở đâu?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: location === "indoor", onClick: () => surface && setLocation("indoor"), children: "Trong nhà" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: location === "outdoor", onClick: () => surface && setLocation("outdoor"), children: "Ngoài trời" })
          ] })
        ] }),
        needsFinishStep && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: step3Ref, className: `transition-all duration-500 ease-out ${location ? "opacity-100 translate-y-0" : "pointer-events-none opacity-40 translate-y-4"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StepLabel, { n: "03", text: "Cảm giác bề mặt mong muốn" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-[1.25rem] font-light leading-[1.3] text-wood-900 sm:text-[1.4rem]", children: "Anh / chị muốn giữ vân gỗ hay phủ màu kín?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: naturalFinish === "grain", onClick: () => location && setNaturalFinish("grain"), children: "Giữ vân tự nhiên" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: naturalFinish === "solid", onClick: () => location && setNaturalFinish("solid"), children: "Phủ màu / che phủ" })
          ] })
        ] }),
        ready && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: reset, className: "text-[12px] uppercase tracking-[0.18em] text-wood-600 transition-colors hover:text-wood-900", children: "← Chọn lại từ đầu" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: resultRef, className: "lg:col-span-5", children: !result ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full min-h-[320px] items-center justify-center p-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[260px] text-[14px] leading-[1.7] text-wood-600", children: "Hoàn thành các bước để xem hệ sơn Lotus phù hợp với hạng mục của anh / chị." }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex h-full flex-col transition-all duration-500 ease-out", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[5/4] overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: result.image, alt: result.name, className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-5 p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.22em] text-wood-600", children: "Hệ phù hợp" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-[1.35rem] font-light leading-[1.25] text-wood-900 sm:text-[1.55rem]", children: result.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 inline-flex items-center border border-wood-300 px-2.5 py-1 text-[11px] uppercase tracking-[0.14em] text-wood-700", children: result.tag })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-[1.7] text-wood-700/85", children: result.desc }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("dl", { className: "divide-y divide-wood-200 border-t border-wood-200", children: [{
            label: "Phù hợp cho",
            value: result.suitable
          }, {
            label: "Cấu hình kỹ thuật",
            value: result.spec
          }, {
            label: "Sản phẩm đại diện",
            value: result.products.join(" · ")
          }].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "text-[10.5px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5", children: row.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[13.5px] leading-[1.55] text-wood-800", children: row.value })
          ] }, row.label)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ZALO, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex items-center gap-2 border-b border-wood-900 pb-1 text-[12.5px] font-semibold uppercase tracking-[0.16em] text-wood-900 transition-colors hover:text-wood-700", children: [
            "Nhắn Zalo để tư vấn hệ này",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
          ] }) })
        ] })
      ] }) })
    ] }) })
  ] }) });
}
const PRODUCTS = [{
  image: heroWood,
  name: "Keo trám trét",
  role: "Xử lý khuyết điểm bề mặt trước khi lên sơn",
  app: "Trám vết nứt, lỗ nhỏ trên gỗ tự nhiên và MDF",
  rep: "Lotus Wood Filler"
}, {
  image: procPhun,
  name: "Sơn lót",
  role: "Tăng bám dính và bịt lỗ trước lớp phủ",
  app: "Lót cho hệ lau, phun và màu bệt",
  rep: "Lotus Wood / MDF Primer"
}, {
  image: procLau,
  name: "Sơn lau giữ vân",
  role: "Tôn màu vân gỗ tự nhiên, thấm sâu",
  app: "Đồ gỗ tự nhiên, đơn hàng xuất khẩu EU/Mỹ",
  rep: "Lotus Wood Stain"
}, {
  image: procMdf,
  name: "Sơn phủ màu bệt",
  role: "Lên màu đặc, phẳng, che nền đều",
  app: "MDF, tủ bếp, vách trang trí theo RAL/NCS",
  rep: "Lotus Topcoat / Clear Coat"
}, {
  image: procBong,
  name: "Sơn phủ bảo vệ ngoài trời",
  role: "Kháng UV, chống thấm, co giãn cùng gỗ",
  app: "Lam, sàn deck, cửa, pergola ngoài trời",
  rep: "Lotus Outdoor Topcoat"
}];
function ProductsSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "san-pham", className: "bg-[#F5F0EA] py-16 sm:py-20 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-600", children: "CÁC DÒNG SẢN PHẨM CHÍNH" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-6 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.5rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Từ lớp nền" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: "đến lớp phủ hoàn thiện." })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6", children: "Mỗi nhóm sản phẩm đóng vai trò riêng trong hệ — được phối theo loại gỗ, môi trường và yêu cầu bề mặt của xưởng." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4", children: PRODUCTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-hidden rounded-lg border border-wood-200/60 bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] overflow-hidden bg-wood-200/60", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "h-full w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[16px] font-semibold leading-[1.3] text-wood-900", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] leading-[1.55] text-wood-700/85", children: p.role }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[12.5px] leading-[1.5] text-wood-500", children: p.app }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex flex-wrap items-center gap-x-1.5 gap-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] text-wood-400", children: "Sản phẩm đại diện:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[11px] font-medium text-wood-700", children: p.rep })
        ] })
      ] })
    ] }, p.name)) })
  ] }) });
}
const PROJECTS = [{
  tag: "HỆ PHUN · NỘI THẤT",
  name: "Khách sạn 5 sao — The Grand Saigon",
  type: "Nội thất phòng & hành lang · TP.HCM · 2024",
  note: "320 phòng · đồng màu giữa các lô giao · bàn giao theo tiến độ dự án.",
  image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1400&q=70"
}, {
  tag: "MÀU BỆT · MDF",
  name: "Masterise Homes — The Global City",
  type: "Tủ bếp & tủ âm tường căn hộ cao cấp · TP. Thủ Đức · 2024",
  note: "500 bộ · pha theo RAL · đồng màu ổn định giữa 4 block.",
  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1400&q=70"
}, {
  tag: "HỆ LAU · XUẤT KHẨU EU",
  name: "Xưởng XK Đức — Đơn hàng nội thất nguyên khối",
  type: "Bàn & ghế gỗ tự nhiên · TP.HCM · 2023",
  note: "1.200 sản phẩm · hồ sơ TDS/MSDS song ngữ phục vụ kiểm hàng buyer Đức.",
  image: "https://images.unsplash.com/photo-1611021061285-870b3b39de92?auto=format&fit=crop&w=1400&q=70"
}, {
  tag: "PHỦ BÓNG · OUTDOOR",
  name: "Biệt thự cao cấp — Dự án Sun Group",
  type: "Lam, cửa & sàn gỗ ngoại thất · Đà Nẵng · 2023",
  note: "Phủ kháng UV · bề mặt giữ ổn định sau 3 mùa vận hành ngoài trời.",
  image: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=1400&q=70"
}, {
  tag: "MÀU BỆT · MDF",
  name: "Novaland — Aqua City",
  type: "Tủ bếp & tủ âm tường · Đồng Nai · 2023",
  note: "800 bộ · đồng màu RAL giữa 4 block.",
  image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=70"
}, {
  tag: "HỆ LAU · NỘI THẤT",
  name: "Chuỗi nhà hàng — Saigon Centre",
  type: "Bàn ghế & vách ốp gỗ · TP.HCM · 2022",
  note: "Bề mặt giữ ổn định sau 2 năm vận hành cường độ cao.",
  image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1400&q=70"
}];
function Lookbook() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cong-trinh", className: "bg-[oklch(0.96_0.018_82)] py-24 sm:py-32 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-600", children: "Dự án tiêu biểu" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-4xl lg:text-[2.75rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Những công trình" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: "đã tin dùng Lotus." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display mt-6 max-w-2xl text-[15.5px] italic leading-[1.6] text-wood-700", children: "Từ khách sạn 5 sao đến khu dân cư cao cấp — hệ sơn gỗ Lotus đã được kiểm chứng qua các dự án có yêu cầu kỹ thuật và thẩm mỹ cao nhất." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10", children: PROJECTS.slice(0, 2).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-lg bg-[#FDFAF7] shadow-sm ring-1 ring-wood-200/60 transition-shadow hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/2] overflow-hidden bg-wood-200/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-4 top-4 rounded-full bg-wood-900/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-background backdrop-blur-sm", children: p.tag })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 p-6 sm:p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[1.35rem] font-semibold leading-[1.25] text-wood-900", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-wood-600", children: p.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[13.5px] leading-[1.55] text-wood-500", children: p.note })
      ] })
    ] }, `feat-${i}`)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6", children: PROJECTS.slice(2).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-lg bg-[#FDFAF7] ring-1 ring-wood-200/60 transition-shadow hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-wood-200/60", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.name, loading: "lazy", className: "h-full w-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-3 rounded-full bg-wood-900/90 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-background backdrop-blur-sm", children: p.tag })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[14.5px] font-semibold leading-[1.25] text-wood-900", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11.5px] text-wood-600", children: p.type }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] leading-[1.5] text-wood-500", children: p.note })
      ] })
    ] }, `sm-${i}`)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-14 max-w-xl text-center text-[13.5px] leading-[1.65] text-wood-600 lg:mt-20", children: "Cần xem thêm công trình thực tế hoặc tư vấn hệ sơn phù hợp — liên hệ kỹ thuật qua Zalo hoặc gọi trực tiếp." })
  ] }) });
}
function ConsultBlock() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-wood-900 py-24 text-background sm:py-32 lg:py-40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-400", children: "Tư vấn kỹ thuật · 1:1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.4rem] font-light leading-[1.06] sm:text-5xl lg:text-[3rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Gửi ảnh hạng mục." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-200", children: "Nhận đề xuất hệ trong ngày." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-md text-[15px] leading-[1.7] text-wood-300", children: "Không form, không báo giá tự động — kỹ sư Lotus xem ảnh và đề xuất hệ theo loại gỗ, môi trường và yêu cầu kỹ thuật của xưởng." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-7 space-y-3 text-[14px] leading-[1.6] text-wood-300", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "mt-0.5 h-4 w-4 shrink-0 text-wood-400", strokeWidth: 1.75 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Phản hồi trong giờ làm việc — không để xưởng chờ." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "mt-0.5 h-4 w-4 shrink-0 text-wood-400", strokeWidth: 1.75 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Gửi mẫu vật lý trước khi chốt lô lớn." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "mt-0.5 h-4 w-4 shrink-0 text-wood-400", strokeWidth: 1.75 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Tư vấn kỹ thuật miễn phí trước khi chốt hệ." })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5 lg:col-span-5 lg:items-end lg:justify-end lg:pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ZALO, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex w-full items-center justify-center gap-3 rounded-full bg-background px-7 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-wood-900 shadow-sm transition-colors hover:bg-wood-200 sm:w-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4", strokeWidth: 1.75 }),
        "Gửi ảnh mẫu qua Zalo",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:0943966662", className: "inline-flex items-center gap-2 text-[13px] tracking-wide text-wood-300 transition-colors hover:text-background", children: [
        "hoặc gọi kỹ thuật ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-background underline underline-offset-4", children: "0943 966 662" })
      ] })
    ] })
  ] }) }) });
}
const FAQS = [{
  q: "Sơn Lotus có TDS và MSDS không? Tôi cần hồ sơ cho đơn hàng xuất khẩu.",
  a: "Có. Toàn bộ sản phẩm đều có TDS (Technical Data Sheet) và MSDS (Material Safety Data Sheet) bằng tiếng Anh và tiếng Việt. Nhắn Zalo 0943 966 662 — chúng tôi gửi tài liệu trong giờ làm việc."
}, {
  q: "Tôi nên chọn sơn lau hay sơn phun?",
  a: "Sơn lau cho cảm giác gỗ thật, vân có chiều sâu — hợp đồ gỗ tự nhiên trưng bày. Sơn phun cho bề mặt đều, ổn định và dùng được cho cả nội lẫn ngoại thất. Nếu phân vân, gửi ảnh — Lotus chọn giúp."
}, {
  q: "Lotus có hỗ trợ thử mẫu vật lý trước khi lên đơn lớn không?",
  a: "Có. Lotus khuyến khích xưởng thử trên mẫu thực tế của xưởng để xác nhận màu, độ bóng và độ bám trước khi chốt số lượng lớn. Nhắn Zalo để sắp xếp."
}, {
  q: "Làm số lượng lớn, làm sao đảm bảo bề mặt ổn định giữa các lô?",
  a: "Lotus theo dõi đồng màu giữa các lô, kiểm tra chất lượng từng đợt giao và điều chỉnh khi điều kiện xưởng thay đổi — quy trình chuẩn cho sản lượng lớn và đơn xuất khẩu."
}, {
  q: "MDF có dùng cùng hệ với gỗ tự nhiên không?",
  a: "Không. MDF cần hệ màu bệt riêng để che nền và lên màu phẳng. Dùng sai hệ, bề mặt sẽ loang, bong và xuống cấp nhanh hơn nhiều so với tuổi thọ thật của vật liệu."
}, {
  q: "Lotus có hỗ trợ kỹ thuật tại xưởng khi chuyển sang hệ nước không?",
  a: "Có. Lần đầu chuyển hệ, Lotus hỗ trợ trực tiếp tại xưởng: tỷ lệ pha, chỉnh súng phun, xử lý lỗi bề mặt — không để xưởng tự mò."
}];
function FAQ() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "bg-background py-24 sm:py-28 lg:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10.5px] uppercase tracking-[0.32em] text-wood-600", children: "Hỏi đáp" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2rem] font-light leading-[1.1] text-wood-900 sm:text-[2.25rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: "Sơn Lotus" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: "giải đáp." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "divide-y divide-wood-200 border-t border-b border-wood-200", children: FAQS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border-0 group/faq", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionTrigger, { className: "py-6 text-left font-display text-lg font-normal text-wood-900 hover:no-underline hover:text-wood-700 sm:text-xl [&>svg]:hidden [&[data-state=open]_.faq-preview]:hidden [&[data-state=open]_.faq-icon-plus]:hidden [&:not([data-state=open])_.faq-icon-minus]:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-1 flex-col gap-2 pr-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-preview line-clamp-1 text-[13px] font-sans font-normal text-wood-500", children: f.a })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-wood-300 text-wood-700 transition-colors group-hover/faq:border-wood-700 group-hover/faq:text-wood-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "faq-icon-plus text-[15px] leading-none", children: "+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "faq-icon-minus text-[15px] leading-none", children: "−" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "pb-7 pr-12 text-[14.5px] leading-[1.75] text-wood-700/85", children: f.a })
    ] }, i)) }) })
  ] }) }) });
}
export {
  LotusLanding as component
};
