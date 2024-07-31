namespace SpmsV2.Server.Data
{
    public class AvailableSensor
    {
        public int Id { get; set; }
        public bool PowerControl { get; set; }
        public bool SuctionWater { get; set; }
        public bool InundationWater { get; set; }
        public bool SuctionPressure { get; set; }
        public bool ThrustPressure { get; set; }
        public bool EvacuationWater { get; set; }
        public bool TankLevel { get; set; }
    }
}
