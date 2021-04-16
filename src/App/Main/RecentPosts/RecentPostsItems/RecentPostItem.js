import React from "react"
import PropTypes from "prop-types"

const RecentPostItem = ({
    name= "No title ...",
    date="2021",
    group,
    description="No decsription ...",
}) =>{
    return(
        <>
            <article className="recent-posts__item recent-post">
                <a className="recent-post__title" href="#">{name}</a>
                <div className="recent-post__info">{date}<span>|</span>{group}</div>
                <div className="recent-post__text text">{description}</div>
            </article>
        </>
    )
}

RecentPostItem.propTypes = {
    name:PropTypes.string,
    date:PropTypes.string,
    group:PropTypes.string.isRequired,
    description:PropTypes.string,
}

export default RecentPostItem