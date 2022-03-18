namespace EpicBlogAPI
{
    public class DataRepository
    {
        public List<Blog> Blogs { get; set; }

        public DataRepository()
        {
            Blogs = new List<Blog>();
        }

        public void InitializeDb()
        {
            string body = "Before you get started posting... , think before posting, be Epic!";

            this.Blogs.Add(new Blog("An EpicBlog Tutorial", "EpicBloggers", body));
        }
    }

    
}
