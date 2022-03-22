
let url = "https://localhost:7061/blog";

const updateRequest = (event) => {
    //  Prevent from loading until blog is found
    event.preventDefault();
    
    // Get blog
    let id = document.getElementById("blogId-update").value;
    const blogToEdit = fetch(url + "/" + id, {method: "GET"}).then((response) => {
        if (response.ok)
        {
            // console.log(response.json());
            return response.json()
        }
    }).catch(error => {
        console.log("Update error: " + error.message + ". Returning to index...");
        window.location.href = "http://127.0.0.1:5500/index.html";
    })

    console.log(blogToEdit);
    
    // Get informatation and insert it into fields to make it easier to implement smaller changes into a blog

    document.title = "Epic Blog - Update";
    
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