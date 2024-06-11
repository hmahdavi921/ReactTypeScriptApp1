﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Data;

namespace ReactTypeScriptApp1.Server.Controllers
{
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public AccountController(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
        {
            this._userManager = userManager;
            this._roleManager = roleManager;
        }


        //create a role named "developer"
        [HttpPost("createRole")]
        public async Task CreateRole(string roleName)
        {
            var role = new IdentityRole { Name = roleName };
            await _roleManager.CreateAsync(role);

        }


        //add an email to "developer"
        [HttpPost("addToRole")]
        public async Task AddToRole(string email, string roleName)
        {
            var user = await _userManager.FindByEmailAsync(email);
            if (user != null)
            {
                await _userManager.AddToRoleAsync(user, roleName);
            }
        }

    }
}
