import React from "react";

import DrinksItem from "./DrinksItem";

const DrinksList = ({ drinks, onDrinksSelect }) => {
  return (
    <section className="Drinks__list">
      {drinks.map(drink => (
        <DrinksItem
          key={drink.id}
          drink={drink}
          onDrinksSelect={onDrinksSelect}
        />
      ))}
    </section>
  )
};

export default DrinksList;