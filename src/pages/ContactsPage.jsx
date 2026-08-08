import PageHeader from '../components/PageHeader';
import { useTitle } from '../lib/useTitle';

export default function ContactsPage() {
  useTitle('Контакты');

  return (
    <div className="inner-page">
      <PageHeader back="/" title="Контакты" />

      <div className="contact-blocks">
        <div className="contact-block">
          <h2>Отдел продаж</h2>
          <p><a href="tel:88005502645">8 800 550-26-45</a></p>
          <p className="muted">Звонок по России бесплатный</p>
          <p><a href="mailto:sale@zorgtech.ru">sale@zorgtech.ru</a></p>
        </div>

        <div className="contact-block">
          <h2>Поддержка</h2>
          <p><a href="tel:88005502645">8 800 550-26-45</a></p>
          <p><a href="mailto:support@zorgtech.ru">support@zorgtech.ru</a></p>
        </div>

        <div className="contact-block">
          <h2>Производство</h2>
          <p className="muted">Московская область, г. Дубна, ул. Университетская, д. 11, стр. 29А</p>
        </div>

        <div className="contact-block">
          <h2>Шоурум</h2>
          <p className="muted">119530, г. Москва, Очаковское ш., 28с2, БЦ Дорохофф</p>
        </div>

        <div className="contact-block">
          <h2>На карте</h2>
          <div className="contact-map">
            <iframe
              title="Zorgtech на карте"
              src="https://yandex.ru/map-widget/v1/?ll=37.173936%2C56.739423&z=12&pt=37.173936,56.739423,pm2rdm~37.524438,55.701464,pm2rdm"
              width="100%"
              height="320"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>

        <div className="contact-block">
          <h2>Напишите нам</h2>
          <form className="cform" action="https://formspree.io/f/example" method="POST">
            <label className="sr-only" htmlFor="cf-name">Имя</label>
            <input type="text" id="cf-name" name="name" placeholder="Имя" required />
            <label className="sr-only" htmlFor="cf-phone">Телефон</label>
            <input type="tel" id="cf-phone" name="phone" placeholder="Телефон" required />
            <label className="sr-only" htmlFor="cf-message">Сообщение</label>
            <textarea id="cf-message" name="message" placeholder="Сообщение" rows="3" />
            <button type="submit" className="btn btn-primary">Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}