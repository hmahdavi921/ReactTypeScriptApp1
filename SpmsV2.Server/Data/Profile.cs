using System;
using System.Collections.Generic;

namespace SpmsV2.Server.Data;

public partial class Profile
{
    public int Id { get; set; }

    public string UserId { get; set; } = null!;

    public string FirstName { get; set; } = null!;

    public string LastName { get; set; } = null!;

    public string Mobile { get; set; } = null!;

    /// <summary>
    /// مجوز ارسال پیامک روشن خاموش شدن دستگاه
    /// </summary>
    public bool AllowSendSmsOnOff { get; set; }

    /// <summary>
    /// مجوز ارسال پیامک فالتها
    /// </summary>
    public bool AllowSendSmsFault { get; set; }

    public bool AllowSendSmsSensor { get; set; }

    public bool AllowSendSmsDriveConnection { get; set; }

    public bool AllowSendSmsLoginFailed { get; set; }

    public bool IsActive { get; set; }
}
