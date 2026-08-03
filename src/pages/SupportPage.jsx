import PageHeader from '../components/PageHeader';

export default function SupportPage() {
  return (
    <div className="inner-page">
      <PageHeader back="/" title="Поддержка" />

      <div className="sec">
        <h2>Телефон</h2>
        <p><a href="tel:88005502645">8 800 550-26-45</a></p>
        <p className="muted">Звонок по России бесплатный</p>
      </div>
      <div className="sec">
        <h2>Почта</h2>
        <p><a href="mailto:support@zorgtech.ru">support@zorgtech.ru</a></p>
      </div>
      <div className="sec">
        <h2>Драйверы и ПО</h2>
        <p className="muted">Центр обновления драйверов и программного обеспечения для всех моделей терминалов.</p>
      </div>
      <div className="sec">
        <h2>Гарантия</h2>
        <p className="muted">72 часа — максимальное время решения вопроса. 70+ сервисных центров по всей стране.</p>
      </div>

      <a href="tel:88005502645" className="btn btn-primary">Позвонить в поддержку</a>
    </div>
  );
}
