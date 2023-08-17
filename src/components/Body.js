import RestaruntCard from "./RestaruntCard";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  return (
    <div>
      <div className="filter">
      <button className="filter-btn" 
        onClick={ () => {
         const filtrdList = listOfRestaurant.filter(
          (res) => res.data.avgRating > 4
         );
        setListOfRestaurant(filtrdList);
      }}>Top Rated Restraunts</button>
      </div>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaruntCard Key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
 
export default Body;
