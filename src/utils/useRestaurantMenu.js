import {useEffect, useState} from "react";

function useRestaurantMenu(resId){

    const [resInfo , setResInfo]=useState(null)

    useEffect(()=>{
        fetchData()
    },[])

    async function  fetchData(){
        const response = await fetch(` https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
        const json = await response.json();
        setResInfo(json.data)
    }

    return resInfo;
}

export default useRestaurantMenu;