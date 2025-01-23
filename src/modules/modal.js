import "../styles/modal.css";

const modal = document.createElement("dialog");

modal.classList.add("modal");

const form = document.createElement("form");

const btncloseModal = document.createElement("span");
btncloseModal.textContent = "x"
btncloseModal.classList.add("btn-close-modal");

const titleModal = document.createElement("h2");

const closeModal = () => document.querySelector(".modal").close()

const openModal = () => document.querySelector(".modal").showModal()

function modalProject(){

    if(document.querySelector(".modal") !== null) {
        document.querySelector(".modal form").innerHTML = ""
    }

        form.appendChild(btncloseModal);
        // title modal
        form.appendChild(titleModal);
        titleModal.textContent = "Create Project";
        //title project
        const projectTitle = document.createElement("input");
        const btnSubmit = document.createElement("input");
        btnSubmit.setAttribute("type","submit");
        btnSubmit.dataset.mode = "project";

        projectTitle.classList.add("input-project")
        btnSubmit.classList.add("btn-submit-project")
        
        form.appendChild(projectTitle);
        form.appendChild(btnSubmit);

        form.id = "form-project"
        modal.appendChild(form);
        document.querySelector("body").appendChild(modal);
        return openModal();
    
}

function modalTask(id){

    if(document.querySelector(".modal") !== null) {
        document.querySelector(".modal form").innerHTML = ""
    }

    form.appendChild(btncloseModal);
    // title modal
    form.appendChild(titleModal);
    titleModal.textContent = "Create Task";
    // title task   
    const labelTitle = document.createElement("label")
    labelTitle.for = "title-task"
    labelTitle.textContent = "Title"

    const taskTitle = document.createElement("input");
    taskTitle.id = "title-task"

    // descripcion task
    const labelDescripcion = document.createElement("label");
    labelDescripcion.textContent = "Descripcion"
    labelDescripcion.for = "descripcion-task";

    const descripcionTask = document.createElement("textarea");
    descripcionTask.id = "descripcion-task";

    // date task
    const labelDate = document.createElement("label");
    labelDate.textContent = "Date";
    labelDate.for = "date-task"

    const dateTask = document.createElement("input");
    dateTask.id = "date-task"
    dateTask.setAttribute("type","date");
    
    // priority task
    const labelPriority = document.createElement("label");
    labelPriority.textContent = "Priority";
    labelPriority.for = "priority-task";

    const priorityTask = document.createElement("select");
    priorityTask.id = "priority-task";

    const optionLow = document.createElement("option")
    optionLow.value = "Low"
    optionLow.textContent = "Low"

    const optionNormal = document.createElement("option")
    optionNormal.value = "Normal"
    optionNormal.textContent = "Normal"

    const optionHigh = document.createElement("option")
    optionHigh.value = "High"
    optionHigh.textContent = "High"

    priorityTask.appendChild(optionLow);
    priorityTask.appendChild(optionNormal);
    priorityTask.appendChild(optionHigh);

    // btn submit task
    const btnSubmitTask = document.createElement("input");
    btnSubmitTask.setAttribute("type","submit"); 
    btnSubmitTask.dataset.id = id;
    btnSubmitTask.id = "btn-submit-task"
    
    // Append all Elements
    // push title
    form.appendChild(labelTitle)
    form.appendChild(taskTitle)
    //push descripcion
    form.appendChild(labelDescripcion)
    form.appendChild(descripcionTask)
    // push date and priority
    const divDatePriority = document.createElement("div");
    
    const divDate = document.createElement("div");
    divDate.appendChild(labelDate)
    divDate.appendChild(dateTask)
    
    const divSelect = document.createElement("div");
    divSelect.appendChild(labelPriority)
    divSelect.appendChild(priorityTask)

    divDatePriority.appendChild(divDate)
    divDatePriority.appendChild(divSelect)
    
    form.appendChild(divDatePriority);
    
    //push btn submit
    form.appendChild(btnSubmitTask)

    form.id = "form-task"
    modal.appendChild(form);
    document.querySelector("body").appendChild(modal);
    return openModal();
}



export { openModal, closeModal, modalProject , modalTask} 