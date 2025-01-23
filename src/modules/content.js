import "../styles/content.css";
import card from "./content-card.js"

const main = document.createElement("main");
main.classList.add("content")

main.appendChild(card);

export default main;