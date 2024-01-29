import { SWIGGY_URL } from "../utils/constants";

const Restaurantcards = (props) => {
  const { resData } = props;

  // destructuring the data
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;

  console.log(resData);

  return (
    <div className="res-cards m-4 p-4 w-[250px] hover:border border-solid border-black  bg-gray-100 hover:bg-gray-200">
      <img
        className="res-img rounded-lg"
        src={SWIGGY_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString} </h4>
    </div>
  );
};

// Higher orde component
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
