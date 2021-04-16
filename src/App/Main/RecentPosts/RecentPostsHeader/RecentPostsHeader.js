import React from "react"
import { Link } from "react-router-dom"
const RecentPostsHeader = () => {
    return(
        <>
            <div className="recent-posts__header">
                <h3 className="recent-posts__title title-posts">Recent posts</h3>
                <Link to="/blog" className="recent-posts__link">View all</Link>
            </div>
        </>
    )
}

export default RecentPostsHeader