// turns news data into HTML (from NewsHTML.js) puts news list in the selected element.
import {getArticles, useArticles} from "./src/scripts/news/NewsProvider.js"
import {NewsAsHTML} from "./src/scripts/news/NewsHTML.js"

const eventHub = document.querySelector(".containter")

// listens for the new article event 
eventHub.addEventListener ("newsStateChangedEvent", () => {

    populateNewsList()
})

// get the data and pass to function that puts it on the DOM
export const NewsList = () => {
getArticles().then(() => {
    const newsFromStateInProvider = useArticles
    render (newsFromStateInProvider)

})

}
// put the list of articles in the newscontainer


const render = (arrayOfArticles) => {

    const newsContainer = document.querySelector(".newsContainer")
    newsContainer.innerHTML = ""

    let buildNewsList = ""
    for (const singleArticle of arrayOfArticles) {
    buildNewsList =+ NewsAsHTML(singleArticle)
}
    
    
   newsContainer.innerHTML += `< div class ="news--list">${buildNewsList}</div>`
    console.log("YAY")
}