import React, { ChangeEvent, useEffect, useState } from "react";
import hourglasssvg from '../assets/svg/hourglass.svg';
import signallostsvg from '../assets/svg/signal-error.svg';
import signalerrorsvg from '../assets/svg/signal-lost.svg';
import signaloksvg from '../assets/svg/signal-ok.svg';
import package2Image from '../assets/image/package2.png';
import ToggleSwitch from "./ToggleSwitch";
import imageMakesh from '../assets/image/package2/makesh.png';
import imageMakeshError from '../assets/image/package2/makesh-error.png';
import imageRanesh from '../assets/image/package2/ranesh.png';
import imageMakeshArrow from '../assets/image/package2/makesh-arrow.png';
import imageRaneshArrow from '../assets/image/package2/ranesh-arrow.png';
import imageWaterPump from '../assets/image/water-pump.png';
import imagePumpActive from '../assets/image/pump-active.png';
import imagePumpError from '../assets/image/pump-error.png';
import imagePumpReady from '../assets/image/pump-ready.png';
import { NavLink } from "react-router-dom";
import LogoutLink from "./LogoutLink";
import aboutsvg from '../assets/svg/about.svg';
import calendersvg from '../assets/svg/calender.svg';
import chartsvg from '../assets/svg/chart.svg';
import exitsvg from '../assets/svg/exit.svg';
import homesvg from '../assets/svg/home.svg';
import powersvg from '../assets/svg/power.svg';
import settingsvg from '../assets/svg/setting.svg';
import refreshsvg from '../assets/svg/refresh.svg';
import { useMount } from "react-use";
import '../assets/css/package2.css';

const package2 = () => {

    const [fetchDataStatus, setfetchDataStatus] = useState("loading");
    const [info, setInfo] = useState({
        isSuccess: false,
        message: "",
        data: {
            drives: [{
                id: 1,
                fault: "0",
                firstSetupDate: "2000-01-01",
                isActive: true,
                isActiveCoolingWater: true,
                isMain: true,
                serviceTime: 2000,
                type: 1
            }],
            pumps: [{
                id: 1,
                maxCurrent: 10,
                serviceTime: 1000
            }],
            lastPackageData: {
                driveConnection1: true,
                coolingWater1: true,
                frequency1: 0,
                power1: 0,
                current1: 0,
                fault1: "0",
                pumpOutputPressure1: 0,
                workingTime1: 0,
                totalWorkingTime1: 0,
                coolingWaterTemprature1: 0,
                driveConnection2: true,
                coolingWater2: true,
                frequency2: 0,
                power2: 0,
                current2: 0,
                fault2: "0",
                pumpOutputPressure2: 0,
                workingTime2: 0,
                totalWorkingTime2: 0,
                coolingWaterTemprature2: 0,
                phaseControl: true,
                stationFlood: false,
                suctionPressure: 0,
                thrustPressure: 0,
                flow: 0,
                suctionWaterAvailable: true

            },
            package: {
                ai1maxPressure: 0,
                ai1maxVolt: 0,
                ai1minPressure: 0,
                ai1minVolt: 0,
                ai2maxPressure: 0,
                ai2maxVolt: 0,
                ai2minPressure: 0,
                ai2minVolt: 0,
                allowMinimumThrustPressure: false,
                allowRestartServer: false,
                allowSendSmsDriveConnection: false,
                allowSendSmsFault: false,
                allowSendSmsOnOff: false,
                allowSendSmsSensor: false,
                allowSendSmsSuctionOverflow: false,
                allowWork: false,
                changeReserveTime: 0,
                code: "",
                efficiency: 85,
                enableScada: false,
                flood: false,
                head: 200,
                id: 3,
                iisPort: 0,
                isActive: true,
                isAvailableSuctionWater: false,
                isGarden: false,
                logHardwareException: false,
                maxActivePump: 4,
                maxFrequency: 50,
                maxTankLevel: 0,
                maximumSuction: 0,
                minFrequency: 20,
                minimumSuctionPressure: 0,
                minimumThrustPressure: 0,
                name: "پکیج تست",
                organization: "آب منطقه ای",
                port: 3,
                powerControl: true,
                resetFault: false,
                sendSmsDriveConnectionDelay: 0,
                sendSmsSensorDelay: 0,
                smsApiKey: "0",
                smsApiUrl: "0",
                smsLineNumber: "0",
                suctionPressure: 0,
                tankLevel: 0,
                thrustPressure: 0,
                toleranceSuctionPressure: 0,
                toleranceTankLevel: 0,
                totalPumpCount: 6,
                version: "14030203",
                zaribK: 1
            },
            dailyWorkPlans: [{
                id: 0,
                thrustPressure: 0
            }],
            lastCommand: {
                isActive: false,
                workPlan: 0,
                frequency: 0,
                thrustPressure: 0,
                isActivePump1: false,
                isActivePump2: false,
                isActivePump3: false,
                isActivePump4: false,
                isActivePump5: false,
                isActivePump6: false,
                isActivePump7: false,
                isActivePump8: false,
                isActivePump9: false,
                isActivePump10: false,
                fromScada: false
            },
            message: ""
        }
    });
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: ""
    });

    useMount(() => {
        fetch('/home/User')
            .then(response => response.json())
            .then((response) => {
                setUserData(response);
                //console.log(userData);
            }).catch(error => {
                console.error('Fetch error:', error);
            });
        //console.log(layoutcontext)
    });
    useEffect(() => {

        const interval = setInterval(() => {

            setfetchDataStatus("loading");
            fetch('/home/PackageStatus')
                .then(response => response.json())
                .then((response) => {
                    if (!response) {
                        setfetchDataStatus("loading-lost");
                    } else {
                        setfetchDataStatus("loading-ok");
                    }
                    setInfo(response);
                    console.log();
                }).catch(error => {
                    setfetchDataStatus("loading-error");
                    console.error('Fetch error:', error);
                });
        }, 500);
        return () => clearInterval(interval);
    }, []);

    function sendCommand(id: string, value: number, e: React.ChangeEvent<HTMLInputElement>) {
        if (id == null) {
            id = e.target.getAttribute('id') as string;
        }
        let command = info.data.lastCommand;

        if (id == "isActive") {
            command.isActive = !command.isActive;
        }
        else if (id == "work-plan") {
            command.workPlan = value as unknown as number;
        }
        else if (id == "frequency") {
            command.frequency = value as unknown as number;
        }
        else if (id == "auto-pressure") {
            command.thrustPressure = value as unknown as number;
        }
        else if (id == "pump-active1") {
            command.isActivePump1 = !command.isActivePump1;
        }
        else if (id == "pump-active2") {
            command.isActivePump2 = !command.isActivePump2;
        }
        else if (id == "pump-active3") {
            command.isActivePump3 = !command.isActivePump3;
        }
        else if (id == "pump-active4") {
            command.isActivePump4 = !command.isActivePump4;
        }
        else if (id == "pump-active5") {
            command.isActivePump5 = !command.isActivePump5;
        }
        else if (id == "pump-active6") {
            command.isActivePump6 = !command.isActivePump6;
        }
        else if (id == "pump-active7") {
            command.isActivePump7 = !command.isActivePump7;
        }
        else if (id == "pump-active8") {
            command.isActivePump8 = !command.isActivePump8;
        }
        else if (id == "pump-active9") {
            command.isActivePump9 = !command.isActivePump9;
        }
        else if (id == "pump-active10") {
            command.isActivePump10 = !command.isActivePump10;
        }

        console.log(command);
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Set content type to JSON
            },
            body: JSON.stringify(command)
            // Convert JSON data to a string and set it as the request body
        };
        fetch('/home/SaveCommand', options)
            .then(response => response.json())
            .then((response) => {
                if (response.isSuccess) {
                    console.log('ذخیره دستور با موفقیت انجام شد.');
                }

            }).catch(error => {
                // Display Message
                console.error('Fetch error SaveCommand:', error);
            });

    }
    function getThrustWaterClass(): string {
        if (isRunningOnePump() && info.data.lastPackageData.suctionWaterAvailable) {
            return "";
        } else {
            return "d-none";
        }
    }
    function getThrustArrowClass(): string {
        if (isRunningOnePump() && info.data.lastPackageData.suctionWaterAvailable) {
            return "AnimationOpacity";
        } else {
            return "d-none";
        }
    }
    function getMakeshArrowClass(): string {

        let isRunningOnePumpFlag = isRunningOnePump();
        if (!info.data.lastPackageData.suctionWaterAvailable) {
            return "d-none";
        } else if (info.data.lastPackageData.suctionWaterAvailable && isRunningOnePumpFlag) {
            return "AnimationOpacity";
        } else if (info.data.lastPackageData.suctionWaterAvailable && !isRunningOnePumpFlag) {
            return "";
        } else if (info.data.lastPackageData.suctionWaterAvailable) {
            return "";
        }
        return "";
    }
    function isRunningOnePump(): boolean {
        return info.data.lastPackageData.frequency1 > 0 || info.data.lastPackageData.frequency2 > 0;
    }
    function blureOnFocus(e: ChangeEvent<HTMLInputElement>) {
        e.target.blur();
    }
    function getLoadingIcon(): string {
        if (fetchDataStatus == "loading") {
            return hourglasssvg
        }
        if (fetchDataStatus == "loading-ok") {
            return signaloksvg
        }
        if (fetchDataStatus == "loading-error") {
            return signalerrorsvg
        }
        if (fetchDataStatus == "loading-lost") {
            return signallostsvg
        }
        return "";
    }
    function getSrcPumpStatus(slave: number): string {
        if (slave == 1) {
            if (info.data.lastPackageData.coolingWater1 == false) {
                return imagePumpError;
            }
            if (info.data.lastPackageData.frequency1 > 0) {
                return imagePumpActive;
            } else {
                return imagePumpReady;
            }
        } else if (slave == 2) {
            if (info.data.lastPackageData.coolingWater2 == false) {
                return imagePumpError;
            }
            if (info.data.lastPackageData.frequency2 > 0) {
                return imagePumpActive;
            } else {
                return imagePumpReady;
            }
        }
        return "";
    }
    function getWaterPumpClass(slave: number): string {
        if (slave == 1) {
            if (info.data.lastPackageData.frequency1 > 0) {
                return "RotatePump";
            } else {
                return "";
            }
        } else if (slave == 2) {
            if (info.data.lastPackageData.frequency2 > 0) {
                return "RotatePump";
            } else {
                return "";
            }
        }
        return "";
    }
    function handleThrustpressure(event: any): void {

        let newValue = info.data.lastCommand.thrustPressure;//for secure reasons !!!!!!!
        let operation = event?.target?.getAttribute('data-operation');
        if (operation == '+') {
            newValue = parseFloat((info.data.lastCommand.thrustPressure + 0.1).toFixed(1));
        } else if (operation == '-') {
            newValue = parseFloat((info.data.lastCommand.thrustPressure - 0.1).toFixed(1));
        }
        console.log(newValue);
        sendCommand("auto-pressure", newValue, event);
    }
    function handleFrequency(event: any): void {
        let newValue = info.data.lastCommand.frequency;//for secure reasons !!!!!!!
        let operation = event?.target?.getAttribute('data-operation');

        if (operation == '+') {
            newValue = info.data.lastCommand.frequency + 1;
        } else if (operation == '-') {
            newValue = info.data.lastCommand.frequency - 1;
        }
        console.log(newValue);
        sendCommand("frequency", newValue, event);
    }
    function handleWorkPlan(event: any): void {
        let value = parseInt(((document.getElementById("work-plan") as HTMLInputElement).value));
        sendCommand("work-plan", value, event);
    }

    function handleOnChange(event: ChangeEvent<HTMLInputElement>): void {

    }

    function handleOnClickPower(): void {
        sendCommand("isActive", 0, null);
    }

    return (
        <React.Fragment>
            <div id="main-container" className="container-fluid">
                <div className="row">
                    <div className="sidebar col-md-3 col-lg-1 p-0">
                        <div className="offcanvas-md offcanvas-end" id="sidebarMenu"
                            aria-labelledby="sidebarMenuLabel">
                            <div className="offcanvas-header">
                                <span className="offcanvas-title" id="sidebarMenuLabel">سیستم کنترل هوشمند شرکت اتصال مکانیک</span>
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu"></button>
                            </div>
                            <div className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                                <ul className="nav flex-column">
                                    <li className="nav-item d-lg-none">
                                        <span className="d-flex gap-2" aria-current="page">
                                            <span className="mx-auto p-3">
                                                کاربر {userData.firstName + " " + userData.lastName}
                                            </span>
                                        </span>
                                    </li>
                                    <li className="nav-item" id="power-menu">
                                        <a id="isActive"
                                            className={"nav-link align-items-center gap-2 text-center " + (info.data.lastCommand.isActive ? "bg-danger" : "bg-success")}
                                            onClick={handleOnClickPower}>
                                            <img src={powersvg} height="30" width="30" />
                                            <span className="d-block text-white">{info.data.lastCommand.isActive ? "خاموش" : "روشن"}</span>
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link align-items-center gap-2 text-center" to='/'>
                                            <img src={homesvg} height="35" width="35" />
                                            <span className="d-block">مرکز کنترل</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link align-items-center gap-2 text-center" to="#">
                                            <img src={calendersvg} height="28" width="28" />
                                            <span className="d-block">برنامه روزانه</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link align-items-center gap-2 text-center" to="#">
                                            <img src={settingsvg} height="30" width="30" />
                                            <span className="d-block">تنظیمات</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link align-items-center gap-2 text-center" to="#">
                                            <img src={chartsvg} height="30" width="30" />
                                            <span className="d-block">گزارشات</span>
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link align-items-center gap-2 text-center" to="#">
                                            <img src={aboutsvg} height="30" width="30" />
                                            <span className="d-block">درباره نرم افزار</span>
                                        </NavLink>
                                    </li>
                                    <li id="exit-menu" className="nav-item">
                                        <LogoutLink className="nav-link align-items-center gap-2 text-center">
                                            <img src={exitsvg} height="30" width="30" />
                                            <span className="d-block">خروج</span>
                                        </LogoutLink>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>

                    <main id="main" className="col-md-9 ms-sm-auto col-lg-11 px-md-4">

                        <div id="package-wrapper">
                            <div className="card mt-1 mt-lg-3">
                                <div id="station-status-parent" className="card-header bg-success-subtle text-start">
                                    <span id="station-status">وضعیت کلی دستگاه : {info.data.message}</span>
                                    <img src={getLoadingIcon()} height="24" width="24" className="float-end" />
                                </div>
                                <div className="card-body row">
                                    <div className={"col-sm-12 " + (window.innerWidth <= 1440 ? "col-lg-3" : "col-lg-2")}>
                                        <div className="card" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                            <table className="fs-7 table table-borderless table-sm align-middle">
                                                <tbody>
                                                    <tr>
                                                        <td style={{ width: "32%" }} >
                                                            <label className="label-title">برنامه کاری</label>
                                                        </td>
                                                        <td>
                                                            {/* <WorkPlanSelect selectedValue={info.data.lastCommand.workPlan} onChange={sendCommand} />*/}
                                                            <select className="form-select form-select-sm fs-7"
                                                                id="work-plan"
                                                                defaultValue={info.data.lastCommand.workPlan}
                                                                onChange={handleWorkPlan}>
                                                                <option value="1" >برنامه روزانه</option>
                                                                <option value="2" >فشار اتوماتیک</option>
                                                                <option value="3" >کنترل دستی</option>
                                                            </select>
                                                        </td>
                                                        <td>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">کنترل فاز</label></td>
                                                        <td><label className={info.data.lastPackageData.phaseControl ?
                                                            "label-value bg-success-subtle w-100" :
                                                            "label-value bg-danger-subtle w-100 AnimationOpacity"}
                                                            id="phase-control">{info.data.lastPackageData.phaseControl ? "✔️" : "✖️"}</label>
                                                        </td>
                                                        <td>
                                                        </td>
                                                    </tr>
                                                    {/*<tr>*/}
                                                    {/*    <td><label className="label-title">پمپ تخلیه</label></td>*/}
                                                    {/*    <td>*/}
                                                    {/*        <label className="label-value w-100 " id="evacuation-pump">*/}
                                                    {/*            {info.data.lastPackageData ? "✔️" : "✖️"}*/}
                                                    {/*        </label>*/}
                                                    {/*    </td>*/}
                                                    {/*    <td>*/}
                                                    {/*    </td>*/}
                                                    {/*</tr>*/}
                                                    <tr>
                                                        <td><label className="label-title">آبگرفتگی</label></td>
                                                        <td><label className={info.data.lastPackageData ?
                                                            "label-value bg-success-subtle w-100" :
                                                            "label-value bg-danger-subtle w-100 AnimationOpacity"}
                                                            id="inundation">{info.data.lastPackageData.stationFlood ? "✔️" : "✖️"}</label>
                                                        </td>
                                                        <td>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">توان</label></td>
                                                        <td>
                                                            <label className="label-value w-100" id="power-consumed">
                                                                {info.data.lastPackageData.power1 + info.data.lastPackageData.power2}</label>
                                                        </td>
                                                        <td>
                                                            KW
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">دبی</label></td>
                                                        <td>
                                                            <label className="label-value w-100" id="flow">{info.data.lastPackageData.flow}</label>
                                                        </td>
                                                        <td>
                                                            L/S
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">بازده</label></td>
                                                        <td><label className="label-value w-100" id="efficiency">{info.data.package.efficiency}</label>  </td>
                                                        <td>
                                                            %
                                                        </td>
                                                    </tr>
                                                    <tr id="wraper-output-pressure" className={info.data.lastCommand.workPlan !== 1 ? "d-none" : ""}>
                                                        <td><label className="label-title">فشار رانش</label></td>
                                                        <td>
                                                            <div className="input-group input-group-sm w-100">
                                                                <input id="output-pressure-daily" type="number" className="form-control text-center" disabled
                                                                    value={info.data.dailyWorkPlans[new Date().getHours() - 1]?.thrustPressure || 0}
                                                                    onChange={handleOnChange} />
                                                            </div>
                                                        </td>
                                                        <td>
                                                            BAR
                                                        </td>
                                                    </tr>
                                                    <tr id="wraper-auto-pressure" className={info.data.lastCommand.workPlan !== 2 ? "d-none" : ""}>
                                                        <td><label className="label-title">فشار رانش</label></td>
                                                        <td>
                                                            <div className="input-group input-group-sm w-100">
                                                                <button className="input-group-text" data-operation="-" onClick={handleThrustpressure}>-</button>
                                                                <input id="auto-pressure" type="number"
                                                                    className="form-control" data-value="" onFocus={blureOnFocus}
                                                                    value={info.data.lastCommand.thrustPressure}
                                                                    onChange={handleOnChange} />
                                                                <button className="input-group-text" data-operation="+" onClick={handleThrustpressure}>+</button>
                                                                <label></label>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            BAR
                                                        </td>
                                                    </tr>
                                                    <tr id="wraper-frequency" className={info.data.lastCommand.workPlan !== 3 ? "d-none" : ""} >
                                                        <td><label className="label-title">فرکانس</label></td>
                                                        <td>
                                                            <div className="form-group">
                                                                <div className="input-group input-group-sm">
                                                                    <button className="input-group-text" data-operation="-" onClick={handleFrequency}>-</button>
                                                                    <input id="frequency" type="number" className="form-control" data-value=""
                                                                        onFocus={blureOnFocus}
                                                                        value={info.data.lastCommand.frequency}
                                                                        onChange={handleOnChange} />
                                                                    <button className="input-group-text" data-operation="+" onClick={handleFrequency}>+</button>
                                                                    <label></label>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            HZ
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 col-lg-8 text-center" id="image-package-parent">
                                        <img src={package2Image} className="img-fluid" draggable="false" id="image-package" />
                                        <img src={imageMakesh} id="image-makesh" className={info.data.lastPackageData.suctionWaterAvailable ? "" : "d-none"} />
                                        <img src={imageMakeshError} id="image-makesh-error" className={info.data.lastPackageData.suctionWaterAvailable ? "d-none" : ""} />
                                        <img src={imageRanesh} id="image-ranesh" className={getThrustWaterClass()} />

                                        <img src={imageMakeshArrow} id="image-makesh-arrow1" className={getMakeshArrowClass()} />
                                        <img src={imageMakeshArrow} id="image-makesh-arrow2" className={getMakeshArrowClass()} />

                                        <img src={imageRaneshArrow} id="image-ranesh-arrow1" className={getThrustArrowClass()} />
                                        <img src={imageRaneshArrow} id="image-ranesh-arrow2" className={getThrustArrowClass()} />

                                        <img src={imageWaterPump} id="image-water-pump1" className={getWaterPumpClass(1)} />
                                        <img src={imageWaterPump} id="image-water-pump2" className={getWaterPumpClass(2)} />

                                        <img src={getSrcPumpStatus(1)} id="image-pump-status1" />
                                        <img src={getSrcPumpStatus(2)} id="image-pump-status2" />

                                        <label id="run-time-pump1"> کارکرد پمپ 1 : {(info.data.lastPackageData.workingTime1 / 60).toFixed(1)}</label>
                                        <label id="run-time-pump2"> کارکرد پمپ 2 : {(info.data.lastPackageData.workingTime2 / 60).toFixed(1)}</label>

                                        <label id="label-input-pressure"> {info.data.lastPackageData.suctionPressure} Bar </label>
                                        <label id="label-output-pressure"> {info.data.lastPackageData.thrustPressure} Bar </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="pump-data-wrapper" className="mt-5">
                            <div className="row flex-row-reverse justify-content-center">
                                <div className="col-sm-12 col-lg-3">
                                    <div className="card mb-3 border-success">
                                        <div className="card-header text-center">
                                            پمپ شماره <span className="badge bg-success">1</span>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-sm table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td><label className="label-title">وضعیت </label></td>
                                                        <td>
                                                            <ToggleSwitch id={"pump-active1"} active={info.data.lastCommand.isActivePump1} commandMethod={sendCommand} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">فرکانس </label></td>
                                                        <td><label id="frequency-pump1" className="label-value">{info.data.lastPackageData.frequency1}</label> HZ </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">توان </label></td>
                                                        <td><label id="power-consumed-pump1" className="label-value">{info.data.lastPackageData.power1}</label> KW </td>
                                                    </tr>
                                                    {/*<tr>*/}
                                                    {/*    <td><label className="label-title">دبی </label></td>*/}
                                                    {/*    <td><label id="db-pump1" className="label-value">{info.data.lastPackageData.}</label> L/S </td>*/}
                                                    {/*</tr>*/}
                                                    <tr>
                                                        <td><label className="label-title">جریان </label></td>
                                                        <td><label id="current-pump1" className="label-value">{info.data.lastPackageData.current1}</label> A </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">زمان کل کارکرد </label></td>
                                                        <td><label id="TotalWorkingTime-pump1" className="label-value">
                                                            {(info.data.lastPackageData.totalWorkingTime1 / 60).toFixed(1)}
                                                        </label> H </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">خطای درایو </label></td>
                                                        <td>
                                                            <label id="Fault-pump1"
                                                                className={"label-value bg-danger-subtle " +
                                                                    (info.data.lastPackageData.fault1 != "0" ? "AnimationOpacity" : "")}>
                                                                {info.data.lastPackageData.fault1}
                                                            </label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-lg-3">
                                    <div className="card mb-3 border-success">
                                        <div className="card-header text-center">
                                            پمپ شماره <span className="badge bg-success">2</span>
                                        </div>
                                        <div className="card-body">
                                            <table className="table table-sm table-borderless">
                                                <tbody>
                                                    <tr>
                                                        <td><label className="label-title">وضعیت </label></td>
                                                        <td>
                                                            <ToggleSwitch id={"pump-active2"} active={info.data.lastCommand.isActivePump2} commandMethod={sendCommand} />
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">فرکانس </label></td>
                                                        <td><label id="frequency-pump2" className="label-value">{info.data.lastPackageData.frequency2}</label> HZ </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">توان </label></td>
                                                        <td><label id="power-consumed-pump2" className="label-value">{info.data.lastPackageData.power2}</label> KW </td>
                                                    </tr>
                                                    {/*<tr>*/}
                                                    {/*    <td><label className="label-title">دبی </label></td>*/}
                                                    {/*    <td><label id="db-pump2" className="label-value">0</label> L/S </td>*/}
                                                    {/*</tr>*/}
                                                    <tr>
                                                        <td><label className="label-title">جریان </label></td>
                                                        <td><label id="current-pump2" className="label-value">{info.data.lastPackageData.current2}</label> A </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">زمان کل کارکرد </label></td>
                                                        <td><label id="TotalWorkingTime-pump2" className="label-value">
                                                            {(info.data.lastPackageData.totalWorkingTime2 / 60).toFixed(1)}
                                                        </label> H </td>
                                                    </tr>
                                                    <tr>
                                                        <td><label className="label-title">خطای درایو </label></td>
                                                        <td>
                                                            <label id="Fault-pump2"
                                                                className={"label-value bg-danger-subtle " +
                                                                    (info.data.lastPackageData.fault2 != "0" ? "AnimationOpacity" : "")}>
                                                                {info.data.lastPackageData.fault2}
                                                            </label>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </main>
                </div>
            </div>


        </React.Fragment>
    )

};
export default package2;


