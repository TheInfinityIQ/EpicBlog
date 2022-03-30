
let url = "https://localhost:7061/blog";

const updateRequest = async (updatedBlog) => {
    let id = document.getElementById("blog-id").value;
    console.log(id);
    
    let options = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBlog)
    };

    await fetch(url + "/" + id, options).then((response) => {
        if (response.ok)
        {
            console.log();
            return response.json();
        }
    }).catch(error => {
        console.log("Update error: " + error.message + ". Returning to index...");
        window.location.reload();
    })
};

export default updateRequest;