const loader = document.querySelector(".pre-loader");

function hideLoader(){
    setTimeout(() => {
        loader.classList.add("hide-loader");
    }, 3000);
}

hideLoader();