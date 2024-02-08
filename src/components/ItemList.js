const imageUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"

const ItemList = ({items}) => {
console.log(items)
    return (
        <div >
            {items.map((item,index)=>{
                return (
                    <div key={items?.card?.info?.id || index} className="tw-p-4 tw-m-2 tw-border-gray-150 tw-border-b-2 tw-text-left tw-flex tw-flex-row-reverse tw-justify-between ">
                        {
                            item?.card?.info?.imageId ?
                                <img className="tw-w-40 tw-rounded-[1rem]" src={imageUrl + item?.card?.info?.imageId}
                                     alt="menu-lists"/>  : <img className="tw-w-40 tw-rounded-[1rem]" src="https://rotationalmoulding.com/wp-content/uploads/2017/02/NoImageAvailable-768x510.jpg" alt="alternate"/>
                        }

                        <div >
                            <div>
                                <span className="tw-py-2 tw-text-xl">{item?.card?.info?.name}</span>
                                <span className="tw-block tw-text-sm"> ₹ {item?.card?.info?.price ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}</span>
                            </div>
                            <p className="tw-text-xs tw-overflow-hidden tw-w-10/12 tw-my-2 ">
                                {item?.card?.info?.description ? item?.card?.info?.description : "No description available" }
                            </p>
                            <button className="tw-px-3 tw-py-2 tw-bg-green-400 tw-rounded-lg tw-shadow-lg tw-my-2 tw-hover:tw-bg-amber-800 ">Add +</button>
                        </div>

                    </div>
                )
            })}
        </div>
    )
}

export default ItemList;