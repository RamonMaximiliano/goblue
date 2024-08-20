import logo from "../../images/logo.jpg"
import './styles.css';
import { Link } from "react-router-dom";

export const Login = () => {
    return (
        <>
            <div className="login-main">
                <div className="logo-login">
                    <img src={logo} />
                </div>
                <div>
                    <h3>Welcome to GoGreen</h3>
                    <p>Log in to make the world a better place.</p>
                </div>
                <div className="login-input">
                    <input placeholder="Email" />
                    <input placeholder="Password" />
                </div>

                <Link to="/ChangePassword" className="anchor"><p>Change password</p></Link>
                <Link to="/Logged" className="anchor"><button className="signin-button">Sign In</button></Link>
                <div className="signup-link">
                    <p>Don&apos;t have an account?</p>
                    <Link to="/Register" className="anchor"><p>Signup now</p></Link>
                </div>

            </div>
        </>
    )
}


