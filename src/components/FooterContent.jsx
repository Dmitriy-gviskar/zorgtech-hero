import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];

export default function FooterContent() {
  return (
    <motion.div
      className="footer"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5, ease: EASE }}
    >
      <div className="footer-inner">
        <div className="footer-left">
          <motion.p
            className="footer-eyebrow"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
          >
            <span className="footer-dot" />
            Российский производитель интерактивного оборудования
          </motion.p>

          <motion.h1
            className="footer-heading"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8, ease: EASE }}
          >
            Оборудование,
            <br />
            к которому хочется
            <br />
            прикоснуться
          </motion.h1>

          <p className="footer-sub">
            Сенсорные киоски, столы и терминалы для бизнеса, государства и
            образования. Проектируем, производим, программируем.
          </p>

          <motion.div
            className="footer-buttons"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0, ease: EASE }}
          >
            <Link to="/catalog" className="btn btn-primary">
              Смотреть продукцию
            </Link>
            <Link to="/about" className="btn btn-secondary">
              О компании
            </Link>
          </motion.div>
        </div>

        <div className="footer-right">
          <Link to="/catalog/napolnye" className="tag">Напольные</Link>
          <Link to="/catalog/stoly" className="tag">Столы</Link>
          <Link to="/catalog/nastennyy" className="tag">Настенные</Link>
        </div>
      </div>
    </motion.div>
  );
}
