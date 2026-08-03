import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import categories from '../data/categories.json';
import products from '../data/products.json';
import { CATEGORIES_META } from '../data/categoriesMeta';
import { asset } from '../lib/asset';
import { useTitle } from '../lib/useTitle';

const EASE = [0.16, 1, 0.3, 1];
const MotionLink = motion.create(Link);

const imgUrl = (path) => asset(`img/${path.split('/').pop()}`);

// categories.json's own "name" field disagrees with the product page's real
// title for some models (e.g. catalog says "49 F", the product itself says
// "50 F") — the product page is the source of truth, so prefer its title.
const nameFor = (slug, fallback) => products[slug]?.title ?? fallback;

function diagonalFor(slug) {
  const p = products[slug];
  if (!p) return null;
  const feat = (p.features || []).find((f) => f.title === 'Диагональ');
  const fromFeature = feat?.desc.match(/(\d+)\s*″/)?.[1];
  const fromTitle = p.title.match(/\b(1[5-9]|[2-8][0-9])\b/)?.[1];
  const size = fromFeature || fromTitle;
  return size ? `${size}″` : '—';
}

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
              <img src={imgUrl(p.img)} alt={nameFor(p.slug, p.name)} loading="lazy" />
            </div>
            <h3>{nameFor(p.slug, p.name)}</h3>
          </MotionLink>
        ))}
      </div>

      <p className="compare-label">Сравнение моделей</p>
      <div className="compare-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th>Модель</th>
              <th className="num">Диагональ</th>
              <th className="num">Цена</th>
            </tr>
          </thead>
          <tbody>
            {category.products.map((p) => (
              <tr key={p.slug}>
                <td>
                  <Link to={`/product/${p.slug}`}>{nameFor(p.slug, p.name)}</Link>
                </td>
                <td className="num">{diagonalFor(p.slug)}</td>
                <td className="num">по запросу</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
