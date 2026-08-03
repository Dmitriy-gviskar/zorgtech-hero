import PageHeader from '../components/PageHeader';
import { useTitle } from '../lib/useTitle';

export default function DeliveryPage() {
  useTitle('Доставка и сервис');

  return (
    <div className="inner-page">
      <PageHeader back="/" title="Доставка и сервис" />

      <div className="sec">
        <h2>Доставка</h2>
        <p className="muted">Осуществляем доставку по всей территории России, Беларуси и Казахстана, а также в страны ближнего и дальнего зарубежья. Транспортная компания подбирается под габариты и вес оборудования.</p>
      </div>
      <div className="sec">
        <h2>Сервисные центры</h2>
        <p className="muted">70+ авторизированных сервисных центров в крупных городах. Гарантийное и постгарантийное обслуживание по всей территории поставок.</p>
      </div>
      <div className="sec">
        <h2>Гарантия</h2>
        <p className="muted">На все модели есть сертификаты. Гарантийное обслуживание производится по всей территории поставок. Центр обновления драйверов и ПО.</p>
      </div>
      <div className="sec">
        <h2>Аренда</h2>
        <p className="muted">Предоставляем сенсорные киоски и столы в аренду для выставок, конференций и временных проектов.</p>
      </div>

      <a href="tel:88005502645" className="btn btn-primary">Уточнить доставку</a>
    </div>
  );
}
