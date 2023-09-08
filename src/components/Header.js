import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const [btnname, setbtnname] = useState("login");

    useEffect(() => {
        console.log("hello")
    }, [btnname])

    console.log("header");

    return (
        <div className="header">
            <div>
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact us</Link>
                    </li>
                    <li>
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