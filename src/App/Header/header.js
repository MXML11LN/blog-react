import React from "react"

const Header = () => {
    return (
        <>
            <div class="header">
                <div class="header__content">
                    <div class="header__menu menu">
                        <div class="menu__icon icon-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <nav class="menu__body">
                            <ul class="menu__list">
                                <li><a href="#" class="menu__link">Works</a></li>
                                <li><a href="#" class="menu__link">Blog</a></li>
                                <li><a href="#" class="menu__link">Contact</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;