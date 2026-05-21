import React from "react";
import "./HomeGuides.css";

export function HomeGuides() {
  const guides = [
    {
      id: 1,
      image: "/homeguides1.png",
      title: "ЯК ОБРАТИ СТИЛЬ",
      text: "Знайдіть стиль, який зробить ваш дім затишним та комфортним. Мінімалізм, скандинавський чи сучасний інтер’єр — обирайте те, що підходить саме вам.",
    },
    {
      id: 2,
      image: "/homeguides2.png",
      title: "НАШІ ПОРАДИ",
      text: "Практичні рішення для організації простору, зручного зберігання та гармонійного декору. Створіть дім, у який хочеться повертатися щодня.",
    },
    {
      id: 3,
      image: "/homeguides3.png",
      title: "ЯК СПЛАНУВАТИ",
      text: "Плануйте інтер’єр легко: продумуйте меблі, освітлення та деталі, щоб кожен куточок вашого дому був функціональним і стильним.",
    },
  ];

  return (
    <section className="homeguides">
      <div className="homeguides-container">
        {guides.map((guide) => (
          <div className="homeguides-card" key={guide.id}>
            <img
              src={guide.image}
              alt={guide.title}
              className="homeguides-image"
            />

            <div className="homeguides-content">
              <h3>{guide.title}</h3>
              <p>{guide.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomeGuides;