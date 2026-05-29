import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Route$1, u as urlFor } from "./router-C94yv-FF.mjs";
import { N as Navbar, F as Footer } from "./Footer-rvhSXuIN.mjs";
import "../_libs/i18next.mjs";
import { T as Tag, a as ArrowUpRight } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "async_hooks";
import "util";
import "crypto";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/sanity__client.mjs";
import "../_libs/get-it.mjs";
import "../_libs/decompress-response.mjs";
import "zlib";
import "../_libs/mimic-response.mjs";
import "url";
import "http";
import "https";
import "assert";
import "querystring";
import "../_libs/tunnel-agent.mjs";
import "net";
import "tls";
import "events";
import "../_libs/safe-buffer.mjs";
import "buffer";
import "tty";
import "../_libs/through2.mjs";
import "../_libs/readable-stream.mjs";
import "node:string_decoder";
import "../_libs/inherits.mjs";
import "../_libs/util-deprecate.mjs";
import "../_libs/is-retry-allowed.mjs";
import "../_libs/rxjs.mjs";
import "../_libs/nanoid.mjs";
import "../_libs/sanity__image-url.mjs";
import "../_libs/react-i18next.mjs";
import "../_libs/use-sync-external-store.mjs";
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
    month: "2-digit",
    year: "numeric"
  });
}
function BlogListPage() {
  const {
    posts
  } = Route$1.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-[#FDFAF7]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 max-w-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[13px] font-medium uppercase tracking-[0.32em] text-wood-600", children: "Kiến thức & Kỹ thuật" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display mt-5 text-[2.5rem] font-light leading-[1.1] text-wood-900 sm:text-[3rem]", children: [
          "Bài viết từ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block italic font-normal text-wood-700", children: " kỹ sư Lotus." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[17px] leading-[1.7] text-wood-700/80", children: "Kỹ thuật sơn gỗ, tiêu chuẩn xuất khẩu và kinh nghiệm thực tế từ xưởng." })
      ] }),
      posts.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-20 text-center text-wood-500", children: [
        "Chưa có bài viết nào. Hãy thêm bài qua Sanity Studio tại",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/studio", className: "underline hover:text-wood-900", children: "/studio" }),
        "."
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3", children: posts.map((post) => /* @__PURE__ */ jsxRuntimeExports.jsx(PostCard, { post }, post._id)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function PostCard({
  post
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
    slug: post.slug.current
  }, className: "group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-wood-200/60 transition-shadow hover:shadow-md", children: [
    post.mainImage ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[16/9] overflow-hidden bg-wood-100", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: urlFor(post.mainImage).width(600).height(338).url(), alt: post.title, loading: "lazy", className: "h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" }) }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/9] bg-wood-100/60" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col gap-3 p-5", children: [
      post.tags?.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-1.5", children: post.tags.slice(0, 2).map((tag) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1 rounded-full bg-wood-100 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-wood-600", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Tag, { className: "h-2.5 w-2.5" }),
        TAG_LABELS[tag] ?? tag
      ] }, tag)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-[1.15rem] font-semibold leading-[1.3] text-wood-900 group-hover:text-wood-700 transition-colors", children: post.title }),
      post.excerpt && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "line-clamp-3 text-[14px] leading-[1.6] text-wood-600", children: post.excerpt }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto flex items-center justify-between pt-3 border-t border-wood-100", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] text-wood-400", children: post.publishedAt ? formatDate(post.publishedAt) : "" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 text-wood-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
      ] })
    ] })
  ] });
}
export {
  BlogListPage as component
};
