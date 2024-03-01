import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, recmInfo, categories } = useRestaurantMenu(resId); //custom hook
  // const recmInfo = useRestaurantMenu(resId); //custom hook

  const [showIndex, setshowIndex] = useState(null);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } = resInfo;

  console.log("restMenu: recmInfo: ", recmInfo);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h4 className="text-lg">{cuisines.join(", ")}</h4>
      <h4>{costForTwoMessage}</h4>
      <h3>{avgRating}</h3>
      {/* categories accordian*/}
      {categories?.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index == showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
