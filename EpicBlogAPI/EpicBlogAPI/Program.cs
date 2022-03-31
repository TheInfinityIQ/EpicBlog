using EpicBlogAPI;
using Microsoft.AspNetCore.Mvc;
using System.Text.Json;

var MyAllowSpecificOrigins = "MyFrontEnd";

var builder = WebApplication.CreateBuilder(args);

builder.Logging.ClearProviders();
builder.Logging.AddConsole();

builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      builder =>
                      {
                          builder.WithOrigins("http://127.0.0.1:5500", "https://127.0.0.1:5500").AllowAnyMethod().AllowAnyHeader();
                      })
    ;
});

builder.Services.AddSingleton<DataRepository>(container =>
{
    var logger = container.GetRequiredService<ILogger<DataRepository>>();
    var db = new DataRepository(logger);
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

app.MapGet("/blog/size", ([FromServices] DataRepository db) =>
{
    return db.Blogs.Count();
});

app.MapPost("/blog", ([FromServices] DataRepository db, [FromBody] Blog blog, ILogger<Program> logger) =>
{
    Blog toAdd = new Blog(blog.Title, blog.Author, blog.Body);

    db.Blogs?.Add(toAdd);
    return Results.Created($"https://localhost:7061/blog/{toAdd.Id}", toAdd);
});

app.MapDelete("/blog/{title}", ([FromServices] DataRepository db, string title) =>
{
    Blog? toRemove = db.Blogs.FirstOrDefault(blog => blog.Title == title);

    if (toRemove == null)
    {
        return Results.NotFound();
    }

    db.Blogs.Remove(toRemove);

    return Results.Ok();
});

app.MapPut("/blog/{id}", ([FromServices] DataRepository db, [FromBody] Blog blog, int id, ILogger<Program> logger) =>
{
    Blog? toEdit = db.Blogs.FirstOrDefault(blog => blog.Id == id);

    if (toEdit == null)
    {
        return Results.BadRequest();
    }
    string jsonBlogs = JsonSerializer.Serialize(db.Blogs);
    logger.LogInformation(jsonBlogs);

    int indexOfToEdit = db.Blogs.IndexOf(toEdit);
    db.Blogs[indexOfToEdit] = blog;

    jsonBlogs = JsonSerializer.Serialize(db.Blogs);
    logger.LogInformation(jsonBlogs);

    return Results.Ok();

});


app.Run();
