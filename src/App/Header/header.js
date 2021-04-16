import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__content">
                    <div className="header__menu menu">
                        <div className="menu__icon icon-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav className="menu__body">
                            <ul className="menu__list">
                                <li><Link to="/works" className="menu__link">Works</Link></li>
                                <li><Link to="/blog" className="menu__link">Blog</Link></li>
                                <li><Link to="/" className="menu__link">Contacts</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;