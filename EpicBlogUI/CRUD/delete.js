let url = "https://localhost:7061/blog";

const deleteRequest = (event) => {
    event.preventDefault();
    let id = document.getElementById("blogId-delete").value;

    fetch(url + "/" + id, { method: "DELETE" }).then(
        (response) => {
            if (response.ok) {
                console.log("Successfully removed");
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
