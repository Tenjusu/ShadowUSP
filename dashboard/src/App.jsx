import { useMemo, useState } from "react";
import Header from "./components/Header";
import TradeCard from "./components/TradeCard";
import localSenateTrades from "./senate_trades.json";

const TRUMP_NAMES = [
  "Vance",
  "Rubio",
  "Tuberville",
  "Johnson",
  "Greene",
  "Boebert",
  "Crenshaw",
  "Jordan",
  "Cruz",
  "Paul",
  "Gaetz",
  "Scott",
  "Nunes",
  "Collins",
  "Hagerty",
  "Lankford",
  "Hawley",
  "Cotton",
  "Blackburn",
  "Lummis",
  "Mullin",
  "Moran",
  "Hyde-Smith",
  "Capito",
  "Sullivan",
];

export default function App() {
  const [trades] = useState(localSenateTrades || []);
  const [filterMode, setFilterMode] = useState("all");

  const filteredTrades = useMemo(() => {
    if (filterMode === "trump") {
      return trades.filter((trade) =>
        TRUMP_NAMES.some((name) =>
          (trade.politician || "").toLowerCase().includes(name.toLowerCase()),
        ),
      );
    }

    return trades;
  }, [filterMode, trades]);

  return (
    <div className="min-h-screen bg-black font-sans text-white antialiased">
      <Header filterMode={filterMode} onFilterModeChange={setFilterMode} />

      <main className="mx-auto max-w-[900px] px-6 py-8">
        <div className="mb-6 rounded-xl border border-[#0a84ff]/30 bg-[#0a84ff]/10 px-[18px] py-3.5 text-sm text-[#0a84ff]">
          Connected to local Python scraper. Showing {filteredTrades.length}{" "}
          recent filings.
        </div>

        <div className="flex flex-col gap-3">
          {filteredTrades.map((trade, index) => (
            <TradeCard key={`${trade.report_url}-${index}`} trade={trade} />
          ))}
        </div>
      </main>
    </div>
  );
}
