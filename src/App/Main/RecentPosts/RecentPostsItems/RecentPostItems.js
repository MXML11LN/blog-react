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
                    name = {item.name}
                    date = {item.date}
                    group= {item.group}
                    description = {item.description}
                />
            </div>
            ))
        }
        </>
    )
}

export default RecentPostsItems

