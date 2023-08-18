using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using withReactdotnet.Models;

namespace withReactdotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly TestContext testContext;

        public UserController(TestContext testContext)
        {
            this.testContext = testContext;
        }


    }
}
