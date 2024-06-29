using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
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

            builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(connectionString).EnableDetailedErrors(true));

            builder.Services.AddAuthorization();
            builder.Services.AddIdentityApiEndpoints<ApplicationUser>()
                            .AddRoles<IdentityRole>()
                            .AddUserManager<UserManager<ApplicationUser>>()
                            .AddRoleManager<RoleManager<IdentityRole>>()
                            .AddEntityFrameworkStores<ApplicationDbContext>();


            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            app.UseDefaultFiles();

            app.UseStaticFiles();

            app/*.MapGroup("/account")*/.MapIdentityApi<ApplicationUser>();

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