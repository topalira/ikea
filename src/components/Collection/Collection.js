import "./Collection.css";

const Collection = () => {
  return (
    <section className="collection">
      <h2 className="collection__title">знайди те, що шукаеш!</h2>

      <div className="collection__top">
        <CollectionCard
          image="/collection1.jpg"
          title="наша нова коллекція"
        />
        <CollectionCard
          image="/collection2.jpg"
          title="наші найкращі пропозиції"
        />
      </div>

      <CollectionBottom image="/collection3.jpg" />
    </section>
  );
};

const CollectionCard = ({ image, title }) => {
  return (
    <div
      className="collection__card"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="collection__overlay">
        <span>{title}</span>
        <div className="collection__icon">
          <img src="/arrow.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

const CollectionBottom = ({ image }) => {
  return (
    <div
      className="collection__bottom"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="collection__side">
        <div className="collection__icon">
          <img src="/arrow.png" alt="arrow" />
        </div>
      </div>
    </div>
  );
};

export default Collection;