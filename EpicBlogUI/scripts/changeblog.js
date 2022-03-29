import * as blogsModule from "./state.js";
import * as readModule from "../CRUD/read.js";

let dateOptions = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

const home = () => {
    // // Remove unneeded elements UNSURE IF NEEDED?!
    // document.getElementById("arrow-left").style.display = "block";
    // document.getElementById("arrow-right").style.display = "block";
    // document.getElementById("index").style.display = "block";
    // document.getElementById("nav-home").remove();

    window.location.reload();
}

const previous = () => {
    let currentIndex = document.getElementById("currentIndex").innerHTML * 1; // Converts the string to a number

    if (currentIndex === 0) {
        currentIndex = blogsModule.blogs.length - 1;
    } else {
        currentIndex--;
    }

    document.getElementById("blog-title").innerHTML = blogsModule.blogs[currentIndex].title;
    document.getElementById("blog-author").innerHTML = blogsModule.blogs[currentIndex].author;
    document.getElementById("blog-date").innerHTML = new Date(blogsModule.blogs[currentIndex].date).toLocaleDateString("en-US", dateOptions);
    document.getElementById("blog-body").innerHTML = blogsModule.blogs[currentIndex].body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
    document.getElementById("blog-id").innerHTML = blogsModule.blogs[currentIndex].id;
};

const next = () => {
    let currentIndex = document.getElementById("currentIndex").innerHTML * 1; // Converts the string to a number

    if (currentIndex === blogsModule.blogs.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    document.getElementById("blog-title").innerHTML = blogsModule.blogs[currentIndex].title;
    document.getElementById("blog-author").innerHTML = blogsModule.blogs[currentIndex].author;
    document.getElementById("blog-date").innerHTML = new Date(blogsModule.blogs[currentIndex].date).toLocaleDateString("en-US", dateOptions);
    document.getElementById("blog-body").innerHTML = blogsModule.blogs[currentIndex].body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
    document.getElementById("blog-id").innerHTML = blogsModule.blogs[currentIndex].id;
};

const read = async () => {
    let blog = await readModule.readSpecificFunc();
    addHomeButton();

    // Remove unneeded elements
    document.getElementById("arrow-left").style.display = "none";
    document.getElementById("arrow-right").style.display = "none";
    document.getElementById("index").style.display = "none";

    //Update blog based on search
    document.getElementById("blog-title").innerHTML = blog.title;
    document.getElementById("blog-author").innerHTML = blog.author;
    document.getElementById("blog-date").innerHTML = new Date(blog.date).toLocaleDateString("en-US", dateOptions);
    document.getElementById("blog-body").innerHTML = blog.body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
    document.getElementById("blog-id").innerHTML = blog.id;
};

const addHomeButton = () => {
    //Add script(s) to header
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
}

export { previous as previousBlog, next as nextBlog, read as readBlog, home as home };
