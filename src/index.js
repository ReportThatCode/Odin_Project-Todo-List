
// queda por hacer
// delete proyect 
// add task en folder
// aside, open and close list task from proyect
// push git hub
import './styles/index.css';

import header from "./modules/header.js";
import aside from "./modules/aside.js";
import main from "./modules/content.js";

import { openModal, closeModal, modalProject, modalTask } from "./modules/modal.js";

const root = document.querySelector("#Root");

root.appendChild(main);
root.appendChild(header);
root.appendChild(aside);

function obtenerColorPastel() {
    const coloresPastel = [
        "rgb(255, 179, 186)", // Rosa claro
        "rgb(255, 223, 186)", // Durazno claro
        "rgb(255, 255, 186)", // Amarillo claro
        "rgb(186, 255, 201)", // Verde menta
        "rgb(186, 225, 255)", // Azul bebé
        "rgb(201, 186, 255)", // Lavanda
        "rgb(255, 186, 236)", // Rosa malva
        "rgb(255, 218, 185)", // Beige
        "rgb(204, 229, 255)", // Azul cielo
        "rgb(255, 204, 204)"  // Rosa pálido
    ];

    const indiceAleatorio = Math.floor(Math.random() * coloresPastel.length);
    return coloresPastel[indiceAleatorio];
}

function generateUniqueId() {
    const timestamp = Date.now(); // Obtiene la fecha y hora actual en milisegundos
    const randomNumber = Math.random().toString(36).substr(2, 9); // Genera una parte aleatoria
    return `id_${timestamp}_${randomNumber}`; // Combina el timestamp y el número aleatorio
}


class Project {
    constructor(title){
        this.bgColor = obtenerColorPastel();
        this.id = generateUniqueId();
        this.title = title;
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task)
    }
 
    showTasks(){
        return this.tasks
    }
}

class Task {
    constructor(title,descripcion,date,priority) {
        this.id = generateUniqueId();
        this.title = title;
        this.descripcion = descripcion;
        this.date = date;
        this.priority = priority
        this.status = false;
    }

    completeTask(){
        this.status = true;
    }
    
}

const projects = [new Project("Rutina")]
let currentFolder = projects[0].id;
projects[0].bgColor = "rgb(186, 225, 255)";

projects.push(new Project("Trabajo"));
projects.push(new Project("Study"));


projects[0].addTask(new Task("Hacer compras","texto random","2021-10-10","high"));
projects[0].addTask(new Task("acariciar gato","texto random","2021-10-10","high"));
projects[0].addTask(new Task("alavar gato","texto random","2021-10-10","high"));
projects[0].addTask(new Task("check stock market","ali baba y mercadolibre","2021-10-10","high"));

projects[1].addTask(new Task("buy falopa","no olvidarse","420-10-10","high"));
projects[1].addTask(new Task("hacer el minimo esfuerzo","al menos que me pagen mas","420-10-10","high"));

projects[2].addTask(new Task("study ia","how work","2012-23-23","low"))
projects[2].addTask(new Task("The odin project","make to do list","2012-23-23","high"))
projects[2].addTask(new Task("how cat works","dont undestand","2017-13-27","normal"))


const displayDOM = (function(){

    // actualizar doom al agregar projecto / actualizar content tmb
    const addTaskElement = ()=>{
        const addTaskEl = document.createElement("div");
        addTaskEl.classList.add("add-task");
        const addTaskTitle = document.createElement("p");
        addTaskTitle.textContent = "Add Task";
        const AddTaskSpan = document.createElement("span");
        AddTaskSpan.textContent = "+";
        
        addTaskEl.appendChild(addTaskTitle)
        addTaskEl.appendChild(AddTaskSpan);
        return addTaskEl
        }

    
    const updateAllDOM = ()=>{
        //updateAllDOM(projects);

    }

    const updateHeader = ()=>{
    const headerProjects = document.querySelector(".header-container-projects");
    headerProjects.innerHTML = ""
    projects.forEach(project => {
        const folder = document.createElement("li");
        folder.style.backgroundColor = project.bgColor
        folder.textContent = project.title;
        folder.dataset.id = project.id;
        folder.classList.add("nav-item")
        headerProjects.appendChild(folder)
    })
    }
    const folderSelect = (targetID)=>{
        currentFolder = targetID
        const project = projects.find(project => project.id === currentFolder)
        const getColor = project.bgColor;
        document.querySelector(".content").style.backgroundColor = getColor
        console.log(getColor)
    }
    
    const updateMain = ()=>{

    }

    const updateAsideProject = () => {
        const carpetProjects = document.querySelector(".aside_project");
        carpetProjects.innerHTML = ""
        projects.forEach(project => {

            const containerProject = document.createElement("li");

            const titleProject = document.createElement("h3");
            titleProject.classList.add("title-proyect")
            titleProject.textContent = project.title;
            carpetProjects.appendChild(titleProject)

            const taskList = document.createElement("ul");
                project.tasks.forEach(task => {
                    const taskItem = document.createElement("li");
                    taskItem.dataset.id = task.id;
                    
                    taskItem.classList.add("task-item")
                    taskItem.textContent = task.title;
                    taskList.appendChild(taskItem);

                    //btn completed task
                    const btnCompleted = document.createElement("span");
                    btnCompleted.textContent = "⭕";
                    btnCompleted.classList.add("btn-completed-task");
                    taskItem.appendChild(btnCompleted);


                })

            containerProject.appendChild(taskList)
            carpetProjects.appendChild(containerProject);


            const addTask = addTaskElement();
            addTask.dataset.id = project.id;
            taskList.appendChild(addTask)
        })
    }
    return { updateAsideProject , updateHeader, folderSelect}
})()

//⭕
// ❌

displayDOM.updateAsideProject(projects);
displayDOM.updateHeader();
displayDOM.folderSelect(currentFolder)
document.querySelector(".nav-item").classList.add("active")




// PROCESAR CREACION DE PROYEC

document.addEventListener("click",(e)=>{
 
    if(e.target.closest(".aside_add-project")){       
        modalProject();
    }
    if(e.target.closest(".add-task")){

        let id = e.target.closest(".add-task").dataset.id;
        console.log(id)
        modalTask(id)
    }
    if(e.target.matches(".btn-close-modal")) closeModal()
 
    if(e.target.matches(".nav-item")){
    
    console.log(e.target.dataset.id)
    displayDOM.folderSelect(e.target.dataset.id)
    document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"))
    e.target.classList.add("active")
    }

})


document.addEventListener("submit",(e)=>{
    console.log(e.target);

    if(e.target.matches("#form-project")){

        const titleValue = document.querySelector(".input-project")
        projects.push(new Project(titleValue.value))
        displayDOM.updateAsideProject(projects)
        closeModal();
        displayDOM.updateHeader();

    }

    if(e.target.matches("#form-task")){
        console.log("task procesando...")
        const getTasktitle = document.getElementById("title-task").value
        const getTaskDescripcion = document.getElementById("descripcion-task").value
        const getTaskDate = document.getElementById("date-task").value
        const getTaskPriority = document.getElementById("priority-task").value
        console.log(getTasktitle)
        console.log(getTaskDescripcion)
        console.log(getTaskDate)
        console.log(getTaskPriority)
        const getIdProject = document.querySelector("#btn-submit-task").dataset.id;
        console.log(getIdProject)
        const actuallyProject = projects.find(project => project.id === getIdProject);
        actuallyProject.addTask(new Task(getTasktitle,getTaskDescripcion,getTaskDate,getTaskPriority,false))
        displayDOM.updateAsideProject(projects)
        console.log(actuallyProject);

        //processFormTask()
        closeModal();

    }

    e.preventDefault();
})