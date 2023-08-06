import RestaruntCard from "./RestaruntCard";
import resList from "../utils/mockData";

const Body = () => { 
    return (
      <div>
      <div className='search'>Search</div>
      <div className='res-container'>
       {
        resList.map((restaurant)=>( <RestaruntCard key={restaurant.data.id} resData={restaurant.data}/> ))
       }
       
      </div>
      </div>
    )
  }
  export default Body;