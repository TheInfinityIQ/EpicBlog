import createFunc from "../CRUD/create.js";
import updateFunc from "../CRUD/update.js";
import * as readModule from "../CRUD/read.js";
import deleteFunc from "../CRUD/delete.js";

console.log("test");

let createButton = document.getElementById("CREATE");
createButton.addEventListener("click", createFunc);

let updateButton = document.getElementById("UPDATE");
updateButton.addEventListener("submit", updateFunc);

let readButton = document.getElementById("READ");
readButton.addEventListener("click", readModule.readFunc);

let readSpecificForm = document.getElementById("READ_SPECIFIC");
readSpecificForm.addEventListener("submit", readModule.readSpecificFunc); // Get ID from form and pass to readSpecificFunc

let deleteButton = document.getElementById("DELETE");
deleteButton.addEventListener("click", deleteFunc);