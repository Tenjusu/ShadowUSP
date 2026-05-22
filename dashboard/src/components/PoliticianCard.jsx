const partyStyles = {
  Republican: "bg-red-500",
  Democrat: "bg-blue-500",
  Independent: "bg-violet-500",
};

const gradients = [
  "from-sky-400 via-blue-500 to-indigo-500",
  "from-emerald-300 via-teal-400 to-cyan-500",
  "from-rose-400 via-pink-500 to-fuchsia-500",
  "from-amber-300 via-orange-400 to-rose-400",
  "from-violet-400 via-purple-500 to-blue-500",
  "from-lime-300 via-emerald-400 to-teal-500",
];

export default function PoliticianCard({ politician, isDark, onClick }) {
  const gradient = gradients[politician.rank % gradients.length];
  const partyColor = partyStyles[politician.party] ?? "bg-slate-400";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative overflow-hidden rounded-[28px] bg-gradient-to-br ${gradient} p-5 text-left text-white shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-400/50`}
    >
      <div className="absolute -right-12 top-0 h-full w-36 rounded-l-full bg-white/15 transition duration-300 group-hover:translate-x-2" />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />

      <div className="relative z-10 flex min-h-[210px] flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-full border text-lg font-bold shadow-lg ${
              isDark
                ? "border-white/30 bg-black/20"
                : "border-white/70 bg-white/30"
            }`}
          >
            {politician.initials}
          </div>
          <span className="rounded-full bg-black/20 px-3 py-1 text-sm font-semibold text-white/90 backdrop-blur">
            #{politician.rank}
          </span>
        </div>

        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${partyColor}`} />
            <span className="text-sm font-semibold text-white/85">
              {politician.party}
            </span>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight">
            {politician.name}
          </h3>
          <p className="mt-1 text-sm font-medium text-white/85">
            {politician.position} · {politician.state}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3">
            <div>
              <p className="text-xs font-medium text-white/70">Portfolio</p>
              <p className="mt-1 text-xl font-semibold">
                {politician.totalValue}
              </p>
            </div>
            <div>
              <p className="text-xs font-medium text-white/70">All-time</p>
              <p className="mt-1 text-xl font-semibold text-emerald-100">
                {politician.performance["All-Time"]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
