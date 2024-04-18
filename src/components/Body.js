import RestaurentCard from "./RestaurantCard";
import {restaurants} from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [RESTAURENTZZ,setRestaurants] = useState(restaurants);

  useEffect(()=>{fetchData();},[]);
  console.log("Body Called")
const fetchData=async()=>{
const data =await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
);
const json = await data.json();
console.log(json);
}

if(restaurants.length===0){
return <h1>Looooding...</h1>
};
    return (
      <div className="body">
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
             const filteredRestaurants=restaurants.filter((res)=>res.rating>4);
             setRestaurants(filteredRestaurants);
          }}>Top Rated restaurant</button>
        </div>
        <div className="res-container">
          {RESTAURENTZZ.map((res) => (
           <Link key={res.id} to={"/restaurents/"+res.id} > <RestaurentCard
              key={res.id}
              resName={res.resName}
              fudName={res.foodName}
              rating={res.rating}
            /></Link>
          ))}
        </div>
      </div>
    );
  };

  export default Body;
  