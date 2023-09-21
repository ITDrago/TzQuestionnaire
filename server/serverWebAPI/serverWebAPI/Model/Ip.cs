namespace serverWebAPI.Model
{
    public class Ip
    {
        public int Id { get; set; }

        public string? Inn { get; set; }

        public byte[]? InnScan { get; set; }

        public string? Ogrnip { get; set; }

        public byte[]? OgrnipScan { get; set; }

        public string? RegistrationDate {get;set;}

        public byte[]? EgrnipScan { get; set; }

        public byte[]? PremisesAgreementScan { get; set; }

        public bool NoAgreement { get; set; }

        public List<BankData>? BankData { get; set; }



    }
}
