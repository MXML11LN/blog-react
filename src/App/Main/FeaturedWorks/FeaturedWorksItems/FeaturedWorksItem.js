import React from "react"
import PropTypes from "prop-types"

const FeaturedWorksItem = ({
    title,
    year,
    category,
    text,
    image,
}) => {
    return(
        <article className="works-item">
                <a href="/" className="works__img bgimg">
                    <img src={image} alt="work1.png"/>
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

FeaturedWorksItem.propTypes = {
    title:PropTypes.string,
    year:PropTypes.string,
    category:PropTypes.string.isRequired,
    text:PropTypes.string,
}
FeaturedWorksItem.defaultProps= {
    image: "img/work-img/unnamed.png",
    title: "No title ...",
    year: "2021",
    text: "No text ...",
}


export default FeaturedWorksItem