import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { copy, type Lang } from "@/lib/content";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  const [lang, setLang] = useState<Lang>("zh");
  const t = copy[lang];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    ageGroup: "",
    location: "",
    chineseLevel: "",
    trialTime: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert(t.toast.name);
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      alert(t.toast.email);
      return;
    }
    if (!formData.ageGroup) {
      alert(t.toast.ageGroup);
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "c0d48625-f857-4ba3-a4a0-f8ba9d35683a",
          subject: `EduFlex 官网新试听预约: ${formData.name} (${formData.ageGroup})`,
          from_name: "EduFlex Learning 官网",
          ...formData,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          ageGroup: "",
          location: "",
          chineseLevel: "",
          trialTime: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(result.message || "提交失败，请重试");
      }
    } catch {
      setStatus("error");
      setErrorMessage("网络连接超时，请重试");
    }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="EduFlex Learning" className="h-[240px] w-auto object-contain" />
            <span className="h-20 w-px bg-border" aria-hidden="true" />
            <span className="font-display text-xl font-bold tracking-wide text-primary">灵动教育</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-accent-foreground shadow-sm transition hover:opacity-90"
            >
              {t.nav.contact}
            </a>
            <button
              onClick={() => setLang((prev) => (prev === "zh" ? "en" : "zh"))}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground transition hover:border-foreground hover:text-foreground"
            >
              {lang === "zh" ? "EN" : "中"}
            </button>
          </div>
        </div>
      </header>

      {/* Hero 区域 */}
      <section className="relative overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <h1 className="font-display text-3xl font-bold tracking-tight text-primary sm:text-5xl">
            {t.hero.titleA}
            <br />
            {t.hero.titleB1}
            <span className="text-accent">{t.hero.titleAccent}</span>
            {t.hero.titleB2}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
            {t.hero.desc}
          </p>
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-accent-foreground shadow-md transition hover:opacity-90"
            >
              {t.hero.cta}
            </a>
          </div>
        </div>
      </section>

      {/* 核心优势 */}
      <section className="border-t border-border bg-card/40 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.map((feature, idx) => (
              <div key={idx} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h3 className="font-display text-base font-bold text-primary">{feature.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 主理人的话 */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-3xl border border-accent/20 bg-accent/5 p-8 text-center sm:p-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">{t.director.eyebrow}</span>
          <h2 className="mt-3 font-display text-2xl font-bold text-primary sm:text-3xl">{t.director.heading}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{t.director.body}</p>
          <div className="mt-6 text-xs font-medium text-primary">{t.director.sign}</div>
        </div>
      </section>

      {/* 定制方向 */}
      <section className="border-t border-border bg-card/40 px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <span className="text-xs font-semibold uppercase tracking-wider text-accent">{t.paths.label}</span>
            <h2 className="mt-2 font-display text-2xl font-bold text-primary sm:text-3xl">{t.paths.heading}</h2>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.paths.list.map((path, idx) => (
              <div key={idx} className="flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div>
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold text-primary">
                    {path.age}
                  </span>
                  <h3 className="mt-3 font-display text-base font-bold text-primary">{path.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{path.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 预约试听表单 */}
      <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-xl rounded-3xl border border-border bg-card p-8 shadow-md sm:p-10">
          <div className="text-center">
            <h2 className="font-display text-2xl font-bold text-primary sm:text-3xl">{t.contact.heading}</h2>
            <p className="mt-2 text-xs text-muted-foreground">{t.contact.hint}</p>
          </div>

          {status === "success" ? (
            <div className="mt-8 rounded-2xl bg-emerald-50 p-6 text-center text-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-300">
              <h3 className="text-base font-bold">预约提交成功！</h3>
              <p className="mt-2 text-xs">我们已收到您的试听申请，课程顾问将在 24 小时内通过邮件与您联系。</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 rounded-full bg-emerald-600 px-5 py-2 text-xs font-semibold text-white transition hover:bg-emerald-700"
              >
                再次提交
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-foreground">{t.contact.fields.name} *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.name}
                    className="mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground">{t.contact.fields.email} *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.email}
                    className="mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-medium text-foreground">{t.contact.fields.ageGroup} *</label>
                  <select
                    name="ageGroup"
                    required
                    value={formData.ageGroup}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm focus:border-accent focus:outline-none"
                  >
                    <option value="">请选择年龄段</option>
                    {t.contact.fields.ageGroupOptions.map((opt, i) => (
                      <option key={i} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground">{t.contact.fields.location}</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder={t.contact.placeholders.location}
                    className="mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground">{t.contact.fields.chineseLevel}</label>
                <input
                  type="text"
                  name="chineseLevel"
                  value={formData.chineseLevel}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.chineseLevel}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground">{t.contact.fields.trialTime}</label>
                <input
                  type="text"
                  name="trialTime"
                  value={formData.trialTime}
                  onChange={handleChange}
                  placeholder={t.contact.placeholders.trialTime}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-3.5 py-2 text-sm focus:border-accent focus:outline-none"
                />
              </div>

              {status === "error" && (
                <div className="rounded-xl bg-destructive/10 p-3 text-xs text-destructive">{errorMessage}</div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full rounded-full bg-accent py-3.5 text-sm font-semibold text-accent-foreground shadow-sm transition hover:opacity-90 disabled:opacity-50"
              >
                {status === "loading" ? "提交中..." : t.contact.submit}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
        {t.footer}
      </footer>
    </div>
  );
}
