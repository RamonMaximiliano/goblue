import whale from "../../images/whale.jpg"
import './styles.css';
import { useContext } from "react";
import { DBContext } from "../../DataBase/database";
import { useNavigate } from "react-router-dom";

type User = {
    name: string,
    email: string,
    password: string
}

export const Logged = () => {
    const { users, logged, setLogged } = useContext(DBContext);
    const navigate = useNavigate();

    function backLogin() {
        setLogged()
        navigate("/")
    }

    function deleteUser() {
        const filteredUsers: Array<User> = users.filter((user: User) => {
            return user.email != logged.email
        })
        localStorage.removeItem("users")
        localStorage.setItem("users", JSON.stringify(filteredUsers));
        window.alert("User deleted successfully!");
        setLogged()
        navigate("/")
    }

    return (
        <>
            <div className="main-logged">
                <div className="logged-text">
                    <h1>Welcome <span>{logged.name}</span>, you are now logged!</h1>
                    <div className="logged-buttons">
                        <button onClick={() => backLogin()}>Back to Login</button>
                        <button onClick={() => deleteUser()}>Delete my User</button>
                    </div>
                </div>
                <img src={whale} />
            </div>
        </>
    )
}
