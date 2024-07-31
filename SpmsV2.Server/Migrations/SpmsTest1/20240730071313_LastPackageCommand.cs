using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpmsV2.Server.Migrations.SpmsTest1
{
    /// <inheritdoc />
    public partial class LastPackageCommand : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "LastPackageCommand",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IsActive = table.Column<bool>(type: "bit", nullable: false),
                    WorkPlan = table.Column<short>(type: "smallint", nullable: false),
                    Frequency = table.Column<double>(type: "float", nullable: false),
                    ThrustPressure = table.Column<double>(type: "float", nullable: false),
                    IsActivePump1 = table.Column<bool>(type: "bit", nullable: false),
                    IsActivePump2 = table.Column<bool>(type: "bit", nullable: false),
                    IsActivePump3 = table.Column<bool>(type: "bit", nullable: false),
                    IsActivePump4 = table.Column<bool>(type: "bit", nullable: false),
                    IsActivePump5 = table.Column<bool>(type: "bit", nullable: false),
                    IsActivePump6 = table.Column<bool>(type: "bit", nullable: false),
                    IsActivePump7 = table.Column<bool>(type: "bit", nullable: false),
                    IsActivePump8 = table.Column<bool>(type: "bit", nullable: false),
                    IsActivePump9 = table.Column<bool>(type: "bit", nullable: false),
                    IsActivePump10 = table.Column<bool>(type: "bit", nullable: false),
                    FromScada = table.Column<bool>(type: "bit", nullable: false),
                    ProfileId = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LastPackageCommand", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "LastPackageCommand");
        }
    }
}
