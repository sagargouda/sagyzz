import './RestMenu.css'
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

export default function RestMenu(){
    const {resId} = useParams()

    const resInfo  = useRestaurantMenu(resId)

    if(resInfo === null){
        return <Shimmer/>
    }
    const restaurantName = resInfo?.cards[0]?.card?.card?.info?.name;
    const cuisines = resInfo?.cards[0]?.card?.card?.info?.cuisines;



    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards)


    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>{
        return c.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
    console.log(categories)

    return (
        <div className="tw-text-center">

           <h1 className="tw-font-extrabold tw-my-10 tw-text-6xl">{restaurantName}</h1>
            <p className="tw-font-bold tw-text-2xl ">
                {cuisines.join(',')}
            </p>

        {/*   building accordians   */}


            {
                categories.map((category)=>{
                    return <RestaurantCategory key={category?.card?.card?.title} data={category?.card?.card}/>
                })
            }

        </div>
    )
}