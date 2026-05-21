import React from "react";
import './Novelty.css';

const NoveltyItem = ({ image, title, index }) => {
  return (
    <div className={`novelty__item novelty__item--${index}`}>
      <img src={image} alt="" className="novelty__image" />
      <div className="novelty__label">{title}</div>
    </div>
  );
};

const Novelty = () => {
  return (
    <section className="novelty">
      <h2 className="novelty__title">НОВИНКИ</h2>
      <div className="novelty__container">
        <NoveltyItem
          image="/nov1.jpg"
          index={1}
          title={<>Живі рослини та натуральне дерево — основа скандинавського затишку у вітальні.</>}
        />
        <NoveltyItem
          image="/nov2.jpg"
          index={2}
          title={<>М'які текстури та пастельні відтінки створюють атмосферу спокою та домашнього тепла.</>}
        />
        <NoveltyItem
          image="/nov3.jpg"
          index={3}
          title={<>Кам'яна стіна та камін як центр кімнати — класика, що ніколи не виходить з моди.</>}
        />
      </div>
    </section>
  );
};

export default Novelty;