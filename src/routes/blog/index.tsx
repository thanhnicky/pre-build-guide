import { createFileRoute, Link } from "@tanstack/react-router";
import { getAllPosts, type Post } from "@/lib/sanity/queries";
import { urlFor } from "@/lib/sanity/client";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowUpRight, Tag } from "lucide-react";

export const Route = createFileRoute("/blog/")({
  loader: async () => {
    const posts = await getAllPosts();
    return { posts };
  },
  component: BlogListPage,
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
    month: "2-digit",
    year: "numeric",
  });
}

function BlogListPage() {
  const { posts } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-[#FDFAF7]">
      <Navbar />

      <main className="mx-auto max-w-[1200px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="text-[13px] font-medium uppercase tracking-[0.32em] text-wood-600">
            Kiến thức & Kỹ thuật
          </div>
          <h1 className="font-display mt-5 text-[2.5rem] font-light leading-[1.1] text-wood-900 sm:text-[3rem]">
            Bài viết từ
            <span className="block italic font-normal text-wood-700"> kỹ sư Lotus.</span>
          </h1>
          <p className="mt-5 text-[17px] leading-[1.7] text-wood-700/80">
            Kỹ thuật sơn gỗ, tiêu chuẩn xuất khẩu và kinh nghiệm thực tế từ xưởng.
          </p>
        </div>

        {/* Posts grid */}
        {posts.length === 0 ? (
          <div className="py-20 text-center text-wood-500">
            Chưa có bài viết nào. Hãy thêm bài qua Sanity Studio tại{" "}
            <a href="/studio" className="underline hover:text-wood-900">/studio</a>.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug.current }}
      className="group flex flex-col overflow-hidden rounded-xl bg-white ring-1 ring-wood-200/60 transition-shadow hover:shadow-md"
    >
      {/* Thumbnail */}
      {post.mainImage ? (
        <div className="relative aspect-[16/9] overflow-hidden bg-wood-100">
          <img
            src={urlFor(post.mainImage).width(600).height(338).url()}
            alt={post.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="aspect-[16/9] bg-wood-100/60" />
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 rounded-full bg-wood-100 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-[0.1em] text-wood-600"
              >
                <Tag className="h-2.5 w-2.5" />
                {TAG_LABELS[tag] ?? tag}
              </span>
            ))}
          </div>
        )}

        <h2 className="font-display text-[1.15rem] font-semibold leading-[1.3] text-wood-900 group-hover:text-wood-700 transition-colors">
          {post.title}
        </h2>

        {post.excerpt && (
          <p className="line-clamp-3 text-[14px] leading-[1.6] text-wood-600">
            {post.excerpt}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between pt-3 border-t border-wood-100">
          <span className="text-[13px] text-wood-400">
            {post.publishedAt ? formatDate(post.publishedAt) : ""}
          </span>
          <ArrowUpRight className="h-4 w-4 text-wood-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </Link>
  );
}
