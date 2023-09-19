// import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
// import UserContext from "./UserContext";

const RestaurantCard = (props) => {

    // const { resName, cuisine } = props;
    const { resData } = props;
    // const { loggedInUser } = useContext(UserContext);

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData;


    return (
        <div className="m-4 p-4 w-44 h-96 bg-gray-200 rounded-lg hover:bg-gray-300  transition duration-300 ease-in-out">
            <img className="rounded-lg" alt="res-img" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>

    )
};

//Higher order component 

//input is the restaturnt card ==> restaruntcardpromoted 

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="text-right font-bold bg-pink-800">
                <label>Promoted</label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard;