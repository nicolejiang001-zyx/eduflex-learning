import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
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
} from "lucide-react";
import { cn } from "@/lib/utils";
import { copy, type Lang } from "@/lib/content";

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

const featureIcons = [ShieldCheck, Globe2, ShoppingBag, BookMarked];
const pathIcons = [Sparkles, BookOpen, GraduationCap, Briefcase];

export function Index() {
  const [lang, setLang] = useState<Lang>("zh");
  const [form, setForm] = useState({
    course: "",
    name: "",
    email: "",
    age: "",
    gender: "",
    location: "",
    chineseComm: "",
    pinyin: "",
    proficiency: "",
    teacherType: "",
    hobbies: "",
    trialTime: "",
  });
  const c = copy[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  }, [lang]);

  const setField = (key: keyof typeof form, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const schema = z.object({
      name: z.string().trim().min(1, c.toast.name).max(100),
      email: z.string().trim().email(c.toast.email).max(255),
      age: z
        .union([z.string().trim().min(1, c.toast.age), z.number().min(1, c.toast.age)])
        .transform((v) => String(v)),
    });
    const r = schema.safeParse({ name: form.name, email: form.email, age: form.age });
    if (!r.success) {
      toast.error(r.error.issues[0]?.message ?? "请检查表单");
      return;
    }

    setSubmitting(true);
    try {
      const payload = {
        access_key: "e6f1d746-e786-4f5a-a458-c35798baa23f",
        subject: "EduFlex 官网新试听预约",
        课程: form.course || c.contact.fields.courseValue,
        姓名: form.name,
        邮箱: form.email,
        年龄: form.age,
        性别: form.gender,
        所在国家与城市: form.location,
        是否能够中文交流: form.chineseComm,
        是否会拼音: form.pinyin,
        中文程度: form.proficiency,
        喜欢的老师类型: form.teacherType,
        孩子的兴趣爱好: form.hobbies,
        方便试课的时间范围: form.trialTime,
      };
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        toast.success("预约已提交，我们将在24小时内联系您");
        setForm({
          course: "",
          name: "",
          email: "",
          age: "",
          gender: "",
          location: "",
          chineseComm: "",
          pinyin: "",
          proficiency: "",
          teacherType: "",
          hobbies: "",
          trialTime: "",
        });
      } else {
        toast.error("提交失败，请稍后重试");
      }
    } catch {
      toast.error("网络异常，请稍后重试");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Toaster position="top-center" />
      <div key={lang} className="fade-swap">
        {/* Navbar */}
        <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-4 px-6 py-6">
          <div className="font-display text-lg font-bold text-primary">
            EduFlex <span className="text-accent">Learning</span>
            <span className="ml-2 text-sm font-medium text-muted-foreground">灵动教育</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="transition-colors hover:text-accent">{c.nav.features}</a>
            <a href="#director" className="transition-colors hover:text-accent">{c.nav.director}</a>
            <a href="#paths" className="transition-colors hover:text-accent">{c.nav.paths}</a>
          </nav>

          <div className="flex w-full items-center justify-end gap-4 md:w-auto">
            <a href="#contact" className="text-sm font-medium text-primary transition-colors hover:text-accent">
              {c.nav.contact}
            </a>
            <div role="group" aria-label="Language / 语言" className="flex items-center rounded-full border border-border bg-card p-1 shadow-soft">
              {(["zh", "en"] as Lang[]).map((l) => (
                <button
                  key={l}
                  type="button"
                  aria-pressed={lang === l}
                  onClick={() => setLang(l)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors",
                    lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-accent",
                  )}
                >
                  {l === "zh" ? "中" : "EN"}
                </button>
              ))}
            </div>
          </div>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pb-24 pt-16 text-center md:pt-28">
          <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-medium text-primary">{c.hero.badge}</span>
          <h1 className="mx-auto mt-8 max-w-3xl font-display text-4xl font-bold leading-tight text-primary md:text-6xl">
            {c.hero.titleA}
            <br className="hidden md:block" />
            {c.hero.titleB1}
            <span className="text-accent">{c.hero.titleAccent}</span>
            {c.hero.titleB2}
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg">{c.hero.desc}</p>
          <a href="#contact" className="btn-cta mt-10">
            {c.hero.cta} <ArrowRight className="h-5 w-5" />
          </a>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            {c.features.map((f, i) => {
              const Icon = featureIcons[i] ?? ShieldCheck;
              return (
                <div key={f.title} className="card-soft">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-primary">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Message from the Director */}
        <section id="director" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <figure className="rounded-[2rem] bg-secondary px-6 py-12 shadow-soft md:px-12 md:py-16">
            <div className="grid gap-6 md:grid-cols-[minmax(0,0.38fr)_minmax(0,1.62fr)] md:items-stretch md:gap-12">
              <div className="flex h-full flex-col items-center justify-center gap-2">
                <span aria-hidden="true" className="font-display text-[5.5rem] font-extrabold leading-[0.6] text-accent md:text-[10rem]">
                  {"\u201C"}
                </span>
                <span
                  className={cn(
                    "hidden font-display text-sm font-semibold tracking-[0.35em] text-primary/70 [writing-mode:vertical-rl] md:block",
                    lang === "zh" && "[text-orientation:upright]",
                  )}
                >
                  {c.director.vertical}
                </span>
              </div>

              <blockquote className="md:border-l md:border-border md:pl-12">
                <p className="text-sm font-semibold tracking-widest text-accent">{c.director.eyebrow}</p>
                <h2 className="mt-3 font-display text-2xl font-bold leading-snug text-primary md:text-4xl">
                  {c.director.heading}
                </h2>
                <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{c.director.body}</p>
                <figcaption className="mt-8 flex items-center gap-3">
                  <span aria-hidden="true" className="h-px w-10 bg-accent" />
                  <span className="font-display text-sm font-semibold text-primary">{c.director.sign}</span>
                </figcaption>
              </blockquote>
            </div>
          </figure>
        </section>

        {/* Learning Paths */}
        <section id="paths" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <div className="text-center">
            <p className="text-sm font-semibold tracking-widest text-accent">{c.paths.label}</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-primary md:text-4xl">{c.paths.heading}</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {c.paths.list.map((p, i) => {
              const Icon = pathIcons[i] ?? Sparkles;
              return (
                <div key={p.title} className="card-soft flex h-full flex-col">
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-primary" />
                    <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">{p.age}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold leading-snug text-primary">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
          <div className="rounded-[2rem] bg-primary px-6 py-14 shadow-soft md:px-16">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="font-display text-3xl font-bold text-primary-foreground">{c.contact.heading}</h2>
              <p className="mt-3 text-sm text-primary-foreground/70">{c.contact.hint}</p>
            </div>
            <form onSubmit={submit} className="mx-auto mt-10 grid max-w-2xl gap-4 md:grid-cols-2">
              {/* 课程（只读默认中文） */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.course}</span>
                <input className="field opacity-70" readOnly value={form.course || c.contact.fields.courseValue} onChange={(e) => setField("course", e.target.value)} />
              </label>
              {/* 姓名 */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.name}</span>
                <input className="field" placeholder={c.contact.placeholders.name} maxLength={100} value={form.name} onChange={(e) => setField("name", e.target.value)} />
              </label>
              {/* 邮箱 */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.email}</span>
                <input className="field" type="email" placeholder={c.contact.placeholders.email} maxLength={255} value={form.email} onChange={(e) => setField("email", e.target.value)} />
              </label>
              {/* 年龄 */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.age}</span>
                <input className="field" type="number" min={0} max={120} placeholder={c.contact.placeholders.age} value={form.age} onChange={(e) => setField("age", e.target.value)} />
              </label>
              {/* 性别 */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.gender}</span>
                <select className="field" value={form.gender} onChange={(e) => setField("gender", e.target.value)}>
                  <option value="">—</option>
                  {c.contact.fields.genderOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </label>
              {/* 所在国家与城市 */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.location}</span>
                <input className="field" placeholder={c.contact.placeholders.location} maxLength={120} value={form.location} onChange={(e) => setField("location", e.target.value)} />
              </label>
              {/* 是否能够中文交流 */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.chineseComm}</span>
                <select className="field" value={form.chineseComm} onChange={(e) => setField("chineseComm", e.target.value)}>
                  <option value="">—</option>
                  {c.contact.fields.chineseCommOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </label>
              {/* 是否会拼音 */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.pinyin}</span>
                <select className="field" value={form.pinyin} onChange={(e) => setField("pinyin", e.target.value)}>
                  <option value="">—</option>
                  {c.contact.fields.pinyinOptions.map((o) => (
                    <option key={o} value={o}>{o}</option>
                  ))}
                </select>
              </label>
              {/* 中文程度 */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.proficiency}</span>
                <input className="field" placeholder={c.contact.placeholders.proficiency} maxLength={200} value={form.proficiency} onChange={(e) => setField("proficiency", e.target.value)} />
              </label>
              {/* 喜欢的老师类型 */}
              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.teacherType}</span>
                <input className="field" placeholder={c.contact.placeholders.teacherType} maxLength={200} value={form.teacherType} onChange={(e) => setField("teacherType", e.target.value)} />
              </label>
              {/* 孩子的兴趣爱好（整行） */}
              <label className="flex flex-col gap-1.5 md:col-span-2">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.hobbies}</span>
                <textarea className="field min-h-[64px] resize-y" placeholder={c.contact.placeholders.hobbies} maxLength={500} value={form.hobbies} onChange={(e) => setField("hobbies", e.target.value)} />
              </label>
              {/* 方便试课的时间范围（整行） */}
              <label className="flex flex-col gap-1.5 md:col-span-2">
                <span className="text-xs font-semibold text-primary-foreground/80">{c.contact.fields.trialTime}</span>
                <textarea className="field min-h-[64px] resize-y" placeholder={c.contact.placeholders.trialTime} maxLength={500} value={form.trialTime} onChange={(e) => setField("trialTime", e.target.value)} />
              </label>
              <button type="submit" disabled={submitting} className="btn-cta mt-2 w-full md:col-span-2 disabled:opacity-60">
                {submitting ? "…" : c.contact.submit}
              </button>
            </form>
          </div>
        </section>

        <footer className="py-10 text-center text-xs text-muted-foreground">{c.footer}</footer>
      </div>
    </div>
  );
}
