namespace EpicBlogAPI
{
    public class Blog
    {
        private static int _uniqueId = 0;
        public int Id { get; }
        public DateTime Date { get; }
        public string Author { get; }
        public string Title { get; set; }
        public string Body { get; set; }

        public Blog(string title, string author, string body)
        {
            // TODO: Determine how to assign author.UserAccounts?  Or AnonyPost style of manually submitting an author
            Author = author;
            Id = _uniqueId++;
            Date = DateTime.Now;
            Title = title;
            Body = body;
        }
    }
}