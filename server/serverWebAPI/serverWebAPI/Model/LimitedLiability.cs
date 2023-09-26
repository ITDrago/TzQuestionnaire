using System.ComponentModel.DataAnnotations.Schema;

namespace serverWebAPI.Model
{
    public class LimitedLiability
    {
        public int Id { get; set; }
        public string? FullName { get; set; }

        public string? ShortName { get; set; }

        public string? RegistrationDate { get; set; }

        public string? Inn { get; set; }
        [Column(TypeName = "VARBINARY(MAX)")]
        public byte[]? InnScan { get; set; }

        public string? Ogrn { get; set; }
        [Column(TypeName = "VARBINARY(MAX)")]
        public byte[]? OgrnScan { get; set; }
        [Column(TypeName = "VARBINARY(MAX)")]
        public byte[]? EgrnipScan { get; set; }
        [Column(TypeName = "VARBINARY(MAX)")]
        public byte[]? PremisesAgreementScan { get; set; }

        public bool NoAgreement { get; set; }

        public ICollection<BankData>? BankData { get; set; }

    }
}
