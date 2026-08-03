import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: EASE },
});

export default function CtaSection() {
  return (
    <section className="section cta-section" id="contacts">
      <motion.h2 className="section-heading" {...reveal(0)}>
        Обсудим ваш проект
      </motion.h2>
      <motion.p className="section-sub" {...reveal(0.05)}>
        Подберём оборудование и рассчитаем стоимость за 24 часа.
      </motion.p>
      <motion.div className="cta-buttons" {...reveal(0.1)}>
        <a href="tel:88005502645" className="btn btn-primary">
          8 800 550-26-45
        </a>
        <a href="mailto:sale@zorgtech.ru" className="btn btn-secondary">
          sale@zorgtech.ru
        </a>
      </motion.div>
    </section>
  );
}
