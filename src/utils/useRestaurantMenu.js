import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0166223&lng=73.0966019&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setresInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;

// setresInfo(json.data.cards[0].card.card.info);
// console.log(json);
// let recommendations =
//   json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
//     .itemCards;
// console.log("recommendations", recommendations);

// setrecmInfo(recommendations);
