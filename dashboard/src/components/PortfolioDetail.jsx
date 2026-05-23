import { useState } from "react";

const timeframes = ["1D", "1W", "1M", "YTD", "All-Time"];

export default function PortfolioDetail({ politician, isDark }) {
  const [timeframe, setTimeframe] = useState("YTD");

  const panel = isDark ? "bg-[#111]" : "bg-[#f4f4f4]";
  const nested = isDark ? "bg-black" : "bg-white";

  return (
    <section className="animate-[fadeIn_240ms_ease-out] space-y-6">
      <div className={`rounded-[2.5rem] p-7 sm:p-10 ${panel}`}>
        <p className="text-base font-black uppercase tracking-[0.2em] text-emerald-500">
          Detailed portfolio
        </p>
        <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <h1 className="max-w-4xl text-6xl font-black leading-[0.9] tracking-tight sm:text-8xl">
              {politician.name}
            </h1>
            <p className="mt-5 text-2xl font-black text-zinc-500">
              {politician.chamber} / {politician.party} / {politician.state}
            </p>
          </div>

          <div className={`rounded-[2rem] p-6 ${nested}`}>
            <p className="text-lg font-black text-zinc-500">
              {timeframe} Performance
            </p>
            <p className="mt-3 text-6xl font-black text-emerald-500">
              {politician.performance[timeframe]}
            </p>
            <p className="mt-4 text-xl font-black">
              {politician.totalValue} estimated value
            </p>
          </div>
        </div>

        <div className="no-scrollbar mt-8 flex gap-3 overflow-x-auto">
          {timeframes.map((item) => {
            const active = timeframe === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setTimeframe(item)}
                className={`shrink-0 rounded-full px-7 py-4 text-lg font-black transition ${
                  active
                    ? "bg-emerald-400 text-black"
                    : isDark
                      ? "bg-white/10 text-white"
                      : "bg-black/10 text-black"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Object.entries(politician.metrics).map(([label, value]) => (
          <div key={label} className={`rounded-[2rem] p-6 ${panel}`}>
            <p className="text-lg font-black text-zinc-500">{label}</p>
            <p className="mt-5 text-5xl font-black tracking-tight">{value}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className={`rounded-[2.5rem] p-6 sm:p-8 ${panel}`}>
          <h2 className="text-4xl font-black tracking-tight">
            Current holdings
          </h2>
          <div className="mt-6 space-y-3">
            {politician.holdings.map((holding) => (
              <div
                key={holding.ticker}
                className={`grid grid-cols-[1fr_auto] items-center gap-4 rounded-[1.5rem] p-5 ${nested}`}
              >
                <div>
                  <p className="text-3xl font-black">{holding.ticker}</p>
                  <p className="mt-1 text-lg font-black text-zinc-500">
                    {holding.amount}
                  </p>
                </div>
                <p className="text-2xl font-black text-emerald-500">
                  {holding.weight}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className={`rounded-[2.5rem] p-6 sm:p-8 ${panel}`}>
          <h2 className="text-4xl font-black tracking-tight">Recent trades</h2>
          <div className="mt-6 space-y-3">
            {politician.recentTrades.map((trade) => (
              <div
                key={`${trade.date}-${trade.ticker}-${trade.action}`}
                className={`grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-[1.5rem] p-5 ${nested}`}
              >
                <span
                  className={`rounded-full px-4 py-2 text-sm font-black ${
                    trade.action === "Buy"
                      ? "bg-emerald-400 text-black"
                      : "bg-rose-500 text-white"
                  }`}
                >
                  {trade.action}
                </span>
                <div>
                  <p className="text-3xl font-black">{trade.ticker}</p>
                  <p className="mt-1 text-lg font-black text-zinc-500">
                    {trade.date}
                  </p>
                </div>
                <p className="text-right text-lg font-black">{trade.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
