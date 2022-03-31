import * as stateModule from "./state.js";
import createRequest from "../CRUD/create.js";

const onCreate = async () => {
    
    // id and date def
    const blog = {
        title: document.getElementById("blog-titleTextArea").value,
        author: document.getElementById("blog-authorTextArea").value,
        body: document.getElementById("blog-bodyTextArea").value,
        id: 0,
        date: new Date().toISOString(),
    };

    await createRequest(blog);

    //Download new state
    
}

export default onCreate;