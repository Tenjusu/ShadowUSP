export default function TradeCard({ trade }) {
  return (
    <article className="grid grid-cols-1 items-center gap-x-4 gap-y-4 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition hover:bg-white/[0.07] sm:grid-cols-[1fr_auto]">
      <div>
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="m-0 text-lg font-semibold text-white">
            New Disclosure Filed
          </h2>
          <span className="rounded-full bg-[#0a84ff]/15 px-3 py-1 text-xs font-semibold text-[#0a84ff]">
            Form PTR
          </span>
        </div>

        <p className="mt-1 text-[13px] text-[#8e8e93]">{trade.chamber}</p>
        <p className="mt-2 text-sm font-medium text-[#ebebf5]">
          {trade.politician}
        </p>
      </div>

      <div className="text-left sm:text-right">
        <a
          href={trade.report_url}
          target="_blank"
          rel="noreferrer"
          className="mb-2 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold text-black no-underline transition hover:bg-[#ebebf5]"
        >
          View PDF Report
        </a>
        <p className="mt-1 text-xs text-[#636366]">
          Filed: {trade.disclosure_date}
        </p>
      </div>
    </article>
  );
}
