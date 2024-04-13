// First bracket is telling some piece of js in it, Second bracket is the js object
import { CDN_URL } from "../utils/contants";
const RestaurentCard = (props) => {
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={CDN_URL} 
        />
        <h3 style={{ color: "orange" }}>{props.resName}</h3>
        <h4>{props.fudName} </h4>
        <h5>Rating:{props.rating}</h5>
      </div>
    );
  };


export default RestaurentCard;  