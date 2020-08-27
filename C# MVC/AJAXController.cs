namespace Monitor.Controllers
{
    public class DataController : Controller
    {
        public DataController(ILoggerFactory logger, IOptions<AppSettings> appSettings) {

        }

        // AJAX POST Example
        [HttpPost]
        public JsonResult deleteData([FromBody]Data xmlObj)
        {
            return Json(new { success = true });
        }

        // AJAX POST Example
        [HttpPost]
        public JsonResult writeImage()
        {
            // Grab data from form
            IFormFile file = Request.Form.Files[0];
            string fileName = file.ContentDisposition.Substring(file.ContentDisposition.IndexOf("filename") + 10).Substring(0, file.ContentDisposition.Substring(file.ContentDisposition.IndexOf("filename") + 10).Length - 1);
            file.SaveAs(imageDir + fileName);

            return Json(new { success = true });
        }

        // AJAX GET Example
        [HttpGet]
        public IActionResult GetFeeds()
        {
            return Json(result);
        }
    }
}