import './Body.css';
import {restaurants} from "./data";

import RestCard from "./RestCard";

export default function Body(){

    return (
        <>
            <div className="search">
                <button>Top rated Button</button>
            </div>
            <div className="body-container">
                {
                    restaurants.map((rest) => {
                        return <RestCard key={rest.id} resData={rest}/>
                    })

                }
            </div>
        </>


    )
}