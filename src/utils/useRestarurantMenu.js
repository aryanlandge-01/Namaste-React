import { useEffect, useState } from "react";
import { MENU_URL } from "./constants";

const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);



    useEffect(() => {
        fetchData();

    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER#");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setResInfo(data);
        } catch (error) {
            // Handle errors here, e.g., log the error or set an error state.
            console.error('Error fetching data:', error);
        }
    };


    return resInfo;

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`${MENU_URL}${resId}"&catalog_qa=undefined&submitAction=ENTER#"`);

    //             if (!response.ok) {
    //                 throw new Error('Failed to fetch menu data');
    //             }
    //             const json = await response.json();
    //             setResInfo(json.data);
    //         } catch (error) {
    //             console.error('Error fetching menu data:', error);
    //         }
    //     };

    //     fetchData();
    // }, [resId]);

    // return resInfo;
};


export default useRestaurantMenu;


// const useRestaurantMenu = (resId) => {

//     const { resInfo, setresInfo } = useState(null);

//     useEffect(() => {
//         fetchData();

//     }, []);

//     const fetchData = async () => {
//         const data = fetch(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");

//         const json = await data.json();

//         setresInfo(json.data);
//     };

//     return resInfo;
// }



