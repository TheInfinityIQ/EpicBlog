import createFunc from "../CRUD/create.js";
import updateFunc from "../CRUD/update.js";
import * as readModule from "../CRUD/read.js";
import deleteFunc from "../CRUD/delete.js";
import * as changeModule from "./changeblog.js";

//Home features
let previous = document.getElementById("arrow-left");
previous.addEventListener("click", changeModule.previousBlog);

let next = document.getElementById("arrow-right");
next.addEventListener("click", changeModule.nextBlog);

// Dev tools
let blogs = document.getElementById("nav-log-blogs");
blogs.addEventListener("click", readModule.log);

// Tools
let read = document.getElementById("click-read");
read.addEventListener("click", changeModule.readBlog);

// Nav
let deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", deleteFunc);