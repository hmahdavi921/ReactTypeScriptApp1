using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SpmsV2.Server.Data;
//using Microsoft.AspNet.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Http;
using System.Security.Claims;
using SpmsV2.Server.Models;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using static System.Runtime.InteropServices.JavaScript.JSType;


namespace SpmsV2.Server.Controllers
{

    [ApiController]
    public class HomeController : ControllerBase
    {

        [Route("/home/User")]
        [Authorize]
        [HttpGet]
        public IActionResult User()
        {
            try
            {
                var userId = HttpContext.User.FindFirst(ClaimTypes.NameIdentifier).Value;

                Profile profile;
                using (SpmsTest1Context db = new SpmsTest1Context())
                {
                    profile = db.Profile.First(x => x.UserId == userId);
                }
                return Ok(profile);
            }
            catch (Exception e)
            {
                return BadRequest(e);
            }
        }


        [Route("/home/Package")]
        [Authorize]
        [HttpGet]
        public IActionResult Package()
        {
            try
            {

                Package package;
                using (SpmsTest1Context db = new SpmsTest1Context())
                {
                    package = db.Package.First();
                }
                return Ok(package);
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
                PackageStatusResult data = new PackageStatusResult();
                data.LastPackageData = new LastPackageData();
                data.LastCommand = new LastPackageCommand();
                data.Drives = new List<Drive>();
                data.Pumps = new List<Pump>();
                data.DailyWorkPlans = new List<DailyWorkPlan>();
                data.Package = new Package();
                using (SpmsTest1Context db = new SpmsTest1Context())
                {
                    data.Drives = db.Drive.ToList();
                    data.Pumps = db.Pump.ToList();
                    data.LastPackageData = db.LastPackageData.First();
                    data.Package = db.Package.First();
                    data.DailyWorkPlans = db.DailyWorkPlan.ToList();
                    data.LastCommand = db.LastPackageCommand.First();
                    data.Message = db.Message.First().Description;
                }

                return Ok(new JsonData()
                {
                    IsSuccess = true,
                    Message = "ok ",
                    Data = data
                });
                //Dapper
                //using (var connection = new SqlConnection(connectionString))
                //{
                //    var sql = "SELECT ProductID, ProductName FROM Products WHERE Discontinued = 1";
                //    var products = connection.Query<Product>(sql);

                //    foreach (var product in products)
                //    {
                //        Console.WriteLine($"{product.ProductID} {product.ProductName}: {product.Discontinued}");
                //    }
                //}
            }
            catch (Exception e)
            {
                return BadRequest(new JsonData()
                {
                    IsSuccess = false,
                    Message = "Error",
                    Data = null
                });
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
            //            status.DailyWorkPlans = new List<sp_GetDailyWorkPlan_Result>();
            //            System.Web.HttpContext.Current.Cache.Add("DailyWorkPlan", workPlans, null, DateTime.Now.AddMinutes(20), Cache.NoSlidingExpiration, CacheItemPriority.AboveNormal, null);
            //            status.DailyWorkPlans.AddRange(workPlans);
            //        }
            //        else
            //        {
            //            List<sp_GetDailyWorkPlan_Result> workPlans = System.Web.HttpContext.Current.Cache["DailyWorkPlan"] as List<sp_GetDailyWorkPlan_Result>;
            //            status.DailyWorkPlans = new List<sp_GetDailyWorkPlan_Result>();
            //            status.DailyWorkPlans.AddRange(workPlans);
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


        [Route("/home/SaveCommand")]
        [Authorize(Roles = "Guard,User,Beneficiary,Developer,Guest,Admin")]
        [HttpPost]
        public IActionResult SaveCommand(LastPackageCommand command)
        {
            try
            {
                int row = 0;
                using (SpmsTest1Context db = new SpmsTest1Context())
                {
                    LastPackageCommand lastPackageCommand = db.LastPackageCommand.First();
                    lastPackageCommand.IsActive = command.IsActive;
                    lastPackageCommand.Frequency = command.Frequency;
                    lastPackageCommand.WorkPlan = command.WorkPlan;
                    lastPackageCommand.ThrustPressure = command.ThrustPressure;
                    lastPackageCommand.IsActivePump1 = command.IsActivePump1;
                    lastPackageCommand.IsActivePump2 = command.IsActivePump2;
                    lastPackageCommand.IsActivePump3 = command.IsActivePump3;
                    lastPackageCommand.IsActivePump4 = command.IsActivePump4;
                    lastPackageCommand.IsActivePump5 = command.IsActivePump5;
                    lastPackageCommand.IsActivePump6 = command.IsActivePump6;
                    lastPackageCommand.IsActivePump7 = command.IsActivePump7;
                    lastPackageCommand.IsActivePump8 = command.IsActivePump8;
                    lastPackageCommand.IsActivePump9 = command.IsActivePump9;
                    lastPackageCommand.IsActivePump10 = command.IsActivePump10;
                    lastPackageCommand.FromScada = false;
                    db.Entry(lastPackageCommand).State = EntityState.Modified;
                    row = db.SaveChanges();
                }

                if (row == 1)
                {
                    return Ok(new JsonData()
                    {
                        IsSuccess = true,
                        Message = "ok",
                        Data = null
                    });
                }
                return BadRequest(new JsonData()
                {
                    IsSuccess = false,
                    Message = "Error",
                    Data = null
                });
            }
            catch (Exception e)
            {
                return BadRequest(new JsonData()
                {
                    IsSuccess = false,
                    Message = "Error",
                    Data = null
                });
            }
        }

        [Route("/home/PumpCount")]
        [Authorize(Roles = "Guard,User,Beneficiary,Developer,Guest,Admin")]
        [HttpGet]
        public IActionResult PumpCount()
        {
            try
            {
                int pumpCount = 0;
                using (SpmsTest1Context db = new SpmsTest1Context())
                {
                    pumpCount = db.Package.First().TotalPumpCount;
                }
                return Ok(new JsonData()
                {
                    IsSuccess = true,
                    Message = "ok",
                    Data = pumpCount
                });
            }
            catch (Exception e)
            {
                return BadRequest(new JsonData()
                {
                    IsSuccess = false,
                    Message = "Error",
                    Data = null
                });
            }
        }

    }
}
