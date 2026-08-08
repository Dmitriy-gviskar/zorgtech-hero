import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import BackgroundVideo from './BackgroundVideo';

const EASE = [0.16, 1, 0.3, 1];

export default function HeroSection() {
  return (
    <section className="hero">
      <BackgroundVideo />

      <motion.div
        className="hero-content"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3, ease: EASE }}
      >
        <p className="hero-eyebrow">
          <span className="hero-dot" />
          Российский производитель интерактивного оборудования
        </p>

        <h1 className="hero-title">
          Оборудование,<br />
          к которому хочется<br />
          прикоснуться
        </h1>

        <p className="hero-sub">
          Сенсорные киоски, столы и терминалы для бизнеса, государства и
          образования. Проектируем, производим, программируем.
        </p>

        <div className="hero-buttons">
          <Link to="/catalog" className="btn btn-primary">
            Смотреть продукцию
          </Link>
          <Link to="/about" className="btn btn-secondary">
            О компании
          </Link>
        </div>

        <div className="hero-tags">
          <Link to="/catalog/napolnye" className="tag">Напольные</Link>
          <Link to="/catalog/stoly" className="tag">Столы</Link>
          <Link to="/catalog/nastennyy" className="tag">Настенные</Link>
          <Link to="/catalog/ulichnye" className="tag">Уличные</Link>
          <Link to="/catalog/detskie-stoliki" className="tag">Детские</Link>
        </div>
      </motion.div>
    </section>
  );
}