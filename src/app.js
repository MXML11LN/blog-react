import React from "react"
import "./style.css"


const App = () =>{
    return(
        <>
            <div class="wrapper">
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
                                    <li><a href="works.html" class="menu__link">Works</a></li>
                                    <li><a href="blog.html" class="menu__link">Blog</a></li>
                                    <li><a href="#" class="menu__link">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <main class="page">
                    <section class="greeting">
                        <div class="greeting__container container">
                            <div class="greeting__content">
                                <h1 class="greeting__title title">Hi, I am John,<br/> Creative Technologist</h1>
                                <div class="greeting__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                <a href="#" class="greeting__btn btn">Download Resume</a>
                            </div>
                            <div class="greeting__img">
                                <img src="src/img/avatar.png" alt="johns_avatar"/>
                            </div>
                        </div>
                    </section>
                    <section class="recent-posts">
                        <div class="recent-posts__container container">
                            <div class="recent-posts__header">
                                <h3 class="recent-posts__title title-posts">Recent posts</h3>
                                <a href="#" class="recent-posts__link">View all</a>
                            </div>
                            <div class="recent-posts__items">
                                <div class="recent-posts__column">
                                    <article class="recent-posts__item recent-post">
                                        <a class="recent-post__title" href="#">Making a design system from scratch</a>
                                        <div class="recent-post__info">12 Feb 2020 <span>|</span> Design, Pattern</div>
                                        <div class="recent-post__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                                        </div>
                                    </article>
                                </div>
                                <div class="recent-posts__column">
                                    <article class="recent-posts__item recent-post">
                                        <a class="recent-post__title" href="#">Creating pixel perfect icons in Figma</a>
                                        <div class="recent-post__info">12 Feb 2020 <span>|</span> Figma, Icon Design</div>
                                        <div class="recent-post__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                    </article>
                                </div>
                                <div class="recent-posts__column">
                                    <article class="recent-posts__item recent-post">
                                        <a class="recent-post__title" href="#">Making a design system from scratch</a>
                                        <div class="recent-post__info">12 Feb 2020 <span>|</span> Design, Pattern</div>
                                        <div class="recent-post__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                    </article>
                                </div>
                                <div class="recent-posts__column">
                                    <article class="recent-posts__item recent-post">
                                        <a class="recent-post__title" href="#">Creating pixel perfect icons in Figma</a>
                                        <div class="recent-post__info">12 Feb 2020 <span>|</span> Figma, Icon Design</div>
                                        <div class="recent-post__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="featured-works">
                        <div class="fetured-works__container container">
                            <div class="fetured-works__title title-posts">Featured works</div>
                            <div class="fetured-works__item works">
                                <article class="works-item">
                                    <a href="#" class="works__img bgimg">
                                        <img src="src/img/work-img/work1.png" alt="work1.png"/>
                                    </a>
                                    <div class="works__body">
                                        <a href="#" class="works__title">Designing Dashboards</a>
                                        <div class="works__info">
                                            <div class="works__year">2020</div>
                                            <div class="works__category">Dashboard</div>
                                        </div>
                                        <div class="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                    </div>
                                </article>
                                <article class="works-item">
                                    <a href="#" class="works__img bgimg">
                                        <img src="src/img/work-img/work2.png" alt="work2.png"/>
                                    </a>
                                    <div class="works__body">
                                        <a href="#" class="works__title">Vibrant Portraits of 2020</a>
                                        <div class="works__info">
                                            <div class="works__year">2020</div>
                                            <div class="works__category">Illustration</div>
                                        </div>
                                        <div class="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                    </div>
                                </article>
                                <article class="works-item">
                                    <a href="#" class="works__img bgimg">
                                        <img src="src/img/work-img/work3.png" alt="work1.png"/>
                                    </a>
                                    <div class="works__body">
                                        <a href="#" class="works__title">36 Days of Malayalam types</a>
                                        <div class="works__info">
                                            <div class="works__year">2020</div>
                                            <div class="works__category">Typography</div>
                                        </div>
                                        <div class="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                    </div>
                                </article>
                                <article class="works-item">
                                    <a href="#" class="works__img bgimg">
                                        <img src="src/img/work-img/work4.png" alt="work4.png"/>
                                    </a>
                                    <div class="works__body">
                                        <a href="#" class="works__title">Components</a>
                                        <div class="works__info">
                                            <div class="works__year">2020</div>
                                            <div class="works__category">Components, Design</div>
                                        </div>
                                        <div class="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </main>
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
            </div> 
        </>
    )
}

export default App