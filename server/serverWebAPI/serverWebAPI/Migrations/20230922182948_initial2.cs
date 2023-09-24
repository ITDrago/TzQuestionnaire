using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace serverWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class initial2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "PremisesAgreementScan",
                table: "LimitedLiabilities",
                type: "VARBINARY(MAX)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "OgrnScan",
                table: "LimitedLiabilities",
                type: "VARBINARY(MAX)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "InnScan",
                table: "LimitedLiabilities",
                type: "VARBINARY(MAX)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "EgripScan",
                table: "LimitedLiabilities",
                type: "VARBINARY(MAX)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "PremisesAgreementScan",
                table: "Ips",
                type: "VARBINARY(MAX)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "OgrnipScan",
                table: "Ips",
                type: "VARBINARY(MAX)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "InnScan",
                table: "Ips",
                type: "VARBINARY(MAX)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "EgrnipScan",
                table: "Ips",
                type: "VARBINARY(MAX)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "varbinary(max)",
                oldNullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<byte[]>(
                name: "PremisesAgreementScan",
                table: "LimitedLiabilities",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "VARBINARY(MAX)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "OgrnScan",
                table: "LimitedLiabilities",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "VARBINARY(MAX)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "InnScan",
                table: "LimitedLiabilities",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "VARBINARY(MAX)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "EgripScan",
                table: "LimitedLiabilities",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "VARBINARY(MAX)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "PremisesAgreementScan",
                table: "Ips",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "VARBINARY(MAX)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "OgrnipScan",
                table: "Ips",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "VARBINARY(MAX)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "InnScan",
                table: "Ips",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "VARBINARY(MAX)",
                oldNullable: true);

            migrationBuilder.AlterColumn<byte[]>(
                name: "EgrnipScan",
                table: "Ips",
                type: "varbinary(max)",
                nullable: true,
                oldClrType: typeof(byte[]),
                oldType: "VARBINARY(MAX)",
                oldNullable: true);
        }
    }
}
