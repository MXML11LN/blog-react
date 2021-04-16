import React from "react"
import { Route } from "react-router"
import BlogPage from "./BlogPage/BlogPage"
import MainPage from "./MainPage/MainPage"
import WorksPage from "./WorksPage/WorksPage"

const Main = () => {
    return(
        <>
            <main className="page">
                <Route path="/works" exact render={WorksPage}/>
                <Route path="/" exact component={MainPage}/>
                <Route path="/blog" exact component={BlogPage}/>
            </main>
        </>
    )
}

export default Main