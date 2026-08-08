import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  if (!items?.length) return null;
  return (
    <nav className="breadcrumbs" aria-label="Хлебные крошки">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="breadcrumbs-sep">›</span>}
          {item.to ? (
            <Link to={item.to}>{item.label}</Link>
          ) : (
            <span className="breadcrumbs-current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
