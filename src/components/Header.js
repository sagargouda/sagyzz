import './Header.css';
import {Link} from "react-router-dom";
export default function Header(){
    return(
    <div className="header-container">
        <div className="logo-container">
            <img src={require('./logos.png')} alt="sagyzz-logo" className="logo"/>
        </div>
        <div className="nav-container">
            <ul className="nav-container__list">
                <li className="nav-container__item"><Link to="/"  className="nav-link">Home</Link></li>
                <li className="nav-container__item"><Link to="/about"  className="nav-link">About</Link></li>
                <li className="nav-container__item"><Link to="/contact"  className="nav-link">Contact</Link></li>
            </ul>
        </div>
    </div>
    )
}