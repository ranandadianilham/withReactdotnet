using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using withReactdotnet.Models;

namespace withReactdotnet.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuditController : ControllerBase
    {

        private readonly TestContext testContext;

        public AuditController(TestContext testContext)
        {
            this.testContext = testContext;
        }

        [HttpGet]
        [Route("all")]
        public IActionResult GetAll() {
            List<Auditlog> auditList = testContext.Auditlogs.ToList();

            return StatusCode(StatusCodes.Status200OK, auditList);
        }
    }
}
