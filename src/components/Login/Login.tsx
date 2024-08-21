import logo from "../../images/logo.jpg"
import './styles.css';
import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { DBContext } from "../../DataBase/database";
import { useNavigate } from "react-router-dom";

type User = {
    name: string,
    email: string,
    password: string
}

export const Login = () => {
    const [loggedemail, setLoggedEmail] = useState("");
    const [password, setPassword] = useState("");
    const { users, setLogged } = useContext(DBContext);
    const navigate = useNavigate();

    function loginIn() {
        const loggedUser: User = users.find((user: User) => {
            return user.email === loggedemail
        })
        setLogged(loggedUser)
        if (loggedUser) {
            if (loggedUser.password === password) {
                navigate("/Logged");
                setLoggedEmail("")
                setPassword("")
            } else {
                window.alert("Missing password or password incorrect!");
            }
        }
        if (!loggedUser) {
            window.alert("User not found or wrong password!");
        }
    }

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
                    <input placeholder="Email" value={loggedemail} onChange={(e) => setLoggedEmail(e.target.value)} />
                    <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <Link to="/ChangePassword" className="anchor"><p>Change password</p></Link>
                <button className="signin-button" onClick={() => loginIn()}>Sign In</button>
                <div className="signup-link">
                    <p>Don&apos;t have an account?</p>
                    <Link to="/Register" className="anchor"><p>Signup now</p></Link>
                </div>

            </div>
        </>
    )
}


