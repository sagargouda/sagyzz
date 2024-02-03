import './Error.css';
import errorImage from './error.png';
import {useRouteError} from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    return (

            <div className="error-content">
                <h1 className="error-title">{err.status}</h1>
                <p className="error-message">Oops! Looks like you've hit a wrong route.</p>
                <img src={errorImage} alt="error png" className="error-image" />
                <p className="error-hint">But don't worry, our Sagyzz engineers are on it! Keep hustling.</p>
            </div>

    );
}

export default Error;