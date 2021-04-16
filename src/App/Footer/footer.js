import React from "react"

const Footer = () => {
    return(
        <>
            <footer className="footer">
                <div className="footer__content container">
                    <div className="footer__social social">
                        <a href="" className="social-item">
                            <img src="src/svg/fb.svg" alt="facebook"/>
                        </a>
                        <a href="" className="social-item">
                            <img src="src/svg/insta.svg" alt="instagram"/>
                        </a>
                        <a href="" className="social-item">
                            <img src="src/svg/twitter.svg" alt="twitter"/>
                        </a>
                        <a href="" className="social-item">
                            <img src="src/svg/Linkedin.svg" alt="Linkedin"/>
                        </a>
                        </div>
                    <div className="footer__copywrite">Copyright ©2020 All rights reserved</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;