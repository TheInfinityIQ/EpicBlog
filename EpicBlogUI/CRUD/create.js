import blogs from "../scripts/state.js";

let url = "https://localhost:7061/blog";

const createRequest = async (blog) => {
    
    let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
    };

    let blogAdded = await fetch(url, options)
        .then(
            (response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error("Request failed!");
            },
            (networkError) => {
                console.log(networkError.message);
            }
        )
        .catch((error) => {
            console.log(error.message);
            window.location.reload();
        });

        blogs.push(blogAdded);
};

export default createRequest;
