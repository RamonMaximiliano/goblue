import logo from "../../images/logo.jpg"
import './styles.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { DBContext } from "../../DataBase/database";
import { useNavigate } from "react-router-dom";

type User = {
    name: string,
    email: string,
    password: string
}

export const Reset = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [email, setEmail] = useState("");
    const [password1, setPassword1] = useState("password1");
    const [password2, setPassword2] = useState("password2");
    const { users } = useContext(DBContext);
    const navigate = useNavigate();

    function changePassword() {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "") {
            window.alert("Please provide an E-mail!");
            return;
        }
        if (!emailRegex.test(email)) {
            window.alert("Please provide a valid E-mail address!");
            return;
        }
        const findUser: User = users.find((user: User) => {
            return user.email === email
        })
        if (!findUser) {
            window.alert("User not found!");
        }
        if (findUser) {
            if (findUser.password != oldPassword) {
                window.alert("The old password is incorrect!");
            }
        }
        if (password1 !== password2) {
            window.alert("The new passwords don't match!");
            return;
        }

        if (findUser.password === oldPassword && findUser) {
            const filteredUsers: Array<User> = users.map((user: User) => {
                let newuser: User
                if (user.email === findUser.email) {
                    user.password = password1
                }
                newuser = user
                return newuser
            })
            console.log(filteredUsers)
            localStorage.removeItem("users");
            localStorage.setItem("users", JSON.stringify(filteredUsers));
            window.alert("Password reset successfully!");
            setOldPassword("")
            setEmail("")
            setPassword1("password1")
            setPassword2("password2")
            navigate("/");
        }
    }

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
                    <input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Old password" onChange={(e) => setOldPassword(e.target.value)} />
                    <input placeholder="New password" onChange={(e) => setPassword1(e.target.value)} />
                    <input placeholder="Confirm password" onChange={(e) => setPassword2(e.target.value)} />
                </div>

                <button className="change-button" onClick={() => changePassword()}>Change Password</button>
                <div className="login-link">
                    <p>Already have an account?</p>
                    <Link to="/" className="anchor"><p>Login now</p></Link>
                </div>

            </div>
        </>
    )
}
