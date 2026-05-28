import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { R as Root2, I as Item, H as Header, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { N as Navbar, F as Footer } from "./Footer-rvhSXuIN.mjs";
import { u as useTranslation } from "../_libs/react-i18next.mjs";
import { C as Camera, a as ArrowUpRight, F as Factory, l as Ship, e as CircleCheckBig, X, b as ChevronDown, f as FileText, g as FlaskConical, n as Wrench, m as Truck, S as ShieldCheck, h as Leaf, W as Wind, c as ChevronLeft, d as ChevronRight, k as MessageCircle, L as Layers } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "util";
import "crypto";
import "stream";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/i18next.mjs";
import "../_libs/use-sync-external-store.mjs";
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
const ZALO$2 = "https://zalo.me/0943966662";
function StickyMobileCTA({ reducedDominance = false }) {
  const handleScrollToSelector = () => {
    const selectorSection = document.getElementById("chon-he-son");
    if (selectorSection) {
      const headerOffset = 60;
      const elementPosition = selectorSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setTimeout(() => {
        selectorSection.classList.add("ring-2", "ring-wood-400", "ring-offset-2");
        setTimeout(() => {
          selectorSection.classList.remove("ring-2", "ring-wood-400", "ring-offset-2");
        }, 1500);
      }, 500);
    }
  };
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
          "button",
          {
            onClick: handleScrollToSelector,
            className: `inline-flex items-center justify-center gap-1.5 rounded-full border border-wood-300 bg-background text-sm font-semibold text-wood-800 transition-colors hover:bg-wood-100 ${reducedDominance ? "px-3 py-2 text-xs" : "px-4 py-3"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Layers, { className: "h-4 w-4" }),
              "Chọn hệ sơn"
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
      className: "fixed bottom-6 right-6 z-40 hidden items-center gap-2 rounded-full bg-wood-900 px-5 py-3 text-[14px] font-medium text-background shadow-lg transition-colors hover:bg-wood-700 md:inline-flex",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4" }),
        "Nhắn Zalo kỹ thuật"
      ]
    }
  );
}
const heroImg = "/assets/lotus-hero-8ya1L8m7.jpg";
const kiemTraMau = "/assets/kiem-tra-mau-thuc-te-xM-bON58.jpg";
const kysuHoTro = "/assets/ky-su-ho-tro-giai-doan-dau-CaMl8z1h.jpg";
const dongHanh = "/assets/dong-hanh-cung-nha-may-CmuVSGjD.jpg";
const congTrinhSonGo = "/assets/cong-trinh-son-go-ngoai-troi-lotus-CfL54FRg.jpg";
const nhaMayDonHang = "/assets/nha-may-don-hang-xk-Cn5RtVx5.jpg";
const thuMauTruocLo = "/assets/thu-mau-truoc-khi-vao-lo-BY07_jkW.jpg";
const hoTroKyThuat = "/assets/ho-tro-ky-thuat-tai-xuong-1NYSCKb3.jpg";
const cungUngTienDo = "/assets/cung-ung-theo-doi-tien-do-S4PQoPXP.jpg";
const sonAnToanXK = "/assets/son-an-toan-noi-that-xuat-khau-09-CvYMtbZL.jpeg";
const keoTramTret = "/assets/keo-tram-tret-go-lotus-wood-filler-DMY3Z9Nl.png";
const sonLot = "/assets/son-lot-lap-tim-va-lam-phang-go-lotus-sanding-sealer-CCNSwxq4.png";
const heGiVan = "/assets/son-tao-mau-go-va-hoan-thien-go-noi-that-lotus-woodstain-finish-interior-DNG2Rtg4.png";
const heMauBet = "/assets/son-phu-mau-go-noi-that-lotus-wood-paint-indoor-Ck5aAl0a.png";
const heBaoVeNgoaiThat = "/assets/son-phu-acrylic-lacquer-ngoai-that-lotus-lacquer-exterior-GHjboSva.png";
const heSon2K = "/assets/2k-%20lacquer%202k72%20out%20door-1-uVAmQLmJ.png";
const sonPhunWeb = "/assets/son-phun-lotus-web-DjEAmsS6.webp";
const sonLauWeb = "/assets/son-lau-lotus-web-BnpEq_Sj.jpg";
const mauBetGoTuNhien = "/assets/mau-bet-go-tu-nhien-B2q_qG7Q.jpg";
const sonBetMdfLotus = "/assets/son-bet-mdf-lotus-CgypxrzN.jpg";
const paletteLau = "/assets/palette-lau-BwTL9KX8.png";
const palettePhun = "/assets/palette-phun-DRIcdxGW.png";
const paletteBet = "/assets/palette-bet-B8F11Akr.png";
const pullmanPhuQuoc = "/assets/pullman-phu-quoc-lt-Ctgj6jty.jpg";
const masteriseHn = "/assets/masterise-hn-lt-Bw4LGOT-.webp";
const grandMarinaSaigon = "/assets/grand-marina-saigon-lt-DJFRJA6M.webp";
const nhaMayCasta = "/assets/nha-may-casta-1F61fWB3.png";
const pacificFur = "/assets/pacific-fur-CyySmesp.jpg";
const aeonTanAn = "/assets/aeon-tan-an-DPNXZHYj.jpg";
const logoMasteriseHome = "/assets/logo-masterise-home-ClBqdidz.png";
const logoNemFur = "/assets/logo-nem-fur-BL4zLUbk.png";
const logoNovaland = "/assets/logo-novaland-9Pr96oo8.png";
const logoPrime = "/assets/logo-prime-5ptXBBei.png";
const logoPullman = "/assets/logo-pullman-CJR2_Htr.png";
const logoAlc = "/assets/logo-alc-DmbDMgyX.png";
const logoScg = "/assets/logo-scg-n7X-XJR3.jpg";
const logoSofitels = "/assets/logo-Sofitels-5fHEngPS.jpg";
const ZALO = "https://zalo.me/0943966662";
const PARTNERS = [{
  src: logoMasteriseHome,
  alt: "Masterise Homes"
}, {
  src: logoNemFur,
  alt: "NEM Furniture"
}, {
  src: logoNovaland,
  alt: "Novaland"
}, {
  src: logoPrime,
  alt: "Prime"
}, {
  src: logoPullman,
  alt: "Pullman"
}, {
  src: logoAlc,
  alt: "ALC"
}, {
  src: logoScg,
  alt: "SCG"
}, {
  src: logoSofitels,
  alt: "Sofitel"
}];
const heroMainImage = heroImg;
const proofTestImage = kiemTraMau;
const proofEngineerImage = kysuHoTro;
const proofFinishedImage = dongHanh;
const audienceFactoryImage = congTrinhSonGo;
const audienceExportImage = nhaMayDonHang;
const techStep3Image = thuMauTruocLo;
const techStep4Image = hoTroKyThuat;
const techStep5Image = cungUngTienDo;
const ctaSupportImage = sonAnToanXK;
function LotusLanding() {
  const [isSelectorInteracting, setIsSelectorInteracting] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "pb-24 md:pb-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProofGallery, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AudienceSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WhyWaterSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FinishFinder, { onInteractionChange: setIsSelectorInteracting }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ProductsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TechCollaborationSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CertificationsSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Lookbook, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PartnersSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ConsultBlock, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyMobileCTA, { reducedDominance: isSelectorInteracting }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(StickyZalo, {})
  ] });
}
function AudienceSection() {
  const {
    t
  } = useTranslation();
  const audiences = [{
    icon: Factory,
    image: audienceFactoryImage,
    // TODO: replace with actual interior construction photo
    title: t("audience.factory.title"),
    lead: t("audience.factory.lead"),
    bullets: t("audience.factory.bullets", {
      returnObjects: true
    }),
    tags: t("audience.factory.tags", {
      returnObjects: true
    })
  }, {
    icon: Ship,
    image: audienceExportImage,
    // TODO: replace with actual factory/export production photo
    title: t("audience.export.title"),
    lead: t("audience.export.lead"),
    bullets: t("audience.export.bullets", {
      returnObjects: true
    }),
    tags: t("audience.export.tags", {
      returnObjects: true
    })
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "phu-hop", className: "bg-background py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]", children: t("audience.label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: t("audience.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: t("audience.titleItalic") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6 sm:text-[18px]", children: t("audience.description") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2 lg:gap-8", children: audiences.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-hidden rounded-lg border border-wood-200/60 bg-[#F5F0EA]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/7] overflow-hidden bg-wood-200/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: a.image, alt: a.title, loading: "lazy", className: "h-full w-full object-cover object-center" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-6 p-7 sm:p-9", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(a.icon, { className: "h-6 w-6 text-wood-700", strokeWidth: 1.5 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[1.5rem] font-medium leading-[1.2] text-wood-900 sm:text-[1.7rem]", children: a.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[16px] leading-[1.6] text-wood-700/85 sm:text-[17px]", children: a.lead })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5 border-t border-wood-300/40 pt-5", children: a.bullets.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-[16px] leading-[1.6] text-wood-800", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "mt-0.5 h-4 w-4 shrink-0 text-wood-600", strokeWidth: 1.75 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: b })
        ] }, b)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto flex flex-wrap gap-2 pt-2", children: a.tags.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display rounded-full bg-wood-700 px-2.5 py-1 text-[12px] font-medium uppercase tracking-[0.12em] text-[#F5F0EA] sm:text-[13px]", children: t2 }, t2)) })
      ] })
    ] }, a.title)) })
  ] }) });
}
function TechCollaborationSection() {
  const {
    t
  } = useTranslation();
  const steps = [{
    icon: Camera,
    n: "01",
    title: t("tech.step1.title"),
    body: t("tech.step1.body"),
    image: "",
    imageCaption: ""
  }, {
    icon: FileText,
    n: "02",
    title: t("tech.step2.title"),
    body: t("tech.step2.body"),
    image: "",
    imageCaption: ""
  }, {
    icon: FlaskConical,
    n: "03",
    title: t("tech.step3.title"),
    body: t("tech.step3.body"),
    image: techStep3Image,
    // TODO: replace with actual sample-board / color-test photo
    imageCaption: "Bảng mẫu test màu thực tế trước khi vào lô"
  }, {
    icon: Wrench,
    n: "04",
    title: t("tech.step4.title"),
    body: t("tech.step4.body"),
    image: techStep4Image,
    // TODO: replace with actual engineer directing spray at workshop
    imageCaption: "Kỹ sư chỉnh hệ — hướng dẫn phun tại xưởng"
  }, {
    icon: Truck,
    n: "05",
    title: t("tech.step5.title"),
    body: t("tech.step5.body"),
    image: techStep5Image,
    // TODO: replace with actual paint supply / warehouse photo
    imageCaption: "Cung ứng đúng tiến độ sản xuất"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "phoi-hop", className: "bg-[#F5F0EA] py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]", children: t("tech.label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: t("tech.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: t("tech.titleItalic") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6 sm:text-[18px]", children: t("tech.description") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 gap-5 sm:mt-16 sm:grid-cols-2", children: steps.slice(0, 2).map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 rounded-lg border border-wood-200/60 bg-background p-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[2.5rem] font-light leading-none text-wood-200 lg:text-[3rem]", children: s.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 -mt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 shrink-0 text-wood-700 mt-0.5", strokeWidth: 1.5 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[16px] font-semibold leading-[1.3] text-wood-900 sm:text-[17px]", children: s.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] leading-[1.65] text-wood-700/85", children: s.body })
    ] }, s.n)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-col gap-5", children: steps.slice(2).map((s, idx) => {
      const textLeft = idx % 2 === 0;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-lg border border-wood-200/60 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `flex flex-col gap-4 p-7 sm:p-9 ${textLeft ? "lg:order-1" : "lg:order-2"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[2.5rem] font-light leading-none text-wood-200 lg:text-[3rem]", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 -mt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5 shrink-0 text-wood-700 mt-0.5", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[16px] font-semibold leading-[1.3] text-wood-900 sm:text-[17px]", children: s.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] leading-[1.65] text-wood-700/85", children: s.body })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative aspect-[4/3] overflow-hidden bg-wood-200/30 ${textLeft ? "lg:order-2" : "lg:order-1"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: s.image, alt: s.imageCaption, loading: "lazy", className: "h-full w-full object-cover object-center" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent px-4 pb-3 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium tracking-wide text-white/90", children: s.imageCaption }) })
        ] })
      ] }) }, s.n);
    }) })
  ] }) });
}
function PartnersSection() {
  const {
    t
  } = useTranslation();
  const partners = [{
    src: logoMasteriseHome,
    alt: "Masterise Homes",
    variant: "logo--wide logo--masterise"
  }, {
    src: logoNemFur,
    alt: "Nem Furniture",
    variant: "logo--nem-fur"
  }, {
    src: logoNovaland,
    alt: "Novaland",
    variant: "logo--wide"
  }, {
    src: logoPrime,
    alt: "Prime"
  }, {
    src: logoPullman,
    alt: "Pullman",
    variant: "logo--has-bg logo--pullman"
  }, {
    src: logoAlc,
    alt: "ALC"
  }, {
    src: logoScg,
    alt: "SCG",
    variant: "logo--has-bg logo--scg"
  }, {
    src: logoSofitels,
    alt: "Sofitels",
    variant: "logo--has-bg logo--sofitels"
  }];
  const scrollerRef = reactExports.useRef(null);
  const [failed, setFailed] = reactExports.useState({});
  const scrollBy = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("[data-logo-card]");
    const step = card ? card.offsetWidth + 24 : 200;
    const multiplier = window.innerWidth < 640 ? 3 : 2;
    el.scrollBy({
      left: dir * step * multiplier,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F5F0EA] py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14 text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]", children: t("partners.label") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => scrollBy(-1), "aria-label": "Cuộn trái", className: "absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-1 sm:-translate-x-3 flex h-8 w-8 items-center justify-center rounded-full bg-wood-700/50 text-[#F5F0EA] shadow-sm transition-colors hover:bg-wood-700/70 sm:h-10 sm:w-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 sm:h-5 sm:w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: scrollerRef, className: "flex gap-4 overflow-x-auto scroll-smooth px-8 sm:px-12 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", children: partners.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-logo-card": true, className: `${p.variant || ""} logo-item snap-start shrink-0 flex min-h-[156px] w-[calc((100%-1rem)/2)] items-center justify-center rounded-lg border border-wood-200/60 bg-[#F5F0EA] p-6 sm:w-[160px] sm:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-4.5rem)/4)]`, title: p.alt, children: failed[p.alt] ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[12px] font-medium text-wood-600 text-center leading-tight sm:text-[13px]", children: p.alt }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo-mark", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.src, alt: p.alt, className: "max-w-full max-h-[62px] w-auto h-auto object-contain", onError: () => setFailed((f) => ({
        ...f,
        [p.alt]: true
      })) }) }) }, p.alt)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => scrollBy(1), "aria-label": "Cuộn phải", className: "absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-1 sm:translate-x-3 flex h-8 w-8 items-center justify-center rounded-full bg-wood-700/50 text-[#F5F0EA] shadow-sm transition-colors hover:bg-wood-700/70 sm:h-10 sm:w-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 sm:h-5 sm:w-5" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-10 max-w-2xl text-[17px] leading-[1.75] text-wood-700/85 sm:text-[18px]", children: t("partners.description") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mt-16 w-16 border-b border-wood-300/40" })
  ] }) });
}
function ProofGallery() {
  const items = [{
    image: proofTestImage,
    caption: "Kiểm tra màu sắc trước khi sản xuất",
    alt: "Kiểm tra màu sắc thực tế trước khi vào lô sản xuất — Lotus Paint"
  }, {
    image: proofEngineerImage,
    caption: "Hỗ trợ kỹ thuật từ giai đoạn làm mẫu",
    alt: "Kỹ sư Lotus hỗ trợ kỹ thuật trực tiếp tại xưởng nội thất"
  }, {
    image: proofFinishedImage,
    caption: "Đồng hành cùng nhà máy sản xuất",
    alt: "Lotus đồng hành cùng nhà máy sản xuất nội thất trong suốt quá trình"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background pb-16 sm:pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5", children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group overflow-hidden rounded-lg ring-1 ring-wood-200/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] overflow-hidden bg-wood-200/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: item.image, alt: item.alt, loading: "lazy", className: "h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-wood-200/50 px-4 py-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[13px] font-medium text-wood-700 sm:text-[14px]", children: item.caption }) })
  ] }, i)) }) }) });
}
function TrustBar() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-wood-200 bg-background pt-12 pb-10 sm:pt-12 sm:pb-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 items-start gap-6 text-center lg:grid-cols-4 lg:gap-10", children: [{
      k: "200+",
      v: t("trust.stat1Label")
    }, {
      k: "12+",
      v: t("trust.stat2Label")
    }, {
      v: t("trust.consult")
    }, {
      v: t("trust.custom")
    }].map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full flex-col justify-center", children: s.k ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[2.25rem] font-semibold text-wood-900 sm:text-[2.75rem]", children: s.k }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-[14px] font-medium uppercase tracking-[0.16em] text-wood-500 sm:text-[15px]", children: s.v })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[14px] font-medium uppercase tracking-[0.16em] text-wood-500 sm:text-[15px]", children: s.v }) }, i)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 border-t border-wood-200/50 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-10", children: PARTNERS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.src, alt: p.alt, className: "h-10 w-auto max-w-[146px] object-contain opacity-[0.55] grayscale transition-opacity duration-200 hover:opacity-[0.85] sm:h-14 sm:max-w-[182px]" }, p.alt)) }) })
  ] }) });
}
function CertificationsSection() {
  const {
    t
  } = useTranslation();
  const badges = [{
    icon: ShieldCheck,
    code: "EN71-3: 2019 + A1:2021",
    name: t("certifications.cert1.name"),
    tag: t("certifications.cert1.tag")
  }, {
    icon: ShieldCheck,
    code: "ASTM F963-17",
    name: t("certifications.cert2.name"),
    tag: t("certifications.cert2.tag")
  }, {
    icon: CircleCheckBig,
    code: "FDA 21 CFR 178.3800",
    name: t("certifications.cert3.name"),
    tag: t("certifications.cert3.tag")
  }, {
    icon: Leaf,
    code: "RoHS Compliant",
    name: t("certifications.cert4.name"),
    tag: t("certifications.cert4.tag")
  }, {
    icon: Wind,
    code: "Low VOCs · Không Formaldehyde bổ sung",
    name: t("certifications.cert5.name"),
    tag: t("certifications.cert5.tag")
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "tieu-chuan", className: "bg-background py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]", children: t("certifications.label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: t("certifications.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: t("certifications.titleItalic") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] leading-[1.7] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6 sm:text-[18px]", children: t("certifications.description") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-10 flex flex-wrap gap-2", children: badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-display rounded-full border border-wood-300/70 bg-[#F5F0EA] px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-[0.12em] text-wood-800 sm:text-[14px]", children: b.code }, `pill-${b.code}`)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5", children: badges.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4 rounded-lg border border-wood-200/60 bg-[#F5F0EA] p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(b.icon, { className: "mt-0.5 h-5 w-5 shrink-0 text-wood-700", strokeWidth: 1.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[16px] font-semibold leading-tight text-wood-900 sm:text-[17px]", children: b.code }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-[15px] leading-[1.5] text-wood-600 sm:text-[16px]", children: b.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display mt-2.5 inline-block rounded-full bg-wood-700 px-2 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-[#F5F0EA] sm:text-[12px]", children: b.tag })
      ] })
    ] }, b.code)) })
  ] }) });
}
function WhyWaterSection() {
  const {
    t
  } = useTranslation();
  const cols = [{
    n: "01",
    heading: t("whyWater.col1.heading"),
    body: t("whyWater.col1.body"),
    punch: t("whyWater.col1.punch")
  }, {
    n: "02",
    heading: t("whyWater.col2.heading"),
    body: t("whyWater.col2.body"),
    punch: t("whyWater.col2.punch")
  }, {
    n: "03",
    heading: t("whyWater.col3.heading"),
    body: t("whyWater.col3.body"),
    punch: t("whyWater.col3.punch")
  }, {
    n: "04",
    heading: t("whyWater.col4.heading"),
    body: t("whyWater.col4.body"),
    punch: t("whyWater.col4.punch")
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-[#F5F0EA] py-20 sm:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]", children: t("whyWater.label") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 max-w-3xl text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: t("whyWater.title") }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: t("whyWater.titleItalic") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4", children: cols.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 rounded-lg border border-wood-200/60 bg-background p-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[2.5rem] font-light leading-none text-wood-200 lg:text-[3rem]", children: c.n }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[18px] font-medium leading-[1.25] text-wood-900", children: c.heading }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-[1.65] text-wood-700/85 sm:text-[16px]", children: c.body }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-display mt-auto border-t border-wood-200 pt-4 text-[15px] font-semibold uppercase tracking-[0.08em] text-wood-900 sm:text-[16px]", children: [
        "→ ",
        c.punch
      ] })
    ] }, c.heading)) })
  ] }) });
}
function Hero() {
  const {
    t
  } = useTranslation();
  const trust = ["TDS / MSDS", "EN71-3", "ASTM F963", "FDA", "RoHS"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative bg-[oklch(0.97_0.015_82)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-6 pt-12 pb-10 sm:px-10 sm:pt-20 sm:pb-14 lg:grid-cols-12 lg:gap-16 lg:px-14 lg:pt-24 lg:pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5 lg:pt-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]", children: t("hero.subtitle") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-6 text-[2.25rem] font-light leading-[1.08] text-wood-900 sm:mt-7 sm:text-[3rem] lg:text-[3.5rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: t("hero.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: t("hero.titleItalic") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-md text-[17px] leading-[1.7] text-wood-700/85 sm:mt-5 sm:text-[18px]", children: t("hero.description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 block", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[12px] font-medium uppercase tracking-[0.2em] text-wood-500 sm:text-[13px]", children: t("hero.trustLabel") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-2.5 flex flex-wrap gap-1.5", children: trust.map((t2) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "font-display rounded-full border border-wood-300/70 bg-background/60 px-2.5 py-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-wood-800 sm:text-[14px]", children: t2 }, t2)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col items-start gap-3 sm:mt-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ZALO, target: "_blank", rel: "noopener noreferrer", className: "font-display group inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-wood-700 px-6 py-3.5 text-[13px] font-semibold uppercase tracking-[0.16em] text-background shadow-md shadow-wood-700/10 transition-all hover:bg-wood-600 hover:shadow-lg sm:w-auto sm:text-[13px] whitespace-nowrap", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-3.5 w-3.5 shrink-0", strokeWidth: 1.75 }),
          t("hero.ctaButton"),
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3 w-3 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:0943966662", className: "text-[15px] font-medium tracking-wide text-wood-700 transition-colors hover:text-wood-900 whitespace-nowrap sm:text-[16px]", children: [
          t("hero.ctaPhone"),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "underline underline-offset-4", children: "0943 966 662" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-sm bg-wood-200/40 aspect-[16/10] sm:aspect-[4/3]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroMainImage, alt: "Bề mặt gỗ hoàn thiện bằng sơn hệ nước Lotus — vân rõ, màu đồng đều", className: "h-full w-full object-cover object-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent px-4 pb-3 pt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-medium tracking-wide text-white/90", children: "Bề mặt hoàn thiện giữ vân, đồng đều màu" }) })
    ] }) })
  ] }) });
}
function resolveCoatingSystem(surface, location, naturalFinish, t) {
  if (surface === "natural" && naturalFinish === "grain" && location === "indoor") {
    return {
      title: t("finishFinder.system1.title"),
      suitableFor: t("finishFinder.system1.suitableFor"),
      methodType: "dual",
      colorType: "grain",
      colors: [{
        name: "Sồi sáng",
        code: "Oak Light",
        hex: "#C9A87C"
      }, {
        name: "Óc chó",
        code: "Walnut",
        hex: "#4D2A16"
      }, {
        name: "Gỗ mun",
        code: "Ebony",
        hex: "#261710"
      }, {
        name: "Anh đào",
        code: "Cherry",
        hex: "#B84528"
      }, {
        name: "Teak",
        code: "Teak",
        hex: "#D4BB8C"
      }],
      methodLau: {
        process: t("finishFinder.system1.methodLau.process"),
        representativeProducts: ["Lotus wood stain", "Lotus sanding sealer", "Lotus acrylic lacquer IN"],
        image: sonLauWeb,
        notes: t("finishFinder.system1.methodLau.notes"),
        fullChartImage: paletteLau
      },
      methodPhun: {
        process: t("finishFinder.system1.methodPhun.process"),
        representativeProducts: ["Lotus sanding sealer", "Lotus woodstain finish interior"],
        image: sonPhunWeb,
        notes: t("finishFinder.system1.methodPhun.notes"),
        fullChartImage: palettePhun
      }
    };
  }
  if (surface === "natural" && naturalFinish === "solid" && location === "indoor") {
    return {
      title: t("finishFinder.system2.title"),
      suitableFor: t("finishFinder.system2.suitableFor"),
      methodType: "single",
      colorType: "solid",
      colors: [{
        name: "Trắng tinh khiết",
        code: "RAL 9010",
        hex: "#FFFFFF"
      }, {
        name: "Kem",
        code: "RAL 9001",
        hex: "#F5F5DC"
      }, {
        name: "Xám nhạt",
        code: "RAL 9016",
        hex: "#E0E0E0"
      }, {
        name: "Be",
        code: "RAL 1001",
        hex: "#F5F5DC"
      }, {
        name: "Xám mềm",
        code: "RAL 7035",
        hex: "#B0B0B0"
      }],
      singleMethod: {
        process: t("finishFinder.system2.process"),
        representativeProducts: ["Lotus wood primer", "Lotus wood paint IN"],
        image: mauBetGoTuNhien,
        notes: t("finishFinder.system2.notes"),
        fullChartImage: paletteBet
      }
    };
  }
  if (surface === "natural" && naturalFinish === "grain" && location === "outdoor") {
    return {
      title: t("finishFinder.system3.title"),
      suitableFor: t("finishFinder.system3.suitableFor"),
      methodType: "dual",
      colorType: "grain",
      colors: [{
        name: "Cedar",
        code: "Cedar",
        hex: "#A0522D"
      }, {
        name: "Redwood",
        code: "Redwood",
        hex: "#CD853F"
      }, {
        name: "Brown Oak",
        code: "Brown Oak",
        hex: "#8B4513"
      }, {
        name: "Dark Walnut",
        code: "Dark Walnut",
        hex: "#4A3728"
      }, {
        name: "Natural Teak",
        code: "Natural Teak",
        hex: "#D2B48C"
      }],
      methodLau: {
        process: t("finishFinder.system3.methodLau.process"),
        representativeProducts: ["Lotus wood stain", "Lotus sanding sealer", "Lotus acrylic lacquer EX"],
        image: sonLauWeb,
        notes: t("finishFinder.system3.methodLau.notes"),
        fullChartImage: paletteLau
      },
      methodPhun: {
        process: t("finishFinder.system3.methodPhun.process"),
        representativeProducts: ["Lotus sanding sealer", "Lotus woodstain finish exterior", "Lotus PUD EX"],
        image: sonPhunWeb,
        notes: t("finishFinder.system3.methodPhun.notes"),
        fullChartImage: palettePhun
      }
    };
  }
  if (surface === "natural" && naturalFinish === "solid" && location === "outdoor") {
    return {
      title: t("finishFinder.system4.title"),
      suitableFor: t("finishFinder.system4.suitableFor"),
      methodType: "single",
      colorType: "solid",
      colors: [{
        name: "Trắng ngoại thất",
        code: "RAL 9016",
        hex: "#E0E0E0"
      }, {
        name: "Cát",
        code: "RAL 1002",
        hex: "#F4A460"
      }, {
        name: "Xám đá",
        code: "RAL 7030",
        hex: "#808080"
      }, {
        name: "Terracotta",
        code: "RAL 8001",
        hex: "#E2725B"
      }, {
        name: "Xanh olive",
        code: "RAL 6000",
        hex: "#556B2F"
      }],
      singleMethod: {
        process: t("finishFinder.system4.process"),
        representativeProducts: ["Lotus wood primer", "Lotus wood paint EX"],
        image: mauBetGoTuNhien,
        notes: t("finishFinder.system4.notes"),
        fullChartImage: paletteBet
      }
    };
  }
  if (surface === "mdf" && location === "indoor") {
    return {
      title: t("finishFinder.system5.title"),
      suitableFor: t("finishFinder.system5.suitableFor"),
      methodType: "single",
      colorType: "solid",
      colors: [{
        name: "Trắng MDF",
        code: "RAL 9010",
        hex: "#FFFFFF"
      }, {
        name: "Alabaster",
        code: "RAL 9002",
        hex: "#FAF0E6"
      }, {
        name: "Ngà sáng",
        code: "RAL 1015",
        hex: "#FFFFF0"
      }, {
        name: "Xám ấm",
        code: "RAL 7016",
        hex: "#383E42"
      }, {
        name: "Be mềm",
        code: "RAL 1000",
        hex: "#BEB5A7"
      }],
      singleMethod: {
        process: t("finishFinder.system5.process"),
        representativeProducts: ["Lotus wood primer", "Lotus wood paint IN"],
        image: sonBetMdfLotus,
        notes: t("finishFinder.system5.notes"),
        fullChartImage: paletteBet
      }
    };
  }
  return {
    title: t("finishFinder.fallback.title"),
    suitableFor: t("finishFinder.fallback.suitableFor"),
    methodType: "single",
    colorType: "solid",
    singleMethod: {
      process: t("finishFinder.fallback.process"),
      representativeProducts: ["Tư vấn theo hạng mục"],
      image: sonLauWeb
    }
  };
}
function FinishFinder({
  onInteractionChange
}) {
  const {
    t
  } = useTranslation();
  const [surface, setSurface] = reactExports.useState(null);
  const [location, setLocation] = reactExports.useState(null);
  const [naturalFinish, setNaturalFinish] = reactExports.useState(null);
  const [isInteracting, setIsInteracting] = reactExports.useState(false);
  const [isVisible, setIsVisible] = reactExports.useState(false);
  const [selectedMethod, setSelectedMethod] = reactExports.useState("lau");
  const [showFullColorChart, setShowFullColorChart] = reactExports.useState(false);
  const step1Ref = reactExports.useRef(null);
  const step2Ref = reactExports.useRef(null);
  const step3Ref = reactExports.useRef(null);
  const resultRef = reactExports.useRef(null);
  const sectionRef = reactExports.useRef(null);
  const needsFinishStep = surface === "natural";
  const ready = surface !== null && location !== null && (!needsFinishStep || naturalFinish !== null);
  const coatingSystem = ready ? resolveCoatingSystem(surface, location, naturalFinish, t) : null;
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
      const isVisible2 = elementRect.top >= offset && elementRect.bottom <= window.innerHeight;
      if (!isVisible2) {
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
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  reactExports.useEffect(() => {
    if (coatingSystem) {
      setSelectedMethod("lau");
    }
  }, [coatingSystem?.title]);
  const StepLabel = ({
    n,
    text
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-[13px] uppercase tracking-[0.28em] text-wood-500 sm:text-[14px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-[15px] tracking-normal text-wood-400 sm:text-[16px]", children: n }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2.5 text-wood-300", children: "·" }),
    text
  ] });
  const Choice = ({
    active,
    onClick,
    children,
    disabled = false
  }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick, disabled, className: `group flex w-full items-center justify-between gap-4 border px-5 py-4 text-left text-[14px] leading-[1.4] transition-colors sm:px-6 sm:py-5 sm:text-[15px] ${disabled ? "border-wood-200 bg-wood-50 text-wood-400 cursor-not-allowed" : active ? "border-wood-900 bg-wood-900 text-background" : "border-wood-200 bg-background text-wood-800 hover:border-wood-700 hover:text-wood-900"}`, "aria-pressed": active, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-[19px] leading-none transition-transform ${active ? "text-background" : "text-wood-400 group-hover:translate-x-0.5"}`, children: "→" })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "chon-he-son", ref: sectionRef, className: `bg-background pt-12 pb-20 sm:pt-12 sm:pb-24 lg:pt-12 lg:pb-28 transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]", children: t("finishFinder.label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.75rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: t("finishFinder.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: t("finishFinder.titleItalic") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] leading-[1.7] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6 sm:text-[18px]", children: t("finishFinder.description") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 border border-wood-200 bg-[#FAF7F2] shadow-sm sm:mt-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 lg:border-r lg:border-wood-200", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-10 p-6 sm:p-10 lg:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: step1Ref, className: "relative transition-all duration-500 ease-out", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-2 top-0 h-full w-0.5 bg-wood-300/50 sm:-left-3" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(StepLabel, { n: "01", text: t("finishFinder.step1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-[1.3rem] font-light leading-[1.3] text-wood-900 sm:text-[1.45rem]", children: t("finishFinder.step1Question") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[15px] text-wood-600/80 sm:hidden", children: t("finishFinder.step1Hint") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: surface === "natural", onClick: () => {
              setSurface("natural");
              setNaturalFinish(null);
            }, children: t("finishFinder.surfaceNatural") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: surface === "mdf", onClick: () => {
              setSurface("mdf");
              setNaturalFinish(null);
            }, children: t("finishFinder.surfaceMdf") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: step2Ref, className: `transition-all duration-500 ease-out ${surface ? "opacity-100 translate-y-0" : "pointer-events-none opacity-40 translate-y-4"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StepLabel, { n: "02", text: t("finishFinder.step2") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-[1.3rem] font-light leading-[1.3] text-wood-900 sm:text-[1.45rem]", children: t("finishFinder.step2Question") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: location === "indoor", onClick: () => surface && setLocation("indoor"), children: t("finishFinder.indoor") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: location === "outdoor", onClick: () => surface !== "mdf" && setLocation("outdoor"), disabled: surface === "mdf", children: t("finishFinder.outdoor") })
          ] })
        ] }),
        needsFinishStep && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: step3Ref, className: `transition-all duration-500 ease-out ${location ? "opacity-100 translate-y-0" : "pointer-events-none opacity-40 translate-y-4"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(StepLabel, { n: "03", text: t("finishFinder.step3") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-[1.3rem] font-light leading-[1.3] text-wood-900 sm:text-[1.45rem]", children: t("finishFinder.step3Question") }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: naturalFinish === "grain", onClick: () => location && setNaturalFinish("grain"), children: t("finishFinder.matte") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Choice, { active: naturalFinish === "solid", onClick: () => location && setNaturalFinish("solid"), children: t("finishFinder.gloss") })
          ] })
        ] }),
        ready && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: reset, className: "font-display text-[12px] uppercase tracking-[0.18em] text-wood-600 transition-colors hover:text-wood-900", children: "← Chọn lại từ đầu" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: resultRef, className: "lg:col-span-5", children: !coatingSystem ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-full min-h-[320px] items-center justify-center p-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-[260px] text-[14px] leading-[1.7] text-wood-600", children: t("finishFinder.completeSteps") }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "flex h-full flex-col transition-all duration-500 ease-out", children: [
        coatingSystem.methodType === "dual" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex border-b border-wood-200 bg-wood-50/50", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSelectedMethod("lau"), className: `font-display flex-1 px-4 py-3 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors sm:text-[14px] ${selectedMethod === "lau" ? "border-b-2 border-wood-900 text-wood-900" : "border-b-2 border-transparent text-wood-600 hover:text-wood-800"}`, children: t("finishFinder.methodLau") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setSelectedMethod("phun"), className: `font-display flex-1 px-4 py-3 text-[13px] font-medium uppercase tracking-[0.14em] transition-colors sm:text-[14px] ${selectedMethod === "phun" ? "border-b-2 border-wood-900 text-wood-900" : "border-b-2 border-transparent text-wood-600 hover:text-wood-800"}`, children: t("finishFinder.methodPhun") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[5/4] overflow-hidden bg-wood-200/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: coatingSystem.methodType === "dual" ? selectedMethod === "lau" ? coatingSystem.methodLau?.image : coatingSystem.methodPhun?.image : coatingSystem.singleMethod?.image, alt: `${coatingSystem.title} - ${coatingSystem.suitableFor}`, className: "h-full w-full object-cover object-center" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-6 p-6 sm:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[13px] uppercase tracking-[0.22em] text-wood-600 sm:text-[14px]", children: t("finishFinder.resultLabel") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-3 text-[1.4rem] font-light leading-[1.25] text-wood-900 sm:text-[1.6rem]", children: coatingSystem.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("dl", { className: "divide-y divide-wood-200 border-t border-wood-200", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]", children: t("finishFinder.suitableFor") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]", children: coatingSystem.suitableFor })
            ] }),
            coatingSystem.methodType === "dual" && selectedMethod === "lau" && coatingSystem.methodLau && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]", children: [
                  t("finishFinder.techConfig"),
                  " (Lau)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]", children: coatingSystem.methodLau.process })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]", children: [
                  t("finishFinder.repProducts"),
                  " (Lau)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]", children: coatingSystem.methodLau.representativeProducts.join(" · ") })
              ] })
            ] }),
            coatingSystem.methodType === "dual" && selectedMethod === "phun" && coatingSystem.methodPhun && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]", children: [
                  t("finishFinder.techConfig"),
                  " (Phun)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]", children: coatingSystem.methodPhun.process })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("dt", { className: "font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]", children: [
                  t("finishFinder.repProducts"),
                  " (Phun)"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]", children: coatingSystem.methodPhun.representativeProducts.join(" · ") })
              ] })
            ] }),
            coatingSystem.methodType === "single" && coatingSystem.singleMethod && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]", children: t("finishFinder.techConfig") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]", children: coatingSystem.singleMethod.process })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-1 py-3 sm:grid-cols-[120px_1fr] sm:gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("dt", { className: "font-display text-[13px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:pt-0.5 sm:text-[14px]", children: t("finishFinder.repProducts") }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("dd", { className: "text-[15px] leading-[1.55] text-wood-800 sm:text-[16px]", children: coatingSystem.singleMethod.representativeProducts.join(" · ") })
              ] })
            ] })
          ] }),
          (coatingSystem.methodType === "single" && coatingSystem.singleMethod?.notes || coatingSystem.methodType === "dual" && (selectedMethod === "lau" ? coatingSystem.methodLau?.notes : coatingSystem.methodPhun?.notes) || coatingSystem.notes) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-lg bg-wood-50/50 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium uppercase tracking-[0.14em] text-wood-600 sm:text-[14px]", children: t("finishFinder.notes") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[15px] leading-[1.6] text-wood-700 sm:text-[16px]", children: coatingSystem.methodType === "dual" ? selectedMethod === "lau" ? coatingSystem.methodLau?.notes || coatingSystem.notes : coatingSystem.methodPhun?.notes || coatingSystem.notes : coatingSystem.singleMethod?.notes || coatingSystem.notes })
          ] }),
          coatingSystem.colors && coatingSystem.colors.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-lg border border-wood-200/60 bg-wood-50/30 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium uppercase tracking-[0.14em] text-wood-600 sm:text-[14px]", children: t("finishFinder.colorRef") }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowFullColorChart(true), className: "text-[12px] font-medium text-wood-700 underline hover:text-wood-900 sm:text-[13px]", children: t("finishFinder.viewFullChart") })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-5 gap-2", children: coatingSystem.colors.slice(0, 5).map((color) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full border border-wood-300/50 shadow-sm", style: {
                backgroundColor: color.hex
              }, title: color.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 text-[11px] text-wood-600 sm:text-[12px]", children: color.code })
            ] }, color.code)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[12px] leading-[1.5] text-wood-500 italic sm:text-[13px]", children: t("finishFinder.colorDisclaimer") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-auto pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ZALO, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex items-center gap-2 border-b border-wood-900 pb-1 text-[14px] font-semibold uppercase tracking-[0.16em] text-wood-900 transition-colors hover:text-wood-700 sm:text-[15px]", children: [
            t("finishFinder.consultThis"),
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
          ] }) })
        ] })
      ] }) })
    ] }) }),
    showFullColorChart && coatingSystem && (() => {
      const currentMethod = coatingSystem.methodType === "dual" ? selectedMethod === "lau" ? coatingSystem.methodLau : coatingSystem.methodPhun : coatingSystem.singleMethod;
      const fullChartImage = currentMethod?.fullChartImage;
      return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-2xl rounded-t-2xl bg-[#F5F0EA] p-6 shadow-2xl sm:rounded-2xl sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[1.3rem] font-semibold text-wood-900", children: t("finishFinder.downloadChart") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowFullColorChart(false), className: "rounded-full p-2 text-wood-600 hover:bg-wood-200/50", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) })
        ] }),
        fullChartImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: fullChartImage, alt: `Bảng màu ${coatingSystem.colorType === "grain" ? "giữ vân" : "màu bệt"} - ${selectedMethod}`, className: "w-full rounded-lg border border-wood-200/60 shadow-sm" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-4 text-[13px] leading-[1.5] text-wood-500 italic sm:text-[14px]", children: "Màu hiển thị trên màn hình chỉ mang tính tham khảo. Vui lòng đối chiếu bảng màu gốc hoặc mẫu thực tế trước khi chốt." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
          fullChartImage && /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: fullChartImage, download: `lotus-color-chart-${coatingSystem.colorType}-${selectedMethod}.png`, className: "flex-1 rounded-lg border border-wood-900 bg-transparent py-3 text-center text-[13px] font-semibold uppercase tracking-[0.14em] text-wood-900 transition-colors hover:bg-wood-900/5 sm:text-[14px]", children: t("finishFinder.download") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowFullColorChart(false), className: "flex-1 rounded-lg bg-wood-900 py-3 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#F5F0EA] transition-colors hover:bg-wood-800 sm:text-[14px]", children: t("finishFinder.close") })
        ] })
      ] }) });
    })()
  ] }) });
}
const PRODUCT_GROUPS = [{
  title: "products.group1.title",
  description: "products.group1.description",
  usage: "products.group1.usage",
  products: ["Lotus Wood Filler", "Lotus Wood Matic"],
  image: keoTramTret
}, {
  title: "products.group2.title",
  description: "products.group2.description",
  usage: "products.group2.usage",
  products: ["Lotus Wood Primer", "Lotus Sanding Sealer"],
  image: sonLot
}, {
  title: "products.group3.title",
  description: "products.group3.description",
  usage: "products.group3.usage",
  products: ["Lotus Wood Stain", "Lotus Wood Stain Finish"],
  image: heGiVan
}, {
  title: "products.group4.title",
  description: "products.group4.description",
  usage: "products.group4.usage",
  products: ["Lotus Wood Paint IN", "Lotus Wood Paint EX"],
  image: heMauBet
}, {
  title: "products.group5.title",
  description: "products.group5.description",
  usage: "products.group5.usage",
  products: ["Lotus Acrylic Lacquer EX", "Lotus PUD EX"],
  image: heBaoVeNgoaiThat
}, {
  title: "products.group6.title",
  description: "products.group6.description",
  usage: "products.group6.usage",
  products: ["Lotus Acrylic Lacquer EX 2K", "Lotus Wood Paint IN 2K", "Lotus Wood Stain Finish 2K"],
  image: heSon2K
}];
function ProductsSection() {
  const {
    t
  } = useTranslation();
  const [expandedGroup, setExpandedGroup] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "san-pham", className: "bg-[#F5F0EA] py-16 sm:py-20 lg:py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]", children: t("products.label") }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-6 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-[2.5rem]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: t("products.title") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: t("products.titleItalic") })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[17px] leading-[1.75] text-wood-700/85 lg:col-span-4 lg:col-start-9 lg:pt-6 sm:text-[18px]", children: t("products.description") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 hidden gap-6 lg:grid lg:grid-cols-3", children: PRODUCT_GROUPS.map((group, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col overflow-hidden rounded-lg border border-wood-200/60 bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "product-image-frame", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: group.image, alt: `${group.title} - ${group.description}`, loading: "lazy", className: index === 5 ? "scale-[103%]" : "" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5 p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-[11px] font-medium uppercase tracking-[0.22em] text-wood-400", children: [
            t("products.group"),
            " ",
            index + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-2 text-[19px] font-semibold leading-[1.2] tracking-[-0.01em] text-wood-900", children: t(group.title) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-[1.7] text-wood-600/90 sm:text-[15px]", children: t(group.description) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 border-t border-wood-200/50 pt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[10px] font-medium uppercase tracking-[0.22em] text-wood-400", children: t("products.usage") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-[14px] leading-[1.6] text-wood-600", children: t(group.usage) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[10px] font-medium uppercase tracking-[0.22em] text-wood-400", children: t("products.repProducts") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 space-y-1.5", children: group.products.map((product, pIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-[14px] italic text-wood-800", children: product }, pIndex)) })
          ] })
        ] })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-4 lg:hidden", children: PRODUCT_GROUPS.map((group, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-lg border border-wood-200/60 bg-background", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setExpandedGroup(expandedGroup === index ? null : index), className: "flex w-full items-start gap-4 p-4 text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-20 w-20 shrink-0 overflow-hidden rounded bg-wood-200/40 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: group.image, alt: `${group.title} - ${group.description}`, loading: "lazy", className: `h-full w-full object-contain object-center p-2 ${index === 5 ? "scale-[143%]" : ""}` }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-[12px] font-medium uppercase tracking-[0.14em] text-wood-600 sm:text-[13px]", children: [
            t("products.group"),
            " ",
            index + 1
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-1 text-[17px] font-semibold leading-[1.3] text-wood-900", children: t(group.title) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `mt-1 h-5 w-5 shrink-0 text-wood-600 transition-transform ${expandedGroup === index ? "rotate-180" : ""}` })
      ] }),
      expandedGroup === index && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-wood-200 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[16px] leading-[1.6] text-wood-700/90 sm:text-[17px]", children: t(group.description) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:text-[13px]", children: t("products.usage") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[15px] leading-[1.5] text-wood-600 sm:text-[16px]", children: t(group.usage) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[12px] font-medium uppercase tracking-[0.14em] text-wood-500 sm:text-[13px]", children: t("products.repProducts") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 space-y-1", children: group.products.map((product, pIndex) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[15px] font-medium text-wood-800 sm:text-[16px]", children: product }, pIndex)) })
          ] })
        ] })
      ] })
    ] }, index)) })
  ] }) });
}
const PROJECTS = [{
  tag: "lookbook.project1.tag",
  name: "Grand Marina Saigon",
  type: "lookbook.project1.type",
  note: "Lotus wood primer; Lotus wood stain; Lotus PUD",
  image: grandMarinaSaigon
}, {
  tag: "lookbook.project2.tag",
  name: "Masterise Hàng Bài - Hà Nội",
  type: "lookbook.project2.type",
  note: "Lotus wood primer; Lotus wood paint; Lotus PUD",
  image: masteriseHn
}, {
  tag: "lookbook.project3.tag",
  name: "Khách sạn Pullman Phú Quốc",
  type: "lookbook.project3.type",
  note: "Lotus wood stain FE, Lotus lacquer 2K",
  image: pullmanPhuQuoc
}, {
  tag: "lookbook.project4.tag",
  name: "Nhà Máy Casta - Long Khánh",
  type: "lookbook.project4.type",
  note: "Lotus wood primer",
  image: nhaMayCasta
}, {
  tag: "lookbook.project5.tag",
  name: "Nhà Máy Pacific Furniture",
  type: "lookbook.project5.type",
  note: "Lotus sanding sealer, Lotus woodstain, Lotus lacquer 2K",
  image: pacificFur
}, {
  tag: "lookbook.project6.tag",
  name: "AEON Tân An - Long An",
  type: "lookbook.project6.type",
  note: "Lotus wood stain, Lotus lacquer",
  image: aeonTanAn
}];
function Lookbook() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "cong-trinh", className: "bg-[oklch(0.96_0.018_82)] py-16 sm:py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]", children: t("lookbook.label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2.1rem] font-light leading-[1.1] text-wood-900 sm:text-4xl lg:text-[2.75rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: t("lookbook.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: t("lookbook.titleItalic") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display mt-6 max-w-2xl text-[16px] italic leading-[1.6] text-wood-700 sm:text-[17px]", children: t("lookbook.description") })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-2 lg:gap-10", children: PROJECTS.slice(0, 2).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-lg bg-[#FDFAF7] shadow-sm ring-1 ring-wood-200/60 transition-shadow hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] overflow-hidden bg-wood-200/40 sm:aspect-[3/2]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: `${p.name} - ${p.type} - ${p.note}`, loading: "lazy", className: "h-full w-full object-cover object-center" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 p-4 sm:gap-2 sm:p-6 lg:p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-wood-700/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.12em] text-wood-700", children: t(p.tag) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[17px] font-semibold leading-[1.25] text-wood-900 sm:text-[1.4rem]", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-wood-600 sm:text-[15px] lg:text-[16px]", children: t(p.type) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-[13px] leading-[1.5] text-wood-500 sm:text-[14px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-wood-700", children: "Hệ sơn: " }),
          p.note
        ] })
      ] })
    ] }, `feat-${i}`)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-10 lg:grid-cols-4 lg:gap-6", children: PROJECTS.slice(2).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-lg bg-[#FDFAF7] ring-1 ring-wood-200/60 transition-shadow hover:shadow-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[4/3] overflow-hidden bg-wood-200/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: `${p.name} - ${p.type} - ${p.note}`, loading: "lazy", className: "h-full w-full object-cover object-center" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block rounded-full bg-wood-700/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.12em] text-wood-700", children: t(p.tag) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-[16px] font-semibold leading-[1.25] text-wood-900 sm:text-[17px]", children: p.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-wood-600 sm:text-[14px]", children: t(p.type) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[12px] leading-[1.5] text-wood-500", children: p.note })
      ] })
    ] }, `sm-${i}`)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-14 max-w-xl text-center text-[15px] leading-[1.65] text-wood-600 lg:mt-20 sm:text-[16px]", children: t("lookbook.cta") })
  ] }) });
}
function ConsultBlock() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-wood-900 py-16 text-background sm:py-28 lg:py-36", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-400 sm:text-[14px]", children: t("consult.label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[1.9rem] font-light leading-[1.06] sm:text-[2.4rem] lg:text-[3rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: t("consult.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-200", children: t("consult.titleItalic") })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 max-w-md text-[17px] leading-[1.7] text-wood-300 sm:text-[18px]", children: t("consult.description") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-7 space-y-3 text-[16px] leading-[1.6] text-wood-300 sm:text-[17px]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "mt-0.5 h-4 w-4 shrink-0 text-wood-400", strokeWidth: 1.75 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("consult.benefit1") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "mt-0.5 h-4 w-4 shrink-0 text-wood-400", strokeWidth: 1.75 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("consult.benefit2") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheckBig, { className: "mt-0.5 h-4 w-4 shrink-0 text-wood-400", strokeWidth: 1.75 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t("consult.benefit3") })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5 lg:col-span-5 lg:justify-end lg:pb-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-hidden rounded-lg aspect-[4/3] bg-wood-700/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: ctaSupportImage, alt: "Kỹ sư Lotus tư vấn kỹ thuật trực tiếp tại xưởng sản xuất nội thất", loading: "lazy", className: "h-full w-full object-cover object-center" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-[1.65] text-wood-300", children: "Lotus không chỉ bán sơn mà đồng hành như một bộ phận kỹ thuật mở rộng của xưởng." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] leading-[1.65] text-wood-300", children: "Từ mẫu thử đầu tiên đến lô hàng cuối, đội ngũ hỗ trợ để bề mặt ổn định hơn." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: ZALO, target: "_blank", rel: "noopener noreferrer", className: "group inline-flex w-full items-center justify-center gap-3 rounded-full bg-background px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.12em] text-wood-900 shadow-sm transition-colors hover:bg-wood-200 sm:w-auto sm:text-[14px] sm:tracking-[0.18em]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Camera, { className: "h-4 w-4", strokeWidth: 1.75 }),
        t("consult.ctaButton"),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "tel:0943966662", className: "inline-flex items-center gap-2 text-[15px] tracking-wide text-wood-300 transition-colors hover:text-background sm:text-[16px]", children: [
        t("consult.ctaPhone"),
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-background underline underline-offset-4", children: "0943 966 662" })
      ] })
    ] })
  ] }) }) });
}
const FAQS = [{
  q: "faq.q1",
  a: "faq.a1"
}, {
  q: "faq.q2",
  a: "faq.a2"
}, {
  q: "faq.q3",
  a: "faq.a3"
}, {
  q: "faq.q4",
  a: "faq.a4"
}, {
  q: "faq.q5",
  a: "faq.a5"
}, {
  q: "faq.q6",
  a: "faq.a6"
}, {
  q: "faq.q7",
  a: "faq.a7"
}, {
  q: "faq.q8",
  a: "faq.a8"
}];
function FAQ() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "bg-background py-14 sm:py-24 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[1200px] px-6 sm:px-10 lg:px-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] uppercase tracking-[0.32em] text-wood-600 sm:text-[14px]", children: t("faq.label") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "font-display mt-8 text-[2rem] font-light leading-[1.1] text-wood-900 sm:text-[2.25rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block", children: t("faq.title") }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: t("faq.titleItalic") })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { type: "single", collapsible: true, className: "divide-y divide-wood-200 border-t border-b border-wood-200", children: FAQS.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border-0 group/faq", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionTrigger, { className: "py-6 text-left font-display text-lg font-normal text-wood-900 hover:no-underline hover:text-wood-700 sm:text-xl [&>svg]:hidden [&[data-state=open]_.faq-preview]:hidden [&[data-state=open]_.faq-icon-plus]:hidden [&:not([data-state=open])_.faq-icon-minus]:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex flex-1 flex-col gap-2 pr-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t(f.q) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "faq-preview line-clamp-1 text-[15px] font-sans font-normal text-wood-500 sm:text-[16px]", children: t(f.a) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-wood-300 text-wood-700 transition-colors group-hover/faq:border-wood-700 group-hover/faq:text-wood-900", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "faq-icon-plus text-[15px] leading-none", children: "+" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "faq-icon-minus text-[15px] leading-none", children: "−" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "pb-7 pr-4 text-[16px] leading-[1.75] text-wood-700/85 sm:pr-12 sm:text-[17px]", children: t(f.a) })
    ] }, i)) }) })
  ] }) }) });
}
export {
  LotusLanding as component
};
