import React from "react"
import { Route } from "react-router"
import MainPage from "./MainPage/MainPage"
import WorksPage from "./WorksPage/WorksPage"

const Main = () => {
    return(
        <>
            <main className="page">
                <Route path="/works" exact component={WorksPage}/>
                <Route path="/" exact component={MainPage}/>
            </main>
        </>
    )
}

export default Main