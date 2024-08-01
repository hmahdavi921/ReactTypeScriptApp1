namespace SpmsV2.Server.Data
{
    public class Pump
    {
        public int Id { get; set; }
        public int MaxCurrent { get; set; }
        public int ServiceTime { get; set; }
        public int WorkingTime { get; set; }
        public int TotalWorkingTime { get; set; }
    }
}
