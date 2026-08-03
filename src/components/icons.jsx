export function LogoMark({ size = 28, color = '#000' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <g transform="rotate(-35 16 16)">
        <rect x="10" y="5" width="5" height="22" rx="2.5" fill={color} />
        <rect x="18" y="5" width="5" height="22" rx="2.5" fill={color} />
      </g>
    </svg>
  );
}

export function GridIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="none">
      <circle cx="2.5" cy="2.5" r="2" fill="#fff" />
      <circle cx="9.5" cy="2.5" r="2" fill="#fff" />
      <circle cx="2.5" cy="9.5" r="2" fill="#fff" />
      <circle cx="9.5" cy="9.5" r="2" fill="#fff" />
    </svg>
  );
}
