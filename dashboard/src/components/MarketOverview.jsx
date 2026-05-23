import { useState } from "react";
import AreaChart from "./AreaChart";

const timeframes = ["Live", "1D", "1W", "1M", "YTD", "All-Time"];

const markets = [
  {
    label: "S&P 500",
    change: "+0.74%",
    color: "#34d399",
    series: {
      Live: [32, 34, 33, 36, 39, 38, 42, 45, 44, 47, 50, 52],
      "1D": [30, 31, 29, 33, 35, 36, 38, 37, 41, 43, 46, 47],
      "1W": [24, 27, 29, 31, 30, 34, 38, 41, 43, 46, 49, 53],
      "1M": [18, 22, 21, 25, 29, 31, 34, 36, 40, 42, 47, 51],
      YTD: [12, 16, 18, 22, 25, 23, 29, 34, 38, 43, 48, 55],
      "All-Time": [4, 7, 11, 16, 19, 26, 31, 37, 42, 48, 56, 64],
    },
  },
  {
    label: "DOW",
    change: "+0.31%",
    color: "#22c55e",
    series: {
      Live: [28, 27, 29, 31, 33, 32, 34, 36, 35, 37, 38, 40],
      "1D": [25, 26, 25, 27, 29, 31, 30, 32, 34, 33, 36, 38],
      "1W": [22, 24, 26, 25, 28, 30, 29, 33, 35, 37, 36, 39],
      "1M": [16, 17, 21, 23, 22, 26, 27, 31, 34, 35, 37, 41],
      YTD: [10, 14, 15, 18, 20, 24, 25, 29, 31, 35, 39, 43],
      "All-Time": [8, 10, 13, 17, 22, 25, 30, 34, 39, 43, 49, 58],
    },
  },
  {
    label: "Nasdaq",
    change: "+1.18%",
    color: "#6ee7b7",
    series: {
      Live: [36, 38, 37, 42, 45, 44, 49, 54, 52, 58, 61, 66],
      "1D": [31, 34, 32, 36, 39, 41, 44, 43, 49, 53, 56, 60],
      "1W": [26, 29, 33, 35, 39, 38, 44, 49, 53, 58, 62, 67],
      "1M": [20, 24, 27, 31, 36, 34, 41, 47, 52, 56, 64, 70],
      YTD: [14, 19, 24, 28, 35, 39, 44, 51, 57, 63, 71, 78],
      "All-Time": [5, 9, 15, 21, 29, 38, 46, 55, 63, 72, 84, 96],
    },
  },
];

export default function MarketOverview({ isDark }) {
  const [timeframe, setTimeframe] = useState("1D");

  return (
    <section
      className={`rounded-[2rem] p-6 sm:p-9 ${
        isDark ? "bg-[#111]" : "bg-[#f4f4f4]"
      }`}
    >
      <div className="flex flex-col gap-6">
        <div>
          <p className="text-base font-black uppercase tracking-[0.2em] text-emerald-500">
            US Markets
          </p>
          <h2 className="mt-3 max-w-3xl text-4xl font-black leading-[0.92] tracking-tight sm:text-6xl">
            Live market tracking.
          </h2>
        </div>

        <div className="no-scrollbar flex gap-2 overflow-x-auto">
          {timeframes.map((item) => {
            const active = timeframe === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() => setTimeframe(item)}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-black transition ${
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

        <div className="grid gap-4 lg:grid-cols-3">
          {markets.map((market) => (
            <div
              key={market.label}
              className={`overflow-hidden rounded-[2rem] p-5 ${
                isDark ? "bg-black" : "bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-2xl font-black">{market.label}</p>
                <p className="rounded-full bg-emerald-400 px-4 py-2 text-sm font-black text-black">
                  {market.change}
                </p>
              </div>
              <div className="mt-5">
                <AreaChart
                  id={`market-${market.label}-${timeframe}`}
                  points={market.series[timeframe]}
                  stroke={market.color}
                  heightClass="h-[180px]"
                  muted={market.label === "DOW"}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
