import React from "react";
import './Cozyset.css';

const CozysetItem = ({ image, title, index }) => {
  return (
    <div className={`cozyset__item cozyset__item--${index}`}>
      <img src={image} alt="" className="cozyset__image" />
      <div className="cozyset__label">{title}</div>
    </div>
  );
};

const Cozyset = () => {
  return (
    <section className="cozyset">
      <h2 className="cozyset__title">ЗАТИШНІ НАБОРИ</h2>
      <div className="cozyset__container">
        <CozysetItem
          image="/coz1.jpg"
          index={1}
          title={<>Мінімалістичний декор для спальні: одна ваза, одна гілка — і атмосфера вже інша.</>}
        />
        <CozysetItem
          image="/coz2.jpg"
          index={2}
          title={<>М'яке крісло у сонячному куті — ідеальне місце для ранкової кави та читання.</>}
        />
        <CozysetItem
          image="/coz3.jpg"
          index={3}
          title={<>Темно-синій текстиль та приглушене світло створюють відчуття глибокого відпочинку.</>}
        />
      </div>
    </section>
  );
};

export default Cozyset;