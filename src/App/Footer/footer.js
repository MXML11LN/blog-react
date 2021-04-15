import React from "react"

const Footer = () => {
    return(
        <>
            <footer class="footer">
                <div class="footer__content container">
                    <div class="footer__social social">
                        <a href="" class="social-item">
                            <img src="src/svg/fb.svg" alt="facebook"/>
                        </a>
                        <a href="" class="social-item">
                            <img src="src/svg/insta.svg" alt="instagram"/>
                        </a>
                        <a href="" class="social-item">
                            <img src="src/svg/twitter.svg" alt="twitter"/>
                        </a>
                        <a href="" class="social-item">
                            <img src="src/svg/Linkedin.svg" alt="Linkedin"/>
                        </a>
                        </div>
                    <div class="footer__copywrite">Copyright ©2020 All rights reserved</div>
                </div>
            </footer>
        </>
    )
}

export default Footer;