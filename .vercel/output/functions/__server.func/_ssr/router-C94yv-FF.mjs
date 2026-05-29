import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { i as instance } from "../_libs/i18next.mjs";
import { c as createClient } from "../_libs/sanity__client.mjs";
import { d as deprecatedcreateImageUrlBuilder } from "../_libs/sanity__image-url.mjs";
import { i as initReactI18next } from "../_libs/react-i18next.mjs";
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
import "../_libs/use-sync-external-store.mjs";
const vi = {
  hero: {
    subtitle: "Sơn Gỗ Hệ Nước",
    title: "Sơn gỗ hệ nước cho",
    titleItalic: "xưởng nội thất công trình và nội thất xuất khẩu.",
    description: "Kỹ sư Lotus hỗ trợ trực tiếp tại xưởng, giúp chọn đúng hệ và giữ bề mặt ổn định từ mẫu thử đến lô giao thực tế.",
    trustLabel: "Hồ sơ & Tiêu chuẩn",
    ctaButton: "Gửi ảnh hạng mục — nhận tư vấn",
    ctaPhone: "Hoặc gọi kỹ thuật"
  },
  trust: {
    stat1Label: "Xưởng & Nhà Máy Tin Dùng",
    stat2Label: "Năm Kinh Nghiệm",
    consult: "Tư Vấn Kỹ Thuật 1-1 Miễn Phí",
    custom: "100+ màu có sẵn — pha riêng theo yêu cầu",
    customDetail: "RAL · NCS · Mã Màu Riêng"
  },
  audience: {
    label: "Lotus phù hợp với ai",
    title: "Một hệ sơn —",
    titleItalic: "hai nhu cầu sản xuất chính.",
    description: "Cùng quy trình và công thức sơn — Lotus điều chỉnh hồ sơ kỹ thuật và hỗ trợ phù hợp theo từng loại hình xưởng.",
    factory: {
      title: "Xưởng nội thất công trình",
      lead: "Hạng mục cần bàn giao đúng màu, đủ hồ sơ kỹ thuật — Lotus giữ màu ổn định từ mẫu thử đến lô cuối, tài liệu sẵn khi cần.",
      bullets: [
        "Đồng màu giữa các lô — hạn chế chênh sắc khi giao theo đợt",
        "Hồ sơ kỹ thuật phục vụ nghiệm thu dự án",
        "Mùi nhẹ, VOC thấp — phù hợp hạng mục bàn giao sớm"
      ],
      tags: ["Dự án cao cấp", "Nội thất công trình"]
    },
    export: {
      title: "Nhà máy / đơn hàng xuất khẩu",
      lead: "Không để mất đơn vì lý do kỹ thuật — chứng nhận, hồ sơ song ngữ và màu ổn định lô sau lô, Lotus chuẩn bị sẵn.",
      bullets: [
        "TDS / MSDS song ngữ Anh–Việt theo yêu cầu buyer",
        "Đáp ứng EN71-3 · ASTM F963 · FDA · RoHS",
        "Bề mặt ổn định trên sản lượng lớn, nhiều lô"
      ],
      tags: ["Xuất khẩu Mỹ · EU · Nhật", "Sản lượng lớn"]
    }
  },
  whyWater: {
    label: "Tại sao hệ nước?",
    title: "PU vẫn sơn được.",
    titleItalic: "Nhưng hệ nước giúp xưởng lợi hơn ở đâu?",
    col1: {
      heading: "Vận hành gọn hơn — chi phí xưởng thấp hơn",
      body: "Không pha dung môi, không cần kho chứa riêng, thợ làm cả ngày trong xưởng kín mà không cần hệ thống thông khí công nghiệp đắt tiền. Mùi nhẹ — thợ làm việc thoải mái hơn, năng suất thực tế cao hơn.",
      punch: "GIẢM CHI PHÍ VẬN HÀNH — KHÔNG CẦN ĐẦU TƯ THÊM HẠ TẦNG."
    },
    col2: {
      heading: "Chuyển hệ không phải tự mày mò",
      body: "Kỹ sư Lotus vào xưởng buổi đầu tiên — chỉnh tỷ lệ pha, căn áp suất súng phun, xử lý lỗi bề mặt ngay tại chỗ. Xưởng chạy đúng ngay từ lô đầu, không mất hàng thử nghiệm.",
      punch: "RÚT NGẮN THỜI GIAN DÒ HỆ — ĐỠ MẤT HÀNG, MẤT CÔNG."
    },
    col3: {
      heading: "Hồ sơ kỹ thuật đầy đủ — nghiệm thu không vướng",
      body: "VOCs thấp, mùi nhẹ, TDS/MSDS song ngữ sẵn có — hạng mục bàn giao đúng tiến độ, không bị đội giám sát giữ lại vì thiếu hồ sơ hay mùi sơn chưa thoát.",
      punch: "GIẢM VƯỚNG KHI NGHIỆM THU VÀ BÀN GIAO."
    },
    col4: {
      heading: "Độ cứng & kháng hoá chất — không còn phải đánh đổi",
      body: "Hệ nước thế hệ cũ mềm hơn PU, dễ trầy và kém chịu cồn — điều đó đúng với acrylic 1K trước đây. Lotus hệ 2 thành phần, cho độ cứng màng sơn và khả năng kháng hoá chất tương đương hệ PU gốc dung môi khi thi công đúng quy trình.",
      punch: "HỆ NƯỚC LOTUS — ĐỦ CỨNG, ĐỦ BỀN, KHÔNG CẦN THÊM PU."
    }
  },
  finishFinder: {
    label: "Công cụ tư vấn nhanh",
    title: "Chọn đúng hệ sơn",
    titleItalic: "trong vài bước.",
    description: "Cho Lotus biết bề mặt và môi trường sử dụng — hệ phù hợp sẽ hiện ra ngay, kèm cấu hình kỹ thuật và sản phẩm đại diện.",
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
    completeSteps: "Hoàn thành các bước để xem hệ sơn Lotus phù hợp với hạng mục của anh / chị.",
    resultLabel: "Hệ sơn đề xuất",
    suitableFor: "Phù hợp với",
    techConfig: "Quy trình",
    repProducts: "Sản phẩm",
    notes: "Lưu ý",
    colorRef: "Bảng màu tham khảo",
    viewFullChart: "Xem bảng màu đầy đủ",
    colorDisclaimer: "Màu hiển thị trên màn hình chỉ mang tính tham khảo. Đối chiếu mẫu thực tế trước khi chốt.",
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
        notes: "Phương pháp lau cho hiệu ứng vân gỗ sâu, phù hợp nội thất cao cấp cần tạo chiều sâu màu."
      },
      methodPhun: {
        process: "Phun sealer → Phun woodstain + finish nội thất",
        notes: "Phương pháp phun cho năng suất cao, màu đồng đều — phù hợp xưởng sản xuất loạt."
      }
    },
    system2: {
      title: "Hệ Màu Bệt Nội Thất — Gỗ Tự Nhiên",
      suitableFor: "Gỗ tự nhiên, veneer trong nhà — phủ màu hoàn toàn",
      process: "Lót primer → Phun màu bệt wood paint IN",
      notes: "Phủ màu hoàn toàn che phủ vân gỗ, cho bề mặt đồng nhất theo yêu cầu thiết kế."
    },
    system3: {
      title: "Hệ Giữ Vân Ngoại Thất",
      suitableFor: "Gỗ tự nhiên, veneer ngoài trời — sân vườn, mặt tiền, cổng",
      methodLau: {
        process: "Lau màu → Lót sealer → Phủ acrylic lacquer ngoại thất",
        notes: "Chống UV và thấm nước, giữ vân tự nhiên bền ngoài trời."
      },
      methodPhun: {
        process: "Phun sealer → Phun woodstain finish EX → Phủ PUD EX",
        notes: "Lớp phủ ngoại thất nhiều lớp, chịu thời tiết khắc nghiệt."
      }
    },
    system4: {
      title: "Hệ Màu Bệt Ngoại Thất — Gỗ Tự Nhiên",
      suitableFor: "Gỗ tự nhiên, veneer ngoài trời — phủ màu bảo vệ",
      process: "Lót primer → Phun màu bệt wood paint EX",
      notes: "Bảo vệ bề mặt ngoài trời khỏi UV, mưa, ẩm — màu bền theo thời gian."
    },
    system5: {
      title: "Hệ Màu Bệt MDF Nội Thất",
      suitableFor: "MDF, HDF, ván công nghiệp trong nhà — bếp, tủ, đồ gia dụng",
      process: "Trét trám → Lót primer → Phun màu bệt wood paint IN",
      notes: "Quy trình chuyên biệt cho MDF: trét trám lỗ khí trước khi lót để bề mặt mịn đồng đều."
    },
    fallback: {
      title: "Tư Vấn Theo Hạng Mục",
      suitableFor: "Vui lòng liên hệ để được tư vấn cụ thể",
      process: "Liên hệ kỹ sư Lotus để được đề xuất quy trình phù hợp"
    }
  },
  products: {
    label: "Dòng sản phẩm",
    title: "Hệ sơn hoàn chỉnh",
    titleItalic: "cho mọi quy trình gỗ",
    description: "Từ trét trám, lót, tạo màu đến phủ bảo vệ — Lotus cung cấp đầy đủ các sản phẩm cho từng bước hoàn thiện.",
    group: "Nhóm",
    usage: "Ứng dụng",
    repProducts: "Sản phẩm tiêu biểu",
    group1: {
      title: "Trét Trám & Xử Lý Bề Mặt",
      description: "Lấp đầy lỗ khí, vết nứt và khuyết điểm bề mặt trước khi sơn lót.",
      usage: "Bề mặt MDF, gỗ ghép, gỗ tự nhiên có khuyết điểm"
    },
    group2: {
      title: "Sơn Lót & Sanding Sealer",
      description: "Tạo nền bám dính tốt, lấp mao quản, giảm tiêu thụ lớp sơn phủ tiếp theo.",
      usage: "Tất cả bề mặt gỗ trước khi phủ màu hoặc lớp hoàn thiện"
    },
    group3: {
      title: "Hệ Giữ Vân & Tạo Màu Gỗ",
      description: "Tạo màu gỗ tự nhiên, giữ vân gỗ hiện rõ — dùng cho nội/ngoại thất.",
      usage: "Gỗ tự nhiên, veneer nội thất và ngoại thất"
    },
    group4: {
      title: "Hệ Màu Bệt Nội Thất",
      description: "Phủ màu hoàn toàn, bề mặt mịn đồng nhất, chịu va đập và lau chùi.",
      usage: "MDF, gỗ tự nhiên trong nhà — bếp, tủ, nội thất gia đình"
    },
    group5: {
      title: "Hệ Phủ Bảo Vệ Ngoại Thất",
      description: "Bảo vệ bề mặt gỗ ngoài trời khỏi UV, ẩm, mưa — độ bền cao.",
      usage: "Gỗ ngoài trời, sân vườn, mặt tiền, cổng gỗ"
    },
    group6: {
      title: "Hệ Sơn 2K — Độ Cứng Cao",
      description: "Hệ 2 thành phần cho độ cứng vượt trội, chịu hóa chất và mài mòn.",
      usage: "Sản phẩm xuất khẩu, nội thất thương mại yêu cầu độ bền cao"
    }
  },
  tech: {
    label: "Quy trình phối hợp kỹ thuật",
    title: "Từ ảnh mẫu đầu tiên —",
    titleItalic: "đến lô hàng cuối cùng.",
    description: "Lotus đồng hành như một bộ phận kỹ thuật mở rộng của xưởng — không chỉ bán sơn, mà cùng kiểm soát chất lượng đến lô cuối.",
    step1: {
      title: "Gửi ảnh & mô tả hạng mục",
      body: "Gửi ảnh bề mặt, loại gỗ, môi trường sử dụng và yêu cầu hoàn thiện qua Zalo. Lotus nhìn đúng hạng mục trước, rồi mới đề xuất đúng hệ."
    },
    step2: {
      title: "Đề xuất hệ + hồ sơ kỹ thuật",
      body: "Lotus đề xuất hệ phù hợp theo loại gỗ, môi trường sử dụng và yêu cầu bề mặt của từng hạng mục. Với công trình cần nghiệm thu hoặc đơn hàng cần hồ sơ kỹ thuật, đội ngũ gửi kèm TDS, MSDS và các chứng nhận liên quan."
    },
    step3: {
      title: "Thử mẫu trước khi vào lô",
      body: "Xưởng thử trực tiếp trên mẫu thật để chốt màu, độ bóng, độ bám và cảm giác bề mặt trước khi chạy số lượng lớn. Làm rõ từ đầu sẽ giảm lỗi khi vào lô và đỡ phát sinh lúc bàn giao."
    },
    step4: {
      title: "Hỗ trợ kỹ thuật tại xưởng",
      body: "Ở lần triển khai đầu, kỹ sư Lotus hỗ trợ tỷ lệ pha, chỉnh súng phun và xử lý lỗi bề mặt ngay tại xưởng. Xưởng không phải tự dò hệ một mình khi chuyển sang hệ nước."
    },
    step5: {
      title: "Cung ứng & theo dõi theo tiến độ",
      body: "Lotus giao hàng theo tiến độ sản xuất, theo dõi độ ổn định giữa các đợt và cùng xưởng điều chỉnh khi vật liệu, thời tiết hoặc điều kiện thi công thay đổi."
    }
  },
  certifications: {
    label: "Tiêu chuẩn & Chứng nhận",
    title: "An toàn kiểm chứng —",
    titleItalic: "phù hợp xuất khẩu.",
    description: "Hệ nước, VOCs thấp, không thêm Formaldehyde trong công thức — phù hợp hạng mục trong nhà cho trẻ em, bệnh viện, trường học và đơn hàng xuất khẩu sang Mỹ, EU, Nhật Bản.",
    cert1: {
      name: "An toàn đồ chơi trẻ em — giới hạn kim loại nặng",
      tag: "Châu Âu"
    },
    cert2: {
      name: "An toàn đồ chơi trẻ em theo tiêu chuẩn Hoa Kỳ",
      tag: "Hoa Kỳ"
    },
    cert3: {
      name: "Phù hợp tiếp xúc gián tiếp với thực phẩm",
      tag: "Hoa Kỳ · FDA"
    },
    cert4: {
      name: "Đáp ứng giới hạn chất độc hại trong sản phẩm",
      tag: "Châu Âu"
    },
    cert5: {
      name: "VOCs thấp theo tiêu chuẩn quốc tế, không thêm Formaldehyde trong công thức",
      tag: "Phù hợp xưởng kín"
    }
  },
  lookbook: {
    label: "Dự án tiêu biểu",
    title: "Những công trình",
    titleItalic: "đã tin dùng Lotus.",
    description: "Từ khách sạn 5 sao đến khu dân cư cao cấp — những hạng mục không có chỗ cho lỗi bề mặt.",
    cta: "Bạn có dự án tương tự? Gửi ảnh để nhận tư vấn hệ sơn phù hợp qua Zalo 0943 966 662.",
    project1: {
      tag: "Căn hộ cao cấp",
      type: "Sơn hạng mục gỗ nội thất của toà Lake"
    },
    project2: {
      tag: "Khách sạn",
      type: "Sơn hạng mục gỗ nội thất khối phòng khách sạn"
    },
    project3: {
      tag: "Khách sạn 5 sao",
      type: "Sơn bảo dưỡng gỗ nội thất hàng năm"
    },
    project4: {
      tag: "Nhà máy sản xuất",
      type: "Dự án"
    },
    project5: {
      tag: "Nhà máy xuất khẩu",
      type: "Dự án trong nước & xuất khẩu"
    },
    project6: {
      tag: "Thương mại",
      type: "Gỗ nội thất & vách ốp"
    }
  },
  partners: {
    label: "Đã được tin dùng tại",
    description: "Từ xưởng hoàn thiện công trình đến nhà máy xuất khẩu — Lotus là nhà cung cấp sơn kỹ thuật cho cả hai."
  },
  consult: {
    label: "Tư vấn miễn phí",
    title: "Gửi ảnh bề mặt",
    titleItalic: "nhận đề xuất hệ sơn trong 24h",
    description: "Kỹ sư Lotus phân tích bề mặt, loại gỗ và môi trường thi công của xưởng — đề xuất hệ sơn phù hợp kèm TDS/MSDS đầy đủ.",
    benefit1: "Tư vấn kỹ thuật 1-1, không bán hàng theo kịch bản",
    benefit2: "Hỗ trợ hồ sơ kỹ thuật TDS/MSDS khi cần",
    benefit3: "Kỹ sư đến xưởng hỗ trợ lần chạy đầu tiên",
    ctaButton: "Gửi ảnh để được tư vấn",
    ctaPhone: "Hoặc gọi trực tiếp:"
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
    a8: "Được. Kỹ sư Lotus tư vấn tỷ lệ pha và áp suất cụ thể cho từng loại súng — không phải tự căn chỉnh."
  }
};
instance.use(initReactI18next).init({
  lng: "vi",
  fallbackLng: "vi",
  resources: {
    vi: { translation: vi }
  },
  interpolation: {
    escapeValue: false
  }
});
const appCss = "/assets/styles-DZM589wH.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$4 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lotus - Sơn Gỗ Hệ Nước | Hoàn Thiện Gỗ Cho Dự Án Cao Cấp & Xuất Khẩu" },
      {
        name: "description",
        content: "Sơn gỗ hệ nước Lotus chuyên nghiệp cho xưởng nội thất công trình và xuất khẩu Mỹ, EU, Nhật. Hỗ trợ kỹ thuật 1-1, hồ sơ TDS/MSDS, chứng nhận EN71-3, ASTM F963, FDA. Tư vấn miễn phí: 0943 966 662."
      },
      { name: "keywords", content: "sơn gỗ hệ nước, sơn gỗ nội thất, sơn gỗ ngoại thất, sơn gỗ xuất khẩu, sơn gỗ dự án cao cấp, Lotus wood paint, water-based wood finish, wood coating for export" },
      { name: "author", content: "Lotus Wood Paint" },
      { name: "robots", content: "index, follow" },
      { name: "googlebot", content: "index, follow" },
      {
        property: "og:title",
        content: "Lotus - Sơn Gỗ Hệ Nước | Hoàn Thiện Gỗ Cho Dự Án Cao Cấp & Xuất Khẩu"
      },
      {
        property: "og:description",
        content: "Sơn gỗ hệ nước Lotus chuyên nghiệp cho xưởng nội thất công trình và xuất khẩu Mỹ, EU, Nhật. Hỗ trợ kỹ thuật 1-1, hồ sơ TDS/MSDS, chứng nhận EN71-3, ASTM F963, FDA."
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
      { name: "ICBM", content: "10.8544, 106.5775" }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      },
      {
        rel: "canonical",
        href: "https://www.songo.com.vn"
      }
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
      },
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Hệ sơn nước khác PU ở điểm gì thực sự quan trọng với xưởng?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mùi thấp hơn, không cần pha dung môi, và đáp ứng tiêu chuẩn xuất khẩu mà PU gốc dung môi không qua được — đó là ba lý do xưởng chuyển hệ."
              }
            },
            {
              "@type": "Question",
              "name": "Chuyển sang hệ sơn nước có phức tạp không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Không. Kỹ sư Lotus vào xưởng lần đầu — chỉnh tỷ lệ pha, súng phun, xử lý lỗi bề mặt tại chỗ. Xưởng không phải tự dò một mình."
              }
            },
            {
              "@type": "Question",
              "name": "Hồ sơ kỹ thuật sơn gỗ Lotus cung cấp được gì cho buyer xuất khẩu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "TDS, MSDS song ngữ Anh–Việt, cùng các chứng nhận EN71-3, ASTM F963, FDA, RoHS — đủ cho hầu hết yêu cầu xuất khẩu Mỹ, EU, Nhật."
              }
            },
            {
              "@type": "Question",
              "name": "Xưởng nội thất công trình dùng sơn Lotus có lợi ích gì?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Đồng màu giữa các lô sản xuất, hồ sơ kỹ thuật phục vụ nghiệm thu dự án, VOC thấp và mùi nhẹ phù hợp hạng mục bàn giao sớm."
              }
            },
            {
              "@type": "Question",
              "name": "Thời gian khô của sơn gỗ hệ nước Lotus là bao lâu?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Khô bề mặt 30–60 phút, đóng gói an toàn sau 12–24 giờ — thông số cụ thể theo từng hệ trong TDS."
              }
            },
            {
              "@type": "Question",
              "name": "Sơn gỗ Lotus có mẫu thử trước khi đặt hàng lớn không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Có. Lotus cung cấp mẫu thử và bảng màu để xưởng đối chiếu thực tế trước khi vào lô."
              }
            },
            {
              "@type": "Question",
              "name": "Sơn gỗ hệ nước Lotus dùng được với súng phun HVLP không?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Được. Kỹ sư Lotus tư vấn tỷ lệ pha và áp suất cụ thể cho từng loại súng HVLP và air-assisted."
              }
            },
            {
              "@type": "Question",
              "name": "Làm thế nào để bắt đầu tư vấn sơn gỗ với Lotus?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Gửi ảnh bề mặt qua Zalo 0943 966 662. Kỹ sư đọc ảnh, hỏi thêm nếu cần, đề xuất hệ và gửi hồ sơ kỹ thuật trong ngày."
              }
            }
          ]
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "vi", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("head", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-WJJM4HV5LR"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WJJM4HV5LR');
            `
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          async: true,
          src: "https://www.googletagmanager.com/gtag/js?id=AW-16701011893"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "script",
        {
          dangerouslySetInnerHTML: {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-16701011893');
            `
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("script", { src: "https://cdn.jsdelivr.net/npm/marked/marked.min.js" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$4.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) });
}
const $$splitComponentImporter$3 = () => import("./studio-BFMuw0pq.mjs");
const Route$3 = createFileRoute("/studio")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-BCv1V5HI.mjs");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component"),
  head: () => ({
    meta: [{
      title: "Lotus - Sơn Gỗ Hệ Nước"
    }, {
      name: "description",
      content: "Sơn gỗ hệ nước Lotus cho xưởng nội thất và nhà máy xuất khẩu. Giảm mùi dung môi, cải thiện môi trường làm việc, đáp ứng xu hướng vật liệu an toàn."
    }],
    scripts: [{
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [{
          "@type": "Question",
          "name": "Sơn gỗ hệ nước Lotus có ưu điểm gì so với sơn PU?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sơn gỗ hệ nước Lotus có ưu điểm: VOCs thấp, mùi nhẹ, an toàn cho sức khỏe, không cần pha dung môi nhiều, vận hành gọn hơn, phù hợp xưởng kín, có hồ sơ kỹ thuật TDS/MSDS đầy đủ, đáp ứng tiêu chuẩn xuất khẩu Mỹ, EU, Nhật."
          }
        }, {
          "@type": "Question",
          "name": "Lotus có hỗ trợ kỹ thuật khi chuyển sang hệ nước không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Có, kỹ sư Lotus hỗ trợ trực tiếp tại xưởng từ lần chạy đầu tiên: hỗ trợ tỷ lệ pha, chỉnh súng phun, xử lý lỗi bề mặt, và theo dõi độ ổn định giữa các đợt giao hàng."
          }
        }, {
          "@type": "Question",
          "name": "Sơn gỗ Lotus có đạt chứng nhận quốc tế không?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Có, sơn gỗ Lotus đáp ứng nhiều chứng nhận quốc tế: EN71-3 (an toàn đồ chơi trẻ em), ASTM F963 (tiêu chuẩn Hoa Kỳ), FDA (tiếp xúc gián tiếp thực phẩm), RoHS (giới hạn chất độc hại), Low VOCs."
          }
        }, {
          "@type": "Question",
          "name": "Lotus phù hợp với loại hình xưởng nào?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Lotus phù hợp với 2 loại hình chính: Xưởng nội thất công trình (thi công căn hộ, khách sạn, văn phòng cao cấp) và Nhà máy/đơn hàng xuất khẩu (sản xuất đồ gỗ xuất khẩu sang Mỹ, EU, Nhật Bản)."
          }
        }, {
          "@type": "Question",
          "name": "Cách nhận tư vấn hệ sơn phù hợp từ Lotus?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Gửi ảnh bề mặt, loại gỗ, môi trường sử dụng và yêu cầu hoàn thiện qua Zalo 0943 966 662. Kỹ sư Lotus sẽ đề xuất hệ phù hợp và gửi kèm hồ sơ kỹ thuật TDS/MSDS khi cần."
          }
        }]
      })
    }]
  })
});
const sanityClient = createClient({
  projectId: "fzoqzuni",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true
});
const builder = deprecatedcreateImageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}
async function getAllPosts() {
  return sanityClient.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id, title, slug, excerpt, publishedAt, tags, mainImage, seoDescription
    }`
  );
}
async function getPostBySlug(slug) {
  return sanityClient.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      _id, title, slug, excerpt, publishedAt, tags, mainImage, body, seoDescription
    }`,
    { slug }
  );
}
const $$splitComponentImporter$1 = () => import("./index-57UF0ivF.mjs");
const Route$1 = createFileRoute("/blog/")({
  loader: async () => {
    const posts = await getAllPosts();
    return {
      posts
    };
  },
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("../_slug-DlcMxj3G.mjs");
const Route = createFileRoute("/blog/$slug")({
  loader: async ({
    params
  }) => {
    const post = await getPostBySlug(params.slug);
    if (!post) throw new Error("Post not found");
    return {
      post
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.post?.title ?? "Bài viết"} — Sơn Gỗ Lotus`
    }, {
      name: "description",
      content: loaderData?.post?.seoDescription ?? loaderData?.post?.excerpt ?? ""
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const StudioRoute = Route$3.update({
  id: "/studio",
  path: "/studio",
  getParentRoute: () => Route$4
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const BlogIndexRoute = Route$1.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$4
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  StudioRoute,
  BlogSlugRoute,
  BlogIndexRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Route$1 as R,
  Route as a,
  router as r,
  urlFor as u
};
