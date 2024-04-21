import RestaurentCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [RESTAURENTZZ, setRestaurants] = useState(restaurants);

  useEffect(() => {
    fetchData();
  }, []);
  console.log("Body Called");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.624480699999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return <h1>You are Offline. Please Check the internet!</h1>;

  if (restaurants.length === 0) {
    return <h1>Looooding...</h1>;
  }
  return (
    <div className="m-4 p-4">
      <div className="flex flex-wrap">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredRestaurants = restaurants.filter(
              (res) => res.rating > 4
            );
            setRestaurants(filteredRestaurants);
          }}
        >
          Top Rated restaurants
        </button>
      </div>
      <div className="flex flex-wrap">
        {RESTAURENTZZ.map((res) => (
          <Link key={res.id} to={"/restaurents/" +res.id}>
            <RestaurentCard
              key={res.id}
              resName={res.resName}
              foodName={res.foodName}
              rating={res.rating}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4" // Adjust width based on screen size
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
