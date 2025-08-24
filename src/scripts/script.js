// Get the variables from HTML
const form = document.querySelector("form");
const taskList = document.querySelector("#tasks");

const tasks = [];
// const tasks = ["Task 1", "Task 2"];
renderTasks();

function renderTasks() {
  taskList.textContent = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;
    li.setAttribute("data-index", index);
    console.log(index);
    taskList.append(li);
  });
  console.log("Task List Rerendered!");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#taskInput");
  console.log(input.value);
  tasks.unshift(input.value);
  console.log(tasks);
  input.value = "";
  renderTasks();
});

// remove function
taskList.addEventListener("click", (e) => {
  console.log(e.target.closest("li"));
  const index = Number(e.target.closest("li").getAttribute("data-index"));
  tasks.splice(index, 1);
  renderTasks();
});
