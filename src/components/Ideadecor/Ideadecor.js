import React from "react";
import './Ideadecor.css';

const IdeadecorBlock = ({ title, text }) => {
  return (
    <div className="ideadecor__block">
      <h2 className="ideadecor__title">{title}</h2>
      <p className="ideadecor__text">{text}</p>
    </div>
  );
};

const Ideadecor = () => {
  return (
    <section className="ideadecor">
      <div className="ideadecor__container">
        <IdeadecorBlock
          title="ІДЕЇ ДЛЯ ОФОРМЛЕННЯ"
          text={<>Сучасний інтер'єр — це баланс між функціональністю та естетикою. Скандинавський стиль із теплими акцентами зі
            шкіри та натуральної зелені створює відчуття затишку без зайвого перевантаження. Відкрите планування поєднує кухню та
            вітальню в єдиний живий простір, де кожна деталь має значення. Правильно підібране освітлення — підвісні світильники та
            відкриті лампи розжарювання — додає характеру та глибини. Рослини стають природними акцентами, що пом'якшують геометрію меблів
            і наповнюють кімнату свіжістю.</>}
        />
      </div>
    </section>
  );
};

export default Ideadecor;