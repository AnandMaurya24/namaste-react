import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
import useRestaurantName from "../utils/useRestaurantName"

const RestaurantMenu = () => {
  const { resId } = useParams();

  const dummy = "Dummy Data";

  //const resInfo = useRestaurantMenu(resId);

  const resName =useRestaurantName(resId);

  const [showIndex, setShowIndex] = useState(null);

  if (resName === null ) return <Shimmer />;
  
  const { name, cuisines, costForTwoMessage } =
  resName?.cards[0]?.card?.card?.info;
  //const {name}= resName?.cards[0]?.card?.card?.info;
  const { itemCards } =
  resName?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
  resName?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* categories accordions */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
          dummy={dummy}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
