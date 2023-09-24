namespace serverWebAPI.Model
{
    public class IpViewModel
    {
        public int Id { get; set; }

        public string? Inn { get; set; }

        
        public IFormFile? InnScan { get; set; }

        public string? Ogrnip { get; set; }


        public IFormFile? OgrnipScan { get; set; }

        public string? RegistrationDate { get; set; }

      
        public IFormFile? EgrnipScan { get; set; }

 
        public IFormFile? PremisesAgreementScan { get; set; }

        public bool NoAgreement { get; set; }

        public string? BankData { get; set; }
    }
}
