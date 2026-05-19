import { Leaf, Clock, Award, HandHeart } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Nguyên liệu tự nhiên",
    description:
      "Chỉ sử dụng dầu và sơn gỗ chất lượng cao, an toàn cho sức khỏe và thân thiện môi trường.",
  },
  {
    icon: Clock,
    title: "Thi công đúng hẹn",
    description:
      "Cam kết tiến độ rõ ràng, hoàn thành đúng thời gian đã thỏa thuận với khách hàng.",
  },
  {
    icon: Award,
    title: "Kinh nghiệm thực chiến",
    description:
      "Đội ngũ thợ sơn gỗ lành nghề, nhiều năm kinh nghiệm với hàng trăm công trình lớn nhỏ.",
  },
  {
    icon: HandHeart,
    title: "Bảo hành dài hạn",
    description:
      "Hỗ trợ bảo hành bề mặt sơn, tư vấn cách bảo dưỡng để gỗ luôn đẹp theo năm tháng.",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-14 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-wood-500">
            Tại sao chọn chúng tôi
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-wood-900 sm:text-4xl">
            Uy tín từ chất lượng & tận tâm
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r) => (
            <div key={r.title} className="text-center">
              <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-wood-100 text-wood-600">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-wood-800">
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {r.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
