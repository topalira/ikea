import React from "react";
import "./Interiorlayout.css";

const InteriorlayoutSection = ({ image, text, highlight }) => {
  return (
    <div className="interiorlayout__section">
      <div className={`interiorlayout__imageWrapper ${highlight ? "interiorlayout__highlight" : ""}`}>
        <img src={image} alt="interior" />
      </div>
      <div className="interiorlayout__info">
        <h2>ДУША ПРОСТОРУ</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Interiorlayout = () => {
  return (
    <div className="interiorlayout__container">
      <h1>ІДЕЇ</h1>
      <InteriorlayoutSection
        image="/inter1.jpg"
        text="Відкрите планування з кухнею та вітальнею в єдиному просторі — це сучасне рішення для тих, хто цінує світло та свободу руху. Шкіряний диван, чорні акценти та живі рослини створюють гармонію тепла й стилю."
        highlight={true}
      />
      <InteriorlayoutSection
        image="/inter2.jpg"
        text="Бохо-шик у вітальні — це поєднання теплої палітри, етнічного килима та декоративних плетених панно на стіні. Натуральні матеріали, рослини та вінтажні акценти роблять простір живим і неповторним. Кожен елемент розповідає свою історію та запрошує до відпочинку."
      />
    </div>
  );
};

export default Interiorlayout;