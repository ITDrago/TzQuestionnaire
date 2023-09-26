using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace serverWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class _12 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BankDatas_Ips_IpId",
                table: "BankDatas");

            migrationBuilder.DropForeignKey(
                name: "FK_BankDatas_LimitedLiabilities_LimitedLiabilityId",
                table: "BankDatas");

            migrationBuilder.AlterColumn<int>(
                name: "LimitedLiabilityId",
                table: "BankDatas",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<int>(
                name: "IpId",
                table: "BankDatas",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_BankDatas_Ips_IpId",
                table: "BankDatas",
                column: "IpId",
                principalTable: "Ips",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_BankDatas_LimitedLiabilities_LimitedLiabilityId",
                table: "BankDatas",
                column: "LimitedLiabilityId",
                principalTable: "LimitedLiabilities",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_BankDatas_Ips_IpId",
                table: "BankDatas");

            migrationBuilder.DropForeignKey(
                name: "FK_BankDatas_LimitedLiabilities_LimitedLiabilityId",
                table: "BankDatas");

            migrationBuilder.AlterColumn<int>(
                name: "LimitedLiabilityId",
                table: "BankDatas",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

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

            migrationBuilder.AddForeignKey(
                name: "FK_BankDatas_LimitedLiabilities_LimitedLiabilityId",
                table: "BankDatas",
                column: "LimitedLiabilityId",
                principalTable: "LimitedLiabilities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
