namespace SpmsV2.Server.Data
{
    public class Drive
    {
        public int Id { get; set; }
        public bool IsMain { get; set; }
        public bool IsActive { get; set; }
        public short Type { get; set; }
        public bool IsActiveCoolingWater { get; set; }
        public string Fault { get; set; }
        public int ServiceTime { get; set; }
        public System.DateTime FirstSetupDate { get; set; }
    }
}
