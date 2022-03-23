namespace EpicBlogAPI;

public class Blog
{
    private static int _uniqueId = 0;
    public int Id { get; init; }
    public DateTime Date { get; init; }
    public string Author { get; init; }
    public string Title { get; set; }
    public string Body { get; set; }

    public Blog(string title, string author, string body) : this()
    {
        Author = author;
        Title = title;
        Body = body;
    }

    public Blog()
    {
        Id = _uniqueId++;
        Date = DateTime.Now;
    }
}
