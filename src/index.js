import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import {createBrowserRouter , RouterProvider , Outlet} from "react-router-dom";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestMenu from "./components/RestMenu";
import './index.css';

import {Provider} from "react-redux";
import appStore from "./utils/appStore";

function AppLayout() {

    return (
        <Provider store={appStore}>

                <div className="main-container">
                    <Header/>
                    <Outlet/>
                </div>

        </Provider>


    );
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout/>,
            children: [
                {
                    path:"/",
                    element: <Body/>
                },
                {
                    path: "/about",
                    element: <About/>
                },
                {
                    path: '/contact',
                    element: <Contact/>
                },
                {
                    path: 'restaurants/:resId',
                    element: <RestMenu/>
                }
            ],
            errorElement: <Error/>
        },

    ]

)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter}/>
);

