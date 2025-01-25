import pen from "../imgs/pencil.svg";
//import checkBlank  from "../imgs/checkbox-blank.svg";
import checked  from "../imgs/check.svg";

//pinchos priority
import red from "../imgs/pinchoRed.png"
import yellow from "../imgs/pinchoYellow.png"
import green from "../imgs/pinchoGreen.png"


const componentsCard = function (){
    const tacks = ()=>{
        const contentTacks = document.createElement("div")
        contentTacks.classList.add("tacks")
        const TacksImg  = document.createElement("img"); 
        contentTacks.appendChild(TacksImg)
       
        return contentTacks
    }

    const edit = (id)=>{
        const editCard = document.createElement("div");
        editCard.classList.add("edit-card")
        editCard.dataset.id = id
        const editCardImg = document.createElement("img")
        editCardImg.src = pen
        editCard.appendChild(editCardImg)
    
        return editCard
    }

    const title = (title)=>{

        const cardTitle = document.createElement("h2");
        cardTitle.textContent = title;

        return cardTitle
    }

    const descripcion = (text)=>{
        const containerDescripcion = document.createElement("div");
        containerDescripcion.classList.add("descripcion-card");
        const textDescripcion = document.createElement("p");
        textDescripcion.textContent = text
        containerDescripcion.appendChild(textDescripcion)

        return containerDescripcion
    }

    // footer

    const date = (date)=>{
        const cardDate = document.createElement("p");
        cardDate.textContent = date

        return cardDate
    }

    const state = (id)=>{
        const stateContainer = document.createElement("div");
        stateContainer.classList.add("state-card")
        stateContainer.dataset.id = id
        const stateImg = document.createElement("img")
        stateContainer.appendChild(stateImg)

        return stateContainer
    }
       

    return {tacks, edit, title, descripcion, date, state}
}()

const logicaCard = function(){

    const isChecked = (img,state) => state ? img.src = checked : img.src = ""

    const isDisableCard = (card,state)=> state ? card.classList.add("card-checked") : card.classList.remove("card-checked")
    
    return {isChecked, isDisableCard}
}()

export default function createCard(id,title,descripcion,date,priority,state){

    const card = document.createElement("div");
    card.classList.add("card")
    
    // HEADER
    const headerCard = document.createElement("div")
    headerCard.classList.add("header-card")
    const cardTacks = componentsCard.tacks();
    const cardState = componentsCard.state(id)
    headerCard.appendChild(cardTacks)
    headerCard.appendChild(cardState)
    
    // BODY
    const bodyCard = document.createElement("div")
    bodyCard.classList.add("body-card")
    const cardTitle = componentsCard.title(title)
    const cardDescripcion = componentsCard.descripcion(descripcion)
    bodyCard.appendChild(cardTitle)
    bodyCard.appendChild(cardDescripcion)

    // FOOTER
    const footerCard = document.createElement("div")
    footerCard.classList.add("footer-card")
    const cardDate = componentsCard.date(date)
    const cardEdit = componentsCard.edit(id);
    footerCard.appendChild(cardEdit)   
    footerCard.appendChild(cardDate)

    card.appendChild(headerCard)
    card.appendChild(bodyCard)
    card.appendChild(footerCard)

    // // Condicionales
    logicaCard.isChecked(cardState.querySelector("img"),state)
    logicaCard.isDisableCard(card,state)
  
    // PRIORITY
    switch (priority){
        case "Low":
            cardTacks.querySelector("img").src = green
             break
        case "Normal":
            cardTacks.querySelector("img").src = yellow
            break
        case "High":
            cardTacks.querySelector("img").src = red
            break
        }

return card

}
