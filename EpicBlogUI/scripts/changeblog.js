import * as blogsModule from "./state.js";
import * as readModule from "../CRUD/read.js";

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
    let blog = await readModule.readSpecificFunc();
    
    document.getElementById("arrow-left").style.display = 'none';
    document.getElementById("arrow-right").style.display = 'none';
    document.getElementById("index").style.display= 'none';

    document.getElementById("blog-title").innerHTML = blog.title;
    document.getElementById("blog-author").innerHTML = blog.author;
    document.getElementById("blog-date").innerHTML = blog.date;
    document.getElementById("blog-body").innerHTML = blog.body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
    document.getElementById("blog-id").innerHTML = blog.id;
};

export { previous as previousBlog, next as nextBlog, read as readBlog };