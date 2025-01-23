import "../styles/header.css";

const header = document.createElement("header");


const nav = document.createElement("nav");
const navList = document.createElement("ul");
navList.classList.add("header-container-projects")
const navItem = document.createElement("li");
navItem.textContent = "Rutina Matutina"
navItem.classList.add("nav-item")
const navItem1 = document.createElement("li");
navItem1.textContent = "Compras"
navItem1.classList.add("nav-item")
navItem1.classList.add("active")
const navItem2 = document.createElement("li");
navItem2.classList.add("nav-item")
navItem2.textContent = "Estudiar"

nav.appendChild(navList);

navList.appendChild(navItem)
navList.appendChild(navItem1)
navList.appendChild(navItem2)


header.appendChild(nav)
export default header;