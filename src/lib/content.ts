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

export interface AgeOption {
  value: string;
  label: string;
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
    name: string;
    email: string;
    agePlaceholder: string;
    ages: AgeOption[];
    submit: string;
  };
  toast: { success: string; name: string; email: string; age: string };
  footer: string;
}

const zh: PageCopy = {
  nav: { features: "核心优势", director: "主理人的话", paths: "定制方向", contact: "预约试听" },
  hero: {
    badge: "海外华裔青少儿 · 成人中文学习",
    titleA: "量身定制专属方案，",
    titleB1: "让孩子",
    titleAccent: "自信开口",
    titleB2: "说中文！",
    desc: "100% 中国本土严选师资，专注海外华裔青少儿中文教育，兼顾成人专属定制。",
    cta: "获取免费专属试听",
  },
  features: [
    { title: "100% 满意承诺", desc: "拒绝试课套路。不满意无限次免费试，直到遇见专属好老师。" },
    { title: "全球经验 本土严选", desc: "100% 中国本土严选师资，深谙海外孩子痛点，发音纯正。" },
    { title: "按需购课 零捆绑", desc: "课前15分钟免费取消。不强制推销大课包，随学随退。" },
    { title: "拒绝“水土不服”", desc: "精选《轻松学中文》《HSK》等实用教材。支持自带教材，100% 无缝定制。" },
  ],
  director: {
    eyebrow: "MESSAGE FROM THE DIRECTOR",
    vertical: "主理人的话",
    heading: "教育的质量，藏在看不见的细节里。",
    body: "你好，我是 EduFlex 的主理人。在 EduFlex，“个性化”绝不是空话。每一份量身定制的学习计划，都是我和前线老师反复打磨的成果。您的孩子，由我亲自负责质量把关。",
    sign: "EduFlex 主理人",
  },
  paths: {
    label: "LEARNING PATHS",
    heading: "定制方向",
    list: [
      { age: "4-7岁", title: "低龄趣味启蒙", desc: "专治“坐不住”。通过强互动与游戏化引导，把中文变成有趣的探索。" },
      { age: "8-14岁", title: "中小学高效提升", desc: "专治“学了忘、写作难”。拒绝死记硬背，梳理底层逻辑，攻克阅读与写作难关。" },
      { age: "15-18岁", title: "高阶中文与考级辅导", desc: "兼顾语言深造与考级需求。针对 VCE、AP 及 HSK 提供高质量查漏补缺与作文精批，助力冲刺高分。" },
      { age: "18岁+", title: "成人实用与商务中文", desc: "根据真实生活与职业规划量身定制。跳过死板教科书，直接匹配实用场景，让每一次开口都成为加分项。" },
    ],
  },
  contact: {
    heading: "预约免费试听",
    hint: "留下信息，课程顾问将在 24 小时内联系您。",
    name: "姓名",
    email: "邮箱",
    agePlaceholder: "选择年龄段",
    ages: [
      { value: "4-7", label: "4-7岁 · 低龄趣味启蒙" },
      { value: "8-14", label: "8-14岁 · 中小学高效提升" },
      { value: "15-18", label: "15-18岁 · 高阶中文与考级辅导" },
      { value: "18+", label: "18岁+ · 成人实用与商务中文" },
    ],
    submit: "立即预约",
  },
  toast: {
    success: "预约成功！我们将尽快与您联系。",
    name: "请填写姓名",
    email: "请输入有效邮箱",
    age: "请选择年龄段",
  },
  footer: "© 2026 EduFlex Learning 灵动教育",
};

const en: PageCopy = {
  nav: { features: "Why Us", director: "Director's Message", paths: "Learning Paths", contact: "Book a Trial" },
  hero: {
    badge: "Overseas Chinese Families · Adult Programs",
    titleA: "Tailored Learning Plans:",
    titleB1: "Empowering Your Child to ",
    titleAccent: "Speak Chinese with Confidence",
    titleB2: "!",
    desc: "100% Premium Native Teachers. Specialized in Chinese Education for Overseas Youth, with Custom Adult Programs.",
    cta: "Get Your Free Trial Lesson",
  },
  features: [
    { title: "100% Satisfaction Guarantee", desc: "No gimmicks. Unlimited free trials until you find the perfect teacher." },
    { title: "Premium Native Teachers", desc: "Carefully selected native teachers who understand the challenges of overseas learners. Authentic pronunciation." },
    { title: "Pay-As-You-Go, Zero Lock-in", desc: "Free cancellation up to 15 mins before class. No forced large packages. Learn on your terms." },
    {
      title: "Practical, Tailored Materials",
      desc: "Featuring practical textbooks like \"Easy Steps to Chinese\" and HSK. Bring your own materials for 100% seamless customization.",
    },
  ],
  director: {
    eyebrow: "MESSAGE FROM THE DIRECTOR",
    vertical: "EDUFLEX",
    heading: "The quality of education lies in the unseen details.",
    body: "Hello, I'm the Director of EduFlex. Here, \"personalized learning\" is more than just a buzzword. Every tailored study plan is the result of careful collaboration between me and our frontline teachers. I personally guarantee the quality of your child's education.",
    sign: "Director of EduFlex",
  },
  paths: {
    label: "LEARNING PATHS",
    heading: "Learning Paths",
    list: [
      {
        age: "Ages 4-7",
        title: "Fun Early Learning",
        desc: "Curing the \"can't sit still\". Transforming Chinese into an exciting exploration through high interactivity and gamified guidance.",
      },
      {
        age: "Ages 8-14",
        title: "Efficient Improvement",
        desc: "Solving \"forgetting quickly\" and \"struggling to write\". No rote memorization. We build foundational logic to conquer reading and writing challenges.",
      },
      {
        age: "Ages 15-18",
        title: "Advanced Chinese & Exam Prep",
        desc: "Balancing language mastery and exam needs. High-quality tutoring and essay grading for VCE, AP, and HSK to help you achieve top scores.",
      },
      {
        age: "Ages 18+",
        title: "Practical & Business Chinese",
        desc: "Tailored to your real life and career goals. Skip rigid textbooks. We match practical scenarios so every conversation adds value to your life.",
      },
    ],
  },
  contact: {
    heading: "Book a Free Trial",
    hint: "Leave your details, and our course consultant will contact you within 24 hours.",
    name: "Name",
    email: "Email",
    agePlaceholder: "Select Age Group",
    ages: [
      { value: "4-7", label: "Ages 4-7 · Fun Early Learning" },
      { value: "8-14", label: "Ages 8-14 · Efficient Improvement" },
      { value: "15-18", label: "Ages 15-18 · Advanced Chinese & Exam Prep" },
      { value: "18+", label: "Ages 18+ · Practical & Business Chinese" },
    ],
    submit: "Book Now",
  },
  toast: {
    success: "Booking received! We'll be in touch shortly.",
    name: "Please enter your name",
    email: "Please enter a valid email",
    age: "Please select an age group",
  },
  footer: "© 2026 EduFlex Learning",
};

export const copy: Record<Lang, PageCopy> = { zh, en };
