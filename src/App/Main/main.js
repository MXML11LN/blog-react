import React from "react"
import Greeting from "./Greeting/Greeting"
import RecentPosts from "./RecentPosts/RecentPosts"
import FeaturedWorks from "./FeaturedWorks/FeaturedWorks"

const Main = () => {
    return(
        <>
            <main class="page">
                    <section class="greeting">
                        <Greeting/>
                    </section>
                    <section class="recent-posts">
                        <RecentPosts/>
                    </section>
                    <section class="featured-works">
                        <FeaturedWorks/>
                    </section>
                </main>
        </>
    )
}

export default Main