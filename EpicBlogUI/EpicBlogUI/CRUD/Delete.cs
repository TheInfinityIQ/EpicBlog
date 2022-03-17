using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EpicBlogUI.CRUD
{
    public class Delete
    {
        private readonly DataRepository _db;

        public Delete(DataRepository db)
        {
            _db = db;
        }
    }
}
