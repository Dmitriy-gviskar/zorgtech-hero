import { motion } from 'motion/react';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import products from '../data/products.json';
import { asset } from '../lib/asset';
import { useTitle } from '../lib/useTitle';

const EASE = [0.16, 1, 0.3, 1];

export default function ProductPage() {
  const { slug } = useParams();
  const product = products[slug];

  useTitle(product?.title ?? 'Товар не найден');

  if (!product) {
    return (
      <div className="inner-page">
        <Link to="/catalog" className="back-link">← В каталог</Link>
        <h1 className="page-title">Товар не найден</h1>
      </div>
    );
  }

  return (
    <div className="inner-page">
      <Breadcrumbs items={[
        { label: 'Главная', to: '/' },
        { label: 'Каталог', to: '/catalog' },
        { label: product.categoryLabel, to: product.categorySlug ? `/catalog/${product.categorySlug}` : '/catalog' },
        { label: product.title },
      ]} />
      <Link to={product.categorySlug ? `/catalog/${product.categorySlug}` : '/catalog'} className="back-link">
        ← {product.categoryLabel || 'В каталог'}
      </Link>

      <motion.div
        className="product-layout"
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE }}
      >
        <div className="product-gallery">
          {product.images.map((src) => {
            const imgSrc = src.startsWith('/upload/') ? `https://zorgtech.com${src}` : asset(src);
            return <img key={src} src={imgSrc} alt={product.title} />;
          })}
        </div>

        <div className="product-info">
          {product.tag && <p className="section-label">{product.tag}</p>}
          <div className="product-title-row">
            <h1 className="page-title">{product.title}</h1>
            <a href="tel:88005502645" className="btn btn-primary">
              {product.cta}
            </a>
          </div>
          {product.lead && <p className="page-lead">{product.lead}</p>}

          {product.features?.length > 0 && (
            <div className="feature-grid">
              {product.features.map((f) => (
                <div className="feature-item" key={f.title}>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          )}

          {product.apps?.length > 0 && (
            <div className="apps-block">
              <h2>Сферы применения</h2>
              <div className="apps-grid">
                {product.apps.map((a) => (
                  <div className="app-item" key={a.title}>
                    <h3>{a.title}</h3>
                    <p>{a.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
