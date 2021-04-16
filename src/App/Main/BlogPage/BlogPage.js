import React from "react"
import BlogItems from "./BlogItems.js/Blogitems"

const BlogPage = () => {
    return(
        <>
            <main className="page">
            <div className="blog">
                <div className="blog__container blog container">
                    <h1 className="blog__title title">Blog</h1>
                    <BlogItems/>
                </div>
            </div>
        </main>
        </>
    )
} 

export default BlogPage