import logo from "../../images/logo.jpg"
import './styles.css';
import { Link } from "react-router-dom";

export const Register = () => {
    return (
        <>
            <div className="register-main">
                <div className="logo-register">
                    <img src={logo} />
                </div>
                <div>
                    <h3>Register in GoGreen</h3>
                    <p>Register to make the world a better place.</p>
                </div>
                <div className="register-input">
                    <input placeholder="Enter your name" />
                    <input placeholder="Enter your email" />
                    <input placeholder="Create password" />
                    <input placeholder="Confirm password" />
                </div>

                <Link to="/" className="anchor"><button className="login-button">Register</button></Link>
                <div className="login-link">
                    <p>Already have an account?</p>
                    <Link to="/" className="anchor"><p>Login now</p></Link>
                </div>

            </div>
        </>
    )
}
