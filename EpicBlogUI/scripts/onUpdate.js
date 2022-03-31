import blogs from "./state.js";
import updateRequest from "../CRUD/update.js";

const onUpdate = async () => {
    let idToCompare = document.getElementById("blog-id").innerHTML * 1;
    
    const blog = {
        author: document.getElementById("blog-author").innerHTML,
        body: document.getElementById("blog-bodyTextArea").value,
        date: document.getElementById("blog-date").innerHTML,
        id: document.getElementById("blog-id").innerHTML * 1,
        title: document.getElementById("blog-titleTextArea").value,
    };

    let indexOfBlogToUpdate = blogs.findIndex((blog) => blog.id === idToCompare);
    blogs[indexOfBlogToUpdate] = blog;

    await updateRequest(blog);
}

export default onUpdate;
