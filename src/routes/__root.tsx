import "@/lib/i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lotus - Sơn Gỗ Hệ Nước | Hoàn Thiện Gỗ Cho Dự Án Cao Cấp & Xuất Khẩu" },
      {
        name: "description",
        content:
          "Sơn gỗ hệ nước Lotus chuyên nghiệp cho xưởng nội thất công trình và xuất khẩu Mỹ, EU, Nhật. Hỗ trợ kỹ thuật 1-1, hồ sơ TDS/MSDS, chứng nhận EN71-3, ASTM F963, FDA. Tư vấn miễn phí: 0943 966 662.",
      },
      { name: "keywords", content: "sơn gỗ hệ nước, sơn gỗ nội thất, sơn gỗ ngoại thất, sơn gỗ xuất khẩu, sơn gỗ dự án cao cấp, Lotus wood paint, water-based wood finish, wood coating for export" },
      { name: "author", content: "Lotus Wood Paint" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      {
        property: "og:title",
        content: "Lotus - Sơn Gỗ Hệ Nước | Hoàn Thiện Gỗ Cho Dự Án Cao Cấp & Xuất Khẩu",
      },
      {
        property: "og:description",
        content:
          "Sơn gỗ hệ nước Lotus chuyên nghiệp cho xưởng nội thất công trình và xuất khẩu Mỹ, EU, Nhật. Hỗ trợ kỹ thuật 1-1, hồ sơ TDS/MSDS, chứng nhận EN71-3, ASTM F963, FDA.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.songo.com.vn" },
      { property: "og:locale", content: "vi_VN" },
      { property: "og:site_name", content: "Lotus Wood Paint" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lotus - Sơn Gỗ Hệ Nước | Hoàn Thiện Gỗ Cho Dự Án Cao Cấp & Xuất Khẩu" },
      { name: "twitter:description", content: "Sơn gỗ hệ nước Lotus chuyên nghiệp cho xưởng nội thất công trình và xuất khẩu Mỹ, EU, Nhật. Hỗ trợ kỹ thuật 1-1, hồ sơ TDS/MSDS." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e50de556-0af3-4d0d-90e5-7b5f368b7587/id-preview-c3622975--4ed31727-3ce5-4425-b32b-269e069c5f7c.lovable.app-1779202121364.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e50de556-0af3-4d0d-90e5-7b5f368b7587/id-preview-c3622975--4ed31727-3ce5-4425-b32b-269e069c5f7c.lovable.app-1779202121364.png" },
      { name: "twitter:image:alt", content: "Lotus Wood Paint - Sơn gỗ hệ nước chuyên nghiệp" },
      { name: "geo.region", content: "VN-SG" },
      { name: "geo.placename", content: "Ho Chi Minh City" },
      { name: "geo.position", content: "10.8544;106.5775" },
      { name: "ICBM", content: "10.8544, 106.5775" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "canonical",
        href: "https://www.songo.com.vn",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["Organization", "LocalBusiness"],
          "name": "Lotus Wood Paint",
          "description": "Sơn gỗ hệ nước chuyên nghiệp cho xưởng nội thất công trình và xuất khẩu Mỹ, EU, Nhật",
          "url": "https://www.songo.com.vn",
          "telephone": "+84-943-966-662",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "99/5 Đường XTT26-1, Ấp 2, Xã Bà Điểm",
            "addressLocality": "Huyện Hóc Môn",
            "addressRegion": "Thành phố Hồ Chí Minh",
            "addressCountry": "VN"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 10.8544175,
            "longitude": 106.5774582
          },
          "hasMap": "https://maps.app.goo.gl/JZ9NvsifM5T1PfcA9",
          "sameAs": [
            "https://zalo.me/0943966662"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+84-943-966-662",
            "contactType": "customer service",
            "availableLanguage": ["Vietnamese", "English"]
          }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <head>
        <HeadContent />
        {/* Google Analytics 4 */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-WJJM4HV5LR"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WJJM4HV5LR');
            `,
          }}
        />
        {/* Google Ads */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
