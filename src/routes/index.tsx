import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { GallerySection } from "@/components/GallerySection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sơn Gỗ Đẹp — Chuyên gia sơn gỗ nội & ngoại thất" },
      {
        name: "description",
        content:
          "Dịch vụ sơn gỗ chuyên nghiệp: nội thất, ngoại thất, đánh dầu, phủ bóng, bảo dưỡng gỗ. Tư vấn & báo giá miễn phí qua Zalo 0943 966 662.",
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <WhyUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
