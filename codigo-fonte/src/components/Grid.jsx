// Grade responsiva. min: largura mínima de cada coluna (px).
export default function Grid({ min = 300, gap = 22, children }) {
  return <div className="grade" style={{ '--min': `${min}px`, '--gap': `${gap}px` }}>{children}</div>;
}
