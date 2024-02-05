import './Header.css';
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
export default function Header(){
    const onlineStatus = useOnlineStatus()
    return(
    <div className="header-container">
        <div className="logo-container">
            <Link to="/"><img src={require('./logos.png')} alt="sagyzz-logo" className="logo"/></Link>
        </div>
        <div className="nav-container">
            <ul className="nav-container__list">
                <li className="nav-container__item">{onlineStatus ? "✅" : "🔴"} </li>
                <li className="nav-container__item"><Link to="/"  className="nav-link">Home</Link></li>
                <li className="nav-container__item"><Link to="/about"  className="nav-link">About</Link></li>
                <li className="nav-container__item"><Link to="/contact"  className="nav-link">Contact</Link></li>
            </ul>
        </div>
    </div>
    )
}