import './Body.css';

import RestCard from "./RestCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

export default function Body(){
  const[rests,setRests] = useState([])

    useEffect(()=>{
        fetchData()
    },[])

    async function fetchData(){
     const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.019677&lng=76.111056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await response.json();
     console.log(json)
      setRests(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(rests.length === 0){
     return  <Shimmer/>
    }

    return (
        <>
            <div className="search">
                {/*top rated restauarants implementation */}
                <button onClick={()=>{
                    const topRated = rests.filter((restz)=>{
                        return restz.info.avgRating > 4.3
                    })
                    setRests(topRated);
                }}>Top rated Button</button>
            </div>
            <div className="body-container">
                {

                    rests.map((rest) => {
                        return <RestCard key={rest.info.id} resData={rest}/>
                    })

                }
            </div>
        </>


    )
}