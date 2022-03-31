let url = "https://localhost:7061/blog";

const blogs = await fetch(url, {
    method: "GET",
})
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
        console.log(error);
    });

export default blogs;
