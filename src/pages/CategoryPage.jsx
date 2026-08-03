import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import categories from '../data/categories.json';
import { CATEGORIES_META } from '../data/categoriesMeta';
import { asset } from '../lib/asset';
import { useTitle } from '../lib/useTitle';

const EASE = [0.16, 1, 0.3, 1];
const MotionLink = motion.create(Link);

const imgUrl = (path) => asset(`img/${path.split('/').pop()}`);

export default function CategoryPage() {
  const { slug } = useParams();
  const category = categories[slug];
  const meta = CATEGORIES_META.find((c) => c.slug === slug);

  useTitle(meta?.title ?? category?.name ?? 'Категория не найдена');

  if (!category) {
    return (
      <div className="inner-page">
        <PageHeader back="/catalog" backLabel="В каталог" title="Категория не найдена" />
      </div>
    );
  }

  return (
    <div className="inner-page">
      <PageHeader
        back="/catalog"
        backLabel="В каталог"
        title={meta?.title ?? category.name}
        lead={`${category.products.length} моделей`}
      />

      <div className="prod-grid">
        {category.products.map((p, i) => (
          <MotionLink
            key={p.slug}
            to={`/product/${p.slug}`}
            className="mini-card"
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.03 * i, ease: EASE }}
          >
            <div className="mini-card-img">
              <img src={imgUrl(p.img)} alt={p.name} loading="lazy" />
            </div>
            <h3>{p.name}</h3>
          </MotionLink>
        ))}
      </div>
    </div>
  );
}
