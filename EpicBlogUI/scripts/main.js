import onCreate from "./onCreate.js";
import onUpdate from "./onUpdate.js";
import deleteFunc from "../CRUD/delete.js";
import * as readModule from "../CRUD/read.js";
import * as changeModule from "./changeBlog.js";

//Home features
let previous = document.getElementById("arrow-left");
previous.addEventListener("click", changeModule.previousBlog);

let next = document.getElementById("arrow-right");
next.addEventListener("click", changeModule.nextBlog);

document.querySelector("#delete-form").style.display = "block";
document.getElementById("submit-button-update").style.display = 'none';
document.getElementById("submit-button-create").style.display = 'none';
document.getElementById("read-box").style.display = "block";

// Dev tools
let blogs = document.getElementById("nav-log-blogs");
blogs.addEventListener("click", readModule.log);

// Tools
let read = document.getElementById("click-read");
read.addEventListener("click", changeModule.readBlog);

let deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", deleteFunc);

let submitUpdateButton = document.getElementById("submit-button-update");
submitUpdateButton.addEventListener("click", onUpdate);

let submitCreateButton = document.getElementById("submit-button-create");
submitCreateButton.addEventListener("click", onCreate);

// Nav
let updateButton = document.getElementById("nav-update");
updateButton.addEventListener("click", changeModule.update);

let createButton = document.getElementById("nav-create");
createButton.addEventListener("click", changeModule.create);
