import './RestCard.css';


 function RestCard({resData}){
    return(
        <>
            <div className="container">
                <div className="image-container">
                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/` + resData?.info?.cloudinaryImageId
                    }
                        alt="restaurant identifier"
                        className="image"
                    />
                </div>

                <div className="content-container">
                    <h3>{resData.info?.name.length > 12 ? resData?.info?.name.slice(0,20) : resData?.info?.name }</h3>
                    <h5><span className="publish">{resData.info?.cuisines.length > 3 ? resData.info?.cuisines.splice(3,resData.info?.cuisines.length-1) : resData.info?.cuisines.join(',')  }</span></h5>
                    <h2> {resData.info.avgRating}⭐</h2>
                    <p>
                    </p>
                </div>
            </div>

        </>
    )
}

// higher order component
export const withFastLabel = (RestCard)=>{
    return (props) =>{
         return (
             <div className="tw-relative " >
                 <label className="tw-absolute tw-top-0  tw-z-10  tw-bg-black tw-text-white tw-rounded tw-px-2 tw-py-1.5">Fast Delivery</label>
                 <RestCard  {...props}/>
             </div>
    )
    }
}



export default RestCard