import { useState } from "react";
import logo from "../../images/logo.jpg"
import './styles.css';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DBContext } from "../../DataBase/database";
import { useNavigate } from "react-router-dom";

type User = {
    name: string,
    email: string,
    password: string
}

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("password1");
    const [password2, setPassword2] = useState("password2");
    const { users, setUsers } = useContext(DBContext);
    const navigate = useNavigate();

    function setUser() {
        const findUser = users.find((user: User) => {
            return user.email === email
        })

        if (!findUser) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (name === "") {
                window.alert("Please provide a Name!");
                return;
            }
            if (email === "") {
                window.alert("Please provide an E-mail!");
                return;
            }
            if (!emailRegex.test(email)) {
                window.alert("Please provide a valid E-mail address!");
                return;
            }
            if (password1 !== password2) {
                window.alert("The passwords don't match!");
                return;
            }

            const newUser: User = {
                name: name,
                email: email,
                password: password1
            };

            if (Array.isArray(users)) {
                setUsers([...users, newUser]);
                localStorage.setItem("users", JSON.stringify([...users, newUser]));
                window.alert("User created successfully!");
                setName("")
                setEmail("")
                setPassword1("password1")
                setPassword2("password2")
                navigate("/");
            } else {
                console.error('users is not an array:', users);
            }
        } else {
            window.alert("There is already a user with this e-mail!")
        }
    }

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
                    <input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Create password" onChange={(e) => setPassword1(e.target.value)} />
                    <input placeholder="Confirm password" onChange={(e) => setPassword2(e.target.value)} />
                </div>

                <button className="login-button" onClick={() => setUser()}>Register</button>
                <div className="login-link">
                    <p>Already have an account?</p>
                    <Link to="/" className="anchor"><p>Login now</p></Link>
                </div>
            </div>
        </>
    )
}
