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

// Create Task Object
function createTask(taskName, category) {
  const task = {};

  task.name = taskName;
  task.category = category;

  return task;
}

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

// Test each of the tasks inside the array
tasks.forEach((task) => {
  console.log(task.name, task.category);
});

// Create categories array
const categories = ["Work", "School", "Home"];

renderTasks();

console.log(tasks);

// Function made to render categories - > Future Feature
function renderCategories() {
  categories.forEach((category) => {
    console.log(category);
  });
}

// Function responsible for rendering tasks
function renderTasks() {
  // Loops around every item and set them into Local Storage
  tasks.forEach((task, index) => {
    localStorage.setItem(`Task ${index + 1}`, JSON.stringify(task));
  });
  taskList.textContent = "";

  // Loops on each existing task inside the array
  tasks.forEach((task, index) => {
    // Create HTML Elements
    const li = document.createElement("li");
    const i = document.createElement("i");
    const spanCategory = document.createElement("span");
    const spanTask = document.createElement("span");

    // Set Classes and attributes to the li element
    li.setAttribute("data-index", index);
    li.classList.add("list-item");

    // Adds the span which contains category content inside the li
    li.append(spanCategory);

    // Adds class and content to the spanCategory
    spanCategory.classList.add("category");
    spanCategory.textContent = task.category;

    // Adds the span which contains the task content inside the li
    li.append(spanTask);

    // Adds class and content to the spanTask
    spanTask.classList.add("task");
    spanTask.textContent = task.name;

    // Adds icon and icons class
    i.classList.add("ph");
    i.classList.add("ph-x-circle");
    console.log(index);
    taskList.append(li);
    li.append(i);
  });
  console.log("Task List Rerendered!");
}

// Function that adds the new task object into the array and into the localStorage
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

// This function removes the taskList from the list display and from the localStorage
taskList.addEventListener("click", (e) => {
  console.log(e.target.closest("i"));
  const index = Number(e.target.closest("i").getAttribute("data-index"));
  tasks.splice(index, 1);
  localStorage.clear();
  renderTasks();
});
