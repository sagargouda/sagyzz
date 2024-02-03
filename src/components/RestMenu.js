import './RestMenu.css'
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";

export default function RestMenu(){
    const {resId} = useParams()
    const [resInfo, setResInfo] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

   async function fetchData(){
       const response = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.019677&lng=76.111056&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`)
       const json = await response.json();
       setResInfo(json?.data)
       console.log(json)
   }
    if(resInfo.length === 0){
        return <Shimmer/>
    }
    const restaurantName = resInfo?.cards[0]?.card?.card?.info.name;
    const costForTwoMessage = resInfo?.cards[0]?.card?.card?.info?.costForTwoMessage;

    const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;


    return (
        <div className="restaurantMenu">

           <h1>{restaurantName}</h1>
            <h2>{costForTwoMessage}</h2>

            <ul>

                {itemCards &&
                    itemCards.map((element, index) => (
                        <div key={element?.card?.info?.id}>
                            <li>{element?.card?.info?.name}</li>
                            <li>{element?.card?.info?.price / 100} </li>
                        </div>
                    ))}
            </ul>

        </div>
    )
}