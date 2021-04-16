import React from "react"

const FeaturedWorksItem = (props) => {
    return(
        <article className="works-item">
                <a href="/" className="works__img bgimg">
                    <img src="src/img/work-img/work1.png" alt="work1.png"/>
                </a>
                <div className="works__body">
                    <a href="/" className="works__title">{props.title}</a>
                    <div className="works__info">
                        <div className="works__year">{props.year}</div>
                        <div className="works__category">{props.category}</div>
                    </div>
                    <div className="works__text text">{props.text}</div>
                </div>
        </article>
    )
}

export default FeaturedWorksItem