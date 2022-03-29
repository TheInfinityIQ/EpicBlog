let url = "https://localhost:7061/blog";

let storedBlog;

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

// let dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
// blogs.forEach(blog => {
//     blog.date = new Date(blog.date).toLocaleDateString("en-US", dateOptions);
// });

export {blogs as blogs, storedBlog as blog} ;
