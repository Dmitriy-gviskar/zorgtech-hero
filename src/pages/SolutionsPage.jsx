import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { useTitle } from '../lib/useTitle';
import { SOLUTIONS } from '../data/solutions';

const EASE = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function SolutionsPage() {
  useTitle('Готовые решения');

  return (
    <div className="inner-page">
      <PageHeader
        back="/"
        label="Готовые решения"
        title={<>Софт, который уже<br />работает</>}
        lead="Предустановленное программное обеспечение. Не нужно разрабатывать с нуля — запускается сразу после установки оборудования."
      />

      <div className="solutions-list">
        {SOLUTIONS.map((s, i) => (
          <motion.div className="solution" key={s.title} {...reveal(0.05 * i)}>
            <div className="solution-visual">{s.num}</div>
            <div className="solution-text">
              <p className="solution-label">{s.label}</p>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <div className="solution-features">
                {s.features.map((f) => (
                  <span className="solution-feature" key={f}>{f}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
