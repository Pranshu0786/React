import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <div>
        <section className="main-card--cointainer">
      {menuData.map((curElem) => {
        return (
          <div>
            <div className="card-contaner" />
            <div className="card" />
            <div className="card-body">
              <span className="card-number card-circle subtle">{curElem.id}</span>
              <span className="card-author subtle">{curElem.name}</span>
              <h2 className="card-title">{curElem.name}</h2>
              <span className="card-description subtle">
               {curElem.description}
              </span>
              <div className="card-read">read</div>
              <img src={curElem.image} alt="images" className="card-media" />
              <span className="card-tag subtle">Order Now</span>
            </div>
          </div>
        );
      })}
      </section>
    </div>
    
  );
};

export default MenuCard;
