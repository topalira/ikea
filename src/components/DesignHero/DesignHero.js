import React from "react";
import { CardDes } from "../CardDes/CardDes";
import "./DesignHero.css";

import designIcon from "../../design-icon.png";
import combineIcon from "../../combine-icon.png";
import resultIcon from "../../result-icon.png";

export function DesignHero() {
  return (
    <section className="gesignhero">
      <p className="gesign_heading">
        створи дизайн<br />своєї мрії
      </p>

      <div className="gesign_cards">
        {cardDess.map((card) => (
          <CardDes
            icon={card.icon}
            line={card.line}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
      <div className="gesign_bottom">
        <h2 className="gesign_bottom_title">ВТІЛЮЙ СВОЇ ІДЕЇ</h2>
        <p className="gesign_bottom_text">
          Обирайте готові шаблони кімнат або завантажуйте власний план будинку. 
          Експериментуйте з текстурами, комбінуйте стилі та дивіться, як меблі
          виглядатимуть у вашій оселі ще до моменту покупки.
        </p>
      </div>
    </section>
  );
}

const cardDess = [
  {
    icon: designIcon,
    title: "СТВОРИ ДИЗАЙН",
    description: "Плануй простір у 3D та обирай меблі під розміри своєї кімнати",
  },
  {
    icon: combineIcon,
    title: "КОМБІНУЙ ІДЕЇ",
    description: "Додавай товари BN Home, експериментуй з декором та світлом",
  },
  {
    icon: resultIcon,
    title: "РЕЗУЛЬТАТ",
    description: "Зберігай готовий проєкт або замовляй весь комплект",
  },
];

export default DesignHero;