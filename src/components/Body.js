import './Body.css';
import {restaurants} from "./data";

import RestCard from "./RestCard";
import {useState} from "react";

export default function Body(){
  const[rests,setRests] = useState(restaurants)

    return (
        <>
            <div className="search">
                <button onClick={()=>{
                    const top = restaurants.filter((resti)=>{
                        return resti.rating > 4.8
                    })
                    setRests(top);
                }}>Top rated Button</button>
            </div>
            <div className="body-container">
                {
                    rests.map((rest) => {
                        return <RestCard key={rest.id} resData={rest}/>
                    })

                }
            </div>
        </>


    )
}