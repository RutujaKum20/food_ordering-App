import Restaurantcards from "./Restaurantcards";
import reslist from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable = super powerful variable
  const [listOfRestaurant, setlistOfRestaurant] = useState(reslist);

  const [searchBar, setsearchBar] = useState("");

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="search"
          value={searchBar}
          onChange={(e) => {
            setsearchBar(e.target.value);

            const filteredList = reslist.filter((res) =>
              res.name.toLowerCase().includes(e.target.value.toLowerCase())
            );
            setlistOfRestaurant(filteredList);
          }}
        />
      </div>
      <div className="filter">
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
        {listOfRestaurant.map((restaurant) => {
          return <Restaurantcards resData={restaurant} />;
        })}
        {/* <Restaurantcards resData={reslist[0]} />
        <Restaurantcards resData={reslist[1]} /> */}
      </div>
    </div>
  );
};

export default Body;
