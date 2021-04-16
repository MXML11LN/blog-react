import React from "react"

const  RecentPostItem = ({
    name,
    date,
    group,
    description,
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

export default RecentPostItem