import galleryInterior from "@/assets/gallery-interior.jpg";
import galleryExterior from "@/assets/gallery-exterior.jpg";
import galleryProcess from "@/assets/gallery-process.jpg";

const images = [
  {
    src: galleryInterior,
    alt: "Nội thất gỗ tự nhiên hoàn thiện",
    label: "Nội thất",
  },
  {
    src: galleryExterior,
    alt: "Ngoại thất gỗ chịu thời tiết",
    label: "Ngoại thất",
  },
  {
    src: galleryProcess,
    alt: "Quy trình sơn gỗ thủ công",
    label: "Quy trình",
  },
  {
    src: galleryInterior,
    alt: "Đồ gỗ phòng khách",
    label: "Phòng khách",
  },
  {
    src: galleryExterior,
    alt: "Sàn deck ngoài trời",
    label: "Sàn deck",
  },
  {
    src: galleryProcess,
    alt: "Hoàn thiện bề mặt gỗ",
    label: "Hoàn thiện",
  },
];

export function GallerySection() {
  return (
    <section id="du-an" className="bg-wood-50 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-wood-500">
            Dự án thực tế
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-wood-900 sm:text-4xl">
            Hình ảnh công trình đã thực hiện
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Mỗi dự án là một tác phẩm — thay thế bằng ảnh thực tế của bạn để
            tăng sự tin tưởng từ khách hàng.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={800}
                height={600}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wood-900/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="inline-block rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-wood-800 backdrop-blur-sm">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
