// First bracket is telling some piece of js in it, Second bracket is the js object
import { CDN_URL } from "../utils/contants";
const RestaurentCard = (props) => {
    return (
      <div className="m-5 p-8 w-[280px] bg-slate-200">
        <img
           className="object-cover w-full h-40 rounded-t-lg"
          alt="res-logo"
          src={CDN_URL} 
        />
        <h3 className="text-black " >{props.resName}</h3>
        <h4 className="text-black" >{props.foodName} </h4>
        <h5>Rating:{props.rating}</h5>
      </div>
    );
  };

export const withPromoteLabel = (RestaurentCard) => {//Same RestaurantCard as above.As input
  return (props)=>{// which returns a component
      return(// Component is function that returns a peice of jsx
      <div>
          <label className="absolute bg-black text-white m-2 p-2 rounded-lg" >Promoted</label>
          <RestaurentCard {...props}/>
    </div>
      );
  };
};
export default RestaurentCard;  