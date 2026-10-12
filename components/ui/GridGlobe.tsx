"use client";

type GlobeDataPoint = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

type WorldProps = {
  data: GlobeDataPoint[];
};

function World({ data }: WorldProps) {
  return (
    <div className="relative h-full w-full rounded-full border border-cyan-400/40 bg-slate-950/40 shadow-[0_0_30px_rgba(6,182,212,0.25)]">
      {data.map((point) => (
        <div
          key={point.order}
          className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/60"
          style={{
            boxShadow: `0 0 25px ${point.color}`,
            background: `radial-gradient(circle, ${point.color} 0%, rgba(6, 182, 212, 0.12) 35%, transparent 70%)`,
          }}
        />
      ))}
    </div>
  );
}

export default function GridGlobe() {
  const globeData: GlobeDataPoint[] = [
    {
      order: 1,
      startLat: 25.276987,
      startLng: 55.296249, // Dubai / UAE coordinates
      endLat: 30.04442,
      endLng: 31.235712,
      arcAlt: 0.1,
      color: "#06b6d4",
    },
  ];

  return (
    <div className="absolute-center h-full w-full cursor-pointer">
      <World data={globeData} />
    </div>
  );
}