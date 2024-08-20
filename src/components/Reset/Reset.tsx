import logo from "../../images/logo.jpg"
import './styles.css';
import { Link } from "react-router-dom";

export const Reset = () => {
    return (
        <>
            <div className="change-main">
                <div className="logo-change">
                    <img src={logo} />
                </div>
                <div>
                    <h3>Change your password</h3>
                    <p>Change your password to make the world a better place.</p>
                </div>
                <div className="change-input">
                    <input placeholder="Email" />
                    <input placeholder="Old password" />
                    <input placeholder="New password" />
                    <input placeholder="Confirm password" />
                </div>

                <Link to="/" className="anchor"><button className="change-button">Change Password</button></Link>
                <div className="login-link">
                    <p>Already have an account?</p>
                    <Link to="/" className="anchor"><p>Login now</p></Link>
                </div>

            </div>
        </>
    )
}
