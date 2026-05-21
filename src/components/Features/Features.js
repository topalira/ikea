import React from "react";
import "./Features.css";

const FeaturesCard = ({ icon, title, text }) => {
  return (
    <div className="features__card">
      <img className="features__icon" src={icon} alt={title} />
      <h3 className="features__title">{title}</h3>
      <p className="features__text">{text}</p>
    </div>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="features__container">
        <FeaturesCard
          icon="/delivery.png"
          title="Доставка"
          text="Доставляємо замовлення по всій Україні. Надійна упаковка гарантує збереження кожного предмету набору."
        />
        <FeaturesCard
          icon="/payment.png"
          title="Оплата"
          text="Зручна оплата онлайн або при отриманні. Підтримуємо всі популярні платіжні системи та картки."
        />
        <FeaturesCard
          icon="/organization.png"
          title="Організація"
          text="Кожен набір укомплектований та готовий до використання. Продумане зберігання — без зайвого клопоту."
        />
        <FeaturesCard
          icon="/planning.png"
          title="Планування"
          text="Допоможемо підібрати набір під ваш простір та стиль. Консультація дизайнера — безкоштовно."
        />
      </div>
    </section>
  );
};

export default Features;