import React from "react"

const FeaturedWorks= () => {
    return(
        <>
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
        </>
    )
}

export default FeaturedWorks