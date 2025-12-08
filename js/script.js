"use strict";

const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const todos = [
  {
    task: "Learn JS",
    isCompleted: true,
  },
  {
    task: "Learn TS",
    isCompleted: false,
  },
  {
    task: "Degree Dispatched",
    isCompleted: true,
  },
];
todos.forEach((todo) => {
  const li = document.createElement("li");
  li.textContent = todo.task;
  todoList.appendChild(li);
});

todoForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = todoInput.value;

  if (userInput) {
    console.log(userInput);
    todoInput.value = '';
  } else {
    alert("Enter something");
  }
});
