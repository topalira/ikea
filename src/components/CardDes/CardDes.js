import React from "react";
import "./CardDes.css";

export function CardDes({ icon, title, description, line }) {
  return (
    <div className="cardDes">
      <img className="cardDes_icon" src={icon} alt={title} />
      <div className="carddes_line">{line}</div>
      <p className="cardDes_title">{title}</p>
      <p className="cardDes_description">{description}</p>
    </div>
  );
}

export default CardDes;