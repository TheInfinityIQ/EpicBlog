let url = "https://localhost:7061/blog";

const readRequest = () => {
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
        })
        .catch((error) => {
            console.log(error);
        });
};

const readSpecificRequest = (event) => {
    event.preventDefault();
    let id = document.getElementById("blogId-specific").value;

    fetch(url + "/" + id, {
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
        .then((jsonResponse) => {
            console.log(jsonResponse);
            return jsonResponse;
        })
        .catch((error) => {
            console.log(error);
        });
    console.log("in read specific request");
};

export { readRequest as readFunc, readSpecificRequest as readSpecificFunc };
