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
  { num: '1200+', label: 'проектов' },
  { num: '70+', label: 'сервисных центров' },
  { num: '3', label: 'страны' },
  { num: '13', label: 'лет опыта' },
];

const PROJECTS = [
  { num: '01', meta: 'Транспорт', title: 'Аэропорт Курумоч', text: 'Стойки регистрации и информационные терминалы в зоне вылета.' },
  { num: '02', meta: 'Культура', title: 'Музей Государственной Думы', text: 'Интерактивная экспозиция с архивными документами и мультимедиа.' },
  { num: '03', meta: 'Транспорт', title: 'Автовокзал Саларьево', text: 'Автоматизация продажи билетов и информирования пассажиров для Мосгортранса.' },
  { num: '04', meta: 'Промышленность', title: 'АО «Силовые машины»', text: 'Оснащение рабочих мест интерактивными киосками на производстве.' },
  { num: '05', meta: 'Медицина', title: 'Поликлиники Москвы', text: 'Масштабный проект: бесконтактные дезинфекторы и интерактивные столы в новых поликлиниках.' },
  { num: '06', meta: 'Промышленность', title: 'Nordgold', text: 'Автоматизация промышленных процессов в международной золотодобывающей компании.' },
  { num: '07', meta: 'Культура', title: 'Музей «Государева Дорога»', text: 'Создание интерактивной экспозиции в храмовом комплексе «Завидово».' },
  { num: '08', meta: 'Нефтегаз', title: 'Телемедицина для месторождений', text: 'Интерактивные киоски для удалённых медицинских консультаций на нефтяных и газовых объектах.' },
  { num: '09', meta: 'Банки', title: 'Новые стандарты обслуживания', text: 'Внедрение современных стандартов банковского обслуживания через сенсорные терминалы.' },
  { num: '10', meta: 'Образование', title: 'Безопасный доступ', text: 'Обеспечение бесконтактными дезинфекторами образовательных учреждений.' },
];

export default function ProjectsPage() {
  return (
    <div className="inner-page">
      <PageHeader
        back="/"
        label="Проекты"
        title={<>Оборудование<br />в деле</>}
        lead="Наши терминалы работают в аэропортах, музеях, на заводах и в поликлиниках по всей стране."
      />

      <div className="stat-line">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            {s.num}
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <motion.div className="project" key={p.title} {...reveal(0.03 * i)}>
            <div className="project-visual">{p.num}</div>
            <div>
              <p className="project-meta">{p.meta}</p>
              <h2>{p.title}</h2>
              <p>{p.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
