using Microsoft.AspNetCore.Mvc;
using serverWebAPI.Data;
using serverWebAPI.Model;
using System.Text.Json;

namespace serverWebAPI.Controllers
{
    public class LimitedLiabilityController : Controller
    {
      
        private readonly ApplicationDbContext _context;

        public LimitedLiabilityController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]

        public async Task<ActionResult> PostIpForm([FromForm] LimitedLiabilityViewModel limitedLiabilityViewModel)
        {
            if (limitedLiabilityViewModel == null)
                return BadRequest();

            byte[] InnScanData = null;
            byte[] OgrnScanData = null;
            byte[] EgrnipScanData = null;
            byte[] PremisesAgreementScanData = null;

            List<BankData> bankDataList = new List<BankData>();
            BankData bankData = JsonSerializer.Deserialize<BankData>(limitedLiabilityViewModel.BankData);
            bankDataList.Add(bankData);

            if (limitedLiabilityViewModel.InnScan != null
                && limitedLiabilityViewModel.OgrnScan != null
                && limitedLiabilityViewModel.EgrnipScan != null
                && limitedLiabilityViewModel.PremisesAgreementScan != null)

            {
                using (var binaryReader = new BinaryReader(limitedLiabilityViewModel.InnScan.OpenReadStream()))
                {
                    InnScanData = binaryReader.ReadBytes((int)limitedLiabilityViewModel.InnScan.Length);
                }

                using (var binaryReader = new BinaryReader(limitedLiabilityViewModel.OgrnScan.OpenReadStream()))
                {
                    OgrnScanData = binaryReader.ReadBytes((int)limitedLiabilityViewModel.OgrnScan.Length);
                }

                using (var binaryReader = new BinaryReader(limitedLiabilityViewModel.EgrnipScan.OpenReadStream()))
                {
                    EgrnipScanData = binaryReader.ReadBytes((int)limitedLiabilityViewModel.EgrnipScan.Length);
                }

                using (var binaryReader = new BinaryReader(limitedLiabilityViewModel.PremisesAgreementScan.OpenReadStream()))
                {
                    PremisesAgreementScanData = binaryReader.ReadBytes((int)limitedLiabilityViewModel.PremisesAgreementScan.Length);
                }

            }
            var limitedLability = new LimitedLiability
            {
                Inn = limitedLiabilityViewModel.Inn,
                Ogrn = limitedLiabilityViewModel.Ogrn,
                RegistrationDate = limitedLiabilityViewModel.RegistrationDate,
                NoAgreement = limitedLiabilityViewModel.NoAgreement,
                InnScan = InnScanData,
                OgrnScan = OgrnScanData,
                EgrnipScan = EgrnipScanData,
                PremisesAgreementScan = PremisesAgreementScanData,
                BankData = bankDataList,
            };

            await _context.LimitedLiabilities.AddAsync(limitedLability);
            await _context.SaveChangesAsync();
            return Ok();
        }
    }
}
