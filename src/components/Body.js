import './Body.css';

import RestCard , {withFastLabel} from "./RestCard";
import {useCallback, useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


export default function Body() {
    const [rests, setRests] = useState([])
    const [filterRests, setFilterRests] = useState([])
    const [name, setName] = useState("")
    const onlineStatus = useOnlineStatus();

    const RestaurantCardFast = withFastLabel(RestCard)

    //  function for searching restaurants
    const handleSearch = useCallback(() => {
        const searchFilter = rests.filter((rest) =>
            rest.info.name.toLowerCase().includes(name.toLowerCase())
        );
        setFilterRests(searchFilter);
    }, [name, rests]);



    useEffect(()=>{
        fetchData()
    },[])

    useEffect(() => {
        handleSearch();
    }, [name,handleSearch]);

    async function fetchData(){
     const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await response.json();
     const ApiData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setRests(ApiData)
        setFilterRests(ApiData)
    }

    console.log(rests)


    if(rests?.length === 0){
     return  <Shimmer/>
    }

    // function for finding top rated restaurants
    function handleTopRated(){
        const topRated = rests.filter((restz)=>{
            return restz.info.avgRating > 4.3
        })
        setFilterRests(topRated);
    }

    function handleInputChange(e){
        setName(e.target.value)
    }



    if(onlineStatus === false){
        return <h1>Looks like you are offline</h1>
    }

    return (
        <>
            <div className="search">
                <button onClick={() => handleTopRated()} className="button">Top rated Button</button>
                <div className="searchInput">
                    <input type="text" placeholder="Search Restaurants Here" id="inp" value={name}
                           onChange={(e) => handleInputChange(e)}/>
                    {/*<button className="button" onClick={handleSearch}>Search</button>*/}
                </div>

            </div>
            <div className="body-container">
                {
                    filterRests.length === 0 ? (
                        <h1 className="not-found">Sorry, we couldn't find any results for "{name}"</h1>

                        ) :

                        filterRests.map((rest) => {
                        return <Link className="rest-card-link" key={rest.info.id} to={"/restaurants/" + rest.info.id}>
                            {
                                rest.info?.sla?.deliveryTime < 30
                                    ? <RestaurantCardFast resData={rest}/> : <RestCard  resData={rest}/>
                            }
                        </Link>
                    })

                }
            </div>
        </>


    )
}