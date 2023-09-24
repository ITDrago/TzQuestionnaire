namespace serverWebAPI.Model
{
    public class BankData
    {
        public int Id { get; set; }

        public string? Bik { get; set; }

        public string? BankName { get; set; }

        public string? CheckingAccount { get; set;}

        public string? CorrespondentAccount { get; set;}

        public int IpId { get; set; }
    }
}
