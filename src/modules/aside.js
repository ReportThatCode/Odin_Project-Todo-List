import "../styles/aside.css";

const aside = document.createElement("aside");

// proyect title
const title = document.createElement("h1");
title.textContent = "Proyectos";
title.classList.add("aside_title");

// add project
const containerAddProject = document.createElement("div");
containerAddProject.classList.add("aside_add-project");
const addProjectTitle = document.createElement("p");
addProjectTitle.textContent = "Add Project";
const addProjectSpan = document.createElement("span");
addProjectSpan.textContent = "+";

containerAddProject.appendChild(addProjectTitle);
containerAddProject.appendChild(addProjectSpan);

// lista de proyect rutina / hacer compras (que sea lista despegable)
const containerProject = document.createElement("ul");
containerProject.classList.add("aside_project");




// APPENDCHILD

aside.appendChild(title);
aside.appendChild(containerAddProject);
aside.appendChild(containerProject);









// const itemsProject = document.createElement("ul");
// project.appendChild(itemsProject);

// // list dentro de lista with checkbox[x] y al final add task []

// const item = document.createElement("li");
// item.textContent = "Hacer Compras"
// const item1 = document.createElement("li");
// item1.textContent = "Acariciar al gato";
// const item2 = document.createElement("li");
// item2.textContent = "Hacer la cama";


// AHORA CON CLASES
const projects = [];

class AddProject {
    // un array de objetos que almacene los items, name, descripcion, fecha, completed/pendiente 
    constructor(name) {

    }

    // tiene que tener un motodo que puedas agregar un item al proyecto
}

export default aside;