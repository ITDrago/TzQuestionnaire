namespace serverWebAPI.Model
{
    public class LimitedLiabilityViewModel
    {
        public int Id { get; set; }

        public string? FullName { get; set; }

        public string? ShortName { get; set; }

        public string? RegistrationDate { get; set; }

        public string? Inn { get; set; }

        public IFormFile? InnScan { get; set; }

        public string? Ogrn { get; set; }

        public IFormFile? OgrnScan { get; set; }

        public IFormFile? EgrnipScan { get; set; }

        public IFormFile? PremisesAgreementScan { get; set; }

        public bool NoAgreement { get; set; }

        public string? BankData { get; set; }



    }
}
