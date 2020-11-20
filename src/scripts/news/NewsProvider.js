// Interacts with the API



const eventHub = document.querySelector(".container")


const dispatchStateChangeEvent = () => {
    const newsStateChangedEvent = new CustomEvent("newsStateChanged")

    eventHub.dispatchEvent(newsStateChangedEvent)
}

let news = []

export const getArticles = () => {
    return fetch("http://localhost:8088/news")
        .then(response => response.json())
        .then(parsedNews => {
            news = parsedNews
            console.log(parsedNews)
        })

}


export const useArticles = () => {
    return news.slice()
}


export const saveArticles =(news) => {
return fetch("http://localhost:8088/news", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(news)
    })
    .then(getArticles)

    .then(dispatchStateChangeEvent) 
}


export const deleteArticle = newsId => {
    return fetch(`http://localhost:8088/news/${newsId}`, {
        method: "DELETE"
    })
        .then(getArticles)

}

