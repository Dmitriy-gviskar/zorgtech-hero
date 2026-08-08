import { Link } from 'react-router-dom';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <span>© 2026 Zorgtech. Производство интерактивного оборудования.</span>
      <ul className="site-footer-links">
        <li><Link to="/delivery">Доставка</Link></li>
        <li><Link to="/about">О компании</Link></li>
        <li><Link to="/blog">Блог</Link></li>
        <li><Link to="/support">Поддержка</Link></li>
        <li><Link to="/contacts">Контакты</Link></li>
      </ul>
    </footer>
  );
}