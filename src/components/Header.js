import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnname, setbtnname] = useState("login");

    useEffect(() => {
        console.log("hello")
    }, [btnname])

    // console.log("header");

    const onlinestatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg mb-2 bg-gray-300" >
            <div>
                <img className="w-20  m-1 " src={LOGO_URL} />
            </div>
            <div className="flex items-center mx-2">
                <ul className="flex  ">
                    <li className="px-2">
                        Online Status: {onlinestatus ? "✅" : "🔴"}
                    </li>
                    <li className="px-2">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/about">About us</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li className="px-2">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <button className="login" onClick={() => {
                        btnname === "login" ? setbtnname("logout") : setbtnname("login")
                    }}>{btnname}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;