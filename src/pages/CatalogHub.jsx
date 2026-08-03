import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import { CATEGORIES_META } from '../data/categoriesMeta';

const EASE = [0.16, 1, 0.3, 1];
const MotionLink = motion.create(Link);

export default function CatalogHub() {
  return (
    <div className="inner-page">
      <PageHeader
        label="Продукция"
        title="Широкая линейка оборудования"
        lead="12 линеек. От компактных настенных терминалов до уличных всепогодных киосков."
        back="/"
      />

      <div className="cat-grid">
        {CATEGORIES_META.map((c, i) => (
          <MotionLink
            key={c.slug}
            to={`/catalog/${c.slug}`}
            className="cat-card"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.05 * i, ease: EASE }}
          >
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </MotionLink>
        ))}
      </div>
    </div>
  );
}
