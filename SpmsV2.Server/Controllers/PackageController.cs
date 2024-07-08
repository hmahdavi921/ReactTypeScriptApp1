using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace SpmsV2.Server.Controllers
{
    [Authorize(Roles = "Developer")]
    [Route("api/[controller]")]
    [ApiController]
    public class PackageController : ControllerBase
    {
        [HttpGet(Name = "GetPackage")]
        public IActionResult PackageGet()
        {
            return Ok(DateTime.Now);
        }

    }


}
