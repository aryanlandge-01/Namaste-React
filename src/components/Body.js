import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";



export const Body = () => {

    const [listofRestarunt, setListOfRestraunt] = useState([]);
    const [filterRestarunt, setFilteredRestaurant] = useState([]);

    const [searchtext, setsearchtext] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

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

    return (filterRestarunt.length === 0) ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchtext} placeholder="search" onChange={(e) => {
                        setsearchtext(e.target.value);
                    }} />
                    <button onClick={() => {
                        console.log(searchtext)

                        // const filterlistofres = filterRestarunt.filter((res) => res.info.name.include.toLowerCase() === searchtext.toLowerCase());
                        const filterlistofres = listofRestarunt.filter((res) =>
                            res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );

                        setFilteredRestaurant(filterlistofres);
                    }}
                    >Search</button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listofRestarunt.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setFilteredRestaurant(filteredList);
                    }}>
                    Top Rated Restaurants
                </button>
            </div>
            <div className="res-container">
                {filterRestarunt.map((restaurant) => (
                    <Link className="link" key={restaurant?.info.id} to={"/restaurants/" + restaurant?.info.id}><RestaurantCard resData={restaurant?.info} /></Link>
                ))}

            </div>
        </div>
    )

};


export default Body;






