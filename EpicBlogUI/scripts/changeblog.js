let url = "https://localhost:7061/blog";
let id = -1;

let dbSize = await fetch(url + "/size", {method: "GET"}).then((response) => {
    if (response.ok)
    {
        return response.json();
    }
}).catch(error => {
    console.log("dbSizeError: " + error.message + ". Returning to index...");
})

const previous = async () => {
    let currentId = document.getElementById("currentId").innerHTML * 1; // Converts the string to a number
    console.log("Inside previous function. Id: " + currentId);
    
    //Normal scenario
    id = currentId - 1;
    
    //Edge case, Id equals 0 so we access last element of db
    if (currentId === 0) {
        id = dbSize - 1; // Get last item in list
    }

    // Get Blog
    let previousResponse = await fetch(url + "/" + id, {method: "GET"}).then(
        response => {
            if (response.ok) {
               return response.json(); 
            }
        }
    ).catch(error => {
        console.log("Error found while getting blog from previous: " + error.message);
    })

    document.getElementById("blog-title").innerHTML = previousResponse.title;
    document.getElementById("blog-author").innerHTML = previousResponse.author;
    document.getElementById("blog-date").innerHTML = previousResponse.date;
    document.getElementById("blog-body").innerHTML = previousResponse.body;
    document.getElementById("currentId").innerHTML = previousResponse.id;
}

const next = async () => {
    let currentId = document.getElementById("currentId").innerHTML * 1; // Converts the string to a number
    console.log("Inside next function. Id: " + currentId);
    
    // Normal case
    id = currentId + 1;

    // Edge case, end of list. Get first entry in blog
    if (currentId === dbSize -1) {
        id = 0; // Access first item in list
    }
    
    // Get Blog
    let nextResponse = await fetch(url + "/" + id, {method: "GET"}).then(
        response => {
            if (response.ok) {
               return response.json(); 
            }
        }
    ).catch(error => {
        console.log("Error found while getting blog from next: " + error.message);
    })

    document.getElementById("blog-title").innerHTML = nextResponse.title;
    document.getElementById("blog-author").innerHTML = nextResponse.author;
    document.getElementById("blog-date").innerHTML = nextResponse.date;
    document.getElementById("blog-body").innerHTML = nextResponse.body;
    document.getElementById("currentId").innerHTML = nextResponse.id;
}

export { previous as previousBlog, next as nextBlog };
