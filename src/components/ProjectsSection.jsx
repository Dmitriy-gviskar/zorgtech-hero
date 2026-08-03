import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: EASE },
});

const PROJECTS = ['Аэропорт Курумоч', 'Музей Думы', 'Автовокзал Саларьево', 'Nordgold'];

export default function ProjectsSection() {
  return (
    <section className="section section-alt" id="projects">
      <motion.p className="section-label" {...reveal(0)}>
        Проекты
      </motion.p>
      <motion.h2 className="section-heading" {...reveal(0.05)}>
        Оборудование в деле
      </motion.h2>
      <motion.p className="section-sub" {...reveal(0.1)}>
        Наши терминалы работают в аэропортах, музеях, отелях и
        госучреждениях по всей стране.
      </motion.p>

      <div className="projects-grid">
        {PROJECTS.map((label, i) => (
          <motion.div className="proj-card" key={label} {...reveal(0.1 + i * 0.05)}>
            <div className="proj-label">{label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
