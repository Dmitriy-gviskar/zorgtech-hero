import Breadcrumbs from '../components/Breadcrumbs';
import { useTitle } from '../lib/useTitle';
import { Link } from 'react-router-dom';

export default function RentalPage() {
  useTitle('Аренда');

  return (
    <div className="inner-page">
      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Аренда' }]} />
      <h1 className="page-title">Аренда оборудования</h1>
      <p className="page-lead">Предоставляем сенсорные киоски и столы в аренду для выставок, конференций и временных проектов.</p>

      <div className="story" style={{marginTop:32}}>
        <div>
          <h2>Для мероприятий</h2>
          <p>Интерактивные терминалы для выставок, форумов и презентаций. Привлекают внимание посетителей и помогают донести информацию.</p>
        </div>
        <div>
          <h2>Для тестирования</h2>
          <p>Возможность протестировать оборудование перед покупкой. Оцените удобство и функциональность в реальных условиях.</p>
        </div>
        <div>
          <h2>Гибкие условия</h2>
          <p>Аренда от 1 дня. Настройка ПО под ваши задачи. Техническая поддержка на весь период аренды.</p>
        </div>
        <div>
          <h2>Доставка и монтаж</h2>
          <p>Доставляем и устанавливаем оборудование на площадке. Проводим инструктаж персонала.</p>
        </div>
      </div>

      <div style={{marginTop:48,textAlign:'center'}}>
        <a href="tel:88005502645" className="btn btn-primary">8 800 550-26-45</a>
        <span style={{margin:'0 16px',color:'rgba(0,0,0,0.4)'}}>или</span>
        <a href="mailto:sale@zorgtech.ru" className="btn btn-secondary">sale@zorgtech.ru</a>
      </div>
    </div>
  );
}
