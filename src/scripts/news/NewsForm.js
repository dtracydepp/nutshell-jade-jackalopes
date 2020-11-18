// creates the news form and renders to the DOM, click event for the save button, and save will grab values from input and build a new object to post news on API.


import {saveArticles} from "./NewsProvider.js"


const contentTarget = document.querySelector(".newsModalContainer")
const eventHub = document.querySelector(".container")


// function that puts the HTML for the news form on the DOM
const render = () => {
    console.log("Yes, here is the news form")
    contentTarget.innerHTML = `
    <h3>New Article</h3>
    <form action="" class = "newsContainer">
    <fieldset>
        <label for "title">Article Title:</label>
        <textarea id="news--title" placeholder="Your News Here"></textarea>
    </fieldset>
    <fieldset>
        <label for "synopsis">Article Synopsis:</label>    
        <textarea id="news--synopsis" placeholder="Synopsis"></textarea>
    </fieldset>
    <fieldset>
        <label for "url">Link to Article:</label>
        <textarea id="news--url" placeholder="url"></textarea>
    </fieldset>
    </form>
        <button id="saveArticle">Save Article</button>
    `

    // not sure how to do the return statement
}

// not sure if this is right
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id === "saveArticle") {
        console.log(clickEvent)
        const title = document.querySelector("#news--title").value
        const synopsis = document.querySelector("#news--synopsis").value
        const url = parseInt(document.querySelector("#news--url").value)
        const timestamp = Date.now()

// turns user input values into news object to be sent to API
        const newArticle = {
            title,
            synopsis,
            url,
            userId,
            timestamp
        }
// Send the article to the API
        saveArticles(newArticle)
    }
})



// function to render the form for adding news articles
export const makeNoteForm = () => {  
  
    console.log("Will my news form show?")
    render ()

}

eventHub.addEventListener("addNewArticle", makeNoteForm)