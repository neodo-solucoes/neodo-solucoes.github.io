// Ícones do site (traço). Uso: <Icon name="zap" size={28} />
// Para adicionar um ícone, inclua o desenho SVG (viewBox 24x24) na lista abaixo.
const ICONES = {
  factory: (<><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" /><path d="M17 18h1M12 18h1M7 18h1" /></>),
  home: (<><path d="M3 10.5 12 3l9 7.5M5 9v12h14V9M10 21v-6h4v6" /></>),
  briefcase: (<><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" /></>),
  zap: (<><path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" /></>),
  cpu: (<><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" rx="1" /><path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" /></>),
  arm: (<><path d="M3 21h10M8 21v-3M8 18l3-7M11 11l6-4M17 7l3 3M17 7l1-3" /><circle cx="8" cy="18" r="1.6" /><circle cx="11" cy="11" r="1.6" /><circle cx="17" cy="7" r="1.6" /></>),
  radio: (<><circle cx="12" cy="12" r="1.6" /><path d="M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8" /></>),
  code: (<><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></>),
  brain: (<><path d="M12 4.5a3 3 0 0 0-5.6-1.4A3 3 0 0 0 4 6.5a3 3 0 0 0-1 5.2 3.5 3.5 0 0 0 2 5.8A3 3 0 0 0 12 19.5ZM12 4.5a3 3 0 0 1 5.6-1.4A3 3 0 0 1 20 6.5a3 3 0 0 1 1 5.2 3.5 3.5 0 0 1-2 5.8 3 3 0 0 1-7 2M12 4.5v15M8 9h1.5M14.5 13H16" /></>),
  search: (<><circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" /></>),
  layers: (<><path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></>),
  gear: (<><circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="7" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M4.9 19.1 7 17M17 7l2.1-2.1" /></>),
  headset: (<><path d="M3 14v-2a9 9 0 0 1 18 0v2M21 14v3a2 2 0 0 1-2 2h-1v-6h3M3 14v3a2 2 0 0 0 2 2h1v-6H3M19 19a3 3 0 0 1-3 3h-3" /></>),
  refresh: (<><path d="M21 12a9 9 0 0 1-15.5 6.3L3 16M3 12a9 9 0 0 1 15.5-6.3L21 8M21 3v5h-5M3 21v-5h5" /></>),
  network: (<><circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" /><path d="M10.8 7.2 6.2 16.8M13.2 7.2l4.6 9.6M7.5 19h9" /></>),
  sliders: (<><path d="M4 6h10M18 6h2M4 12h4M12 12h8M4 18h12M20 18h0" /><circle cx="16" cy="6" r="2" /><circle cx="10" cy="12" r="2" /><circle cx="18" cy="18" r="2" /></>),
  chartup: (<><path d="M3 21h18M6 21v-4M11 21v-7M16 21v-5M21 3l-6 6-4-3-6 6" /></>),
  shield: (<><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" /></>),
  box: (<><path d="M21 8l-9-5-9 5v8l9 5 9-5V8zM3 8l9 5 9-5M12 13v8" /></>),
  whatsapp: (<><path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 21l2.1-5.4A8.4 8.4 0 1 1 21 11.5z" /><path d="M9 9.5c.5 2.5 2.5 4.5 5 5" /></>),
  mail: (<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>),
  calendar: (<><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>),
  check: (<><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>),
  arrow: (<><path d="M5 12h14M13 6l6 6-6 6" /></>),
  send: (<><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" /></>),
  message: (<><path d="M21 12a8 8 0 0 1-11.6 7.1L4 21l1.9-5.4A8 8 0 1 1 21 12z" /></>),
  file: (<><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6zM14 3v6h6M8 13h8M8 17h6" /></>),
  plus: (<><path d="M12 5v14M5 12h14" /></>),
  scan: (<><path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3M9 12h6M12 9v6" /></>),
  bars: (<><path d="M2 21h20M5 21v-7M10 21V7M15 21v-9M20 21V4" /></>),
  phone: (<><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" /></>),
  linkedin: (<><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" rx="0" /><circle cx="4" cy="4" r="2" /></>),
  chevron: (<><path d="M6 9l6 6 6-6" /></>),
};

export default function Icon({ name, size = 28, strokeWidth = 1.8, className = '', label }) {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} {...a11y}
      style={{ flex: '0 0 auto' }}>
      {ICONES[name]}
    </svg>
  );
}
