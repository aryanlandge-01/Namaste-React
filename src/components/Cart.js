import { addItem, clearCart, removeItem } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    // console.log(cartItems);

    const dispatch = useDispatch();

    const handleclearcart = () => {
        dispatch(clearCart());
    }

    const handleRemove = () => {
        dispatch(removeItem());
    }





    return (
        <div className="text-center mb-4 p-4">
            <h1 className="text-4xl font-serif text-red-800 font-bold m-3">Cart</h1>
            <button onClick={handleclearcart} className="text-lg border border-black mb-2 p-2 text-white bg-black rounded-lg">Clear cart</button>
            <div>
                {cartItems.length === 0 &&
                    <h1 className="font-bold m-6 text-5xl">Your cart is Empty<br></br>
                        Add Item to the cart😔</h1>

                }

                {cartItems.map((item, index) => (
                    < div key={index} className="border bg-gray-400 rounded-lg p-5 mx-36 h-44 flex items-center justify-center mb-2" >
                        <div className="text-left h-auto w-8/12 mr-3" >
                            <h3 className="font-bold">{item.card.info.name}</h3>
                            <h2 className="my-2">Price:₹ {item.card.info.price / 100}</h2>
                            <button onClick={handleRemove} className="border border-red-500 p-2 rounded-lg text-white bg-red-900 my-2">Remove</button>
                        </div>
                        <div className="text-end w-4/12 p-4 ">
                            <img src={CDN_URL + item.card.info.imageId} className=" rounded-lg w-full mr-3" />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
}

export default Cart;




// import { useSelector } from "react-redux";
// // import { ItemList } from "./ItemList";




// const Cart = () => {

//     const cartItems = useSelector((store) => store.cart.items);

//     return (
//         <div className="text-center m-4 p-4 ">
//             <h1 className="text-xl font-bold">Cart</h1>
//             <div>
//                 {/* <ItemList items={cartItems} /> */}
//             </div>

//         </div>

//     )
// }

// export default Cart;
