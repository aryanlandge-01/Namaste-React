import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaruantsMenu from "./components/RestaruantsMenu";


// Header footer body search restaurantcontainer


//React Element


const Footer = () => {
    return (
        <footer>
            @copyright 2023
        </footer>
    )
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,

            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaruantsMenu />,
            }
        ],
        errorElement: <Error />,
    },

]);


// console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

