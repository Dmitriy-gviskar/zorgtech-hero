import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import PROJECTS from '../data/projects';
import projectContent from '../data/projectContent.json';
import { useTitle } from '../lib/useTitle';

const EASE = [0.16, 1, 0.3, 1];

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const idx = PROJECTS.findIndex((p) => p.slug === slug);
  const project = idx >= 0 ? PROJECTS[idx] : null;
  const prev = idx > 0 ? PROJECTS[idx - 1] : null;
  const next = idx < PROJECTS.length - 1 ? PROJECTS[idx + 1] : null;

  // Get rich content from scraped data
  const content = project?.oldSlug ? projectContent[project.oldSlug] : null;

  useTitle(project?.title ?? 'Проект не найден');

  if (!project) {
    return (
      <div className="inner-page">
        <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Проекты', to: '/projects' }, { label: 'Проект не найден' }]} />
        <h1 className="page-title">Проект не найден</h1>
        <Link to="/projects" className="btn btn-secondary">← Все проекты</Link>
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

      <motion.article
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <p className="section-label">{project.meta}</p>
        <h1 className="page-title">{project.title}</h1>

        {project.img && (
          <div className="project-detail-hero">
            <img src={project.img} alt={project.title} />
          </div>
        )}

        <div className="project-detail-body">
          {content?.sections ? (
            content.sections.map((s, i) => (
              <div key={i} className="project-detail-section">
                <h2>{s.title}</h2>
                {s.content.split('\n\n').map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            ))
          ) : (
            <>
              <h2>О проекте</h2>
              <p>{project.text || 'Интерактивное оборудование Zorgtech было установлено и успешно эксплуатируется на объекте заказчика.'}</p>
            </>
          )}

          {content?.inlineImages?.length > 0 && (
            <div className="project-detail-gallery">
              {content.inlineImages.map((img, i) => (
                <img key={i} src={`/zorgtech-hero/${img}`} alt="" loading="lazy" />
              ))}
            </div>
          )}

          {content?.products?.length > 0 && (
            <div className="project-detail-used">
              <h2>Что мы использовали в проекте</h2>
              <div className="project-detail-used-grid">
                {content.products.map((p, i) => (
                  <div key={i} className="project-detail-used-card">
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <span className="project-detail-used-price">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <nav className="project-detail-nav">
          {prev ? (
            <Link to={`/projects/${prev.slug}`} className="project-detail-nav-link">
              <span>← Предыдущий проект</span>
              <strong>{prev.title}</strong>
            </Link>
          ) : <span />}
          {next ? (
            <Link to={`/projects/${next.slug}`} className="project-detail-nav-link" style={{textAlign:'right'}}>
              <span>Следующий проект →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : <span />}
        </nav>

        <div style={{ marginTop: 32 }}>
          <Link to="/projects" className="btn btn-secondary">← Все проекты</Link>
        </div>
      </motion.article>
    </div>
  );
}
