import pen from "../imgs/pencil.svg";
import checkBlank  from "../imgs/checkbox-blank.svg";
import checked  from "../imgs/checked.svg";

export default function createCard(id,title,descripcion,date,priority,status){
const card = document.createElement("div");
card.classList.add("card")
// HEADER CARD
const cardHeader = document.createElement("div");
const cardTitle = document.createElement("h2");
cardTitle.textContent = title;
const contentEdit = document.createElement("div");
const cardEdit = document.createElement("img");
cardEdit.src = pen;
contentEdit.appendChild(cardEdit)

cardHeader.appendChild(cardTitle);
cardHeader.appendChild(contentEdit);
// BODY CARD
const carddescripcion = document.createElement("p");
carddescripcion.textContent = descripcion
//FOOTER CARD
const cardFooter = document.createElement("div");

// input date
const cardDate = document.createElement("p");
cardDate.textContent = date

//input status
const labelStatus = document.createElement("label");
labelStatus.classList.add("main-checkTask")
labelStatus.dataset.id = id
labelStatus.setAttribute("for","status")

const labelImg = document.createElement("img")

status === true ? labelImg.src = checked : labelImg.src = checkBlank
labelStatus.appendChild(labelImg);

const cardStatus = document.createElement("input");
cardStatus.id = "status"
cardStatus.setAttribute("type","checkbox");

// PRIORITY
switch (priority){
    case "Low":
        card.style.borderLeft = "solid 3px green"
        break
    case "Normal":
        card.style.borderLeft = "solid 3px yellow"
        break
    case "High":
        card.style.borderLeft = "solid 3px red"
        break
}


cardFooter.appendChild(cardDate);
cardFooter.appendChild(labelStatus);
cardFooter.appendChild(cardStatus);

// APPENDCHILDS
card.appendChild(cardHeader);
card.appendChild(carddescripcion);
card.appendChild(cardFooter)

return card

}

