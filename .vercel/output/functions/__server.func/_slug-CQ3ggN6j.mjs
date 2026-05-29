import { j as jsxRuntimeExports } from "./_libs/react.mjs";
import { L as Link } from "./_libs/tanstack__react-router.mjs";
import { a as Route, u as urlFor } from "./_ssr/router-DA6KShF-.mjs";
import { N as Navbar, F as Footer } from "./_ssr/Footer-rvhSXuIN.mjs";
import { P as PortableText } from "./_libs/portabletext__react.mjs";
import "./_libs/i18next.mjs";
import { A as ArrowLeft, T as Tag } from "./_libs/lucide-react.mjs";
import "./_libs/tanstack__router-core.mjs";
import "./_libs/tanstack__history.mjs";
import "./_libs/cookie-es.mjs";
import "./_libs/seroval.mjs";
import "./_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "./_libs/react-dom.mjs";
import "async_hooks";
import "util";
import "crypto";
import "stream";
import "./_libs/isbot.mjs";
import "./_libs/tanstack__query-core.mjs";
import "./_libs/tanstack__react-query.mjs";
import "./_libs/sanity__client.mjs";
import "./_libs/get-it.mjs";
import "./_libs/decompress-response.mjs";
import "zlib";
import "./_libs/mimic-response.mjs";
import "url";
import "http";
import "https";
import "assert";
import "querystring";
import "./_libs/tunnel-agent.mjs";
import "net";
import "tls";
import "events";
import "./_libs/safe-buffer.mjs";
import "buffer";
import "tty";
import "./_libs/through2.mjs";
import "./_libs/readable-stream.mjs";
import "node:string_decoder";
import "./_libs/inherits.mjs";
import "./_libs/util-deprecate.mjs";
import "./_libs/is-retry-allowed.mjs";
import "./_libs/rxjs.mjs";
import "./_libs/nanoid.mjs";
import "./_libs/sanity__image-url.mjs";
import "./_libs/react-i18next.mjs";
import "./_libs/use-sync-external-store.mjs";
import "./_libs/portabletext__toolkit.mjs";
const TAG_LABELS = {
  "son-go-he-nuoc": "Sơn gỗ hệ nước",
  "ky-thuat": "Kỹ thuật thi công",
  "xuat-khau": "Xuất khẩu",
  "tieu-chuan": "Tiêu chuẩn",
  "huong-dan": "Hướng dẫn"
};
function formatDate(iso) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}
const portableTextComponents = {
  block: {
    h2: ({
      children
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-12 text-[1.6rem] font-semibold leading-[1.25] text-wood-900 sm:text-[1.8rem]", children }),
    h3: ({
      children
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-8 text-[1.2rem] font-semibold leading-[1.3] text-wood-900", children }),
    normal: ({
      children
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[17px] leading-[1.8] text-wood-800", children }),
    blockquote: ({
      children
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "mt-6 border-l-4 border-wood-400 pl-5 text-[17px] italic leading-[1.8] text-wood-600", children })
  },
  list: {
    bullet: ({
      children
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2 pl-5 text-[17px] leading-[1.8] text-wood-800 list-disc", children }),
    number: ({
      children
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "mt-5 space-y-2 pl-5 text-[17px] leading-[1.8] text-wood-800 list-decimal", children })
  },
  marks: {
    strong: ({
      children
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "font-semibold text-wood-900", children }),
    em: ({
      children
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("em", { className: "italic", children }),
    link: ({
      value,
      children
    }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: value?.href, target: "_blank", rel: "noopener noreferrer", className: "text-wood-700 underline underline-offset-4 hover:text-wood-900", children })
  },
  types: {
    image: ({
      value
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "my-10 overflow-hidden rounded-xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: urlFor(value).width(900).url(), alt: value.alt ?? "", className: "w-full object-cover" }),
      value.alt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-center text-[13px] text-wood-400", children: value.alt })
    ] })
  }
};
function BlogPostPage() {
  const {
    post
  } = Route.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#FDFAF7]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[760px] px-6 py-20 sm:px-10 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "mb-10 inline-flex items-center gap-2 text-[14px] text-wood-500 transition-colors hover:text-wood-900", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        "Tất cả bài viết"
      ] }),
      post.tags?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex flex-wrap gap-2", children: post.tags.map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 rounded-full bg-wood-100 px-2.5 py-1 text-[12px] font-medium uppercase tracking-[0.1em] text-wood-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-3 w-3" }),
        TAG_LABELS[tag] ?? tag
      ] }, tag)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-[2rem] font-semibold leading-[1.2] text-wood-900 sm:text-[2.5rem]", children: post.title }),
      post.publishedAt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-[14px] text-wood-400", children: formatDate(post.publishedAt) }),
      post.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[18px] leading-[1.75] text-wood-600 font-light", children: post.excerpt }),
      post.mainImage && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 overflow-hidden rounded-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: urlFor(post.mainImage).width(900).height(500).url(), alt: post.title, className: "w-full object-cover" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("article", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PortableText, { value: post.body, components: portableTextComponents }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 rounded-xl bg-wood-900 p-8 text-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[1.2rem] font-light", children: "Cần tư vấn kỹ thuật cụ thể cho xưởng?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-[15px] text-wood-300", children: "Gửi ảnh bề mặt qua Zalo — kỹ sư phản hồi trong ngày." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://zalo.me/0943966662", target: "_blank", rel: "noopener noreferrer", className: "mt-5 inline-block rounded-full bg-background px-6 py-3 text-[15px] font-semibold text-wood-900 transition-opacity hover:opacity-80", children: "Zalo 0943 966 662" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  BlogPostPage as component
};
