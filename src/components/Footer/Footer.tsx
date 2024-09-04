import './styles.css';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import logo from "../../images/logo.jpg"



function deleteUsers(){
    localStorage.clear()
}



export const Footer = () => {
    return (
        <>
            <footer className="footer" id="footer">
                <div className="footer-left">
                    <img src={logo} alt={"Logo Image"} className="footer-image" onClick={()=>deleteUsers()} title="Click here to delete all users from the DB"/>
                    <div className="border"></div>  
                    <ul className="footer-list">
                        <li>© Copyright 2024 All Rights Reserved</li>
                            
                            <a href="https://ramonmaximiliano.github.io/Portfolio2023/" target="_blank">
                                <li>Privacy Policy</li>
                            </a>
                            <a href="https://ramonmaximiliano.github.io/Portfolio2023/" target="_blank">
                                <li>Terms of Use</li>
                            </a>
                    </ul>
                </div>
                <ul className="icons-list">
                    <FaLinkedin size={23} className="footer-icons" />
                    <FaTwitter size={23} className="footer-icons" />
                    <FaFacebookSquare size={23} className="footer-icons" />
                </ul>
            </footer>
        </>
    )
}