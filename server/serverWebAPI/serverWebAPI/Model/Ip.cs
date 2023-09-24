using System.ComponentModel.DataAnnotations.Schema;

namespace serverWebAPI.Model
{
    public class Ip
    {
        public int Id { get; set; }

        public string? Inn { get; set; }

        [Column(TypeName = "VARBINARY(MAX)")]
        public byte[]? InnScan { get; set; }

        public string? Ogrnip { get; set; }


        [Column(TypeName = "VARBINARY(MAX)")]
        public byte[]? OgrnipScan { get; set; }

        public string? RegistrationDate {get;set;}

        [Column(TypeName = "VARBINARY(MAX)")]
        public byte[]? EgrnipScan { get; set; }

        [Column(TypeName = "VARBINARY(MAX)")]
        public byte[]? PremisesAgreementScan { get; set; }

        public bool NoAgreement { get; set; }

        public List<BankData>? BankData { get; set; }



    }
}
