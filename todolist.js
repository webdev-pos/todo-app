const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const ul = document.getElementById("todo-ul");
const showAllBtn = document.getElementById("show-all");
const showCompletedBtn = document.getElementById("show-completed");
const todosDone = [];


function displayTodo() {
    var todo = input.value;
    var todoElement = document.createElement("li");
    var todoRemoveButton = document.createElement("button");
    var todoDoneButton = document.createElement("button");
    var todoRemoveButtonText = document.createTextNode("X");
    var todoDoneButtonText = document.createTextNode("Done");
    var todoElementText = document.createTextNode(todo);
    todoRemoveButton.className = "todoRemoveButton";
    todoDoneButton.className = "todoDoneButton";
    todoRemoveButton.id = "todoRemoveButton";
    todoDoneButton.id = "todoDoneButton";
    todoElement.appendChild(todoElementText);
    todoRemoveButton.appendChild(todoRemoveButtonText);
    todoDoneButton.appendChild(todoDoneButtonText);
    todoElement.appendChild(todoRemoveButton);
    todoElement.appendChild(todoDoneButton);
    ul.appendChild(todoElement);
    input.value = "";

    todoRemoveButton.addEventListener("click", function() {
        todoRemoveButton.parentElement.remove();
    })

    todoDoneButton.addEventListener("click", function() {
        todoDone();
    })
}

addBtn.addEventListener("click", function() {
    displayTodo();
})
