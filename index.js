const botonnavbar = document.querySelector(".botonNavbar")
const navbarmenu = document.querySelector(".navbarMenu")

botonnavbar.addEventListener("click", () => {
    navbarmenu.classList.toggle("navbarMenuVisible");

if(navbarmenu.classList.contains("navbarMenuVisible")) {
    botonnavbar.setAttribute("aria-label","Cerrar menú");
} else {
    botonnavbar.setAttribute("aria-label","Abrir menú");
}
})
