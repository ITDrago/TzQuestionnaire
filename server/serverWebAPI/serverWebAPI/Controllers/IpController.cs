using Microsoft.AspNetCore.Mvc;
using serverWebAPI.Data;
using serverWebAPI.Model;
using System.Security.Claims;
using System.IO;
using System.Text.Json;

namespace serverWebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class IpController : Controller
    {
        private readonly ApplicationDbContext _context;

        public IpController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]

        public async Task<ActionResult> PostIpForm([FromForm] IpViewModel ipViewModel)
        {
            if(ipViewModel == null)
                return BadRequest();

            byte[] InnScanData = null;
            byte[] OgrnipScanData = null;
            byte[] EgrnipScanData = null;
            byte[] PremisesAgreementScanData = null;
            List<BankData> bankDataList = new List<BankData>();
            BankData bankData = JsonSerializer.Deserialize<BankData>(ipViewModel.BankData);
            bankDataList.Add(bankData);
            
            if (ipViewModel.InnScan != null
                && ipViewModel.OgrnipScan != null
                && ipViewModel.EgrnipScan != null
                && ipViewModel.PremisesAgreementScan != null)

            {
                using (var binaryReader = new BinaryReader(ipViewModel.InnScan.OpenReadStream()))
                {
                    InnScanData = binaryReader.ReadBytes((int)ipViewModel.InnScan.Length);
                }

                using (var binaryReader = new BinaryReader(ipViewModel.OgrnipScan.OpenReadStream()))
                {
                    OgrnipScanData = binaryReader.ReadBytes((int)ipViewModel.OgrnipScan.Length);
                }

                using (var binaryReader = new BinaryReader(ipViewModel.EgrnipScan.OpenReadStream()))
                {
                    EgrnipScanData = binaryReader.ReadBytes((int)ipViewModel.EgrnipScan.Length);
                }

                using (var binaryReader = new BinaryReader(ipViewModel.PremisesAgreementScan.OpenReadStream()))
                {
                    PremisesAgreementScanData = binaryReader.ReadBytes((int)ipViewModel.PremisesAgreementScan.Length);
                }
                
            }
            var ip = new Ip
            {
                Inn = ipViewModel.Inn,
                Ogrnip = ipViewModel.Ogrnip,
                RegistrationDate = ipViewModel.RegistrationDate,
                NoAgreement = ipViewModel.NoAgreement,
                InnScan = InnScanData,
                OgrnipScan = OgrnipScanData,
                EgrnipScan = EgrnipScanData,
                PremisesAgreementScan = PremisesAgreementScanData,
                BankData = bankDataList,
            };

            await _context.Ips.AddAsync(ip);
            await _context.SaveChangesAsync();
            return Ok();
        }

    }
}
