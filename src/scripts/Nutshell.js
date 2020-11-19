export const Nutshell = () => {
    // Render all your UI components here
}


const eventHub = document.querySelector(".container")
eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.id === "addEventButton") {
        const newEventClicked = new CustomEvent("newEventButtonClicked")
        console.log("clicked new EVENT BUTTON", clickEvent)
        eventHub.dispatchEvent(newEventClicked)
    }

})