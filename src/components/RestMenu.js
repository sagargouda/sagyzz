import './RestMenu.css'
import Shimmer from "./Shimmer";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

export default function RestMenu(){
    const {resId} = useParams()

    const resInfo  = useRestaurantMenu(resId)

    if(resInfo === null){
        return <Shimmer/>
    }
    const restaurantName = resInfo?.cards[0]?.card?.card?.info?.name;
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
                            <li>{element?.card?.info?.name }</li>
                            <li>{element?.card?.info?.price / 100} </li>
                        </div>
                    ))}
            </ul>

        </div>
    )
}