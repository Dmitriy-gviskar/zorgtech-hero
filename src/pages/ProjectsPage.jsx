import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { useTitle } from '../lib/useTitle';
import PROJECTS from '../data/projects';

const EASE = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: EASE },
});

const STATS = [
  { num: '1200+', label: 'проектов' },
  { num: '70+', label: 'сервисных центров' },
  { num: '3', label: 'страны' },
  { num: '13', label: 'лет опыта' },
];

export default function ProjectsPage() {
  useTitle('Проекты');

  return (
    <div className="inner-page">
      <PageHeader
        back="/"
        label="Проекты"
        title={<>Оборудование<br />в деле</>}
        lead="Наши терминалы работают в аэропортах, музеях, на заводах и в поликлиниках по всей стране."
      />

      <div className="stat-line">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            {s.num}
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <motion.div className="project" key={p.title} {...reveal(0.03 * i)}>
            <div
              className="project-visual"
              style={p.img ? {
                backgroundImage: `url(${p.img})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              } : {}}
            >
              {!p.img && String(i + 1).padStart(2, '0')}
            </div>
            <div>
              <p className="project-meta">{p.meta}</p>
              <h2>{p.title}</h2>
              {p.text && <p>{p.text}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}