import { AnimatePresence, motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1];
const MotionLink = motion.create(Link);

const LINKS = [
  { label: 'Продукция', href: '/catalog' },
  { label: 'Решения', href: '/solutions' },
  { label: 'Проекты', href: '/projects' },
  { label: 'Доставка', href: '/delivery' },
  { label: 'О компании', href: '/about' },
  { label: 'Блог', href: '/blog' },
  { label: 'Поддержка', href: '/support' },
  { label: 'Контакты', href: '/contacts' },
];

export default function MenuOverlay({ open, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
        >
          <button className="menu-overlay-close" type="button" onClick={onClose} aria-label="Закрыть">
            <X size={18} strokeWidth={2} color="#fff" />
          </button>

          <nav className="menu-overlay-links">
            {LINKS.map((link, i) => (
              <MotionLink
                key={link.href}
                to={link.href}
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 12, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.06, ease: EASE }}
              >
                {link.label}
              </MotionLink>
            ))}
          </nav>

          <motion.a
            href="tel:88005502645"
            className="menu-overlay-phone"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
          >
            8 800 550-26-45
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
