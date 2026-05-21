import React, { useRef, useState } from "react";
import './ProductsRooms.css';

const Track = ({ data }) => {
  const trackRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);

  const scroll = (direction) => {
    const container = trackRef.current;
    const scrollAmount = 300;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      setShowLeft(container.scrollLeft > 0);
    }, 200);
  };

  return (
    <div className="productsrooms__container">
      {showLeft && (
        <button className="productsrooms__arrow left" onClick={() => scroll("left")}>
          <img src="/arrow-left.png" alt="left" />
        </button>
      )}

      <div className="productsrooms__track" ref={trackRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="productsrooms__card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="productsrooms__label">{item.title}</div>
          </div>
        ))}
      </div>

      <button className="productsrooms__arrow right" onClick={() => scroll("right")}>
        <img src="/arrow.png" alt="right" />
      </button>
    </div>
  );
};

const ProductsRooms = () => {
  return (
    <section className="productsrooms__categorie">
      <h2 className="productsrooms__title">ІДЕЇ ДЛЯ ОФОРМЛЕННЯ</h2>
      <Track
        data={[
          { id: 1, image: "/rooms1.jpg", title: "ВІТАЛЬНЯ" },
          { id: 2, image: "/rooms2.jpg", title: "СПАЛЬНЯ СПОКОЮ" },
          { id: 3, image: "/rooms3.jpg", title: "КУХНЯ" },
          { id: 4, image: "/rooms4.jpg", title: "РОБОЧИЙ ПРОСТІР" },
          { id: 5, image: "/rooms5.jpg", title: "ДИТЯЧА ГАРМОНІЯ" },
          { id: 6, image: "/rooms6.jpg", title: "ВАННА КІМНАТА" },
          { id: 7, image: "/rooms7.jpg", title: "ЗОНА ВІДПОЧИНКУ" },
          { id: 8, image: "/path8.jpg", title: "СУХОЦВІТИ" },
          { id: 9, image: "/path9.jpg", title: "ЖИВА ЗЕЛЕНЬ" },
          { id: 10, image: "/path10.jpg", title: "КАКТУС СТИЛЬ" },
        ]}
      />
    </section>
  );
};

export default ProductsRooms;