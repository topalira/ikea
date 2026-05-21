import React from "react";
import "./Advice.css";

const AdviceSection = ({ image, text, highlight }) => {
  return (
    <div className="advice_section">
      <div className={`advice_imageWrapper ${highlight ? "advice_highlight" : ""}`}>
        <img src={image} alt="interior" />
      </div>

      <div className="advice_info">
        <h2>ДУША ПРОСТОРУ</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

const Advice = () => {
  return (
    <div className="advice_container">
      <h1>ІДЕЇ</h1>

      <AdviceSection
        image="/advice1.jpg"
        text="Відкрите планування з кухнею та вітальнею в єдиному просторі — це сучасне рішення для тих, хто цінує світло та свободу руху. Шкіряний диван, чорні акценти та живі рослини створюють гармонію тепла й стилю."
        highlight={true}
      />

      <AdviceSection
        image="/advice2.jpg"
        text="Бохо-шик у вітальні — це поєднання теплої палітри, етнічного килима та декоративних плетених панно на стіні. Натуральні матеріали, рослини та вінтажні акценти роблять простір живим і неповторним. Кожен елемент розповідає свою історію та запрошує до відпочинку."
      />
    </div>
  );
};

export default Advice;