import React from "react"
import RecentPostsHeader from "./RecentPostsHeader/RecentPostsHeader"
import RecentPostsItems from "./RecentPostsItems/RecentPostItems"


const RecentPosts = () =>{
    return(
        <>
            <div className="recent-posts__container container">
                <RecentPostsHeader/>
                <div className="recent-posts__items">
                    <RecentPostsItems/>
                </div>
            </div>
        </>
    )
}

export default RecentPosts