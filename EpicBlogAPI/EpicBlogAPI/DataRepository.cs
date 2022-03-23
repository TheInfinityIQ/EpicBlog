using Bogus;

namespace EpicBlogAPI;
public class DataRepository
{
    public List<Blog> Blogs { get; set; }
    private Faker<Blog> _modelFaker;
    private readonly ILogger<DataRepository> _logger;

    public DataRepository(ILogger<DataRepository> logger)
    {
        Blogs = new List<Blog>();
        _modelFaker = new Faker<Blog>()
            .RuleFor(o => o.Author, f => f.Name.FirstName())
            .RuleFor(o => o.Title, f => f.Random.Words(f.Random.Int(1, 4)))
            .RuleFor(o => o.Body, f => f.Lorem.Sentences(f.Random.Int(2, 7)));

        _logger = logger;
    }

    public void InitializeDb()
    {
        string body = "Before you get started posting... , think before posting, be Epic!";

        this.Blogs.Add(new Blog("An EpicBlog Tutorial", "EpicBloggers", body));
    }

    public void AddContentToDb(int numBlogsToAdd)
    {
        Blogs.AddRange(_modelFaker.Generate(numBlogsToAdd));
        foreach (Blog blog in Blogs)
        {
            _logger.LogInformation("Author: " + blog.Author + "Title: " + blog.Title + "Body: " + blog.Body);
        }
    }
}