namespace EpicBlogUI
{
    public class Blog
    {
        public string Title { get; set; }
        public string Body { get; set; }
        private DateTime Date { get; set; }

        public Blog(string title, string body)
        {
            Title = title;
            Body = body;
            // Configure DateTime automatically
        }
    }
}