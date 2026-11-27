import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

// variant: "primario" (amarelo) ou "contorno" (borda branca). icon: "whatsapp", "send" ou nenhum.
export default function Button({ to, href, variant = 'primario', icon, arrow = variant === 'primario', className = '', onMouseMove, children, ...rest }) {
  const cls = `btn btn--${variant} ${className}`.trim();

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
    if (onMouseMove) onMouseMove(e);
  }

  const inner = (
    <>
      {icon && <Icon name={icon} size={18} strokeWidth={2} />}
      <span>{children}</span>
      {arrow && <Icon name="arrow" size={16} strokeWidth={2} className="btn__seta" />}
    </>
  );

  if (to) return <Link to={to} className={cls} onMouseMove={handleMouseMove} {...rest}>{inner}</Link>;
  if (href) return <a href={href} className={cls} onMouseMove={handleMouseMove} {...rest}>{inner}</a>;
  return <button className={cls} onMouseMove={handleMouseMove} {...rest}>{inner}</button>;
}
