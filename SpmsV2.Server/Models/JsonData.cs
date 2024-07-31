namespace SpmsV2.Server.Models
{
    /// <summary>
    /// کلاس ارسال اطلاعات در قالب json
    /// </summary>
    public class JsonData
    {
        public bool IsSuccess { get; set; }
        public object Data { get; set; }
        public string Message { get; set; }
    }
}
