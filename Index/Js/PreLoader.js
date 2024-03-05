const loader = document.querySelector(".pre-loader");

function hideLoader(){
    setTimeout(() => {
        loader.classList.add("hide-loader");
    }, 4000);
}

hideLoader();