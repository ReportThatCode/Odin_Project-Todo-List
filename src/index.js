
// queda por hacer


// add task en folder                           => DONE
// delete proyect tools nav                     => DONE
// aside, open and close list task from proyect => DONE
// push git hub
// localhost                                    => DONE
// orden priority                               => important!
// edit task modal                              => DONE

import configImg from "./imgs/config.svg"
import menuDown from "./imgs/menu-down.svg"
import './styles/index.css';
import header from "./modules/header.js";
import {aside,navConfig} from "./modules/aside.js";
import {main,setBgFolder} from "./modules/content.js";
import createCard from "./modules/content-card.js"
import { modalEditTask, openModal, closeModal, modalProject, modalTask } from "./modules/modal.js";
import {data, updateData} from "./modules/data.js"

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

let projects = data


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
    deleteTask(id){
        this.tasks = this.tasks.filter(task => task.id !== id)
    }
    getColor(){
        return this.bgColor
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
        this.status = !this.status;
    } 
}


const updateLocalStorage = ()=>{
    localStorage.setItem("folders",JSON.stringify(projects))

    const parseData = JSON.parse(localStorage.getItem("folders"));  

    parseData.forEach(project => {
        Object.setPrototypeOf(project,Project.prototype)
        project.tasks.forEach(task => {
            Object.setPrototypeOf(task,Task.prototype)
        })
    })
    projects = parseData
}

console.log(projects)
console.log(JSON.parse(localStorage.getItem("folders")))

if(!JSON.parse(localStorage.getItem("folders"))){
    console.log("aplicando cosas de null")
    projects[0] = new Project("Rutina")
    projects[0].bgColor = "rgb(186, 225, 255)";
    projects[0].addTask(new Task("Hacer compras","texto random","2021-10-10","Low"));
    projects[0].addTask(new Task("acariciar gato","texto random","2021-10-10","Normal"));
    projects[0].addTask(new Task("alavar gato","texto random","2021-10-10","High"));    
}


let currentFolder = projects[0].id;




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

    const updateTaskCompleted = (idTask)=>{
        
        projects.forEach(project => {
            project.tasks.forEach(task => {
                if(task.id === idTask) return task.completeTask()
            })
        })  

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
        document.querySelector(".container-addTask").style.backgroundColor = getColor
        setBgFolder(getColor)
    }
    
    const updateCards = ()=>{
        const currentProject = projects.find(project => project.id === currentFolder)
        const containerCard = document.querySelector(".container-card");
        containerCard.innerHTML = ""

        currentProject.tasks.forEach(task => {
            containerCard.appendChild(createCard(task.id,task.title,task.descripcion,task.date,task.priority,task.status))

        })
    }

    const updateAsideProject = () => {
        const carpetProjects = document.querySelector(".aside_project");
        carpetProjects.innerHTML = ""
        projects.forEach(project => {

            const containerProject = document.createElement("li");

            const $contentProject = document.createElement("div");
            $contentProject.classList.add("content-project")

            const $colorProject = document.createElement("div");
            $colorProject.classList.add("color-project");
            $colorProject.style.backgroundColor = project.getColor();

            const $folderDown = document.createElement("div");
            $folderDown.classList.add("folder-down")
            const titleProject = document.createElement("h3");
            titleProject.classList.add("title-proyect")
            titleProject.textContent = project.title;            
            $folderDown.appendChild(titleProject)

            const imgDrop = document.createElement("img");
            imgDrop.src = menuDown;

            $contentProject.appendChild($colorProject)
            $contentProject.appendChild($folderDown)
            $contentProject.appendChild(imgDrop)

            containerProject.appendChild($contentProject)
            const taskList = document.createElement("ul");
            taskList.classList.add("container-tasks")
                project.tasks.forEach(task => {
                    const taskItem = document.createElement("li");
                    taskItem.dataset.id = task.id;
                    
                    taskItem.classList.add("task-item")
                    taskItem.textContent = task.title;
                    taskList.appendChild(taskItem);
                    //btn completed task
                    const btnCompleted = document.createElement("span");
                    task.status === true ? btnCompleted.textContent = "❌":  btnCompleted.textContent = "⭕";
                    task.status === true ? taskItem.classList.add("checked") : taskItem.classList.remove("checked");
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
    return { updateAsideProject , updateHeader, folderSelect, updateCards, updateTaskCompleted}
})()


const  logicaToDo = function(){

    const deleteTask = (idTask,idFolder)=>{
        
        const getFolder = projects.find(folder => folder.id === idFolder)
        getFolder.deleteTask(idTask)
        updateData();
        updateLocalStorage();
        displayDOM.updateCards();
        displayDOM.updateAsideProject();
        navConfig(projects)
    }

    const deleteFolder = (id)=>{
        projects = projects.filter(folder => folder.id !== id)
        updateData();
        updateLocalStorage();
        displayDOM.updateCards();
        displayDOM.updateAsideProject();
        navConfig(projects)
    }

    return {deleteTask, deleteFolder}
}()

updateLocalStorage();
displayDOM.updateAsideProject(projects);
displayDOM.updateHeader();
displayDOM.folderSelect(currentFolder)
displayDOM.updateCards();
document.querySelector(".nav-item").classList.add("active")

document.addEventListener("click",(e)=>{


    if(e.target.matches(".delete-task")){
        console.log(e.target.dataset.id)
        console.log(e.target.dataset.folderid)
        logicaToDo.deleteTask(e.target.dataset.id,e.target.dataset.folderid)
        e.target.remove();
    }
    if(e.target.matches(".delete-folder")){
        logicaToDo.deleteFolder(e.target.dataset.id)
        e.target.remove();
    }


    if(e.target.closest(".folder-down")){
        e.target.closest(".content-project").classList.toggle("active");
    }

    if(e.target.closest(".aside_add-project")){       
        modalProject();
    }
    if(e.target.closest(".add-task")){
        let id = e.target.closest(".add-task").dataset.id;
        console.log(id)
        modalTask(id)
    }

    if(e.target.closest(".main-add-task")){
        modalTask(currentFolder);
    }
    if(e.target.matches(".btn-close-modal")) closeModal()
 
    if(e.target.matches(".nav-item")){
        displayDOM.folderSelect(e.target.dataset.id)
        document.querySelectorAll(".nav-item").forEach(el => el.classList.remove("active"))
        e.target.classList.add("active")
        displayDOM.updateCards();
    }

    if(e.target.closest(".state-card")){
        const mainTaskId = e.target.closest(".state-card");
        displayDOM.updateTaskCompleted(mainTaskId.dataset.id)
        displayDOM.updateCards();
        displayDOM.updateAsideProject()
        updateLocalStorage();
    }

    if(e.target.closest(".task-item")){
        displayDOM.updateTaskCompleted(e.target.closest(".task-item").dataset.id)
        displayDOM.updateAsideProject()
        displayDOM.updateCards();
        updateLocalStorage();
    }

    if(e.target.closest(".edit-card")){
        const getIdTask = e.target.closest(".edit-card").dataset.id;
        const folderCurrent = projects.find(folder => folder.id === currentFolder)
        const getTask = folderCurrent.tasks.find(task=> task.id === getIdTask );
       // console.log(getTask)
        modalEditTask(getTask)

    }

})


document.addEventListener("submit",(e)=>{
    e.preventDefault();
  
    if(e.target.matches("#form-project")){
        const titleValue = document.querySelector(".input-project")
        projects.push(new Project(titleValue.value))
        displayDOM.updateAsideProject()
        closeModal();
        displayDOM.updateHeader();
        displayDOM.updateCards();
        // LOCAL STORAGE
        updateLocalStorage();
    }

    if(e.target.matches("#form-task")){

        const getTasktitle = document.getElementById("title-task").value
        const getTaskDescripcion = document.getElementById("descripcion-task").value
        const getTaskDate = document.getElementById("date-task").value
        const getTaskPriority = document.getElementById("priority-task").value
        const getIdProject = document.querySelector("#btn-submit-task").dataset.id;
        const actuallyProject = projects.find(project => project.id === getIdProject);

        actuallyProject.addTask(
            new Task(
            getTasktitle,
            getTaskDescripcion,
            getTaskDate,
            getTaskPriority,
            false
            ))

        updateLocalStorage();
        displayDOM.updateAsideProject()
        displayDOM.updateCards();
        displayDOM.updateAsideProject()
        navConfig(projects)
        closeModal();
    }

    if(e.target.matches("#form-task-edit")){
        const idEdit = document.querySelector("#btn-submit-task").dataset.id;
        
        const getTasktitle = document.getElementById("title-task").value
        const getTaskDescripcion = document.getElementById("descripcion-task").value
        const getTaskDate = document.getElementById("date-task").value
        const getTaskPriority = document.getElementById("priority-task").value

        const folderCurrent = projects.find(folder => folder.id === currentFolder)
        const getTask = folderCurrent.tasks.find(task=> task.id === idEdit );
        getTask.title = getTasktitle
        getTask.descripcion = getTaskDescripcion
        getTask.date = getTaskDate
        getTask.priority = getTaskPriority
        console.log(idEdit)
        console.log("editando takskk")
        displayDOM.updateAsideProject()
        displayDOM.updateCards();
        displayDOM.updateAsideProject()
        updateLocalStorage();
        navConfig(projects)
        closeModal();
    }
})

