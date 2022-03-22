using EpicBlogAPI;
using Microsoft.AspNetCore.Mvc;


var MyAllowSpecificOrigins = "MyFrontEnd";

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddConsole();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://127.0.0.1:5500", "https://127.0.0.1:5500").AllowAnyMethod();
                      });
});

builder.Services.AddSingleton<DataRepository>(container => {
    var db = new DataRepository();
    db.InitializeDb();
    db.AddContentToDb(20);
    return db;
});

var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);

//Get all
app.MapGet("/blog", ([FromServices] DataRepository db) =>
{
    if (db.Blogs == null)
    {
        return Results.NotFound();
    }
    return Results.Ok(db.Blogs);
});

//Get Specific
app.MapGet("/blog/{id}", ([FromServices] DataRepository db, [FromRoute] int id) =>
{
    Blog? blog = db.Blogs.FirstOrDefault(blog => blog.Id == id);

    if (blog == null)
    {
        return Results.NotFound();
    }

    return Results.Ok(blog);
});

app.MapPost("/blog", ([FromServices] DataRepository db, [FromBody] Blog blog) =>
{
    db.Blogs?.Add(blog);
    return Results.Ok();
});

app.MapDelete("/blog/{id}", ([FromServices] DataRepository db, int id) =>
{
    Blog? toRemove = db.Blogs.FirstOrDefault(blog => blog.Id == id);

    if (toRemove == null)
    {
        return Results.NotFound();
    }

    db.Blogs.Remove(toRemove);

    return Results.Ok();
});

app.MapPut("/blog", ([FromServices] DataRepository db, [FromBody] Blog blog, int id) =>
{
    Blog? toEdit = db.Blogs.FirstOrDefault(blog => blog.Id == id);

    if (toEdit == null)
    {
        return Results.BadRequest();
    }

    int indexOfToEdit = db.Blogs.IndexOf(blog);
    db.Blogs[indexOfToEdit] = blog;

    return Results.Ok();

});


//app.Run();
