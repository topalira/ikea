import "./Cozysets.css";

function Cozysets() {
  const sets = [
    { img: "/cozysets1.jpg"},
    { img: "/cozysets2.jpg"},
    { img: "/cozysets3.jpg"},
  ];

  return (
    <section className="cozysets">
      <h2 className="cozysets__title">ЗАТИШНІ НАБОРИ</h2>

      <div className="cozysets-grid">
        {sets.map((item, index) => (
          <div className="cozysets-item" key={index}>
            <img src={item.img} alt={item.title} className="cozysets-image" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cozysets;