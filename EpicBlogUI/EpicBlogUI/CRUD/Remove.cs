using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EpicBlogUI.CRUD
{
    public class Remove
    {
        private readonly DataRepository _db;

        public Remove(DataRepository db)
        {
            _db = db;
        }
    }
}
