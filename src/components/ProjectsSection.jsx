import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PROJECTS from '../data/projects';

const EASE = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: EASE },
});

const FEATURED = PROJECTS.slice(0, 4);

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
        {FEATURED.map((p, i) => (
          <motion.div
            className={`proj-card${p.img ? ' proj-card-img' : ''}`}
            key={p.title}
            {...reveal(0.1 + i * 0.05)}
            style={p.img ? { backgroundImage: `url(${p.img})` } : {}}
          >
            <div className="proj-label">{p.meta}</div>
            <div className="proj-title">{p.title}</div>
          </motion.div>
        ))}
      </div>

      <motion.div className="section-cta" {...reveal(0.3)}>
        <Link to="/projects" className="btn btn-text">
          Все кейсы &rarr;
        </Link>
      </motion.div>
    </section>
  );
}