import React from "react"

const FeaturedWorksItem = ({
    title,
    year,
    category,
    text,
}) => {
    return(
        <article className="works-item">
                <a href="/" className="works__img bgimg">
                    <img src="src/img/work-img/work1.png" alt="work1.png"/>
                </a>
                <div className="works__body">
                    <a href="/" className="works__title">{title}</a>
                    <div className="works__info">
                        <div className="works__year">{year}</div>
                        <div className="works__category">{category}</div>
                    </div>
                    <div className="works__text text">{text}</div>
                </div>
        </article>
    )
}

export default FeaturedWorksItem