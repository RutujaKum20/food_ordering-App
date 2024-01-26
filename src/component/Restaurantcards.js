import { SWIGGY_URL } from "../utils/constants";

const Restaurantcards = (props) => {
  const { resData } = props;

  // destructuring the data
  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resData;

  console.log(resData);

  return (
    <div className="res-cards">
      <img className="res-img" src={SWIGGY_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString} </h4>
    </div>
  );
};

export default Restaurantcards;
