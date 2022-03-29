import * as blogsModule from "./state.js";
import * as readModule from "../CRUD/read.js";

// console.log(blogsModule.blogs);

const previous = () => {
    let currentIndex = document.getElementById("currentIndex").innerHTML * 1; // Converts the string to a number

    if (currentIndex === 0) {
        currentIndex = blogsModule.blogs.length - 1;
    } else {
        currentIndex--;
    }

    document.getElementById("blog-title").innerHTML = blogsModule.blogs[currentIndex].title;
    document.getElementById("blog-author").innerHTML = blogsModule.blogs[currentIndex].author;
    document.getElementById("blog-date").innerHTML = blogsModule.blogs[currentIndex].date;
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
    document.getElementById("blog-date").innerHTML = blogsModule.blogs[currentIndex].date;
    document.getElementById("blog-body").innerHTML = blogsModule.blogs[currentIndex].body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
    document.getElementById("blog-id").innerHTML = blogsModule.blogs[currentIndex].id;
};

const read = async () => {
    console.log("Inside read...");
    
    let blog = await readModule.readSpecificFunc();
    console.log("Got blog using readSpecificFunc: ...");
    console.log(blog);

    // POSSIBLE
    window.location.href = "http://127.0.0.1:5500/read.html";
    
    console.log("Changed windows...");

    document.getElementById("blog-title").innerHTML = blog.title;
    document.getElementById("blog-author").innerHTML = blog.author;
    document.getElementById("blog-date").innerHTML = blog.date;
    document.getElementById("blog-body").innerHTML = blog.body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
    document.getElementById("blog-id").innerHTML = blog.id;
    console.log("Updated blog on page...");
};

export { previous as previousBlog, next as nextBlog, read as readBlog };
