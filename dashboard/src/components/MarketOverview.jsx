const markets = [
  { label: "S&P 500", value: "5,426", change: "+0.74%" },
  { label: "DOW", value: "39,812", change: "+0.31%" },
  { label: "Nasdaq", value: "18,620", change: "+1.18%" },
];

export default function MarketOverview({ isDark }) {
  return (
    <section
      className={`rounded-[2rem] p-7 sm:p-10 ${
        isDark ? "bg-[#111]" : "bg-[#f4f4f4]"
      }`}
    >
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-base font-black uppercase tracking-[0.2em] text-emerald-500">
            US Markets
          </p>
          <h2 className="mt-3 max-w-3xl text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl">
            Market pulse goes here.
          </h2>
        </div>

        <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[460px]">
          {markets.map((market) => (
            <div
              key={market.label}
              className={`rounded-3xl p-5 ${
                isDark ? "bg-black" : "bg-white"
              }`}
            >
              <p className="text-sm font-black uppercase text-zinc-500">
                {market.label}
              </p>
              <p className="mt-4 text-3xl font-black">{market.value}</p>
              <p className="mt-2 text-lg font-black text-emerald-500">
                {market.change}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
