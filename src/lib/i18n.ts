import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const vi = {
  hero: {
    subtitle: "Sơn Gỗ Hệ Nước",
    title: "Sơn gỗ hệ nước cho",
    titleItalic: "xưởng nội thất công trình và nội thất xuất khẩu.",
    description:
      "Kỹ sư Lotus hỗ trợ trực tiếp tại xưởng, giúp chọn đúng hệ và giữ bề mặt ổn định từ mẫu thử đến lô giao thực tế.",
    trustLabel: "Hồ sơ & Tiêu chuẩn",
    ctaButton: "Gửi ảnh hạng mục — nhận tư vấn",
    ctaPhone: "Hoặc gọi kỹ thuật",
  },
  trust: {
    stat1Label: "Xưởng & Nhà Máy Tin Dùng",
    stat2Label: "Năm Kinh Nghiệm",
    consult: "Tư Vấn Kỹ Thuật 1-1 Miễn Phí",
    custom: "100+ màu có sẵn — pha riêng theo yêu cầu",
    customDetail: "RAL · NCS · Mã Màu Riêng",
  },
  audience: {
    label: "Lotus phù hợp với ai",
    title: "Một hệ sơn —",
    titleItalic: "hai nhu cầu sản xuất chính.",
    description:
      "Cùng quy trình và công thức sơn — Lotus điều chỉnh hồ sơ kỹ thuật và hỗ trợ phù hợp theo từng loại hình xưởng.",
    factory: {
      title: "Xưởng nội thất công trình",
      lead: "Hạng mục cần bàn giao đúng màu, đủ hồ sơ kỹ thuật — Lotus giữ màu ổn định từ mẫu thử đến lô cuối, tài liệu sẵn khi cần.",
      bullets: [
        "Đồng màu giữa các lô — hạn chế chênh sắc khi giao theo đợt",
        "Hồ sơ kỹ thuật phục vụ nghiệm thu dự án",
        "Mùi nhẹ, VOC thấp — phù hợp hạng mục bàn giao sớm",
      ],
      tags: ["Dự án cao cấp", "Nội thất công trình"],
    },
    export: {
      title: "Nhà máy / đơn hàng xuất khẩu",
      lead: "Không để mất đơn vì lý do kỹ thuật — chứng nhận, hồ sơ song ngữ và màu ổn định lô sau lô, Lotus chuẩn bị sẵn.",
      bullets: [
        "TDS / MSDS song ngữ Anh–Việt theo yêu cầu buyer",
        "Đáp ứng EN71-3 · ASTM F963 · FDA · RoHS",
        "Bề mặt ổn định trên sản lượng lớn, nhiều lô",
      ],
      tags: ["Xuất khẩu Mỹ · EU · Nhật", "Sản lượng lớn"],
    },
  },
  whyWater: {
    label: "Tại sao hệ nước?",
    title: "PU vẫn sơn được.",
    titleItalic: "Nhưng hệ nước giúp xưởng lợi hơn ở đâu?",
    col1: {
      heading: "Vận hành gọn hơn — chi phí xưởng thấp hơn",
      body: "Không pha dung môi, không cần kho chứa riêng, thợ làm cả ngày trong xưởng kín mà không cần hệ thống thông khí công nghiệp đắt tiền. Mùi nhẹ — thợ làm việc thoải mái hơn, năng suất thực tế cao hơn.",
      punch: "GIẢM CHI PHÍ VẬN HÀNH — KHÔNG CẦN ĐẦU TƯ THÊM HẠ TẦNG.",
    },
    col2: {
      heading: "Chuyển hệ không phải tự mày mò",
      body: "Kỹ sư Lotus vào xưởng buổi đầu tiên — chỉnh tỷ lệ pha, căn áp suất súng phun, xử lý lỗi bề mặt ngay tại chỗ. Xưởng chạy đúng ngay từ lô đầu, không mất hàng thử nghiệm.",
      punch: "RÚT NGẮN THỜI GIAN DÒ HỆ — ĐỠ MẤT HÀNG, MẤT CÔNG.",
    },
    col3: {
      heading: "Hồ sơ kỹ thuật đầy đủ — nghiệm thu không vướng",
      body: "VOCs thấp, mùi nhẹ, TDS/MSDS song ngữ sẵn có — hạng mục bàn giao đúng tiến độ, không bị đội giám sát giữ lại vì thiếu hồ sơ hay mùi sơn chưa thoát.",
      punch: "GIẢM VƯỚNG KHI NGHIỆM THU VÀ BÀN GIAO.",
    },
    col4: {
      heading: "Độ cứng & kháng hoá chất — không còn phải đánh đổi",
      body: "Hệ nước thế hệ cũ mềm hơn PU, dễ trầy và kém chịu cồn — điều đó đúng với acrylic 1K trước đây. Lotus hệ 2 thành phần, cho độ cứng màng sơn và khả năng kháng hoá chất tương đương hệ PU gốc dung môi khi thi công đúng quy trình.",
      punch: "HỆ NƯỚC LOTUS — ĐỦ CỨNG, ĐỦ BỀN, KHÔNG CẦN THÊM PU.",
    },
  },
  finishFinder: {
    label: "Công cụ tư vấn nhanh",
    title: "Chọn đúng hệ sơn",
    titleItalic: "trong vài bước.",
    description:
      "Cho Lotus biết bề mặt và môi trường sử dụng — hệ phù hợp sẽ hiện ra ngay, kèm cấu hình kỹ thuật và sản phẩm đại diện.",
    step1: "Bề mặt thi công",
    step1Question: "Anh / chị đang thi công trên bề mặt nào?",
    step1Hint: "Gỗ tự nhiên / veneer hoặc ván công nghiệp",
    step2: "Môi trường sử dụng",
    step2Question: "Sản phẩm sẽ đặt ở đâu?",
    step3: "Kiểu hoàn thiện",
    step3Question: "Anh / chị muốn giữ vân hay phủ màu?",
    surfaceNatural: "Gỗ tự nhiên / Veneer",
    surfaceMdf: "MDF / HDF / Gỗ công nghiệp",
    indoor: "Trong nhà",
    outdoor: "Ngoài trời",
    matte: "Giữ vân gỗ tự nhiên",
    gloss: "Phủ màu / Che phủ",
    completeSteps:
      "Hoàn thành các bước để xem hệ sơn Lotus phù hợp với hạng mục của anh / chị.",
    resultLabel: "Hệ sơn đề xuất",
    suitableFor: "Phù hợp với",
    techConfig: "Quy trình",
    repProducts: "Sản phẩm",
    notes: "Lưu ý",
    colorRef: "Bảng màu tham khảo",
    viewFullChart: "Xem bảng màu đầy đủ",
    colorDisclaimer:
      "Màu hiển thị trên màn hình chỉ mang tính tham khảo. Đối chiếu mẫu thực tế trước khi chốt.",
    consultThis: "Tư vấn hệ này qua Zalo",
    methodLau: "Phương pháp Lau",
    methodPhun: "Phương pháp Phun",
    downloadChart: "Bảng màu đầy đủ",
    download: "Tải xuống",
    close: "Đóng",
    system1: {
      title: "Hệ Giữ Vân Nội Thất",
      suitableFor: "Gỗ tự nhiên, veneer trong nhà — căn hộ, khách sạn, văn phòng",
      methodLau: {
        process: "Lau màu → Lót sealer → Phủ PUD trong nhà",
        notes:
          "Phương pháp lau cho hiệu ứng vân gỗ sâu, phù hợp nội thất cao cấp cần tạo chiều sâu màu.",
      },
      methodPhun: {
        process: "Phun sealer → Phun woodstain + finish nội thất",
        notes:
          "Phương pháp phun cho năng suất cao, màu đồng đều — phù hợp xưởng sản xuất loạt.",
      },
    },
    system2: {
      title: "Hệ Màu Bệt Nội Thất — Gỗ Tự Nhiên",
      suitableFor: "Gỗ tự nhiên, veneer trong nhà — phủ màu hoàn toàn",
      process: "Lót primer → Phun màu bệt wood paint IN",
      notes:
        "Phủ màu hoàn toàn che phủ vân gỗ, cho bề mặt đồng nhất theo yêu cầu thiết kế.",
    },
    system3: {
      title: "Hệ Giữ Vân Ngoại Thất",
      suitableFor: "Gỗ tự nhiên, veneer ngoài trời — sân vườn, mặt tiền, cổng",
      methodLau: {
        process: "Lau màu → Lót sealer → Phủ acrylic lacquer ngoại thất",
        notes: "Chống UV và thấm nước, giữ vân tự nhiên bền ngoài trời.",
      },
      methodPhun: {
        process: "Phun sealer → Phun woodstain finish EX → Phủ PUD EX",
        notes:
          "Lớp phủ ngoại thất nhiều lớp, chịu thời tiết khắc nghiệt.",
      },
    },
    system4: {
      title: "Hệ Màu Bệt Ngoại Thất — Gỗ Tự Nhiên",
      suitableFor: "Gỗ tự nhiên, veneer ngoài trời — phủ màu bảo vệ",
      process: "Lót primer → Phun màu bệt wood paint EX",
      notes:
        "Bảo vệ bề mặt ngoài trời khỏi UV, mưa, ẩm — màu bền theo thời gian.",
    },
    system5: {
      title: "Hệ Màu Bệt MDF Nội Thất",
      suitableFor: "MDF, HDF, ván công nghiệp trong nhà — bếp, tủ, đồ gia dụng",
      process: "Trét trám → Lót primer → Phun màu bệt wood paint IN",
      notes:
        "Quy trình chuyên biệt cho MDF: trét trám lỗ khí trước khi lót để bề mặt mịn đồng đều.",
    },
    fallback: {
      title: "Tư Vấn Theo Hạng Mục",
      suitableFor: "Vui lòng liên hệ để được tư vấn cụ thể",
      process: "Liên hệ kỹ sư Lotus để được đề xuất quy trình phù hợp",
    },
  },
  products: {
    label: "Dòng sản phẩm",
    title: "Hệ sơn hoàn chỉnh",
    titleItalic: "cho mọi quy trình gỗ",
    description:
      "Từ trét trám, lót, tạo màu đến phủ bảo vệ — Lotus cung cấp đầy đủ các sản phẩm cho từng bước hoàn thiện.",
    group: "Nhóm",
    usage: "Ứng dụng",
    repProducts: "Sản phẩm tiêu biểu",
    group1: {
      title: "Trét Trám & Xử Lý Bề Mặt",
      description:
        "Lấp đầy lỗ khí, vết nứt và khuyết điểm bề mặt trước khi sơn lót.",
      usage: "Bề mặt MDF, gỗ ghép, gỗ tự nhiên có khuyết điểm",
    },
    group2: {
      title: "Sơn Lót & Sanding Sealer",
      description:
        "Tạo nền bám dính tốt, lấp mao quản, giảm tiêu thụ lớp sơn phủ tiếp theo.",
      usage: "Tất cả bề mặt gỗ trước khi phủ màu hoặc lớp hoàn thiện",
    },
    group3: {
      title: "Hệ Giữ Vân & Tạo Màu Gỗ",
      description:
        "Tạo màu gỗ tự nhiên, giữ vân gỗ hiện rõ — dùng cho nội/ngoại thất.",
      usage: "Gỗ tự nhiên, veneer nội thất và ngoại thất",
    },
    group4: {
      title: "Hệ Màu Bệt Nội Thất",
      description:
        "Phủ màu hoàn toàn, bề mặt mịn đồng nhất, chịu va đập và lau chùi.",
      usage: "MDF, gỗ tự nhiên trong nhà — bếp, tủ, nội thất gia đình",
    },
    group5: {
      title: "Hệ Phủ Bảo Vệ Ngoại Thất",
      description:
        "Bảo vệ bề mặt gỗ ngoài trời khỏi UV, ẩm, mưa — độ bền cao.",
      usage: "Gỗ ngoài trời, sân vườn, mặt tiền, cổng gỗ",
    },
    group6: {
      title: "Hệ Sơn 2K — Độ Cứng Cao",
      description:
        "Hệ 2 thành phần cho độ cứng vượt trội, chịu hóa chất và mài mòn.",
      usage: "Sản phẩm xuất khẩu, nội thất thương mại yêu cầu độ bền cao",
    },
  },
  tech: {
    label: "Quy trình phối hợp kỹ thuật",
    title: "Từ ảnh mẫu đầu tiên —",
    titleItalic: "đến lô hàng cuối cùng.",
    description:
      "Lotus đồng hành như một bộ phận kỹ thuật mở rộng của xưởng — không chỉ bán sơn, mà cùng kiểm soát chất lượng đến lô cuối.",
    step1: {
      title: "Gửi ảnh & mô tả hạng mục",
      body: "Gửi ảnh bề mặt, loại gỗ, môi trường sử dụng và yêu cầu hoàn thiện qua Zalo. Lotus nhìn đúng hạng mục trước, rồi mới đề xuất đúng hệ.",
    },
    step2: {
      title: "Đề xuất hệ + hồ sơ kỹ thuật",
      body: "Lotus đề xuất hệ phù hợp theo loại gỗ, môi trường sử dụng và yêu cầu bề mặt của từng hạng mục. Với công trình cần nghiệm thu hoặc đơn hàng cần hồ sơ kỹ thuật, đội ngũ gửi kèm TDS, MSDS và các chứng nhận liên quan.",
    },
    step3: {
      title: "Thử mẫu trước khi vào lô",
      body: "Xưởng thử trực tiếp trên mẫu thật để chốt màu, độ bóng, độ bám và cảm giác bề mặt trước khi chạy số lượng lớn. Làm rõ từ đầu sẽ giảm lỗi khi vào lô và đỡ phát sinh lúc bàn giao.",
    },
    step4: {
      title: "Hỗ trợ kỹ thuật tại xưởng",
      body: "Ở lần triển khai đầu, kỹ sư Lotus hỗ trợ tỷ lệ pha, chỉnh súng phun và xử lý lỗi bề mặt ngay tại xưởng. Xưởng không phải tự dò hệ một mình khi chuyển sang hệ nước.",
    },
    step5: {
      title: "Cung ứng & theo dõi theo tiến độ",
      body: "Lotus giao hàng theo tiến độ sản xuất, theo dõi độ ổn định giữa các đợt và cùng xưởng điều chỉnh khi vật liệu, thời tiết hoặc điều kiện thi công thay đổi.",
    },
  },
  certifications: {
    label: "Tiêu chuẩn & Chứng nhận",
    title: "An toàn kiểm chứng —",
    titleItalic: "phù hợp xuất khẩu.",
    description:
      "Hệ nước, VOCs thấp, không thêm Formaldehyde trong công thức — phù hợp hạng mục trong nhà cho trẻ em, bệnh viện, trường học và đơn hàng xuất khẩu sang Mỹ, EU, Nhật Bản.",
    cert1: {
      name: "An toàn đồ chơi trẻ em — giới hạn kim loại nặng",
      tag: "Châu Âu",
    },
    cert2: {
      name: "An toàn đồ chơi trẻ em theo tiêu chuẩn Hoa Kỳ",
      tag: "Hoa Kỳ",
    },
    cert3: {
      name: "Phù hợp tiếp xúc gián tiếp với thực phẩm",
      tag: "Hoa Kỳ · FDA",
    },
    cert4: {
      name: "Đáp ứng giới hạn chất độc hại trong sản phẩm",
      tag: "Châu Âu",
    },
    cert5: {
      name: "VOCs thấp theo tiêu chuẩn quốc tế, không thêm Formaldehyde trong công thức",
      tag: "Phù hợp xưởng kín",
    },
  },
  lookbook: {
    label: "Dự án tiêu biểu",
    title: "Những công trình",
    titleItalic: "đã tin dùng Lotus.",
    description:
      "Từ khách sạn 5 sao đến khu dân cư cao cấp — những hạng mục không có chỗ cho lỗi bề mặt.",
    cta: "Bạn có dự án tương tự? Gửi ảnh để nhận tư vấn hệ sơn phù hợp qua Zalo 0943 966 662.",
    project1: {
      tag: "Căn hộ cao cấp",
      type: "Sơn hạng mục gỗ nội thất của toà Lake",
    },
    project2: {
      tag: "Khách sạn",
      type: "Sơn hạng mục gỗ nội thất khối phòng khách sạn",
    },
    project3: {
      tag: "Khách sạn 5 sao",
      type: "Sơn bảo dưỡng gỗ nội thất hàng năm",
    },
    project4: {
      tag: "Nhà máy sản xuất",
      type: "Dự án",
    },
    project5: {
      tag: "Nhà máy xuất khẩu",
      type: "Dự án trong nước & xuất khẩu",
    },
    project6: {
      tag: "Thương mại",
      type: "Gỗ nội thất & vách ốp",
    },
  },
  partners: {
    label: "Đã được tin dùng tại",
    description:
      "Từ xưởng hoàn thiện công trình đến nhà máy xuất khẩu — Lotus là nhà cung cấp sơn kỹ thuật cho cả hai.",
  },
  consult: {
    label: "Tư vấn miễn phí",
    title: "Gửi ảnh bề mặt",
    titleItalic: "nhận đề xuất hệ sơn trong 24h",
    description:
      "Kỹ sư Lotus phân tích bề mặt, loại gỗ và môi trường thi công của xưởng — đề xuất hệ sơn phù hợp kèm TDS/MSDS đầy đủ.",
    benefit1: "Tư vấn kỹ thuật 1-1, không bán hàng theo kịch bản",
    benefit2: "Hỗ trợ hồ sơ kỹ thuật TDS/MSDS khi cần",
    benefit3: "Kỹ sư đến xưởng hỗ trợ lần chạy đầu tiên",
    ctaButton: "Gửi ảnh để được tư vấn",
    ctaPhone: "Hoặc gọi trực tiếp:",
  },
  faq: {
    label: "Câu hỏi thường gặp",
    title: "Những gì",
    titleItalic: "xưởng hay hỏi nhất.",
    q1: "Hệ nước khác PU ở điểm gì thực sự quan trọng với xưởng?",
    a1: "Mùi thấp hơn, không cần pha dung môi, và đáp ứng tiêu chuẩn xuất khẩu mà PU gốc dung môi không qua được — đó là ba lý do xưởng chuyển hệ.",
    q2: "Chuyển sang hệ nước có phức tạp không, tôi phải tự mày mò?",
    a2: "Không. Kỹ sư Lotus vào xưởng lần đầu — chỉnh tỷ lệ pha, súng phun, xử lý lỗi bề mặt tại chỗ. Xưởng không phải dò một mình.",
    q3: "Hồ sơ kỹ thuật Lotus cung cấp được gì cho buyer?",
    a3: "TDS, MSDS song ngữ Anh–Việt, cùng các chứng nhận EN71-3, ASTM F963, FDA, RoHS — đủ cho hầu hết yêu cầu xuất khẩu Mỹ, EU, Nhật.",
    q4: "Xưởng tôi có phù hợp với Lotus không?",
    a4: "Nếu bạn đang thi công nội thất công trình hoặc sản xuất đồ gỗ xuất khẩu — Lotus làm việc với đúng nhóm đó.",
    q5: "Tôi bắt đầu như thế nào?",
    a5: "Gửi ảnh bề mặt qua Zalo 0943 966 662. Kỹ sư đọc ảnh, hỏi thêm nếu cần, đề xuất hệ và gửi hồ sơ kỹ thuật trong ngày.",
    q6: "Thời gian khô đủ để đóng gói là bao lâu?",
    a6: "Khô bề mặt 30–60 phút, đóng gói an toàn sau 12–24 giờ — thông số cụ thể theo từng hệ trong TDS.",
    q7: "Có mẫu thử trước khi đặt hàng lớn không?",
    a7: "Có. Lotus cung cấp mẫu thử và bảng màu để xưởng đối chiếu thực tế trước khi vào lô.",
    q8: "Súng phun HVLP và air-assisted dùng được không?",
    a8: "Được. Kỹ sư Lotus tư vấn tỷ lệ pha và áp suất cụ thể cho từng loại súng — không phải tự căn chỉnh.",
  },
};

i18next.use(initReactI18next).init({
  lng: "vi",
  fallbackLng: "vi",
  resources: {
    vi: { translation: vi },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
