import './About.css'

export default function About(){
    return(
        <section className="about">
            <h1>About Us</h1>
            <p style={{fontWeight: 800}}>
                Sagyzz is a restaurant platform
            </p>
            <div className="about-info">
                <div>
                    <p> Sagyzz is your go-to online food destination, crafted for your convenience and culinary cravings. Born from the visionary mind of Sagy, our founder, Sagyzz brings the ease of Swiggy and the diverse culinary experiences of Zomato to your fingertips. Imagine a place where ordering food is a breeze, and discovering new flavors is as simple as a click. That's Sagyzz for you!
                    </p>
                    <button id="aboutbtn">Read More...</button>
                </div>
            </div>
        </section>
    )
}