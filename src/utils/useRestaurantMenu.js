import { useState,useEffect } from "react";
import { Hotels } from "./mockData";
const useRestaurantMenu = (resId) => {
 
    const [restaurant,setRestaurant]=useState(null);

    useEffect(()=>{
        const foundRes = Hotels.find((hot)=>hot.id.toString()===resId);
        setRestaurant(foundRes);
    },[resId])

return restaurant; 
}

export default useRestaurantMenu;