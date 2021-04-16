import React from "react"
import RecentPostItem from "./RecentPostItem"
import postItems from "./postItems"

const RecentPostsItems= () =>{
    return(
        <>
            {
            postItems.map((item,index)=>(
                <div className="recent-posts__column" key={index}>
                <RecentPostItem
                    title = {item.title}
                    year = {item.year}
                    category = {item.categoty}
                    text = {item.text}
                />
            </div>
            ))
        }
        </>
    )
}

export default RecentPostsItems

