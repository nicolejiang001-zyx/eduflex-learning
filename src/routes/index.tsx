import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import {
  ShieldCheck,
  Globe2,
  ShoppingBag,
  BookMarked,
  Sparkles,
  BookOpen,
  GraduationCap,
  Briefcase,
  ArrowRight,
  UserRound,
  Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduFlex Learning 灵动教育 | 量身定制专属中文方案" },
      { name: "description", content: "100% 中国本土严选师资，专注海外华裔青少儿中文教育，兼顾成人专属定制。获取免费专属试听。" },
      { property: "og:title", content: "EduFlex Learning 灵动教育" },
      { property: "og:description", content: "量身定制专属方案，让孩子自信开口说中文！" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: ShieldCheck, title: "100% 满意承诺", desc: "拒绝试课套路。不满意无限次免费试，直到遇见专属好老师。" },
  { icon: Globe2, title: "全球经验 本土严选", desc: "100% 中国本土严选师资，深谙海外孩子痛点，发音纯正。" },
  { icon: ShoppingBag, title: "按需购课 零捆绑", desc: "课前15分钟免费取消。不强制推销大课包，随学随退。" },
  { icon: BookMarked, title: "拒绝“水土不服”", desc: "精选《轻松学中文》《HSK》等实用教材。支持自带教材，100% 无缝定制。" },
];

const paths = [
  { icon: Sparkles, age: "4-7岁", title: "低龄趣味启蒙", desc: "专治“坐不住”。通过强互动与游戏化引导，把中文变成有趣的探索。" },
  { icon: BookOpen, age: "8-14岁", title: "中小学高效提升", desc: "专治“学了忘、写作难”。拒绝死记硬背，梳理底层逻辑，攻克阅读与写作难关。" },
  { icon: GraduationCap, age: "15-18岁", title: "高阶中文与考级辅导", desc: "兼顾语言深造与考级需求。针对 VCE、AP 及 HSK 提供高质量查漏补缺与作文精批，助力冲刺高分。" },
  { icon: Briefcase, age: "18岁+", title: "成人实用与商务中文", desc: "根据真实生活与职业规划量身定制。跳过死板教科书，直接匹配实用场景，让每一次开口都成为加分项。" },
];

const ageOptions = [
  { value: "4-7", label: "4-7岁 · 低龄趣味启蒙" },
  { value: "8-14", label: "8-14岁 · 中小学高效提升" },
  { value: "15-18", label: "15-18岁 · 高阶中文与考级辅导" },
  { value: "18+", label: "18岁+ · 成人实用与商务中文" },
];

const schema = z.object({
  name: z.string().trim().min(1, "请填写姓名").max(100),
  email: z.string().trim().email("请输入有效邮箱").max(255),
  age: z.string().min(1, "请选择年龄段"),
});

function Index() {
  const [form, setForm] = useState({ name: "", email: "", age: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "请检查表单");
      return;
    }
    toast.success("预约成功！我们将尽快与您联系。");
    setForm({ name: "", email: "", age: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="font-display text-lg font-bold text-primary">
          EduFlex <span className="text-accent">Learning</span>
          <span className="ml-2 text-sm font-medium text-muted-foreground">灵动教育</span>
        </div>
        <a href="#contact" className="hidden text-sm font-medium text-primary hover:text-accent sm:block">预约试听</a>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 text-center md:pt-28">
        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-primary">海外华裔青少儿 · 成人中文学习</span>
        <h1 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-6xl">
          量身定制专属方案，<br className="hidden md:block" />
          让孩子<span className="text-accent">自信开口</span>说中文！
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          100% 中国本土严选师资，专注海外华裔青少儿中文教育，兼顾成人专属定制。
        </p>
        <a href="#contact" className="btn-cta mt-10">
          获取免费专属试听 <ArrowRight className="h-5 w-5" />
        </a>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="card-soft">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Message from the Director */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-secondary px-6 py-12 shadow-soft md:px-12 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] md:gap-14">
            {/* 主理人头像占位图：替换为真实照片即可 */}
            <div className="mx-auto w-full max-w-xs">
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center gap-4 rounded-[1.75rem] border border-border bg-card shadow-soft">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <UserRound className="h-10 w-10" />
                </div>
                <p className="text-xs font-medium tracking-wide text-muted-foreground">主理人头像 · 待替换</p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold tracking-widest text-accent">MESSAGE FROM THE DIRECTOR</p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-primary md:text-4xl">
                教育的质量，藏在看不见的细节里。
              </h2>
              <Quote className="mt-6 h-8 w-8 text-accent/40" />
              <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                你好，我是 EduFlex 的主理人。在 EduFlex，“个性化”绝不是空话。每一份量身定制的学习计划，都是我和前线老师反复打磨的成果。您的孩子，由我亲自负责质量把关。
              </p>
              <p className="mt-6 font-display text-sm font-semibold text-primary">— EduFlex 主理人</p>
            </div>
          </div>
        </div>
      </section>

      {/* Paths */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-accent">LEARNING PATHS</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">定制方向</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {paths.map((p) => (
            <div key={p.title} className="card-soft group flex h-full flex-col">
              <div className="flex items-center justify-between">
                <p.icon className="h-7 w-7 text-primary" />
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">{p.age}</span>
              </div>
              <h3 className="mt-6 text-lg font-semibold leading-snug text-primary">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-primary px-6 py-14 shadow-soft md:px-16">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-display text-3xl font-bold text-primary-foreground">预约免费试听</h2>
            <p className="mt-3 text-sm text-primary-foreground/70">留下信息，课程顾问将在 24 小时内联系您。</p>
          </div>
          <form onSubmit={submit} className="mx-auto mt-10 grid max-w-xl gap-4">
            <input className="field" placeholder="姓名" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input className="field" type="email" placeholder="邮箱" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            <select className="field" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })}>
              <option value="">选择年龄段</option>
              {ageOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            <button type="submit" className="btn-cta mt-2 w-full">立即预约</button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-muted-foreground">© 2026 EduFlex Learning 灵动教育</footer>
    </div>
  );
}
