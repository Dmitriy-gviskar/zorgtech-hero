import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import PROJECTS from '../data/projects';
import { useTitle } from '../lib/useTitle';

const EASE = [0.16, 1, 0.3, 1];

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  useTitle(project?.title ?? 'Проект не найден');

  if (!project) {
    return (
      <div className="inner-page">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Проекты', to: '/projects' }, { label: 'Проект не найден' }]} />
        <h1 className="page-title">Проект не найден</h1>
        <Link to="/projects" className="btn btn-secondary" style={{marginTop:24}}>← Все проекты</Link>
      </div>
    );
  }

  return (
    <div className="inner-page">
      <Breadcrumbs items={[
        { label: 'Главная', to: '/' },
        { label: 'Проекты', to: '/projects' },
        { label: project.title },
      ]} />

      <motion.div
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="section-label">{project.meta}</p>
        <h1 className="page-title">{project.title}</h1>

        {project.img && (
          <div className="project-hero" style={{ marginTop: 32, marginBottom: 40 }}>
            <img
              src={project.img}
              alt={project.title}
              style={{ width: '100%', borderRadius: 16, maxHeight: 480, objectFit: 'cover' }}
            />
          </div>
        )}

        <div className="project-body" style={{ maxWidth: 720 }}>
          <p className="muted" style={{ fontSize: 16 }}>{project.text}</p>
        </div>

        <div style={{ marginTop: 48 }}>
          <Link to="/projects" className="btn btn-secondary">← Все проекты</Link>
        </div>
      </motion.div>
    </div>
  );
}
