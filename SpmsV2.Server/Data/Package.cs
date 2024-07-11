using System;
using System.Collections.Generic;

namespace SpmsV2.Server.Data;

public partial class Package
{
    public int Id { get; set; }

    public string Organization { get; set; } = null!;

    public string Name { get; set; } = null!;

    public string Code { get; set; } = null!;

    public string Version { get; set; } = null!;

    /// <summary>
    /// آیا دستگاه روشن است؟
    /// </summary>
    public bool IsActive { get; set; }

    public bool IsGarden { get; set; }

    public short Port { get; set; }

    public double Head { get; set; }

    public bool PowerControl { get; set; }

    public double Efficiency { get; set; }

    public double ZaribK { get; set; }

    public double MinFrequency { get; set; }

    public double MaxFrequency { get; set; }

    public int TotalPumpCount { get; set; }

    public int MaxActivePump { get; set; }

    /// <summary>
    /// مقدار آنالوگ اینپوت 1 در فشار صفر برای کالیبره کردن
    /// </summary>
    public double Ai1minVolt { get; set; }

    /// <summary>
    /// مقدار آنالوگ اینپوت 1 در فشار حداکثری برای کالیبره کردن
    /// </summary>
    public double Ai1maxVolt { get; set; }

    /// <summary>
    /// حداقل فشار برای کالیبره کردن آنالوگ اینپوت 1
    /// </summary>
    public double Ai1minPressure { get; set; }

    /// <summary>
    /// حداکثر فشار برای کالیبره کردن آنالوگ اینپوت 1
    /// </summary>
    public double Ai1maxPressure { get; set; }

    /// <summary>
    /// مقدار آنالوگ اینپوت 2 در فشار صفر برای کالیبره کردن
    /// </summary>
    public double Ai2minVolt { get; set; }

    /// <summary>
    /// مقدار آنالوگ اینپوت 2 در فشار حداکثری برای کالیبره کردن
    /// </summary>
    public double Ai2maxVolt { get; set; }

    /// <summary>
    /// حداقل فشار برای کالیبره کردن آنالوگ اینپوت 2
    /// </summary>
    public double Ai2minPressure { get; set; }

    /// <summary>
    /// حداکثر فشار برای کالیبره کردن آنالوگ اینپوت 2
    /// </summary>
    public double Ai2maxPressure { get; set; }

    /// <summary>
    /// مقدار دریافتی از سنسور برای وجود آب در کلکتور مکش
    /// </summary>
    public bool IsAvailableSuctionWater { get; set; }

    /// <summary>
    /// مقدار محاسبه شده فشار مکش
    /// </summary>
    public double SuctionPressure { get; set; }

    /// <summary>
    /// مقدار محاسبه شده فشار رانش
    /// </summary>
    public double ThrustPressure { get; set; }

    /// <summary>
    /// اجازه ری استارت کردن سرور
    /// </summary>
    public bool AllowRestartServer { get; set; }

    /// <summary>
    /// زمان تغییر پمپ رزرو
    /// </summary>
    public int ChangeReserveTime { get; set; }

    /// <summary>
    /// سنسور آب گرفتگی
    /// </summary>
    public bool Flood { get; set; }

    /// <summary>
    /// آیا دستگاه اجازه کار دارد؟
    /// </summary>
    public bool AllowWork { get; set; }

    /// <summary>
    /// اجازه ارسال اس ام اس روشن خاموش شدن دستگاه
    /// </summary>
    public bool AllowSendSmsOnOff { get; set; }

    /// <summary>
    /// اجازه ارسال اس ام اس  برای فالتها
    /// </summary>
    public bool AllowSendSmsFault { get; set; }

    public bool AllowSendSmsSensor { get; set; }

    public bool AllowSendSmsDriveConnection { get; set; }

    public string SmsApiUrl { get; set; } = null!;

    public string SmsApiKey { get; set; } = null!;

    public double MinimumSuctionPressure { get; set; }

    /// <summary>
    /// میزان فشاری که حداقل فشار مکش باید با آن جمع شود و سپس مجوز کارکرد سیستم داده شود
    /// </summary>
    public double ToleranceSuctionPressure { get; set; }

    public bool ResetFault { get; set; }

    public bool LogHardwareException { get; set; }

    public int SendSmsSensorDelay { get; set; }

    public int SendSmsDriveConnectionDelay { get; set; }

    public string SmsLineNumber { get; set; } = null!;

    public bool EnableScada { get; set; }

    /// <summary>
    /// حداقل فشار رانش که دستگاه میتواند کار کند. در دستور ارسالی و کنترل دستگاه کاربرد دارد
    /// </summary>
    public double MinimumThrustPressure { get; set; }

    /// <summary>
    /// آیا حداقل فشار رانش اعمال شود؟
    /// </summary>
    public bool AllowMinimumThrustPressure { get; set; }

    /// <summary>
    /// حداکثر سطح آب مخزن بعد دستگاه
    /// </summary>
    public double TankLevel { get; set; }

    /// <summary>
    /// سطح آب مخزن بعد دستگاه
    /// </summary>
    public double MaxTankLevel { get; set; }

    /// <summary>
    /// تلورانس سطح آب مخزن بعد از دستگاه
    /// </summary>
    public double ToleranceTankLevel { get; set; }

    /// <summary>
    /// حداکثر سطح مکش
    /// </summary>
    public double MaximumSuction { get; set; }

    /// <summary>
    /// مجوز ارسال پیامک سرریز مکش
    /// </summary>
    public bool AllowSendSmsSuctionOverflow { get; set; }

    public int IisPort { get; set; }
}
