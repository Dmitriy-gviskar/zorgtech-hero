import { Link } from 'react-router-dom';
import { useTitle } from '../lib/useTitle';

export default function NotFoundPage() {
  useTitle('Страница не найдена');

  return (
    <div className="notfound">
      <div className="notfound-num">404</div>
      <p className="notfound-sub">Страница не найдена</p>
      <Link to="/" className="btn btn-primary">На главную</Link>
    </div>
  );
}
