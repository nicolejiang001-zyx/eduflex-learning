import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast, Toaster } from "sonner";
import { ShieldCheck, Globe2, ShoppingBag, Sparkles, BookOpen, GraduationCap, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EduFlex Learning 灵动教育 | 量身定制中文学习方案" },
      { name: "description", content: "100% 中国本土严选师资，服务海外华裔家庭与成人。获取免费专属试听。" },
      { property: "og:title", content: "EduFlex Learning 灵动教育" },
      { property: "og:description", content: "量身定制学习方案，双母语不是奢望！" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const features = [
  { icon: ShieldCheck, title: "100% 满意承诺", desc: "课程不满意，无忧退换，让每一分投入都安心。" },
  { icon: Globe2, title: "全球经验 本土严选", desc: "国内名校背景教师，深谙海外学习者的需求。" },
  { icon: ShoppingBag, title: "按需购课 零捆绑", desc: "灵活选择课时，不强制套餐，学习节奏由你决定。" },
];

const paths = [
  { icon: Sparkles, title: "低龄趣味启蒙", age: "4-7岁", desc: "儿歌、绘本与游戏，在快乐中自然开口。" },
  { icon: BookOpen, title: "中小学高效提升", age: "8-14岁", desc: "识字阅读与写作系统进阶，学业语言双提升。" },
  { icon: GraduationCap, title: "VCE 与成人实用定制", age: "15岁+", desc: "VCE 应试冲刺，或职场、生活中文按需定制。" },
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
        <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-primary">海外华裔家庭 · 成人中文学习</span>
        <h1 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-6xl">
          量身定制学习方案，<br className="hidden md:block" />
          <span className="text-accent">双母语</span>不是奢望！
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
          100% 中国本土严选师资，服务海外华裔家庭与成人。
        </p>
        <a href="#contact" className="btn-cta mt-10">
          获取免费专属试听 <ArrowRight className="h-5 w-5" />
        </a>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
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

      {/* Paths */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="text-center">
          <p className="text-sm font-semibold tracking-widest text-accent">LEARNING PATHS</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">定制方向</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paths.map((p) => (
            <div key={p.title} className="card-soft group">
              <div className="flex items-center justify-between">
                <p.icon className="h-7 w-7 text-primary" />
                <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">{p.age}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-primary">{p.title}</h3>
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
              <option value="4-7">4-7岁 · 低龄趣味启蒙</option>
              <option value="8-14">8-14岁 · 中小学高效提升</option>
              <option value="15+">15岁+ · VCE 与成人实用定制</option>
            </select>
            <button type="submit" className="btn-cta mt-2 w-full">立即预约</button>
          </form>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-muted-foreground">© 2026 EduFlex Learning 灵动教育</footer>
    </div>
  );
}
