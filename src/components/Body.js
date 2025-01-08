import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";
import axios from "axios";



export const Body = () => {

    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filterRestaurant, setFilteredRestaurant] = useState([]);

    const [searchtext, setsearchtext] = useState("");

    const Restaruntcardpromoted = withPromotedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(listofRestarunt);

    // 
    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
            );
    
            const json = response.data;
    
            
    
            setListOfRestaurant(
                json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
            setFilteredRestaurant(
                json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
            );
            
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    

    // console.log(listofRestarunt);

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

    const { setUsername, loggedInUser } = useContext(UserContext);

    // console.log(filterRestaurant);
    
    
    

    return (filterRestaurant.length === 0)? <Shimmer /> : (
        <div className="body">
            <div className="filter flex  mx-16">
                <div className="search m-3 p-4 ">
                    <input type="text" className=" w-80 border border-solid border-black rounded-lg p-2" value={searchtext} placeholder="search" onChange={(e) => {
                        setsearchtext(e.target.value);
                    }} />
                    <button className="px-4 py-2 bg-green-200 m-4 rounded-lg" onClick={() => {
                        console.log(searchtext)

                        // const filterlistofres = filterRestarunt.filter((res) => res.info.name.include.toLowerCase() === searchtext.toLowerCase());
                        const filterlistofres = listOfRestaurant.filter((res) =>
                            res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );

                        setFilteredRestaurant(filterlistofres);
                    }}
                    >Search</button>
                </div>
                <div className="m-4 py-2 flex items-center">
                    <button
                        className="px-4 py-2 bg-gray-200 rounded-lg"
                        onClick={() => {
                            const filteredList = listOfRestaurant.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setFilteredRestaurant(filteredList);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
                <div className="flex m-4 px-2 rounded-lg items-center bg-gray-300">
                    <label>UserName :  </label>
                    <input className="border border-solid border-black rounded-lg p-2"
                        value={loggedInUser}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
            </div>
            <div className="res-container flex flex-wrap mx-20">
                {filterRestaurant.map((restaurant) => (
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






