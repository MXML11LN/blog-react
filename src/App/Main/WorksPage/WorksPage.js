import React from "react"
import FeaturedWorksItemsList from "../FeaturedWorks/FeaturedWorksItems/FeaturedWorksItemsList"

const WorksPage = () => {
    return(
        <>
        <main className="page">
            <div className="works__items">
                <div className="works__container blog container">
                    <h1 className="works__main-title title">Work</h1>
                    <div className="works">
                        <FeaturedWorksItemsList/>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}
export default WorksPage
