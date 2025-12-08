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
