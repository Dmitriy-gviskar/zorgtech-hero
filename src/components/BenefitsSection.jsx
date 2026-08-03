import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: EASE },
});

const BENEFITS = [
  { target: 12, suffix: '', title: 'Линеек', desc: 'От детских столов до промышленных уличных киосков.' },
  { target: 600, suffix: '+', title: 'Проектов', desc: 'По всей России, Беларуси и Казахстану.' },
  { target: 9, suffix: '', title: 'Решений', desc: 'Предустановленное ПО для ключевых отраслей.' },
  { target: 72, suffix: 'ч', title: 'Поддержка', desc: 'Решение вопросов в течение трёх рабочих дней.' },
];

function CountUp({ target, suffix }) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const start = performance.now();
          const dur = 1500;
          function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - (1 - p) ** 3;
            setValue(Math.round(target * eased));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
          observer.unobserve(el);
        });
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div className="benefit-num" ref={ref}>
      {value}
      {suffix}
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <section className="section" id="benefits">
      <motion.p className="section-label" {...reveal(0)}>
        Почему Zorgtech
      </motion.p>
      <motion.h2 className="section-heading" {...reveal(0.05)}>
        Производство полного цикла
      </motion.h2>
      <motion.p className="section-sub" {...reveal(0.1)}>
        Проектируем, собираем, программируем и обслуживаем — всё в
        одной компании.
      </motion.p>

      <div className="benefits-grid">
        {BENEFITS.map((b, i) => (
          <motion.div className="benefit-item" key={b.title} {...reveal(0.1 + i * 0.05)}>
            <CountUp target={b.target} suffix={b.suffix} />
            <h3>{b.title}</h3>
            <p>{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
