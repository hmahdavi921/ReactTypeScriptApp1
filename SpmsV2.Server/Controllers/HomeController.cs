using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpmsV2.Server.Data;


namespace SpmsV2.Server.Controllers
{
    [ApiController]
    public class HomeController : ControllerBase
    {
        [Route("/home/Package")]
        [Authorize]
        [HttpGet]
        public IActionResult Package()
        {
            try
            {
                Package user = new Package();
                using (SpmsTest1Context db = new SpmsTest1Context())
                {
                    user = db.Package.First();
                }
                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }



        [Route("/home/PackageStatus")]
        [Authorize(Roles = "Guard,User,Beneficiary,Developer,Guest,Admin")]
        [HttpGet]
        public IActionResult PackageStatus()
        {
            try
            {
                AspNetUsers user = new AspNetUsers();
                using (SpmsTest1Context db = new SpmsTest1Context())
                {
                    user = db.AspNetUsers.First();
                }
                return Ok(user);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }

            //try
            //{
            //    GetPackageStatusResult status = new GetPackageStatusResult();
            //    using (SPMSEntities db = new SPMSEntities())
            //    {
            //        List<sp_GetDrive_Result> drives = db.sp_GetDrive().ToList();
            //        status.Drives = new List<sp_GetDrive_Result>();
            //        status.Drives.AddRange(drives);
            //        ///////////////////////////////////////////////////////////////////////
            //        List<sp_GetAllLastPumpStatus_Result> pumpsStatus = db.sp_GetAllLastPumpStatus().ToList();
            //        status.PumpsStatus = new List<sp_GetAllLastPumpStatus_Result>();
            //        status.PumpsStatus.AddRange(pumpsStatus);
            //        ///////////////////////////////////////////////////////////////////////
            //        sp_GetPackage_Result package = db.sp_GetPackage().First();
            //        status.Package = package;
            //        //////////////////////////////////////////////////////////////
            //        if (System.Web.HttpContext.Current.Cache["DailyWorkPlan"] == null)
            //        {
            //            List<sp_GetDailyWorkPlan_Result> workPlans = db.sp_GetDailyWorkPlan().ToList();
            //            status.WorkPlans = new List<sp_GetDailyWorkPlan_Result>();
            //            System.Web.HttpContext.Current.Cache.Add("DailyWorkPlan", workPlans, null, DateTime.Now.AddMinutes(20), Cache.NoSlidingExpiration, CacheItemPriority.AboveNormal, null);
            //            status.WorkPlans.AddRange(workPlans);
            //        }
            //        else
            //        {
            //            List<sp_GetDailyWorkPlan_Result> workPlans = System.Web.HttpContext.Current.Cache["DailyWorkPlan"] as List<sp_GetDailyWorkPlan_Result>;
            //            status.WorkPlans = new List<sp_GetDailyWorkPlan_Result>();
            //            status.WorkPlans.AddRange(workPlans);
            //        }
            //        status.Command = db.sp_GetLastPackageCommand().First();
            //        status.Message = db.sp_GetMessage().First();
            //    }
            //    return Json(new JsonData() { IsSuccess = true, Data = status }, JsonRequestBehavior.AllowGet);
            //}
            //catch (DbEntityValidationException e)
            //{
            //    StringBuilder message = new StringBuilder();
            //    foreach (var eve in e.EntityValidationErrors)
            //    {
            //        foreach (var ve in eve.ValidationErrors)
            //        {
            //            message.AppendLine($"- Property: \"{ve.PropertyName}\", Value: \"{eve.Entry.CurrentValues.GetValue<object>(ve.PropertyName)}\", Error: \"{ve.ErrorMessage}\"");
            //        }
            //    }
            //    HelperStoreSqlLog.WriteError(new Exception(message.ToString()), "GetPackageStatus");
            //    return Json(new Models.JsonData() { IsSuccess = false, Message = message.ToString(), Data = null },
            //        JsonRequestBehavior.AllowGet);
            //}
            //catch (Exception e)
            //{
            //    HelperStoreSqlLog.WriteError(e, "GetPackageStatus");
            //    return Json(new JsonData() { IsSuccess = false, Message = e.Message, Data = null }, JsonRequestBehavior.AllowGet);
            //}
        }
    }
}
