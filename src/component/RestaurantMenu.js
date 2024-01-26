import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId); //custom hook

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } = resInfo;

  // const { itemCards } = recmInfo;
  // console.log(itemCards);

  return (
    <div className="menu">
      <h2>{name}</h2>
      <h4>{cuisines}</h4>
      {/* <h4>{cuisines.join(",")}</h4> */}
      <h4>{costForTwoMessage}</h4>
      <h3>{avgRating}</h3>
      <h2>Menu</h2>
      <ul>
        {/*{itemCards.map((item) => (
          <li>
            {item.card.info.name} -{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
        <li>{itemCards[0].card.info.name}</li>*/}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
