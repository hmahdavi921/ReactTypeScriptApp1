using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SpmsV2.Server.Data;

public partial class SpmsTest1Context : DbContext
{
    public SpmsTest1Context()
    {
    }

    public SpmsTest1Context(DbContextOptions<SpmsTest1Context> options)
        : base(options)
    {
    }

    public virtual DbSet<AspNetRoleClaims> AspNetRoleClaims { get; set; }

    public virtual DbSet<AspNetRoles> AspNetRoles { get; set; }

    public virtual DbSet<AspNetUserClaims> AspNetUserClaims { get; set; }

    public virtual DbSet<AspNetUserLogins> AspNetUserLogins { get; set; }

    public virtual DbSet<AspNetUserTokens> AspNetUserTokens { get; set; }

    public virtual DbSet<AspNetUsers> AspNetUsers { get; set; }

    public virtual DbSet<Package> Package { get; set; }

    public virtual DbSet<Profile> Profile { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=.;Database=spms-test-1;Trusted_Connection=True;MultipleActiveResultSets=true;TrustServerCertificate=True");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AspNetRoleClaims>(entity =>
        {
            entity.HasIndex(e => e.RoleId, "IX_AspNetRoleClaims_RoleId");

            entity.HasOne(d => d.Role).WithMany(p => p.AspNetRoleClaims).HasForeignKey(d => d.RoleId);
        });

        modelBuilder.Entity<AspNetRoles>(entity =>
        {
            entity.HasIndex(e => e.NormalizedName, "RoleNameIndex")
                .IsUnique()
                .HasFilter("([NormalizedName] IS NOT NULL)");

            entity.Property(e => e.Name).HasMaxLength(256);
            entity.Property(e => e.NormalizedName).HasMaxLength(256);
        });

        modelBuilder.Entity<AspNetUserClaims>(entity =>
        {
            entity.HasIndex(e => e.UserId, "IX_AspNetUserClaims_UserId");

            entity.HasOne(d => d.User).WithMany(p => p.AspNetUserClaims).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<AspNetUserLogins>(entity =>
        {
            entity.HasKey(e => new { e.LoginProvider, e.ProviderKey });

            entity.HasIndex(e => e.UserId, "IX_AspNetUserLogins_UserId");

            entity.HasOne(d => d.User).WithMany(p => p.AspNetUserLogins).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<AspNetUserTokens>(entity =>
        {
            entity.HasKey(e => new { e.UserId, e.LoginProvider, e.Name });

            entity.HasOne(d => d.User).WithMany(p => p.AspNetUserTokens).HasForeignKey(d => d.UserId);
        });

        modelBuilder.Entity<AspNetUsers>(entity =>
        {
            entity.HasIndex(e => e.NormalizedEmail, "EmailIndex");

            entity.HasIndex(e => e.NormalizedUserName, "UserNameIndex")
                .IsUnique()
                .HasFilter("([NormalizedUserName] IS NOT NULL)");

            entity.Property(e => e.Email).HasMaxLength(256);
            entity.Property(e => e.NormalizedEmail).HasMaxLength(256);
            entity.Property(e => e.NormalizedUserName).HasMaxLength(256);
            entity.Property(e => e.UserName).HasMaxLength(256);

            entity.HasMany(d => d.Role).WithMany(p => p.User)
                .UsingEntity<Dictionary<string, object>>(
                    "AspNetUserRoles",
                    r => r.HasOne<AspNetRoles>().WithMany().HasForeignKey("RoleId"),
                    l => l.HasOne<AspNetUsers>().WithMany().HasForeignKey("UserId"),
                    j =>
                    {
                        j.HasKey("UserId", "RoleId");
                        j.HasIndex(new[] { "RoleId" }, "IX_AspNetUserRoles_RoleId");
                    });
        });

        modelBuilder.Entity<Package>(entity =>
        {
            entity.Property(e => e.Ai1maxPressure)
                .HasComment("حداکثر فشار برای کالیبره کردن آنالوگ اینپوت 1")
                .HasColumnName("AI1MaxPressure");
            entity.Property(e => e.Ai1maxVolt)
                .HasComment("مقدار آنالوگ اینپوت 1 در فشار حداکثری برای کالیبره کردن")
                .HasColumnName("AI1MaxVolt");
            entity.Property(e => e.Ai1minPressure)
                .HasComment("حداقل فشار برای کالیبره کردن آنالوگ اینپوت 1")
                .HasColumnName("AI1MinPressure");
            entity.Property(e => e.Ai1minVolt)
                .HasComment("مقدار آنالوگ اینپوت 1 در فشار صفر برای کالیبره کردن")
                .HasColumnName("AI1MinVolt");
            entity.Property(e => e.Ai2maxPressure)
                .HasComment("حداکثر فشار برای کالیبره کردن آنالوگ اینپوت 2")
                .HasColumnName("AI2MaxPressure");
            entity.Property(e => e.Ai2maxVolt)
                .HasComment("مقدار آنالوگ اینپوت 2 در فشار حداکثری برای کالیبره کردن")
                .HasColumnName("AI2MaxVolt");
            entity.Property(e => e.Ai2minPressure)
                .HasComment("حداقل فشار برای کالیبره کردن آنالوگ اینپوت 2")
                .HasColumnName("AI2MinPressure");
            entity.Property(e => e.Ai2minVolt)
                .HasComment("مقدار آنالوگ اینپوت 2 در فشار صفر برای کالیبره کردن")
                .HasColumnName("AI2MinVolt");
            entity.Property(e => e.AllowMinimumThrustPressure)
                .HasDefaultValue(true)
                .HasComment("آیا حداقل فشار رانش اعمال شود؟");
            entity.Property(e => e.AllowRestartServer).HasComment("اجازه ری استارت کردن سرور");
            entity.Property(e => e.AllowSendSmsDriveConnection).HasDefaultValue(true);
            entity.Property(e => e.AllowSendSmsFault).HasComment("اجازه ارسال اس ام اس  برای فالتها");
            entity.Property(e => e.AllowSendSmsOnOff).HasComment("اجازه ارسال اس ام اس روشن خاموش شدن دستگاه");
            entity.Property(e => e.AllowSendSmsSuctionOverflow).HasComment("مجوز ارسال پیامک سرریز مکش");
            entity.Property(e => e.AllowWork)
                .HasDefaultValue(true)
                .HasComment("آیا دستگاه اجازه کار دارد؟");
            entity.Property(e => e.ChangeReserveTime)
                .HasDefaultValue(6)
                .HasComment("زمان تغییر پمپ رزرو");
            entity.Property(e => e.Code)
                .HasMaxLength(128)
                .HasDefaultValue("----");
            entity.Property(e => e.Flood).HasComment("سنسور آب گرفتگی");
            entity.Property(e => e.IisPort).HasDefaultValue(9010);
            entity.Property(e => e.IsActive).HasComment("آیا دستگاه روشن است؟");
            entity.Property(e => e.IsAvailableSuctionWater).HasComment("مقدار دریافتی از سنسور برای وجود آب در کلکتور مکش");
            entity.Property(e => e.MaxTankLevel).HasComment("سطح آب مخزن بعد دستگاه");
            entity.Property(e => e.MaximumSuction).HasComment("حداکثر سطح مکش");
            entity.Property(e => e.MinimumThrustPressure)
                .HasDefaultValue(1.0)
                .HasComment("حداقل فشار رانش که دستگاه میتواند کار کند. در دستور ارسالی و کنترل دستگاه کاربرد دارد");
            entity.Property(e => e.Name)
                .HasMaxLength(128)
                .HasDefaultValue("----");
            entity.Property(e => e.Organization)
                .HasMaxLength(128)
                .HasDefaultValue("----");
            entity.Property(e => e.SendSmsDriveConnectionDelay).HasDefaultValue(30);
            entity.Property(e => e.SendSmsSensorDelay).HasDefaultValue(30);
            entity.Property(e => e.SmsApiKey)
                .HasMaxLength(128)
                .HasDefaultValue("6d35a998158f953044a056f47652b3533bb14931d0960f88c9a5b85f164e823d");
            entity.Property(e => e.SmsApiUrl)
                .HasMaxLength(256)
                .HasDefaultValue("https://api.ghasedak.me/v2/sms/send/simple");
            entity.Property(e => e.SmsLineNumber)
                .HasMaxLength(20)
                .HasDefaultValueSql("((30005006005537.))");
            entity.Property(e => e.SuctionPressure).HasComment("مقدار محاسبه شده فشار مکش");
            entity.Property(e => e.TankLevel).HasComment("حداکثر سطح آب مخزن بعد دستگاه");
            entity.Property(e => e.ThrustPressure).HasComment("مقدار محاسبه شده فشار رانش");
            entity.Property(e => e.ToleranceSuctionPressure).HasComment("میزان فشاری که حداقل فشار مکش باید با آن جمع شود و سپس مجوز کارکرد سیستم داده شود");
            entity.Property(e => e.ToleranceTankLevel).HasComment("تلورانس سطح آب مخزن بعد از دستگاه");
            entity.Property(e => e.Version)
                .HasMaxLength(128)
                .HasDefaultValue("----");
            entity.Property(e => e.ZaribK).HasDefaultValue(1.0);
        });

        modelBuilder.Entity<Profile>(entity =>
        {
            entity.Property(e => e.AllowSendSmsFault).HasComment("مجوز ارسال پیامک فالتها");
            entity.Property(e => e.AllowSendSmsOnOff).HasComment("مجوز ارسال پیامک روشن خاموش شدن دستگاه");
            entity.Property(e => e.FirstName).HasMaxLength(128);
            entity.Property(e => e.IsActive).HasDefaultValue(true);
            entity.Property(e => e.LastName).HasMaxLength(128);
            entity.Property(e => e.Mobile)
                .HasMaxLength(11)
                .HasDefaultValueSql("((9010000000.))");
            entity.Property(e => e.UserId).HasMaxLength(128);
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
