import logo from "../../images/logo.jpg"
import './styles.css';

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

                <a href="#" className="anchor"><p>Change password</p></a>

                <button className="signin-button">Sign In</button>

                <div className="signup-link">
                    <p>Don&apos;t have an account?</p>
                    <a href="#" className="anchor"><p>Signup now</p></a>
                </div>

            </div>
        </>
    )
}


