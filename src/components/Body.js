import RestaurentCard from "./RestaurantCard";
import restaurants from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [RESTAURENTZZ,setRestaurants] = useState(restaurants);
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
             const filteredRestaurants=restaurants.filter((res)=>res.rating>4);
             setRestaurants(filteredRestaurants);
          }}>Top Rated restaurant</button>
        </div>
        <div className="res-container">
          {RESTAURENTZZ.map((res, index) => (
            <RestaurentCard
              key={index}
              resName={res.resName}
              fudName={res.foodName}
              rating={res.rating}
            />
          ))}
        </div>
      </div>
    );
  };

  export default Body;
  