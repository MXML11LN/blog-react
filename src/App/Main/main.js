import React from "react"
import Greeting from "./Greeting/Greeting"
import RecentPosts from "./RecentPosts/RecentPosts"
import FeaturedWorks from "./FeaturedWorks/FeaturedWorks"

const Main = () => {
    return(
        <>
            <main className="page">
                    <section className="greeting">
                        <Greeting/>
                    </section>
                    <section className="recent-posts">
                        <RecentPosts/>
                    </section>
                    <section className="featured-works">
                        <FeaturedWorks/>
                    </section>
                </main>
        </>
    )
}

export default Main