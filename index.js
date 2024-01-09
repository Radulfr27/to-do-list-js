const ul = document.querySelector("ul");
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");

function addTask() {
    console.log("Clicked the Add Button")
    let newList = document.createElement("li");
    newList.innerText = taskInput.value;
    ul.appendChild(newList);

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    newList.appendChild(dltBtn);
    
};

function emptyTask() {
    if (taskInput.value.length > 0) {
        addTask();
    } else {
        alert("Please Add Task");
    }
};

function doneTask(event) {
    if (event.target.tagName === "LI") { // tag name in DOM always returns on canonical uppercase
        event.target.classList.toggle("done");
    }
};

function deleteTask(event) {
    if (event.target.tagName === "BUTTON") {
        event.target.parentElement.remove();
    }
};

function enterPressTask(event) {
    if (event.key === "Enter") {
        emptyTask();
    }
};

addBtn.addEventListener("click", emptyTask);
taskInput.addEventListener("keypress", enterPressTask);
ul.addEventListener("click", doneTask);
ul.addEventListener("click", deleteTask);