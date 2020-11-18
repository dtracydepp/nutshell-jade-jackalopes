export const Nutshell = () => {
    // Render all your UI components here
}

const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent => {
    if(clickEvent.target.id ==="newarticle"){
    // console.log("I hear you")
    const newArticle = new CustomEvent("addNewArticle")
    eventHub.dispatchEvent(newArticle)
    }
})

