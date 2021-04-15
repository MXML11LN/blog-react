import React from "react"

const Main = () => {
    return(
        <>
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
        </>
    )
}

export default Main