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
import UserContext from "./utils/UserContext";

function AppLayout() {
    const [userName , setUserName] = useState();

    useEffect(()=>{
        const data = {
            name: ""
        }
        setUserName(data.name)
    },[])


    return (
        <UserContext.Provider value={{loggedInUser: userName,setUserName}}>
            <div className="main-container">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>

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

