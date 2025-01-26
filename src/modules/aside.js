import "../styles/aside.css";
import configImg from "../imgs/config.svg"
import {data,updateData} from "./data.js"

console.log("data-from-aside")
console.log(data)
const aside = document.createElement("aside");

const asideHeader = document.createElement("div");

const projectAndConfig = document.createElement("div")
projectAndConfig.classList.add("aside-container-btn")

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

// config
const configOptions = document.createElement("div");
configOptions.classList.add("config-options")
const configOptionsImg = document.createElement("img");
configOptionsImg.src = configImg



            const navConfig = document.createElement("ul");
            navConfig.classList.add("nav-config");
            
            const clearTask = document.createElement("li");
            clearTask.classList.add("clear-tasks")
            clearTask.textContent = "Clear tasks"
            
            const deleteFolderTask = document.createElement("li");
            deleteFolderTask.classList.add("list-folder-task")
            
            deleteFolderTask.textContent = "Delete Folder/Task"
            const containerFolderTask = document.createElement("ul");

            data.forEach(folder => {
                const $list = document.createElement("li");
                $list.classList.add("folder-delete")
                
                const $folder = document.createElement("h4")
                $folder.classList.add("delete-folder")
                $folder.textContent = folder.title
                $folder.dataset.id = folder.id

                const ul = document.createElement("ul")
                

                folder.tasks.forEach(task => {
                    const $task = document.createElement("li")
                    $task.classList.add("delete-task");
                    $task.textContent = task.title
                    $task.dataset.id = task.id
                    ul.appendChild($task)
                })

                $list.appendChild($folder)
                $list.appendChild(ul)

                containerFolderTask.appendChild($list)
            });

            deleteFolderTask.appendChild(containerFolderTask)

            navConfig.appendChild(clearTask)
            navConfig.appendChild(deleteFolderTask)


            
            configOptions.appendChild(configOptionsImg);
            configOptions.appendChild(navConfig)

// appens
projectAndConfig.appendChild(containerAddProject)
projectAndConfig.appendChild(configOptions)

asideHeader.appendChild(title)
asideHeader.appendChild(projectAndConfig)

// lista de proyect rutina / hacer compras (que sea lista despegable)
const containerProject = document.createElement("ul");
containerProject.classList.add("aside_project");


// APPENDCHILD
aside.appendChild(asideHeader)
aside.appendChild(containerProject);


export default aside;