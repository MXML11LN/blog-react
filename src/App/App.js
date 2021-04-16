import React from "react"
import "../common/style.css"
import Header from "./Header/header"
import Main from "./Main/Main"
import Footer from "./Footer/footer"

const App = () =>{
    return(
        <>
            <div className="wrapper">
                <Header/>
                <Main/>
                <Footer/>
            </div> 
        </>
    )
}

export default App