// turns news data into HTML (from NewsHTML.js) puts news list in the selected element.
import {getArticles, useArticles} from "./NewsProvider.js"
import {NewsAsHTML} from "./NewsHTML.js"

const eventHub = document.querySelector(".container")
const newsContainer = document.querySelector(".newsContainer")

// listens for the new article event 
eventHub.addEventListener ("newsStateChanged", () => {

    NewsList()
})

// get the data and pass to function that puts it on the DOM
export const NewsList = () => {
getArticles()
.then(() => {
    const activeUser = parseInt(sessionStorage.getItem("activeUser"))
    const news = useArticles().filter(article => article.userId === activeUser)

    render (news)

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