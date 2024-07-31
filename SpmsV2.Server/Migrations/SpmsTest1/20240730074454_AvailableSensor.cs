using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpmsV2.Server.Migrations.SpmsTest1
{
    /// <inheritdoc />
    public partial class AvailableSensor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AvailableSensor",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PowerControl = table.Column<bool>(type: "bit", nullable: false),
                    SuctionWater = table.Column<bool>(type: "bit", nullable: false),
                    InundationWater = table.Column<bool>(type: "bit", nullable: false),
                    SuctionPressure = table.Column<bool>(type: "bit", nullable: false),
                    ThrustPressure = table.Column<bool>(type: "bit", nullable: false),
                    EvacuationWater = table.Column<bool>(type: "bit", nullable: false),
                    TankLevel = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvailableSensor", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DailyWorkPlan",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ThrustPressure = table.Column<double>(type: "float", nullable: false),
                    ProfileId = table.Column<int>(type: "int", nullable: false),
                    Date = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DailyWorkPlan", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AvailableSensor");

            migrationBuilder.DropTable(
                name: "DailyWorkPlan");
        }
    }
}
