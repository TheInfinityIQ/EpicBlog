import createFunc from "../CRUD/create.js";
import * as updateHandlerModule from "./onUpdate.js";
import * as readModule from "../CRUD/read.js";
import deleteFunc from "../CRUD/delete.js";
import * as changeModule from "./changeBlog.js";

//Home features
let previous = document.getElementById("arrow-left");
previous.addEventListener("click", changeModule.previousBlog);

let next = document.getElementById("arrow-right");
next.addEventListener("click", changeModule.nextBlog);

document.querySelector("#delete-form").style.display = "block";
document.getElementById("submit-button").style.display = 'none';

// Dev tools
let blogs = document.getElementById("nav-log-blogs");
blogs.addEventListener("click", readModule.log);

// Tools
let read = document.getElementById("click-read");
read.addEventListener("click", changeModule.readBlog);

let deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", deleteFunc);

let submitUpdateButton = document.getElementById("submit-button");
submitUpdateButton.addEventListener("click", updateHandlerModule.onUpdate);

// Nav
let updateButton = document.getElementById("nav-update");
updateButton.addEventListener("click", changeModule.update);

// let createButton = document.getElementById("Create");
// createButton.addEventListener("click", changeModule.create);
