import './Header.css'
export default function Header(){
    return(
    <div className="header-container">
        <div className="logo-container">
            <img src={require('./sagyzz.png')} alt="sagyzz-logo" className="logo"/>
        </div>
        <div className="nav-container">
            <ul className="nav-container__list">
                <li className="nav-container__item">Home</li>
                <li className="nav-container__item">About</li>
                <li className="nav-container__item">Contact us</li>
            </ul>
        </div>
    </div>
    )
}