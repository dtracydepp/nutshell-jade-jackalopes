// Responsible for displaying the data to the DOM


import { deleteArticle, getArticles, useArticles } from "./NewsProvider.js"
import { NewsAsHTML } from "./NewsHTML.js"

const eventHub = document.querySelector(".container")
const newsContainer = document.querySelector(".newsContainer")

// listens for the new article event 
eventHub.addEventListener("newsStateChanged", () => {

    NewsList()
})

// get the data and pass to function that puts it on the DOM
export const NewsList = () => {
    getArticles()
        .then(() => {
            const activeUser = parseInt(sessionStorage.getItem("activeUser"))
            const news = useArticles().filter(article => article.userId === activeUser)

            render(news)

        })

}
// put the list of articles in the newscontainer


const render = (newsCollection) => {

    let newsHTMLRepresentation = ""
    for (const news of newsCollection) {
        newsHTMLRepresentation += NewsAsHTML(news)
    }

    newsContainer.innerHTML += `
   <h3>News:</h3>
   ${newsHTMLRepresentation}`
    console.log("YAY")
}

// listens for the for the delete button click

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("delete")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        // Invoke the function to delete the article and render the updated list

        deleteArticle(id).then(
            () => {
                const updatednews = useArticles()
                render(updatednews)
            }
        )

    }

})