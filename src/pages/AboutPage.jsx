import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { useTitle } from '../lib/useTitle';
import { ABOUT_STATS, ABOUT_STORY } from '../data/about';

const EASE = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: EASE },
});

export default function AboutPage() {
  useTitle('О компании');

  return (
    <div className="inner-page">
      <PageHeader back="/" title="О компании" />

      <div className="stats">
        {ABOUT_STATS.map((s, i) => (
          <motion.div className="stat-num" key={s.label} {...reveal(0.05 * i)}>
            {s.num}
            <span>{s.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="story">
        {ABOUT_STORY.map((s, i) => (
          <motion.div key={s.title} {...reveal(0.05 * i)}>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
