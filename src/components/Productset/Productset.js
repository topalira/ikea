import React from "react";
import './Productset.css';

const ProductsetItem = ({ image, index }) => {
  return (
    <div
      className={`productset__item productset__item--${index}`}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};

const Productset = () => {
  return (
    <section className="productset">
      <h2 className="productset__title">ТОВАРИ З ОДНОГО НАБОРУ</h2>
      <p className="productset__p">Стильні деталі для вітальні — від крісла до декоративних полиць. Кожен елемент набору підібраний так, щоб створити єдиний теплий образ кімнати. Натуральні матеріали, спокійні відтінки та продуманий декор перетворюють звичайний простір на місце, де хочеться бути.</p>

      <div className="productset__container">
        <ProductsetItem image="/productset1.jpg" index={1} />
        <ProductsetItem image="/productset2.jpg" index={2} />
        <ProductsetItem image="/productset3.jpg" index={3} />
        <ProductsetItem image="/productset4.jpg" index={4} />
      </div>
    </section>
  );
};

export default Productset;