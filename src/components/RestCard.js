import './RestCard.css';


export default function RestCard({resData}){
    return(
        <>
            <div className="container">
                <div className="image-container">
                    <img

                        alt="restaurant identifier"
                        className="image"
                    />
                </div>

                <div className="content-container">
                    <h3>{resData.name}</h3>
                    <h5><span className="publish">{resData.cuisine}</span></h5>
                    <h2> {resData.rating}</h2>
                    <p>
                    </p>
                </div>
            </div>

        </>
    )
}