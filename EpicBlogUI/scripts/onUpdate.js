import * as stateModule from "./state.js";

/* 
    Goals
    1. After submit was pressed, update state db with new blog
    2. After state has been updated, make use of put call and provide it with requestBody (blog)
*/

const onUpdate = () => {
    let idToCompare = document.getElementById("blog-id").innerHTML * 1;
    console.log(idToCompare);
    
    const blog = {
        author: document.getElementById("blog-author").innerHTML,
        body: document.getElementById("blog-bodyTextArea").value,
        date: document.getElementById("blog-date").innerHTML,
        id: document.getElementById("blog-id").innerHTML * 1,
        title: document.getElementById("blog-titleTextArea").value,
    };

    console.log(blog);

    let indexOfBlogToUpdate = stateModule.blogs.findIndex((blog) => blog.id === idToCompare);
    stateModule.blogs[indexOfBlogToUpdate] = blog;

    console.log(stateModule.blogs);
}

export { onUpdate as onUpdate };
