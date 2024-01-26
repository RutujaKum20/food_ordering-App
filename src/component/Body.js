import Restaurantcards from "./Restaurantcards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // local state variable = super powerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);

  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0166223&lng=73.0966019&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);

    let restoList =
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants;
    restoList = restoList.map((restaurant) => restaurant.info);
    console.log(restoList);

    //optional chaining
    setlistOfRestaurant(restoList);
    setfilteredRestaurant(restoList);
  };

  {
    /*
     conditional rendering
     spinner loader and shimmer effect
  if (listOfRestaurant.length === 0) {
    return <Shimmer />; or 
    return <h1> Loading.....</h1> 
  }
*/
  }

  const onlineStatus = useOnlineStatus();
  console.log("onlineStatus: ", onlineStatus);
  if (onlineStatus === false)
    return (
      <h1>
        Looks like your offline!!!!!!! Please check your internet connection.
      </h1>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter the resturant cards and update the UI
              //searchText
              console.log(searchText);
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setfilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.rating > 4
            );
            setlistOfRestaurant(filteredList);
          }}
        >
          Top rated restaurants
        </button>
      </div>
      <div className="rest-container">
        {filteredRestaurant.map((restaurant, index) => {
          return (
            <Link key={restaurant.id} to={"/restaurants/" + restaurant.id}>
              <Restaurantcards resData={restaurant} />
            </Link>
          );
        })}
        {/* <Restaurantcards resData={reslist[0]} />
        <Restaurantcards resData={reslist[1]} /> */}
      </div>
    </div>
  );
};

export default Body;
