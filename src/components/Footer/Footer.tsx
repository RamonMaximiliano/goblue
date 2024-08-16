import './styles.css';
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import logo from "../../images/logo.jpg"

export const Footer = () => {
    return (
        <>
            <footer className="footer" id="footer">

                <div className="footer-left">
                    <img src={logo} alt={"Logo Image"} className="footer-image"/>
                    <div className="border"></div>    
                    <ul className="footer-list">
                            <li className="m-2">© Copyright 2024 All Rights Reserved</li>
                            <a href="https://ramonmaximiliano.github.io/Portfolio2023/" target="_blank">
                                <li className="hover:underline cursor-pointer duration-200 m-2">Privacy Policy</li>
                            </a>
                            <a href="https://ramonmaximiliano.github.io/Portfolio2023/" target="_blank">
                                <li className="hover:underline cursor-pointer duration-200 m-2">Terms of Use</li>
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