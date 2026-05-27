import { createFileRoute, Link } from "@tanstack/react-router";
import { getPostBySlug } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Tag } from "lucide-react";

export const Route = createFileRoute("/blog/$slug")({
  loader: async ({ params }) => {
    const post = await getPostBySlug(params.slug);
    if (!post) throw new Error("Post not found");
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post?.title ?? "Bài viết"} — Sơn Gỗ Lotus` },
      {
        name: "description",
        content: loaderData?.post?.seoDescription ?? loaderData?.post?.excerpt ?? "",
      },
    ],
  }),
  component: BlogPostPage,
});

const TAG_LABELS: Record<string, string> = {
  "son-go-he-nuoc": "Sơn gỗ hệ nước",
  "ky-thuat": "Kỹ thuật thi công",
  "xuat-khau": "Xuất khẩu",
  "tieu-chuan": "Tiêu chuẩn",
  "huong-dan": "Hướng dẫn",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("vi-VN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

const portableTextComponents = {
  block: {
    h2: ({ children }: any) => (
      <h2 className="font-display mt-12 text-[1.6rem] font-semibold leading-[1.25] text-wood-900 sm:text-[1.8rem]">
        {children}
      </h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="font-display mt-8 text-[1.2rem] font-semibold leading-[1.3] text-wood-900">
        {children}
      </h3>
    ),
    normal: ({ children }: any) => (
      <p className="mt-5 text-[17px] leading-[1.8] text-wood-800">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="mt-6 border-l-4 border-wood-400 pl-5 text-[17px] italic leading-[1.8] text-wood-600">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mt-5 space-y-2 pl-5 text-[17px] leading-[1.8] text-wood-800 list-disc">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mt-5 space-y-2 pl-5 text-[17px] leading-[1.8] text-wood-800 list-decimal">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-wood-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-wood-700 underline underline-offset-4 hover:text-wood-900"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: any) => (
      <div className="my-10 overflow-hidden rounded-xl">
        <img
          src={urlFor(value).width(900).url()}
          alt={value.alt ?? ""}
          className="w-full object-cover"
        />
        {value.alt && (
          <p className="mt-2 text-center text-[13px] text-wood-400">{value.alt}</p>
        )}
      </div>
    ),
  },
};

function BlogPostPage() {
  const { post } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-[#FDFAF7]">
      <Navbar />

      <main className="mx-auto max-w-[760px] px-6 py-20 sm:px-10 sm:py-28">
        {/* Back */}
        <Link
          to="/blog"
          className="mb-10 inline-flex items-center gap-2 text-[14px] text-wood-500 transition-colors hover:text-wood-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Tất cả bài viết
        </Link>

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mb-5 flex flex-wrap gap-2">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full bg-wood-100 px-2.5 py-1 text-[12px] font-medium uppercase tracking-[0.1em] text-wood-600"
              >
                <Tag className="h-3 w-3" />
                {TAG_LABELS[tag] ?? tag}
              </span>
            ))}
          </div>
        )}

        {/* Title */}
        <h1 className="font-display text-[2rem] font-semibold leading-[1.2] text-wood-900 sm:text-[2.5rem]">
          {post.title}
        </h1>

        {/* Date + excerpt */}
        {post.publishedAt && (
          <p className="mt-3 text-[14px] text-wood-400">{formatDate(post.publishedAt)}</p>
        )}
        {post.excerpt && (
          <p className="mt-5 text-[18px] leading-[1.75] text-wood-600 font-light">
            {post.excerpt}
          </p>
        )}

        {/* Main image */}
        {post.mainImage && (
          <div className="mt-10 overflow-hidden rounded-xl">
            <img
              src={urlFor(post.mainImage).width(900).height(500).url()}
              alt={post.title}
              className="w-full object-cover"
            />
          </div>
        )}

        {/* Body */}
        <article className="mt-10">
          <PortableText value={post.body as any} components={portableTextComponents} />
        </article>

        {/* CTA */}
        <div className="mt-16 rounded-xl bg-wood-900 p-8 text-background">
          <p className="font-display text-[1.2rem] font-light">
            Cần tư vấn kỹ thuật cụ thể cho xưởng?
          </p>
          <p className="mt-2 text-[15px] text-wood-300">
            Gửi ảnh bề mặt qua Zalo — kỹ sư phản hồi trong ngày.
          </p>
          <a
            href="https://zalo.me/0943966662"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full bg-background px-6 py-3 text-[15px] font-semibold text-wood-900 transition-opacity hover:opacity-80"
          >
            Zalo 0943 966 662
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
