import blogs from "./state.js";
import * as readModule from "../CRUD/read.js";

let dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

// Home Features
const previous = () => {
    let currentIndex = document.getElementById("currentIndex").innerHTML * 1; // Converts the string to a number

    if (currentIndex === 0) {
        currentIndex = blogs.length - 1;
    } else {
        currentIndex--;
    }

    document.getElementById("blog-title").innerHTML = blogs[currentIndex].title;
    document.getElementById("blog-author").innerHTML = blogs[currentIndex].author;
    document.getElementById("blog-date").innerHTML = new Date(blogs[currentIndex].date).toLocaleDateString("en-US", dateOptions);
    document.getElementById("blog-body").innerHTML = blogs[currentIndex].body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
    document.getElementById("blog-id").innerHTML = blogs[currentIndex].id;
};

const next = () => {
    let currentIndex = document.getElementById("currentIndex").innerHTML * 1; // Converts the string to a number

    if (currentIndex === blogs.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    document.getElementById("blog-title").innerHTML = blogs[currentIndex].title;
    document.getElementById("blog-author").innerHTML = blogs[currentIndex].author;
    document.getElementById("blog-date").innerHTML = new Date(blogs[currentIndex].date).toLocaleDateString("en-US", dateOptions);
    document.getElementById("blog-body").innerHTML = blogs[currentIndex].body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
    document.getElementById("blog-id").innerHTML = blogs[currentIndex].id;
};

// page specific fun
const read = async () => {
    let blog = await readModule.readSpecificFunc();

    addHomeButton();
    removeHomeFeatures();

    document.getElementById("read-box").remove();
    document.getElementById("index-box").style.display = 'none';

    //Update blog based on search
    document.getElementById("blog-title").innerHTML = blog.title;
    document.getElementById("blog-author").innerHTML = blog.author;
    document.getElementById("blog-date").innerHTML = new Date(blog.date).toLocaleDateString("en-US", dateOptions);
    document.getElementById("blog-body").innerHTML = blog.body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
    document.getElementById("blog-id").innerHTML = blog.id;
};

const update = async () => {
    let id = document.getElementById("blog-id").innerHTML * 1;
    let blog = await readModule.getBlog(id);

    addHomeButton();
    removeHomeFeatures();
    addTextAreasOverBodyAndTitle();

    document.getElementById("submit-button-update").style.display = "block";

    //Change body to text area and insert value
    document.getElementById("blog-titleTextArea").innerHTML = blog.title;
    document.getElementById("blog-author").innerHTML = blog.author;
    document.getElementById("blog-date").innerHTML = new Date(blog.date).toLocaleDateString("en-US", dateOptions);
    document.getElementById("blog-bodyTextArea").innerHTML = blog.body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
    document.getElementById("blog-id").innerHTML = blog.id;
};

const create = () => {
    addHomeButton();
    removeHomeFeatures();
    addTextAreasOverBodyAndTitle();

    document.getElementById("submit-button-create").style.display = "block";

    let author = document.getElementById("blog-author");
    let authorTextArea = document.createElement("textarea");
    authorTextArea.rows = 1;
    authorTextArea.cols = 5;
    authorTextArea.value = "*NAME HERE*"
    authorTextArea.id = "blog-authorTextArea";
    document.querySelector(".blog-sub-header").replaceChild(authorTextArea, author);

    document.getElementById("blog-date").style.display = 'none';
    document.getElementById("index-box").style.display = 'none';
    document.getElementById("blog-box").style.display = 'none';
};

//General func
const home = () => {
    window.location.reload();
};

const removeHomeFeatures = () => {
    // Remove unneeded elements
    document.getElementById("arrow-left").style.display = "none";
    document.getElementById("arrow-right").style.display = "none";
    document.getElementById("currentIndex").style.display = "none";
    document.getElementById("read-box").style.display = "none";
    document.querySelector("#delete-form").style.display = "none";
};

const addHomeButton = () => {
    // Add script(s) to header
    let head = document.querySelector("head");
    let nodeHeadEventListener = document.createElement("script");
    nodeHeadEventListener.src = "./scripts/home.js";
    nodeHeadEventListener.type = "module";
    head.appendChild(nodeHeadEventListener);

    // Create Home Button
    let nodeHomeButton = document.createElement("button");
    nodeHomeButton.id = "nav-home";
    let textNode = document.createTextNode("Home");
    nodeHomeButton.appendChild(textNode);
    document.querySelector(".header-nav").appendChild(nodeHomeButton);

    document.getElementById("nav-update").style.display = 'none';
    document.getElementById("nav-create").style.display = 'none';
};

const addTextAreasOverBodyAndTitle = () => {
    let body = document.getElementById("blog-body");
    let bodyTextArea = document.createElement("textarea");
    bodyTextArea.rows = 20;
    bodyTextArea.cols = 45;
    bodyTextArea.id = "blog-bodyTextArea";
    document.querySelector(".blog-body").replaceChild(bodyTextArea, body);

    let title = document.getElementById("blog-title");
    let titleTextArea = document.createElement("textarea");
    titleTextArea.rows = 15;
    titleTextArea.cols = 45;
    titleTextArea.id = "blog-titleTextArea";
    document.querySelector(".blog-header").replaceChild(titleTextArea, title);
};

export { previous as previousBlog, next as nextBlog, read as readBlog, home as home, update as update, create as create };
