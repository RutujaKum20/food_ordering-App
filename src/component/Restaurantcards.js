import { useContext } from "react";
import { SWIGGY_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const Restaurantcards = (props) => {
  const { resData } = props;

  console.log("resData", resData);

  const { loggedInUser } = useContext(UserContext);

  // destructuring the data
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;

  // console.log("resdata", resData);

  return (
    <div
      data-testid="resCard"
      className="res-cards m-4 p-6 w-[300px] h-[500px] hover:border border-solid border-black  bg-gray-100 hover:bg-gray-200 rounded-lg"
    >
      <img
        className="res-img rounded-lg "
        src={SWIGGY_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString} </h4>
      <h4>User : {loggedInUser}</h4>
    </div>
  );
};

// Higher order component
// input - restaurantcard => restaurantcardPromoted

export const withPromotedLabel = (Restaurantcards) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <Restaurantcards {...props} />
      </div>
    );
  };
};

export default Restaurantcards;
