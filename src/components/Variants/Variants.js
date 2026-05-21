import React, { useRef, useState } from "react";
import './Variants.css';

const VariantsTrack = ({ data }) => {
  const variantsRef = useRef(null);
  const [showLeftVariant, setShowLeftVariant] = useState(false);

  const handleVariantsScroll = (direction) => {
    const container = variantsRef.current;
    const scrollAmount = 300;

    container.scrollBy({
      left: direction === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      setShowLeftVariant(container.scrollLeft > 0);
    }, 200);
  };

  return (
    <div className="variants_container">
      {showLeftVariant && (
        <button
          className="variants_arrow variants_arrow--left"
          onClick={() => handleVariantsScroll("left")}>
          <img src="/arrow-left.png" alt="left" />
        </button>
      )}

      <div className="variants_track" ref={variantsRef}>
        {data.map((item) => (
          <div
            key={item.id}
            className="variants_card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="variants_label">{item.title}</div>
          </div>
        ))}
      </div>

      <button
        className="variants_arrow variants_arrow--right"
        onClick={() => handleVariantsScroll("right")}
      >
        <img src="/arrow.png" alt="right" />
      </button>
    </div>
  );
};

const Variants = () => {
  return (
    <section className="variants">
      <h2 className="variants_title">варіанти оформлення</h2>
      <VariantsTrack
        data={[
          { id: 1, image: "/variants1.png", title: "ВІТАЛЬНЯ" },
          { id: 2, image: "/variants2.png", title: "СПАЛЬНЯ СПОКОЮ" },
          { id: 3, image: "/variants3.png", title: "КУХНЯ" },
          { id: 4, image: "/variants4.png", title: "РОБОЧИЙ ПРОСТІР" },
          { id: 5, image: "/variants5.png", title: "ДИТЯЧА ГАРМОНІЯ" },
          { id: 6, image: "/variants6.png", title: "ВАННА КІМНАТА" },
          { id: 7, image: "/variants7.png", title: "ЗОНА ВІДПОЧИНКУ" },
          { id: 8, image: "/variants8.png", title: "СУХОЦВІТИ" },
          { id: 9, image: "/variants9.png", title: "ЖИВА ЗЕЛЕНЬ" },
          { id: 10, image: "/variants10.png", title: "КАКТУС СТИЛЬ" },
        ]}
      />
    </section>
  );
};

export default Variants;