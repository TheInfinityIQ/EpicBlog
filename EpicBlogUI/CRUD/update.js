let url = "https://localhost:7061/blog";

const updateRequest = () => {
    fetch(url, {
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
        .then((jsonResponse) => {
            console.log(jsonResponse);
        });
};

export const updateFunc = updateRequest;