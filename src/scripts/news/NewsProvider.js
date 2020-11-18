// Keeps track of the news data



const eventHub = document.querySelector(".container")

// not sure if I need this
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
// not sure I need this
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

export const deleteArticle = userId => {
    return fetch(`http://localhost:8088/news/${userId}`, {
        method: "DELETE"
    })
        .then(getArticles)

}
