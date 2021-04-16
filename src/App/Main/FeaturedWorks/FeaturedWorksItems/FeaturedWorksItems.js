import React from "react"

const FeaturedWorksItems = () =>{
    return(
        <>
            <article classNameName="works-item">
                <a href="/" classNameName="works__img bgimg">
                    <img src="src/img/work-img/work1.png" alt="work1.png"/>
                </a>
                <div classNameName="works__body">
                    <a href="/" classNameName="works__title">Designing Dashboards</a>
                    <div classNameName="works__info">
                        <div className="works__year">2020</div>
                        <div className="works__category">Dashboard</div>
                    </div>
                    <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
            </article>
            <article className="works-item">
                <a href="/" className="works__img bgimg">
                    <img src="src/img/work-img/work2.png" alt="work2.png"/>
                </a>
                <div className="works__body">
                    <a href="/" className="works__title">Vibrant Portraits of 2020</a>
                    <div className="works__info">
                        <div className="works__year">2020</div>
                        <div className="works__category">Illustration</div>
                    </div>
                    <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
            </article>
            <article className="works-item">
                <a href="/" className="works__img bgimg">
                    <img src="src/img/work-img/work3.png" alt="work1.png"/>
                </a>
                <div className="works__body">
                    <a href="/" className="works__title">36 Days of Malayalam types</a>
                    <div className="works__info">
                        <div className="works__year">2020</div>
                        <div className="works__category">Typography</div>
                    </div>
                    <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
            </article>
            <article className="works-item">
                <a href="/" className="works__img bgimg">
                    <img src="src/img/work-img/work4.png" alt="work4.png"/>
                </a>
                <div className="works__body">
                    <a href="/" className="works__title">Components</a>
                    <div className="works__info">
                        <div className="works__year">2020</div>
                        <div className="works__category">Components, Design</div>
                    </div>
                    <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                </div>
            </article>
        </>
    )
}

export default FeaturedWorksItems