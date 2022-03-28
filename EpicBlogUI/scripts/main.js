import createFunc from "../CRUD/create.js";
import updateFunc from "../CRUD/update.js";
import * as readModule from "../CRUD/read.js";
import deleteFunc from "../CRUD/delete.js";
import * as changeModule from "./changeblog.js";

let previous = document.getElementById("arrow-left");
previous.addEventListener("click", changeModule.previousBlog);

let next = document.getElementById("arrow-right");
next.addEventListener("click", changeModule.nextBlog);

// let read = document.getElementById("read").value;
// read.addEventListener("submit", ); // May be checking wrong element

let deleteButton = document.getElementById("delete-button");
deleteButton.addEventListener("click", deleteFunc);

