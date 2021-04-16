import React from "react"
import FeaturedWorksItem from "./FeaturedWorksItem"
import workItems from "./Worksitems"

const FeaturedWorksItemsList = () =>{
    return(
        <>
            {
                workItems.map(({
                    title,
                    year,
                    category,
                    text,
                    image,
                    },index) => (
                        <div className="fetured-works__item works" key={index}>
                            <FeaturedWorksItem
                                title = {title}
                                year = {year}
                                category = {category}
                                text = {text}
                                image={image}
                            />
                        </div>
                ))
            }
        </>
        
    )
}

export default FeaturedWorksItemsList