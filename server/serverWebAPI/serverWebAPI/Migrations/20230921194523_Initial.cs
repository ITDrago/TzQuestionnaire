using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace serverWebAPI.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Ips",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Inn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InnScan = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Ogrnip = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OgrnipScan = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    RegistrationDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    EgrnipScan = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PremisesAgreementScan = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    NoAgreement = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ips", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "LimitedLiabilities",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FullName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ShortName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RegistrationDate = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Inn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InnScan = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    Ogrn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    OgrnScan = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    EgripScan = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    PremisesAgreementScan = table.Column<byte[]>(type: "varbinary(max)", nullable: true),
                    NoAgreement = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_LimitedLiabilities", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BankDatas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Bik = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BankName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CheckingAccount = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CorrespondentAccount = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    InnId = table.Column<int>(type: "int", nullable: false),
                    IpId = table.Column<int>(type: "int", nullable: true),
                    LimitedLiabilityId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BankDatas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_BankDatas_Ips_IpId",
                        column: x => x.IpId,
                        principalTable: "Ips",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_BankDatas_LimitedLiabilities_LimitedLiabilityId",
                        column: x => x.LimitedLiabilityId,
                        principalTable: "LimitedLiabilities",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_BankDatas_IpId",
                table: "BankDatas",
                column: "IpId");

            migrationBuilder.CreateIndex(
                name: "IX_BankDatas_LimitedLiabilityId",
                table: "BankDatas",
                column: "LimitedLiabilityId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BankDatas");

            migrationBuilder.DropTable(
                name: "Ips");

            migrationBuilder.DropTable(
                name: "LimitedLiabilities");
        }
    }
}
