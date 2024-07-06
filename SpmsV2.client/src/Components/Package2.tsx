import React, { ChangeEvent, memo, useEffect } from "react";
import hourglasssvg from '../assets/svg/hourglass.svg';
import signalerrorsvg from '../assets/svg/signal-error.svg';
import signallostsvg from '../assets/svg/signal-lost.svg';
import signaloksvg from '../assets/svg/signal-ok.svg';
import package2img from '../assets/image/package2.png';
import ToggleSwitch from "./ToggleSwitch";




const package5 = memo(() => {

    useEffect(() => {
        //console.log('package5 - useEffect');
    });
    function handleOnFocus(e: ChangeEvent<HTMLInputElement>) {
        e.target.blur();
    }


    return (
        <React.Fragment>
            <div id="package-wrapper">
                <div className="card mt-1 mt-lg-3">
                    <div className="card-header bg-success-subtle text-start">
                        <span id="station-status">وضعیت کلی دستگاه : </span>
                        <img id="connection-status-signal-ok" src={signaloksvg} height="24" width="24" className="float-end" />
                        <img id="connection-status-signal-lost" src={signallostsvg} height="24" width="24" className="float-end" />
                        <img id="connection-status-signal-error" src={signalerrorsvg} height="24" width="24" className="float-end" />
                        <img id="connection-status-hourglass" src={hourglasssvg} height="24" width="24" className="float-end" />
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
                                                <select className="form-select form-select-sm fs-7" id="work-plan" defaultValue="3">
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
                                            <td><label className="label-value bg-success-subtle w-100" id="power-control">✔️</label></td>
                                            <td>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">پمپ تخلیه</label></td>
                                            <td><label className="label-value w-100" id="evacuation-pump">---</label></td>
                                            <td>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">آبگرفتگی</label></td>
                                            <td><label className="label-value bg-success-subtle w-100" id="inundation">✔️</label></td>
                                            <td>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">توان</label></td>
                                            <td><label className="label-value w-100" id="power-consumed">0.0</label>  </td>
                                            <td>
                                                KW
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">دبی</label></td>
                                            <td><label className="label-value w-100" id="db">0.0</label>  </td>
                                            <td>
                                                L/S
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">بازده</label></td>
                                            <td><label className="label-value w-100" id="efficiency">62.0</label>  </td>
                                            <td>
                                                %
                                            </td>
                                        </tr>
                                        <tr id="wraper-output-pressure">
                                            <td><label className="label-title">فشار رانش</label></td>
                                            <td>
                                                <div className="input-group input-group-sm w-100">
                                                    <input id="output-pressure" type="number" className="form-control" disabled />
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
                                                    <input id="auto-pressure" type="number" className="form-control" data-value="" onFocus={handleOnFocus} />
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
                                                        <input id="frequency" type="number" className="form-control" data-value="" onFocus={handleOnFocus} />
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
                        <div className="col-sm-12 col-lg-8 text-center">
                            <img src={package2img} className="img-fluid" draggable="false" id="image-package" />
                            <img src="/Images/makesh.png" id="image-makesh" style={{display: "none"}} />
                            <img src="/Images/makesh-error.png" id="image-makesh-error" style={{display: "none"}} />
                            <img src="/Images/ranesh.png" id="image-ranesh" style={{ display: "none" }} />

                            <img src="/Images/makesh-arrow.png" id="image-makesh-arrow1" />
                            <img src="/Images/makesh-arrow.png" id="image-makesh-arrow2" />
                            <img src="/Images/makesh-arrow.png" id="image-makesh-arrow3" />

                            <img src="/Images/water-pump.png" id="image-water-pump1" />
                            <img src="/Images/water-pump.png" id="image-water-pump2" />
                           
                            <img src="/Images/pump-active.png" id="image-pump1-active" style={{display: "none"}} />
                            <img src="/Images/pump-active.png" id="image-pump2-active" style={{display: "none"}} />
                            
                            <img src="/Images/ranesh-arrow.png" id="image-ranesh-arrow1" />
                            <img src="/Images/ranesh-arrow.png" id="image-ranesh-arrow2" />

                            <img src="/Images/pipe-error.png" id="image-pipe-error1" style={{display: "none"}} />
                            <img src="/Images/pipe-error.png" id="image-pipe-error2" style={{display: "none"}} />
                            
                            <img src="/Images/pipe.png" id="image-pipe1" style={{display: "none"}} />
                            <img src="/Images/pipe.png" id="image-pipe2" style={{display: "none"}} />
                            
                            <label id="pump1-run-time"> کارکرد پمپ 1 : </label>
                            <label id="pump2-run-time"> کارکرد پمپ 2 : </label>
                            
                            <label id="label-input-presure"> 0.0 Bar </label>
                            <label id="label-output-presure"> 0.0 Bar </label>
                        </div>
                    </div>
                </div>
            </div>
            {/*<br />*/}
            {/*<br />*/}

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
                                                <ToggleSwitch id={"pumpactive1"} active={false} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">فرکانس </label></td>
                                            <td><label id="frequency-pump2" className="label-value">0</label> HZ </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">توان </label></td>
                                            <td><label id="power-consumed-pump2" className="label-value">0</label> KW </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">دبی </label></td>
                                            <td><label id="db-pump2" className="label-value">0</label> L/S </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">جریان </label></td>
                                            <td><label id="current-pump2" className="label-value">0</label> A </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">زمان کل کارکرد </label></td>
                                            <td><label id="TotalWorkingTime-pump2" className="label-value">0.3</label> H </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">خطای درایو </label></td>
                                            <td><label id="Fault-pump2" className="label-value bg-danger-subtle AnimationOpacity">6</label></td>
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
                                                <ToggleSwitch id={"pumpactive2"} active={false} />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">فرکانس </label></td>
                                            <td><label id="frequency-pump2" className="label-value">0</label> HZ </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">توان </label></td>
                                            <td><label id="power-consumed-pump2" className="label-value">0</label> KW </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">دبی </label></td>
                                            <td><label id="db-pump2" className="label-value">0</label> L/S </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">جریان </label></td>
                                            <td><label id="current-pump2" className="label-value">0</label> A </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">زمان کل کارکرد </label></td>
                                            <td><label id="TotalWorkingTime-pump2" className="label-value">0.3</label> H </td>
                                        </tr>
                                        <tr>
                                            <td><label className="label-title">خطای درایو </label></td>
                                            <td><label id="Fault-pump2" className="label-value bg-danger-subtle AnimationOpacity">6</label></td>
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

});
export default package5;