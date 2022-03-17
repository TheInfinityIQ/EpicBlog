using EpicBlogAPI;
using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

builder.Services.AddScoped<DataRepository>();

app.MapGet("/", () => "Hello World!");

app.MapGet("/blog", ([FromServices] DataRepository db) => { 
});

app.MapPost("/blog", ([FromServices] DataRepository db) => {
    
});

app.MapDelete("/blog", ([FromServices] DataRepository db) => { 
    
});

app.MapPut("/blog", ([FromServices] DataRepository db) => { 
    
});


app.Run();
