using EpicBlogUI;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

builder.Services.AddScoped<DataRepository>();

app.MapGet("/", () => "Hello World!");

app.Run();
