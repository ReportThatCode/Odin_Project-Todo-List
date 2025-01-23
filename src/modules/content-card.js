import pen from "../imgs/pencil.svg";
import checkBlank  from "../imgs/checkbox-blank.svg";

const card = document.createElement("div");
card.classList.add("card")

// HEADER CARD
const cardHeader = document.createElement("div");

const cardTitle = document.createElement("h2");
cardTitle.textContent = "Titulo de la tarea";
const contentEdit = document.createElement("div");
const cardEdit = document.createElement("img");
cardEdit.src = pen;
contentEdit.appendChild(cardEdit)

cardHeader.appendChild(cardTitle);
cardHeader.appendChild(contentEdit);
// BODY CARD
const carddescripcion = document.createElement("p");
carddescripcion.textContent = "Soy descripcion de la tarea tipico lorem falopa buy  falopa dont fotget it";
//FOOTER CARD
const cardFooter = document.createElement("div");

// input date
const cardDate = document.createElement("p");
cardDate.textContent = "May/8/2026"

//input status
const labelStatus = document.createElement("label");
labelStatus.setAttribute("for","status")
const labelImg = document.createElement("img")
labelImg.src = checkBlank;
labelStatus.appendChild(labelImg);

const cardStatus = document.createElement("input");
cardStatus.id = "status"
cardStatus.setAttribute("type","checkbox");

cardFooter.appendChild(cardDate);
cardFooter.appendChild(labelStatus);
cardFooter.appendChild(cardStatus);

// APPENDCHILDS
card.appendChild(cardHeader);
card.appendChild(carddescripcion);
card.appendChild(cardFooter)



export default card;