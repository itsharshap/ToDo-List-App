// Get DOM elements
const addBtn = document.getElementById("add-btn");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");

// Event listener for adding a new task
addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    createTodoItem(taskText);
    input.value = ""; // Clear the input
});

// Function to create a new todo item and append it to the list
function createTodoItem(taskText) {
    const li = document.createElement("li");
    li.className = "todo-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", () => {
        li.classList.toggle("completed");
    });

    const span = document.createElement("span");
    span.className = "text";
    span.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.title = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    const actions = document.createElement("div");
    actions.className = "actions";
    actions.appendChild(deleteBtn);

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(actions);

    list.appendChild(li);
}
