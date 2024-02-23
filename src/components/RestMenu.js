import './RestMenu.css'
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

export default function RestMenu(){
    const {resId} = useParams()
    const [showIndex , setShowIndex] = useState(null)


    //  getting restuarant info from a custom hook

    const resInfo  = useRestaurantMenu(resId)

    if(resInfo === null){
        return <Shimmer/>
    }
    const restaurantName = resInfo?.cards[2]?.card?.card?.info?.name;
    const cuisines = resInfo?.cards[2]?.card?.card?.info?.cuisines;



    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    // filtering out item category among all cards

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    console.log(categories)

    return (
        <div className="tw-text-center tw-relative">

           <h1 className="tw-font-extrabold tw-my-5 tw-text-6xl  tw-bg-black tw-text-white tw-py-4 tw-h-4/6 tw-sticky tw-top-0">{restaurantName}</h1>
            <p className="tw-font-bold tw-text-2xl ">
                {cuisines.join(',')}
            </p>

        {/*   building accordians   */}


            {
                categories.map((category,index)=>{

                    return <RestaurantCategory   showItems={index === showIndex ? true : false} setShowIndex={()=>setShowIndex(index)} key={category?.card?.card?.title} data={category?.card?.card}/>
                })
            }

        </div>
    )
}