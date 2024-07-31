using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpmsV2.Server.Migrations.SpmsTest1
{
    /// <inheritdoc />
    public partial class Drive : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Drive",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsMain = table.Column<bool>(type: "bit", nullable: false),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    Type = table.Column<short>(type: "smallint", nullable: false),
                    IsActiveCoolingWater = table.Column<bool>(type: "bit", nullable: false),
                    Fault = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ServiceTime = table.Column<int>(type: "int", nullable: false),
                    FirstSetupDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Drive", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Drive");
        }
    }
}
