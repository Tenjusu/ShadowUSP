const filterOptions = [
  { label: "All Congress", value: "all" },
  { label: "Trump Allies", value: "trump", accent: true },
];

export default function Header({ filterMode, onFilterModeChange }) {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-black/80 px-6 pb-5 pt-6 backdrop-blur-xl">
      <div className="mx-auto max-w-[900px]">
        <h1 className="m-0 text-2xl font-bold text-white">ShadowTrade</h1>

        <nav
          aria-label="Trade filters"
          className="mt-5 flex flex-wrap items-center gap-3"
        >
          {filterOptions.map((option) => {
            const isActive = filterMode === option.value;
            const activeClass = option.accent
              ? "border-[#30d158]/30 bg-[#30d158]/15 text-[#30d158]"
              : "border-[#2c2c2e] bg-[#2c2c2e] text-white";

            return (
              <button
                key={option.value}
                type="button"
                onClick={() => onFilterModeChange(option.value)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? activeClass
                    : "border-[#38383a] bg-transparent text-white hover:border-white/40"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
