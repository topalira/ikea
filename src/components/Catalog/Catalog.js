import "./Catalog.css";

function Catalog() {
  const products = [
    { img: "/названабору1.png", title: "Шкіряна Класика" },
    { img: "/названабору2.png", title: "Нічна Стриманість" },
    { img: "/названабору3.png", title: "Оливковий Модерн" },
    { img: "/названабору4.png", title: "Дух Традицій" },
    { img: "/названабору5.png", title: "Лазурний Акцент" },
    { img: "/названабору6.png", title: "Кабінетний Етюд" },
    { img: "/названабору7.png", title: "Лорд Беж" },
    { img: "/названабору8.png", title: "Хмара Комфорту" },
    { img: "/названабору9.png", title: "Елегантний Штрих" },
    { img: "/названабору10.png", title: "Сірий Граніт" },
    { img: "/названабору11.png", title: "Скандинавський Сон" },
    { img: "/названабору12.png", title: "Сніжна Гавань" },
    { img: "/названабору13.png", title: "Смарагдовий Вінтаж" },
    { img: "/названабору14.png", title: "Робочий Простір" },
    { img: "/названабору15.png", title: "Вишневий Оксамит" },
    { img: "/названабору16.png", title: "М'ятна Хвиля" },
    { img: "/названабору17.png", title: "Легкість Буття" },
    { img: "/названабору18.png", title: "Ранкова Кава" },
  ];

  return (
    <section className="catalog" id='catalog'>
      <h2>Каталог</h2>

      <div className="catalog-grid">
        {products.map((product, index) => (
          <div className="catalog-item" key={index}>
            <img src={product.img} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Catalog;