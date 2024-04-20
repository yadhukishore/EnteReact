import React from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const restaurant = useRestaurantMenu(resId)

  if (!restaurant) {
    return (
      <div>
        <h1>Restaurant not found</h1>
      </div>
    );
  }

  return (
    <div className="menu">
      <h1>{restaurant.name}</h1>
      <p>{restaurant.des}</p>
      <h2>Menu</h2>
      <ul>
        {restaurant.menu.items.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
