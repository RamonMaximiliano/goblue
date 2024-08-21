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
    const { users, logged, setLogged } = useContext(DBContext);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedUser = users.find((user: User) => {
            return user.email === loggedemail
        })
        setLogged(loggedUser)
    }, [loggedemail]);

    function loginIn() {
        if (logged) {
            navigate("/Logged");
        } else {
            window.alert("User not found!");
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


