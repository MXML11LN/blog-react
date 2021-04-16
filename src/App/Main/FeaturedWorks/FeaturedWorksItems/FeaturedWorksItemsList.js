import React from "react"
import FeaturedWorksItem from "./FeaturedWorksItem"
import items from "./items"

const FeaturedWorksItemsList = () =>{
    return(
        <>
            {
                items.map((item,index) => (
                    <div className="fetured-works__item works" key={index}>
                        <FeaturedWorksItem
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

export default FeaturedWorksItemsList