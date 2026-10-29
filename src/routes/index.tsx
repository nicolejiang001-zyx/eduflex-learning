{/* 顶部导航 */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-2 sm:px-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="EduFlex Learning" className="h-20 sm:h-24 w-auto object-contain" />
            <span className="h-8 w-px bg-border" aria-hidden="true" />
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
