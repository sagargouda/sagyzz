import {useEffect, useState} from "react";

function useRestaurantMenu(resId){

    const [resInfo , setResInfo]=useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    async function  fetchData(){
        const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.019677&lng=76.111056&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await response.json();
        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu;