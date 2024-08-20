import whale from "../../images/whale.jpg"
import './styles.css';
import { Link } from "react-router-dom";

export const Logged = () => {
    return (
        <>
            <div className="main-logged">
                <div className="logged-text">
                    <h1>Welcome <span>max</span>, you are now logged!</h1>
                    <div className="logged-buttons">
                        <Link to="/"><button>Back to Login</button></Link>
                        <button>Delete my User</button>
                    </div>
                </div>
                <img src={whale} />
            </div>
        </>
    )
}
