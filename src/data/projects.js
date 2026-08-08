import projectImages from './projectImages.json';

const PROJECTS = [
  // Page 1
  { meta: 'Безопасность', title: 'Охрана труда — терминалы обучения и контроля', slug: 'охрана-труда-терминалы-обучения-и-контроля' , oldSlug: 'kak-my-razgruzili-sluzhbu-okhrany-truda-terminaly-dlya-obucheniya-i-kontrolya' }
  { meta: 'Банки', title: 'Новые стандарты банковского обслуживания', slug: 'новые-стандарты-банковского-обслуживания' , oldSlug: 'novye-standarty-bankovskogo-obsluzhivaniya' }
  { meta: 'Медицина', title: 'Оснащение новых поликлиник Москвы', slug: 'оснащение-новых-поликлиник-москвы' , oldSlug: 'masshtabnyy-proekt-po-osnashcheniyu-novykh-poliklinik-g-moskvy-beskontaktnymi-dezinfektorami-i-inter' }
  { meta: 'Промышленность', title: 'АО «Силовые машины»', slug: 'ао-силовые-машины' , oldSlug: 'kompleksnoe-osnashchenie-rabochikh-mest-interaktivnymi-kioskami-na-zavodakh-ao-silovye-mashiny' }
  { meta: 'Городская среда', title: 'Навигация по Раменскому городскому парку', slug: 'навигация-по-раменскому-городскому-парку' , oldSlug: 'interaktivnaya-navigatsiya-po-ramenskomu-gorodskomu-parku' }
  { meta: 'Нефтегаз', title: 'Телемедицина для месторождений', slug: 'телемедицина-для-месторождений' , oldSlug: 'interaktivnye-kioski-v-telemeditsine-dlya-neftyanykh-i-gazovykh-mestorozhdeniy' }
  { meta: 'Образование', title: 'Дезинфекторы для школ', slug: 'дезинфекторы-для-школ' , oldSlug: 'obespechenie-beskontaktnymi-dezinfektorami-obrazovatelnykh-uchrezhdeniy' }
  { meta: 'Транспорт', title: 'Интерактивный проект к годовщине МЦД', slug: 'интерактивный-проект-к-годовщине-мцд' , oldSlug: 'interaktivnyy-proekt-k-godovshchine-otkrytiya-mtsd-v-g-moskva' }
  { meta: 'Транспорт', title: 'Автовокзал «Саларьево»', slug: 'автовокзал-саларьево' , oldSlug: 'avtomatizatsiya-avtovokzala-salarevo-dlya-mosgortransa' }
  { meta: 'Культура', title: 'Музей «Государева Дорога»', slug: 'музей-государева-дорога' , oldSlug: 'sozdanie-interaktivnoy-ekspozitsii-muzeya-gosudareva-doroga-v-khramovom-komplekse-zavidovo' }
  { meta: 'Промышленность', title: 'Защищённый браузер для Акрихин', slug: 'защищённый-браузер-для-акрихин' , oldSlug: 'sozdanie-bezopasnogo-dostupa-k-korporativnomu-portalu-kompanii-akrikhin-na-sensornykh-kioskakh-chere' }
  { meta: 'Промышленность', title: 'Nordgold — автоматизация процессов', slug: 'nordgold-автоматизация-процессов' , oldSlug: 'avtomatizatsiya-promyshlennykh-protsessov-v-mezhdunarodnoy-zolotodobyvayushchey-kompanii-nordgold' }
  // Page 2
  { meta: 'IT / Телеком', title: 'Онлайн-портал Москва — Тула', slug: 'онлайн-портал-москва-тула' , oldSlug: 'onlayn-portal-mezhdu-moskvoy-i-tuloy' }
  { meta: 'Промышленность', title: 'Кадровый учёт в «Группе ГАЗ»', slug: 'кадровый-учёт-в-группе-газ' , oldSlug: 'gruppa-gaz' }
  { meta: 'Ритейл', title: 'Интерактивный каталог «Бронницкий ювелир»', slug: 'интерактивный-каталог-бронницкий-ювелир' , oldSlug: 'interaktivnyy-katalog-v-seti-magazinov-bronnitskiy-yuvelir' }
  { meta: 'Промышленность', title: 'Автоматизация фабрики «Донской табак»', slug: 'автоматизация-фабрики-донской-табак' , oldSlug: 'avtomatizatsiya-fabriki-donskoy-tabak' }
  { meta: 'Ритейл', title: 'Навигация в ТК «Гранд»', slug: 'навигация-в-тк-гранд' , oldSlug: 'interaktivnaya-navigatsiya-v-mebelnom-torgovom-komplekse-grand' }
  { meta: 'Недвижимость', title: 'MR Group — лояльность клиентов', slug: 'mr-group-лояльность-клиентов' , oldSlug: '6-povyshenie-loyalnosti-klientov-v-ofisakh-prodazh-obektov-nedvizhimosti-kompanii-mr-group' }
  { meta: 'Туризм', title: 'Туристический гид в Туле', slug: 'туристический-гид-в-туле' , oldSlug: 'ulichnye-sensornye-terminaly-s-turisticheskim-gidom-dlya-tuly' }
  { meta: 'Промышленность', title: 'Терминалы для заводов Henkel', slug: 'терминалы-для-заводов-henkel' , oldSlug: 'sensornye-terminaly-dlya-zavodov-henkel-v-rossii' }
  { meta: 'Образование', title: 'Корпоративный университет ТМК2U', slug: 'корпоративный-университет-тмк2u' , oldSlug: 'interaktivnye-terminaly-dlya-korporativnogo-universiteta-trubnoy-metallurgicheskoy-kompanii' }
  { meta: 'Ритейл', title: 'Программа лояльности «Эссен»', slug: 'программа-лояльности-эссен' , oldSlug: 'interaktivnye-kioski-dlya-programmy-loyalnosti-v-federalnoy-seti-supermarketov-essen' }
  { meta: 'IT / Телеком', title: 'Инфокиоски для офиса Ростелеком', slug: 'инфокиоски-для-офиса-ростелеком' , oldSlug: 'informatsionnye-kioski-dlya-tsentralnogo-ofisa-kompanii-rostelekom' }
  { meta: 'Образование', title: 'Гид Учащегося в Ярославле', slug: 'гид-учащегося-в-ярославле' , oldSlug: 'gid-uchashchegosya-dlya-uchilishcha-olimpiyskogo-rezerva' }
  // Page 3
  { meta: 'Культура', title: 'Музейный Гид для Дома русского зарубежья', slug: 'музейный-гид-для-дома-русского-зарубежья' },
  { meta: 'Транспорт', title: 'Навигация для аэропортов Краснодара и Анапы', slug: 'навигация-для-аэропортов-краснодара-и-анапы' },
  { meta: 'Ритейл', title: 'Навигация для МТК «5 Планет»', slug: 'навигация-для-мтк-5-планет' },
  { meta: 'Образование', title: 'Академия цифровых технологий СПб', slug: 'академия-цифровых-технологий-спб' },
  { meta: 'Наука', title: 'Новая модель сенсорного стола для ОИЯИ', slug: 'новая-модель-сенсорного-стола-для-оияи' },
  { meta: 'Спорт', title: 'Киоски для фитнес-индустрии', slug: 'киоски-для-фитнес-индустрии' },
  { meta: 'Культура', title: 'Парк «Зарядье»', slug: 'парк-зарядье' },
  { meta: 'Ритейл', title: 'Терминал для продажи билетов в кинотеатре', slug: 'терминал-для-продажи-билетов-в-кинотеатре' },
  { meta: 'Медицина', title: 'Киоски для ММК Сколково', slug: 'киоски-для-ммк-сколково' },
  { meta: 'Недвижимость', title: 'ЖК «Новые Ватутинки»', slug: 'жк-новые-ватутинки' },
  { meta: 'Культура', title: 'Музей «Собрание» и интерактивные столы', slug: 'музей-собрание-и-интерактивные-столы' },
  { meta: 'Авто', title: 'Zorgtech и Mercedes', slug: 'zorgtech-и-mercedes' },
  // Page 4
  { meta: 'Транспорт', title: 'Аэропорт Шереметьево', slug: 'аэропорт-шереметьево' },
  { meta: 'Транспорт', title: 'Аэропорт Домодедово', slug: 'аэропорт-домодедово' },
  { meta: 'Ритейл', title: 'Сенсорные киоски для Amway', slug: 'сенсорные-киоски-для-amway' },
  { meta: 'Банки', title: 'Молодёжный корнер Сбербанка', slug: 'молодёжный-корнер-сбербанка' },
  { meta: 'Образование', title: 'Киоски для Сретенской духовной семинарии', slug: 'киоски-для-сретенской-духовной-семинарии' },
  { meta: 'Культура', title: 'Музей техники Вадима Задорожного', slug: 'музей-техники-вадима-задорожного' },
  { meta: 'Культура', title: 'Виртуальная примерочная для Музея сословий', slug: 'виртуальная-примерочная-для-музея-сословий' },
  { meta: 'Культура', title: 'Интерактивные проекты с галереей Глазунова', slug: 'интерактивные-проекты-с-галереей-глазунова' },
  { meta: 'Образование', title: 'Киоски для Университета Синергия', slug: 'киоски-для-университета-синергия' },
  { meta: 'Культура', title: 'Совместный проект со Студией Никитина', slug: 'совместный-проект-со-студией-никитина' },
  { meta: 'Медицина', title: 'Киоски для обучения студентов-медиков', slug: 'киоски-для-обучения-студентов-медиков' },
  { meta: 'Банки', title: 'Киоски для АО «КБ ДельтаКредит»', slug: 'киоски-для-ао-кб-дельтакредит' },
];

// Sequential order matches listing pages 1:1
const projects = PROJECTS.map((p, i) => ({
  ...p,
  img: `/zorgtech-hero/img/projects/${String(i).padStart(2, '0')}.jpg`,
  text: projectImages[i]?.title || p.title,
}));

export default projects;

export const PROJECT_STATS = [
  { num: '1200+', label: 'проектов' },
  { num: '70+',   label: 'сервисных центров' },
  { num: '3',     label: 'страны' },
  { num: '13',    label: 'лет опыта' },
];
