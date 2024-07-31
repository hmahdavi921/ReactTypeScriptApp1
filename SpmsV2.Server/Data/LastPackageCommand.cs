namespace SpmsV2.Server.Data
{
    public class LastPackageCommand
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public short WorkPlan { get; set; }
        public double Frequency { get; set; }
        public double ThrustPressure { get; set; }
        public bool IsActivePump1 { get; set; }
        public bool IsActivePump2 { get; set; }
        public bool IsActivePump3 { get; set; }
        public bool IsActivePump4 { get; set; }
        public bool IsActivePump5 { get; set; }
        public bool IsActivePump6 { get; set; }
        public bool IsActivePump7 { get; set; }
        public bool IsActivePump8 { get; set; }
        public bool IsActivePump9 { get; set; }
        public bool IsActivePump10 { get; set; }
        public bool FromScada { get; set; }
        public int ProfileId { get; set; }
        public System.DateTime Date { get; set; }
    }
}
