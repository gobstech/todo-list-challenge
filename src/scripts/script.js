// Get the variables from HTML
const form = document.querySelector("form");
const taskList = document.querySelector("#tasks");
const select = document.getElementById("categories");
const categoryForm = document.querySelector(".categoryForm");
const categoryButton = document.querySelector(".newCategorySubmit");

// Future feature
// function createCategory() {
//   const categoryInput = document.getElementById("categoryInput");
//   console.log(categoryInput.value);
//   categories.push(categoryInput.value);
//   categoryInput.value = "";
//   renderCategories();
// }

// Create Object
function createTask(taskName, category) {
  const task = {};

  task.name = taskName;
  task.category = category;

  return task;
}

const taskOne = createTask("Do Homework", "School");

// Create tasks array
const tasks = [
  {
    name: "Do Homework",
    category: "School",
  },
  {
    name: "Buy Food",
    category: "Food",
  },
  {
    name: "Finish Work Task",
    category: "Work",
  },
];

tasks.forEach((task) => {
  console.log(task.name, task.category);
});

// Create categories array
const categories = ["Work", "School", "Home"];

renderTasks();

console.log(tasks);

function renderCategories() {
  categories.forEach((category) => {
    console.log(category);
  });
}

function renderTasks() {
  tasks.forEach((task, index) => {
    localStorage.setItem(`Task ${index + 1}`, JSON.stringify(task));
  });
  taskList.textContent = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const i = document.createElement("i");
    const spanCategory = document.createElement("span");
    const spanTask = document.createElement("span");
    li.setAttribute("data-index", index);
    li.classList.add("list-item");
    li.append(spanCategory);
    spanCategory.classList.add("category");
    spanCategory.textContent = task.category;
    li.append(spanTask);
    spanTask.classList.add("task");
    spanTask.textContent = task.name;
    i.classList.add("ph");
    i.classList.add("ph-x-circle");
    console.log(index);
    taskList.append(li);
    li.append(i);
  });
  console.log("Task List Rerendered!");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector("#taskInput");
  console.log(input.value);
  let category = select.value;
  let task = new createTask(input.value, category);
  tasks.push(task);
  console.log(tasks);
  input.value = "";
  renderTasks();
});

// remove function
taskList.addEventListener("click", (e) => {
  console.log(e.target.closest("i"));
  const index = Number(e.target.closest("i").getAttribute("data-index"));
  tasks.splice(index, 1);
  localStorage.clear();
  renderTasks();
});
