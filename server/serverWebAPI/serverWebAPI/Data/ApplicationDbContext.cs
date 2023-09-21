using Microsoft.EntityFrameworkCore;
using serverWebAPI.Model;

namespace serverWebAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<Ip> Ips { get; set; }
        public DbSet<LimitedLiability> LimitedLiabilities { get; set; }
        public DbSet<BankData> BankDatas { get; set; }
    }
}
