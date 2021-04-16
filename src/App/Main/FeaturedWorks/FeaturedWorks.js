import React from "react"
import FeaturedWorksItems from "./FeaturedWorksItems/FeaturedWorksItems"
const FeaturedWorks= () => {
    return(
        <>
            <div className="fetured-works__container container">
                <div className="fetured-works__title title-posts">Featured works</div>
                <div className="fetured-works__item works">
                    <FeaturedWorksItems/>
                </div>
            </div>
        </>
    )
}

export default FeaturedWorks