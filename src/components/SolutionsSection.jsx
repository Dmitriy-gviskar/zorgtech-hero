import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

const EASE = [0.16, 1, 0.3, 1];
const MotionLink = motion.create(Link);
const reveal = (delay = 0) => ({
  initial: { y: 24, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: EASE },
});

const SOLUTIONS = [
  { title: 'ОтельКиоск', desc: 'Регистрация гостей, информация об услугах, карта отеля, заказ трансфера.' },
  { title: 'МедКиоск', desc: 'Электронная очередь, запись к врачу, маршрутизация по клинике.' },
  { title: 'Музейный Гид', desc: 'Интерактивные экспозиции, дополненная реальность, квесты.' },
  { title: 'ГосИнформ', desc: 'Госуслуги, информационные табло, навигация по учреждению.' },
  { title: 'Logicmap', desc: '3D-навигация для ТЦ, аэропортов и больших пространств.' },
  { title: 'ОфисКиоск', desc: 'Пропускная система, бронирование переговорных, навигация.' },
];

export default function SolutionsSection() {
  return (
    <section className="section section-alt" id="solutions">
      <motion.p className="section-label" {...reveal(0)}>
        Готовые решения
      </motion.p>
      <motion.h2 className="section-heading" {...reveal(0.05)}>
        Софт и сценарии под ключ
      </motion.h2>
      <motion.p className="section-sub" {...reveal(0.1)}>
        Предустановленное ПО для гостиниц, музеев, медучреждений и
        госструктур — запускается сразу.
      </motion.p>

      <div className="solutions-grid">
        {SOLUTIONS.map((s, i) => (
          <MotionLink to="/solutions" className="sol-card" key={s.title} {...reveal(0.1 + i * 0.05)}>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </MotionLink>
        ))}
      </div>
    </section>
  );
}
