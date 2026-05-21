import React from "react";
import "./New.css";

const New = () => {
  return (
    <section className="new">
      <h2 className="new__title">новинки</h2>

      <div className="new__container">
        <NewItem image="/path1.jpg" index={1} />
        <NewItem image="/path2.jpg" index={2} />
        <NewItem image="/path3.jpg" index={3} />
        <NewItem image="/path4.jpg" index={4} />
      </div>
    </section>
  );
};

const NewItem = ({ image, index }) => {
  return (
    <div
      className={`new__item new__item--${index}`}
      style={{ backgroundImage: `url(${image})` }}
    />
  );
};

export default New;