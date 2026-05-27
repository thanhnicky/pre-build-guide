import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { k as MessageCircle, X, j as Menu, i as MapPin, M as Mail, G as Globe, P as Phone } from "../_libs/lucide-react.mjs";
const logo = "/assets/lotus-logo-C0CbJd0t.jpg";
function Navbar() {
  const [open, setOpen] = reactExports.useState(false);
  const navLinks = [
    { label: "Chọn hệ sơn", href: "#chon-he-son" },
    { label: "Sản phẩm", href: "#san-pham" },
    { label: "Quy trình", href: "#phoi-hop" },
    { label: "Chứng nhận", href: "#tieu-chuan" },
    { label: "Dự án", href: "#cong-trinh" },
    { label: "Hỏi đáp", href: "#faq" }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-wood-200/60 bg-background/85 backdrop-blur-md", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Lotus Paint", className: "h-9 w-auto object-contain" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-6 md:flex lg:gap-8", children: navLinks.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: link.href,
          className: "text-[13px] tracking-wide text-wood-700 transition-colors hover:text-wood-900 whitespace-nowrap sm:text-[14px]",
          children: link.label
        },
        link.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden items-center gap-3 md:flex", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "tel:0943966662",
            className: "text-[13px] tracking-wide text-wood-600 transition-colors hover:text-wood-900 whitespace-nowrap sm:text-[14px]",
            children: "0943 966 662"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://zalo.me/0943966662",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center gap-1.5 rounded-full bg-wood-900 px-3.5 py-2 text-[13px] font-medium tracking-wide text-background transition-colors hover:bg-wood-800 sm:text-[14px]",
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
          className: "text-[15px] font-medium text-wood-700 transition-colors hover:text-wood-900",
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
            className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wood-100 px-3 py-2 text-[15px] font-medium text-wood-700",
            children: "0943 966 662"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://zalo.me/0943966662",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-wood-600 px-3 py-2 text-[15px] font-medium text-primary-foreground",
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[14px] leading-[1.7] text-wood-700 sm:text-[15px]", children: "CÔNG TY TNHH SẢN XUẤT THƯƠNG MẠI DỊCH VỤ BÍCH TRANG" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] text-wood-500 sm:text-[14px]", children: "MST: 0313351528" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 text-[14px] text-wood-700 sm:text-[15px]", children: [
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
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 text-[14px] text-wood-700 sm:text-[15px]", children: [
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
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 overflow-hidden rounded-xl border border-wood-200", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          title: "Lotus Paint — Bản đồ",
          src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.5!2d106.5774582!3d10.8544175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752b6657d63477%3A0x7444e3610e848efa!2sS%C6%A1n%20Lotus%20-%20Keo%20Jade's%20Solution%20(C%C3%B4ng%20ty%20B%C3%ADch%20Trang)!5e0!3m2!1svi!2svn!4v1748357000000!5m2!1svi!2svn",
          width: "100%",
          height: "260",
          style: { border: 0, display: "block" },
          allowFullScreen: true,
          loading: "lazy",
          referrerPolicy: "no-referrer-when-downgrade"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://maps.app.goo.gl/JZ9NvsifM5T1PfcA9",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-end gap-1.5 border-t border-wood-200 bg-wood-50 px-4 py-2 text-[12px] text-wood-500 transition-colors hover:text-wood-800 sm:text-[13px]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
            "Xem trên Google Maps"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 border-t border-wood-200 pt-6 text-center text-[13px] text-muted-foreground sm:text-left sm:text-[14px]", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Sơn Lotus. Tư vấn quy trình sơn gỗ đúng nhu cầu."
    ] })
  ] }) });
}
export {
  Footer as F,
  Navbar as N
};
