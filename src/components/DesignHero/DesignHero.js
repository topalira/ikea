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
      <div className="designSection">
        <h2>втілюй свої ідеї</h2>
        <p>
          Перетворюй свої думки у стильний та сучасний дизайн.
          Комбінуй ідеї, експериментуй з деталями та створюй
          простір, який надихає щодня.
        </p>
      </div>
    </section>

  );
}

const cardDess = [
  {
    icon: designIcon,
    title: "СТВОРИ ДИЗАЙН",
    description: "habitasse consequats blandit",
  },
  {
    icon: combineIcon,
    title: "КОМБІНУЙ ІДЕЇ",
    description: "habitasse consequat egestas",
  },
  {
    icon: resultIcon,
    title: "РЕЗУЛЬТАТ",
    description: "habitasse tus consequat egestas blandit",
  },
];

export default DesignHero;