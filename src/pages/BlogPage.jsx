import PageHeader from '../components/PageHeader';

const POSTS = [
  { year: '2026', title: 'Как выбрать сенсорный киоск для музея', text: 'Интерактивные экспозиции, дополненная реальность и квесты — на что обратить внимание.' },
  { year: '2026', title: 'Уличные терминалы: IP65 и всепогодная защита', text: 'Почему климатическое оборудование и яркость 2500 Кд имеют значение.' },
  { year: '2026', title: 'Сенсорные столы в образовании', text: 'От детских садов до университетов — оборудование, которое меняет учебный процесс.' },
];

export default function BlogPage() {
  return (
    <div className="inner-page">
      <PageHeader back="/" title="Блог" />

      <div className="posts">
        {POSTS.map((p) => (
          <div className="post" key={p.title}>
            <time>{p.year}</time>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
