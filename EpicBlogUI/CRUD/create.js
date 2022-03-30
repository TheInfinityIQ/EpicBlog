let url = "https://localhost:7061/blog";

const createRequest = async (blog) => {
    
    let options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
    };

    return await fetch(url, { method: "POST", options })
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
            console.log(console.log(error.message));
            window.location.reload();
        });
};

export default createRequest;
