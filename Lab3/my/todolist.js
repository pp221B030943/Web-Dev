let input = document.getElementById("new-task");
let addBtn = document.getElementById("add-btn");
let tasks = document.getElementById("all-tasks");

function createNewTask(text){
    let l = document.createElement("li");
    let label = document.createElement("label");
    let checkBox = document.createElement("input");
    let delBtn = document.createElement("button");
    
    label.innerText = text;
    checkBox.type = "checkbox";
    delBtn.className = "fa fa-trash-o";
    delBtn.id = "del";
    l.appendChild(checkBox);
    l.appendChild(label);
    l.appendChild(delBtn);
    return l;
}

function addNewTask(){
    console.log("Add a new task...");

    let l = createNewTask(input.value);
    tasks.appendChild(l);
    bindTasks(l,taskCompltd);
    input.value = "";
}

let delTask = function(){
    console.log("Delete task...");

    let l = this.parentNode;
    let ul = l.parentNode;
    ul.removeChild(l);
}

let taskCompltd = function(){
    console.log("Complete task...");
  
    let l = this.parentNode;
    l.className = "complete";
    bindTasks(l,taskInCompltd);
}

let taskInCompltd = function(){
    console.log("Incomplete task...");
  
    let l = this.parentNode;
    l.className = "not-complete";
    bindTasks(l,taskCompltd);
}

addBtn.onclick = addNewTask();
addBtn.addEventListener("click",addNewTask);

function bindTasks(task, f){
    let checkBox = task.querySelector("input[type=checkbox]");
    let delBtn = task.querySelector("button#del");

    delBtn.onclick = delTask;
    checkBox.onchange = f;
}