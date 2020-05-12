import React from "react";

const DrinksItem = ({ drink, onDrinksSelect }) => {
  return (
    <div
      className="Drinks__list__item"
      onClick={() => onDrinksSelect(drink)}
    >
      <div className="Drinks__list__item__image">
        <img src={drink.image_url} alt="Image" />
      </div>
      <div className="Drinks__list__item__label">
        {drink.name}
      </div>
    </div>
  )
};

export default DrinksItem;