import * as stateModule from "./state.js";
import createRequest from "../CRUD/create.js";

const onCreate = async () => {
    
    const blog = {
        author: document.getElementById("blog-authorTextArea").value,
        body: document.getElementById("blog-bodyTextArea").value,
        title: document.getElementById("blog-titleTextArea").value
    };

    const stateBlog = {
        author: document.getElementById("blog-authorTextArea").value,
        body: document.getElementById("blog-bodyTextArea").value,
        title: document.getElementById("blog-titleTextArea").value,
        date: Date.now(),
        id
    }

    let idOfNewBlog = await createRequest(blog);

    stateBlog.id = idOfNewBlog;
    
    stateModule.blogs[indexOfBlogToUpdate].push(stateBlog);

    console.log("inside create");
    console.log(stateModule.blogs)
}

export default onCreate;