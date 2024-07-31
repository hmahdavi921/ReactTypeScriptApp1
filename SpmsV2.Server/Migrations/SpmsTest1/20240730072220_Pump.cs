using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SpmsV2.Server.Migrations.SpmsTest1
{
    /// <inheritdoc />
    public partial class Pump : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pump",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MaxCurrent = table.Column<int>(type: "int", nullable: false),
                    ServiceTime = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pump", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pump");
        }
    }
}
