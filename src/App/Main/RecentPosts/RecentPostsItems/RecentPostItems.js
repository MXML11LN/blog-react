import React from "react"
import RecentPostItem from "./RecentPostItem"
import postItems from "./postItems"

const RecentPostsItems= () =>{
    return(
        <>
            {
            postItems.map(({
                name,
                date,
                group,
                description,
                },index)=>(
                    <div className="recent-posts__column" key={index}>
                    <RecentPostItem
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

export default RecentPostsItems

