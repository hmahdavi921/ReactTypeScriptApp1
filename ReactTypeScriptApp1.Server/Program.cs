using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using ReactApp1.Server.Data;
using System.Security.Claims;

namespace ReactTypeScriptApp1.Server
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            var connectionString = builder.Configuration.GetConnectionString("ApplicationDbContextConnection") ?? throw new InvalidOperationException("Connection string 'ApplicationDbContextConnection' not found.");

            builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString));

            builder.Services.AddAuthorization();
            builder.Services.AddIdentityApiEndpoints<ApplicationUser>(
                    /* options => options.SignIn.RequireConfirmedAccount = true */)
                .AddRoles<IdentityRole>()
                .AddEntityFrameworkStores<ApplicationDbContext>();

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            //using (var scope = app.Services.CreateScope())
            //{
            //    var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();
            //    //var userManager = scope.ServiceProvider.GetRequiredService<UserManager<IdentityUser>>();

            //    string role = "Admin";
            //    if (roleManager.RoleExistsAsync(role).Result == false)
            //    {
            //        bool isOk = roleManager.CreateAsync(new IdentityRole(role)).Result.Succeeded;
            //    }
            //    string role1 = "Beneficiary";
            //    if (roleManager.RoleExistsAsync(role1).Result == false)
            //    {
            //        bool isOk = roleManager.CreateAsync(new IdentityRole(role1)).Result.Succeeded;
            //    }
            //    string role2 = "Developer";
            //    if (roleManager.RoleExistsAsync(role2).Result == false)
            //    {
            //        bool isOk = roleManager.CreateAsync(new IdentityRole(role2)).Result.Succeeded;
            //    }
            //    string role3 = "Guard";
            //    if (roleManager.RoleExistsAsync(role3).Result == false)
            //    {
            //        bool isOk = roleManager.CreateAsync(new IdentityRole(role3)).Result.Succeeded;
            //    }
            //    string role4 = "Guest";
            //    if (roleManager.RoleExistsAsync(role4).Result == false)
            //    {
            //        bool isOk = roleManager.CreateAsync(new IdentityRole(role4)).Result.Succeeded;
            //    }
            //    string role5 = "User";
            //    if (roleManager.RoleExistsAsync(role5).Result == false)
            //    {
            //        bool isOk = roleManager.CreateAsync(new IdentityRole(role5)).Result.Succeeded;
            //    }
            //}

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app/*.MapGroup("/account")*/.MapIdentityApi<ApplicationUser>();

            app.MapPost("/logout", async (SignInManager<ApplicationUser> signInManager) =>
            {

                await signInManager.SignOutAsync();
                return Results.Ok();

            }).RequireAuthorization();

            app.MapGet("/pingauth", (ClaimsPrincipal user) =>
            {
                var email = user.FindFirstValue(ClaimTypes.Email); // get the user's email from the claim
                return Results.Json(new { Email = email }); ; // return the email as a plain text response
            }).RequireAuthorization();
           
            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.MapFallbackToFile("/index.html");

            app.Run();
        }

    }
}
