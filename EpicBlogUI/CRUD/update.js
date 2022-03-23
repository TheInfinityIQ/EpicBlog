
let url = "https://localhost:7061/blog";

const updateRequest = async (event) => {
    event.preventDefault();
    
    let id = document.getElementById("blogId-update").value;
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
    
    window.location.replace("http://127.0.0.1:5500/useblog.html");
    
    function updatePage () {
        console.log(blogToEdit);
        console.log(document.body.innerHTML)
    }
    
    setTimeout(updatePage, 500)
};

export default updateRequest;