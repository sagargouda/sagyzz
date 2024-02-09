import ItemList from "./ItemList";


const RestaurantCategory = function ({data,onSelect,showItems,closed}){


    return(
        <div >


        {/*    title*/}
            <div className="tw-w-9/12  tw-mx-auto tw-my-4 tw-bg-grey-30 tw-shadow-lg tw-p-4 tw-bg-blac">
                <div className="tw-flex tw-row-auto tw-justify-between tw-cursor-pointer "  onClick={()=>onSelect()}>
                    <span className="tw-text-3xl">{data.title.length > 25 ? data.title.slice(0,20) : data.title}<span
                        className="tw-m-2 tw-text-emerald-500">({data.itemCards.length})</span></span>
                    <span>⬇️</span>
                </div>
                {
                    showItems && ( closed && <ItemList  items={data.itemCards} />)
                }

            </div>


            {/* accordian body*/}

        </div>
    )
}

export default RestaurantCategory