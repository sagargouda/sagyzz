import ItemList from "./ItemList";
import {useState} from "react";

const RestaurantCategory = function ({data}){

    const [showItems , setShowItems] = useState(false)

    function handleClick(){
        // setShowItems(prevShowItems => !prevShowItems)
        setShowItems(prevShowItems => !prevShowItems)
    }

    return(
        <div >


        {/*    title*/}
            <div className="tw-w-6/12  tw-mx-auto tw-my-4 tw-bg-grey-30 tw-shadow-lg tw-p-4 ">
                <div className="tw-flex tw-row-auto tw-justify-between tw-cursor-pointer"  onClick={handleClick}>
                    <span className="tw-text-3xl">{data.title.length > 25 ? data.title.slice(0,20) : data.title}<span
                        className="tw-m-2 tw-text-emerald-500">({data.itemCards.length})</span></span>
                    <span>⬇️</span>
                </div>
                {
                    showItems &&  <ItemList  items={data.itemCards}/>
                }

            </div>


            {/* accordian body*/}

        </div>
    )
}

export default RestaurantCategory