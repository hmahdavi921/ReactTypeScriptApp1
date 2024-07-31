using SpmsV2.Server.Data;

namespace SpmsV2.Server.Models
{
    public class PackageStatusResult
    {
        public List<Drive> Drives { get; set; }
        public List<Pump> Pumps { get; set; }
        public LastPackageData LastPackageData { get; set; }
        public Package Package { get; set; }
        public List<DailyWorkPlan> DailyWorkPlans { get; set; }
        public LastPackageCommand LastCommand { get; set; } 
        public String Message { get; set; }
    }
}
