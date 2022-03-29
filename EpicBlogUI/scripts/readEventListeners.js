import * as changeModule from "./changeblog.js";

let homeButton = document.getElementById("nav-home");
homeButton.addEventListener("click", changeModule.home);