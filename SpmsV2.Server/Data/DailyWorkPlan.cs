namespace SpmsV2.Server.Data
{
    public class DailyWorkPlan
    {
        public int Id { get; set; }
        public double ThrustPressure { get; set; }
        public int ProfileId { get; set; }
        public System.DateTime Date { get; set; }
    }
}
