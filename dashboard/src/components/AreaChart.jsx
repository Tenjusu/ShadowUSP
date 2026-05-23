function buildChartPath(points, width, height) {
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min || 1;

  return points
    .map((point, index) => {
      const x = (index / (points.length - 1 || 1)) * width;
      const y = height - ((point - min) / range) * height;
      return `${index === 0 ? "M" : "L"} ${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

export default function AreaChart({
  points,
  id,
  heightClass = "h-[220px]",
  stroke = "#34d399",
  muted = false,
}) {
  const width = 100;
  const chartHeight = 48;
  const linePath = buildChartPath(points, width, chartHeight);
  const fillPath = `${linePath} L ${width} ${chartHeight} L 0 ${chartHeight} Z`;
  const gradientId = `area-${id}`;

  return (
    <svg
      viewBox={`0 0 ${width} ${chartHeight}`}
      preserveAspectRatio="none"
      className={`w-full overflow-visible ${heightClass}`}
      role="img"
      aria-label="Portfolio performance chart"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={stroke} stopOpacity={muted ? "0.28" : "0.45"} />
          <stop offset="100%" stopColor={stroke} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillPath} fill={`url(#${gradientId})`} />
      <path
        d={linePath}
        fill="none"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={muted ? "1.4" : "2.2"}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
