import React from "react"
import BlogItem from "./BlogItem"
import postItems from "../../RecentPosts/RecentPostsItems/postItems"

const BlogItems = () => {
    return(
        <>
        {
            postItems.map(({
                name,
                date,
                group,
                description,
                },index)=>(
                    <div className="blog__items" key={index}>
                        <BlogItem
                            name = {name}
                            date = {date}
                            group= {group}
                            description = {description}
                        />
                </div>
                ))
        }
        </>
    )
}

export default BlogItems