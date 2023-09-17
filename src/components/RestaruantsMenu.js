// import React from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestarurantMenu";
import RestaruantsCategory from "./RestaruantsCategory";



const RestaruantsMenu = () => {

    const { resId } = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setshowIndex] = useState(null);

    if (resInfo === null) return <Shimmer />;


    // console.log(resInfo);

    // console.log(resId);

    const { name, cuisines, costForTwoMessage } = resInfo?.data?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    // console.log(resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const ItemCategory = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(e =>
        e.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    // console.log(itemCards);

    // console.log(ItemCategory);


    return (
        <div className='text-center'>
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold">
                {cuisines.join(", ")} -{costForTwoMessage}
            </p>

            {/* <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => <li key={item.card.info.id}> {item.card.info.name} -{"Rs "}
                    {item.card.info.price / 100}
                </li>)}
            </ul> */}
            {
                ItemCategory.map((category, index) => (
                    <RestaruantsCategory
                        key={category?.card?.card.title}
                        data={category?.card?.card}
                        showItem={index === showIndex ? true : false}
                        setshowIndex={() => setshowIndex(index)}
                    />
                ))
            }


        </div>
    )
}



export default RestaruantsMenu;


// data.cards[3].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards