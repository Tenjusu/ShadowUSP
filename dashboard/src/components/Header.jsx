export default function Header({
  isDark,
  theme,
  onThemeChange,
  selectedPolitician,
  onBack,
}) {
  return (
    <header
      className={`sticky top-0 z-20 border-b px-4 py-4 backdrop-blur-2xl transition-colors sm:px-6 lg:px-8 ${
        isDark
          ? "border-white/10 bg-black/70"
          : "border-white/70 bg-white/75 shadow-sm shadow-slate-200/60"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {selectedPolitician && (
            <button
              type="button"
              onClick={onBack}
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-xl transition hover:-translate-x-0.5 ${
                isDark
                  ? "border-white/10 bg-white/5 text-white hover:bg-white/10"
                  : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
              }`}
              aria-label="Back to dashboard"
            >
              <span aria-hidden="true">←</span>
            </button>
          )}

          <div>
            <p
              className={`text-xs font-semibold uppercase tracking-[0.2em] ${
                isDark ? "text-emerald-300" : "text-emerald-600"
              }`}
            >
              ShadowUSP
            </p>
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              {selectedPolitician?.name ?? "ShadowTrade"}
            </h2>
          </div>
        </div>

        <div
          className={`flex items-center rounded-full border p-1 ${
            isDark
              ? "border-white/10 bg-white/5"
              : "border-slate-200 bg-slate-100"
          }`}
        >
          {["light", "dark"].map((mode) => {
            const isActive = theme === mode;

            return (
              <button
                key={mode}
                type="button"
                onClick={() => onThemeChange(mode)}
                className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition ${
                  isActive
                    ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                    : isDark
                      ? "text-zinc-400 hover:text-white"
                      : "text-slate-500 hover:text-slate-950"
                }`}
              >
                {mode}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
