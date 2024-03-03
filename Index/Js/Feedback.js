const feedbackForm = document.querySelector(".feedbackForm");

function initMail(e) {
    e.preventDefault();
    let userFeedback = {
        to_name: "Tech Team",
        from_name: "FITIAN",
        message: document.getElementById("feedback").value
    }

    emailjs.send("service_8qqa67c", "template_ivrqw22", { // Service Provider, Template Id
        from_name: userFeedback.from_name,
        to_name: userFeedback.to_name,
        message: userFeedback.message
    }, "Y3mehVpcefI646z75"); // Public Key

    feedbackForm.reset();
}

feedbackForm.addEventListener('submit', initMail);