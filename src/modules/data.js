 let data = JSON.parse(localStorage.getItem("folders")) || [];

 function updateData(){
    localStorage.setItem("folders",JSON.stringify(data))
 }

 export {data,updateData}
// class Project {
//     constructor(title){
//         this.bgColor = obtenerColorPastel();
//         this.id = generateUniqueId();
//         this.title = title;
//         this.tasks = [];
//     }
//     addTask(task){
//         this.tasks.push(task)
//     }
//     showTasks(){
//         return this.tasks
//     }
// }

// class Task {
//     constructor(title,descripcion,date,priority) {
//         this.id = generateUniqueId();
//         this.title = title;
//         this.descripcion = descripcion;
//         this.date = date;
//         this.priority = priority
//         this.status = false;
//     }

//     completeTask(){
//         this.status = !this.status;
//     } 
// }


// const updateLocalStorage = ()=>{
//     localStorage.setItem("folders",JSON.stringify(data))

//     const parseData = JSON.parse(localStorage.getItem("folders"));  
//     console.log(parseData)
//     parseData.forEach(project => {
//         Object.setPrototypeOf(project,Project.prototype)
//         project.tasks.forEach(task => {
//             Object.setPrototypeOf(task,Task.prototype)
//         })
//     })
//     data = parseData
// }

// export {data,updateLocalStorage,Project,Task}
