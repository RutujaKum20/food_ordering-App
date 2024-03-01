import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [resInfo, setresInfo] = useState(null);

  const [recmInfo, setrecmInfo] = useState(null);

  const [categories, setcategories] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0166223&lng=73.0966019&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.07480&lng=72.88560&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`

    const json = await data.json();
    console.log(json.data.cards[0].card.card.info);
    setresInfo(json.data.cards[0].card.card.info);
    console.log("resInfo", resInfo);

    let recommendations =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards;
    console.log("recommendations", recommendations);
    setrecmInfo(recommendations);

    let category = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    console.log("category", category);

    const categories =
      json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter(
        (c) =>
          c.card?.card?.["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );
    console.log("categories", categories);

    setcategories(categories);
  };

  return { resInfo, recmInfo, categories };
};

export default useRestaurantMenu;
