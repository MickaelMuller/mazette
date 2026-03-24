const SIZE = 100;
const R = SIZE / 2;
const ROWS = 11;
const COLS = 16;

const RAYS_GRADIENT =
  "conic-gradient(from 0deg, transparent 0deg, rgba(255,255,255,0.7) 1.5deg, transparent 3deg, transparent 15deg, rgba(239,125,21,0.5) 16.5deg, transparent 18deg, transparent 30deg, rgba(255,255,255,0.6) 31.5deg, transparent 33deg, transparent 45deg, rgba(122,74,130,0.5) 46.5deg, transparent 48deg, transparent 60deg, rgba(255,255,255,0.7) 61.5deg, transparent 63deg, transparent 75deg, rgba(239,125,21,0.5) 76.5deg, transparent 78deg, transparent 90deg, rgba(255,255,255,0.6) 91.5deg, transparent 93deg, transparent 105deg, rgba(122,74,130,0.5) 106.5deg, transparent 108deg, transparent 120deg, rgba(255,255,255,0.7) 121.5deg, transparent 123deg, transparent 135deg, rgba(239,125,21,0.5) 136.5deg, transparent 138deg, transparent 150deg, rgba(255,255,255,0.6) 151.5deg, transparent 153deg, transparent 165deg, rgba(122,74,130,0.5) 166.5deg, transparent 168deg, transparent 180deg, rgba(255,255,255,0.7) 181.5deg, transparent 183deg, transparent 195deg, rgba(239,125,21,0.5) 196.5deg, transparent 198deg, transparent 210deg, rgba(255,255,255,0.6) 211.5deg, transparent 213deg, transparent 225deg, rgba(122,74,130,0.5) 226.5deg, transparent 228deg, transparent 240deg, rgba(255,255,255,0.7) 241.5deg, transparent 243deg, transparent 255deg, rgba(239,125,21,0.5) 256.5deg, transparent 258deg, transparent 270deg, rgba(255,255,255,0.6) 271.5deg, transparent 273deg, transparent 285deg, rgba(122,74,130,0.5) 286.5deg, transparent 288deg, transparent 300deg, rgba(255,255,255,0.7) 301.5deg, transparent 303deg, transparent 315deg, rgba(239,125,21,0.5) 316.5deg, transparent 318deg, transparent 330deg, rgba(255,255,255,0.6) 331.5deg, transparent 333deg, transparent 345deg, rgba(122,74,130,0.5) 346.5deg, transparent 348deg)";

interface TileData {
  points: string;
  fill: string;
}

function generateTiles(): TileData[] {
  const tiles: TileData[] = [];
  const latStep = (150 * Math.PI) / 180 / ROWS;
  const startLat = (-75 * Math.PI) / 180;
  const phiStep = (2 * Math.PI) / COLS;
  const lx = -0.4;
  const ly = -0.6;
  const lz = 0.7;
  const lLen = Math.sqrt(lx * lx + ly * ly + lz * lz);

  for (let row = 0; row < ROWS; row++) {
    const lat1 = startLat + row * latStep;
    const lat2 = startLat + (row + 1) * latStep;
    const midLat = (lat1 + lat2) / 2;
    const rowOffset = row % 2 === 0 ? 0 : phiStep / 2;

    for (let col = 0; col < COLS; col++) {
      const phi1 = -Math.PI + col * phiStep + rowOffset;
      const phi2 = -Math.PI + (col + 1) * phiStep + rowOffset;
      const midPhi = (phi1 + phi2) / 2;

      const nz = Math.cos(midLat) * Math.cos(midPhi);
      if (nz < 0) continue;

      const nx = Math.cos(midLat) * Math.sin(midPhi);
      const ny = -Math.sin(midLat);
      const dot = (nx * lx + ny * ly + nz * lz) / lLen;

      const base = 0.3 + 0.35 * nz;
      const highlight = Math.pow(Math.max(0, dot), 3) * 0.45;
      const shimmer = (((row * 7 + col * 13) % 11) / 11) * 0.1;
      const brightness = Math.min(1, base + highlight + shimmer);
      const gray = Math.round(brightness * 180 + 60);
      const blueShift = Math.round(gray * 1.04);

      const corners = [
        [lat2, phi1],
        [lat2, phi2],
        [lat1, phi2],
        [lat1, phi1],
      ];

      const points = corners
        .map(([lat, phi]) => {
          const x = R + R * Math.cos(lat) * Math.sin(phi);
          const y = R - R * Math.sin(lat);
          return `${x.toFixed(1)},${y.toFixed(1)}`;
        })
        .join(" ");

      tiles.push({
        points,
        fill: `rgb(${gray}, ${gray}, ${blueShift})`,
      });
    }
  }

  return tiles;
}

const TILES = generateTiles();

interface DiscoBallProps {
  id: string;
  reverse?: boolean;
  className?: string;
}

export default function DiscoBall({
  id,
  reverse = false,
  className = "",
}: DiscoBallProps) {
  const direction = reverse ? "reverse" : "normal";

  return (
    <>
      <div
        className={`flex flex-col items-center pointer-events-none ${className}`}
        style={{ zIndex: 0 }}
      >
        <div className="relative w-16 h-16 md:w-24 md:h-24">
          <div
            className="absolute rounded-full animate-disco-rays opacity-[0.07]"
            style={{
              inset: "-600px",
              animationDirection: direction,
              background: RAYS_GRADIENT,
            }}
          />
        </div>
      </div>

      <div
        className={`flex flex-col items-center ${className}`}
        style={{ zIndex: 10 }}
      >
        <div className="relative w-16 h-16 md:w-24 md:h-24">
          <div
            className="absolute inset-0 rounded-full overflow-hidden animate-disco-ball-spin"
            style={{ animationDirection: direction }}
          >
            <svg
              viewBox={`0 0 ${SIZE} ${SIZE}`}
              className="w-full h-full"
              aria-label={`Boule a facettes ${id}`}
            >
              <circle cx={R} cy={R} r={R} fill="#3a3a3a" />
              {TILES.map((tile, i) => (
                <polygon
                  key={i}
                  points={tile.points}
                  fill={tile.fill}
                  stroke="#222"
                  strokeWidth="0.5"
                />
              ))}
            </svg>
          </div>

          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 30% 25%, rgba(255,255,255,0.7) 0%, transparent 22%), radial-gradient(ellipse at 38% 35%, rgba(255,255,255,0.08) 0%, transparent 55%), radial-gradient(ellipse at 68% 72%, rgba(0,0,0,0.4) 0%, transparent 55%)",
            }}
          />

          <div className="absolute inset-0 rounded-full shadow-[0_0_40px_rgba(255,255,255,0.2),0_0_80px_rgba(255,255,255,0.05)]" />
        </div>
      </div>
    </>
  );
}
