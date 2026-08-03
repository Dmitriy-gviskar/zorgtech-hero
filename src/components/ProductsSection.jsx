import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];
const MotionLink = motion.create(Link);
const reveal = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function ProductsSection() {
  return (
    <section className="section" id="products">
      <motion.p className="section-label" {...reveal(0)}>
        Продукция
      </motion.p>
      <motion.h2 className="section-heading" {...reveal(0.05)}>
        Широкая линейка оборудования
      </motion.h2>
      <motion.p className="section-sub" {...reveal(0.1)}>
        От компактных настенных терминалов до уличных всепогодных
        киосков — производим решение под любую задачу.
      </motion.p>

      <div className="showcase-grid">
        <MotionLink to="/catalog/napolnye" className="showcase-hero" {...reveal(0.15)}>
          <div className="showcase-hero-body">
            <p className="showcase-hero-eyebrow">Напольные · 29 моделей</p>
            <h3 className="showcase-hero-title">Diamant F Multitouch</h3>
            <p className="showcase-hero-desc">
              Информационные терминалы от 32″ до 86″. Антивандальное
              исполнение, встроенный ПК.
            </p>
            <span className="showcase-hero-link">Смотреть модели →</span>
          </div>
          <div className="showcase-hero-img">
            <img src="/img/ad892332ab2c9820671bd13fd80ddcfd.png" alt="Diamant F" width="904" height="1800" />
          </div>
        </MotionLink>

        <div className="showcase-side">
          <MotionLink to="/catalog/stoly" className="prod-card" {...reveal(0.2)}>
            <div className="prod-card-img">
              <img src="/img/1u9jbdym7onkf1xblb2mjtdxwu9aazdl.png" alt="Diamant N" width="848" height="848" />
            </div>
            <div className="prod-card-body">
              <p className="prod-card-tag">Столы</p>
              <h3 className="prod-card-title">Diamant N Multitouch</h3>
              <p className="prod-card-desc">
                Сенсорные столы для музеев, школ и переговорных. До 60
                одновременных касаний.
              </p>
              <span className="prod-card-link">Подробнее →</span>
            </div>
          </MotionLink>

          <MotionLink to="/catalog/nastennyy" className="prod-card" {...reveal(0.25)}>
            <div className="prod-card-img">
              <img src="/img/a688c0812e06ff8858036a49e6fa1eb2.png" alt="Diamant W" width="900" height="569" />
            </div>
            <div className="prod-card-body">
              <p className="prod-card-tag">Настенные</p>
              <h3 className="prod-card-title">Diamant W Multitouch</h3>
              <p className="prod-card-desc">
                Компактные терминалы для ресепшн, навигации и
                самообслуживания.
              </p>
              <span className="prod-card-link">Подробнее →</span>
            </div>
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
