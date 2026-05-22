import { useMemo, useState } from "react";
import Header from "./components/Header";
import PoliticianCard from "./components/PoliticianCard";
import PortfolioDetail from "./components/PortfolioDetail";
import politicians from "./portfolioData.json";

export default function App() {
  const [selectedPoliticianId, setSelectedPoliticianId] = useState(null);
  const [theme, setTheme] = useState("dark");

  const selectedPolitician = useMemo(
    () =>
      politicians.find((politician) => politician.id === selectedPoliticianId) ??
      null,
    [selectedPoliticianId],
  );

  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen font-sans antialiased transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-[#f5f7fa] text-[#111827]"
      }`}
    >
      <Header
        isDark={isDark}
        theme={theme}
        onThemeChange={setTheme}
        selectedPolitician={selectedPolitician}
        onBack={() => setSelectedPoliticianId(null)}
      />

      <main className="mx-auto w-full max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
        {selectedPolitician ? (
          <PortfolioDetail politician={selectedPolitician} isDark={isDark} />
        ) : (
          <section>
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p
                  className={`text-sm font-semibold uppercase tracking-[0.18em] ${
                    isDark ? "text-emerald-300" : "text-emerald-600"
                  }`}
                >
                  Portfolio intelligence
                </p>
                <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Political portfolios
                </h1>
              </div>
              <p
                className={`max-w-2xl text-sm leading-6 ${
                  isDark ? "text-zinc-400" : "text-slate-500"
                }`}
              >
                Tap a profile to inspect performance, risk, holdings, and
                recent trading activity without leaving the dashboard.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {politicians.map((politician) => (
                <PoliticianCard
                  key={politician.id}
                  politician={politician}
                  isDark={isDark}
                  onClick={() => setSelectedPoliticianId(politician.id)}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
