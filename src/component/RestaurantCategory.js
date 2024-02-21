import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setshowIndex }) => {
  console.log({ data });

  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50 ">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {/* accordian body  */}
        {showItems && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
