import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';

const EASE = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: EASE },
});

const STATS = [
  { num: '13', label: 'лет на рынке' },
  { num: '1200+', label: 'проектов' },
  { num: '70+', label: 'сервисных центров' },
  { num: '82', label: 'модели' },
];

const STORY = [
  {
    title: 'Производство полного цикла',
    text: 'Zorgtech проектирует, производит и программирует сенсорные киоски и интерактивные столы с 2010 года. Собственное производство в Дубне. Шоурум в Москве. От идеи до установки под ключ.',
  },
  {
    title: 'Материалы',
    text: 'Закалённое тонированное стекло. Металл. Дерево. Любые материалы под задачу. Антивандальное исполнение для общественных пространств. Запатентованный дизайн всех моделей.',
  },
  {
    title: 'Программное обеспечение',
    text: '25+ готовых решений для гостиниц, музеев, клиник и госструктур. Разрабатываем специализированное ПО под требования заказчика. Интеграция с существующими системами.',
  },
  {
    title: 'Доставка и сервис',
    text: 'Доставка по всей России, Беларуси и Казахстану. 70+ авторизированных сервисных центров в крупных городах. Гарантийное и постгарантийное обслуживание. Сертификаты на всю продукцию.',
  },
];

export default function AboutPage() {
  return (
    <div className="inner-page">
      <PageHeader back="/" title="О компании" />

      <div className="stats">
        {STATS.map((s, i) => (
          <motion.div className="stat-num" key={s.label} {...reveal(0.05 * i)}>
            {s.num}
            <span>{s.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="story">
        {STORY.map((s, i) => (
          <motion.div key={s.title} {...reveal(0.05 * i)}>
            <h2>{s.title}</h2>
            <p>{s.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
