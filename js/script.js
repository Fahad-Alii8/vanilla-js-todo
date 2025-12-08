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
