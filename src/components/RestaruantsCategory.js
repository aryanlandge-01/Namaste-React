import { useState } from "react";
import ItemList from "./ItemList";


const RestaruantsCategory = (data) => {

    const [showItems, setshowItems] = useState(false);

    // console.log(data);
    const handleClick = () => {
        setshowItems(!showItems);
    }

    return (
        <div>
            <div className="w-6/12 cursor-pointer mx-auto my-4 bg-gray-200 shadow-lg p-4 ">
                <div className="flex justify-between" onClick={handleClick}>
                    <span className="font-bold text-lg"> {data.data.title} ({data.data.itemCards.length}) </span>
                    <span>⬇</span>
                </div>
                {showItems && <ItemList items={data.data.itemCards} />}

                {/* <ItemList items={data.data.itemCards} /> */}
            </div>


        </div>
    )
}

export default RestaruantsCategory;


