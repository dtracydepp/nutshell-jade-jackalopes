


//import { useEvents } from "../events/EventProvider.js";

const eventHub = document.querySelector(".container")
const modalContainer = document.querySelector(".modal__eventModalContainerr")


// LISTEN FOR "sneakerCardClicked" EVENT, FIND SNEAKER BY ID, AND REACT BY OPENING MODAL WITH THAT CURRENT SNEAKER
eventHub.addEventListener("newEventButtonClicked", event => {
    const sneakerId = event.detail.sneakerId
    const currentSneaker = useSneakers().find(sneaker => sneaker.id === sneakerId)
    openEventModal(currentSneaker)
})

// FUNCTION TO OPEN SNEAKER MODAL (TAKES SNEAKER OBJECT AS ARGUMENT)       <OUR FORMS NEED TO GO HERE
const openEventModal = () => {
    modalContainer.innerHTML += `
    <div id="event__modal">
        <div class="modal--content">
            <input id="event--name" type="text" placeholder="Event Name"/>
            <input id="event--date" type="date"/>
            <input id="event--location" type="number" placeholder="Event Zip Code"/>
            <button id="saveEvent">Save Event</button>
        </div>
    </div>
    `
}


// LISTEN FOR CLICK EVENT WITH ID OF "modal--close" AND REACT BY CLOSING MODAL
eventHub.addEventListener("click", (event) => {
    if (event.target.id === "#saveEvent") {
        closeEventModal()
    }
})

// FUNCTION TO CLOSE SNEAKER MODAL AND CLEAR CONTAINER
const closeEventModal = () => {
    modalContainer.innerHTML = ""
}
