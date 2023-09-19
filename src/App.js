import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
// import Contact from "./components/contact";
import Error from "./components/Error";
import Cart from "./components/Cart";
import RestaruantsMenu from "./components/RestaruantsMenu";
import UserContext from "./components/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

// import Grocery from "./components/Grocery";


// Header footer body search restaurantcontainer


//React Element

const Grocery = lazy(() => import("./components/Grocery"));

const Contact = lazy(() => import("./components/contact"));


const Footer = () => {
    return (
        <footer className="bg-gray-500 p-4 text-center relative bottom-0  w-full">
            @copyright 2023
        </footer>
    )
};

const AppLayout = () => {

    const [username, setUsername] = useState();

    useEffect(() => {
        const data = {
            name: "Aryan Landge"
        }
        setUsername(data.name);
    }, [])

    return (
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: username, setUsername }}>
                <div className="app">
                    <Header />
                    <Outlet />
                    <Footer />
                </div>
            </UserContext.Provider>
        </Provider>
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
                element: <Suspense fallback={(<h1>Loading.....</h1>)}><Contact /></Suspense>,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={(<h1>hello</h1>)}><Grocery /></Suspense>,
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

