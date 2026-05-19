import { Home, TreePine, Paintbrush, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Sơn gỗ nội thất",
    description:
      "Bàn ghế, tủ kệ, cửa gỗ, sàn gỗ — phủ dầu, sơn PU, sơn lót bảo vệ vân gỗ tự nhiên.",
  },
  {
    icon: TreePine,
    title: "Sơn gỗ ngoại thất",
    description:
      "Lan can, hàng rào, sàn deck ngoài trời — chống UV, chống ẩm, bền màu theo thời gian.",
  },
  {
    icon: Paintbrush,
    title: "Đánh dầu & phủ bóng",
    description:
      "Hoàn thiện bề mặt gỗ với dầu tự nhiên, sơn bóng mờ hoặc bóng cao theo yêu cầu.",
  },
  {
    icon: ShieldCheck,
    title: "Bảo dưỡng & sửa chữa",
    description:
      "Tẩy vết bẩn, phục hồi bề mặt xước, đánh bóng lại đồ gỗ cũ như mới.",
  },
];

export function ServicesSection() {
  return (
    <section id="dich-vu" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-wood-500">
            Dịch vụ
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-wood-900 sm:text-4xl">
            Giải pháp toàn diện cho mọi loại gỗ
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Từ nội thất sang trọng đến ngoại thất chịu thời tiết, chúng tôi đáp
            ứng mọi nhu cầu bảo vệ và hoàn thiện bề mặt gỗ.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-wood-200 bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-wood-100 text-wood-600 transition-colors group-hover:bg-wood-600 group-hover:text-background">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-wood-800">
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
