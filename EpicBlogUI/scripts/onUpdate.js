import * as stateModule from "./state.js";
import updateRequest from "../CRUD/update.js";

const onUpdate = async () => {
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
    await updateRequest(blog);
}

export default onUpdate;
