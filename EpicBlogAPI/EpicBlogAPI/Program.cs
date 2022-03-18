using EpicBlogAPI;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

builder.Services.AddSingleton<DataRepository>(container => {
    var db = new DataRepository();
    db.InitializeDb();

    return db;
});

app.MapGet("/", () => "Hello World!");

//Get all
app.MapGet("/blog", ([FromServices] DataRepository db) => {
    if (db.Blogs == null)
    { 
        return Results.NotFound();
    }
    return Results.Ok(db.Blogs);
});

//Get Specific
app.MapGet("/blog/{id}", ([FromServices] DataRepository db, [FromRoute] int id) => {
    Blog? blog = db.Blogs.FirstOrDefault(blog => blog.Id == id );

    if (blog == null) {
        return Results.NotFound();
    }

    return Results.Ok(blog);
});

app.MapPost("/blog", ([FromServices] DataRepository db, [FromBody] Blog blog) => {
    db.Blogs?.Add(blog);
    return Results.Ok();
});

app.MapDelete("/blog", ([FromServices] DataRepository db, int id) => { 
    Blog? toRemove = db.Blogs.FirstOrDefault(blog => blog.Id == id);
    
    if (toRemove == null)
    { 
        return Results.NotFound();
    }
    
    db.Blogs.Remove(toRemove);

    return Results.Ok();
});

app.MapPut("/blog", ([FromServices] DataRepository db, [FromBody] Blog blog, int id) => { 
    Blog? toEdit = db.Blogs.FirstOrDefault(blog => blog.Id == id);

    if (toEdit == null)
    { 
        return Results.BadRequest();
    }

    int indexOfToEdit = db.Blogs.IndexOf(blog);
    db.Blogs[indexOfToEdit] = blog;

    return Results.Ok();

});


app.Run();
