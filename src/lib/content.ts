export type Lang = "zh" | "en";

export interface FeatureCopy {
  title: string;
  desc: string;
}

export interface PathCopy {
  age: string;
  title: string;
  desc: string;
}

export interface PageCopy {
  nav: { features: string; director: string; paths: string; contact: string };
  hero: {
    badge: string;
    titleA: string;
    titleB1: string;
    titleAccent: string;
    titleB2: string;
    desc: string;
    cta: string;
  };
  features: FeatureCopy[];
  director: { eyebrow: string; vertical: string; heading: string; body: string; sign: string };
  paths: { label: string; heading: string; list: PathCopy[] };
  contact: {
    heading: string;
    hint: string;
    fields: {
      name: string;
      email: string;
      ageGroup: string;
      ageGroupOptions: string[];
      location: string;
      chineseLevel: string;
      trialTime: string;
    };
    placeholders: {
      name: string;
      email: string;
      location: string;
      chineseLevel: string;
      trialTime: string;
    };
    submit: string;
  };
  toast: { name: string; email: string; ageGroup: string };
  footer: string;
}

export const copy: Record<Lang, PageCopy> = {
  zh: {
    nav: { features: "核心优势", director: "主理人的话", paths: "定制方向", contact: "预约试听" },
    hero: {
      badge: "EduFlex 灵动教育 · 海外华裔青少儿与成人中文",
      titleA: "因材施教，",
      titleB1: "点燃孩子的",
      titleAccent: "中文兴趣",
      titleB2: "！",
      desc: "100% 中国本土严选师资，专注海外华裔青少儿中文教育，以及成人实用中文提升。",
      cta: "获取免费专属试听",
    },
    features: [
      { title: "100% 满意承诺", desc: "拒绝试课套路。不满意无限次免费试，直到遇见专属好老师。" },
      { title: "全球经验 本土严选", desc: "100% 中国本土严选师资，深谙海外孩子痛点，发音纯正。" },
      { title: "20节轻量起步 · 零大包负担", desc: "拒绝动辄上百节的大课包捆绑。支持20节课灵活起步，课前15分钟免费取消，余课随时可退。" },
      { title: "拒绝“水土不服”", desc: "精选《轻松学中文》《HSK》等实用教材。支持自带教材，100% 无缝定制。" },
    ],
    director: {
      eyebrow: "主理人的话",
      vertical: "秉持初心 · 因材施教",
      heading: "教育的质量，藏在看不见的细节里。",
      body: "你好，我是 EduFlex 的主理人。在 EduFlex，“个性化”绝不是空话。每一份量身定制的学习计划，都是我和前线老师反复打磨的成果。您的孩子，由我亲自负责质量把关。",
      sign: "EduFlex 主理人",
    },
    paths: {
      label: "LEARNING PATHS",
      heading: "定制方向",
      list: [
        { age: "4-7岁", title: "低龄趣味启蒙", desc: "专治“坐不住”。通过强互动与游戏化引导，把中文变成有趣的探索。" },
        { age: "8-12岁", title: "中小学高效提升", desc: "专治“学了忘、写作难”。拒绝死记硬背，梳理底层逻辑，攻克阅读与写作难关。" },
        { age: "13-18岁", title: "高阶中文与考级辅导", desc: "兼顾语言深造与考级需求。针对 VCE、AP 及 HSK 提供高质量查漏补缺与作文精批，助力冲刺高分。" },
        { age: "18岁+", title: "成人实用与商务中文", desc: "根据真实生活与职业规划量身定制。跳过死板教科书，直接匹配实用场景，让每一次开口都成为加分项。" },
      ],
    },
    contact: {
      heading: "预约免费试听",
      hint: "留下信息，课程顾问将在 24 小时内联系您。",
      fields: {
        name: "姓名",
        email: "邮箱",
        ageGroup: "年龄段",
        ageGroupOptions: ["4-7 岁", "8-12 岁", "13-15 岁", "16-18 岁", "18+ 岁"],
        location: "所在国家与城市",
        chineseLevel: "当前中文听说与水平",
        trialTime: "方便试课的时间范围",
      },
      placeholders: {
        name: "请填写姓名",
        email: "用于接收试课确认",
        location: "如：澳大利亚·墨尔本",
        chineseLevel: "如：零基础 / 无法完全中文对话 / 中文学校一年级等",
        trialTime: "如：周六上午、平日墨尔本时间17:00后",
      },
      submit: "立即预约",
    },
    toast: {
      name: "请填写姓名",
      email: "请填写有效邮箱",
      ageGroup: "请选择年龄段",
    },
    footer: "© 2026 EduFlex Learning 灵动教育",
  },
  en: {
    nav: { features: "Why EduFlex", director: "Director", paths: "Paths", contact: "Book Trial" },
    hero: {
      badge: "EduFlex Learning · Chinese for Global Heritage Kids & Adults",
      titleA: "Tailored Teaching, ",
      titleB1: "Inspiring a ",
      titleAccent: "Lifelong Love",
      titleB2: " for Chinese.",
      desc: "Top-tier native teachers in China, tailored for overseas youth and practical Chinese advancement for adults.",
      cta: "Book Free Trial",
    },
    features: [
      { title: "100% Satisfaction", desc: "Free trial until you meet the perfect match. No strings attached." },
      { title: "Native & Experienced", desc: "Strictly vetted native teachers with extensive international teaching experience." },
      { title: "Flexible Packs, No Lock-in", desc: "Say goodbye to 100+ lesson bulk traps. Start easily with just 20 lessons. Cancel free up to 15 mins prior, refund remaining credits anytime." },
      { title: "Curriculum That Fits", desc: "Proven series like Chinese Made Easy & HSK, or bring your own textbook." },
    ],
    director: {
      eyebrow: "MESSAGE FROM THE DIRECTOR",
      vertical: "HEART · EXCELLENCE",
      heading: "True quality is built in the details.",
      body: "Hello, I am the founder of EduFlex. Here, 'tailored' is never a buzzword. Every learning plan is carefully curated by our team and myself.",
      sign: "EduFlex Director",
    },
    paths: {
      label: "LEARNING PATHS",
      heading: "Tailored Programs",
      list: [
        { age: "Age 4-7", title: "Playful Starter", desc: "Interactive and game-based learning designed for short attention spans." },
        { age: "Age 8-12", title: "Primary & Middle School", desc: "Systematic learning focusing on reading, comprehension, and practical writing." },
        { age: "Age 13-18", title: "Exam & Advanced Prep", desc: "Tailored support for VCE, AP, and HSK test-takers with essay feedback." },
        { age: "18+", title: "Adults & Business", desc: "Practical conversational and professional Chinese designed for your goals." },
      ],
    },
    contact: {
      heading: "Book Your Free Trial",
      hint: "Leave your info and our advisor will reach out within 24 hours.",
      fields: {
        name: "Name",
        email: "Email",
        ageGroup: "Age Group",
        ageGroupOptions: ["4-7", "8-12", "13-15", "16-18", "18+"],
        location: "Country & City",
        chineseLevel: "Current Chinese Level",
        trialTime: "Preferred Trial Time",
      },
      placeholders: {
        name: "Your name",
        email: "For trial confirmation",
        location: "e.g. Melbourne, Australia",
        chineseLevel: "e.g. Beginner / Conversational / Grade 1 weekend school",
        trialTime: "e.g. Saturday morning, Weekday after 5pm",
      },
      submit: "Book Now",
    },
    toast: {
      name: "Please enter your name",
      email: "Please enter a valid email",
      ageGroup: "Please select an age group",
    },
    footer: "© 2026 EduFlex Learning",
  },
};
