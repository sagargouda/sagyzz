import ItemList from "./ItemList";
import {useState} from "react";


const RestaurantCategory = function ({data,setShowIndex,showItems}){
    const [closed , setClosed] = useState(false)

    function handleClick(){
        setShowIndex(!showItems)
        setClosed(prev => !prev)
    }
    return(
        <div >

        {/*    title*/}
            <div className="tw-w-9/12  tw-mx-auto tw-my-4 tw-bg-grey-30 tw-shadow-lg tw-p-4 tw-bg-blac">
                <div className="tw-flex tw-row-auto tw-justify-between tw-cursor-pointer "  onClick={()=>handleClick()}>
                    <span className="tw-text-3xl">{data.title.length > 25 ? data.title.slice(0,20) : data.title}<span
                        className="tw-m-2 tw-text-emerald-500">({data.itemCards.length})</span></span>
                    {closed ? <span>⬇️</span> : <span>⬆️</span>}
                </div>
                {
                    showItems && (closed && <ItemList  items={data.itemCards} />)
                }

            </div>




        </div>
    )
}

export default RestaurantCategory