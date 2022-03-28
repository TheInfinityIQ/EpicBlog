import blogs from "./state.js";

console.log(blogs);

const previous = () => {
    let currentIndex = document.getElementById("currentIndex").innerHTML * 1; // Converts the string to a number
    
    
    
    if (currentIndex === 0) {
        currentIndex = blogs.length - 1;
    } else {
        currentIndex--;
    }
    
    document.getElementById("blog-title").innerHTML = blogs[currentIndex].title;
    document.getElementById("blog-author").innerHTML = blogs[currentIndex].author;
    document.getElementById("blog-date").innerHTML = blogs[currentIndex].date;
    document.getElementById("blog-body").innerHTML = blogs[currentIndex].body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
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
    document.getElementById("blog-date").innerHTML = blogs[currentIndex].date;
    document.getElementById("blog-body").innerHTML = blogs[currentIndex].body;
    document.getElementById("currentIndex").innerHTML = currentIndex;
};

const checkIfDomLoaded = async () => {};

export { previous as previousBlog, next as nextBlog };
