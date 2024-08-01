using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpmsV2.Server.Migrations.SpmsTest1
{
    /// <inheritdoc />
    public partial class lastPackageDataChangePumpChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime",
                table: "Pump",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime",
                table: "Pump",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime1",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime10",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime2",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime3",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime4",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime5",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime6",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime7",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime8",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "TotalWorkingTime9",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime1",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime10",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime2",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime3",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime4",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime5",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime6",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime7",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime8",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "WorkingTime9",
                table: "LastPackageData",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalWorkingTime",
                table: "Pump");

            migrationBuilder.DropColumn(
                name: "WorkingTime",
                table: "Pump");

            migrationBuilder.DropColumn(
                name: "TotalWorkingTime1",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "TotalWorkingTime10",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "TotalWorkingTime2",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "TotalWorkingTime3",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "TotalWorkingTime4",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "TotalWorkingTime5",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "TotalWorkingTime6",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "TotalWorkingTime7",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "TotalWorkingTime8",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "TotalWorkingTime9",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "WorkingTime1",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "WorkingTime10",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "WorkingTime2",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "WorkingTime3",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "WorkingTime4",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "WorkingTime5",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "WorkingTime6",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "WorkingTime7",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "WorkingTime8",
                table: "LastPackageData");

            migrationBuilder.DropColumn(
                name: "WorkingTime9",
                table: "LastPackageData");
        }
    }
}
