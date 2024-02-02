import './RestCard.css';


export default function RestCard({resData}){
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
                    <h3>{resData.info?.name}</h3>
                    <h5><span className="publish">{resData.info?.cuisines?.join(',')}</span></h5>
                    <h2> {resData.info.avgRating}⭐</h2>
                    <p>
                    </p>
                </div>
            </div>

        </>
    )
}