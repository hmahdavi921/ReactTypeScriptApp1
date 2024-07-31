using Microsoft.VisualStudio.TestTools.UnitTesting;
using SpmsV2.Server.Controllers;
using System;
using System.Net;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using Microsoft.DotNet.Scaffolding.Shared.CodeModifier.CodeChange;
using RestSharp;
using Method = RestSharp.Method;

namespace SpmsV2.Server.Controllers.Tests
{
    [TestClass()]
    public class HomeControllerTests
    {
        [TestMethod()]
        public void PackageStatusTest()
        {
            HomeController controller = new HomeController();
            var ddd = controller.PackageStatus();
            //using var client = new HttpClient();
            //client.BaseAddress = new Uri("/home/PackageStatus");
            //// Add an Accept header for JSON format.
            //client.DefaultRequestHeaders.Accept.Add(
            //    new MediaTypeWithQualityHeaderValue("application/json"));
            //// Get data response
            //var response = client.GetAsync().Result;
        }
    }
}