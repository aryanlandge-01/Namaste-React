import React from "react";
import ReactDOM from "react-dom/client";


// Header footer body search restaurantcontainer


//React Element

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6a9PzSj4XKG69qJNrqcw3bjhu7xH-TJkDCA&usqp=CAU" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
    console.log(props)
    const { resName, cuisine } = props;
    return (
        <div className="res-card">
            <img alt="res-img" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/33cd936bf487782e6da699b57fe25bb5" />
            <h3>{resName}</h3>
            <h4>{cuisine}</h4>
            <h4>4.4 star</h4>
            <h4>38 minutes</h4>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Meghana Foods" cuisine="Biryani, North Indian,Asian" />
                <RestaurantCard resName="KFC" cuisine="Chicken, Nuggets" />

            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer>
            @copyright 2023
        </footer>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <Footer />
        </div>
    )
}


// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

