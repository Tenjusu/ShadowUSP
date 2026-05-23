export default function FilterRow({
  filters,
  activeFilter,
  onFilterChange,
  isDark,
}) {
  return (
    <div
      className="no-scrollbar flex touch-pan-x gap-3 overflow-x-auto scroll-smooth pb-1"
      aria-label="Portfolio filters"
      role="tablist"
    >
      {filters.map((filter) => {
        const active = activeFilter === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onFilterChange(filter.value)}
            className={`shrink-0 rounded-full px-7 py-4 text-lg font-black transition ${
              active
                ? "bg-emerald-400 text-black shadow-xl shadow-emerald-500/20"
                : isDark
                  ? "bg-white/10 text-white hover:bg-white/15"
                  : "bg-black/10 text-black hover:bg-black/15"
            }`}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
