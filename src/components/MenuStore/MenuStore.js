import './MenuStore.css';

const STORES = [
  { id: 1, city: 'Одеса', address: 'вул. Дерибасівська, 5', zip: '65000' },
  { id: 2, city: 'Київ', address: 'вул. Хрещатик, 22', zip: '01001' },
  { id: 3, city: 'Львів', address: 'пр. Свободи, 10', zip: '79000' },
  { id: 4, city: 'Кропивницький', address: 'вул. Велика Перспективна, 41', zip: '25000' },
];

export function MenuStore(props) {
  return (
    <div className={`store-finder ${props.isOpen ? 'open' : ''}`}>
      <button className="store-finder_close" onClick={props.onClose}>
        <img src={props.cross} alt="close" />
      </button>
      <h2>Знайдіть свій магазин</h2>

      <div className="store-finder_search">
        <span className="search-icon"><img src={props.lupa} alt="search" /></span>
        <input type="text" placeholder="Пошук" />
      </div>

      <div className="store-finder_list">
        {STORES.map(store => (
          <div key={store.id} className="store-finder_item">
            <div>
              <strong>{store.city}</strong>
              <p>{store.address}</p>
              <p>{store.zip}</p>
              <a href="#">Перейти на сторінку магазину</a>
              <p className="store-finder_hours">Час відкриття: 9:00</p>
            </div>
            <button className="store-finder_btn" onClick={props.onClose}>ОБРАТИ</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MenuStore;