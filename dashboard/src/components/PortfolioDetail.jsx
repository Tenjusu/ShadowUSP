import { useState } from "react";

const timeframes = ["1D", "1W", "1M", "YTD", "All-Time"];

export default function PortfolioDetail({ politician, isDark }) {
  const [timeframe, setTimeframe] = useState("YTD");

  const panelClass = isDark
    ? "border-white/10 bg-white/[0.06] shadow-black/30"
    : "border-white/80 bg-white/85 shadow-slate-200/80";

  return (
    <section className="animate-[fadeIn_240ms_ease-out]">
      <div
        className={`relative overflow-hidden rounded-[32px] border p-5 shadow-2xl backdrop-blur-2xl sm:p-7 ${panelClass}`}
      >
        <div className="absolute right-0 top-0 h-48 w-48 rounded-bl-full bg-emerald-400/15" />

        <div className="relative z-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p
              className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                isDark ? "text-emerald-300" : "text-emerald-600"
              }`}
            >
              Detailed portfolio
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight">
              {politician.name}
            </h1>
            <p
              className={`mt-2 text-sm ${
                isDark ? "text-zinc-400" : "text-slate-500"
              }`}
            >
              {politician.position} · {politician.state} · {politician.party}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {timeframes.map((item) => {
                const active = timeframe === item;

                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setTimeframe(item)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      active
                        ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                        : isDark
                          ? "bg-white/5 text-zinc-300 hover:bg-white/10"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            className={`rounded-[26px] border p-5 ${
              isDark
                ? "border-emerald-400/20 bg-emerald-400/10"
                : "border-emerald-200 bg-emerald-50"
            }`}
          >
            <p
              className={`text-sm font-semibold ${
                isDark ? "text-emerald-200" : "text-emerald-700"
              }`}
            >
              {timeframe} performance
            </p>
            <p className="mt-3 text-5xl font-semibold tracking-tight text-emerald-400">
              {politician.performance[timeframe]}
            </p>
            <p
              className={`mt-3 text-sm leading-6 ${
                isDark ? "text-zinc-300" : "text-slate-600"
              }`}
            >
              Estimated portfolio value: <span className="font-semibold">{politician.totalValue}</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {Object.entries(politician.metrics).map(([label, value]) => (
          <div
            key={label}
            className={`rounded-[24px] border p-5 shadow-xl backdrop-blur-xl ${panelClass}`}
          >
            <p
              className={`text-sm font-medium ${
                isDark ? "text-zinc-400" : "text-slate-500"
              }`}
            >
              {label}
            </p>
            <p className="mt-3 text-3xl font-semibold tracking-tight">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className={`rounded-[28px] border p-5 shadow-xl ${panelClass}`}>
          <h2 className="text-xl font-semibold">Current holdings</h2>
          <div className="mt-4 overflow-hidden rounded-2xl">
            <table className="w-full text-left text-sm">
              <thead className={isDark ? "text-zinc-400" : "text-slate-500"}>
                <tr>
                  <th className="pb-3 font-semibold">Ticker</th>
                  <th className="pb-3 font-semibold">Amount</th>
                  <th className="pb-3 text-right font-semibold">Weight</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-500/10">
                {politician.holdings.map((holding) => (
                  <tr key={holding.ticker}>
                    <td className="py-3 font-semibold">{holding.ticker}</td>
                    <td className={`py-3 ${isDark ? "text-zinc-300" : "text-slate-600"}`}>
                      {holding.amount}
                    </td>
                    <td className="py-3 text-right font-semibold text-emerald-400">
                      {holding.weight}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className={`rounded-[28px] border p-5 shadow-xl ${panelClass}`}>
          <h2 className="text-xl font-semibold">Recent trades</h2>
          <div className="mt-4 space-y-3">
            {politician.recentTrades.map((trade) => (
              <div
                key={`${trade.date}-${trade.ticker}-${trade.action}`}
                className={`flex items-center justify-between gap-4 rounded-2xl border p-4 ${
                  isDark
                    ? "border-white/10 bg-black/20"
                    : "border-slate-200 bg-white/70"
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                        trade.action === "Buy"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-rose-500/15 text-rose-400"
                      }`}
                    >
                      {trade.action}
                    </span>
                    <span className="font-semibold">{trade.ticker}</span>
                  </div>
                  <p className={`mt-1 text-sm ${isDark ? "text-zinc-400" : "text-slate-500"}`}>
                    {trade.date}
                  </p>
                </div>
                <p className="text-right text-sm font-semibold">{trade.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
