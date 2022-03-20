// Update HTML to display values getted from API

import createFunc from "./create.js";
import updateFunc from "./update.js";
import readFunc from "./read.js";
import deleteFunc from "./delete.js";

let createButton = document.getElementById("CREATE");
createButton.addEventListener("click", createFunc);

let updateButton = document.getElementById("UPDATE");
updateButton.addEventListener("click", updateFunc);

let getButton = document.getElementById("FIND");
getButton.addEventListener("click", readFunc);

let deleteButton = document.getElementById("DELETE");
deleteButton.addEventListener("click", deleteFunc);