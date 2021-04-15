import React from "react"

const Greeting =() => {
    return(
        <>
            <div class="greeting__container container">
                <div class="greeting__content">
                    <h1 class="greeting__title title">Hi, I am John,<br/> Creative Technologist</h1>
                    <div class="greeting__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
                    <a href="#" class="greeting__btn btn">Download Resume</a>
                </div>
                <div class="greeting__img">
                    <img src="src/img/avatar.png" alt="johns_avatar"/>
                </div>
            </div>
        </>
    )
}

export default Greeting