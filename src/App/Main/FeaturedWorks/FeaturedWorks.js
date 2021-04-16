import React from "react"
import FeaturedWorksItemsList from "./FeaturedWorksItems/FeaturedWorksItemsList"


const FeaturedWorks= () => {
    return(
        <>
            <div className="fetured-works__container container">
                <div className="fetured-works__title title-posts">Featured works</div>
                    <FeaturedWorksItemsList/>
            </div>
        </>
    )
}

export default FeaturedWorks