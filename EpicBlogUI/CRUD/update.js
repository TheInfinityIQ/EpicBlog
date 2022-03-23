
let url = "https://localhost:7061/blog";

const updateRequest = async (event) => {
    let id = document.getElementById("blogId-update").value;
    window.location.href = "http://127.0.0.1:5500/useblog.html";
    //  Prevent from loading until blog is found
    event.preventDefault();
    
    // Get blog
    let blogToEdit = await fetch(url + "/" + id, {method: "GET"}).then((response) => {
        if (response.ok)
        {
            return response.json();
        }
    }).catch(error => {
        console.log("Update error: " + error.message + ". Returning to index...");
        window.location.href = "http://127.0.0.1:5500/index.html";
    })

    console.log(blogToEdit);

    //TODO: Set values
    document.getElementById("blog-title").value;
    document.getElementById("blog-author").value;
    document.getElementById("blog-body").value;

    // Get informatation and insert it into fields to make it easier to implement smaller changes into a blog

    // fetch(url, {
    //     method: "PUT",
    // })
    //     .then(
    //         (response) => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //             throw new Error("Request failed!");
    //         },
    //         (networkError) => {
    //             console.log(networkError.message);
    //         }
    //     )
    //     .then((jsonResponse) => {
    //         console.log(jsonResponse);
    //     });
};

export default updateRequest;