import React from "react";
import "./Productgroup.css";

const ProductgroupItem = ({ image, index }) => {
  return (
    <div
      className={`product-group__item product-group__item--${index}`}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};

const Productgroup = () => {
  return (
    <section className="product-group">
      <h2 className="product-group__title">ТОВАРИ З ОДНОГО НАБОРУ</h2>
      <p className="product-group__p">Набори столових приборів — це не просто функціональність, а деталь, що завершує образ вашого столу. Мідні, золоті та срібні відтінки гармонійно поєднуються з будь-якою посудою. Ідеально для щоденного використання та святкової сервіровки. Кожен предмет у наборі виготовлений з якісних матеріалів і зберігає естетику роками. Компактне зберігання у висувному ящику — порядок на кухні без зусиль.</p>

      <div className="product-group__container">
        <ProductgroupItem image="/product-group1.jpg" index={1} />
        <ProductgroupItem image="/product-group2.jpg" index={2} />
        <ProductgroupItem image="/product-group3.jpg" index={3} />
        <ProductgroupItem image="/product-group4.jpg" index={4} />
      </div>
    </section>
  );
};

export default Productgroup;