
let url = "https://localhost:7061/blog";

const updateRequest = async (updatedBlog) => {
    let id = document.getElementById("blog-id").innerHTML;
    updatedBlog.date = new Date(updatedBlog.date).toISOString();
    
    let options = {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedBlog)
    };

    await fetch(url + "/" + id, options).then((response) => {
        if (response.ok)
        {
            return;
        }
        throw new Error("Error when updating code");
    }).catch(error => {
        console.log(console.log(error.message));
        window.location.reload();
    })
};

export default updateRequest;