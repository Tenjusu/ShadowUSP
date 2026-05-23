import { useMemo, useState } from "react";
import CardStack from "./components/CardStack";
import FilterRow from "./components/FilterRow";
import Header from "./components/Header";
import MarketOverview from "./components/MarketOverview";
import PortfolioDetail from "./components/PortfolioDetail";
import politicians from "./senate_trades.json";

const filters = [
  { label: "All", value: "all" },
  { label: "Senate", value: "senate" },
  { label: "House", value: "house" },
  { label: "Democrat", value: "democrat" },
  { label: "Republican", value: "republican" },
  { label: "Tech Giants", value: "tech" },
];

export default function App() {
  const [selectedPoliticianId, setSelectedPoliticianId] = useState(null);
  const [theme, setTheme] = useState("dark");
  const [activeFilter, setActiveFilter] = useState("all");

  const isDark = theme === "dark";

  const filteredPoliticians = useMemo(() => {
    if (activeFilter === "all") return politicians;

    return politicians.filter((politician) => {
      const party = politician.party.toLowerCase();
      const chamber = politician.chamber.toLowerCase();
      const tags = politician.tags.map((tag) => tag.toLowerCase());

      return (
        party === activeFilter ||
        chamber === activeFilter ||
        tags.includes(activeFilter)
      );
    });
  }, [activeFilter]);

  const selectedPolitician = useMemo(
    () =>
      politicians.find((politician) => politician.id === selectedPoliticianId) ??
      null,
    [selectedPoliticianId],
  );

  return (
    <div
      className={`min-h-screen overflow-hidden font-sans antialiased transition-colors duration-300 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <Header
        isDark={isDark}
        theme={theme}
        onThemeChange={setTheme}
        selectedPolitician={selectedPolitician}
        onBack={() => setSelectedPoliticianId(null)}
      />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-12 pt-4 sm:px-7 lg:px-10">
        {selectedPolitician ? (
          <PortfolioDetail politician={selectedPolitician} isDark={isDark} />
        ) : (
          <>
            <MarketOverview isDark={isDark} />
            <FilterRow
              filters={filters}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
              isDark={isDark}
            />

            <section className="space-y-5">
              <div className="flex flex-col gap-2">
                <p className="text-base font-black uppercase tracking-[0.2em] text-emerald-500">
                  Political portfolios
                </p>
                <h1 className="max-w-4xl text-5xl font-black leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl">
                  Swipe the money.
                </h1>
              </div>

              <CardStack
                politicians={filteredPoliticians}
                isDark={isDark}
                onSelect={setSelectedPoliticianId}
              />
            </section>
          </>
        )}
      </main>
    </div>
  );
}
