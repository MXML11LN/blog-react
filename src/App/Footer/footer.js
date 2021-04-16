import React from "react"
import FB from "./Footer_links_svg/fb.svg"
import Insta from "./Footer_links_svg/insta.svg"
import Twitter from "./Footer_links_svg/twitter.svg"
import Linkedin from "./Footer_links_svg/Linkedin.svg"

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <div className="footer__content container">
                    <div className="footer__social social">
                        <a href="" className="social-item">
                            <img src={FB} alt="facebook"/>
                        </a>
                        <a href="" className="social-item">
                            <img src={Insta} alt="instagram"/>
                        </a>
                        <a href="" className="social-item">
                            <img src={Twitter} alt="twitter"/>
                        </a>
                        <a href="" className="social-item">
                            <img src={Linkedin} alt="Linkedin"/>
                        </a>
                        </div>
                    <div className="footer__copywrite">Copyright ©2020 All rights reserved</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;