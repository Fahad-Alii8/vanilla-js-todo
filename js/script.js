"use strict";

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const todos = [
  {
    task: "Learn JS",
    isCompleted: false,
  },
  {
    task: "Learn TS",
    isCompleted: false,
  },
  {
    task: "Degree Dispatched",
    isCompleted: false,
  },
];

function renderList() {
  todoList.innerHTML = '';
  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.task;
    todoList.appendChild(li);
  });
}

renderList();

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = todoInput.value;

  if (userInput) {
    const newTodo = {
      task: userInput,
      isCompleted: false,
    };
    todos.push(newTodo);
    renderList();
    todoInput.value = "";
  } else {
    alert("Enter something");
  }
});
