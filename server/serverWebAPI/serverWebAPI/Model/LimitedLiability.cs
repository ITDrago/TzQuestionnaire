namespace serverWebAPI.Model
{
    public class LimitedLiability
    {
        public int Id { get; set; }
        public string? FullName { get; set; }

        public string? ShortName { get; set; }

        public string? RegistrationDate { get; set; }

        public string? Inn { get; set; }

        public byte[]? InnScan { get; set; }

        public string? Ogrn { get; set; }

        public byte[]? OgrnScan { get; set; }

        public byte[]? EgripScan { get; set; }

        public byte[]? PremisesAgreementScan { get; set; }

        public bool NoAgreement { get; set; }

        public List<BankData>? BankData { get; set; }

    }
}
