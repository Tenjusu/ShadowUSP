const partyDots = {
  Republican: "bg-red-500",
  Democrat: "bg-blue-500",
  Independent: "bg-violet-500",
};

const textures = [
  "from-emerald-300 via-cyan-500 to-blue-700",
  "from-pink-400 via-rose-500 to-orange-400",
  "from-violet-500 via-indigo-500 to-sky-400",
  "from-lime-300 via-emerald-500 to-teal-700",
  "from-amber-300 via-fuchsia-500 to-purple-700",
  "from-slate-700 via-zinc-900 to-black",
  "from-blue-300 via-sky-500 to-emerald-400",
  "from-red-400 via-orange-500 to-yellow-300",
];

export default function PoliticianCard({ politician, isDark, onSelect }) {
  const dot = partyDots[politician.party] ?? "bg-zinc-400";
  const texture = textures[politician.rank % textures.length];

  return (
    <article
      onClick={() => onSelect(politician.id)}
      className={`group relative h-[590px] overflow-hidden rounded-[2.25rem] bg-gradient-to-br ${texture} p-6 text-white shadow-2xl shadow-black/20 transition duration-500 hover:-translate-y-2 hover:shadow-emerald-500/20`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_10%,rgba(255,255,255,0.55),transparent_28%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.45),transparent_35%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/65 via-black/20 to-transparent backdrop-blur-[2px] transition duration-500 group-hover:backdrop-blur-md" />
      <div className="absolute right-[-60px] top-[-60px] h-56 w-56 rounded-full bg-white/20 blur-2xl transition duration-500 group-hover:scale-125" />

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div className="rounded-full bg-black/25 px-4 py-2 text-sm font-black backdrop-blur-xl">
            Top Portfolio
          </div>
          <div className="rounded-full bg-white/20 px-4 py-2 text-sm font-black backdrop-blur-xl">
            #{politician.rank}
          </div>
        </div>

        <div>
          <h3 className="max-w-[10ch] text-5xl font-black leading-[0.9] tracking-tight sm:text-6xl">
            {politician.name}
          </h3>

          <div className="mt-5 flex items-center gap-3">
            <span className={`h-4 w-4 rounded-full ${dot}`} />
            <p className="text-lg font-black">
              {politician.chamber} / {politician.party}
            </p>
          </div>

          <div className="mt-7 grid grid-cols-2 gap-3">
            <div className="rounded-3xl bg-white/18 p-4 backdrop-blur-xl">
              <p className="text-sm font-black text-white/70">Portfolio</p>
              <p className="mt-2 text-3xl font-black">
                {politician.totalValue}
              </p>
            </div>
            <div className="rounded-3xl bg-white/18 p-4 backdrop-blur-xl">
              <p className="text-sm font-black text-white/70">YTD</p>
              <p className="mt-2 text-3xl font-black text-emerald-200">
                {politician.performance.YTD}
              </p>
            </div>
          </div>

          <button
            type="button"
            className={`mt-5 w-full rounded-full px-6 py-5 text-lg font-black transition group-hover:scale-[1.02] ${
              isDark ? "bg-white text-black" : "bg-black text-white"
            }`}
          >
            View Portfolio
          </button>
        </div>
      </div>
    </article>
  );
}
