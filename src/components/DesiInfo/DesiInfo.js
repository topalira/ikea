import React from "react";
import "./DesiInfo.css";

export function DesiInfo() {
  return (
    <section className="homeinfo">
      <div className="homeinfo-container">
        <div className="homeinfo-image">
          <img src="/home-info.png" alt="" />
        </div>
        <div className="homeinfo-content">
          <h2>інформація</h2>
          <p>
            Створюйте простір, у якому комфортно жити та відпочивати.
            Продуманий інтер’єр допомагає поєднати стиль, функціональність
            та затишок у кожній деталі вашого дому.
          </p>
        </div>
      </div>
    </section>
  );
}

export default DesiInfo;
