﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using SpmsV2.Server.Data;

#nullable disable

namespace SpmsV2.Server.Migrations.SpmsTest1
{
    [DbContext(typeof(SpmsTest1Context))]
    [Migration("20240730065459_LastPackageData")]
    partial class LastPackageData
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("AspNetUserRoles", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("RoleId")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex(new[] { "RoleId" }, "IX_AspNetUserRoles_RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetRoleClaims", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("RoleId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "RoleId" }, "IX_AspNetRoleClaims_RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetRoles", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Name")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "NormalizedName" }, "RoleNameIndex")
                        .IsUnique()
                        .HasFilter("([NormalizedName] IS NOT NULL)");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetUserClaims", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<string>("ClaimType")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("ClaimValue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "UserId" }, "IX_AspNetUserClaims_UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetUserLogins", b =>
                {
                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderKey")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("ProviderDisplayName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex(new[] { "UserId" }, "IX_AspNetUserLogins_UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetUserTokens", b =>
                {
                    b.Property<string>("UserId")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("LoginProvider")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Value")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetUsers", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("nvarchar(450)");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("int");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("bit");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("bit");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("datetimeoffset");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("bit");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("nvarchar(max)");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("bit");

                    b.Property<string>("UserName")
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)");

                    b.HasKey("Id");

                    b.HasIndex(new[] { "NormalizedEmail" }, "EmailIndex");

                    b.HasIndex(new[] { "NormalizedUserName" }, "UserNameIndex")
                        .IsUnique()
                        .HasFilter("([NormalizedUserName] IS NOT NULL)");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.LastPackageData", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("CoolingWater1")
                        .HasColumnType("bit");

                    b.Property<bool>("CoolingWater10")
                        .HasColumnType("bit");

                    b.Property<bool>("CoolingWater2")
                        .HasColumnType("bit");

                    b.Property<bool>("CoolingWater3")
                        .HasColumnType("bit");

                    b.Property<bool>("CoolingWater4")
                        .HasColumnType("bit");

                    b.Property<bool>("CoolingWater5")
                        .HasColumnType("bit");

                    b.Property<bool>("CoolingWater6")
                        .HasColumnType("bit");

                    b.Property<bool>("CoolingWater7")
                        .HasColumnType("bit");

                    b.Property<bool>("CoolingWater8")
                        .HasColumnType("bit");

                    b.Property<bool>("CoolingWater9")
                        .HasColumnType("bit");

                    b.Property<double>("CoolingWaterTemprature1")
                        .HasColumnType("float");

                    b.Property<double>("CoolingWaterTemprature10")
                        .HasColumnType("float");

                    b.Property<double>("CoolingWaterTemprature2")
                        .HasColumnType("float");

                    b.Property<double>("CoolingWaterTemprature3")
                        .HasColumnType("float");

                    b.Property<double>("CoolingWaterTemprature4")
                        .HasColumnType("float");

                    b.Property<double>("CoolingWaterTemprature5")
                        .HasColumnType("float");

                    b.Property<double>("CoolingWaterTemprature6")
                        .HasColumnType("float");

                    b.Property<double>("CoolingWaterTemprature7")
                        .HasColumnType("float");

                    b.Property<double>("CoolingWaterTemprature8")
                        .HasColumnType("float");

                    b.Property<double>("CoolingWaterTemprature9")
                        .HasColumnType("float");

                    b.Property<double>("Current1")
                        .HasColumnType("float");

                    b.Property<double>("Current10")
                        .HasColumnType("float");

                    b.Property<double>("Current2")
                        .HasColumnType("float");

                    b.Property<double>("Current3")
                        .HasColumnType("float");

                    b.Property<double>("Current4")
                        .HasColumnType("float");

                    b.Property<double>("Current5")
                        .HasColumnType("float");

                    b.Property<double>("Current6")
                        .HasColumnType("float");

                    b.Property<double>("Current7")
                        .HasColumnType("float");

                    b.Property<double>("Current8")
                        .HasColumnType("float");

                    b.Property<double>("Current9")
                        .HasColumnType("float");

                    b.Property<bool>("DriveConnection1")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveConnection10")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveConnection2")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveConnection3")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveConnection4")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveConnection5")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveConnection6")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveConnection7")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveConnection8")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveConnection9")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveIsRemote1")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveIsRemote10")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveIsRemote2")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveIsRemote3")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveIsRemote4")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveIsRemote5")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveIsRemote6")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveIsRemote7")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveIsRemote8")
                        .HasColumnType("bit");

                    b.Property<bool>("DriveIsRemote9")
                        .HasColumnType("bit");

                    b.Property<string>("Fault1")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fault10")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fault2")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fault3")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fault4")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fault5")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fault6")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fault7")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fault8")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Fault9")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Flow")
                        .HasColumnType("float");

                    b.Property<double>("Frequency1")
                        .HasColumnType("float");

                    b.Property<double>("Frequency10")
                        .HasColumnType("float");

                    b.Property<double>("Frequency2")
                        .HasColumnType("float");

                    b.Property<double>("Frequency3")
                        .HasColumnType("float");

                    b.Property<double>("Frequency4")
                        .HasColumnType("float");

                    b.Property<double>("Frequency5")
                        .HasColumnType("float");

                    b.Property<double>("Frequency6")
                        .HasColumnType("float");

                    b.Property<double>("Frequency7")
                        .HasColumnType("float");

                    b.Property<double>("Frequency8")
                        .HasColumnType("float");

                    b.Property<double>("Frequency9")
                        .HasColumnType("float");

                    b.Property<bool>("LineInClose1")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInClose10")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInClose2")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInClose3")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInClose4")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInClose5")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInClose6")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInClose7")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInClose8")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInClose9")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInOpen1")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInOpen10")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInOpen2")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInOpen3")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInOpen4")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInOpen5")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInOpen6")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInOpen7")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInOpen8")
                        .HasColumnType("bit");

                    b.Property<bool>("LineInOpen9")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutClose1")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutClose10")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutClose2")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutClose3")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutClose4")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutClose5")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutClose6")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutClose7")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutClose8")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutClose9")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutOpen1")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutOpen10")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutOpen2")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutOpen3")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutOpen4")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutOpen5")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutOpen6")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutOpen7")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutOpen8")
                        .HasColumnType("bit");

                    b.Property<bool>("LineOutOpen9")
                        .HasColumnType("bit");

                    b.Property<bool>("PackageInClose")
                        .HasColumnType("bit");

                    b.Property<bool>("PackageInOpen")
                        .HasColumnType("bit");

                    b.Property<bool>("PackageOutClose")
                        .HasColumnType("bit");

                    b.Property<bool>("PackageOutOpen")
                        .HasColumnType("bit");

                    b.Property<bool>("PhaseControl")
                        .HasColumnType("bit");

                    b.Property<double>("Power1")
                        .HasColumnType("float");

                    b.Property<double>("Power10")
                        .HasColumnType("float");

                    b.Property<double>("Power2")
                        .HasColumnType("float");

                    b.Property<double>("Power3")
                        .HasColumnType("float");

                    b.Property<double>("Power4")
                        .HasColumnType("float");

                    b.Property<double>("Power5")
                        .HasColumnType("float");

                    b.Property<double>("Power6")
                        .HasColumnType("float");

                    b.Property<double>("Power7")
                        .HasColumnType("float");

                    b.Property<double>("Power8")
                        .HasColumnType("float");

                    b.Property<double>("Power9")
                        .HasColumnType("float");

                    b.Property<double>("PumpOutputPressure1")
                        .HasColumnType("float");

                    b.Property<double>("PumpOutputPressure10")
                        .HasColumnType("float");

                    b.Property<double>("PumpOutputPressure2")
                        .HasColumnType("float");

                    b.Property<double>("PumpOutputPressure3")
                        .HasColumnType("float");

                    b.Property<double>("PumpOutputPressure4")
                        .HasColumnType("float");

                    b.Property<double>("PumpOutputPressure5")
                        .HasColumnType("float");

                    b.Property<double>("PumpOutputPressure6")
                        .HasColumnType("float");

                    b.Property<double>("PumpOutputPressure7")
                        .HasColumnType("float");

                    b.Property<double>("PumpOutputPressure8")
                        .HasColumnType("float");

                    b.Property<double>("PumpOutputPressure9")
                        .HasColumnType("float");

                    b.Property<bool>("StationFlood")
                        .HasColumnType("bit");

                    b.Property<bool>("SuctionDischargeClose")
                        .HasColumnType("bit");

                    b.Property<bool>("SuctionDischargeOpen")
                        .HasColumnType("bit");

                    b.Property<double>("SuctionPressure")
                        .HasColumnType("float");

                    b.Property<bool>("SuctionPressureSwitch")
                        .HasColumnType("bit");

                    b.Property<bool>("SuctionVentClose")
                        .HasColumnType("bit");

                    b.Property<bool>("SuctionVentOpen")
                        .HasColumnType("bit");

                    b.Property<bool>("SuctionWaterAvailable")
                        .HasColumnType("bit");

                    b.Property<bool>("ThrustDischargeClose")
                        .HasColumnType("bit");

                    b.Property<bool>("ThrustDischargeOpen")
                        .HasColumnType("bit");

                    b.Property<double>("ThrustPressure")
                        .HasColumnType("float");

                    b.Property<bool>("ThrustVentClose")
                        .HasColumnType("bit");

                    b.Property<bool>("ThrustVentOpen")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("LastPackageData");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.Package", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<double>("Ai1maxPressure")
                        .HasColumnType("float")
                        .HasColumnName("AI1MaxPressure")
                        .HasComment("حداکثر فشار برای کالیبره کردن آنالوگ اینپوت 1");

                    b.Property<double>("Ai1maxVolt")
                        .HasColumnType("float")
                        .HasColumnName("AI1MaxVolt")
                        .HasComment("مقدار آنالوگ اینپوت 1 در فشار حداکثری برای کالیبره کردن");

                    b.Property<double>("Ai1minPressure")
                        .HasColumnType("float")
                        .HasColumnName("AI1MinPressure")
                        .HasComment("حداقل فشار برای کالیبره کردن آنالوگ اینپوت 1");

                    b.Property<double>("Ai1minVolt")
                        .HasColumnType("float")
                        .HasColumnName("AI1MinVolt")
                        .HasComment("مقدار آنالوگ اینپوت 1 در فشار صفر برای کالیبره کردن");

                    b.Property<double>("Ai2maxPressure")
                        .HasColumnType("float")
                        .HasColumnName("AI2MaxPressure")
                        .HasComment("حداکثر فشار برای کالیبره کردن آنالوگ اینپوت 2");

                    b.Property<double>("Ai2maxVolt")
                        .HasColumnType("float")
                        .HasColumnName("AI2MaxVolt")
                        .HasComment("مقدار آنالوگ اینپوت 2 در فشار حداکثری برای کالیبره کردن");

                    b.Property<double>("Ai2minPressure")
                        .HasColumnType("float")
                        .HasColumnName("AI2MinPressure")
                        .HasComment("حداقل فشار برای کالیبره کردن آنالوگ اینپوت 2");

                    b.Property<double>("Ai2minVolt")
                        .HasColumnType("float")
                        .HasColumnName("AI2MinVolt")
                        .HasComment("مقدار آنالوگ اینپوت 2 در فشار صفر برای کالیبره کردن");

                    b.Property<bool>("AllowMinimumThrustPressure")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(true)
                        .HasComment("آیا حداقل فشار رانش اعمال شود؟");

                    b.Property<bool>("AllowRestartServer")
                        .HasColumnType("bit")
                        .HasComment("اجازه ری استارت کردن سرور");

                    b.Property<bool>("AllowSendSmsDriveConnection")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(true);

                    b.Property<bool>("AllowSendSmsFault")
                        .HasColumnType("bit")
                        .HasComment("اجازه ارسال اس ام اس  برای فالتها");

                    b.Property<bool>("AllowSendSmsOnOff")
                        .HasColumnType("bit")
                        .HasComment("اجازه ارسال اس ام اس روشن خاموش شدن دستگاه");

                    b.Property<bool>("AllowSendSmsSensor")
                        .HasColumnType("bit");

                    b.Property<bool>("AllowSendSmsSuctionOverflow")
                        .HasColumnType("bit")
                        .HasComment("مجوز ارسال پیامک سرریز مکش");

                    b.Property<bool>("AllowWork")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(true)
                        .HasComment("آیا دستگاه اجازه کار دارد؟");

                    b.Property<int>("ChangeReserveTime")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(6)
                        .HasComment("زمان تغییر پمپ رزرو");

                    b.Property<string>("Code")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)")
                        .HasDefaultValue("----");

                    b.Property<double>("Efficiency")
                        .HasColumnType("float");

                    b.Property<bool>("EnableScada")
                        .HasColumnType("bit");

                    b.Property<bool>("Flood")
                        .HasColumnType("bit")
                        .HasComment("سنسور آب گرفتگی");

                    b.Property<double>("Head")
                        .HasColumnType("float");

                    b.Property<int>("IisPort")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(9010);

                    b.Property<bool>("IsActive")
                        .HasColumnType("bit")
                        .HasComment("آیا دستگاه روشن است؟");

                    b.Property<bool>("IsAvailableSuctionWater")
                        .HasColumnType("bit")
                        .HasComment("مقدار دریافتی از سنسور برای وجود آب در کلکتور مکش");

                    b.Property<bool>("IsGarden")
                        .HasColumnType("bit");

                    b.Property<bool>("LogHardwareException")
                        .HasColumnType("bit");

                    b.Property<int>("MaxActivePump")
                        .HasColumnType("int");

                    b.Property<double>("MaxFrequency")
                        .HasColumnType("float");

                    b.Property<double>("MaxTankLevel")
                        .HasColumnType("float")
                        .HasComment("سطح آب مخزن بعد دستگاه");

                    b.Property<double>("MaximumSuction")
                        .HasColumnType("float")
                        .HasComment("حداکثر سطح مکش");

                    b.Property<double>("MinFrequency")
                        .HasColumnType("float");

                    b.Property<double>("MinimumSuctionPressure")
                        .HasColumnType("float");

                    b.Property<double>("MinimumThrustPressure")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("float")
                        .HasDefaultValue(1.0)
                        .HasComment("حداقل فشار رانش که دستگاه میتواند کار کند. در دستور ارسالی و کنترل دستگاه کاربرد دارد");

                    b.Property<string>("Name")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)")
                        .HasDefaultValue("----");

                    b.Property<string>("Organization")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)")
                        .HasDefaultValue("----");

                    b.Property<short>("Port")
                        .HasColumnType("smallint");

                    b.Property<bool>("PowerControl")
                        .HasColumnType("bit");

                    b.Property<bool>("ResetFault")
                        .HasColumnType("bit");

                    b.Property<int>("SendSmsDriveConnectionDelay")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(30);

                    b.Property<int>("SendSmsSensorDelay")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasDefaultValue(30);

                    b.Property<string>("SmsApiKey")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)")
                        .HasDefaultValue("6d35a998158f953044a056f47652b3533bb14931d0960f88c9a5b85f164e823d");

                    b.Property<string>("SmsApiUrl")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(256)
                        .HasColumnType("nvarchar(256)")
                        .HasDefaultValue("https://api.ghasedak.me/v2/sms/send/simple");

                    b.Property<string>("SmsLineNumber")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(20)
                        .HasColumnType("nvarchar(20)")
                        .HasDefaultValueSql("((30005006005537.))");

                    b.Property<double>("SuctionPressure")
                        .HasColumnType("float")
                        .HasComment("مقدار محاسبه شده فشار مکش");

                    b.Property<double>("TankLevel")
                        .HasColumnType("float")
                        .HasComment("حداکثر سطح آب مخزن بعد دستگاه");

                    b.Property<double>("ThrustPressure")
                        .HasColumnType("float")
                        .HasComment("مقدار محاسبه شده فشار رانش");

                    b.Property<double>("ToleranceSuctionPressure")
                        .HasColumnType("float")
                        .HasComment("میزان فشاری که حداقل فشار مکش باید با آن جمع شود و سپس مجوز کارکرد سیستم داده شود");

                    b.Property<double>("ToleranceTankLevel")
                        .HasColumnType("float")
                        .HasComment("تلورانس سطح آب مخزن بعد از دستگاه");

                    b.Property<int>("TotalPumpCount")
                        .HasColumnType("int");

                    b.Property<string>("Version")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)")
                        .HasDefaultValue("----");

                    b.Property<double>("ZaribK")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("float")
                        .HasDefaultValue(1.0);

                    b.HasKey("Id");

                    b.ToTable("Package");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.Profile", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"));

                    b.Property<bool>("AllowSendSmsDriveConnection")
                        .HasColumnType("bit");

                    b.Property<bool>("AllowSendSmsFault")
                        .HasColumnType("bit")
                        .HasComment("مجوز ارسال پیامک فالتها");

                    b.Property<bool>("AllowSendSmsLoginFailed")
                        .HasColumnType("bit");

                    b.Property<bool>("AllowSendSmsOnOff")
                        .HasColumnType("bit")
                        .HasComment("مجوز ارسال پیامک روشن خاموش شدن دستگاه");

                    b.Property<bool>("AllowSendSmsSensor")
                        .HasColumnType("bit");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<bool>("IsActive")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bit")
                        .HasDefaultValue(true);

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.Property<string>("Mobile")
                        .IsRequired()
                        .ValueGeneratedOnAdd()
                        .HasMaxLength(11)
                        .HasColumnType("nvarchar(11)")
                        .HasDefaultValueSql("((9010000000.))");

                    b.Property<string>("UserId")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("nvarchar(128)");

                    b.HasKey("Id");

                    b.ToTable("Profile");
                });

            modelBuilder.Entity("AspNetUserRoles", b =>
                {
                    b.HasOne("SpmsV2.Server.Data.AspNetRoles", null)
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("SpmsV2.Server.Data.AspNetUsers", null)
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetRoleClaims", b =>
                {
                    b.HasOne("SpmsV2.Server.Data.AspNetRoles", "Role")
                        .WithMany("AspNetRoleClaims")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Role");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetUserClaims", b =>
                {
                    b.HasOne("SpmsV2.Server.Data.AspNetUsers", "User")
                        .WithMany("AspNetUserClaims")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetUserLogins", b =>
                {
                    b.HasOne("SpmsV2.Server.Data.AspNetUsers", "User")
                        .WithMany("AspNetUserLogins")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetUserTokens", b =>
                {
                    b.HasOne("SpmsV2.Server.Data.AspNetUsers", "User")
                        .WithMany("AspNetUserTokens")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetRoles", b =>
                {
                    b.Navigation("AspNetRoleClaims");
                });

            modelBuilder.Entity("SpmsV2.Server.Data.AspNetUsers", b =>
                {
                    b.Navigation("AspNetUserClaims");

                    b.Navigation("AspNetUserLogins");

                    b.Navigation("AspNetUserTokens");
                });
#pragma warning restore 612, 618
        }
    }
}
