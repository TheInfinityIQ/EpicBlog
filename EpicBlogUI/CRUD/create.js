let url = "https://localhost:7061/blog";

const createRequest = async (blog) => {
    
    console.log("Inside create requests");
    console.log(blog);

    let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
    };

    await fetch(url, options)
        .then(
            (response) => {
                if (response.ok) {
                    return;
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
};

export default createRequest;
