import { sanityClient } from "./client";

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  publishedAt: string;
  tags: string[];
  mainImage?: { asset: { _ref: string } };
  body: unknown[];
  seoDescription?: string;
}

export async function getAllPosts(): Promise<Post[]> {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt, tags, mainImage, seoDescription
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, publishedAt, tags, mainImage, body, seoDescription
    }`,
    { slug }
  );
}
