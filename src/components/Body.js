import RestaruntCard from "./RestaruntCard";
import { useEffect, useState } from "react";
//import resList from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] =useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    setListOfRestaurant(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant( json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  //   setListOfRestraunt(
  //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //   setFilteredRestaurant(
  //     json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  //   );
  // };
   
 // console.log(listOfRestaurant);

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button onClick={() => {
            const filteredRestaurant = listOfRestaurant.filter(
              (res)=> res.info?.name.toLowerCase().includes(searchText.toLowerCase())
            );
             setListOfRestaurant(filteredRestaurant);

          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info?.avgRating > 4
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restraunts
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaruntCard Key={restaurant?.info.id} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
