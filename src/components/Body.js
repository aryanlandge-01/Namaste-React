import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";



export const Body = () => {

    const [listofRestarunt, setListOfRestraunt] = useState([]);
    const [filterRestarunt, setFilteredRestaurant] = useState([]);

    const [searchtext, setsearchtext] = useState("");

    const Restaruntcardpromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    console.log(listofRestarunt);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();

        console.log(json);

        setListOfRestraunt(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );
        setFilteredRestaurant(
            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        );

    };

    // conditional rendering 
    // if (filterRestarunt.length === 0) {
    //     return <Shimmer />
    // }

    console.log(listofRestarunt);

    const onlineStatus = useOnlineStatus();

    // console.log(onlineStatus);

    if (!onlineStatus) {
        return (
            <div className="offline-message">
                <h1>Looks like you are offline, please check your internet connection.</h1>
            </div>
        );
    }

    // Rest of your component code for when online





    return (filterRestarunt.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-3 p-4 ">
                    <input type="text" className="border border-solid border-black" value={searchtext} placeholder="search" onChange={(e) => {
                        setsearchtext(e.target.value);
                    }} />
                    <button className="px-4 py-1 bg-green-200 m-4 rounded-lg" onClick={() => {
                        console.log(searchtext)

                        // const filterlistofres = filterRestarunt.filter((res) => res.info.name.include.toLowerCase() === searchtext.toLowerCase());
                        const filterlistofres = listofRestarunt.filter((res) =>
                            res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );

                        setFilteredRestaurant(filterlistofres);
                    }}
                    >Search</button>
                </div>
                <div className="m-4 p-3 flex items-center">
                    <button
                        className="px-4 py-1 bg-gray-200 rounded-lg"
                        onClick={() => {
                            const filteredList = listofRestarunt.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setFilteredRestaurant(filteredList);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>

            </div>
            <div className="res-container flex flex-wrap mx-16">
                {filterRestarunt.map((restaurant) => (
                    <Link className="link"
                        key={restaurant?.info.id}
                        to={"/restaurants/" + restaurant?.info.id}
                    >
                        {/* {
                            restaurant.info.isopen ? <Restaruntcardpromoted resData={restaurant?.info} /> : <RestaurantCard resData={restaurant?.info} />
                        } */}

                        <RestaurantCard resData={restaurant?.info} />

                    </Link>
                ))}

            </div>
        </div>
    )

};


export default Body;






