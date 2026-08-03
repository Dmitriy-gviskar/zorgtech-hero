import { motion } from 'motion/react';
import PageHeader from '../components/PageHeader';
import { useTitle } from '../lib/useTitle';

const EASE = [0.16, 1, 0.3, 1];
const reveal = (delay = 0) => ({
  initial: { y: 20, opacity: 0 },
  whileInView: { y: 0, opacity: 1 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, delay, ease: EASE },
});

const SOLUTIONS = [
  {
    num: '01',
    label: 'Гостиницы',
    title: 'ОтельКиоск',
    text: 'Гость регистрируется сам. Без очереди на ресепшн. Без бумажных анкет. Терминал проводит check-in, показывает карту отеля, рассказывает об услугах и принимает заказ трансфера.',
    features: ['Регистрация гостей', 'Карта отеля', 'Заказ услуг'],
  },
  {
    num: '02',
    label: 'Медицина',
    title: 'МедКиоск',
    text: 'Электронная очередь без талонов. Запись к врачу в два касания. Маршрут до кабинета на экране. База знаний с ответами на частые вопросы пациентов.',
    features: ['Электронная очередь', 'Запись к врачу', 'Навигация'],
  },
  {
    num: '03',
    label: 'Музеи',
    title: 'Музейный Гид',
    text: 'Экспонаты из запасников, которые никто никогда не видел. Дополненная реальность поверх витрин. Аудиогид. Интерактивные квесты для детей и взрослых.',
    features: ['Экспозиции', 'Дополненная реальность', 'Аудиогид'],
  },
  {
    num: '04',
    label: 'Госучреждения',
    title: 'ГосИнформ',
    text: 'Доступ к госуслугам без очереди в окошко. Информационные табло. Навигация по этажам и кабинетам. Приём документов через терминал.',
    features: ['Госуслуги', 'Табло', 'Навигация'],
  },
  {
    num: '05',
    label: 'Навигация',
    title: 'Logicmap',
    text: '3D-карта торгового центра, аэропорта или кампуса. Посетитель находит нужный магазин или выход за секунды. Маршрут строится автоматически.',
    features: ['3D-навигация', 'Построение маршрута', 'Поиск'],
  },
  {
    num: '06',
    label: 'Офисы',
    title: 'ОфисКиоск',
    text: 'Пропускная система. Бронирование переговорных. Корпоративная навигация. Сотрудник проводит гостя через терминал, не отвлекаясь от работы.',
    features: ['Пропуска', 'Переговорные', 'Навигация'],
  },
];

export default function SolutionsPage() {
  useTitle('Готовые решения');

  return (
    <div className="inner-page">
      <PageHeader
        back="/"
        label="Готовые решения"
        title={<>Софт, который уже<br />работает</>}
        lead="Предустановленное программное обеспечение. Не нужно разрабатывать с нуля — запускается сразу после установки оборудования."
      />

      <div className="solutions-list">
        {SOLUTIONS.map((s, i) => (
          <motion.div className="solution" key={s.title} {...reveal(0.05 * i)}>
            <div className="solution-visual">{s.num}</div>
            <div className="solution-text">
              <p className="solution-label">{s.label}</p>
              <h2>{s.title}</h2>
              <p>{s.text}</p>
              <div className="solution-features">
                {s.features.map((f) => (
                  <span className="solution-feature" key={f}>{f}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
