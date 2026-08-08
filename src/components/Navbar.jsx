import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { LogoMark, GridIcon } from './icons';

const EASE = [0.16, 1, 0.3, 1];

export default function Navbar({ onMenuClick }) {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onDark = isHome && !scrolled;

  return (
    <motion.nav
      className={`navbar${scrolled ? ' navbar-scrolled' : ''}`}
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: EASE }}
    >
      <div className="navbar-side navbar-left">
        <Link to="/" className={`brand${onDark ? ' brand-on-dark' : ''}`}>
          <LogoMark color={onDark ? '#fff' : '#000'} />
          <span className="brand-text">Zorgtech</span>
        </Link>

        <button className="menu-btn" type="button" onClick={onMenuClick}>
          <span className="menu-btn-dot">
            <Plus size={12} strokeWidth={3} />
          </span>
          <span className="menu-btn-label">Menu</span>
        </button>

        <div className="tags-pill">
          <Link to="/catalog">Продукция</Link>
          <Link to="/solutions">Решения</Link>
          <Link to="/projects">Проекты</Link>
          <Link to="/delivery">Доставка</Link>
          <Link to="/about">О компании</Link>
        </div>
      </div>

      <div className="navbar-side navbar-right">
        <div className="tags-pill">
          <button className="grid-btn" type="button" aria-label="Полный цикл" onClick={onMenuClick}>
            <GridIcon />
          </button>
          <Link to="/blog">Блог</Link>
          <Link to="/support">Поддержка</Link>
          <Link to="/contacts">Контакты</Link>
        </div>
      </div>
    </motion.nav>
  );
}