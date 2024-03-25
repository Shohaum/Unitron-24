import { eventDescData } from "./EventData.js";

function loadClicks(){
    const eventCard = document.querySelectorAll(".event-card");

    const modalCloseBtn = document.querySelector(".modal-close-btn");
    const eventModal = document.querySelector(".event-card-modal");

    modalCloseBtn.addEventListener("click", () => {
        eventModal.style.display = 'none';
    })

    eventCard.forEach((card)=> {
        card.addEventListener("click", () => {
            const data = card.dataset.id;

            let eventdescription = eventDescData.filter((item) => {
                if(item.id === data){
                    return item;
                }
            })

            const eventModalImage = document.querySelector('.modal-event-image-data');
            eventModalImage.src = `${eventdescription[0].img}`

            const eventDesc = document.querySelector('.event-desc');
            eventDesc.textContent = `${eventdescription[0].desc}`;

            const modalBtnnLinks = document.querySelector(".modal-btn-container");

            if(eventdescription[0].id === 'carnival' || eventdescription[0].id === 'uno' || eventdescription[0].id === '8ballpool'){
                modalBtnnLinks.innerHTML = `
                <button disabled>
                    Offline Registration
                    <span class="modal-btn-span"></span>
                </button>

                <a href="" class="rule-book">
                    Rules
                    <span class="modal-btn-span"></span>
                </a>`
            }
            else{
                modalBtnnLinks.innerHTML = `
                <a href="#" class="register-link">
                    Register
                    <span class="modal-btn-span"></span>
                </a>

                <a href="" class="rule-book">
                    Rules
                    <span class="modal-btn-span"></span>
                </a>
                `
                const registerLink = document.querySelector('.register-link');
                registerLink.href = `${eventdescription[0].link}`;
            }

            const ruleBook = document.querySelector('.rule-book');
            ruleBook.addEventListener("click", () => {
                window.open(`${eventdescription[0].pdf}`, '_blank');
            })

            eventModal.style.display = 'grid';
        })
    })
}


setTimeout(loadClicks, 500);