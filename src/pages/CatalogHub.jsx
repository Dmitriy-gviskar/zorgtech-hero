import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Breadcrumbs from '../components/Breadcrumbs';
import { CATEGORIES_META } from '../data/categoriesMeta';
import categories from '../data/categories.json';
import products from '../data/products.json';
import { asset } from '../lib/asset';
import { useTitle } from '../lib/useTitle';

const EASE = [0.16, 1, 0.3, 1];
const MotionLink = motion.create(Link);

function countFor(slug) {
  return categories[slug]?.products?.length ?? 0;
}

function imgFor(slug) {
  const cat = categories[slug];
  if (!cat?.products?.length) return null;
  const first = cat.products[0];
  const p = products[first.slug];
  if (p?.images?.length > 0) return asset(p.images[0]);
  // fallback: try first product image from cat
  if (first.img) return first.img.startsWith('/upload') ? `https://zorgtech.com${first.img}` : asset(first.img);
  return null;
}

export default function CatalogHub() {
  useTitle('Продукция');

  return (
    <div className="inner-page">
      <Breadcrumbs items={[
        { label: 'Главная', to: '/' },
        { label: 'Каталог' },
      ]} />
      <PageHeader
        label="Продукция"
        title="Широкая линейка оборудования"
        lead="12 линеек. 82 модели. От компактных настенных терминалов до уличных всепогодных киосков."
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
            <span className="cat-card-count">{countFor(c.slug)} моделей</span>
          </MotionLink>
        ))}
      </div>
    </div>
  );
}
