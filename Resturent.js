import React, { useState } from "react";
import "./style.css";
import Menu from "../menuApi";
import MenuCard from "./MenuCard";

const Resturent = () => {
  const [menuData, setMenuData] = React.useState(Menu);
  const filterItem=(category) => {
    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updateList);
  };
  return (
    <div>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick={()=> filterItem("breakfast")}>BREAKFAST</button>
          <button className="btn-group__item"  onClick={()=> filterItem("lunch")}>LUNCH</button>
          <button className="btn-group__item"  onClick={()=> filterItem("evening")}>EVENING</button>
          <button className="btn-group__item"  onClick={()=> filterItem("dinner")}>DINNER</button>
          <button className="btn-group__item"  onClick={()=> setMenuData(Menu)}>ALL</button>
        </div>
      </nav>
     <MenuCard menuData={menuData} />
    </div>
  );
};

export default Resturent;
