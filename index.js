const navToggle = document.querySelector(".botonNavbar");
const navMenu = document.querySelector(".navbarMenu");
navToggle.addEventListener("click",()=>{
  navMenu.classList.toggle("navbarMenuVisible");
});

const navLink = document.querySelectorAll(".navbarLink")

function linkAction () {
    const navMenu = document.querySelector(".navbarMenu")
    navMenu.classList.remove("navbarMenuVisible")
}
navLink.forEach(n => n.addEventListener('click', linkAction))