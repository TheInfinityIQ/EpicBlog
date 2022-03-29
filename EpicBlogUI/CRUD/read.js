let url = "https://localhost:7061/blog";

const readSpecificRequest = async () => {
    let id = document.getElementById("read").value;

    return await fetch(url + "/" + id, {
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
                console.log("Network error: " + networkError.message);
            }
        )
        .catch((error) => {
            console.log(error);
        });
};

const logBlogs = () =>
    fetch(url, {
        method: "GET",
    })
        .then(
            (response) => {
                if (response.ok) {
                    console.log(response.json());
                    return;
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

export { readSpecificRequest as readSpecificFunc, logBlogs as log };
