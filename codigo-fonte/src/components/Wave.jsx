// Onda de pontos animada usada na faixa de chamada e no topo sem foto.
const linhas = Array.from({ length: 12 }, (_, k) => {
  const pts = [];
  for (let i = 0; i <= 100; i++) {
    const x = i * 7;
    const y = 150 + (38 + k * 4) * Math.sin(i / 14 + k * 0.22) - k * 9 + 20 * Math.sin(i / 31);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return { pts: pts.join(' '), op: (0.25 + 0.6 * (k / 11)).toFixed(2), atraso: `${(-k * 0.2).toFixed(1)}s` };
});

export default function Wave() {
  return (
    <svg className="onda" viewBox="0 0 700 260" preserveAspectRatio="xMaxYMax slice" aria-hidden="true">
      {linhas.map((l, i) => (
        <polyline key={i} points={l.pts} strokeOpacity={l.op} style={{ animationDelay: l.atraso }} />
      ))}
    </svg>
  );
}
