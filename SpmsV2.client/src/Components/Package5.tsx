import React, { useEffect } from "react";
import aboutsvg from '../assets/svg/about.svg';
import bellsvg from '../assets/svg/bell.svg';
import burgermenusvg from '../assets/svg/burger-menu.svg';
import calendersvg from '../assets/svg/calender.svg';
import chartsvg from '../assets/svg/chart.svg';
import exitsvg from '../assets/svg/exit.svg';
import homesvg from '../assets/svg/home.svg';
import hourglasssvg from '../assets/svg/hourglass.svg';
import passwordsvg from '../assets/svg/password.svg';
import powersvg from '../assets/svg/power.svg';
import refreshsvg from '../assets/svg/refresh.svg';
import settingsvg from '../assets/svg/setting.svg';
import signalerrorsvg from '../assets/svg/signal-error.svg';
import signallostsvg from '../assets/svg/signal-lost.svg';
import signaloksvg from '../assets/svg/signal-ok.svg';
import package5img from '../assets/image/Package5.png';




const package5 = () => {

    useEffect(() => {
        console.log('package5 - useEffect');
    });

    const handleOnFocus = () => {
        blur();
    };

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
                                                <select className="form-select form-select-sm fs-7" id="work-plan">
                                                    <option value="1">برنامه روزانه</option>
                                                    <option value="2">فشار اتوماتیک</option>
                                                    <option selected value="3">کنترل دستی</option>
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
                                                l/s
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
                                                    <div className="input-group-text" data-operation="-">-</div>
                                                    <input id="output-pressure" type="number" className="form-control" disabled />
                                                    <div className="input-group-text" data-operation="+">+</div>
                                                    <label></label>
                                                </div>
                                            </td>
                                            <td>
                                                Bar
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
                                                Bar
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
                        <div className="col-sm-12 col-lg-10 text-center">
                            <img src={package5img} className="img-fluid" />
                            <br />
                            <label id="suction-pressure" className="fs-6">1.1 Bar</label>
                            <label id="thrust-pressure" className="fs-6">16 Bar</label>
                            <label id="work-pump1">کارکرد پمپ 1 : 12121.2 ساعت</label>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />

            <div id="pump-data-wrapper">
                <div className="row">
                    <div className="col">
                        <div className="card mb-3 border-success">
                            <div className="card-header text-center">
                                پمپ شماره <span className="badge bg-success">5</span>
                            </div>
                            <div className="card-body">
                                <table className="table table-sm table-borderless">
                                    <tbody>
                                        <tr>
                                            <td><label className="label-title">وضعیت </label></td>
                                            <td>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
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
                    <div className="col">
                        <div className="card mb-3 border-success">
                            <div className="card-header text-center">
                                پمپ شماره <span className="badge bg-success">4</span>
                            </div>
                            <div className="card-body">
                                <table className="table table-sm table-borderless">
                                    <tbody>
                                        <tr>
                                            <td><label className="label-title">وضعیت </label></td>
                                            <td>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
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
                    <div className="col">
                        <div className="card mb-3 border-success">
                            <div className="card-header text-center">
                                پمپ شماره <span className="badge bg-success">3</span>
                            </div>
                            <div className="card-body">
                                <table className="table table-sm table-borderless">
                                    <tbody>
                                        <tr>
                                            <td><label className="label-title">وضعیت </label></td>
                                            <td>
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
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
                    <div className="col">
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
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
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
                    <div className="col">
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
                                                <label className="switch">
                                                    <input type="checkbox" />
                                                    <span className="slider round"></span>
                                                </label>
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

}
export default package5;