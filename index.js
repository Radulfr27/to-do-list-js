const ul = document.querySelector("#ul");
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



addBtn.addEventListener("click", emptyTask);