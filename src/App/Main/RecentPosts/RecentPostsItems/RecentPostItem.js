import React from "react"

const  RecentPostItem = (props) =>{
    return(
        <>
            <article className="recent-posts__item recent-post">
                <a className="recent-post__title" href="#">{props.name}</a>
                <div className="recent-post__info">{props.date}<span>|</span>{props.group}</div>
                <div className="recent-post__text text">{props.description}</div>
            </article>
        </>
    )
}

export default RecentPostItem