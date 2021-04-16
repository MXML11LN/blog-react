import React from "react"

const BlogItem = ({
    name= "No title ...",
    date="2021",
    group,
    description="No decsription ...",
}) => {
    return(
        <div className="blog__item">
            <a href="#" className="blog__article-name">{name}</a>
            <div className="blog__info">
                <div className="blog-date">{date}</div>
                <span className="blog-sep">|</span>
                <div className="blog-category">{group}</div>
            </div>
            <div className="blog__text text">{description}</div>
        </div>
    )
}
export default BlogItem