using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EpicBlogUI.CRUD
{
    public class Create
    {
        private readonly DataRepository _db;

        public Create(DataRepository db)
        {
            _db = db;
        }
    }
}
