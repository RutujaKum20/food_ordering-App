const Restaurantcards = (props) => {
  const { resData } = props;

  // destructuring the data
  const { image, name, cuisins, rating, expectedDeliveryTime } = resData;

  return (
    <div className="res-cards">
      <img className="res-img" src={image} />
      <h3>{name}</h3>
      <h4>{rating}</h4>
      <h4>{expectedDeliveryTime} minutes</h4>
    </div>
  );
};

export default Restaurantcards;
