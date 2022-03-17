using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EpicBlogUI.CRUD
{
    public class Update
    {
        private readonly DataRepository _db;

        public Update(DataRepository db)
        {
            _db = db;
        }
    }
}
