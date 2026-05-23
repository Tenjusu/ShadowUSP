const today = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
  year: "numeric",
}).format(new Date());

export default function Header({
  isDark,
  theme,
  onThemeChange,
  selectedPolitician,
  onBack,
}) {
  return (
    <header className="px-4 pt-6 sm:px-7 lg:px-10">
      <div className="mx-auto flex max-w-7xl items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {selectedPolitician && (
            <button
              type="button"
              onClick={onBack}
              aria-label="Back to dashboard"
              className={`mt-1 flex h-12 w-12 items-center justify-center rounded-full text-2xl font-black transition hover:-translate-x-1 ${
                isDark ? "bg-white text-black" : "bg-black text-white"
              }`}
            >
              <span aria-hidden="true">&lt;</span>
            </button>
          )}

          <div>
            <p className="text-4xl font-black leading-none tracking-tight text-emerald-400 sm:text-5xl">
              ShadowUSP
            </p>
            <p
              className={`mt-4 text-lg font-black leading-none ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              Todays date:
            </p>
            <p
              className={`mt-2 text-sm font-bold ${
                isDark ? "text-zinc-400" : "text-zinc-500"
              }`}
            >
              {today}
            </p>
          </div>
        </div>

        <div
          className={`flex items-center rounded-full p-1 ${
            isDark ? "bg-white/10" : "bg-black/10"
          }`}
        >
          {["light", "dark"].map((mode) => {
            const active = theme === mode;

            return (
              <button
                key={mode}
                type="button"
                onClick={() => onThemeChange(mode)}
                className={`rounded-full px-5 py-3 text-sm font-black capitalize transition ${
                  active
                    ? "bg-emerald-400 text-black"
                    : isDark
                      ? "text-white"
                      : "text-black"
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
