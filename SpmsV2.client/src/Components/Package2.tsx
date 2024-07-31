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
import '../assets/css/package2.css';
import { useInterval } from "react-use";


const package2 = () => {

    const [fetchDataStatus, setfetchDataStatus] = useState("");
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
                driveConnection1: false,
                coolingWater1: false,
                frequency1: 0,
                power1: 0,
                current1: 0,
                fault1: "0",
                pumpOutputPressure1: 0,
                coolingWaterTemprature1: 0,
                driveConnection2: false,
                coolingWater2: false,
                frequency2: 0,
                power2: 0,
                current2: 0,
                fault2: "0",
                pumpOutputPressure2: 0,
                coolingWaterTemprature2: 0,
                phaseControl: false,
                stationFlood: false,
                suctionPressure: 0,
                thrustPressure: 0,
                flow: 0

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
                fromScada: false
            },
            message: ""
        }

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
                    info.data.dailyWorkPlans = response.data.dailyWorkPlans;
                    info.data.pumps = response.data.pumps;
                    info.data.drives = response.data.drives;

                    console.log();

                }).catch(error => {
                    setfetchDataStatus("loading-error");
                    console.error('Fetch error:', error);
                });
        }, 700);
        return () => clearInterval(interval);
    }, []);


    function getDailyThrustPressure() {
        //const date = new Date();
        //const houre = date.getHours();
        const plan = info.data.dailyWorkPlans[new Date().getHours()];
        console.log(plan);
        return 1;
    }
    function blureOnFocus(e: ChangeEvent<HTMLInputElement>) {
        e.target.blur();
    }

    function handleWorkPlanChange(event: ChangeEvent<HTMLSelectElement>): void {
        throw new Error("Function not implemented.");
    }

    function getLoadingIcon() {
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
    }

    return (
        <React.Fragment>
            <div id="package-wrapper">
                <div className="card mt-1 mt-lg-3">
                    <div id="station-status-parent" className="card-header bg-success-subtle text-start">
                        <span id="station-status">وضعیت کلی دستگاه : {info.data.message}</span>
                        <img src={getLoadingIcon()} height="24" width="24" className="float-end" />
                    </div>
                    <div className="card-body row">
                        <div className="col-sm-12 col-lg-2">
                            <div className="card" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "15px" }}>
                                <table className="fs-7 table table-borderless table-sm align-middle">
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "32%" }} >
                                                <label className="label-title">برنامه کاری</label>
                                            </td>
                                            <td>
                                                <select className="form-select form-select-sm fs-7"
                                                    id="work-plan"
                                                    defaultValue={2}
                                                    onChange={handleWorkPlanChange}   >
                                                    <option value="1">برنامه روزانه</option>
                                                    <option value="2">فشار اتوماتیک</option>
                                                    <option value="3">کنترل دستی</option>
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
                                        <tr id="wraper-output-pressure">
                                            <td><label className="label-title">فشار رانش</label></td>
                                            <td>
                                                <div className="input-group input-group-sm w-100">
                                                    <input id="output-pressure-daily" type="number" className="form-control text-center" disabled
                                                        value={info.data.dailyWorkPlans[new Date().getHours()].thrustPressure} />
                                                </div>
                                            </td>
                                            <td>
                                                BAR
                                            </td>
                                        </tr>
                                        <tr id="wraper-auto-pressure">
                                            <td><label className="label-title">فشار رانش</label></td>
                                            <td>
                                                <div className="input-group input-group-sm w-100">
                                                    <div className="input-group-text" data-operation="-">-</div>
                                                    <input id="auto-pressure" type="number" className="form-control" data-value="" onFocus={blureOnFocus} />
                                                    <div className="input-group-text" data-operation="+">+</div>
                                                    <label></label>
                                                </div>
                                            </td>
                                            <td>
                                                BAR
                                            </td>
                                        </tr>
                                        <tr id="wraper-frequency">
                                            <td><label className="label-title">فرکانس</label></td>
                                            <td>
                                                <div className="form-group">
                                                    <div className="input-group input-group-sm">
                                                        <div className="input-group-text" data-operation="-">-</div>
                                                        <input id="frequency" type="number" className="form-control" data-value="" onFocus={blureOnFocus} />
                                                        <div className="input-group-text" data-operation="+">+</div>
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
                            <img src={imageMakesh} id="image-makesh" />
                            <img src={imageMakeshError} id="image-makesh-error" style={{ display: "none" }} />
                            <img src={imageRanesh} id="image-ranesh" />

                            <img src={imageMakeshArrow} id="image-makesh-arrow1" />
                            <img src={imageMakeshArrow} id="image-makesh-arrow2" />

                            <img src={imageRaneshArrow} id="image-ranesh-arrow1" />
                            <img src={imageRaneshArrow} id="image-ranesh-arrow2" />

                            <img src={imageWaterPump} id="image-water-pump1" />
                            <img src={imageWaterPump} id="image-water-pump2" />

                            <img src={imagePumpActive} id="image-pump-active1" />
                            <img src={imagePumpActive} id="image-pump-active2" />

                            <img src={imagePumpError} id="image-pump-error1" style={{ display: "none" }} />
                            <img src={imagePumpError} id="image-pump-error2" style={{ display: "none" }} />

                            <img src={imagePumpReady} id="image-pump-ready1" style={{ display: "none" }} />
                            <img src={imagePumpReady} id="image-pump-ready2" style={{ display: "none" }} />

                            <label id="run-time-pump1"> کارکرد پمپ 1 : </label>
                            <label id="run-time-pump2"> کارکرد پمپ 2 : </label>

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
                                                <ToggleSwitch id={"pumpactive1"} active={info.data.lastCommand.isActivePump1} />
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
                                            <td><label id="TotalWorkingTime-pump1" className="label-value">0.3</label> H </td>
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
                                                <ToggleSwitch id={"pumpactive2"} active={info.data.lastCommand.isActivePump2} />
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
                                            <td><label id="TotalWorkingTime-pump2" className="label-value">0.3</label> H </td>
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
        </React.Fragment>
    )

};
export default package2;