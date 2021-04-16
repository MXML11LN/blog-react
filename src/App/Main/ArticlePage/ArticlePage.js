import React from "react" 

const Article = () =>{
    return(
        <>
            <main className="page">
                <div className="article__container container">
                    <h1 className="article__title ">Designing Dashboards with usability in mind</h1>
                    <div className="article__info">
                        <div className="article__year">2020</div>
                        <div className="article__category">Dashboard, User Experience Design</div>
                    </div>
                    <div className="article__text text">
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                        Velit officia consequat duis enim velit mollit. 
                        Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src="img/article/article.png" alt="src/img/article/article.png"/>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                            Velit officia consequat duis enim velit mollit. 
                            Exercitation veniam consequat sunt nostrud amet.
                        </p>
                        <img src="img/article/article1.png" alt="src/img/article/article.png"/>
                        <img src="img/article/article2.png" alt="src/img/article/article.png"/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Article