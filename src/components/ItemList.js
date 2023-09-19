import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";



const ItemList = ({ items }) => {

  const dispatch = useDispatch();

  const handleaddItem = (item) => {
    dispatch(addItem(item));
  }



  // console.log(items)
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className="p-2 m-2  border-black border-b-2">
          <div className="flex flex-row">
            <div className="w-9/12 text-left my-1 px-4 flex flex-col gap-2">
              <span><li>{item.card.info.name}</li>₹ {item.card.info.price ? (item.card.info.price / 100) : 100}</span>
              <p>{item.card.info.description}</p>
            </div>
            <div className="w-3/12 p-4 text-end ">
              <img src={CDN_URL + item.card.info.imageId} className="w-full" />
              <button onClick={() => handleaddItem(item)} className="rounded-lg bg-black shadow-lg p-1 text-white" >Add+</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ItemList;



