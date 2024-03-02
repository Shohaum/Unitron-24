const newEvent = document.querySelector(".new-event-info");
const newEventHeader = document.querySelector(".new-events");

newEvent.addEventListener("click", () => {
    newEventHeader.classList.add("new-event-opened");
})