using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace serverWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class initial4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BankDatas_Ips_IpId",
                table: "BankDatas");

            migrationBuilder.DropColumn(
                name: "InnId",
                table: "BankDatas");

            migrationBuilder.AlterColumn<int>(
                name: "IpId",
                table: "BankDatas",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_BankDatas_Ips_IpId",
                table: "BankDatas",
                column: "IpId",
                principalTable: "Ips",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BankDatas_Ips_IpId",
                table: "BankDatas");

            migrationBuilder.AlterColumn<int>(
                name: "IpId",
                table: "BankDatas",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<int>(
                name: "InnId",
                table: "BankDatas",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddForeignKey(
                name: "FK_BankDatas_Ips_IpId",
                table: "BankDatas",
                column: "IpId",
                principalTable: "Ips",
                principalColumn: "Id");
        }
    }
}
