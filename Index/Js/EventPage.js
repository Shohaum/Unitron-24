import { roboEventData, nonTechEventData, gamingEventData, codingEventData } from "./EventData.js";

const roboEventCardContainer = document.querySelector('.robotics-container');
const nonTechEventCardContainer = document.querySelector('.non-tech-container');
const gamingEventCardContainer = document.querySelector('.gaming-container');
const codingEventCardContainer = document.querySelector('.coding-container');

let roboEvents = roboEventData.map((item) => {
    return `
    <div class="event-card" data-id=${item.id}>
        <div class="event-image">
            <img src=${item.img} alt="">
        </div>
    </div>`
})

let nonTechEvents = nonTechEventData.map((item) => {
    return `
    <div class="event-card" data-id=${item.id}>
        <div class="event-image">
            <img src=${item.img} alt="">
        </div>
    </div>`
})

let gamingEvents = gamingEventData.map((item) => {
    return `
    <div class="event-card" data-id=${item.id}>
        <div class="event-image">
            <img src=${item.img} alt="">
        </div>
    </div>`
})

let codingEvents = codingEventData.map((item) => {
    return `
    <div class="event-card" data-id=${item.id}>
        <div class="event-image">
            <img src=${item.img} alt="">
        </div>
    </div>`
})

roboEventCardContainer.innerHTML = `
    ${roboEvents.join('')}
`

nonTechEventCardContainer.innerHTML = `
    ${nonTechEvents.join('')}
`

gamingEventCardContainer.innerHTML = `
    ${gamingEvents.join('')}
`

codingEventCardContainer.innerHTML = `
    ${codingEvents.join('')}
`
