import "../styles/modal.css";

const modal = document.createElement("dialog");
modal.classList.add("modal");

// modal base
const form = document.createElement("form");
const btncloseModal = document.createElement("span");
btncloseModal.textContent = "x"
btncloseModal.classList.add("btn-close-modal");
const titleModal = document.createElement("h2");


const closeModal = () => document.querySelector(".modal").close()
const openModal = () => document.querySelector(".modal").showModal()


const componentsForm = function(){
    
    const title = (title = "")=>{
        const $title = document.createElement("div")
        const labelTitle = document.createElement("label")
        labelTitle.for = "title-task"
        labelTitle.textContent = "Title"
        const taskTitle = document.createElement("input");
        taskTitle.value = title
        taskTitle.id = "title-task" 
        $title.appendChild(labelTitle)
        $title.appendChild(taskTitle)
    
        return $title
    }
    
    const descripcion = (descripcion = "")=>{
        const $descripcion = document.createElement("div");
        const labelDescripcion = document.createElement("label");
        labelDescripcion.textContent = "Descripcion"
        labelDescripcion.for = "descripcion-task";
        const descripcionTask = document.createElement("textarea");
        descripcionTask.value = descripcion
        descripcionTask.id = "descripcion-task";
        $descripcion.appendChild(labelDescripcion)
        $descripcion.appendChild(descripcionTask)

        return $descripcion
    }

    const date = (date = "")=>{
        const $date = document.createElement("div");
        const labelDate = document.createElement("label");
        labelDate.textContent = "Date";
        labelDate.for = "date-task"
        const dateTask = document.createElement("input");
        dateTask.id = "date-task"
        dateTask.setAttribute("type","date");
        dateTask.value = date
        $date.appendChild(labelDate);
        $date.appendChild(dateTask);

        return $date
    }

    const priority = (prio = "Low")=>{
        const $priority = document.createElement("div"); 
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
        console.log(prio)
        switch(prio){
            case "Low": 
            optionLow.selected = true;
            break;
            
            case "Normal":
            optionNormal.selected = true;
            break;
            
            case "High":
            optionHigh.selected = true;
            break;
        }
        priorityTask.appendChild(optionLow);
        priorityTask.appendChild(optionNormal);
        priorityTask.appendChild(optionHigh);
        $priority.appendChild(labelPriority)
        $priority.appendChild(priorityTask)

        return $priority
    }

    const btnSubmit = (id)=>{
        const btnSubmitTask = document.createElement("input");
        btnSubmitTask.value = "Submit"
        btnSubmitTask.setAttribute("type","submit"); 
        btnSubmitTask.dataset.id = id;
        btnSubmitTask.id = "btn-submit-task"

        return btnSubmitTask
    }

    return {title, descripcion, date, priority, btnSubmit}
}();



function modalProject(){
    if(document.querySelector(".modal") !== null) document.querySelector(".modal form").innerHTML = ""
       
    form.appendChild(btncloseModal);
        // title modal
        form.appendChild(titleModal);
        titleModal.textContent = "Create Project";

        //title project
        const projectTitle = document.createElement("input");
        const btnSubmit = document.createElement("input");
        btnSubmit.value = "Submit"
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

    if(document.querySelector(".modal") !== null) document.querySelector(".modal form").innerHTML = ""

    form.appendChild(btncloseModal);
    // title modal
    form.appendChild(titleModal);
    titleModal.textContent = "Create Task"; 

    // push title
    const taskTitle = componentsForm.title();
    taskTitle.classList.add("container-title") 
    form.appendChild(taskTitle)
    
    //push descripcion
    const taskDesc = componentsForm.descripcion()
    taskDesc.classList.add("container-descripcion") 
    form.appendChild(taskDesc)

    // push date and priority
    const divDatePriority = document.createElement("div");
    const divDate = componentsForm.date()
    const divPriority =  componentsForm.priority()
    divDatePriority.appendChild(divDate)
    divDatePriority.appendChild(divPriority)
    form.appendChild(divDatePriority);

    //push btn submit
    const btnSubmit = componentsForm.btnSubmit(id)
    form.appendChild(btnSubmit)

    form.id = "form-task"
    modal.appendChild(form);
    document.querySelector("body").appendChild(modal);
    return openModal();
}

function modalEditTask(cardToEdit){

    console.log(cardToEdit)

if(document.querySelector(".modal") !== null) document.querySelector(".modal form").innerHTML = ""

    form.appendChild(btncloseModal);
    // title modal
    form.appendChild(titleModal);
    titleModal.textContent = "Edit Task"; 

    // push title
    const taskTitle = componentsForm.title(cardToEdit.title);
    taskTitle.classList.add("container-title") 
    form.appendChild(taskTitle)
    
    //push descripcion
    const taskDesc = componentsForm.descripcion(cardToEdit.descripcion)
    taskDesc.classList.add("container-descripcion") 
    form.appendChild(taskDesc)

    // push date and priority
    const divDatePriority = document.createElement("div");
    const divDate = componentsForm.date(cardToEdit.date)
    const divPriority =  componentsForm.priority(cardToEdit.priority)
    divDatePriority.appendChild(divDate)
    divDatePriority.appendChild(divPriority)
    form.appendChild(divDatePriority);

    //push btn submit
    const btnSubmit = componentsForm.btnSubmit(cardToEdit.id)
    form.appendChild(btnSubmit)

    form.id = "form-task-edit"
    modal.appendChild(form);
    document.querySelector("body").appendChild(modal);
    return openModal();
}

export { openModal, closeModal, modalProject , modalTask, modalEditTask} 