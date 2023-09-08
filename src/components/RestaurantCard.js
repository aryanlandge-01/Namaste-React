import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    // const { resName, cuisine } = props;
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime,
    } = resData;


    return (
        <div className="res-card">
            <img alt="res-img"
                src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(" ,")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
};


export default RestaurantCard;