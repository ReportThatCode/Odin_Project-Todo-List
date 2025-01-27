import "../styles/content.css";

const main = document.createElement("main");
main.classList.add("content")

// Header main content
const contentHeader = document.createElement("div");
contentHeader.classList.add("container-addTask")

const MainAddTask = document.createElement("div");
MainAddTask.classList.add("main-add-task");
const mainAddTaskText = document.createElement("p");
mainAddTaskText.textContent = "Add Task";
const mainAddTaskSpan = document.createElement("span");
mainAddTaskSpan.textContent = "+";


MainAddTask.appendChild(mainAddTaskText)
MainAddTask.appendChild(mainAddTaskSpan)

contentHeader.appendChild(MainAddTask)
main.appendChild(contentHeader)

// Body main content => CONTAINER CARDS

const containerCards = document.createElement("div");
containerCards.classList.add("container-card");

main.appendChild(containerCards)

function setBgFolder(color){
    const root = document.documentElement;
    // Cambia el valor de la variable CSS
    root.style.setProperty('--bgFolder', color);
}


export {main, setBgFolder};

