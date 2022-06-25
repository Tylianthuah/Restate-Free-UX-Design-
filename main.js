let menu = document.getElementById("menu");
let menuToggle = document.querySelector("#menu-toggle-btn");

menuToggle.addEventListener("click" , () => {
    menuToggle.classList.toggle("activated");
    menu.classList.toggle("activated");
})