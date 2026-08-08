import { Link } from 'react-router-dom';
import { asset } from '../lib/asset';
import { HERO_VIDEO, CATEGORIES, POPULAR, SOLUTIONS_TEASER, BLOG_TEASER, HOMEPAGE_STATS } from '../data/homepage';
import PROJECTS from '../data/projects';
import { useMeta } from '../lib/useTitle';

const IMG = (p) => asset(p);
const TEASER_PROJECTS = PROJECTS.slice(0, 4);

export default function HomePage() {
  useMeta(null, 'Zorgtech — российский производитель интерактивного оборудования. Сенсорные киоски, столы и терминалы для бизнеса, государства и образования. Проектируем, производим, программируем, обслуживаем.');
  return (<>
    {/* 1. Hero */}
    <section className="hero">
      <div className="hero-bg"><div className="hero-bg-inner"><video src={HERO_VIDEO} autoPlay muted playsInline loop /></div></div>
      <div className="hero-content">
        <p className="hero-eyebrow"><span className="hero-dot" />Производство полного цикла — от идеи до установки</p>
        <h1 className="hero-title">Интерактивное оборудование<br />полного цикла • Zorgtech</h1>
        <p className="hero-sub">Сенсорные киоски, столы и терминалы для бизнеса, государства и образования. Проектируем, производим, программируем, обслуживаем.</p>
        <div className="hero-btns"><Link to="/catalog" className="btn btn-primary">Смотреть продукцию</Link><Link to="/about" className="btn btn-outline">О компании</Link></div>
        <div className="hero-tags"><Link to="/catalog/napolnye" className="hero-tag">Напольные</Link><Link to="/catalog/stoly" className="hero-tag">Столы</Link><Link to="/catalog/nastennyy" className="hero-tag">Настенные</Link><Link to="/catalog/ulichnye" className="hero-tag">Уличные</Link><Link to="/catalog/detskie" className="hero-tag">Детские</Link></div>
      </div>
    </section>

    {/* 2. Продукция */}
    <section className="hp-sec"><div className="hp-inner">
      <p className="section-label">Продукция</p>
      <h2 className="section-heading">Широкая линейка оборудования</h2>
      <p className="section-sub">От компактных настенных терминалов до уличных всепогодных киосков — производим решение под любую задачу.</p>
      <div className="cat6">{CATEGORIES.map(c=><Link key={c.s} to={`/catalog/${c.s}`} className="cat6-card"><div className="cat6-img"><img src={IMG(c.i)} alt={c.t} loading="lazy" /></div><div className="cat6-body"><h3>{c.t}</h3><p>{c.d}</p><span className="cat6-link">Подробнее →</span></div></Link>)}</div>
    </div></section>

    {/* 3. Решения */}
    <section className="hp-sec hp-sec-gray"><div className="hp-inner">
      <p className="section-label">Готовые решения</p>
      <h2 className="section-heading">Софт и сценарии под ключ</h2>
      <p className="section-sub">Предустановленное ПО для гостиниц, музеев, медучреждений и госструктур — запускается сразу.</p>
      <div className="sol9">{SOLUTIONS_TEASER.map(s=><Link key={s.t} to="/solutions" className="sol9-card"><h3>{s.t}</h3><p>{s.d}</p></Link>)}</div>
    </div></section>

    {/* 4. Популярные товары */}
    <section className="hp-sec"><div className="hp-inner">
      <p className="section-label">Популярные товары</p>
      <h2 className="section-heading">Проверенные модели</h2>
      <div className="pop4">{POPULAR.map(p=><Link key={p.s} to={`/product/${p.s}`} className="pop4-card"><div className="pop4-img"><img src={IMG(p.i)} alt={p.t} loading="lazy" /></div><h3>{p.t}</h3><p>{p.d}</p><span className="pop4-price">{p.p}</span></Link>)}</div>
    </div></section>

    {/* 5. Фичеред-решение */}
    <section className="hp-sec hp-sec-gray"><div className="hp-inner">
      <p className="section-label">Готовое решение для музея</p>
      <h2 className="section-heading">Музейный Гид</h2>
      <p className="section-sub">Справочно-информационная система на базе сенсорных киосков. Посетители знакомятся с фондами и экспозициями через интерактивный терминал.</p>
      <div className="feat"><div className="feat-img"><img src={IMG('img/00ae102b371532dd9815384064246f98.jpg')} alt="Музейный Гид" loading="lazy" /></div><div className="feat-body"><h3>Что используется в решении</h3><ul><li>Интерактивный терминал <strong>Diamant 32 N</strong></li><li>ПО «Музейный Гид»</li></ul><Link to="/solutions" className="btn btn-primary">Все готовые решения</Link></div></div>
    </div></section>

    {/* 6. Проекты */}
    <section className="hp-sec"><div className="hp-inner">
      <p className="section-label">Проекты</p>
      <h2 className="section-heading">Оборудование в деле</h2>
      <p className="section-sub">1200+ реализованных проектов в аэропортах, музеях, банках и на производствах по всей стране.</p>
      <div className="projects-grid">{TEASER_PROJECTS.map((p, i) => (
        <Link key={i} to="/projects" className="proj-card" style={{backgroundImage:`url(${p.img})`,backgroundSize:'cover',backgroundPosition:'center'}}>
          <span className="proj-label">{p.meta} — {p.title}</span>
        </Link>
      ))}</div>
      <div className="cta-row" style={{marginTop:24}}><Link to="/projects" className="btn btn-secondary">Все проекты</Link></div>
    </div></section>

    {/* 7. Статистика */}
    <section className="hp-sec hp-sec-gray"><div className="hp-inner">
      <div className="hp-stats">{HOMEPAGE_STATS.map(s=><div key={s.l}><div className="stat-n">{s.n}</div><div className="stat-l">{s.l}</div></div>)}</div>
    </div></section>

    {/* 8. О компании */}
    <section className="hp-sec"><div className="hp-inner">
      <h2 className="section-heading">Уникальный российский производитель</h2>
      <p className="section-sub">Более 10 лет мы занимаем лидирующие позиции в области производства интерактивных систем самообслуживания. Собственное производство в Дубне, шоурум в Москве.</p>
      <div className="about3"><div><h3>Производство</h3><p>Вся продукция сделана в России. До 200 широкоформатных терминалов в месяц.</p></div><div><h3>Проекты</h3><p>Более 900 реализованных проектов. Спроектируем и изготовим решение под задачи заказчика.</p></div><div><h3>Программное обеспечение</h3><p>12 готовых решений. Разрабатываем специализированное ПО под требования.</p></div></div>
      <Link to="/about" className="btn btn-primary">О компании</Link>
    </div></section>

    {/* 9. Блог */}
    <section className="hp-sec hp-sec-gray"><div className="hp-inner">
      <p className="section-label">Блог</p>
      <h2 className="section-heading">Полезные материалы</h2>
      <div className="blog3">{BLOG_TEASER.map(b=><div key={b.t}><time>{b.d}</time><span className="blog3-cat">{b.c}</span><h3>{b.t}</h3></div>)}</div>
      <Link to="/blog" className="btn btn-primary">Все статьи</Link>
    </div></section>

    {/* 10. Финальный CTA */}
    <div className="fth"><div className="fth-inner">
      <div className="fth-left">
        <p className="fth-eye"><span className="fth-dot" />Российский производитель • 13 лет • 1200+ проектов</p>
        <h2 className="fth-head">Интерактивное оборудование<br />полного цикла</h2>
        <p className="fth-sub">Сенсорные киоски, столы и терминалы для бизнеса, государства и образования. Проектируем, производим, программируем, обслуживаем.</p>
        <div className="fth-btns"><Link to="/catalog" className="btn btn-primary">Смотреть продукцию</Link><a href="tel:88005502645" className="btn btn-secondary">8 800 550-26-45</a></div>
      </div>
      <div className="fth-tags"><Link to="/catalog/napolnye" className="fth-tag">Напольные</Link><Link to="/catalog/stoly" className="fth-tag">Столы</Link><Link to="/catalog/nastennyy" className="fth-tag">Настенные</Link><Link to="/catalog/ulichnye" className="fth-tag">Уличные</Link></div>
    </div></div>
  </>);
}