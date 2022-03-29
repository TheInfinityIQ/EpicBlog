import * as blogsModule from "../scripts/state.js";

let url = "https://localhost:7061/blog";

const deleteRequest = (event) => {
    event.preventDefault();
    
    let currentIndex = document.getElementById("currentIndex").innerHTML * 1;
    
    let title = blogsModule.blogs[currentIndex].title;
    blogsModule.blogs.splice(currentIndex, 1); // Removes from state

    // Removes from DB
    fetch(url + "/" + title, { method: "DELETE" }).then(
        (response) => {
            if (response.ok) {
                console.log("Successfully removed");
                window.location.reload();
                return;
            }
            throw new Error("Request failed!");
        },
        (networkError) => {
            console.log(networkError.message);
        }
    );
};
 
export default deleteRequest;
