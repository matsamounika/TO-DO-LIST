let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {

    let taskInput = document.getElementById("taskInput");
    let dueDate = document.getElementById("dueDate");
    let priority = document.getElementById("priority");

    if(taskInput.value.trim()=="")
        return;

    tasks.push({

        text:taskInput.value,

        due:dueDate.value,

        priority:priority.value,

        completed:false

    });

    taskInput.value="";
    dueDate.value="";

    saveTasks();
    displayTasks(tasks);

}

