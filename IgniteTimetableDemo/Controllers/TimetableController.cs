using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace IgniteTimetableDemo.Controllers
{
    [Route("api/[controller]")]
    public class TimetableController : Controller
    {
        // GET: api/values
        [HttpGet]
        public FileResult Get()
        {
            return File("sessions.json", "application/json");
        }
    }
}
