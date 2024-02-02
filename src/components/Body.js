import './Body.css';

import RestCard from "./RestCard";
import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";

export default function Body(){
  const[rests,setRests] = useState([])
    const [filterRests , setFilterRests] = useState([])
    const [name,setName] =useState("")


    useEffect(()=>{
        fetchData()
    },[])

    useEffect(() => {
        handleSearch();
    }, [name,handleSearch]);

    async function fetchData(){
     const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.019677&lng=76.111056&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await response.json();
     const ApiData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setRests(ApiData)
        setFilterRests(ApiData)
    }

    if(rests.length === 0){
     return  <Shimmer/>
    }

    // function for finding top rated restaurants
    function handleTopRated(){
        const topRated = rests.filter((restz)=>{
            return restz.info.avgRating > 4.3
        })
        setFilterRests(topRated);
    }

    //  function for searching restaurants
    function handleSearch(){
        const searchFilter = rests.filter((rest)=>{
            return rest.info.name.toLowerCase().includes(name.toLowerCase())
        })
            setFilterRests(searchFilter)
    }


    function handleInputChange(e){
        setName(e.target.value)
    }

    return (
        <>
            <div className="search">
                <button onClick={()=> handleTopRated()} className="button" >Top rated Button</button>
                <div className="searchInput">
                    <input type="text" placeholder="Search Restaurants Here" id="inp" value={name} onChange={(e) => handleInputChange(e)}/>
                    <button className="button" onClick={()=>handleSearch()}>Search</button>
                </div>
            </div>
            <div className="body-container">
                {
                    filterRests.length === 0 ? (
                        <h1 className="not-found">Sorry, we couldn't find any results for "{name}"</h1>

                        ) :

                        filterRests.map((rest) => {
                        return <RestCard key={rest.info.id} resData={rest}/>
                    })

                }
            </div>
        </>


    )
}